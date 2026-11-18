export default class menu extends Phaser.Scene {
  constructor() {
    super({ key: "menu" });
  }
  //on charge les images
  preload() {
    this.load.image("menu_fond", "./src/assets/mmi-planet.png");
    this.load.image("imageBoutonPlay", "./src/assets/bouton-play.png");
    this.load.image("Command", "./src/assets/command.jpg");
   this.load.audio('guile', './src/assets/guile.mp3');  
  }

  create() {
   // éléments de fond
    this.add
      .image(0, 0, "menu_fond")
      .setOrigin(0.25,0.25)
      .setDepth(0)
      .setScale(1.25);

    //bouton de clic, nommé bouton_play
    var bouton_play = this.add.image(595, 380, "imageBoutonPlay")
    .setDepth(1)
    .setScale(0.2);

    //bouton de clic, nommé bouton_command
    var bouton_command = this.add.image(595, 440, "Command")
    .setDepth(1)
    .setScale(0.09);

    // ajout le son musique_de_fond au gestionnaire sound
// recupération de la variable pour manipuler le son
  this.musique_de_fond = this.sound.add('guile', { loop: true });
  this.musique_de_fond.play();

    //=========================================================
    //on rend le bouton play interratif
    bouton_play.setInteractive();

    //Cas ou la sourris clique sur le bouton play :
    // on lance le jeu, soit la scène starter
    bouton_play.on("pointerup", () => {
      this.scene.start("starter");
    });

    //=========================================================
    //on rend le command interratif
    bouton_command.setInteractive();

    //Cas ou la sourris clique sur le bouton play :
    // on envoi le joueur vers la scène command
    bouton_command.on("pointerup", () => {
      this.scene.start("command");
    });
  }
} 