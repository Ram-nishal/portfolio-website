"use strict";

import { initializeTheme } from "../theme/themeManager.js";

import {

    initializeThemeToggle

} from "../theme/themeToggle.js";

import {

    setPortfolioData,

    setLoaded,

    setLoading

} from "./appState.js";

import { initializeNavbar } from "../navigation/navbar.js";

/* ==========================================================
   Portfolio Website

   Main Application

========================================================== */

import { loadPortfolio } from "../data/loader.js";

import { renderSection } from "../ui/section.js";

async function initializeApplication() {

    try {
        setLoading(true);

        const portfolio = await loadPortfolio();
        
        initializeTheme();

        initializeNavbar(portfolio);

        initializeThemeToggle();

        setPortfolioData(portfolio);

        setLoaded(true);

        setLoading(false);

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