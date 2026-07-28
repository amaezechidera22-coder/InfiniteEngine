/**
 * ===========================================================
 * THE INFINITE ENGINE
 *
 * Node.js
 *
 * Energy containment node.
 *
 * Controls:
 * - Energy storage
 * - Plasma connection points
 * - Future chain reactions
 * ===========================================================
 */


export default class Node {



    constructor(
        p,
        angle,
        distance,
        dna,
        material
    ){


        this.p = p;


        this.angle = angle;


        this.distance = distance;


        this.dna = dna;


        this.material = material;


        this.time =
            p.random(1000);



        // ENERGY STATE


        this.energy =
            p.random(
                0.7,
                1.2
            );


        this.charge = 0;


        this.active = false;



    }





    update(){


        this.time +=
            0.03 *
            this.energy;



        // natural energy fluctuation


        this.charge =

            (
                Math.sin(this.time)
                + 1
            )
            *
            0.5;



    }





    draw(){


        const p =
            this.p;



        p.push();



        p.rotate(
            this.angle
        );



        p.translate(

            this.distance,

            0

        );





        const pulse =


            Math.sin(this.time)
            *
            3
            *
            this.energy;





        const glowPower =


            25
            *
            this.material.properties.intensity
            *
            this.energy;





        // ENERGY GLOW


        p.drawingContext.shadowBlur =
            glowPower;



        p.drawingContext.shadowColor =

            this.material.properties.glow;





        p.noStroke();





        // OUTER BODY


        p.fill(

            this.material.properties.primary

        );



        p.circle(

            0,

            0,

            12 + pulse

        );





        // INNER ENERGY


        p.fill(

            this.material.properties.glow

        );



        p.circle(

            0,

            0,

            6 +
            pulse * 0.5

        );





        // RESET


        p.drawingContext.shadowBlur =
            0;



        p.pop();



    }



}