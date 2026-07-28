/**
 * ===========================================================
 * THE INFINITE ENGINE
 *
 * Reactor.js
 *
 * Energy reactor at the heart of every Engine.
 * ===========================================================
 */

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
            this.dna.coreSize
            +
            Math.sin(this.time)
            *
            4
            *
            this.dna.energyStrength
            +
            Math.sin(this.time * 2)
            *
            2;

        p.noStroke();

        // Glow

        p.drawingContext.shadowBlur =
            45 *
            this.material.properties.intensity;

        p.drawingContext.shadowColor =
            this.material.properties.glow;

        // Outer energy

        p.fill(
            this.material.properties.primary
        );

        p.circle(
            0,
            0,
            pulse * 2
        );

        // Middle core

        p.fill(
            this.material.properties.glow
        );

        p.circle(
            0,
            0,
            pulse * 1.2
        );

        // Bright nucleus

        p.fill(
            255,
            255,
            255,
            180
        );

        p.circle(
            0,
            0,
            pulse * 0.45
        );

        // Reset shadow so it doesn't affect other drawings

        p.drawingContext.shadowBlur = 0;

    }

}