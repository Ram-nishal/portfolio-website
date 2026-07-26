"use strict";

/* ==========================================================
   About Section
   Content Component

   Responsible for:
   - Title
   - Subtitle
   - Description

   Author : Ram Nishal M
   Version : 1.6.0
========================================================== */

export function createAboutContent(data) {

    const about = data.about;

    const container = document.createElement("div");

    container.className = "about-content";

    /* ======================================================
       Title
    ====================================================== */

    const title = document.createElement("p");

    title.className = "about-title";

    title.textContent = about.title;

    /* ======================================================
       Subtitle
    ====================================================== */

    const subtitle = document.createElement("h2");

    subtitle.className = "about-subtitle";

    subtitle.textContent = about.subtitle;

    /* ======================================================
       Description
    ====================================================== */

    const description = document.createElement("div");

    description.className = "about-description";

    about.description.forEach(text => {

        const paragraph = document.createElement("p");

        paragraph.textContent = text;

        description.appendChild(paragraph);

    });

    container.append(

        title,

        subtitle,

        description

    );

    return container;

}