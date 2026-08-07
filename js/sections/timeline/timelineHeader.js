"use strict";

/* ==========================================================
   Timeline Section
   Header Component

   Responsible for:
   - Section Title
   - Section Subtitle
   - Section Description

   Author : Ram Nishal M
   Version : 2.0.0
========================================================== */

import { getPortfolioData } from "../../core/appState.js";

export function createTimelineHeader() {

    /* ======================================================
       Portfolio Data
    ====================================================== */

    const data = getPortfolioData();

    const section = data.timeline;

    /* ======================================================
       Header
    ====================================================== */

    const header = document.createElement("div");

    header.className = "timeline-header";

    /* ======================================================
       Title
    ====================================================== */

    const title = document.createElement("span");

    title.className = "timeline-title";

    title.textContent = section.title;

    /* ======================================================
       Subtitle
    ====================================================== */

    const subtitle = document.createElement("h2");

    subtitle.className = "timeline-subtitle";

    subtitle.textContent = section.subtitle;

    /* ======================================================
       Description
    ====================================================== */

    const description = document.createElement("p");

    description.className = "timeline-description";

    description.textContent = section.description;

    /* ======================================================
       Assemble
    ====================================================== */

    header.append(

        title,

        subtitle,

        description

    );

    return header;

}