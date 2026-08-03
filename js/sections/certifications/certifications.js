"use strict";

/* ==========================================================
   Certifications Section
   Orchestrator

   Responsible for:
   - Initializing Certifications Section
   - Coordinating Components

   Author : Ram Nishal M
   Version : 1.0.0
========================================================== */

import { getPortfolioData } from "../../core/appState.js";

import { createCertificationHeader } from "./certificationHeader.js";
import { createCertificationGrid } from "./certificationGrid.js";

export function initializeCertifications() {

    const data = getPortfolioData();

    if (!data) return;

    const section = document.querySelector(
        "#certifications .section-content"
    );

    if (!section) return;

    section.replaceChildren();

    section.append(

        createCertificationHeader(data.certifications),

        createCertificationGrid(data.certifications.items)

    );

}