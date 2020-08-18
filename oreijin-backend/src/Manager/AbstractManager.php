<?php

namespace App\Manager;

use App\Exception\ValidatorException;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;
use Symfony\Component\Serializer\Normalizer\AbstractNormalizer;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;

abstract class AbstractManager
{

    /**
     * @var EntityManagerInterface
     */
    protected $entityManager;

    /**
     * @var SerializerInterface
     */
    private $serializer;

    /**
     * @var ValidatorInterface
     */
    private $validator;

    public function __construct(SerializerInterface $serializer, EntityManagerInterface $entityManager, ValidatorInterface $validator)
    {
        $this->serializer = $serializer;
        $this->entityManager = $entityManager;
        $this->validator = $validator;
    }

    public function delete(object $entity): void
    {
        $this->entityManager->remove($entity);
        $this->entityManager->flush();
    }

    public function serialize($data, array $context = []): string
    {
        return $this->serializer->serialize($data, 'json', $context);
    }

    protected function save(object $entity, string $data, array $validationGroups = [], array $deserializeContext = []): object
    {
        $this->deserialize($data, $entity, $deserializeContext);
        $this->validate($entity, $validationGroups);
        
        $this->entityManager->persist($entity);
        $this->entityManager->flush();

        return $entity;
    }

    protected function deserialize(string $data, object $entity, array $deserializeContext = []): void
    {
        $this->serializer->deserialize($data, get_class($entity), 'json', array_merge([
            AbstractNormalizer::OBJECT_TO_POPULATE => $entity,
        ], $deserializeContext));
    }

    protected function validate(object $entity, array $groups = []): void
    {
        $errors = $this->validator->validate($entity, null, $groups);

        if (count($errors) > 0) {
            // TODO: A refactoriser pour retourner une liste d'erreurs au format ...
            $errorsString = (string) $errors;

            throw new ValidatorException($errors);
        }
    }
}
