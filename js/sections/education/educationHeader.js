"use strict";

/* ==========================================================
   Education Section
   Header Component

   Responsible for:
   - Small Section Title
   - Main Heading
   - Description

   Author : Ram Nishal M
   Version : 2.4.0
========================================================== */

export function createEducationHeader(data) {

    const education = data.education;

    const header = document.createElement("div");

    header.className = "education-header";

    /* ======================================================
       Small Title
    ====================================================== */

    const title = document.createElement("p");

    title.className = "education-title";

    title.textContent = education.title;

    /* ======================================================
       Main Heading
    ====================================================== */

    const subtitle = document.createElement("h2");

    subtitle.className = "education-subtitle";

    subtitle.textContent = education.subtitle;

    /* ======================================================
       Description
    ====================================================== */

    const description = document.createElement("p");

    description.className = "education-description";

    description.textContent = education.description;

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