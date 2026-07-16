"use strict";

/* ==========================================================
   Portfolio Website

   Main Application

========================================================== */

import { loadPortfolio } from "../data/loader.js";

import { renderSection } from "../ui/section.js";

async function initializeApplication() {

    try {

        const portfolio = await loadPortfolio();

        console.log("Portfolio Loaded");

        console.log(portfolio);

        renderSection({

            id: "hero",

            title: "Rendering Engine Working",

            subtitle: "This section is now rendered inside the existing HTML.",

            content: `

                <div style="padding:40px;">

                    <h3>Success!</h3>

                    <p>

                        The reusable rendering engine is working correctly.

                    </p>

                </div>

            `

        });

    }

    catch (error) {

        console.error(error);

    }

}

document.addEventListener(

    "DOMContentLoaded",

    initializeApplication

);