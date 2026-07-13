---
layout: default
title: Blog
description: Notes on what I'm learning and building.
---

<ul class="post-list">
  {% for post in site.posts %}
    <li>
      <span class="post-list-date">{{ post.date | date: "%b %-d, %Y" }}</span>
      <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
      {% if post.excerpt %}<p class="post-list-excerpt">{{ post.excerpt | strip_html | truncatewords: 25 }}</p>{% endif %}
    </li>
  {% endfor %}
</ul>

{% if site.posts.size == 0 %}
_No posts yet — check back soon._
{% endif %}
