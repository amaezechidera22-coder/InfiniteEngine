/**
 * ===========================================================
 * THE INFINITE ENGINE
 *
 * Node.js
 *
 * Energy containment node.
 * ===========================================================
 */

export default class Node {

    constructor(p, angle, distance, dna, material) {

        this.p = p;

        this.angle = angle;

        this.distance = distance;

        this.dna = dna;

        this.material = material;

        this.time = p.random(1000);

    }

    update() {

        this.time += 0.03;

    }

    draw() {

        const p = this.p;

        p.push();

        p.rotate(this.angle);

        p.translate(this.distance, 0);

        const pulse =
            Math.sin(this.time) * 3;

        // Glow

        p.drawingContext.shadowBlur =
            25 * this.material.properties.intensity;

        p.drawingContext.shadowColor =
            this.material.properties.glow;

        // Outer node

        p.noStroke();

        p.fill(
            this.material.properties.primary
        );

        p.circle(
            0,
            0,
            12 + pulse
        );

        // Inner core

        p.fill(
            this.material.properties.glow
        );

        p.circle(
            0,
            0,
            6 + pulse * 0.5
        );

        p.drawingContext.shadowBlur = 0;

        p.pop();

    }

}