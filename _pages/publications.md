---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

{% if author.googlescholar %}
  You can also find my articles on <u><a href="{{author.googlescholar}}">my Google Scholar profile</a>.</u>
{% endif %}

{% include base_path %}

{% for post in site.publications reversed %}
<article class="archive__item">
  <h2 class="archive__item-title no_toc">
    <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
  </h2>

  {% assign cap = post.caption | default: post.pub_caption %}
  {% if cap and cap != blank %}
    <div class="page__meta">
      {{ cap | markdownify }}
    </div>
  {% else %}
    <div class="page__meta">
      <em>
        Published {% if post.venue | downcase contains 'arxiv' %}on{% else %}in{% endif %}
        {{ post.venue }}, {{ post.date | date: "%Y" }}
      </em>
    </div>
  {% endif %}

  {% if post.excerpt %}{{ post.excerpt | markdownify }}{% endif %}
</article>
<hr/>
{% endfor %}
