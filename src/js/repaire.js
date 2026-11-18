export default class repaire extends Phaser.Scene {
  // constructeur de la classe
  constructor() {
    super({
      key: "repaire" //  ici on précise le nom de la classe en tant qu'identifiant
    });
  }
init(data) {
  this.spawnX = data?.x ?? 1860;
  this.spawnY = data?.y ?? 556;
}
   //fonction qui permet de créer et tirer une balle
   tirer(player) {
    var coefDir = player.direction === 'left' ? -1 : 1; // Détermine la direction du tir 
    var bullet = this.physics.add.sprite(player.x + (25 * coefDir), player.y - 4, 'bullet');  // Crée un sprite "bullet" à côté du joueur, décalé selon la direction
    this.groupeBullets.add(bullet); // Ajoute cette balle dans le groupe de projectiles
    bullet.setCollideWorldBounds(true); // Empêche la balle de sortir de l'écran sans que l'événement "worldbounds" se déclenche
    bullet.body.onWorldBounds = true;   // Active la détection de la collision avec les bords du monde
    bullet.body.allowGravity = false;  // Supprime la gravité sur la balle pour qu’elle reste en ligne droite
    bullet.setVelocity(1000 * coefDir, 0);  // Donne une vitesse horizontale à la balle
    this.son_feu.play(); // lancement du son son_feu

    // Quand la balle touche le bord → callback qui la détruit
    bullet.body.world.on("worldbounds", function(body) {
    if (body.gameObject === bullet) {
        bullet.destroy(true);
        this.son_feu.stop();// arret du son son_feu
    }
}, this); // "this" ici fait référence à la scène actuelle

    
}  
//function qui vérifie si toutes les cibles sont détruites.Si oui, la porte devient visible et active.
verifierCiblesRestantes() {
  if (this.groupeCibles.countActive(true) === 0) { // Vérifie si toutes les cibles sont détruites
    this.porteV.setVisible(true);
    this.porteV.body.enable = true; // On rend la porte visible et active
  }
}
// fonction déclenchée lorsque uneBalle et uneCible se superposent
hit (bullet, cible) {
    cible.pointsVie--;
  if (cible.pointsVie==0) {
    cible.destroy(true);
    this.verifierCiblesRestantes();
  } 
   bullet.destroy(true); 
}  


  preload() {

     // chargement de la carte starter 
this.load.tilemapTiledJSON("carte4", "./src/assets/map4.json"); 

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

// chargement de la porte victoire avec son animation d'ouverture 
    this.load.spritesheet('img_porteV', './src/assets/spritesheet_porte.png', {
  frameWidth: 96,
  frameHeight: 120
});

//chargement du perso 1

   this.load.spritesheet("img_perso", "./src/assets/dude.png", {
    frameWidth: 32,
    frameHeight: 48
  }); 
// chargement de la porte 3
  this.load.image('img_porte3', './src/assets/door3.png');

// chargement de l'image balle.png
 this.load.image("bullet", "./src/assets/balle.png");  
 // chargement de l'image cible.png
 this.load.image("cible", "./src/assets/cible.png");  
// chargement du son coupDeFeu
 this.load.audio('coupDeFeu', './src/assets/gun.mp3');

  }

create () {


  // chargement de la carte
const carteDuNiveau4 = this.add.tilemap("carte4");

//chargement des 13 tilesets
const sky = carteDuNiveau4.addTilesetImage(
          "sky",
          "Phaser_tuilesdejeu0"
        );  

const tileset1 = carteDuNiveau4.addTilesetImage(
          "tileset1",
          "Phaser_tuilesdejeu1"
        );  


const tileset2 = carteDuNiveau4.addTilesetImage(
          "tileset2",
          "Phaser_tuilesdejeu2"
        );  

        
const tileset3 = carteDuNiveau4.addTilesetImage(
          "tileset3",
          "Phaser_tuilesdejeu3"
        );  

        
const tileset4 = carteDuNiveau4.addTilesetImage(
          "tileset4",
          "Phaser_tuilesdejeu4"
        );  

const tileset5 = carteDuNiveau4.addTilesetImage(
          "tileset5",
          "Phaser_tuilesdejeu5"
        );  

        
const tileset6 = carteDuNiveau4.addTilesetImage(
          "tileset6",
          "Phaser_tuilesdejeu6"
        );  

       
const tileset7 = carteDuNiveau4.addTilesetImage(
          "tileset7",
          "Phaser_tuilesdejeu7"
        );  

        
const tileset8 = carteDuNiveau4.addTilesetImage(
          "tileset8",
          "Phaser_tuilesdejeu8"
        );  

        
const tileset9 = carteDuNiveau4.addTilesetImage(
          "tileset9",
          "Phaser_tuilesdejeu9"
        );  

        
const tileset10 = carteDuNiveau4.addTilesetImage(
          "tileset10",
          "Phaser_tuilesdejeu10"
        );  

        
const tileset11 = carteDuNiveau4.addTilesetImage(
          "tileset11",
          "Phaser_tuilesdejeu11"
        );  

        
const tileset12 = carteDuNiveau4.addTilesetImage(
          "tileset12",
          "Phaser_tuilesdejeu12"
        );  

        
const tileset13 = carteDuNiveau4.addTilesetImage(
          "tileset13",
          "Phaser_tuilesdejeu13"
        );  

//chargement des calques de la map
// chargement du calque calque_background
const calque_background = carteDuNiveau4.createLayer(
          "calque_background",
          [sky, tileset1, tileset2, tileset3, tileset4, tileset5, tileset6, tileset7, tileset8, tileset9, tileset10, tileset11, tileset12, tileset13]
        );

// chargement du calque calque_background_2
const calque_background_2 = carteDuNiveau4.createLayer(
          "calque_background_2",
           [ tileset1, tileset2, tileset3, tileset4, tileset5, tileset6, tileset7, tileset8, tileset9, tileset10, tileset11, tileset12, tileset13]
        );
 const calque_plateformes = carteDuNiveau4.createLayer(
    "calque_plateformes",
    [ tileset1, tileset2, tileset3, tileset4, tileset5, tileset6, tileset7, tileset8, tileset9, tileset10, tileset11, tileset12, tileset13]
);
 // chargement du calque calque_deco
const calque_deco = carteDuNiveau4.createLayer(
          "calque_deco",
           [ tileset1, tileset2, tileset3, tileset4, tileset5, tileset6, tileset7, tileset8, tileset9, tileset10, tileset11, tileset12, tileset13]
        );  


    //création de la porte retour 3
    this.porte_retour3 = this.physics.add.staticSprite(1860, 556, "img_porte3");

    //création de la porte intéractive qui mêne à la scène de victoire
    this.porteV = this.physics.add.sprite(1055, 292, "img_porteV");  
    this.porteV.setImmovable(true); // rend la porte immobile : elle ne bougera pas même si un autre objet la pousse
    this.porteV.body.allowGravity = false; // désactive la gravité sur la porte (elle ne tombera pas)
    this.porteV.ouverte = false; //indique que la porte est fermée au départ
    this.porteV.setFrame(0); // porte fermée par défaut
    this.porteV.setVisible(false); // on cache la porte au début
    this.porteV.body.enable = false; //désactive les collisions de la porte tant qu’elle n’est pas activée
    

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
  this.player = this.physics.add.sprite(this.spawnX, this.spawnY, 'img_perso');
  this.player.direction = 'right';  
  this.player.setBounce(0.2); 
  this.physics.add.collider(this.player, calque_plateformes);
  this.player.setCollideWorldBounds(true);
  this.player.body.onWorldBounds = true;

//si le joueur touche le bas du monde, il est désactivé
this.player.body.world.on(
    "worldbounds", // evenement surveillé
    function (body, up, down, left, right) {
      // on verifie si la hitbox qui est rentrée en collision est celle du player,
      // et si la collision a eu lieu sur le bord inférieur du player
      if (body.gameObject === this.player && down) {
      this.player.setTint(0xff0000);
      this.player.setVelocity(0, 0);
      this.player.body.enable = false;
  
      }
},
this
); 

// ajout d'un second joueur
this.player2 = this.physics.add.sprite(this.spawnX, this.spawnY, 'img_perso');
this.player2.setCollideWorldBounds(true);
this.player2.direction = 'right';
this.player2.setBounce(0.2);
this.player2.body.onWorldBounds = true;
this.physics.world.setBounds(0, 0, 3200, 640);
this.physics.add.collider(this.player2, calque_plateformes);
//si le joueur touche le bas du monde, il est désactivé
this.player2.body.world.on(
    "worldbounds", // evenement surveillé
    function (body, up, down, left, right) {
      if (body.gameObject === this.player2 && down) { // on vérifie si le corps (body) concerné correspond bien au joueur 2 et si le contact s’est produit sur le bord inférieur (down == true)
      this.player2.setTint(0xff0000); // colore le joueur en rouge pour signaler la collision
      this.player2.setVelocity(0, 0); // stoppe immédiatement le mouvement du joueur
      this.player2.body.enable = false; // désactive le corps physique du joueur
}
    },
    this
  ); 


// après avoir créé la map et les calques
this.physics.world.setBounds(0, 0, carteDuNiveau4.widthInPixels, carteDuNiveau4.heightInPixels);
this.cameras.main.setBounds(0, 0, carteDuNiveau4.widthInPixels, carteDuNiveau4.heightInPixels);
this.cameras.main.startFollow(this.player); // la caméra suit le joueur

  // définition des tuiles de plateformes qui sont solides
// utilisation de la propriété estSolide
calque_plateformes.setCollisionByProperty({ estSolide: true });
calque_plateformes.setCollisionByExclusion([-1]); // -1 = tile vide
calque_background.setCollisionByProperty({ estSolide: false });
calque_background_2.setCollisionByProperty({ estSolide: false });
calque_deco.setCollisionByProperty({ estSolide: false });

     //création des touches
     this.clavier = this.input.keyboard.createCursorKeys()
     this.J2Haut = this.input.keyboard.addKey('Z');
     this.J2Bas = this.input.keyboard.addKey('S');
     this.J2Gauche = this.input.keyboard.addKey('Q');
     this.J2Droite = this.input.keyboard.addKey('D');
     this.toucheE = this.input.keyboard.addKey('E');
     // affectation de la touche A et B à boutonFeu
     this.boutonFeu2 = this.input.keyboard.addKey('A');
     this.boutonFeu1 = this.input.keyboard.addKey('B');


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
  

  // création d'un groupe d'éléments vide
this.groupeBullets = this.physics.add.group();  



// ajout de 8 cibles espacées de 110 pixels
this.groupeCibles = this.physics.add.group({
            key: 'cible',
            repeat: 7,
            setXY: { x: 70, y: 0, stepX: 250 }
        });  
  
  // ajout du modèle de collision entre cibles et plate-formes
  this.physics.add.collider(this.groupeCibles, calque_plateformes);
  // ajout du modèle de collision entre cibles et les balles
  this.physics.add.overlap(this.groupeBullets, this.groupeCibles, this.hit, null,this);

  // modification des cibles créées
   this.groupeCibles.children.iterate(function (cibleTrouvee) {
   // définition de points de vie
   cibleTrouvee.pointsVie=Phaser.Math.Between(1, 5);;
   // modification de la position en y
   cibleTrouvee.y = Phaser.Math.Between(10,250);
   // modification du coefficient de rebond
   cibleTrouvee.setBounce(1);
}); 

  // ajout du son son_feu
this.son_feu = this.sound.add('coupDeFeu', { loop: false }); 

}  


update () {

  // commandes du joueur 1 (les commandes sont définies depuis curseur)
  if (this.player.body.enable) {
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
        } }
//passage d'une scène à l'autre via les portes
if (Phaser.Input.Keyboard.JustDown(this.clavier.space) == true) {
    if (this.physics.overlap(this.player, this.porte_retour3) && this.physics.overlap(this.player2, this.porte_retour3)) {this.scene.start("bibliotheque", { x: 1765, y: 523 }); 
    }
}


    // commandes du joueur 2 (les commandes sont définies depuis curseur)
    if (this.player2.body.enable) {
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
        }}

      // interaction avec la porte victoire via la touche E
      if (Phaser.Input.Keyboard.JustDown(this.toucheE)) {
        if (this.physics.overlap(this.player, this.porteV) && this.physics.overlap(this.player2, this.porteV)) {
            if (this.porteV.ouverte == false) {
                this.porteV.anims.play("anim_ouvreporte");
                this.porteV.ouverte = true;
                this.porteV.on("animationcomplete", (anim) => {
            if (anim.key === "anim_ouvreporte") {
                this.scene.start("victoire"); // bascule seulement une fois la porte ouverte
            }
        });
                
            } else {
              this.porteV.anims.play("anim_fermeporte");
                this.porteV.ouverte = false;
            }
        }
    }

// déclenchement de la fonction tirer() si appui sur boutonFeu 
if ( Phaser.Input.Keyboard.JustDown(this.boutonFeu1)) {
   this.tirer(this.player);
   
}  

if ( Phaser.Input.Keyboard.JustDown(this.boutonFeu2)) {

   this.tirer(this.player2);
}  

}}
