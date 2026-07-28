export default class Ring {


    constructor(p, radius, speed){


        this.p = p;

        this.radius = radius;

        this.speed = speed;

        this.angle = 0;


    }



    update(){

        this.angle += this.speed;

    }



    draw(){

        const p = this.p;


        p.push();


        p.rotate(
            this.angle
        );


        p.noFill();


        p.stroke(
            100
        );


        p.strokeWeight(
            2
        );


        p.circle(

            0,
            0,
            this.radius

        );


        p.pop();

    }


}