class Preload extends Phaser.Scene {
    constructor() {
        super('Preload')
    }
    preload() {
        this.load.image("background", "./assets/1.png");
        this.load.image("tablebg", "./assets/2.png");
        this.load.image("cards", "./assets/3.png");
        this.load.image("sort", "./assets/4.png")
        this.load.image("cards_0", "./assets/playingcards/0.png");
        this.load.image("cards_1", "./assets/playingcards/1.png");
        this.load.image("cards_2", "./assets/playingcards/2.png");
        this.load.image("cards_3", "./assets/playingcards/3.png");
        this.load.image("cards_4", "./assets/playingcards/4.png");
        this.load.image("cards_5", "./assets/playingcards/5.png");
        this.load.image("cards_6", "./assets/playingcards/6.png");
        this.load.image("cards_7", "./assets/playingcards/7.png");
        this.load.image("cards_8", "./assets/playingcards/8.png");
        this.load.image("cards_9", "./assets/playingcards/9.png");
        this.load.image("cards_10", "./assets/playingcards/10.png");
        this.load.image("cards_11", "./assets/playingcards/11.png");
        this.load.image("cards_12", "./assets/playingcards/12.png");

        this.load.image("cards_13", "./assets/playingcards/13.png");
        this.load.image("cards_14", "./assets/playingcards/14.png");
        this.load.image("cards_15", "./assets/playingcards/15.png");
        this.load.image("cards_16", "./assets/playingcards/16.png");
        this.load.image("cards_17", "./assets/playingcards/17.png");
        this.load.image("cards_18", "./assets/playingcards/18.png");
        this.load.image("cards_19", "./assets/playingcards/19.png");
        this.load.image("cards_20", "./assets/playingcards/20.png");
        this.load.image("cards_21", "./assets/playingcards/21.png");
        this.load.image("cards_22", "./assets/playingcards/22.png");
        this.load.image("cards_23", "./assets/playingcards/23.png");
        this.load.image("cards_24", "./assets/playingcards/24.png");
        this.load.image("cards_25", "./assets/playingcards/25.png");

        this.load.image("cards_26", "./assets/playingcards/26.png");
        this.load.image("cards_27", "./assets/playingcards/27.png");
        this.load.image("cards_28", "./assets/playingcards/28.png");
        this.load.image("cards_29", "./assets/playingcards/29.png");
        this.load.image("cards_30", "./assets/playingcards/30.png");
        this.load.image("cards_31", "./assets/playingcards/31.png");
        this.load.image("cards_32", "./assets/playingcards/32.png");
        this.load.image("cards_33", "./assets/playingcards/33.png");
        this.load.image("cards_34", "./assets/playingcards/34.png");
        this.load.image("cards_35", "./assets/playingcards/35.png");
        this.load.image("cards_36", "./assets/playingcards/36.png");
        this.load.image("cards_37", "./assets/playingcards/37.png");
        this.load.image("cards_38", "./assets/playingcards/38.png");

        this.load.image("cards_39", "./assets/playingcards/39.png");
        this.load.image("cards_40", "./assets/playingcards/40.png");
        this.load.image("cards_41", "./assets/playingcards/41.png");
        this.load.image("cards_42", "./assets/playingcards/42.png");
        this.load.image("cards_43", "./assets/playingcards/43.png");
        this.load.image("cards_44", "./assets/playingcards/44.png");
        this.load.image("cards_45", "./assets/playingcards/45.png");
        this.load.image("cards_46", "./assets/playingcards/46.png");
        this.load.image("cards_47", "./assets/playingcards/47.png");
        this.load.image("cards_48", "./assets/playingcards/48.png");
        this.load.image("cards_49", "./assets/playingcards/49.png");
        this.load.image("cards_50", "./assets/playingcards/50.png");
        this.load.image("cards_51", "./assets/playingcards/51.png");





    }
    create() {
        this.scene.start("Gametable");
    }
}