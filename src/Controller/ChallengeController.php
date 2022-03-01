<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ChallengeController extends AbstractController
{
    #[Route('/challengeAttack', name: 'challengeAttack')]
    public function challengeAttack(): Response
    {
        $challengeAttacker= [
            "Play with controller",
            "Attack from a window !",
            "Only knife",
            "No aim",
            "Rush !",
            "Forbidden to lean and run! !",
            "Secondary only !",
            "No scop !",
            "No accessories",
            "Suppressor !",
            "No gadgets !",
            "TK act like you didn't do it on purpose !!!!!!",
            "SMG",
            "Light Machine Guns",
            "Marksman Rifles",
            "Shield",
            "Shotgun !"
        ];
        return new JsonResponse($challengeAttacker);
    }

    #[Route('/challengeDefense', name: 'challengeDefense')]
    public function challengeDefense(): Response
    {
        $challengeDefender= [
            "Play with controller",
            "Full run !",
            "Only knife",
            "No aim",
            "Forbidden to lean and run! !",
            "SpawnKill !",
            "Reinforcement of walls is prohibited !",
            "Open walls and windows !",
            "Secondary only !",
            "No scop !",
            "No accessories",
            "Suppressor !",
            "No gadgets !",
            "Hide and seek ! (You can take Mira...)",
            "TK act like you didn't do it on purpose !!!!!!",
            "SMG",
            "Light Machine Guns",
            "Marksman Rifles",
            "Shield",
            "Shotgun !"
        ];
        return new JsonResponse($challengeDefender);
    }
}
