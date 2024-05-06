---
layout: post
title: calmr.app update
date: 2024-02-19
description: a new coat of (bslib) paint
---

One of the things I had to do to submit `calmr` to CRAN was to "unbundle" the visual GUI from the package. This has pros and cons of course. Having a standalone app would enable 
parallel development of both the core package and the app. However, this puts an extra hurdle on people right in the middle of the usability continuum (those who know how to use R and run stuff locally), by adding an extra installation step.

In the end, I found out that most users of the application merely visit the shinyapps website instead of running it locally, so it's all good.

## A new coat of paint

Because I am lazy, the old version of the `calmr` app was built using `shinydashboard`. I just don't have the time (nor the HTML/CSS skills) to make things from scratch, so 
a bunch of predetermined widgets did the trick. The brand new version of the app now uses `bslib` and its concept of cards. I found these to be quite intuitive and visually appealing.
Plus, `bslib` has a bunch of functionality that was quite pertinent for a 'simulator' app.

Among many other things, I ditched raw png `ggplot2` plots in preference for `plotly` interactive plots. Plotly's interactivity makes the visualization of complex data (such as more than a handful of associations) a walk in the park. Still, some bits are still missing. For example, facet grids with nested factors don't display well (e.g., `s1~s2+trial`). Also, there's no support for `ggnetwork` yet. A shame, but it will do for the moment.

I also added back some functionality to the app, such as filtering trials/phases/groups (in fact, subsetting experiments also made it to the main package). I also found out some people just hate the `viridis` scale, so I added an option to switch color/fill scales. Both of these features made it to the main package.

## A 'tutorial' mode

The app now also has a 'tutorial' mode that displays help text in certain regions. I'm quite proud of this, but I have yet to hear from somebody learning to use the app with it. Perhaps also a tutorial are the dynamic links to model pages and their parameters.

As always. (Give the app a try!)[https://victor-navarro.shinyapps.io/calmr_app/]



