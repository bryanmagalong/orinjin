<?php

namespace App\Listener;

use App\Exception\ValidatorException;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpKernel\Event\ExceptionEvent;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class ExceptionListener
{
    public function onKernelException(ExceptionEvent $event)
    {
        $exception = $event->getThrowable();
        $message = ['message' => $exception->getMessage()];

        switch(true){
            case $exception instanceof ValidatorException:
                $message['errors'] = $exception->getErrors();
            break;
            // case $exception instanceof NotFoundHttpException:
            //     $message['message'] = 'not found';
            // break;
            default:
            return;
        }

        $response = new JsonResponse($message);

        $event->setResponse($response);
    }
}
