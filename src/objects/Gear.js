export default class Gear {


    constructor(
        p,
        radius,
        speed,
        offset,
        distance
    ){

        this.p = p;

        this.radius = radius;

        this.speed = speed;

        this.angle = offset;

        this.distance = distance;

        this.orbitAngle = offset;

        this.rotation = 0;


        this.teeth = Math.floor(
            radius / 3
        );

    }



    update(){

        this.orbitAngle += this.speed * 0.02;

        this.rotation += this.speed;

    }



    draw() {

        const p = this.p;


        p.push();


        // move around engine center

        const x =
            Math.cos(this.orbitAngle)
            *
            this.distance;


        const y =
            Math.sin(this.orbitAngle)
            *
            this.distance;


        p.translate(
            x,
            y
        );


        // rotate the gear itself

        p.rotate(
            this.rotation
        );


        p.noFill();


        p.stroke(180);


        p.strokeWeight(3);


        // gear body

        p.circle(
            0,
            0,
            this.radius
        );


        // teeth

        for (
            let i = 0;
            i < this.teeth;
            i++
        ) {

            const angle =
                (Math.PI * 2 / this.teeth)
                * i;


            const toothX =
                Math.cos(angle)
                *
                this.radius / 2;


            const toothY =
                Math.sin(angle)
                *
                this.radius / 2;


            p.line(
                toothX,
                toothY,
                toothX * 1.3,
                toothY * 1.3
            );

        }


        p.pop();

    }}