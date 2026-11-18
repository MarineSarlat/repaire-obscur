export default class command extends Phaser.Scene {
  constructor() {
    super({ key: "command" });
  }
  //on charge les images
  preload() {
    this.load.image("command_fond", "./src/assets/mmi-command.png");
    this.load.image("imageBoutonretour", "./src/assets/bouton-retour.png");
     this.load.audio('guile', './src/assets/guile.mp3'); 
  }

  create() {
   // éléments de fond
    this.add
      .image(0, 0, "command_fond")
      .setOrigin(0.25,0.25)
      .setDepth(0)
      .setScale(1.25);

    //bouton de clic, nommé bouton_retour
    this.bouton_retour = this.add.image(595, 430, "imageBoutonretour")
    .setDepth(1)
    .setScale(0.1);

  //on stop toute musique ou son présent dans sound
   this.sound.stopAll();

    //=========================================================
    //on rend le bouton retour interactif
    this.bouton_retour.setInteractive();

    //Cas ou la sourris clique sur le bouton retour :
    // on lance le menu
    this.bouton_retour.on("pointerup", () => {
      this.scene.start("menu");
    });
  }
} 