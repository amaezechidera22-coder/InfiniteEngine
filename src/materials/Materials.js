/**
 * ===========================================================
 * THE INFINITE ENGINE
 *
 * Materials.js
 *
 * Converts DNA materials into visual and behaviour properties.
 *
 * Each material has its own personality.
 * ===========================================================
 */


export default class Materials {



    constructor(type){


        this.type = type;


        this.properties =
            this.generate(type);


    }





    generate(type){


        switch(type){



            case "Titanium":

                return {

                    name:"Titanium",

                    description:
                        "A stable mechanical alloy built for precision.",


                    primary:"#b8c6d1",

                    glow:"#4fdcff",

                    reflection:0.8,

                    intensity:1,


                    plasma:"#4fdcff",

                    energy:1


                };





            case "Obsidian":

                return {


                    name:"Obsidian",


                    description:
                        "A dark material carrying mysterious energy.",


                    primary:"#090014",

                    glow:"#8b5cff",

                    reflection:0.9,

                    intensity:1.4,


                    plasma:"#8b5cff",

                    energy:1.3


                };





            case "Gold":

                return {


                    name:"Gold",


                    description:
                        "A rare conductive material with powerful resonance.",


                    primary:"#ffd700",

                    glow:"#ff9d00",

                    reflection:0.7,

                    intensity:1.2,


                    plasma:"#ff9d00",

                    energy:1.2


                };





            case "Crystal":

                return {


                    name:"Crystal",


                    description:
                        "A transparent energy conductor.",


                    primary:"#00ffff",

                    glow:"#9fffff",

                    reflection:1,

                    intensity:1.6,


                    plasma:"#00ffff",

                    energy:1.5


                };





            case "Carbon":

                return {


                    name:"Carbon",


                    description:
                        "A lightweight dark structural material.",


                    primary:"#222222",

                    glow:"#555555",

                    reflection:0.5,

                    intensity:0.7,


                    plasma:"#555555",

                    energy:0.8


                };





            case "Quantum Alloy":

                return {


                    name:"Quantum Alloy",


                    description:
                        "An unstable material beyond conventional engineering.",


                    primary:"#ffffff",

                    glow:"#ff00ff",

                    reflection:1.2,

                    intensity:2,


                    plasma:"#ff00ff",

                    energy:2


                };





            default:


                return {


                    name:"Unknown",

                    description:
                        "Unclassified material.",


                    primary:"#ffffff",

                    glow:"#ffffff",

                    reflection:1,

                    intensity:1,


                    plasma:"#ffffff",

                    energy:1


                };


        }


    }





    getPrimary(){


        return this.properties.primary;


    }





    getGlow(){


        return this.properties.glow;


    }





    getEnergy(){


        return this.properties.energy;


    }





    getPlasmaColor(){


        return this.properties.plasma;


    }


}