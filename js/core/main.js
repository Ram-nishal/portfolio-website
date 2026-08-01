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

import { initializeSkills } from "../sections/skills/skills.js";

import { initializeSkillsAnimation } from "../sections/skills/skillsAnimation.js";

import { initializeProjects } from "../sections/projects/projects.js";

import { initializeProjectsAnimation } from "../sections/projects/projectsAnimation.js";

import { initializeExperience } from "../sections/experience/experience.js";

import { initializeExperienceAnimation } from "../sections/experience/experienceAnimation.js";

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

        initializeSkills();

        initializeSkillsAnimation();

        initializeProjects();

        initializeProjectsAnimation();

        initializeExperience();

        initializeExperienceAnimation();

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