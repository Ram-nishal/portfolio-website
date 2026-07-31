"use strict";

/* ==========================================================
   Projects Section
   Grid Component

   Responsible for:
   - Rendering all project cards
   - Creating responsive project grid

   Author : Ram Nishal M
   Version : 2.4.0
========================================================== */

import { createProjectCard } from "./projectCard.js";

export function createProjectsGrid(data) {

    const grid = document.createElement("div");

    grid.className = "projects-grid";

    data.projects.items.forEach(project => {

        const card = createProjectCard(project);

        grid.appendChild(card);

    });

    return grid;

}