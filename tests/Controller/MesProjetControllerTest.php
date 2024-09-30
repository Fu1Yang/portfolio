<?php

namespace App\Test\Controller;

use App\Entity\MesProjet;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\ORM\EntityRepository;
use Symfony\Bundle\FrameworkBundle\KernelBrowser;
use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class MesProjetControllerTest extends WebTestCase
{
    private KernelBrowser $client;
    private EntityManagerInterface $manager;
    private EntityRepository $repository;
    private string $path = '/mes/projet/';

    protected function setUp(): void
    {
        $this->client = static::createClient();
        $this->manager = static::getContainer()->get('doctrine')->getManager();
        $this->repository = $this->manager->getRepository(MesProjet::class);

        foreach ($this->repository->findAll() as $object) {
            $this->manager->remove($object);
        }

        $this->manager->flush();
    }

    public function testIndex(): void
    {
        $crawler = $this->client->request('GET', $this->path);

        self::assertResponseStatusCodeSame(200);
        self::assertPageTitleContains('MesProjet index');

        // Use the $crawler to perform additional assertions e.g.
        // self::assertSame('Some text on the page', $crawler->filter('.p')->first());
    }

    public function testNew(): void
    {
        $this->markTestIncomplete();
        $this->client->request('GET', sprintf('%snew', $this->path));

        self::assertResponseStatusCodeSame(200);

        $this->client->submitForm('Save', [
            'mes_projet[images]' => 'Testing',
            'mes_projet[titre]' => 'Testing',
            'mes_projet[paragraphe]' => 'Testing',
            'mes_projet[diagrammeMcd]' => 'Testing',
        ]);

        self::assertResponseRedirects($this->path);

        self::assertSame(1, $this->repository->count([]));
    }

    public function testShow(): void
    {
        $this->markTestIncomplete();
        $fixture = new MesProjet();
        $fixture->setImages('My Title');
        $fixture->setTitre('My Title');
        $fixture->setParagraphe('My Title');
        $fixture->setDiagrammeMcd('My Title');

        $this->manager->persist($fixture);
        $this->manager->flush();

        $this->client->request('GET', sprintf('%s%s', $this->path, $fixture->getId()));

        self::assertResponseStatusCodeSame(200);
        self::assertPageTitleContains('MesProjet');

        // Use assertions to check that the properties are properly displayed.
    }

    public function testEdit(): void
    {
        $this->markTestIncomplete();
        $fixture = new MesProjet();
        $fixture->setImages('Value');
        $fixture->setTitre('Value');
        $fixture->setParagraphe('Value');
        $fixture->setDiagrammeMcd('Value');

        $this->manager->persist($fixture);
        $this->manager->flush();

        $this->client->request('GET', sprintf('%s%s/edit', $this->path, $fixture->getId()));

        $this->client->submitForm('Update', [
            'mes_projet[images]' => 'Something New',
            'mes_projet[titre]' => 'Something New',
            'mes_projet[paragraphe]' => 'Something New',
            'mes_projet[diagrammeMcd]' => 'Something New',
        ]);

        self::assertResponseRedirects('/mes/projet/');

        $fixture = $this->repository->findAll();

        self::assertSame('Something New', $fixture[0]->getImages());
        self::assertSame('Something New', $fixture[0]->getTitre());
        self::assertSame('Something New', $fixture[0]->getParagraphe());
        self::assertSame('Something New', $fixture[0]->getDiagrammeMcd());
    }

    public function testRemove(): void
    {
        $this->markTestIncomplete();
        $fixture = new MesProjet();
        $fixture->setImages('Value');
        $fixture->setTitre('Value');
        $fixture->setParagraphe('Value');
        $fixture->setDiagrammeMcd('Value');

        $this->manager->persist($fixture);
        $this->manager->flush();

        $this->client->request('GET', sprintf('%s%s', $this->path, $fixture->getId()));
        $this->client->submitForm('Delete');

        self::assertResponseRedirects('/mes/projet/');
        self::assertSame(0, $this->repository->count([]));
    }
}
