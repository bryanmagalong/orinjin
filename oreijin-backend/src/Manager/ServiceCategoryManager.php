<?php

namespace App\Manager;

use App\Entity\ServiceCategory;
use App\Repository\ServiceCategoryRepository;

class ServiceCategoryManager extends AbstractManager
{
    public function browse(): array
    {
        return $this->getRepository()->findAll();
    }

    public function create(string $data)
    {
        return $this->save(new ServiceCategory(), $data, []);
    }

    public function update(ServiceCategory $serviceCategory, string $data)
    {
        return $this->save($serviceCategory, $data, []);
    }

    private function getRepository(): ServiceCategoryRepository
    {
        return $this->entityManager->getRepository(ServiceCategory::class);
    }
}
