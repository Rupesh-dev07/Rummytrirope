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
class Gametable extends Phaser.Scene {
    constructor() {
        super("Gametable")
    }
    create() {
        console.log("Gametable ")
        this.gamebg = this.add.image(400, 250, 'background').setScale(1)
        this.tablebg = this.add.image(400, 250, 'tablebg').setScale(0.55)

        this.showcards()

    }
    showcards() {

        count++;
        this.cardsbundle = this.add.image(300, 200, 'cards').setScale(0.10);
        this.cardscontainer = this.add.container();
        getcards = Math.floor(Math.random() * (max - min + 1) + min) - 1;
        playercards.push(getcards)
        var suitcards = "cards_" + getcards;
        console.log(suitcards)
        this.cardsimage = this.add.image(300, 200, suitcards).setScale(0.1);
        // this.cardscontainer.add([this.cardsimage])
        console.log("Cardscontainercount" + this.cardscontainer.length)
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
                        this.createsortbutton();
                    }
                },
                onCompleteScope: this

            })
            // this.cardscontainer = this.add.container();
            // for (var i = 0; i < 13; i++) {
            //     getcards = Math.floor(Math.random() * (max - min + 1) + min);
            //     var suitcards = "cards_" + getcards;
            //     this.cardsimage = this.add.image(xpos[i], 300, suitcards).setScale(0.1);
            //     this.cardscontainer.add([this.cardsimage])
            // this.tween = this.tweens.add({

        // })
        // }
        this.cardscontainer.add([this.cardsimage])
    }
    createsortbutton() {
        this.sortbutton = this.add.image(650, 300, 'sort').setScale(0.5).setInteractive({ cursor: 'pointer' })
        this.sorttext = this.add.text(625, 290, 'SORT', {
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
        // if (this.cardscontainer != undefined) {
        this.cardscontainer.destroy()
        console.log("cardscontainer" + this.cardscontainer.length)
            // }
            // this.suitCommonContainer = this.add.container();
            // this.suitCommonContainer.depth = 80;
            // var arraynames = [];
            // var containernames = [];
            // sortedarrays = [];
            // sortedarrays.push(suit_one, suit_two, suit_three, suit_four, suit_five, suit_six);
            // arraynames = ['suit_one', 'suit_two', 'suit_three', 'suit_four', 'suit_five', 'suit_six'];
            // containernames = ['containerone', 'containertwo', 'containerthree', 'containerfour', 'containerfive', 'containersix'];



        // var x_pos = 0;
        // var y_pos = 300;
        // var suit_index = 1;

        // if (suit_one != '' && suit_two == '' && suit_three == '' && suit_four == '' && suit_five == '' && suit_six == '') {
        //     console.log("executed");
        //     x_pos = 430;
        // } else if (suit_one != '' && suit_two == '' && suit_three == '' && suit_four == '' && suit_five == '' && suit_six != '') {
        //     console.log("executed");
        //     x_pos = 400;
        // } else if (suit_six != '') {
        //     console.log("executed");
        //     x_pos = 205;
        // } else if (suit_five != '') {
        //     console.log("executed");
        //     x_pos = 275;
        // } else {
        //     console.log("executed");
        //     x_pos = 300;
        // }


        // var sortarraydatalength = sortedarrays.length;
        // var incrementofsuitname = 1;
        // this.input.addPointer(14);
        // if (sortedarrays != null) {
        //     for (let i = 0; i < sortarraydatalength; i++) {
        //         incrementofsuitname = 1;
        //         if (sortedarrays[i].length != 0) {
        //             for (let y = 0; y < sortedarrays[i].length; y++) {
        //                 console.log(sortedarrays[i][y])
        //                     // this.suit_one = this.add.image(x_pos, y_pos, 'playercard', sortedarrays[i][y] + '.png').setScale(0.80).setInteractive({
        //                     //     cursor: 'pointer'
        //                     // });
        //                     // var getcards1 = Math.floor(Math.random() * (max - min + 1) + min);
        //                 var suitcards1 = "cards_" + sortedarrays[i][y]
        //                 this.suit_one = this.add.image(x_pos, y_pos, suitcards1).setScale(0.1).setInteractive({ cursor: 'pointer' });
        //                 console.log("playercard123 = " + sortedarrays[i][y]);
        //                 this.suit_one.setDataEnabled();
        //                 this.suit_one.setData({
        //                     cardvalue: sortedarrays[i][y],
        //                     cardindex: y,
        //                     suitarray: sortedarrays[i],
        //                     suitname: arraynames[i],
        //                     containername: containernames[i],
        //                     groupcardindex: suit_index,
        //                     containervalue: true,
        //                     CardsXValue: x_pos,
        //                     CardsYValue: y_pos,
        //                     cardsuitindex: incrementofsuitname,
        //                     drag: true
        //                 });
        //                 suit_index++;
        //                 x_pos += 45;
        //                 incrementofsuitname++;
        //                 this.suitCommonContainer.add(this.suit_one);
        //                 this.input.setDraggable(this.suit_one);
        //             }
        //             x_pos += 74;
        //         }
        //     }
        // }
    }
}