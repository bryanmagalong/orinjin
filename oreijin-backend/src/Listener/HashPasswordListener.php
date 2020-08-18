<?php

namespace App\Listener;

use App\Entity\User;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Doctrine\Common\EventSubscriber;
use Doctrine\ORM\Events;
use Doctrine\Persistence\Event\LifecycleEventArgs;

class HashPasswordListener implements EventSubscriber
{
    private $userPasswordEncoder;

    public function __construct(UserPasswordEncoderInterface $userPasswordEncoder)
    {
        $this->userPasswordEncoder = $userPasswordEncoder;
    }

    public function getSubscribedEvents()
    {
        return [
            Events::prePersist,
            Events::preUpdate,
        ];
    }

    public function prePersist(LifecycleEventArgs $args)
    {
        $this->encodePassword($args->getEntity());
    }

    public function preUpdate(LifecycleEventArgs $args)
    {
        $this->encodePassword($args->getEntity());
    }
    
    private function encodePassword($user)
    {
        if (!$user instanceof User) {
            return;
        }

        if (!$user->getPlainPassword()) {
            return;
        }

        $encoded = $this->userPasswordEncoder->encodePassword(
            $user,
            $user->getPlainPassword()
        );

        $user->setPassword($encoded);
    }

}