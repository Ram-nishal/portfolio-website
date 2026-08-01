"use strict";

/* ==========================================================
   Education Section
   Timeline Component

   Responsible for:
   - Rendering Education Cards

   Author : Ram Nishal M
   Version : 2.4.0
========================================================== */

import { createEducationCard } from "./educationCard.js";

export function createEducationTimeline(data) {

    const timeline = document.createElement("div");

    timeline.className = "education-timeline";

    /* ======================================================
       Empty State
    ====================================================== */

    if (!data.education.items.length) {

        const empty = document.createElement("p");

        empty.className = "education-empty";

        empty.textContent = "Education details will be added soon.";

        timeline.appendChild(empty);

        return timeline;

    }

    /* ======================================================
       Cards
    ====================================================== */

    data.education.items.forEach(education => {

        timeline.appendChild(

            createEducationCard(education)

        );

    });

    return timeline;

}