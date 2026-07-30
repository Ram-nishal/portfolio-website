"use strict";

/* ==========================================================
   Skills Section
   Version : 2.1.0
========================================================== */

import { getPortfolioData } from "../../core/appState.js";

import { createSkillsHeader } from "./skillsHeader.js";
import { createSkillsGrid } from "./skillsGrid.js";

export function initializeSkills() {

    const data = getPortfolioData();

    if (!data) return;

    const section = document.querySelector(
        "#skills .section-content"
    );

    if (!section) return;

    section.replaceChildren();

    section.append(

        createSkillsHeader(data),

        createSkillsGrid(data)

    );

}