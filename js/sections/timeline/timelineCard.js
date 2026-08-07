"use strict";

/* ==========================================================
   Timeline Section
   Timeline Card Component

   Responsible for:
   - Timeline Card
   - Date
   - Title
   - Category
   - Description
   - Optional Button

   Author : Ram Nishal M
   Version : 2.0.0
========================================================== */

export function createTimelineCard(item) {

    /* ======================================================
       Card
    ====================================================== */

    const card = document.createElement("article");

    card.className = "timeline-card";

    /* ======================================================
       Date
    ====================================================== */

    const date = document.createElement("div");

    date.className = "timeline-date";

    date.textContent = item.date;

    /* ======================================================
       Title
    ====================================================== */

    const title = document.createElement("h3");

    title.className = "timeline-card-title";

    title.textContent = item.title;

    card.append(

        date,

        title

    );

    /* ======================================================
       Category
    ====================================================== */

    if (item.category) {

        const category = document.createElement("p");

        category.className = "timeline-card-subtitle";

        category.textContent = item.category;

        card.appendChild(category);

    }

    /* ======================================================
       Description
    ====================================================== */

    if (item.description) {

        const description = document.createElement("p");

        description.className = "timeline-card-description";

        description.textContent = item.description;

        card.appendChild(description);

    }

    /* ======================================================
       Optional Button
    ====================================================== */

    if (item.button && item.link) {

        const button = document.createElement("a");

        button.className = "timeline-button";

        button.href = item.link;

        button.target = "_blank";

        button.rel = "noopener noreferrer";

        button.textContent = item.button;

        card.appendChild(button);

    }

    return card;

}