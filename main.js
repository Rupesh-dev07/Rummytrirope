window.addEventListener('load', function() {
    var config = {
        type: Phaser.CANVAS,
        width: 800,
        height: 500,
        backgroundColor: "#000000",
        // transparent: true,
        parent: 'GameContainer',
        physics: {
            default: 'arcade',
            arcade: {
                debug: true,
                gravity: {
                    y: 150
                }
            }
        },
        scale: {
            mode: Phaser.Scale.FIT,
            autoCenter: Phaser.Scale.CENTER_BOTH
        },
        dom: {
            createContainer: true
        },
    };

    var game = new Phaser.Game(config);

    checkforIos = game.device.os.iOS;
    checkforIphone = game.device.os.iPhone;
    game.scene.add("Boot", Boot, true);
    game.scene.add("Preload", Preload);
    game.scene.add("Gametable", Gametable);
    game.scale.fullscreenTarget = document.getElementById(config.parent);
    //  init();
});
class Boot extends Phaser.Scene {

    preload() {
        // this.load.image("background", "./assets/bg.jpg");
        // this.load.image("finger", "./assets/finger.png");
        // this.load.image("planet_1", "./assets/Planet1.jpg");
        // this.load.image("planet_2", "./assets/Planet2.jpg")
    }

    update() {
        this.scene.start("Preload");
    }
}