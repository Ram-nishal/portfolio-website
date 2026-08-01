"use strict";

/* ==========================================================
   Experience Section
   Header Component

   Responsible for:
   - Small Section Title
   - Main Heading
   - Description

   Author : Ram Nishal M
   Version : 2.3.0
========================================================== */

export function createExperienceHeader(data) {

    const experience = data.experience;

    const header = document.createElement("div");

    header.className = "experience-header";

    /* ======================================================
       Small Title
    ====================================================== */

    const title = document.createElement("p");

    title.className = "experience-title";

    title.textContent = experience.title;

    /* ======================================================
       Main Heading
    ====================================================== */

    const subtitle = document.createElement("h2");

    subtitle.className = "experience-subtitle";

    subtitle.textContent = experience.subtitle;

    /* ======================================================
       Description
    ====================================================== */

    const description = document.createElement("p");

    description.className = "experience-description";

    description.textContent = experience.description;

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