<?php

namespace App\EventListener;

use Lexik\Bundle\JWTAuthenticationBundle\Event\JWTCreatedEvent;
use Symfony\Component\Finder\Exception\AccessDeniedException;
use Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorageInterface;
use Symfony\Component\Security\Core\User\UserInterface;

class JWTCreatedListener{

    private $tokenStorage;

    public function __construct(TokenStorageInterface $tokenStorage)
    {
        $this->tokenStorage = $tokenStorage;
    }
    
    /**
     * @param JWTCreatedEvent $event
     * @return void
     */
    public function onJWTCreated(JWTCreatedEvent $event)
    {
        if (!$token = $this->tokenStorage->getToken()) {
            throw new AccessDeniedException();
        }

        $user = $token->getUser();
        
        if (!$user instanceof UserInterface) {
            throw new AccessDeniedException();
        }
        
        $payload       = $event->getData();
        
        $payload['id'] = $user->getId();
        $payload['firstname'] = $user->getFirstName();
        $payload['lastname'] = $user->getLastName();
        $payload['address'] = $user->getAddress();
        $payload['city'] = $user->getCity();
        $payload['postalcode'] = $user->getPostalCode();
        $payload['latitude'] = $user->getLatitude();
        $payload['longitude'] = $user->getLongitude();
        $payload['avatar'] = $user->getAvatar();


        // unset($payload['roles']);

        $event->setData($payload);
    }
}