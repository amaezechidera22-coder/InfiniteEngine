/**
 * ===========================================================
 * THE INFINITE ENGINE
 *
 * Particle.js
 *
 * Living energy particle.
 * ===========================================================
 */

export default class Particle {

    constructor(p, dna, material){

        this.p = p;
        this.dna = dna;
        this.material = material;

        this.reset();

    }

    reset(){

        const p = this.p;

        // Random position around the core

        this.angle = p.random(360);

        // Start close to the reactor

        this.radius =
            p.random(
                this.dna.coreSize * 0.8,
                this.dna.outerRadius * 0.35
            );

        // Orbit speed

        this.orbitSpeed =
            p.random(0.15,0.5);

        // Floating movement

        this.wave =
            p.random(1000);

        this.waveSpeed =
            p.random(0.01,0.04);

        // Particle size

        this.size =
            p.random(2,6);

        this.life =
            p.random(150,255);

        this.fade =
            p.random(0.3,1);

    }

    update(){

        this.angle += this.orbitSpeed;

        this.wave += this.waveSpeed;

        this.life -= this.fade;

        if(this.life <= 30){

            this.reset();

        }

    }

    draw(){

        const p = this.p;

        p.push();

        p.rotate(this.angle);

        const offset =
            Math.sin(this.wave) * 8;

        p.translate(
            this.radius + offset,
            0
        );

        p.noStroke();

        // Soft glow

        p.drawingContext.shadowBlur = 18;

        p.drawingContext.shadowColor =
            this.material.properties.glow;

        const glow =
            this.material.properties.glow;

        p.fill(
            glow + Math.floor(this.life).toString(16).padStart(2,"0")
        );

        p.circle(
            0,
            0,
            this.size
        );

        p.drawingContext.shadowBlur = 0;

        p.pop();

    }

}