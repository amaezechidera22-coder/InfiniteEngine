/**
 * ===========================================================
 * THE INFINITE ENGINE
 *
 * Ring.js
 *
 * Rotating energy containment ring.
 *
 * Controlled by:
 * DNA
 * Material
 * Energy system
 * ===========================================================
 */


export default class Ring {



    constructor(
        p,
        radius,
        speed,
        material = null,
        dna = null
    ){


        this.p = p;


        this.radius = radius;


        this.speed = speed;


        this.material = material;


        this.dna = dna;


        this.rotation = 0;


        this.time =
            p.random(1000);



    }





    update(){


        this.rotation +=

            this.speed;


        this.time +=

            0.03;


    }





    draw(){


        const p =
            this.p;



        p.push();



        p.rotate(

            this.rotation

        );




        const energy =


            this.dna

                ?

                this.dna.energyStrength

                :

                1;





        const intensity =


            this.material

                ?

                this.material.properties.intensity

                :

                1;





        const glow =


            this.material

                ?

                this.material.properties.glow

                :

                "#82dcff";






        // BREATHING EFFECT


        const pulse =


            Math.sin(

                this.time

            )

            *

            2;







        // MAIN RING


        p.noFill();



        p.stroke(

            glow

        );



        p.drawingContext.shadowBlur =

            25
            *
            intensity
            *
            energy;



        p.drawingContext.shadowColor =

            glow;




        p.strokeWeight(2);



        p.circle(

            0,

            0,

            this.radius * 2
            +
            pulse

        );








        // MECHANICAL SEGMENTS


        const segments = 24;




        for(

            let i = 0;

            i < segments;

            i++

        ){



            const angle =

                (

                    360

                    /

                    segments

                )

                *

                i;




            p.push();




            p.rotate(

                p.radians(

                    angle

                )

            );




            p.stroke(

                glow

            );



            p.strokeWeight(3);




            p.line(

                this.radius - 8,

                0,

                this.radius + 8,

                0

            );




            p.pop();



        }








        // INNER RING



        p.strokeWeight(1);



        p.circle(

            0,

            0,

            (

                this.radius - 12

            )

            *

            2

        );







        p.drawingContext.shadowBlur = 0;



        p.pop();



    }



}