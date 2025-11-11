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

{% {% for post in site.publications reversed %}
<article class="archive__item">
  <h2 class="archive__item-title no_toc">
    <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
  </h2>

  {% assign cap = post.caption | default: post.pub_caption %}
  <div class="page__meta">
    {% if cap and cap != blank %}
      {{ cap | markdownify }}
    {% else %}
      &nbsp;  <!-- empty line -->
    {% endif %}
  </div>

  {% if post.excerpt %}{{ post.excerpt | markdownify }}{% endif %}
</article>
<hr/>
{% endfor %}