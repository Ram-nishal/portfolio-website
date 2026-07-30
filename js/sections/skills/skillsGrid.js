"use strict";

/* ==========================================================
   Skills Section
   Grid Component

   Responsible for:
   - Rendering All Skill Categories
   - Creating Skill Cards

   Author : Ram Nishal M
   Version : 2.1.0
========================================================== */

import { createSkillCard } from "./skillCard.js";

export function createSkillsGrid(data) {

    const container = document.createElement("div");

    container.className = "skills-grid";

    data.skills.categories.forEach(category => {

        container.appendChild(

            createSkillCard(category)

        );

    });

    return container;

}