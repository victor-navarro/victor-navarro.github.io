---
layout: post
title: My R package calmr is now on CRAN
date: 2024-03-14
inline: false
related_posts: false
---

<center><img src="/assets/img/calmr.png" width="30%"></center>
<br>

### It's official

After a speedy review, `calmr` (Canonical Associative Learning Models and their Representations) has made it to CRAN.

[https://CRAN.R-project.org/package=calmr](https://CRAN.R-project.org/package=calmr)

That means you can install it using base R (no messing around with `devtools` and GitHub) via:

```
install.packages("calmr")
```

It doesn't get more official than that!

In the immediate future, I will be preparing teaching materials for those interested in using the package for their animal learning classes. Also, a vignette demonstrating more advanced uses of the package (e.g., for representational similarity analysis).

In the middle future, I will be adding a few more models. In priority order;

* The (AE)SOP model (Wagner & Brandon, 1989).
* The original "Pearce" model (for those who like configural cues; Pearce 1987).
* The TD model, as described in Sutton & Barto (2004).

### What happened to the app?

The `calmr` app is now a separate package. You will have to install the `calmr.app` package [from GitHub](https://github.com/victor-navarro/calmr.app) to launch the `shiny` app. You can always check the only app at [https://victor-navarro.shinyapps.io/calmr_app/](https://victor-navarro.shinyapps.io/calmr_app/).