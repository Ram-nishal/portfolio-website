"use strict";

/* ==========================================================
   Certifications Section
   Grid Component

   Responsible for:
   - Rendering certification cards
   - Empty state

   Author : Ram Nishal M
   Version : 1.0.0
========================================================== */

import { createCertificationCard } from "./certificationCard.js";

export function createCertificationGrid(certifications = []) {

    /* ======================================================
       Empty State
    ====================================================== */

    if (certifications.length === 0) {

        const empty = document.createElement("p");

        empty.className = "certifications-empty";

        empty.textContent = "No certifications available.";

        return empty;

    }

    /* ======================================================
       Grid
    ====================================================== */

    const grid = document.createElement("div");

    grid.className = "certifications-grid";

    certifications.forEach(certification => {

        grid.appendChild(

            createCertificationCard(certification)

        );

    });

    return grid;

}