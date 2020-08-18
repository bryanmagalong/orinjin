<?php

namespace App\Controller;

use App\Entity\ServiceCategory;
use App\Manager\ServiceCategoryManager;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class ServiceCategoryController extends AbstractController
{
    private $serviceCategoryManager;

    public function __construct(ServiceCategoryManager $serviceCategoryManager)
    {
        $this->serviceCategoryManager = $serviceCategoryManager;
    }

    /**
     * @Route(
     *      "/api/service-categories",
     *      name="api_service_category_browse",  
     *      methods={"GET"}
     * )
     */
    public function browse(): Response
    {
        $serviceCategories = $this->serviceCategoryManager->browse();

        $serviceCategories = $this->serviceCategoryManager->serialize($serviceCategories, ['groups' => 'service-categories']);

        return new Response($serviceCategories);
    }

    /** 
     * @Route(
     *      "/api/service-categories/{id}", 
     *      name="api_service_category_read",  
     *      methods={"GET"}, 
     *      requirements={"id"="\d+"}
     * )
     */
    public function read(ServiceCategory $serviceCategory): Response
    {
        $serviceCategory = $this->serviceCategoryManager->serialize($serviceCategory, ['groups' => 'service-categories']);

        return new Response($serviceCategory);
    }

    /**
     * @Route(
     *      "/api/service-categories", 
     *      name="api_service_category_add",  
     *      methods={"POST"}
     * )
     * 
     * @IsGranted("ROLE_MODO", message="No access!")
     */
    public function add(Request $request): Response
    {
        $data = $request->getContent();
        $serviceCategory = $this->serviceCategoryManager->create($data);
        $serviceCategory = $this->serviceCategoryManager->serialize($serviceCategory, ['groups' => 'service-categories']);

        return new Response($serviceCategory);
    }

    /**
     * @Route(
     *      "/api/service-categories/{id}",
     *      name="api_service_category_edit",
     *      methods={"PUT"},
     *      requirements={"id"="\d+"}
     * )
     * 
     * @IsGranted("ROLE_MODO", message="No access!")
     */
    public function edit(Request $request, ServiceCategory $serviceCategory): Response
    {
        // $this->denyAccessUnlessGranted(ServiceCategoryVoter::BACK_OFFICE, $serviceCategory);

        $data = $request->getContent();
        $serviceCategory = $this->serviceCategoryManager->update($serviceCategory, $data);
        $serviceCategory = $this->serviceCategoryManager->serialize($serviceCategory, ['groups' => 'service-categories']);

        return new Response($serviceCategory);
    }

    /**
     * @Route(
     *     "/api/service-categories/{id}",
     *     name="api_service_category_delete",
     *     methods={"DELETE"},
     *     requirements={"id"="\d+"}
     * )
     * @param int $id
     *
     * @return JsonResponse
     * 
     * @IsGranted("ROLE_ADMIN", message="No access!")
     */
    public function delete(ServiceCategory $serviceCategory): JsonResponse
    {
        // $this->denyAccessUnlessGranted(ServiceCategoryVoter::BACK_OFFICE, $serviceCategory);

        $this->serviceCategoryManager->delete($serviceCategory);

        return new JsonResponse(
            null,
            JsonResponse::HTTP_NO_CONTENT
        );
    }
}
