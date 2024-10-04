---
layout: default
title: Rohan Kumar
description: Hello, world, I'm Rohan, and this is my website, where you can find my information, as well as read some poorly written blog posts, if I don't get lazy.
---

{% assign totalPosts = site.posts | size %}
{% assign totalWords = 0 %}

{% for post in site.posts %}
  {% assign postWords = post.content | number_of_words %}
  {% assign totalWords = totalWords | plus: postWords %}
{% endfor %}

<h1>Hello, I'm Rohan</h1>
This is my website, where you can find my information, as well as read some poorly written blog posts, if I don't get lazy. In addition, you can find my projects and personal information, as well as a collection of [blogs I like](blogroll.html).

Feel free to contact me at my [personal](mailto:roku0811@gmail.com) or [school](mailto:roku@bu.edu) email for any opportunities for internships, research, or just to connect.

You can also find my resume [here](docs/resume.pdf).

---

<h2>Latest projects</h2>

{% assign projCount = 0 %}
{% for proj in site.projects %}
{% if projCount < 5 %}
  <li>
    <span class="post-date">{{ proj.date | date: "%B %Y" }}</span> · <a href="{{ proj.link }}">{{ proj.title }}</a>
  </li>
  {% assign projCount = projCount | plus: 1 %}
{% endif %}
{% endfor %}


---

<h2>Latest posts</h2>

{% assign postCount = 0 %}
{% for post in site.posts %}
{% if postCount < 5 %}
  <li>
    <span class="post-date">{{ post.date | date: "%b %d %Y" }}</span> · <a href="{{ post.url }}">{{ post.title }}</a>
  </li>
  {% assign postCount = postCount | plus: 1 %}
{% endif %}
{% endfor %}




