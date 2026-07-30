"use strict";

/* ==========================================================
   Skills Section
   Header Component

   Responsible for:
   - Section Title
   - Subtitle
   - Description

   Author : Ram Nishal M
   Version : 2.1.0
========================================================== */

export function createSkillsHeader(data) {

    const skills = data.skills;

    const container = document.createElement("div");

    container.className = "skills-header";

    /* ======================================================
       Title
    ====================================================== */

    const title = document.createElement("p");

    title.className = "skills-title";

    title.textContent = skills.title;

    /* ======================================================
       Subtitle
    ====================================================== */

    const subtitle = document.createElement("h2");

    subtitle.className = "skills-subtitle";

    subtitle.textContent = skills.subtitle;

    /* ======================================================
       Description
    ====================================================== */

    const description = document.createElement("p");

    description.className = "skills-description";

    description.textContent = skills.description;

    container.append(

        title,

        subtitle,

        description

    );

    return container;

}