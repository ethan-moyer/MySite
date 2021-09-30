---
layout: layouts/post
title: This Website
hideDate: true
date: 2021-09-20
tags: ["project"]
---

This website was created as a way for me to display the projects that I've done and talk about them. Building this site took around two weeks to complete and was made using the static site generator 11ty along the templating language Liquid to display markdown documents as pages on the site. For styling I used the CSS framework Bulma.

While I've made small websites in the past using Jekyll for static sites and Vue for more complicated projects, I hadn't used 11ty before making this website. For this site, I chose to use 11ty because of how simple it is to get a site set up and that I can run all of it with Node/npm. Aside from the projects page which is unique, all the other pages a combination of a markdown file and a template made in Liquid. All of the content (text, images, etc.) is done in the markdown file, which can then be used with the template to easily generate web pages instead of having to make one manually for each page.

The source code for this site can be found at [https://github.com/ethan-moyer/MySite](https://github.com/ethan-moyer/MySite)