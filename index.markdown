---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
title: Betsy and Ken's Mad Libs
---
<div class="container">
<ul style="none">
{% for page in site.pages %}
<li><a href="{{page.permalink}}">{{page.title}}</a></li>
{% endfor %}
</ul>