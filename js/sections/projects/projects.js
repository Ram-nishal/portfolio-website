"use strict";

/* ==========================================================
   Projects Section
   Orchestrator

   Responsible for:
   - Initializing Projects Section
   - Coordinating Components

   Author : Ram Nishal M
   Version : 2.4.0
========================================================== */

import { getPortfolioData } from "../../core/appState.js";

import { createProjectsHeader } from "./projectsHeader.js";
import { createProjectsGrid } from "./projectsGrid.js";

export function initializeProjects() {

    const data = getPortfolioData();

    if (!data) return;

    const section = document.querySelector(
        "#projects .section-content"
    );

    if (!section) return;

    section.replaceChildren();

    const header = createProjectsHeader(data);

    const grid = createProjectsGrid(data);

    section.append(
        header,
        grid
    );

}