"use strict";

/* ==========================================================
   Certifications Section
   Header Component

   Responsible for:
   - Title
   - Subtitle
   - Description

   Author : Ram Nishal M
   Version : 1.0.0
========================================================== */

export function createCertificationHeader(data) {

    const header = document.createElement("div");

    header.className = "certifications-header";

    /* ======================================================
       Title
    ====================================================== */

    const title = document.createElement("span");

    title.className = "certifications-title";

    title.textContent = data.title;

    /* ======================================================
       Subtitle
    ====================================================== */

    const subtitle = document.createElement("h2");

    subtitle.className = "certifications-subtitle";

    subtitle.textContent = data.subtitle;

    /* ======================================================
       Description
    ====================================================== */

    const description = document.createElement("p");

    description.className = "certifications-description";

    description.textContent = data.description;

    /* ======================================================
       Assemble
    ====================================================== */

    header.append(

        title,

        subtitle,

        description

    );

    return header;

}