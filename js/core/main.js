"use strict";

/* ==========================================================
   Portfolio Website

   Main Application

   Author: Ram Nishal M
   Version: 1.1.0
========================================================== */

import { loadPortfolio } from "../data/loader.js";

async function initializeApplication() {

    try {

        const portfolio = await loadPortfolio();

        console.log("Portfolio Loaded");

        console.log(portfolio);

    }

    catch (error) {

        console.error(

            "Application failed to initialize.",

            error

        );

    }

}

document.addEventListener(

    "DOMContentLoaded",

    initializeApplication

);