<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Gedmo\Timestampable\Traits\TimestampableEntity;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass="App\Repository\CommentRepository")
 */
class Comment
{
    use TimestampableEntity;

    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     * @Groups({"comments-browse", "comment-read", "comment-add", "comment-edit", "services-read"})
     */
    private $id;

    /**
     * @ORM\Column(type="text")
     * @Groups({"comments-browse", "comment-read", "comment-add", "comment-edit", "services-read"})
     */
    private $body;

    /**
     * @ORM\Column(type="boolean")
     * @Groups({"comments-browse", "comment-read", "comment-add", "comment-edit", "services-read"})
     */
    private $isBlocked;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\User", inversedBy="comment")
     * @ORM\JoinColumn(nullable=false)
     * @Groups("services-read")
     */
    private $user;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Service", inversedBy="comment")
     * @ORM\JoinColumn(nullable=false)
     * @Groups("comments-browse")
     */
    private $service;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getBody(): ?string
    {
        return $this->body;
    }

    public function setBody(string $body): self
    {
        $this->body = $body;

        return $this;
    }

    public function getIsBlocked(): ?bool
    {
        return $this->isBlocked;
    }

    public function setIsBlocked(bool $isBlocked): self
    {
        $this->isBlocked = $isBlocked;

        return $this;
    }

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): self
    {
        $this->user = $user;

        return $this;
    }

    public function getService(): ?Service
    {
        return $this->service;
    }

    public function setService(?Service $service): self
    {
        $this->service = $service;

        return $this;
    }

    public function __toString()
    {
        return $this->body;
    }
}
