<?php

namespace App\Normalizer;

use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Serializer\Normalizer\ContextAwareDenormalizerInterface;

class EntityNormalizer implements ContextAwareDenormalizerInterface
{
    private $entityManager;

    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;
    }

    public function supportsDenormalization($data, string $type, string $format = null, array $context = [])
    {
        return (strpos($type, 'App\\Entity\\') === 0) && 
        (is_numeric($data) || is_string($data) || (is_array($data) && isset($data['id'])));
    }

    public function denormalize($data, $class, $format = null, array $context = [])
    {
        return $this->entityManager->find($class, $data);
    }
}
