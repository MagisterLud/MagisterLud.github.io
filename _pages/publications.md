---
layout: archive
title: "Research"
permalink: /publications/
author_profile: false
---

{% if author.googlescholar %}
  You can also find my articles on <u><a href="{{author.googlescholar}}">my Google Scholar profile</a>.</u>
{% endif %}

{% include base_path %}

{% assign all_publications = site.publications | sort: "date" | reverse %}

{% comment %}
To add, remove, or reorder sections, edit only this line.

Each publication should have a front-matter field like:

publication_section: "Published Papers"

Possible examples:
publication_section: "Published Papers"
publication_section: "Preprints"
publication_section: "Music & Mathematics"
publication_section: "Manuscripts"
{% endcomment %}

{% assign publication_sections = "Published Papers|Preprints|Music & Mathematics|Manuscripts" | split: "|" %}

{% comment %}
Publications without a publication_section will appear under this default section.
{% endcomment %}

{% assign default_publication_section = "Published Papers" %}

{% for section in publication_sections %}

  {% assign section_total = 0 %}

  {% for post in all_publications %}
    {% assign post_section = post.publication_section | default: default_publication_section %}

    {% if post_section == section %}
      {% assign section_total = section_total | plus: 1 %}
    {% endif %}
  {% endfor %}

  {% if section_total > 0 %}

<h2>{{ section | escape }}</h2>

    {% assign section_number = section_total %}

    {% for post in all_publications %}
      {% assign post_section = post.publication_section | default: default_publication_section %}

      {% if post_section == section %}

<article class="archive__item">
  <h3 class="archive__item-title no_toc">
    {{ section_number }}.
    {% if post.paperurl %}
      <a href="{{ post.paperurl }}" target="_blank" rel="noopener">{{ post.title }}</a>
    {% else %}
      <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
    {% endif %}
  </h3>

  {% assign cap = post.caption | default: post.pub_caption %}
  <div class="page__meta">
    {% if cap and cap != blank %}
      {{ cap | markdownify }}
    {% else %}
      &nbsp;
    {% endif %}
  </div>

  {% if post.excerpt %}{{ post.excerpt | markdownify }}{% endif %}
</article>
<hr/>

        {% assign section_number = section_number | minus: 1 %}

      {% endif %}
    {% endfor %}
  {% endif %}
{% endfor %}