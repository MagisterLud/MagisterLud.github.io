---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: false
---

{% if author.googlescholar %}
  You can also find my articles on <u><a href="{{author.googlescholar}}">my Google Scholar profile</a>.</u>
{% endif %}

{% include base_path %}

{% assign all_publications = site.publications | sort: "date" | reverse %}
{% assign preprints = all_publications | where: "publication_status", "preprint" %}
{% assign manuscripts = all_publications | where: "publication_status", "manuscript" %}

{% assign published_total = 0 %}
{% for post in all_publications %}
  {% assign status = post.publication_status | default: "published" %}
  {% unless status == "preprint" %}
    {% unless status == "manuscript" %}
      {% assign published_total = published_total | plus: 1 %}
    {% endunless %}
  {% endunless %}
{% endfor %}

<h2>Published papers</h2>

{% assign published_number = 0 %}
{% for post in all_publications %}
  {% assign status = post.publication_status | default: "published" %}

  {% unless status == "preprint" %}
    {% unless status == "manuscript" %}
      {% assign published_number = published_number | plus: 1 %}

<article class="archive__item">
  <h3 class="archive__item-title no_toc">
    {{ published_number }}.
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

    {% endunless %}
  {% endunless %}
{% endfor %}

{% if preprints.size > 0 %}
<h2>Preprints</h2>

{% assign preprint_number = 0 %}
{% for post in preprints %}
  {% assign preprint_number = preprint_number | plus: 1 %}

<article class="archive__item">
  <h3 class="archive__item-title no_toc">
    {{ preprint_number }}.
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

{% endfor %}
{% endif %}

{% if manuscripts.size > 0 %}
<h2>Manuscripts</h2>

{% assign manuscript_number = 0 %}
{% for post in manuscripts %}
  {% assign manuscript_number = manuscript_number | plus: 1 %}

<article class="archive__item">
  <h3 class="archive__item-title no_toc">
    {{ manuscript_number }}.
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

{% endfor %}
{% endif %}