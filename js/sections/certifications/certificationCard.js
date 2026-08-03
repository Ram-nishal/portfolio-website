"use strict";

/* ==========================================================
   Certifications Section
   Certification Card Component

   Responsible for:
   - Certification Name
   - Issuer
   - Meta Tags
   - Logo
   - Description
   - Skills
   - Verification Links
   - Certificate Actions

   Author : Ram Nishal M
   Version : 1.1.0
========================================================== */

export function createCertificationCard(certification) {

    const card = document.createElement("article");

    card.className = "certification-card";

    /* ======================================================
       TOP SECTION
    ====================================================== */

    const body = document.createElement("div");

    body.className = "certification-body";

    /* ======================================================
       LEFT
    ====================================================== */

    const left = document.createElement("div");

    left.className = "certification-left";

    /* -------------------------------------------------- */

    const name = document.createElement("h3");

    name.className = "certification-name";

    name.textContent = certification.name;

    /* -------------------------------------------------- */

    const issuer = document.createElement("p");

    issuer.className = "certification-issuer";

    issuer.textContent = certification.issuer;

    /* ======================================================
       Meta
    ====================================================== */

    const meta = document.createElement("div");

    meta.className = "certification-meta";

    const metaItems = [];

    if (certification.level)
        metaItems.push(certification.level);

    if (certification.issued)
        metaItems.push(certification.issued);

    if (
        certification.expiry &&
        certification.expiry.trim() !== "" &&
        certification.expiry.toLowerCase() !== "no expiry"
    ) {

        metaItems.push(`Expiry : ${certification.expiry}`);

    }

    metaItems.forEach(item => {

        const tag = document.createElement("span");

        tag.className = "certification-meta-item";

        tag.textContent = item;

        meta.appendChild(tag);

    });

    left.append(

        name,

        issuer,

        meta

    );

    /* ======================================================
       RIGHT
    ====================================================== */

    const right = document.createElement("div");

    right.className = "certification-right";

    if (certification.logo) {

        const logo = document.createElement("img");

        logo.className = "certification-logo";

        logo.src = certification.logo;

        logo.alt = certification.name;

        logo.loading = "lazy";

        right.appendChild(logo);

    }

    body.append(

        left,

        right

    );

    /* ======================================================
       DETAILS SECTION
    ====================================================== */

    const details = document.createElement("div");

    details.className = "certification-details";

    /* -------------------------------------------------- */

    const description = document.createElement("p");

    description.className = "certification-description";

    description.textContent = certification.description;

    details.appendChild(description);

    /* -------------------------------------------------- */

    if (certification.skills && certification.skills.length > 0) {

        const skills = document.createElement("div");

        skills.className = "certification-skills";

        certification.skills.forEach(skill => {

            const tag = document.createElement("span");

            tag.className = "certification-tag";

            tag.textContent = skill;

            skills.appendChild(tag);

        });

        details.appendChild(skills);

    }

    /* ======================================================
       FOOTER
    ====================================================== */

    const footer = document.createElement("div");

    footer.className = "certification-footer";

    /* ======================================================
       Footer Left
    ====================================================== */

    const footerLeft = document.createElement("div");

    footerLeft.className = "certification-footer-left";

    if (certification.website) {

        const website = document.createElement("a");

        website.className = "certification-button";

        website.href = certification.website;

        website.target = "_blank";

        website.rel = "noopener noreferrer";

        website.textContent = "Issuer Website";

        footerLeft.appendChild(website);

    }

    if (certification.credential) {

        const verify = document.createElement("a");

        verify.className = "certification-button";

        verify.href = certification.credential;

        verify.target = "_blank";

        verify.rel = "noopener noreferrer";

        verify.textContent = "Verify Credential";

        footerLeft.appendChild(verify);

    }

    /* ======================================================
       Footer Right
    ====================================================== */

    const footerRight = document.createElement("div");

    footerRight.className = "certification-footer-right";

    if (certification.certificate) {

        /* ======================
           View
        ====================== */

        const view = document.createElement("a");

        view.className = "certification-icon-button";

        view.href = certification.certificate;

        view.target = "_blank";

        view.rel = "noopener noreferrer";

        view.title = "View Certificate";

        view.innerHTML = `
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
<path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z"/>
<circle cx="12" cy="12" r="3"/>
</svg>`;

        footerRight.appendChild(view);

        /* ======================
           Download
        ====================== */

        const download = document.createElement("a");

        download.className = "certification-icon-button";

        download.href = certification.certificate;

        download.download = "";

        download.title = "Download Certificate";

        download.innerHTML = `
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
<path d="M12 3v12"/>
<path d="M7 10l5 5 5-5"/>
<path d="M5 21h14"/>
</svg>`;

        footerRight.appendChild(download);

    }

    footer.append(

        footerLeft,

        footerRight

    );

    /* ======================================================
       Assemble Card
    ====================================================== */

    card.append(

        body,

        details,

        footer

    );

    return card;

}