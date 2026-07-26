"use strict";

/* ==========================================================
   About Section
   Orchestrator

   Responsible for:
   - Initializing About Section
   - Coordinating About Components

   Author : Ram Nishal M
   Version : 1.6.0
========================================================== */

import { getPortfolioData } from "../../core/appState.js";

import { createAboutContent } from "./aboutContent.js";

import { createAboutStats } from "./aboutStats.js";

import { createAboutCards } from "./aboutCards.js";

export function initializeAbout() {

    const data = getPortfolioData();

    if (!data) return;

    const section = document.querySelector(

        "#about .section-content"

    );

    if (!section) return;

    section.replaceChildren();

    const grid = document.createElement("div");

    grid.className = "about-grid";

    const left = document.createElement("div");

    left.className = "about-left";

    const right = document.createElement("div");

    right.className = "about-right";

    left.append(

        createAboutContent(data),

        createAboutStats(data)

    );

    right.append(

        createAboutCards(data)

    );

    grid.append(

        left,

        right

    );

    section.appendChild(

        grid

    );

}