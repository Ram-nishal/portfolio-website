"use strict";

/* ==========================================================
   Experience Section
   Orchestrator

   Responsible for:
   - Initializing Experience Section
   - Coordinating Components

   Author : Ram Nishal M
   Version : 2.3.0
========================================================== */

import { getPortfolioData } from "../../core/appState.js";

import { createExperienceHeader } from "./experienceHeader.js";
import { createExperienceTimeline } from "./experienceTimeline.js";

export function initializeExperience() {

    const data = getPortfolioData();

    if (!data) return;

    const section = document.querySelector(
        "#experience .section-content"
    );

    if (!section) return;

    section.replaceChildren();

    const header = createExperienceHeader(data);

    const timeline = createExperienceTimeline(data);

    section.append(

        header,

        timeline

    );

}