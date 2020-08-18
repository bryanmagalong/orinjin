<?php

namespace App\Manager;

use App\Entity\Comment;
use App\Repository\CommentRepository;

class CommentManager extends AbstractManager
{
    public function browse(): array
    {
        return $this->getRepository()->findAll();
    }

    public function create(string $data)
    {
        return $this->save(new Comment(), $data, []);
    }

    public function update(Comment $comment, string $data)
    {
        return $this->save($comment, $data, []);
    }

    private function getRepository(): CommentRepository
    {
        return $this->entityManager->getRepository(Comment::class);
    }
}
