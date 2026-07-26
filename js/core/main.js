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
import { initializeSmoothScroll } from "../navigation/smoothScroll.js";
import { initializeActiveSection } from "../navigation/activeSection.js";
import { initializeNavbarScroll } from "../navigation/navbarScroll.js";

import { initializeHero } from "../sections/hero/hero.js";

import { initializeAbout } from "../sections/about/about.js";

import { loadPortfolio } from "../data/loader.js";

/* ==========================================================
   Portfolio Website

   Main Application

========================================================== */

async function initializeApplication() {

    try {

        setLoading(true);

        const portfolio = await loadPortfolio();

        setPortfolioData(portfolio);

        initializeTheme();

        initializeNavbar();

        initializeThemeToggle();

        initializeSmoothScroll();

        initializeActiveSection();

        //initializeNavbarScroll();

        initializeHero();

        initializeAbout();
        
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