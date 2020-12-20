
To create a Mad Lib, write out a story, and use empty spans with `data-placeholder` values as shown below: 
```
---
layout: default
title: Hort Holiday Mad Libs 2
permalink: /hort2
---

<span class="input" data-placeholder="PERSON IN THE ROOM"></span>
```

## Auto-formatting

As you're writing your story, you can write your fill-in-the-blanks as `__DESCRIPTION__` : all caps, surrounded by two underscores on either side. In addition to letters, the description can include spaces, hyphens, and parens. Then use `replace.sh filename` to replace the underscores with the html-formatted code.