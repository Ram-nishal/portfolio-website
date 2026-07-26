"use strict";

/* ==========================================================
   About Section
   Highlight Cards

   Responsible for:
   - Rendering Highlight Cards
   - Dynamic Card Generation

   Author : Ram Nishal M
   Version : 1.6.0
========================================================== */

export function createAboutCards(data) {

    const container = document.createElement("div");

    container.className = "about-cards";

    data.about.highlights.forEach(highlight => {

        const card = document.createElement("div");

        card.className = "about-card glass";

        const icon = document.createElement("div");

        icon.className = "about-card-icon";

        icon.textContent = highlight.icon;

        const title = document.createElement("h3");

        title.className = "about-card-title";

        title.textContent = highlight.title;

        const description = document.createElement("p");

        description.className = "about-card-description";

        description.textContent = highlight.description;

        card.append(

            icon,

            title,

            description

        );

        container.appendChild(card);

    });

    return container;

}