"use strict";

/* ==========================================================
   Projects Section
   Header Component

   Responsible for:
   - Small Section Title
   - Main Heading
   - Description

   Author : Ram Nishal M
   Version : 2.4.0
========================================================== */

export function createProjectsHeader(data) {

    const projects = data.projects;

    const header = document.createElement("div");

    header.className = "projects-header";

    /* ======================================================
       Small Title
    ====================================================== */

    const title = document.createElement("p");

    title.className = "projects-title";

    title.textContent = projects.title;

    /* ======================================================
       Main Heading
    ====================================================== */

    const subtitle = document.createElement("h2");

    subtitle.className = "projects-subtitle";

    subtitle.textContent = projects.subtitle;

    /* ======================================================
       Description
    ====================================================== */

    const description = document.createElement("p");

    description.className = "projects-description";

    description.textContent = projects.description;

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