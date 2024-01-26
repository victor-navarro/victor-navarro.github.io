---
layout: post
title: keeping pigeons close to our hearts
date:   2020-07-18
excerpt: A general-audience write up of pigeons categorizing human hearts
categories: [categorization, medical, images, pigeon, experiment]
---

_This is a repost of a column that me and Ed Wasserman wrote for APAs Division 25._

According to the [CDC](https://www.cdc.gov/nchs/fastats/leading-causes-of-death.htm), you are more likely to die from heart disease than from cancer or respiratory diseases. Care-providers and researchers work around the clock to fight this gloomy statistic, developing preventative pharmacological and last-resort invasive therapies. However, the effective deployment of these therapies requires a timely and reliable method for detecting the onset of cardiac disease.
If your physician suspects you might be suffering from heart disease, they will likely recommend you get a Myocardial Perfusion SPECT test (or MPS for short). Although this test is highly accurate in determining how well blood is flowing through the heart muscle (the myocardium), the decision of whether you will need treatment ultimately rests on how this test is interpreted by your physician. The bad news is that [studies](https://doi.org/10.1080/17434440.2017.1300057) have shown that human interpretation of MPS tests is fairly subjective: individual observers are only moderately accurate (they are correct 85% of the time), and inter-observer agreement is poor (different observers agree only 87% of the time).

<center><img src="/assets/img/cardiocol1.png" width="30%"></center><br>

 _Figure 1.  Many slices of MPS data (left column) are used to reconstruct the heart’s ventricle (top right) and processed into a format your physician can interpret (bottom right)._</span>

To avoid this interpretability problem, some researchers have proposed to aid humans’ interpretations [using artificial intelligence](https://dx.doi.org/10.1038%2Fs41568-018-0016-5). In a recent project, we took this proposal one step further, by requesting medical consultation from a feathery friend: the pigeon.
In case you missed it, we have previously reported that [pigeons can proficiently classify mammograms and histology samples of human breast tissue as benign or malignant](https://doi.org/10.1371/journal.pone.0141357). This time around, using elementary operant conditioning techniques, [we trained pigeons to distinguish between MPS tests from normal of abnormal hearts](https://doi.org/10.3758/s13420-020-00410-z), which had nominal and low perfusion levels, respectively.
Pigeons were initially trained to peck one of two different black-and-white patterns on a touchscreen to report whether the MPS data they were seeing on a computer monitor corresponded with normal or abnormal hearts (Figure 2).

In each training session, pigeons were shown individual MPS images across several trials. On each trial, pigeons had to peck the image multiple times. Having ensured pigeons had enough time to study the image, we presented them with two report buttons located on each side of the image. A final peck to either of the report buttons constituted the pigeon’s choice. If the image shown to them was normal and they pecked the “normal” report button, or if the image shown to them was abnormal and they pecked the “abnormal” button, then we rewarded them with food. However, if the pigeons pecked the incorrect button, then no food was given.

<center><img src="/assets/img/cardiocol2.png" width="80%"></center><br>

_Figure 2. Normal and abnormal MPS tests were shown as polar plots (left). A pigeon hard at work in the operant chamber (right)._</span>

Pigeons succeeded in quickly learning these images, attaining 80% to 85% accuracy. We then set out to discover whether our pigeons could generalize their diagnoses to images they had never seen before. The birds passed this generalization test with flying colors—categorization of novel images was as just accurate as was categorization of familiar images—confirming they had not merely memorized the appropriate response for each image, but rather had acquired true normal/abnormal categories. In a final test, we showed the pigeons black-and-white versions of the same MPS images they had seen in training. Despite these images conveying the identical information as their colored counterparts, pigeons were unable to categorize these images accurately. Clearly, color had played a pivotal part during learning.
In a second experiment, a different cohort of pigeons was trained with black-and-white MPS images from the get-go. Although the absence of color information put a dent in the speed with which our pigeons learned to categorize the images, the birds were again able to transfer their performance to novel images with no loss in accuracy.
It is worth noting that MPS data are not initially colorized; technicians choose whether to colorize these images, and if so, [which color map to use](https://doi.org/10.1016/j.nuclcard.2006.05.014). [That decision is not trivial](https://doi.org/10.1109/MCG.2007.323435). By keeping pigeons close to our hearts and seeing the world through their eyes, we learned a thing or two about the psychological processes underlying humans’ classification of medical images. By using pigeons as surrogate cardiologists, our pair of experiments proved that the presence of color information makes difficult medical classification tasks such as these easier to learn, but it does not necessarily improve the ability to classify new cases.