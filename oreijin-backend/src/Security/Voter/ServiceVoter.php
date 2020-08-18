<?php

namespace App\Security\Voter;

use App\Entity\Service;
use App\Entity\User;
use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;
use Symfony\Component\Security\Core\Authorization\Voter\Voter;
use Symfony\Component\Security\Core\Security;
use Symfony\Component\Security\Core\User\UserInterface;

class ServiceVoter extends Voter
{
    private $security;

    public function __construct(Security $security)
    {
        $this->security = $security;
    }

     protected function supports($attribute, $subject)
     {
         if (!in_array($attribute, [UserVoter::SAME_USER])) {
             return false;
         }
 
         if (!$subject instanceof Service) {
             return false;
         }
 
         return true;
     }
 
     protected function voteOnAttribute($attribute, $subject, TokenInterface $token)
     {
         $user = $token->getUser();
         if (!$user instanceof UserInterface) {
             return false;
         }
 
         switch ($attribute) {
             case UserVoter::SAME_USER:
                return
                     $subject->getUser() === $user
                     || $this->security->isGranted('ROLE_ADMIN')
                     || $this->security->isGranted('ROLE_MODO');
         }
 
         return false;
     }
}
