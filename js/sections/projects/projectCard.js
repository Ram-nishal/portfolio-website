"use strict";

/* ==========================================================
   Projects Section
   Project Card Component

   Responsible for:
   - Project Image
   - Title
   - Subtitle
   - Description
   - Technology Tags
   - GitHub Button
   - Live Demo Button

   Author : Ram Nishal M
   Version : 2.4.0
========================================================== */

export function createProjectCard(project) {

    const card = document.createElement("article");

    card.className = "project-card";

    /* ======================================================
       Image
    ====================================================== */

    const imageWrapper = document.createElement("div");

    imageWrapper.className = "project-image-wrapper";

    const image = document.createElement("img");

    image.className = "project-image";

    image.src = project.image;

    image.alt = project.title;

    image.loading = "lazy";

    imageWrapper.appendChild(image);

    /* ======================================================
       Content
    ====================================================== */

    const content = document.createElement("div");

    content.className = "project-content";

    /* ======================================================
       Title
    ====================================================== */

    const title = document.createElement("h3");

    title.className = "project-title";

    title.textContent = project.title;

    /* ======================================================
       Subtitle
    ====================================================== */

    const subtitle = document.createElement("p");

    subtitle.className = "project-subtitle";

    subtitle.textContent = project.subtitle;

    /* ======================================================
       Description
    ====================================================== */

    const description = document.createElement("p");

    description.className = "project-description";

    description.textContent = project.description;

    /* ======================================================
       Technologies
    ====================================================== */

    const technologies = document.createElement("div");

    technologies.className = "project-technologies";

    project.technologies.forEach(technology => {

        const tag = document.createElement("span");

        tag.className = "project-tag";

        tag.textContent = technology;

        technologies.appendChild(tag);

    });

    /* ======================================================
       Buttons
    ====================================================== */

    const actions = document.createElement("div");

    actions.className = "project-actions";

    /* ======================================================
       GitHub Button
    ====================================================== */

    if (project.github && project.github.trim() !== "") {

        const github = document.createElement("a");

        github.className = "project-button";

        github.href = project.github;

        github.target = "_blank";

        github.rel = "noopener noreferrer";

        github.innerHTML = `
            <svg class="button-icon" viewBox="0 0 24 24" aria-hidden="true">
                <path fill="currentColor" d="M12 .5A12 12 0 0 0 0 12.7a12 12 0 0 0 8.2 11.4c.6.1.8-.3.8-.6v-2.1c-3.3.7-4-1.6-4-1.6-.6-1.4-1.3-1.8-1.3-1.8-1.1-.8.1-.8.1-.8 1.2.1 1.8 1.2 1.8 1.2 1 .1.7 2.7 3.4 1.9.1-.8.4-1.4.7-1.8-2.7-.3-5.5-1.4-5.5-6A4.7 4.7 0 0 1 5.4 8a4.3 4.3 0 0 1 .1-3.2s1-.3 3.3 1.2a11.6 11.6 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2a4.3 4.3 0 0 1 .1 3.2 4.7 4.7 0 0 1 1.3 3.3c0 4.6-2.8 5.7-5.5 6 .4.4.8 1.1.8 2.3v3.4c0 .3.2.7.8.6A12 12 0 0 0 24 12.7 12 12 0 0 0 12 .5z"/>
            </svg>

            <span>GitHub</span>

            <svg class="button-external" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M7 17L17 7"></path>
                <path d="M8 7h9v9"></path>
            </svg>
        `;

        actions.appendChild(github);

    }

    /* ======================================================
       Live Demo Button
    ====================================================== */

    if (project.demo && project.demo.trim() !== "") {

        const demo = document.createElement("a");

        demo.className = "project-button";

        demo.href = project.demo;

        demo.target = "_blank";

        demo.rel = "noopener noreferrer";

        demo.innerHTML = `
            <svg class="button-icon" viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-width="2"/>
                <path d="M2 12h20" fill="none" stroke="currentColor" stroke-width="2"/>
                <path d="M12 2a15 15 0 0 1 0 20" fill="none" stroke="currentColor" stroke-width="2"/>
                <path d="M12 2a15 15 0 0 0 0 20" fill="none" stroke="currentColor" stroke-width="2"/>
            </svg>

            <span>Live Demo</span>

            <svg class="button-external" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M7 17L17 7"></path>
                <path d="M8 7h9v9"></path>
            </svg>
        `;

        actions.appendChild(demo);

    }

    /* ======================================================
       Assemble Content
    ====================================================== */

    content.append(

        title,

        subtitle,

        description,

        technologies,

        actions

    );

    /* ======================================================
       Assemble Card
    ====================================================== */

    card.append(

        imageWrapper,

        content

    );

    return card;

}