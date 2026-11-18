
export default class starter extends Phaser.Scene {



  constructor() {
   super({ key: "starter" });
  }

  // init protège les coordonnées par défaut si data est undefined
  init(data) {
    this.startX = data?.x ?? 100; // coordonnées par défaut si on arrive directement dans la scène
    this.startY = data?.y ?? 150;
  }

preload() {

    // chargement de la carte starter 
this.load.tilemapTiledJSON("carte", "./src/assets/map1.json"); 

   // chargement tuiles de jeu
this.load.image("Phaser_tuilesdejeu0", "./src/assets/sky.png");
this.load.image("Phaser_tuilesdejeu1", "./src/assets/tileset1.png");
this.load.image("Phaser_tuilesdejeu2", "./src/assets/tileset2.png");
this.load.image("Phaser_tuilesdejeu3", "./src/assets/tileset3.png");
this.load.image("Phaser_tuilesdejeu4", "./src/assets/tileset4.png");
this.load.image("Phaser_tuilesdejeu5", "./src/assets/tileset5.png");
this.load.image("Phaser_tuilesdejeu6", "./src/assets/tileset6.png");
this.load.image("Phaser_tuilesdejeu7", "./src/assets/tileset7.png");
this.load.image("Phaser_tuilesdejeu8", "./src/assets/tileset8.png");
this.load.image("Phaser_tuilesdejeu9", "./src/assets/tileset9.png");
this.load.image("Phaser_tuilesdejeu10", "./src/assets/tileset10.png");
this.load.image("Phaser_tuilesdejeu11", "./src/assets/tileset11.png");
this.load.image("Phaser_tuilesdejeu12", "./src/assets/tileset12.png");
this.load.image("Phaser_tuilesdejeu13", "./src/assets/tileset13.png");

// chargement du synopsis
this.load.image('synopsis1', './src/assets/synopsis1.png');
this.load.image('synopsis2', './src/assets/synopsis2.png');
this.load.image('synopsis3', './src/assets/synopsis3.png');

//chargement du perso 1

   this.load.spritesheet("img_perso", "./src/assets/dude.png", {
    frameWidth: 32,
    frameHeight: 48
  }); 
  this.load.image('img_porte1', './src/assets/door1.png');

}

 create() {
    // chargement de la carte
const carteDuNiveau = this.add.tilemap("carte");

//chargement des 13 tilesets
// chargement du jeu de tuiles0
const sky = carteDuNiveau.addTilesetImage(
          "sky",
          "Phaser_tuilesdejeu0"
        );  
// chargement du jeu de tuiles1
const tileset1 = carteDuNiveau.addTilesetImage(
          "tileset1",
          "Phaser_tuilesdejeu1"
        );  

// chargement du jeu de tuiles2
const tileset2 = carteDuNiveau.addTilesetImage(
          "tileset2",
          "Phaser_tuilesdejeu2"
        );  

        // chargement du jeu de tuiles3
const tileset3 = carteDuNiveau.addTilesetImage(
          "tileset3",
          "Phaser_tuilesdejeu3"
        );  

        // chargement du jeu de tuiles4
const tileset4 = carteDuNiveau.addTilesetImage(
          "tileset4",
          "Phaser_tuilesdejeu4"
        );  
// chargement du jeu de tuiles5
const tileset5 = carteDuNiveau.addTilesetImage(
          "tileset5",
          "Phaser_tuilesdejeu5"
        );  

        // chargement du jeu de tuiles6
const tileset6 = carteDuNiveau.addTilesetImage(
          "tileset6",
          "Phaser_tuilesdejeu6"
        );  

        // chargement du jeu de tuiles7
const tileset7 = carteDuNiveau.addTilesetImage(
          "tileset7",
          "Phaser_tuilesdejeu7"
        );  

        // chargement du jeu de tuiles8
const tileset8 = carteDuNiveau.addTilesetImage(
          "tileset8",
          "Phaser_tuilesdejeu8"
        );  

        // chargement du jeu de tuiles9
const tileset9 = carteDuNiveau.addTilesetImage(
          "tileset9",
          "Phaser_tuilesdejeu9"
        );  

        // chargement du jeu de tuiles10
const tileset10 = carteDuNiveau.addTilesetImage(
          "tileset10",
          "Phaser_tuilesdejeu10"
        );  

        // chargement du jeu de tuiles11
const tileset11 = carteDuNiveau.addTilesetImage(
          "tileset11",
          "Phaser_tuilesdejeu11"
        );  

        // chargement du jeu de tuiles12
const tileset12 = carteDuNiveau.addTilesetImage(
          "tileset12",
          "Phaser_tuilesdejeu12"
        );  

        // chargement du jeu de tuiles13
const tileset13 = carteDuNiveau.addTilesetImage(
          "tileset13",
          "Phaser_tuilesdejeu13"
        );  

//chargement des calques de la map
// chargement du calque calque_background
const calque_background = carteDuNiveau.createLayer(
          "calque_background",
          [sky, tileset1, tileset2, tileset3, tileset4, tileset5, tileset6, tileset7, tileset8, tileset9, tileset10, tileset11, tileset12, tileset13]
        );

// chargement du calque calque_background_2
const calque_background_2 = carteDuNiveau.createLayer(
          "calque_background_2",
           [ tileset1, tileset2, tileset3, tileset4, tileset5, tileset6, tileset7, tileset8, tileset9, tileset10, tileset11, tileset12, tileset13]
        );

// chargement du calque calque_plateformes
const calque_plateformes = carteDuNiveau.createLayer(
          "calque_plateformes",
           [ tileset1, tileset2, tileset3, tileset4, tileset5, tileset6, tileset7, tileset8, tileset9, tileset10, tileset11, tileset12, tileset13]
        );  

// ajout du synopsis
this.synopsis1 = this.physics.add.staticSprite(350, 250, "synopsis1");
this.synopsis2 = this.physics.add.staticSprite(700, 250, "synopsis2");
this.synopsis3 = this.physics.add.staticSprite(1015, 226, "synopsis3");

// ajout de la porte 1    
this.porte1 = this.physics.add.staticSprite(2130, 520, "img_porte1");

//chargement du joueur 1
  this.player = this.physics.add.sprite(this.startX, this.startY, "img_perso");
  this.player.setCollideWorldBounds(true); //le joueur ne peut pas sortir des limites du monde
  this.player.direction = 'right';  // creation d'un attribut direction pour le joueur, initialisée avec 'right'
  this.player.setBounce(0.2); //petit saut quand il atterrit

    // ajout d'un second joueur
this.player2 = this.physics.add.sprite(this.startX, this.startY, "img_perso");
this.player2.setCollideWorldBounds(true); //le joueur ne peut pas sortir des limites du monde
this.player2.direction = 'right'; // creation d'un attribut direction pour le joueur, initialisée avec 'right'
this.player2.setBounce(0.2); //petit saut quand il atterrit


// mise ennplace d'une caméra pour suivre le joueur
this.physics.world.setBounds(0, 0, 3200, 640);
this.cameras.main.setBounds(0, 0, 3200, 640);
this.cameras.main.startFollow(this.player);


// définition des tuiles de plateformes qui sont solides
// utilisation de la propriété estSolide
calque_plateformes.setCollisionByProperty({ estSolide: true }); 
calque_background.setCollisionByProperty({ estSolide: false }); 
calque_background_2.setCollisionByProperty({ estSolide: false });

 // chargement du calque calque_deco
const calque_deco = carteDuNiveau.createLayer(
          "calque_deco",
           [ tileset1, tileset2, tileset3, tileset4, tileset5, tileset6, tileset7, tileset8, tileset9, tileset10, tileset11, tileset12, tileset13]
        );  
calque_deco.setCollisionByProperty({ estSolide: false }); 

// collision avec les plates-formes
this.physics.add.collider(this.player, calque_plateformes);
this.physics.add.collider(this.player2, calque_plateformes);

    //création des touches du clavier pour le joueur 1 et le joueur 2
    this.clavier = this.input.keyboard.createCursorKeys()
     this.J2Haut = this.input.keyboard.addKey('Z');
     this.J2Bas = this.input.keyboard.addKey('S');
     this.J2Gauche = this.input.keyboard.addKey('Q');
     this.J2Droite = this.input.keyboard.addKey('D');

  // création des animations du joueur
    this.anims.create({
    key: "anim_tourne_gauche", // key est le nom de l'animation : doit etre unique pour la scene.
    frames: this.anims.generateFrameNumbers("img_perso", { start: 0, end: 3 }), // on prend toutes les frames de img perso numerotées de 0 à 3
    frameRate: 10, // vitesse de défilement des frames
    repeat: -1 // nombre de répétitions de l'animation. -1 = infini
    
  }); 

  this.anims.create({
    key: "anim_tourne_droite", // key est le nom de l'animation : doit etre unique pour la scene.
    frames: this.anims.generateFrameNumbers("img_perso", { start: 5, end: 9 }), // on prend toutes les frames de img perso numerotées de 5 à 9
    frameRate: 10, // vitesse de défilement des frames
    repeat: -1 // nombre de répétitions de l'animation. -1 = infini
    
  }); 

  this.anims.create({
    key: "anim_face",
    frames: [{ key: "img_perso", frame: 4 }],
    frameRate: 20
  }); 



}


 update() {

  // commandes du joueur 1 (les commandes sont définies depuis curseur)
    if (this.clavier.right.isDown) {
    this.player.setVelocityX(160);
    this.player.anims.play('anim_tourne_droite', true); 
  } 
  else if (this.clavier.left.isDown) {
    this.player.setVelocityX(-160);
    this.player.anims.play('anim_tourne_gauche', true); 
  } else {
    this.player.setVelocityX(0);
    this.player.anims.play('anim_face'); 
  } 

  if (this.clavier.space.isDown && this.player.body.blocked.down) {
          this.player.setVelocityY(-200);
   } 

if (Phaser.Input.Keyboard.JustDown(this.clavier.space) == true) {
      if (this.physics.overlap(this.player, this.porte1) && this.physics.overlap(this.player2, this.porte1)) this.scene.switch("bibliotheque");
    }


    // commandes du joueur 2 (les commandes sont définies depuis curseur)
      if (this.J2Gauche.isDown ) {
             this.player2.setVelocityX(-160);
             this.player2.anims.play('anim_tourne_gauche', true);
         } 
     else if (this.J2Droite.isDown) {
            this.player2.setVelocityX(160);
            this.player2.anims.play('anim_tourne_droite', true);
        } 
    else {
            this.player2.setVelocityX(0);
            this.player2.anims.play('anim_face');
        }
      if (this.J2Haut.isDown && this.player2.body.blocked.down) {
            this.player2.setVelocityY(-200);
        }


      
      



}


}

