<?php

namespace App\Entity;

use App\Repository\MesProjetRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: MesProjetRepository::class)]
class MesProjet
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $images = null;

    #[ORM\Column(length: 255)]
    private ?string $titre = null;

    #[ORM\Column(length: 255)]
    private ?string $paragraphe = null;

    #[ORM\Column(length: 255)]
    private ?string $diagrammeMcd = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getImages(): ?string
    {
        return $this->images;
    }

    public function setImages(string $images): static
    {
        $this->images = $images;

        return $this;
    }

    public function getTitre(): ?string
    {
        return $this->titre;
    }

    public function setTitre(string $titre): static
    {
        $this->titre = $titre;

        return $this;
    }

    public function getParagraphe(): ?string
    {
        return $this->paragraphe;
    }

    public function setParagraphe(string $paragraphe): static
    {
        $this->paragraphe = $paragraphe;

        return $this;
    }

    public function getDiagrammeMcd(): ?string
    {
        return $this->diagrammeMcd;
    }

    public function setDiagrammeMcd(string $diagrammeMcd): static
    {
        $this->diagrammeMcd = $diagrammeMcd;

        return $this;
    }
}
