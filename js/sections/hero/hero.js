"use strict";

/* ==========================================================
   Hero Section
   Orchestrator

   Responsible for:
   - Initializing Hero
   - Coordinating Hero Components

   Author : Ram Nishal M
   Version : 1.5.0
========================================================== */

import { getPortfolioData } from "../../core/appState.js";

import { createHeroContent } from "./heroContent.js";

import { createHeroButtons } from "./heroButtons.js";

import { createHeroSocial } from "./heroSocial.js";

import { createHeroImage } from "./heroImage.js";

import { createHeroScrollIndicator } from "./heroScroll.js";

export function initializeHero() {

    const data = getPortfolioData();

    if (!data) return;

    const section = document.querySelector(

        "#hero .section-content"

    );

    if (!section) return;

    section.replaceChildren();

    const grid = document.createElement("div");

    grid.className = "hero-grid";

    const left = document.createElement("div");

    left.className = "hero-left";

    const right = document.createElement("div");

    right.className = "hero-right";

    left.append(

        createHeroContent(data),

        createHeroButtons(data),

        createHeroSocial(data)

    );

    right.append(

        createHeroImage(data)

    );

    grid.append(

        left,

        right

    );

    section.append(

        grid,

        createHeroScrollIndicator()

    );

}