/**
 * ===========================================================
 * THE INFINITE ENGINE
 *
 * Particle.js
 *
 * Living energy particle.
 *
 * Reacts to:
 * DNA
 * Material
 * Rarity
 * ===========================================================
 */


export default class Particle {



    constructor(
        p,
        dna,
        material
    ){


        this.p = p;


        this.dna = dna;


        this.material = material;


        this.reset();


    }





    reset(){


        const p = this.p;



        this.angle =
            p.random(360);



        this.radius =

            p.random(

                this.dna.coreSize * 0.8,

                this.dna.outerRadius * 0.35

            );





        const materialPower =

            this.material.properties.energy || 1;



        this.orbitSpeed =

            p.random(
                0.15,
                0.5
            )
            *
            materialPower;





        this.wave =

            p.random(1000);





        this.waveSpeed =

            p.random(
                0.01,
                0.04
            )
            *
            materialPower;





        this.size =

            p.random(
                2,
                6
            )
            *
            materialPower;





        const rarityMultiplier =


            this.dna.rarity === "Legendary"
                ? 1.5
                :
                this.dna.rarity === "Epic"
                    ? 1.25
                    :
                    1;





        this.life =

            p.random(
                150,
                255
            )
            *
            rarityMultiplier;





        this.fade =

            p.random(
                0.3,
                1
            );



    }





    update(){



        this.angle +=
            this.orbitSpeed;



        this.wave +=
            this.waveSpeed;



        this.life -=
            this.fade;




        if(this.life <= 30){


            this.reset();


        }


    }





    draw(){


        const p =
            this.p;



        p.push();




        p.rotate(
            this.angle
        );




        const offset =

            Math.sin(
                this.wave
            )
            *
            8;





        p.translate(

            this.radius + offset,

            0

        );





        p.noStroke();





        const energyPulse =

            1 +
            Math.sin(
                this.wave
            )
            *
            0.2;





        p.drawingContext.shadowBlur =


            18
            *
            this.material.properties.intensity;





        p.drawingContext.shadowColor =

            this.material.properties.glow;





        p.fill(

            this.material.properties.glow

        );





        p.circle(

            0,

            0,

            this.size
            *
            energyPulse

        );





        p.drawingContext.shadowBlur = 0;



        p.pop();



    }



}