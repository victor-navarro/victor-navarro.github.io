---
layout: post
title: zeus
date:   2020-07-21
excerpt: the start of something useful
categories: [jupyter, code, signal, detection, theory]
---

An easy way to make tinkerable code is to use [Jupyter notebooks](https://jupyter.org/). I will start posting some code snippets I find useful in my blog entries. More often than not, I only get true understanding from coding. Perhaps wrongly, I assume other people are the same. Here's an example that I wrote for an undergrad student I'm currently working with. It involves calculating SDT measures for categorization data.

You can interact with the code by clicking this badge.  <a href="https://mybinder.org/v2/gh/victor-navarro/binder-repo/master?filepath=sdt_categorization.ipynb" target="blank">![Binder](https://mybinder.org/badge_logo.svg)</a>

A static view of the code is shown below.

{::nomarkdown}
{% assign jupyter_path = "assets/jupyter/sdt_categorization.ipynb" | relative_url %}
{% capture notebook_exists %}{% file_exists assets/jupyter/sdt_categorization.ipynb %}{% endcapture %}
{% if notebook_exists == "true" %}
{% jupyter_notebook jupyter_path %}
{% else %}
<p>Sorry, the notebook you are looking for does not exist.</p>
{% endif %}
{:/nomarkdown}



