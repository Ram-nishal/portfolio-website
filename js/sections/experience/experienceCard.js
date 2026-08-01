"use strict";

/* ==========================================================
   Experience Section
   Experience Card Component

   Responsible for:
   - Company Details
   - Company Logo
   - Technologies
   - Website Button
   - Certificate Buttons

   Author : Ram Nishal M
   Version : 2.4.0
========================================================== */

export function createExperienceCard(experience) {

    const card = document.createElement("article");
    card.className = "experience-card";

    /* ======================================================
       Main Layout
    ====================================================== */

    const body = document.createElement("div");
    body.className = "experience-body";

    /* ======================================================
       Left Side
    ====================================================== */

    const left = document.createElement("div");
    left.className = "experience-left";

    /* ======================================================
       Company
    ====================================================== */

    const company = document.createElement("h3");
    company.className = "experience-company";
    company.textContent = experience.company;

    /* ======================================================
       Role
    ====================================================== */

    const role = document.createElement("p");
    role.className = "experience-role";
    role.textContent = experience.role;

    /* ======================================================
       Meta
    ====================================================== */

    const meta = document.createElement("div");
    meta.className = "experience-meta";

    [
        experience.type,
        experience.duration,
        experience.location
    ]
    .filter(Boolean)
    .forEach(text => {

        const item = document.createElement("span");

        item.className = "experience-meta-item";

        item.textContent = text;

        meta.appendChild(item);

    });

    /* ======================================================
       Description
    ====================================================== */

    const description = document.createElement("p");

    description.className = "experience-description-text";

    description.textContent = experience.description;

    /* ======================================================
       Technologies
    ====================================================== */

    const technologies = document.createElement("div");

    technologies.className = "experience-technologies";

    (experience.technologies || []).forEach(tech => {

        const tag = document.createElement("span");

        tag.className = "experience-tag";

        tag.textContent = tech;

        technologies.appendChild(tag);

    });

    left.append(

        company,

        role,

        meta,

        description,

        technologies

    );

    /* ======================================================
       Right Side (Logo)
    ====================================================== */

    const right = document.createElement("div");

    right.className = "experience-right";

    if (experience.logo) {

        const logo = document.createElement("img");

        logo.className = "experience-logo";

        logo.src = experience.logo;

        logo.alt = `${experience.company} Logo`;

        logo.loading = "lazy";

        right.appendChild(logo);

    }

    body.append(

        left,

        right

    );

    /* ======================================================
       Bottom Actions
    ====================================================== */

    const footer = document.createElement("div");

    footer.className = "experience-footer";

    /* ================= Website ================= */

    const websiteGroup = document.createElement("div");

    websiteGroup.className = "experience-footer-left";

    if (experience.website) {

        const website = document.createElement("a");

        website.className = "experience-button";

        website.href = experience.website;

        website.target = "_blank";

        website.rel = "noopener noreferrer";

        website.innerHTML = `

<svg class="button-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">

<circle cx="12" cy="12" r="10"/>

<path d="M2 12h20"/>

<path d="M12 2a15 15 0 0 1 0 20"/>

<path d="M12 2a15 15 0 0 0 0 20"/>

</svg>

<span>Website</span>

<svg class="button-external" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">

<path d="M7 17L17 7"/>

<path d="M8 7h9v9"/>

</svg>

`;

        websiteGroup.appendChild(website);

    }

    /* ================= Certificate ================= */

    const certificateGroup = document.createElement("div");

    certificateGroup.className = "experience-footer-right";

    if (experience.certificate) {

        const label = document.createElement("span");

        label.className = "certificate-label";

        label.innerHTML = `

<svg class="button-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">

<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>

<path d="M14 2v6h6"/>

</svg>

Certificate

`;

        certificateGroup.appendChild(label);

        /* View */

        const view = document.createElement("a");

        view.className = "experience-icon-button";

        view.href = experience.certificate.view;

        view.target = "_blank";

        view.rel = "noopener noreferrer";

        view.title = "View Certificate";

        view.innerHTML = `

<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">

<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z"/>

<circle cx="12" cy="12" r="3"/>

</svg>

`;

        certificateGroup.appendChild(view);

        /* Download */

        const download = document.createElement("a");

        download.className = "experience-icon-button";

        download.href = experience.certificate.download;

        download.target = "_blank";

        download.rel = "noopener noreferrer";

        download.title = "Download Certificate";

        download.innerHTML = `

<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">

<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>

<path d="M7 10l5 5 5-5"/>

<path d="M12 15V3"/>

</svg>

`;

        certificateGroup.appendChild(download);

    }

    footer.append(

        websiteGroup,

        certificateGroup

    );

    card.append(

        body,

        footer

    );

    return card;

}