/**
 * ===========================================================
 * THE INFINITE ENGINE
 *
 * Gear.js
 *
 * Mechanical gear component.
 *
 * Each gear has:
 * - position
 * - rotation speed
 * - teeth
 * - mechanical movement
 * ===========================================================
 */


export default class Gear {


    constructor(
        p,
        radius,
        speed,
        angle,
        distance
    ){


        this.p = p;


        this.radius = radius;


        this.speed = speed;


        this.orbitAngle = angle;


        this.distance = distance;



        this.rotation = 0;



        this.teeth = Math.floor(

            radius / 4

        );



    }





    update(){


        // Orbit movement

        this.orbitAngle +=
            this.speed * 0.002;




        // Actual gear rotation

        this.rotation +=
            this.speed;



    }







    draw(){


        const p =
            this.p;



        p.push();




        // Move to gear position

        p.rotate(
            this.orbitAngle
        );



        p.translate(

            this.distance,

            0

        );





        // Rotate gear itself

        p.rotate(

            this.rotation

        );






        // METAL BODY


        p.noFill();


        p.stroke(
            180,
            200,
            220
        );


        p.strokeWeight(3);




        p.circle(

            0,

            0,

            this.radius

        );







        // INNER CORE HOLE


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






        p.pop();


    }


}