/**
 * ===========================================================
 * THE INFINITE ENGINE
 *
 * DNA.js
 *
 * The genetic system of every Engine.
 *
 * Same seed = same Engine.
 * Every trait is generated from DNA.
 * ===========================================================
 */


export default class DNA {


    constructor(
        seed = Math.floor(
            Math.random() * 1000000000
        )
    ){


        this.seed = seed;


        this.random =
            this.createRandom(seed);



        // IDENTITY

        this.id =
            "ENGINE-" +
            seed;



        // CORE SYSTEM


        this.coreSize =
            this.range(30,45);



        this.outerRadius =
            this.range(160,190);



        this.rotationSpeed =
            this.range(0.2,0.8);



        this.energyStrength =
            this.range(0.8,1.5);



        this.reactorPower =
            this.range(1,10);



        // MECHANICAL SYSTEM


        this.gears =
            this.integer(5,9);



        this.gearSize =
            this.range(25,45);



        this.rings =
            this.integer(2,4);



        this.gearDistance =
            this.range(65,100);



        // PARTICLE SYSTEM


        this.particleCount =
            this.integer(80,180);



        this.plasmaFrequency =
            this.range(20,80);



        this.glow =
            this.range(10,30);




        // MATERIAL


        this.material =
            this.pick([

                "Titanium",

                "Obsidian",

                "Gold",

                "Crystal",

                "Carbon",

                "Quantum Alloy"

            ]);




        // RARITY


        this.rarity =
            this.calculateRarity();



        this.applyRarityBoost();



    }





    applyRarityBoost(){


        if(this.rarity === "Legendary"){


            this.energyStrength *= 1.5;

            this.reactorPower *= 1.5;

            this.material =
                "Quantum Alloy";


        }



        if(this.rarity === "Epic"){


            this.energyStrength *= 1.25;

            this.reactorPower *= 1.25;


        }



        if(this.rarity === "Rare"){


            this.energyStrength *= 1.1;


        }


    }





    createRandom(seed){


        let value = seed;


        return ()=>{


            value =
                (
                    value *
                    1664525 +
                    1013904223
                )
                %
                4294967296;



            return value / 4294967296;


        };


    }





    range(min,max){


        return min +
            (
                max-min
            )
            *
            this.random();


    }





    integer(min,max){


        return Math.floor(

            this.range(
                min,
                max + 1
            )

        );


    }





    pick(array){


        return array[

            Math.floor(

                this.random()
                *
                array.length

            )

            ];


    }





    calculateRarity(){


        const value =
            this.random();



        if(value < 0.01)

            return "Legendary";



        if(value < 0.05)

            return "Epic";



        if(value < 0.20)

            return "Rare";



        return "Common";


    }


}