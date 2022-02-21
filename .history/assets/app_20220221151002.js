/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.scss';

// start the Stimulus application
import './bootstrap';


import Alert from 'bootstrap/js/dist/alert';

// or, specify which plugins you need:
import { Tooltip, Toast, Popover } from 'bootstrap';

import r6operators from "r6operators"
import noBrain from '../assets/images/noBrain.png';

const defender = [
    r6operators.alibi, 
    r6operators.aruni, 
    r6operators.bandit, 
    r6operators.castle, 
    r6operators.caveira, 
    r6operators.clash, 
    r6operators.doc, 
    r6operators.echo, 
    r6operators.ela,
    r6operators.frost, 
    r6operators.goyo, 
    r6operators.jager, 
    r6operators.kaid, 
    r6operators.kapkan, 
    r6operators.lesion, 
    r6operators.maestro, 
    r6operators.melusi, 
    r6operators.mira,
    r6operators.mozzie, 
    r6operators.mute, 
    r6operators.oryx, 
    r6operators.pulse, 
    r6operators.rook, 
    r6operators.smoke, 
    r6operators.tachanka, 
    r6operators.thorn, 
    r6operators.thunderbird,
    r6operators.valkyrie, 
    r6operators.vigil, 
    r6operators.wamai, 
    r6operators.warden
];
const attacker = [
    r6operators.ace, 
    r6operators.amaru, 
    r6operators.ash, 
    r6operators.blackbeard, 
    r6operators.blitz, 
    r6operators.buck, 
    r6operators.capitao, 
    r6operators.dokkaebi, 
    r6operators.finka,
    r6operators.flores, 
    r6operators.fuze, 
    r6operators.glaz, 
    r6operators.gridlock, 
    r6operators.hibana, 
    r6operators.iana, 
    r6operators.iq, 
    r6operators.jackal, 
    r6operators.kali,
    r6operators.lion, 
    r6operators.maverick, 
    r6operators.montagne, 
    r6operators.nokk, 
    r6operators.nomad, 
    r6operators.osa, 
    r6operators.sledge, 
    r6operators.thatcher, 
    r6operators.thermite,
    r6operators.twitch, 
    r6operators.ying, 
    r6operators.zero, 
    r6operators.zofia
];
const challengeAttacker = [
    "Play with controller",
    "SpawnKill !",
    "Attack from a window !",
    "Only knife",
    "Shield",
    "No aim",
    "Rush !",
    "Forbidden to lean and run! !",
    "Secondary only !",
    "No scop !",
    "No accessories",
    "Suppressor !",
    "No gadgets !",
    "Hide and seek !",
    "TK act like you didn't do it on purpose !!!!!!",
    "SMG",
    "Light Machine Guns",
    "Marksman Rifles",
    "Shotgun !",
];
const challengeDefender = [
    "Play with controller",
    "Full run !",
    "Only knife",
    "Shield",
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
    "Hide and seek !",
    "TK act like you didn't do it on purpose !!!!!!",
    "SMG",
    "Light Machine Guns",
    "Marksman Rifles",
    "Shotgun !"
];

//H5 Random
const idDefender = document.getElementById('idDefender');
idDefender.innerHTML = "Random";

const idAttacker = document.getElementById('idAttacker');
idAttacker.innerHTML = "Random";
////

let html = `<img class="w-100 d-flex align-items-center" src="${noBrain}" alt="ACME logo">`;
const defend = document.getElementById('defenderSVG');
defend.innerHTML = `${html}`;
const attack = document.getElementById('attackerSVG');
attack.innerHTML = `${html}`;

// BTN Defender
//ADD random SVG Defender
const btnDefender = document.getElementById('btnDefender');
btnDefender.addEventListener("click", () => {
let defenderOperators = defender[Math.floor(Math.random()*defender.length)];
const defenderSVG = defenderOperators.toSVG();
const defend = document.getElementById('defenderSVG');
defend.innerHTML = r6operators.recruit_blue.toSVG();
//
//Name of operator
const idDefender = document.getElementById('idDefender');
idDefender.innerHTML = defenderOperators.id;
//
//Challenge
const defenderChallenge = challengeDefender[Math.floor(Math.random()*challengeDefender.length)];
const tacticalDefender = document.getElementById('tacticalDefender');
tacticalDefender.innerHTML = defenderChallenge;
if(defenderChallenge === "SMG" || defenderChallenge === "Light Machine Guns" || defenderChallenge === "Marksman Rifles" || defenderChallenge === "Shotgun !") {
    defend.innerHTML = r6operators.recruit_blue.toSVG();
    idDefender.innerHTML = "Choose a character!";
}
//
})
/////////////

//BTN Attacker
//ADD random SVG Attacker
const btnAttacker = document.getElementById('btnAttacker');
btnAttacker.addEventListener("click", () => {
const attackerOperators = attacker[Math.floor(Math.random()*attacker.length)];
const attackerSVG = attackerOperators.toSVG();
const attack = document.getElementById('attackerSVG');
attack.innerHTML = attackerSVG;
//
//Name of operator
const idAttacker = document.getElementById('idAttacker');
idAttacker.innerHTML = attackerOperators.id;
//
//Challenge
const attackerChallenge = challengeAttacker[Math.floor(Math.random()*challengeAttacker.length)];
const tacticalAttacker = document.getElementById('tacticalAttacker');
tacticalAttacker.innerHTML = attackerChallenge;
if(attackerChallenge === "SMG" || attackerChallenge === "Light Machine Guns" || attackerChallenge === "Marksman Rifles" || attackerChallenge === "Shotgun !") {
    attack.innerHTML = `${html}`;
    idAttacker.innerHTML = "Choose a character!";
}
//
})
////////////