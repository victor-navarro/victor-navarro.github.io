---
layout: post
title: on fast and slow errors
date:   2020-08-03
excerpt: A counterintuitive prediction
categories: [drift, difusion, model, categorization, jupyter]
---

I try really hard, but I still struggle when it comes to convolving distributions entirely in my head. Apparently, the presence of slow errors is a common prediction for the [drift diffusion model](https://en.wikipedia.org/wiki/Two-alternative_forced_choice#Drift-diffusion_model). Here's a code-adventure showing it is indeed the case.



{::nomarkdown}
{% assign jupyter_path = "assets/jupyter/slow_errors.ipynb" | relative_url %}
{% capture notebook_exists %}{% file_exists assets/jupyter/slow_errors.ipynb %}{% endcapture %}
{% if notebook_exists == "true" %}
{% jupyter_notebook jupyter_path %}
{% else %}
<p>Sorry, the notebook you are looking for does not exist.</p>
{% endif %}
{:/nomarkdown}
