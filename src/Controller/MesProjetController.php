<?php

namespace App\Controller;

use App\Entity\MesProjet;
use App\Form\MesProjetType;
use App\Repository\MesProjetRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/projet')]
class MesProjetController extends AbstractController
{
    #[Route('/mesProjet', name: 'app_mes_projet', methods: ['GET'])]
    public function apropos(): Response
    {
        return $this->render('mes_projet/projet.html.twig');
    }

    #[Route('/indexProjet', name: 'app_mes_projet_index', methods: ['GET'])]
    public function index(MesProjetRepository $mesProjetRepository): Response
    {
        return $this->render('mes_projet/index.html.twig', [
            'mes_projets' => $mesProjetRepository->findAll(),
        ]);
    }

    #[Route('/new', name: 'app_mes_projet_new', methods: ['GET', 'POST'])]
    public function new(Request $request, EntityManagerInterface $entityManager): Response
    {
        $mesProjet = new MesProjet();
        $form = $this->createForm(MesProjetType::class, $mesProjet);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->persist($mesProjet);
            $entityManager->flush();

            return $this->redirectToRoute('app_mes_projet_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->render('mes_projet/new.html.twig', [
            'mes_projet' => $mesProjet,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_mes_projet_show', methods: ['GET'])]
    public function show(MesProjet $mesProjet): Response
    {
        return $this->render('mes_projet/show.html.twig', [
            'mes_projet' => $mesProjet,
        ]);
    }

    #[Route('/{id}/edit', name: 'app_mes_projet_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, MesProjet $mesProjet, EntityManagerInterface $entityManager): Response
    {
        $form = $this->createForm(MesProjetType::class, $mesProjet);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->flush();

            return $this->redirectToRoute('app_mes_projet_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->render('mes_projet/edit.html.twig', [
            'mes_projet' => $mesProjet,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_mes_projet_delete', methods: ['POST'])]
    public function delete(Request $request, MesProjet $mesProjet, EntityManagerInterface $entityManager): Response
    {
        if ($this->isCsrfTokenValid('delete'.$mesProjet->getId(), $request->getPayload()->getString('_token'))) {
            $entityManager->remove($mesProjet);
            $entityManager->flush();
        }

        return $this->redirectToRoute('app_mes_projet_index', [], Response::HTTP_SEE_OTHER);
    }
}
