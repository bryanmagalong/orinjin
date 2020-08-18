<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Gedmo\Timestampable\Traits\TimestampableEntity;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass="App\Repository\ServiceRepository")
 */
class Service
{
    use TimestampableEntity;

    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     * @Groups({"services-list", "services-read", "service-add", "service-edit", "services-browse", "comments-browse"})
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=60)
     * @Groups({"services-list", "services-read", "service-add", "service-edit", "services-browse"})
     */
    private $title;

    /**
     * @ORM\Column(type="text")
     * @Groups({"services-list", "services-read", "service-add", "service-edit", "services-browse"})
     */
    private $body;

    /**
     * @ORM\Column(type="boolean")
     * @Groups({"services-list", "services-read", "service-add", "service-edit", "services-browse"})
     */
    private $type;

    /**
     * @ORM\Column(type="string", length=250, nullable=true)
     * @Groups({"services-list", "services-read", "service-add", "service-edit", "services-browse"})
     */
    private $image;

    /**
     * @ORM\Column(type="boolean")
     * @Groups({"services-list", "services-read", "service-add", "service-edit", "services-browse"})
     */
    private $active;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\User", inversedBy="service")
     * @ORM\JoinColumn(nullable=false)
     * @Groups({"services-read", "services-browse"})
     */
    private $user;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Comment", mappedBy="service", orphanRemoval=true)
     * @Groups("services-read")
     */
    private $comment;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\ServiceCategory", inversedBy="services")
     * @ORM\JoinColumn(nullable=false)
     * @Groups({"services-read", "services-browse"})
     */
    private $serviceCategory;

    public function __construct()
    {
        $this->comment = new ArrayCollection();
    }

    public function __toString()
    {
        return $this->title;
    }


    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): self
    {
        $this->title = $title;

        return $this;
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

    public function getType(): ?bool
    {
        return $this->type;
    }

    public function setType(bool $type): self
    {
        $this->type = $type;

        return $this;
    }

    public function getImage(): ?string
    {
        return $this->image;
    }

    public function setImage(string $image): self
    {
        $this->image = $image;

        return $this;
    }

    public function getActive(): ?bool
    {
        return $this->active;
    }

    public function setActive(bool $active): self
    {
        $this->active = $active;

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

    /**
     * @return Collection|Comment[]
     */
    public function getComment(): Collection
    {
        return $this->comment;
    }

    public function addComment(Comment $comment): self
    {
        if (!$this->comment->contains($comment)) {
            $this->comment[] = $comment;
            $comment->setService($this);
        }

        return $this;
    }

    public function removeComment(Comment $comment): self
    {
        if ($this->comment->contains($comment)) {
            $this->comment->removeElement($comment);
            // set the owning side to null (unless already changed)
            if ($comment->getService() === $this) {
                $comment->setService(null);
            }
        }

        return $this;
    }

    public function getServiceCategory(): ?ServiceCategory
    {
        return $this->serviceCategory;
    }

    public function setServiceCategory(?ServiceCategory $serviceCategory): self
    {
        $this->serviceCategory = $serviceCategory;

        return $this;
    }
}
