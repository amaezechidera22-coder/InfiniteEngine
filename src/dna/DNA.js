/**
 * ===========================================================
 * THE INFINITE ENGINE
 *
 * DNA.js
 *
 * Every Engine is born from a deterministic DNA sequence.
 * Using the same seed will always generate the same Engine.
 * ===========================================================
 */

export default class DNA {

    constructor(seed = Math.floor(Math.random() * 1000000000)) {

        this.seed = seed;

        this.random = this.createRandom(seed);

        // ==========================
        // CORE
        // ==========================

        this.coreSize = this.range(30, 45);

        this.outerRadius = this.range(150, 190);

        this.rotationSpeed = this.range(0.2, 0.8);

        this.energyStrength = this.range(0.6, 1.5);

        // ==========================
        // MATERIAL
        // ==========================

        this.material = this.pick([
            "Titanium",
            "Obsidian",
            "Gold",
            "Crystal",
            "Carbon",
            "Quantum Alloy"
        ]);

        // ==========================
        // MECHANICS
        // ==========================

        this.ringCount = this.integer(2, 4);

        this.gearCount = this.integer(4, 10);

        this.gearSize = this.range(20, 38);

        this.particleDensity = this.integer(20, 80);

        this.pulseSpeed = this.range(0.02, 0.08);

        // ==========================
        // RARITY
        // ==========================

        this.rarity = this.calculateRarity();

    }

    createRandom(seed) {

        let value = seed;

        return () => {

            value =
                (value * 1664525 + 1013904223) % 4294967296;

            return value / 4294967296;

        };

    }

    randomValue() {

        return this.random();

    }

    range(min, max) {

        return min + (max - min) * this.random();

    }

    integer(min, max) {

        return Math.floor(
            this.range(min, max + 1)
        );

    }

    pick(array) {

        return array[
            Math.floor(
                this.random() * array.length
            )
            ];

    }

    calculateRarity() {

        const value = this.random();

        if (value < 0.01) return "Legendary";

        if (value < 0.05) return "Epic";

        if (value < 0.20) return "Rare";

        return "Common";

    }

}