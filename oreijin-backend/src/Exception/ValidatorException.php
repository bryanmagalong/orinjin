<?php

namespace App\Exception;

use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;
use Symfony\Component\Validator\ConstraintViolationListInterface;

class ValidatorException extends BadRequestHttpException {

    private $constraintViolationList;

    public function __construct(ConstraintViolationListInterface $constraintViolationList)
    {
        parent::__construct('Validation failed');
        $this->constraintViolationList = $constraintViolationList;
    }

    public function getErrors(): array
    {
        $errors = [];

        foreach($this->constraintViolationList as $constraintViolation) {
            $errors[] = [
                'property' => (string) $constraintViolation->getPropertyPath(),
                'message' => $constraintViolation->getMessage()
            ];
        }

        return $errors;
    }
}