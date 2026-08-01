"use strict";

/* ==========================================================
   Education Section
   Orchestrator

   Responsible for:
   - Initializing Education Section
   - Coordinating Components

   Author : Ram Nishal M
   Version : 2.4.0
========================================================== */

import { getPortfolioData } from "../../core/appState.js";

import { createEducationHeader } from "./educationHeader.js";
import { createEducationTimeline } from "./educationTimeline.js";

export function initializeEducation() {

    const data = getPortfolioData();

    if (!data) return;

    const section = document.querySelector(
        "#education .section-content"
    );

    if (!section) return;

    section.replaceChildren();

    section.append(

        createEducationHeader(data),

        createEducationTimeline(data)

    );

}