/*
==================================================
The Infinite Engine
Engine Class
Version 2.0
==================================================
*/

import DNA from "../dna/DNA.js";
import Materials from "../materials/Materials.js";

import Reactor from "../objects/Reactor.js";
import Gear from "../objects/Gear.js";


export default class Engine {


    constructor(p) {


        this.p = p;


        // DNA CREATION

        this.dna = new DNA();



        // MATERIAL CREATION

        this.material = new Materials(
            this.dna.material
        );



        this.rotation = 0;



        // REACTOR

        this.reactor = new Reactor(
            p,
            this.dna,
            this.material
        );



        // GEARS

        this.gears = [];


        for(
            let i = 0;
            i < this.dna.gears;
            i++
        ){


            this.gears.push(

                new Gear(

                    p,

                    this.dna.gearSize *
                    (0.5 + Math.random()),


                    this.dna.rotationSpeed *
                    (
                        Math.random() > 0.5
                            ? 1
                            : -1
                    ),


                    Math.random()
                    *
                    Math.PI
                    *
                    2,


                    60 +
                    Math.random()
                    *
                    90

                )

            );


        }


    }



    update(){


        this.rotation += 0.3;



        this.reactor.update();



        this.gears.forEach(
            gear => gear.update()
        );


    }



    display(){


        const p = this.p;


        p.push();


        p.translate(
            p.width / 2,
            p.height / 2
        );



        p.rotate(
            this.rotation
        );



        // DRAW GEARS FIRST

        this.gears.forEach(
            gear => gear.draw()
        );



        // DRAW REACTOR

        this.reactor.draw();



        p.pop();


    }


}