import "./style.css";

import p5 from "p5";

import Engine from "./core/Engine.js";

const sketch = (p) => {

    let engine;

    p.setup = () => {

        p.createCanvas(
            p.windowWidth,
            p.windowHeight
        );

        p.angleMode(p.DEGREES);

        engine = new Engine(p);

    };

    p.draw = () => {

        p.background(
            5,
            8,
            15
        );

        engine.update();

        engine.draw();

    };

    p.windowResized = () => {

        p.resizeCanvas(
            p.windowWidth,
            p.windowHeight
        );

    };

};

new p5(sketch);