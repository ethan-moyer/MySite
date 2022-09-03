---
layout: layouts/post
title: Small Fighter
hideDate: true
date: 2022-09-03
image: small-fighter-project.png
tags: ["project"]
---

This project is a fighting game for two players. This game was developed with the goal of making a fighting game that's simple while still retaining key gameplay
mechanics like input motions for special moves. I'm a big fan of fighting games, which is what motivated me to make this project. The game was developed over a time span of around five months (from April 2022 through August 2022).

Like with my previous project, I developed the game with the Unity game engine with scripting done in C#, and all 3D models were made using Blender. The most time consuming part of the project was creating a system to manage all the different moves the player can do and having the correct move be select based on the player's series of inputs. In most fighting games, special moves are done by pressing a series of directions and buttons. For example, in *Small Fighter*, you can throw a fireball by inputting *Down, Down-Forward, Forward, Attack Button*. To achieve this, the inputs are stored in a buffer, and every frame the game checks if any special move sequences are found in the buffer, and if they are it starts the attack. In addition to that, I also had to figure out a way to easily create/modify special moves, since even in this relatively simple game, the fighter still has eight different attacks with different animations, hitboxes, and hurtboxes. Each action was saved with Unity's Scriptable Objects, and I developed a custom UI window that let me preview/modify each action frame by frame. 

## How to Play
The download for the game, as well as additional information on how to play it, can be found by going to: [https://geekishninja.itch.io/small-fighter](https://geekishninja.itch.io/small-fighter)
<iframe src="https://itch.io/embed/1685173" width="552" height="167" frameborder="0"><a href="https://geekishninja.itch.io/small-fighter">Small Fighter by geekishninja</a></iframe>

The source code can be found at [https://github.com/ethan-moyer/SmallFighter](https://github.com/ethan-moyer/SmallFighter)