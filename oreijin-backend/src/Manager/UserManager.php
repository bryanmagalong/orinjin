<?php

namespace App\Manager;

use App\Entity\User;
use App\Repository\UserRepository;
use Symfony\Component\Serializer\Normalizer\AbstractNormalizer;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Email;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;

class UserManager extends AbstractManager {

    private const IGNORED_ATTRIBUTES = [
        AbstractNormalizer::IGNORED_ATTRIBUTES => [
            'password',
        ]
    ];

    public function browse(): array
    {
        return $this->getRepository()->findAll();
    }

    public function home(): array
    {
        $user = $this->getRepository(User::class)->findAll();
        
        return $this->getRepository()->findBy([], [], 6);
    }

    public function create(string $data, MailerInterface $mailer)
    {   
        $entity = $this->save(new User(), $data, [
            'Default',
            'register',
        ], self::IGNORED_ATTRIBUTES);
        
        $email = (new Email())
        ->from('inscriptionorinjin@gmail.com')
        ->to($entity->getEmail())
        ->subject('O Rinjin : confirmation de votre inscription')
        ->text('Vous voilà inscrit!');
        $mailer->send($email);

        return $entity;
        
    }

    public function update(User $user, string $data)
    {
        return $this->save($user, $data, [], self::IGNORED_ATTRIBUTES);
    }

    private function getRepository(): UserRepository
    {
        return $this->entityManager->getRepository(User::class);
    }
}