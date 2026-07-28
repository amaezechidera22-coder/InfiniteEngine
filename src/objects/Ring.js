/**
 * ===========================================================
 * THE INFINITE ENGINE
 *
 * Ring.js
 *
 * Rotating energy ring.
 * ===========================================================
 */

export default class Ring {

    constructor(
        p,
        radius,
        speed
    ){

        this.p = p;

        this.radius = radius;

        this.speed = speed;

        this.rotation = 0;

    }

    update(){

        this.rotation += this.speed;

    }

    draw(){

        const p = this.p;

        p.push();

        p.rotate(this.rotation);

        // Main ring

        p.noFill();

        p.stroke(
            130,
            220,
            255,
            180
        );

        p.strokeWeight(2);

        p.circle(
            0,
            0,
            this.radius * 2
        );

        // Mechanical segments

        const segments = 24;

        for(let i = 0; i < segments; i++){

            const angle = (360 / segments) * i;

            p.push();

            p.rotate(angle);

            p.stroke(
                180,
                240,
                255
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

        // Inner ring

        p.stroke(
            90,
            170,
            255,
            120
        );

        p.strokeWeight(1);

        p.circle(
            0,
            0,
            (this.radius - 12) * 2
        );

        p.pop();

    }

}