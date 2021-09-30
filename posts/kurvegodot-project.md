---
layout: layouts/post
title: Kurve Godot
hideDate: true
date: 2021-09-15
image: kurvegodot-project.png
tags: ["project"]
---

This project is a recreation of the game *Achtung, die Kurve!* built using the Godot game engine. Compared to the FPS project, this one had a much smaller scope and took around one week to complete (August 2021). If you haven't played *Achtung, die Kurve*, it's a bit like the *Tron* light cycle game. Up to four people can play simultaneously and each player has a trail that's drawn behind them as they constantly move forward. However, in this game you can't turn instantly and instead all the players move in curves. And just like in *Tron*, if you hit a trail you die, and the last player standing wins.

As mentioned, this was built using the Godot game engine and was programmed in GDScript, which is a language made for Godot that's similar to Python. Most of the time spent on the project was on figuring out how to detect players colliding with the trails. Each trail is made up of a list of points which is then drawn using the Line2D node in Godot. And instead of generating a collision shape for each trail, collision is handled by going through each line segment and calculating if the closest point to that line for each player is within the player's radius. If it is within their radius, then you know that the player must be colliding with a trail.

## How to Play
The game can be played at [https://kurvegodot.netlify.app/](https://kurvegodot.netlify.app/) (takes a while to load the first time)

The source code can be found at [https://github.com/ethan-moyer/KurveGodot](https://github.com/ethan-moyer/KurveGodot)