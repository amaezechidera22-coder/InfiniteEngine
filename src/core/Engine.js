/**
 * ===========================================
 * THE INFINITE ENGINE
 * Engine.js
 *
 * Represents one Engine.
 * ===========================================
 */


import Gear from "../objects/Gear.js";
import Materials from "../materials/Materials.js";
import DNA from "../dna/DNA.js";
import Reactor from "../objects/Reactor.js";


export default class Engine {


    constructor(p) {


        this.p = p;


        this.rotation = 0;


        this.dna = new DNA();


        this.material = new Materials(
            this.dna.material
        );


        this.outerRadius =
            this.dna.outerRadius;


        this.coreRadius =
            this.dna.coreSize;



        this.reactor = new Reactor(
            p,
            this.dna,
            this.material
        );



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



                    (
                        this.dna.rotationSpeed *
                        (
                            Math.random() > 0.5
                                ? 1
                                : -1
                        )
                    )
                    +
                    (
                        Math.random() * 0.5
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


        this.rotation +=
            this.dna.rotationSpeed;



        this.reactor.update();



        this.gears.forEach(
            gear => gear.update()
        );


    }




    draw(){


        const p = this.p;


        p.push();



        p.translate(
            p.width / 2,
            p.height / 2
        );



        p.rotate(
            this.rotation
        );



        // Outer Ring

        p.noFill();


        p.stroke(220);


        p.strokeWeight(4);


        p.circle(
            0,
            0,
            this.outerRadius * 2
        );



        // Draw gears first

        this.gears.forEach(
            gear => gear.draw()
        );



        // Draw reactor on top

        this.reactor.draw();



        p.pop();


    }


}