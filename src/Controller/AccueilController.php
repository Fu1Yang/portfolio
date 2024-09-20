<?php

namespace App\Controller;

use App\Entity\Accueil;
use App\Form\AccueilType;
use App\Repository\AccueilRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/')]
class AccueilController extends AbstractController
{
    #[Route('/', name: 'app_accueil', methods: ['GET'])]
    public function accueil(): Response
    {
        return $this->render('accueil/accueil.html.twig');
    }


    #[Route('/indexAccueil', name: 'app_accueil_index', methods: ['GET'])]
    public function index(AccueilRepository $accueilRepository): Response
    {
        return $this->render('accueil/index.html.twig', [
            'accueils' => $accueilRepository->findAll(),
        ]);
    }

    #[Route('/new', name: 'app_accueil_new', methods: ['GET', 'POST'])]
    public function new(Request $request, EntityManagerInterface $entityManager): Response
    {
        $accueil = new Accueil();
        $form = $this->createForm(AccueilType::class, $accueil);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->persist($accueil);
            $entityManager->flush();

            return $this->redirectToRoute('app_accueil_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->render('accueil/new.html.twig', [
            'accueil' => $accueil,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_accueil_show', methods: ['GET'])]
    public function show(Accueil $accueil): Response
    {
        return $this->render('accueil/show.html.twig', [
            'accueil' => $accueil,
        ]);
    }

    #[Route('/{id}/edit', name: 'app_accueil_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, Accueil $accueil, EntityManagerInterface $entityManager): Response
    {
        $form = $this->createForm(AccueilType::class, $accueil);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->flush();

            return $this->redirectToRoute('app_accueil_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->render('accueil/edit.html.twig', [
            'accueil' => $accueil,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_accueil_delete', methods: ['POST'])]
    public function delete(Request $request, Accueil $accueil, EntityManagerInterface $entityManager): Response
    {
        if ($this->isCsrfTokenValid('delete'.$accueil->getId(), $request->getPayload()->getString('_token'))) {
            $entityManager->remove($accueil);
            $entityManager->flush();
        }

        return $this->redirectToRoute('app_accueil_index', [], Response::HTTP_SEE_OTHER);
    }
}
