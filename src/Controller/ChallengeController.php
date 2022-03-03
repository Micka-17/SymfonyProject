<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Contracts\Translation\TranslatorInterface;

class ChallengeController extends AbstractController
{
    protected $translator;
    public function __construct(TranslatorInterface $translator ){
        $this->translator = $translator;
    }

    #[Route('/challengeAttack', name: 'challengeAttack')]
    public function challengeAttack(): Response
    {
        $challengeAttacker= [
            $this->translator->trans("Joue mannette"),
            $this->translator->trans("fenetre"),
            $this->translator->trans("Couteau"),
            $this->translator->trans("Sans visée"),
            $this->translator->trans("fonce"),
            $this->translator->trans("Joue un bot"),
            $this->translator->trans("Arme secondaire"),
            $this->translator->trans("Pas de viseur"),
            $this->translator->trans("Pas de gadget"),
            $this->translator->trans("Silencieux"),
            $this->translator->trans("Pas d'accessoires"),
            $this->translator->trans("Tue un alliée"),
            $this->translator->trans("Mitraillettes"),
            $this->translator->trans("Bateuse"),
            $this->translator->trans("Dmr ou snipe"),
            $this->translator->trans("Bouclier"),
            $this->translator->trans("Fusil a pompe"),
        ];
        return new JsonResponse($challengeAttacker);
    }

    #[Route('/challengeDefense', name: 'challengeDefense')]
    public function challengeDefense(): Response
    {
        $challengeDefender= [
            $this->translator->trans("Joue mannette"),
            $this->translator->trans("Cours"),
            $this->translator->trans("Couteau"),
            $this->translator->trans("Sans visée"),
            $this->translator->trans("Joue un bot"),
            $this->translator->trans("SpawnKill"),
            $this->translator->trans("Pas de renfo"),
            $this->translator->trans("Ouvrir tout"),
            $this->translator->trans("Arme secondaire"),
            $this->translator->trans("Pas de viseur"),
            $this->translator->trans("Pas de gadget"),
            $this->translator->trans("Silencieux"),
            $this->translator->trans("Pas d'accessoires"),
            $this->translator->trans("Cache cache"),
            $this->translator->trans("Tue un alliée"),
            $this->translator->trans("Mitraillettes"),
            $this->translator->trans("Bateuse"),
            $this->translator->trans("Dmr ou snipe"),
            $this->translator->trans("Bouclier"),
            $this->translator->trans("Fusil a pompe"),
        ];
        return new JsonResponse($challengeDefender);
    }
}
