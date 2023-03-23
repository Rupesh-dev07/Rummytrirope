var getcards = ''
var xpos = [200, 230, 260, 290, 320, 350, 380, 410, 440, 470, 500, 530, 560]
var max = 52;
var min = 1;
var count = 0;
var playercards = []
var sortedarrays = []
var suit_one = []
var suit_two = [];
var suit_three = [];
var suit_four = [];
var suit_five = [];
var suit_six = [];
var discardkey = ''
var selectedchild = ''

class Gametable extends Phaser.Scene {
    constructor() {
        super("Gametable")
    }
    create() {
        console.log("Gametable ")
        this.gamebg = this.add.image(400, 250, 'background').setScale(1)
        this.tablebg = this.add.image(400, 250, 'tablebg').setScale(0.55)
        this.cardscontainer = this.add.container();
        this.showcards()

    }
    showcards() {
        count++;
        this.cardsbundle = this.add.image(300, 200, 'cards').setScale(0.10);
        getcards = Math.floor(Math.random() * (max - min + 1) + min) - 1;
        playercards.push(getcards)
        var suitcards = "cards_" + getcards;
        console.log(suitcards)
        this.cardsimage = this.add.image(300, 200, suitcards).setScale(0.1);
        this.cardsimage.setDataEnabled();
        this.cardsimage.setData({ index: suitcards })
        this.cardscontainer.add(this.cardsimage)
        console.log(this.cardsimage.data.list.index)
        this.printcards(count)
    }
    printcards(count) {
        console.log("printcards")
        this.tween = this.tweens.add({
            targets: this.cardsimage,
            x: xpos[count - 1],
            y: 300,
            yoyo: false,
            repeat: 0,
            duration: 100,
            onComplete: function() {
                if (count < 13) {
                    this.showcards();
                } else {
                    console.log(this.cardscontainer.length)
                    this.createsortbutton();
                }
            },
            onCompleteScope: this

        })
    }
    createsortbutton() {
        this.sortcontainer = this.add.container()
        this.sortbutton = this.add.image(400, 360, 'sort').setScale(0.5).setInteractive({ cursor: 'pointer' })
        this.sorttext = this.add.text(375, 350, 'SORT', {
            fontSize: '18px',
            fontFamily: 'Arial',
            fill: '#fff',
            align: 'center',
            shadow: {
                offsetX: 0,
                offsetY: 0,
                color: '#000',
                blur: 0,
                stroke: false,
                fill: false
            },
        });
        this.sortbutton.on('pointerdown', function() {
            this.groupcards(playercards);
        }, this)
        this.sortcontainer.add([this.sortbutton, this.sorttext])
    }
    groupcards(playercards) {
        playercards.sort(function(a, b) {
            return a - b
        });
        this.createsorts();
        this.printsortcards();
    }
    createsorts() {
        suit_one = [];
        suit_two = [];
        suit_three = [];
        suit_four = [];
        suit_five = [];
        suit_six = [];

        for (let i = 0; i < playercards.length; i++) {
            console.log("playercards2 = " + playercards[i]);

            if (playercards[i] >= 0 && playercards[i] <= 12) {
                suit_one.push(playercards[i]);
            }

            if (playercards[i] >= 13 && playercards[i] <= 25) {
                suit_two.push(playercards[i]);
            }

            if (playercards[i] >= 26 && playercards[i] <= 38) {
                suit_three.push(playercards[i]);
            }

            if (playercards[i] >= 39 && playercards[i] <= 51) {
                suit_four.push(playercards[i]);
            }

            if (playercards[i] == 52) {
                suit_five.push(playercards[i]);
            }

        }
        console.log("--1--" + suit_one + "--2-" + suit_two + "--3--" + suit_three + "--4--" + suit_four + "--5--" + suit_five)
    }
    printsortcards() {
        if (this.sortcontainer != undefined) {
            this.sortcontainer.destroy()
        }
        console.log("printsortcards")
        var counter = 0;
        if (this.cardscontainer != undefined) {
            this.cardscontainer.destroy()
        }
        console.log("cardscontainer" + this.cardscontainer.length)
        this.suitCommonContainer = this.add.container();
        this.suitCommonContainer.depth = 80;
        var arraynames = [];
        var containernames = [];
        sortedarrays = [];
        sortedarrays.push(suit_one, suit_two, suit_three, suit_four, suit_five, suit_six);
        arraynames = ['suit_one', 'suit_two', 'suit_three', 'suit_four', 'suit_five', 'suit_six'];
        containernames = ['containerone', 'containertwo', 'containerthree', 'containerfour', 'containerfive', 'containersix'];

        var x_pos = 0;
        var y_pos = 300;
        var suit_index = 1;

        if (suit_one != '' && suit_two == '' && suit_three == '' && suit_four == '' && suit_five == '' && suit_six == '') {
            console.log("Suit1");
            x_pos = 200;
        } else if (suit_one != '' && suit_two == '' && suit_three == '' && suit_four == '' && suit_five == '' && suit_six != '') {
            console.log("Suit1 - Suit6");
            x_pos = 170;
        } else if (suit_six != '') {
            console.log("Suit6");
            x_pos = 175;
        } else if (suit_five != '') {
            console.log("Suit5");
            x_pos = 245;
        } else {
            console.log("executed");
            x_pos = 170;
        }
        var sortarraydatalength = sortedarrays.length;
        var incrementofsuitname = 1;
        this.input.addPointer(14);
        if (sortedarrays != null) {
            for (let i = 0; i < sortarraydatalength; i++) {
                incrementofsuitname = 1;
                if (sortedarrays[i].length != 0) {
                    for (let y = 0; y < sortedarrays[i].length; y++) {
                        console.log(sortedarrays[i][y])
                        var suitcards1 = "cards_" + sortedarrays[i][y]
                        this.suit_one = this.add.image(x_pos, y_pos, suitcards1).setScale(0.1).setInteractive({ cursor: 'pointer' });
                        console.log("playercard123 = " + sortedarrays[i][y]);
                        this.suit_one.setDataEnabled();
                        this.suit_one.setData({
                            cardindex: suitcards1
                        });
                        suit_index++;
                        x_pos += 30;
                        incrementofsuitname++;
                        this.suitCommonContainer.add(this.suit_one);
                        this.input.setDraggable(this.suit_one);
                    }
                    x_pos += 45;
                }
            }
        }
        this.suitCommonContainer.each(function(child) {
            child.on('pointerdown', function() {
                counter++;
                if (counter == 1) {
                    child.y = 290;
                    // discardkey = child.data.list.cardindex
                    this.discardcont = this.add.container()
                    this.discardcard = this.add.image(300, 360, 'discard').setScale(0.5).setInteractive({ cursor: 'pointer' })
                    this.discardtext = this.add.text(275, 350, 'Discard', {
                        fontSize: '16px',
                        fontFamily: 'Arial',
                        fill: '#fff',
                        align: 'center',
                        shadow: {
                            offsetX: 0,
                            offsetY: 0,
                            color: '#000',
                            blur: 0,
                            stroke: false,
                            fill: false
                        },
                    });
                    this.discardcard.on('pointerdown', function() {
                        this.tween = this.tweens.add({
                            targets: child,
                            x: 450,
                            y: 200,
                            duration: 100,
                            ease: 'Linear',
                            angle: -180,
                            yoyo: false,
                            repeat: 0,
                            onComplete: function() {
                                counter = 0;
                                child.scaleX = 0.07
                                child.scaleY = 0.07
                                selectedchild = playercards.at(discardkey);
                                playercards.splice(discardkey, 1)

                            },
                            onCompleteScope: this
                        });
                    }, this)
                    this.discardcont.add([this.discardcard, this.discardtext])
                } else {
                    // if (discardkey == child.data.list.cardindex) {
                    //     this.tween = this.tweens.add({
                    //         targets: child,
                    //         x: 450,
                    //         y: 200,
                    //         duration: 100,
                    //         ease: 'Linear',
                    //         angle: -180,
                    //         yoyo: false,
                    //         repeat: 0,
                    //         onComplete: function() {
                    //             counter = 0;
                    //             child.scaleX = 0.07
                    //             child.scaleY = 0.07
                    //             selectedchild = playercards.at(discardkey);
                    //             playercards.splice(discardkey, 1)

                    //         },
                    //         onCompleteScope: this
                    //     });
                    // else {
                    this.suitCommonContainer.each(function(child) {
                        // if (child.data.list.cardindex == discardkey) {
                        child.y = 300;
                        // }
                    }, this);
                    child.y = 290;
                    discardkey = child.data.list.cardindex;
                    // }
                }

            }, this)
        }, this)
    }
}