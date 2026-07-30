"use strict";

/* ==========================================================
   Skills Section
   Skill Card Component

   Responsible for:
   - Rendering Individual Skill Category
   - Progress Bars (Programming Languages)
   - Skill Chips (Other Categories)

   Author : Ram Nishal M
   Version : 2.2.0
========================================================== */

export function createSkillCard(category) {

    const card = document.createElement("div");

    card.className = "skill-card";

    if (category.progress) {

        card.classList.add("skill-card-large");

    }

    /* ======================================================
       Title
    ====================================================== */

    const title = document.createElement("h3");

    title.className = "skill-card-title";

    title.textContent = category.title;

    card.appendChild(title);

    /* ======================================================
       Programming Languages
    ====================================================== */

    if (category.progress) {

        const list = document.createElement("div");

        list.className = "skill-progress-list";

        category.items.forEach(skill => {

            const row = document.createElement("div");

            row.className = "skill-progress-row";

            const name = document.createElement("span");

            name.className = "skill-name";

            name.textContent = skill.name;

            const bar = document.createElement("div");

            bar.className = "skill-bar";

            const fill = document.createElement("div");

            fill.className = "skill-fill";

            fill.style.width = `${skill.percentage}%`;

            bar.appendChild(fill);

            const level = document.createElement("span");

            level.className = "skill-level";

            level.textContent = skill.level;

            row.append(

                name,

                bar,

                level

            );

            list.appendChild(row);

        });

        card.appendChild(list);

        return card;

    }

    /* ======================================================
       Skill Chips
    ====================================================== */

    const skills = document.createElement("div");

    skills.className = "skill-list";

    category.items.forEach(skill => {

        const chip = document.createElement("span");

        chip.className = "skill-chip";

        chip.textContent = skill;

        skills.appendChild(chip);

    });

    card.appendChild(skills);

    return card;

}