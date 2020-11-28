---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
title: Betsy and Ken's Mad Libs
index: false
---
<div class="container">
<ul style="none">
{% for page in site.pages %}
{% if page.index != false %}
<li><a href=".{{page.permalink}}">{{page.title}}</a></li>
{% endif %}
{% endfor %}
</ul>