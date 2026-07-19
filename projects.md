---
layout: default
title: Projects
description: Things I've built outside of work — a full-stack web app and a Game Boy game in assembly.
---

<h1 class="page-title">{{ page.title }}</h1>
<p class="page-lede">{{ page.description }}</p>

<ul class="projects">
  {% for project in site.data.projects %}
  <li class="project-card">
    <div class="project-head">
      <h2 class="project-name">
        <a href="{{ project.url }}" target="_blank" rel="noopener">{{ project.name }}</a>
      </h2>
      <span class="project-stack">{{ project.tagline }}</span>
    </div>
    <p class="project-desc">{{ project.description }}</p>
    <p class="project-actions">
      <a class="btn btn-primary" href="{{ project.url }}" target="_blank" rel="noopener">{{ project.url_label }}&nbsp;↗</a>
      <a class="btn" href="https://github.com/{{ project.repo }}" target="_blank" rel="noopener">View on GitHub&nbsp;↗</a>
    </p>
  </li>
  {% endfor %}
</ul>
