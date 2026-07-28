/**
 * ===========================================================
 * THE INFINITE ENGINE
 *
 * PlasmaArc.js
 *
 * Living electricity between containment nodes.
 * ===========================================================
 */

export default class PlasmaArc {

    constructor(p, material) {

        this.p = p;
        this.material = material;

        this.life = 0;
        this.duration = 0;

        this.start = null;
        this.end = null;

    }

    connect(startNode, endNode) {

        this.start = startNode;
        this.end = endNode;

        this.life = 255;

        this.duration =
            this.p.random(8,18);

    }

    update() {

        if(this.life > 0){

            this.life -=
                255 / this.duration;

        }

    }

    active(){

        return this.life > 0;

    }

    draw(){

        if(
            !this.active()
            ||
            !this.start
            ||
            !this.end
        ){
            return;
        }

        const p = this.p;

        p.push();

        p.noFill();

        p.strokeWeight(2);

        p.stroke(
            this.material.properties.glow
        );

        p.drawingContext.shadowBlur = 20;

        p.drawingContext.shadowColor =
            this.material.properties.glow;

        const x1 =
            Math.cos(
                p.radians(this.start.angle)
            )
            *
            this.start.distance;

        const y1 =
            Math.sin(
                p.radians(this.start.angle)
            )
            *
            this.start.distance;

        const x2 =
            Math.cos(
                p.radians(this.end.angle)
            )
            *
            this.end.distance;

        const y2 =
            Math.sin(
                p.radians(this.end.angle)
            )
            *
            this.end.distance;

        const segments = 10;

        p.beginShape();

        for(
            let i = 0;
            i <= segments;
            i++
        ){

            const t =
                i / segments;

            const x =
                p.lerp(x1,x2,t)
                +
                p.random(-8,8);

            const y =
                p.lerp(y1,y2,t)
                +
                p.random(-8,8);

            p.vertex(x,y);

        }

        p.endShape();

        p.drawingContext.shadowBlur = 0;

        p.pop();

    }

}