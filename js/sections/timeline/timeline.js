"use strict";

/* ==========================================================
   Timeline Section
   Orchestrator

   Responsible for:
   - Loading Timeline Section
   - Rendering Header
   - Rendering Timeline
   - Future Feature Entry Point

   Author : Ram Nishal M
   Version : 2.0.0
========================================================== */

import { getPortfolioData } from "../../core/appState.js";

import { createTimelineHeader } from "./timelineHeader.js";
import { createTimelineList } from "./timelineList.js";

export function initializeTimeline() {

    /* ======================================================
       Portfolio Data
    ====================================================== */

    const data = getPortfolioData();

    if (!data) return;

    /* ======================================================
       Timeline Container
    ====================================================== */

    const section = document.querySelector(
        "#timeline .section-content"
    );

    if (!section) return;

    section.replaceChildren();

    /* ======================================================
       Components
    ====================================================== */

    const header = createTimelineHeader();

    const timeline = createTimelineList();

    section.append(

        header,

        timeline

    );

}