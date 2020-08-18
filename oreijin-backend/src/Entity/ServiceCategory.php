<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Gedmo\Timestampable\Traits\TimestampableEntity;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass="App\Repository\ServiceCategoryRepository")
 */
class ServiceCategory
{
    use TimestampableEntity;
    
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     * @Groups({"service-categories", "services-read", "services-browse"})
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=60)
     * @Groups({"service-categories", "services-browse"})
     */
    private $title;

    /**
     * @ORM\Column(type="string", length=150)
     * @Groups("service-categories")
     */
    private $slug;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Service", mappedBy="serviceCategory", orphanRemoval=true)
     * @Groups("service-categories")
     */
    private $services;

    public function __construct()
    {
        $this->services = new ArrayCollection();
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

    public function getSlug(): ?string
    {
        return $this->slug;
    }

    public function setSlug(string $slug): self
    {
        $this->slug = $slug;

        return $this;
    }

    public function setUpdatedAt(?\DateTimeInterface $updatedAt): self
    {
        $this->updatedAt = $updatedAt;

        return $this;
    }

    /**
     * @return Collection|Service[]
     */
    public function getServices(): Collection
    {
        return $this->services;
    }

    public function addService(Service $service): self
    {
        if (!$this->services->contains($service)) {
            $this->services[] = $service;
            $service->setServiceCategory($this);
        }

        return $this;
    }

    public function removeService(Service $service): self
    {
        if ($this->services->contains($service)) {
            $this->services->removeElement($service);
            // set the owning side to null (unless already changed)
            if ($service->getServiceCategory() === $this) {
                $service->setServiceCategory(null);
            }
        }

        return $this;
    }
}
