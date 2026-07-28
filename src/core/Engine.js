/**
 * ===========================================================
 * THE INFINITE ENGINE
 *
 * Engine.js
 *
 * Controls one living mechanical Engine.
 *
 * DNA creates the identity.
 * Gears, reactor and rings follow the DNA.
 * ===========================================================
 */


import DNA from "../dna/DNA.js";
import Materials from "../materials/Materials.js";

import Gear from "../objects/Gear.js";
import Reactor from "../objects/Reactor.js";
import Ring from "../objects/Ring.js";
import Particle from "../objects/Particle.js";



export default class Engine {



    constructor(p){


        this.p = p;



        // CREATE DNA

        this.dna = new DNA();




        // CREATE MATERIAL

        this.material =
            new Materials(
                this.dna.material
            );




        this.rotation = 0;




        // CREATE REACTOR


        this.reactor =
            new Reactor(
                p,
                this.dna,
                this.material
            );




        // CREATE ENERGY RINGS


        this.rings = [];



        for(
            let i = 0;
            i < this.dna.rings;
            i++
        ){


            this.rings.push(

                new Ring(

                    p,

                    this.dna.outerRadius
                    -
                    i * 35,


                    this.dna.rotationSpeed
                    *
                    (
                        i % 2 === 0
                            ? 1
                            : -1
                    )

                )

            );
            // CREATE ENERGY PARTICLES

            this.particles = [];

            for (let i = 0; i < 120; i++) {

                this.particles.push(

                    new Particle(
                        p,
                        this.dna,
                        this.material
                    )

                );

            }


        }






        // CREATE GEARS


        this.gears = [];



        for(
            let i = 0;
            i < this.dna.gears;
            i++
        ){



            const angle =
                (
                    360
                    /
                    this.dna.gears
                )
                *
                i;




            this.gears.push(


                new Gear(

                    p,


                    this.dna.gearSize,



                    this.dna.rotationSpeed
                    *
                    (
                        i % 2 === 0
                            ? 1
                            : -1
                    ),



                    angle,



                    this.dna.gearDistance


                )


            );


        }



    }







    update(){


        this.rotation +=
            this.dna.rotationSpeed;



        this.reactor.update();



        this.rings.forEach(

            ring =>
                ring.update()

        );



        this.gears.forEach(

            gear => gear.update()

        );
        this.particles.forEach(
            particle => particle.update()
        );


    }









    draw(){


        const p =
            this.p;



        p.push();




        p.translate(

            p.width / 2,

            p.height / 2

        );




        // ENERGY RINGS

        this.rings.forEach(
            ring => ring.draw()
        );


// GEARS

        this.gears.forEach(
            gear => gear.draw()
        );


// ENERGY PARTICLES

        this.particles.forEach(
            particle => particle.draw()
        );


// REACTOR

        this.reactor.draw();




        p.pop();


    }



}