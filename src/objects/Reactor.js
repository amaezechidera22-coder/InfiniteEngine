export default class Reactor {

    constructor(p, dna, material){

        this.p = p;
        this.dna = dna;
        this.material = material;

        this.time = 0;

    }

    update(){

        this.time += 0.05;

    }

    draw(){

        const p = this.p;

        const pulse =
            this.dna.coreSize +
            Math.sin(this.time)
            * 4
            * this.dna.energyStrength
            +
            Math.sin(this.time * 2)
            * 2;
        p.noStroke();


// ENERGY AURA

        p.drawingContext.shadowBlur =
            50 *
            this.material.properties.intensity;

        p.drawingContext.shadowColor =
            this.material.properties.glow;


// OUTER ENERGY CORE

        p.fill(
            this.material.properties.primary
        );

        p.circle(
            0,
            0,
            pulse * 2
        );


// INNER LIGHT

        p.fill(
            this.material.properties.glow
        );

        p.circle(
            0,
            0,
            pulse
        );

    }

}