export default class victoire extends Phaser.Scene {
  // constructeur de la classe
  constructor() {
    super({
      key: "victoire" //  ici on précise le nom de la classe en tant qu'identifiant
    });
  }

  monTimer2() {
  this.time.delayedCall(2000, () => {
    this.etoile.body.allowGravity = true; // la gravité agit après 5 secondes
  }, null, this);
}

  preload() {

     // chargement de la carte starter 
this.load.tilemapTiledJSON("carteV", "./src/assets/mapVictoire.json"); 

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
this.load.image('etoile', './src/assets/star.png');

// chargement de la porte victoire avec une spritesheet pour l'animation
this.load.spritesheet('img_porteV', './src/assets/spritesheet_porte.png', {
  frameWidth: 96,
  frameHeight: 120
});

//chargement du perso 1

   this.load.spritesheet("img_perso", "./src/assets/dude.png", {
    frameWidth: 32,
    frameHeight: 48
  }); 

   
    
  }

create () {

  // chargement de la carte
const carteDuNiveauV = this.add.tilemap("carteV");

//chargement des 13 tilesets
const sky = carteDuNiveauV.addTilesetImage(
          "sky",
          "Phaser_tuilesdejeu0"
        );  

const tileset1 = carteDuNiveauV.addTilesetImage(
          "tileset1",
          "Phaser_tuilesdejeu1"
        );  


const tileset2 = carteDuNiveauV.addTilesetImage(
          "tileset2",
          "Phaser_tuilesdejeu2"
        );  

        
const tileset3 = carteDuNiveauV.addTilesetImage(
          "tileset3",
          "Phaser_tuilesdejeu3"
        );  

       
const tileset4 = carteDuNiveauV.addTilesetImage(
          "tileset4",
          "Phaser_tuilesdejeu4"
        );  

const tileset5 = carteDuNiveauV.addTilesetImage(
          "tileset5",
          "Phaser_tuilesdejeu5"
        );  

       
const tileset6 = carteDuNiveauV.addTilesetImage(
          "tileset6",
          "Phaser_tuilesdejeu6"
        );  

       
const tileset7 = carteDuNiveauV.addTilesetImage(
          "tileset7",
          "Phaser_tuilesdejeu7"
        );  

        
const tileset8 = carteDuNiveauV.addTilesetImage(
          "tileset8",
          "Phaser_tuilesdejeu8"
        );  

        
const tileset9 = carteDuNiveauV.addTilesetImage(
          "tileset9",
          "Phaser_tuilesdejeu9"
        );  

        
const tileset10 = carteDuNiveauV.addTilesetImage(
          "tileset10",
          "Phaser_tuilesdejeu10"
        );  

        
const tileset11 = carteDuNiveauV.addTilesetImage(
          "tileset11",
          "Phaser_tuilesdejeu11"
        );  

        
const tileset12 = carteDuNiveauV.addTilesetImage(
          "tileset12",
          "Phaser_tuilesdejeu12"
        );  

        
const tileset13 = carteDuNiveauV.addTilesetImage(
          "tileset13",
          "Phaser_tuilesdejeu13"
        );  

//chargement des calques de la map
// chargement du calque calque_background
const calque_background = carteDuNiveauV.createLayer(
          "calque_background",
          [sky, tileset1, tileset2, tileset3, tileset4, tileset5, tileset6, tileset7, tileset8, tileset9, tileset10, tileset11, tileset12, tileset13]
        );

// chargement du calque calque_background_2
const calque_background_2 = carteDuNiveauV.createLayer(
          "calque_background_2",
           [ tileset1, tileset2, tileset3, tileset4, tileset5, tileset6, tileset7, tileset8, tileset9, tileset10, tileset11, tileset12, tileset13]
        );

// chargement du calque calque_plateformes
const calque_plateformes = carteDuNiveauV.createLayer(
          "calque_plateformes",
           [ tileset1, tileset2, tileset3, tileset4, tileset5, tileset6, tileset7, tileset8, tileset9, tileset10, tileset11, tileset12, tileset13]
        );  

 // chargement du calque calque_deco
const calque_deco = carteDuNiveauV.createLayer(
          "calque_deco",
           [ tileset1, tileset2, tileset3, tileset4, tileset5, tileset6, tileset7, tileset8, tileset9, tileset10, tileset11, tileset12, tileset13]
        );  

    // création de la porte victoire
    this.porteV = this.physics.add.sprite(450, 485, "img_porteV"); 
    this.porteV.setImmovable(true);
    this.porteV.body.allowGravity = false;
    this.porteV.ouverte = false;
    this.porteV.setFrame(5); // porte ouverte (la dernière frame de anim_ouvreporte)

// Au lancement de la scène, on ferme la porte
this.porteV.anims.play("anim_fermeporte");
this.porteV.ouverte = false;
    

// création des animations de la porte victoire
    this.anims.create({
    key: "anim_ouvreporte",
    frames: this.anims.generateFrameNumbers("img_porteV", { start: 0, end: 5 }),
    frameRate: 50,
    repeat: 0
  }); 

  this.anims.create({
    key: "anim_fermeporte",
    frames: this.anims.generateFrameNumbers("img_porteV", { start: 0, end: 5 }).reverse(),
    frameRate: 50,
    repeat: 0
  }); 
 
    

    //chargement du joueur 1
  this.player = this.physics.add.sprite(450, 485, 'img_perso'); 
  this.player.direction = 'right';  
  this.player.setBounce(0.2); 
  this.physics.add.collider(this.player, calque_plateformes);
  this.player.setCollideWorldBounds(true);
  this.player.body.onWorldBounds = true;



    // ajout d'un second joueur
this.player2 = this.physics.add.sprite(450, 485, 'img_perso');
this.player2.setCollideWorldBounds(true);
this.player2.direction = 'right';
this.player2.setBounce(0.2);
this.player2.body.onWorldBounds = true;
this.physics.world.setBounds(0, 0, 3200, 640);
this.physics.add.collider(this.player2, calque_plateformes);


// après avoir créé la map et les calques
this.physics.world.setBounds(0, 0, carteDuNiveauV.widthInPixels, carteDuNiveauV.heightInPixels);
this.cameras.main.setBounds(0, 0, carteDuNiveauV.widthInPixels, carteDuNiveauV.heightInPixels);
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
     this.toucheE = this.input.keyboard.addKey('E');
 

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

      // création de l'étoile
      this.etoile = this.physics.add.image(400, 50, "etoile");
      this.etoile.body.allowGravity = false; // elle reste suspendue au départ
      this.physics.add.collider(this.etoile, calque_plateformes); 
   
  //deuxième timer pour faire tomber l'étoile
  this.monTimer2();
   
}

update () {

  // commandes du joueur 1 (les commandes sont définies depuis curseur)
    if (this.clavier.right.isDown) {
    this.player.setVelocityX(160);
    this.player.anims.play('anim_tourne_droite', true); 
     this.player.direction = 'right';  
  } 
  else if (this.clavier.left.isDown) {
    this.player.setVelocityX(-160);
    this.player.anims.play('anim_tourne_gauche', true); 
     this.player.direction = 'left';
  } else {
    this.player.setVelocityX(0);
    this.player.anims.play('anim_face'); 
  } 

    if (this.clavier.space.isDown && this.player.body.blocked.down) {
          this.player.setVelocityY(-200);
        } 


    // commandes du joueur 2 (les commandes sont définies depuis curseur)
      if (this.J2Gauche.isDown ) {
             this.player2.setVelocityX(-160);
             this.player2.anims.play('anim_tourne_gauche', true);
              this.player2.direction = 'left';
         } 
     else if (this.J2Droite.isDown) {
            this.player2.setVelocityX(160);
            this.player2.anims.play('anim_tourne_droite', true);
             this.player2.direction = 'right';
        } 
    else {
            this.player2.setVelocityX(0);
            this.player2.anims.play('anim_face');
        }
      if (this.J2Haut.isDown && this.player2.body.blocked.down) {
            this.player2.setVelocityY(-200);
        }


  // interaction avec la porte victoire via la touche E    
if (Phaser.Input.Keyboard.JustDown(this.toucheE)) {
    if (this.physics.overlap(this.player, this.porteV) || this.physics.overlap(this.player2, this.porteV)) {
        if (this.porteV.ouverte == false) {
            this.porteV.anims.play("anim_ouvreporte");
            this.porteV.ouverte = true;

                this.porteV.once("animationcomplete", (anim) => {
                    if (anim.key === "anim_ouvreporte") {
                        this.scene.start("repaire", { x: 1055, y: 292 }); 
                    }
                });
            }
        }
    }

}
}