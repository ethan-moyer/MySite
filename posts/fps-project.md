---
layout: layouts/post
title: FPS Demo
hideDate: true
date: 2021-09-30
image: fps-project.png
tags: ["project"]
---

This project is a small game prototype/demo for a four-person local-multiplayer FPS primarily inspired by *Halo*. The project was created over a time frame of roughly five months and a half months (April 2021 - September 2021). I chose to do this project as a learning exercise, specifically so that I could learn more about programming games for multiplayer (handling inputs, splitscreen, multiplayer audio, etc.) and to get more practice with component systems.

I built the project using the Unity game engine and scripts were written in C#. All the models were made using Blender. Most of time ended up being dedicated to the weapon system and the aspects for multiplayer (HUDs, viewmodels, audio). For the weapon system, I ended up using something like a basic entity-component system, where the base entity was the weapon which contained data like the model and the type (reloadable or cooldown) and the weapon's attack is a separate component. This way I can easily share attack types (like projectiles, raycasts) across different types of weapons. With Unity only supporting one Audio Listener at a time, I had to come up with a way to handle audio with four different players. With my system, every audio source will be played as if it's being listened to by the closest player.

## How to Play
The download for the game, as well as additional information on how to play it, can be found by going to: [https://geekishninja.itch.io/fps-demo](https://geekishninja.itch.io/fps-demo)
<iframe src="https://itch.io/embed/1189185" width="552" height="167" frameborder="0"><a href="https://geekishninja.itch.io/fps-demo">FPS Demo by geekishninja</a></iframe>

The source code can be found at [https://github.com/ethan-moyer/FPSDemo_](https://github.com/ethan-moyer/FPSDemo_)