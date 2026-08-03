"use strict";

/* ==========================================================
   Education Section
   Education Card Component

   Version : 2.5.0
========================================================== */

export function createEducationCard(education) {

    const card = document.createElement("article");
    card.className = "education-card";

    /* ================================
       Main Layout
    ================================= */

    const body = document.createElement("div");
    body.className = "education-body";

    /* ================================
       Left Side
    ================================= */

    const left = document.createElement("div");
    left.className = "education-left";

    /* Course */

    const course = document.createElement("h3");

    course.className = "education-course";

    course.textContent = education.course;

    /* Institution */

    const institution = document.createElement("p");

    institution.className = "education-institution";

    institution.textContent = education.institution;

    /* Meta */

    const meta = document.createElement("div");

    meta.className = "education-meta";

    [
        education.board,
        education.duration,
        education.location
    ]
    .filter(Boolean)
    .forEach(text => {

        const item = document.createElement("span");

        item.className = "education-meta-item";

        item.textContent = text;

        meta.appendChild(item);

    });

    /* Description */

    const description = document.createElement("p");

    description.className = "education-description-text";

    description.textContent = education.description;

    /* Score */

    const score = document.createElement("p");

    score.className = "education-score";

    score.textContent = education.score;

    left.append(

        course,
        institution,
        meta,
        description,
        score

    );

    /* ================================
       Right Side
    ================================= */

    const right = document.createElement("div");

    right.className = "education-right";

    if (education.logo) {

        const logo = document.createElement("img");

        logo.className = "education-logo";

        logo.src = education.logo;

        logo.alt = education.institution;

        logo.loading = "lazy";

        right.appendChild(logo);

    }

    body.append(left, right);

    /* ================================
       Footer
    ================================= */

    const footer = document.createElement("div");

    footer.className = "education-footer";

    if (education.website) {

        const website = document.createElement("a");

        website.className = "education-button";

        website.href = education.website;

        website.target = "_blank";

        website.rel = "noopener noreferrer";

        website.innerHTML = `

<svg class="button-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">

<circle cx="12" cy="12" r="10"/>

<path d="M2 12h20"/>

<path d="M12 2a15 15 0 0 1 0 20"/>

<path d="M12 2a15 15 0 0 0 0 20"/>

</svg>

<span>Institution Website</span>

<svg class="button-external" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">

<path d="M7 17L17 7"/>

<path d="M8 7h9v9"/>

</svg>

`;

        footer.appendChild(website);

    }

    card.append(body, footer);

    return card;

}