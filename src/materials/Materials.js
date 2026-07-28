/**
 * ===========================================================
 * THE INFINITE ENGINE
 *
 * Materials.js
 *
 * Converts DNA materials into visual properties.
 * ===========================================================
 */


export default class Materials {


    constructor(type){

        this.type = type;

        this.properties = this.generate(type);

    }



    generate(type){


        switch(type){


            case "Titanium":

                return {

                    primary:"#b8c6d1",

                    glow:"#4fdcff",

                    reflection:0.8,

                    intensity:1

                };



            case "Obsidian":

                return {

                    primary:"#090014",

                    glow:"#8b5cff",

                    reflection:0.9,

                    intensity:1.4

                };



            case "Gold":

                return {

                    primary:"#ffd700",

                    glow:"#ff9d00",

                    reflection:0.7 ,

                    intensity:1.2

                };



            case "Crystal":

                return {

                    primary:"#00ffff",

                    glow:"#9fffff",

                    reflection:1  ,
                    intensity:1.6

                };



            case "Carbon":

                return {

                    primary:"#222222",

                    glow:"#555555",

                    reflection:0.5,

                    intensity:0.7

                };



            case "Quantum Alloy":

                return {

                    primary:"#ffffff",

                    glow:"#ff00ff",

                    reflection:1.2 ,

                    intensity:2

                };


            default:

                return {

                    primary:"#ffffff",

                    glow:"#ffffff",

                    reflection:1

                };

        }

    }


}