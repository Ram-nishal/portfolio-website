"use strict";

/* ==========================================================
   Portfolio Website
   Section Rendering Engine

   Responsible for:
   - Rendering existing HTML sections
   - Updating section headers
   - Updating section content

   Author: Ram Nishal M
   Version: 1.2.0
========================================================== */

/* ==========================================================
   Render Section
========================================================== */

export function renderSection({

    id,

    title = "",

    subtitle = "",

    content = ""

}) {

    const section = document.getElementById(id);

    if (!section) {

        console.warn(`Section "${id}" not found.`);

        return;

    }

    const header = section.querySelector(".section-header");

    const contentContainer = section.querySelector(".section-content");

    if (header) {

        header.innerHTML = "";

        if (title) {

            const heading = document.createElement("h2");

            heading.textContent = title;

            header.appendChild(heading);

        }

        if (subtitle) {

            const paragraph = document.createElement("p");

            paragraph.textContent = subtitle;

            header.appendChild(paragraph);

        }

    }

    if (contentContainer) {

        if (content instanceof HTMLElement) {

            contentContainer.innerHTML = "";

            contentContainer.appendChild(content);

        }

        else {

            contentContainer.innerHTML = content;

        }

    }

}

/* ==========================================================
   Clear Section
========================================================== */

export function clearSection(id) {

    const section = document.getElementById(id);

    if (!section) return;

    const header = section.querySelector(".section-header");

    const content = section.querySelector(".section-content");

    if (header) header.innerHTML = "";

    if (content) content.innerHTML = "";

}