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

        setPortfolioData(portfolio);

        initializeTheme();

        initializeNavbar();

        initializeThemeToggle();

        setLoaded(true);

        setLoading(false);

        console.log("Portfolio Loaded");

        console.log(portfolio);

    }

    catch (error) {

        console.error(error);

    }

}

document.addEventListener(

    "DOMContentLoaded",

    initializeApplication

);