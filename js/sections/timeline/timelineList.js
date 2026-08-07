"use strict";

/* ==========================================================
   Timeline Section
   Timeline List Component

   Responsible for:
   - Horizontal Timeline Layout
   - Top Row
   - Timeline Line
   - Bottom Row
   - Mouse Wheel Horizontal Scroll

   Author : Ram Nishal M
   Version : 2.0.0
========================================================== */

import { getPortfolioData } from "../../core/appState.js";

import { createTimelineCard } from "./timelineCard.js";

export function createTimelineList() {

    const data = getPortfolioData();

    const items = data.timeline.items || [];

    /* ======================================================
       Empty State
    ====================================================== */

    if (!items.length) {

        const empty = document.createElement("p");

        empty.className = "timeline-empty";

        empty.textContent = "Timeline coming soon.";

        return empty;

    }

    /* ======================================================
       Scroll Container
    ====================================================== */

    const container = document.createElement("div");

    container.className = "timeline-scroll-container";

    /* ======================================================
       Timeline
    ====================================================== */

    const timeline = document.createElement("div");

    timeline.className = "timeline";

    /* ======================================================
       Top Row
    ====================================================== */

    const topRow = document.createElement("div");

    topRow.className = "timeline-row timeline-row-top";

    /* ======================================================
       Center Line
    ====================================================== */

    const center = document.createElement("div");

    center.className = "timeline-center";

    /* ======================================================
       Bottom Row
    ====================================================== */

    const bottomRow = document.createElement("div");

    bottomRow.className = "timeline-row timeline-row-bottom";

    /* ======================================================
       Build Timeline
    ====================================================== */

    items.forEach((item, index) => {

        /* ----------------------------------------------
           Card Slot
        ---------------------------------------------- */

        const slot = document.createElement("div");

        slot.className = "timeline-slot";

        slot.appendChild(

            createTimelineCard(item)

        );

        /* ----------------------------------------------
           Dot
        ---------------------------------------------- */

        const dot = document.createElement("div");

        dot.className = "timeline-dot";

        center.appendChild(dot);

        /* ----------------------------------------------
           Alternate Rows
        ---------------------------------------------- */

        if (index % 2 === 0) {

            topRow.appendChild(slot);

            bottomRow.appendChild(

                document.createElement("div")

            );

        }

        else {

            topRow.appendChild(

                document.createElement("div")

            );

            bottomRow.appendChild(slot);

        }

    });

    /* ======================================================
       Assemble
    ====================================================== */

    timeline.append(

        topRow,

        center,

        bottomRow

    );

    container.appendChild(timeline);

    /* ======================================================
       Mouse Wheel Horizontal Scroll
    ====================================================== */

    container.addEventListener("wheel", (event) => {

        event.preventDefault();

        container.scrollLeft += event.deltaY;

    }, { passive: false });

    return container;

}