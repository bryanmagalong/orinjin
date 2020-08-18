<?php

namespace App\Manager;

use App\Entity\Service;
use App\Repository\ServiceRepository;

class ServiceManager extends AbstractManager
{
    public function home(): array
    {
        return $this->getRepository()->findBy([], ['createdAt' => 'desc'], 3);
    }

    public function getByUser($userId): array
    {
        return $this->getRepository()->findBy(['user' => $userId], ['createdAt' => 'desc']);
    }

    public function getByPostalCode($postalcode):array
    {
        return $this->getRepository()->findByPostalCode($postalcode);
    }

    public function browse(): array
    {
        return $this->getRepository()->findAll();
    }

    public function create(string $data)
    {
        return $this->save(new Service(), $data, []);
    }

    public function update(Service $service, string $data)
    {
        return $this->save($service, $data, []);
    }

    private function getRepository(): ServiceRepository
    {
        return $this->entityManager->getRepository(Service::class);
    }
}
