/**
 * ===========================================================
 * THE INFINITE ENGINE
 *
 * Gear.js
 *
 * Mechanical gear component.
 *
 * Controlled by:
 * DNA
 * Material
 * Energy system
 * ===========================================================
 */


export default class Gear {



    constructor(
        p,
        radius,
        speed,
        angle,
        distance,
        material = null,
        dna = null
    ){


        this.p = p;


        this.radius = radius;


        this.speed = speed;


        this.orbitAngle = angle;


        this.distance = distance;


        this.material = material;


        this.dna = dna;



        this.rotation = 0;



        this.teeth = Math.floor(

            radius / 4

        );



        if(this.dna){


            this.teeth +=

                Math.floor(

                    this.dna.gears / 2

                );


        }



        this.offset =
            p.random(1000);



    }





    update(){



        this.orbitAngle +=

            this.speed
            *
            0.002;




        this.rotation +=

            this.speed;



        this.offset += 0.03;



    }







    draw(){


        const p =
            this.p;



        p.push();





        p.rotate(

            this.orbitAngle

        );




        p.translate(

            this.distance,

            0

        );





        p.rotate(

            this.rotation

        );






        const materialColor =

            this.material

                ?

                this.material.properties.primary

                :

                "#b8c6d1";





        const glowColor =

            this.material

                ?

                this.material.properties.glow

                :

                "#4fdcff";






        // ENERGY GLOW


        if(this.material){


            p.drawingContext.shadowBlur =

                15 *
                this.material.properties.intensity;



            p.drawingContext.shadowColor =

                glowColor;


        }







        // GEAR BODY


        p.noFill();


        p.stroke(
            materialColor
        );


        p.strokeWeight(3);




        p.circle(

            0,

            0,

            this.radius

        );







        // INNER CORE


        p.strokeWeight(2);


        p.circle(

            0,

            0,

            this.radius * 0.35

        );







        // TEETH


        for(

            let i = 0;

            i < this.teeth;

            i++

        ){



            const angle =

                (

                    Math.PI * 2

                    /

                    this.teeth

                )

                *

                i;





            const inner =

                this.radius * 0.5;





            const outer =

                this.radius * 0.65;





            const x1 =

                Math.cos(angle)

                *

                inner;




            const y1 =

                Math.sin(angle)

                *

                inner;





            const x2 =

                Math.cos(angle)

                *

                outer;




            const y2 =

                Math.sin(angle)

                *

                outer;





            p.line(

                x1,

                y1,

                x2,

                y2

            );



        }





        p.drawingContext.shadowBlur = 0;



        p.pop();



    }



}