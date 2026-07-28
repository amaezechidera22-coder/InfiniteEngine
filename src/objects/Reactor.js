/**
 * ===========================================================
 * THE INFINITE ENGINE
 *
 * Reactor.js
 *
 * Energy reactor at the heart of every Engine.
 *
 * Controlled by:
 * DNA
 * Material
 * Rarity
 * ===========================================================
 */


export default class Reactor {



    constructor(
        p,
        dna,
        material
    ){


        this.p = p;


        this.dna = dna;


        this.material = material;


        this.time = 0;



        this.instability =
            this.dna.rarity === "Legendary"
                ? 0.8
                :
                this.dna.rarity === "Epic"
                    ? 0.5
                    :
                    0.2;



    }





    update(){


        this.time +=
            0.05 *
            this.dna.rotationSpeed;


    }





    draw(){


        const p =
            this.p;



        const materialEnergy =
            this.material.properties.energy || 1;



        const rarityMultiplier =
            this.dna.rarity === "Legendary"
                ? 1.5
                :
                this.dna.rarity === "Epic"
                    ? 1.25
                    :
                    this.dna.rarity === "Rare"
                        ? 1.1
                        :
                        1;



        const breathing =
            Math.sin(this.time)
            *
            4
            *
            this.dna.energyStrength;



        const unstable =
            Math.sin(
                this.time * 3
            )
            *
            this.instability
            *
            5;




        const pulse =

            this.dna.coreSize

            +

            breathing

            +

            unstable;



        const power =

            materialEnergy
            *
            rarityMultiplier;





        p.noStroke();




        // ENERGY FIELD


        p.drawingContext.shadowBlur =

            45
            *
            this.material.properties.intensity
            *
            power;



        p.drawingContext.shadowColor =

            this.material.properties.glow;




        // OUTER CORE


        p.fill(

            this.material.properties.primary

        );


        p.circle(

            0,

            0,

            pulse * 2

        );





        // INNER ENERGY


        p.fill(

            this.material.properties.glow

        );


        p.circle(

            0,

            0,

            pulse * 1.2

        );





        // NUCLEUS


        p.fill(

            255,

            255,

            255,

            200

        );


        p.circle(

            0,

            0,

            pulse
            *
            0.45

        );





        // RESET GLOW


        p.drawingContext.shadowBlur = 0;



    }



}