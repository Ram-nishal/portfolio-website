"use strict";

/* ==========================================================
   Experience Section
   Timeline Component

   Responsible for:
   - Rendering Experience Cards
   - Building Timeline Layout

   Author : Ram Nishal M
   Version : 2.3.0
========================================================== */

import { createExperienceCard } from "./experienceCard.js";

export function createExperienceTimeline(data) {

    const timeline = document.createElement("div");

    timeline.className = "experience-timeline";

    /* ======================================================
       Empty State
    ====================================================== */

    if (!data.experience.items.length) {

        const empty = document.createElement("p");

        empty.className = "experience-empty";

        empty.textContent = "Experience details will be added soon.";

        timeline.appendChild(empty);

        return timeline;

    }

    /* ======================================================
       Experience Cards
    ====================================================== */

    data.experience.items.forEach(experience => {

        timeline.appendChild(

            createExperienceCard(experience)

        );

    });

    return timeline;

}