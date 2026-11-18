export default class bibliotheque extends Phaser.Scene {
  // constructeur de la classe
  constructor() {
    super({
      key: "bibliotheque" //  ici on précise le nom de la classe en tant qu'identifiant
    });
  }

  init(data) {
    // Par défaut on spawn à la porte 1 si aucune coordonnée n'est donnée
    this.spawnX = data.x || 860;
    this.spawnY = data.y || 523;
  }
  preload() {

     // chargement de la carte starter 
this.load.tilemapTiledJSON("carte2", "./src/assets/map2.json"); 

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


//chargement du perso 1

   this.load.spritesheet("img_perso", "./src/assets/dude.png", {
    frameWidth: 32,
    frameHeight: 48
  }); 
    // chargement des portes
    this.load.image('img_porte1', './src/assets/door1.png');
    this.load.image('img_porte2', './src/assets/door2.png');
    this.load.image('img_porte3', './src/assets/door3.png');
  }

create () {

  // chargement de la carte
const carteDuNiveau2 = this.add.tilemap("carte2");

//chargement des 13 tilesets
const sky = carteDuNiveau2.addTilesetImage(
          "sky",
          "Phaser_tuilesdejeu0"
        );  

const tileset1 = carteDuNiveau2.addTilesetImage(
          "tileset1",
          "Phaser_tuilesdejeu1"
        );  


const tileset2 = carteDuNiveau2.addTilesetImage(
          "tileset2",
          "Phaser_tuilesdejeu2"
        );  

       
const tileset3 = carteDuNiveau2.addTilesetImage(
          "tileset3",
          "Phaser_tuilesdejeu3"
        );  

       
const tileset4 = carteDuNiveau2.addTilesetImage(
          "tileset4",
          "Phaser_tuilesdejeu4"
        );  

const tileset5 = carteDuNiveau2.addTilesetImage(
          "tileset5",
          "Phaser_tuilesdejeu5"
        );  

      
const tileset6 = carteDuNiveau2.addTilesetImage(
          "tileset6",
          "Phaser_tuilesdejeu6"
        );  

       
const tileset7 = carteDuNiveau2.addTilesetImage(
          "tileset7",
          "Phaser_tuilesdejeu7"
        );  

       
const tileset8 = carteDuNiveau2.addTilesetImage(
          "tileset8",
          "Phaser_tuilesdejeu8"
        );  

const tileset9 = carteDuNiveau2.addTilesetImage(
          "tileset9",
          "Phaser_tuilesdejeu9"
        );  

       
const tileset10 = carteDuNiveau2.addTilesetImage(
          "tileset10",
          "Phaser_tuilesdejeu10"
        );  

const tileset11 = carteDuNiveau2.addTilesetImage(
          "tileset11",
          "Phaser_tuilesdejeu11"
        );  

const tileset12 = carteDuNiveau2.addTilesetImage(
          "tileset12",
          "Phaser_tuilesdejeu12"
        );  

        
const tileset13 = carteDuNiveau2.addTilesetImage(
          "tileset13",
          "Phaser_tuilesdejeu13"
        );  

//chargement des calques de la map
// chargement du calque calque_background
const calque_background = carteDuNiveau2.createLayer(
          "calque_background",
          [sky, tileset1, tileset2, tileset3, tileset4, tileset5, tileset6, tileset7, tileset8, tileset9, tileset10, tileset11, tileset12, tileset13]
        );

// chargement du calque calque_background_2
const calque_background_2 = carteDuNiveau2.createLayer(
          "calque_background_2",
           [ tileset1, tileset2, tileset3, tileset4, tileset5, tileset6, tileset7, tileset8, tileset9, tileset10, tileset11, tileset12, tileset13]
        );

// chargement du calque calque_plateformes
const calque_plateformes = carteDuNiveau2.createLayer(
          "calque_plateformes",
           [ tileset1, tileset2, tileset3, tileset4, tileset5, tileset6, tileset7, tileset8, tileset9, tileset10, tileset11, tileset12, tileset13]
        );  

 // chargement du calque calque_deco
const calque_deco = carteDuNiveau2.createLayer(
          "calque_deco",
           [ tileset1, tileset2, tileset3, tileset4, tileset5, tileset6, tileset7, tileset8, tileset9, tileset10, tileset11, tileset12, tileset13]
        );  

      
//création des portes
    this.porte_retour =  this.physics.add.staticSprite(860, 523, "img_porte1"); 
    this.porte2 = this.physics.add.staticSprite(340, 267, "img_porte2");
    this.porte3 = this.physics.add.staticSprite(1765, 523, "img_porte3");

    //chargement du joueur 1
  this.player = this.physics.add.sprite(this.spawnX, this.spawnY, 'img_perso');
  this.player.direction = 'right';  
  this.player.setBounce(0.2); 
  this.physics.add.collider(this.player, calque_plateformes);


    // ajout d'un second joueur
 this.player2 = this.physics.add.sprite(this.spawnX, this.spawnY, 'img_perso');
  this.player2.setCollideWorldBounds(true);
  this.player2.direction = 'right';
  this.player2.setBounce(0.2);
  this.physics.world.setBounds(0, 0, 3200, 640);
  this.physics.add.collider(this.player2, calque_plateformes);

// après avoir créé la map et les calques
this.physics.world.setBounds(0, 0, carteDuNiveau2.widthInPixels, carteDuNiveau2.heightInPixels);
this.cameras.main.setBounds(0, 0, carteDuNiveau2.widthInPixels, carteDuNiveau2.heightInPixels);
this.cameras.main.startFollow(this.player); // la caméra suit le joueur

  // définition des tuiles de plateformes qui sont solides
// utilisation de la propriété estSolide
calque_plateformes.setCollisionByProperty({ estSolide: true }); 
calque_plateformes.setCollisionByExclusion([-1]); // -1 = tile vide
calque_background.setCollisionByProperty({ estSolide: false }); 
calque_background_2.setCollisionByProperty({ estSolide: false });
calque_deco.setCollisionByProperty({ estSolide: false }); 

    //création des touches du clavier pour le joueur 1 et le joueur 2
     this.clavier = this.input.keyboard.createCursorKeys()
     this.J2Haut = this.input.keyboard.addKey('Z');
     this.J2Bas = this.input.keyboard.addKey('S');
     this.J2Gauche = this.input.keyboard.addKey('Q');
     this.J2Droite = this.input.keyboard.addKey('D');
      

  // création des animations du joueur
    this.anims.create({
    key: "anim_tourne_gauche", // key est le nom de l'animation : doit etre unique poru la scene.
    frames: this.anims.generateFrameNumbers("img_perso", { start: 0, end: 3 }), // on prend toutes les frames de img perso numerotées de 0 à 3
    frameRate: 10, // vitesse de défilement des frames
    repeat: -1 // nombre de répétitions de l'animation. -1 = infini
    
  }); 

  this.anims.create({
    key: "anim_tourne_droite", // key est le nom de l'animation : doit etre unique poru la scene.
    frames: this.anims.generateFrameNumbers("img_perso", { start: 5, end: 9 }), // on prend toutes les frames de img perso numerotées de 0 à 3
    frameRate: 10, // vitesse de défilement des frames
    repeat: -1 // nombre de répétitions de l'animation. -1 = infini
    
  }); 

  this.anims.create({
    key: "anim_face",
    frames: [{ key: "img_perso", frame: 4 }],
    frameRate: 20
  }); 
  
   
}

update () {

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

        //passage d'une scène à l'autre via les portes
        if (Phaser.Input.Keyboard.JustDown(this.clavier.space) == true) {
              if (this.physics.overlap(this.player, this.porte_retour) && this.physics.overlap(this.player2, this.porte_retour)) {this.scene.start("starter", { x: 2130, y: 520 }); }
            if (this.physics.overlap(this.player,  this.porte2) && this.physics.overlap(this.player2, this.porte2)) {this.scene.switch("dortoir");}
              if (this.physics.overlap(this.player,  this.porte3) && this.physics.overlap(this.player2, this.porte3)) {this.scene.switch("repaire");}

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