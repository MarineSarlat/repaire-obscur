// importation des scènes 

import menu from "./js/menu.js"; 
import command from "./js/command.js"; 
import starter from "./js/starter.js"; 
import bibliotheque from "./js/bibliotheque.js"; 
import dortoir from "./js/dortoir.js";
import repaire from "./js/repaire.js"; 
import victoire from "./js/victoire.js";

// Mise en place des variables nécessaires au jeu
var player; 
var clavier; 
var boutonFeu;
var groupeBullets;  
var groupeCibles;  
var son_feu;
var musique_de_fond;

// configuration du jeu
var config = {
  type: Phaser.AUTO,
  width: 1235, // largeur en pixels
  height: 600, // hauteur en pixels
  physics: {
    // définition des parametres physiques
    default: "arcade", // mode arcade : le plus simple : des rectangles pour gérer les collisions. 
    arcade: {
      // parametres du mode arcade
      gravity: {
        y: 300 // gravité verticale : acceleration des corps en pixels par seconde
      },
      debug: false // permet de voir les hitbox et les vecteurs d'acceleration quand mis à true
    }
  },
    scene: [menu, command, starter, bibliotheque, dortoir, repaire, victoire]
};


// création et lancement du jeu
var game = new Phaser.Game(config);
game.scene.start("menu"); // lancement de la scene menu