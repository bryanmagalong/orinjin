<?php

namespace App\Controller;

use App\Entity\Comment;
use App\Manager\CommentManager;
use App\Security\Voter\UserVoter;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class CommentController extends AbstractController
{
    private $commentManager;

    public function __construct(CommentManager $commentManager)
    {
        $this->commentManager = $commentManager;
    }

    /**
     * @Route(
     *      "/api/comments",
     *      name="browse_comments",  
     *      methods={"GET"}
     * )
     */
    public function browse(): Response
    {
        $comments = $this->commentManager->browse();

        $comments = $this->commentManager->serialize($comments, ['groups' => 'comments-browse']);

        return new Response($comments);
    }

    /** 
     * @Route(
     *      "/api/comments/{id}", 
     *      name="read_comment",  
     *      methods={"GET"}, 
     *      requirements={"id"="\d+"}
     * )
     */
    public function read(Comment $comment): Response
    {
        $comment = $this->commentManager->serialize($comment, ['groups' => 'comment-read']);

        return new Response($comment);
    }

    /**
     * @Route(
     *      "/api/comments", 
     *      name="add_comment",  
     *      methods={"POST"}
     * )
     */
    public function add(Request $request): Response
    {
        $data = $request->getContent();
  
        $comment = $this->commentManager->create($data);
        $comment = $this->commentManager->serialize($comment, ['groups' => 'comment-add']);

        return new Response($comment, Response::HTTP_CREATED);
    }

    /**
     * @Route(
     *      "/api/comments/{id}",
     *      name="edit_comment",
     *      methods={"PUT"},
     *      requirements={"id"="\d+"}
     * )
     */
    public function edit(Request $request, Comment $comment): Response
    {
        $this->denyAccessUnlessGranted(UserVoter::SAME_USER, $comment);

        $data = $request->getContent();
  
        $comment = $this->commentManager->update($comment, $data);
        $comment = $this->commentManager->serialize($comment, ['groups' => 'comment-edit']);

        return new Response($comment);
    }

    /**
     * @Route(
     *     "/api/comments/{id}",
     *     name="delete_comment",
     *     methods={"DELETE"},
     *     requirements={"id"="\d+"}
     * )
     * @param int $id
     *
     * @return JsonResponse
     */
    public function delete(Comment $comment): JsonResponse
    {
        $this->denyAccessUnlessGranted(UserVoter::SAME_USER, $comment);

        $this->commentManager->delete($comment);

        return new JsonResponse(
            null,
            JsonResponse::HTTP_NO_CONTENT
        );
    }
}
