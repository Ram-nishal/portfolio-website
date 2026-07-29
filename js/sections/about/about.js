"use strict";

/* ==========================================================
   About Section
   Version : 1.7.0
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

    /*
    ------------------------------------
    Top
    ------------------------------------
    */

    const top = document.createElement("div");
    top.className = "about-top";

    top.append(
        createAboutContent(data),
        createAboutStats(data)
    );

    /*
    ------------------------------------
    Bottom
    ------------------------------------
    */

    const bottom = document.createElement("div");
    bottom.className = "about-bottom";

    const title = document.createElement("h3");

    title.className = "about-subtitle";

    title.textContent = "What I Do";

    bottom.append(
        title,
        createAboutCards(data)
    );

    section.append(
        top,
        bottom
    );

}