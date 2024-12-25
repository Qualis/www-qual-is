---
title: "Helping you understand if a job on offer is the right one"
excerpt: "I recently had an offer of a job and was on the fence as to whether it was the right next opportunity for me. I decided to quickly put together a Radar Chart to help me understand what was important to me, and how that married up with my existing and the new role on offer."
coverImage: "/assets/blog/categories/career.png"
date: "2022-03-10"
author:
  name: SVO
  picture: "/assets/blog/authors/svo.png"
ogImage:
  url: "/assets/blog/categories/career.png"
---

## Helping you understand if a job on offer is the right one

I decided to quickly put together a [Radar Chart](https://en.wikipedia.org/wiki/Radar_chart) to help me understand what was important to me, and how that married up with my existing and the new role on offer.

Fork this [GitHub repository](https://github.com/svo/accept-new-job-guidance) and modify it to your hearts content.

You can change the weightings to reflect your stack ranking of importance by updating the order of the weightings in the index.html file (the index order is used, normalised and added to the value in the data – the higher the index the higher the weighting):

You can then updating the data values to represent what you want, what your current role provides and what the new role has to offer (assumes values between 1 and 5).

The repository leverages [D3.js](https://d3js.org/) generally, and [radar-chart-d3](https://github.com/tpreusse/radar-chart-d3/) specifically to provide the view.

You can see the end result of mine [here](https://raw.githack.com/svo/accept-new-job-guidance/main/index.html) 🙂

![Example](/assets/blog/job-on-offer-is-the-right-one/example.png "Example")
