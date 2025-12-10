---
title: Another Year of osu! Development
date: 2025-12-03
draft: true
---
Hello wonderful internet people! I'm happy to announce that I've officially been working on osu! for another year now. I want to give a recap on what I've been up to, reflect on the past year, and share some plans for the future. But before I do so, I've got a quick announcement.

## A New Blog Site
I've rebuilt my blog site from the ground up! The new site is built with `Astro.js`, a modern static site generator that allows for better performance, flexibility, and ease of use. It features a fully custom design, improved navigation, and modern web features. I hope you enjoy the new look and feel! It has just been released, so if you find any bugs, please bear with me while I get to fixing them.

## 2025 in osu! Development
The past year of osu! development has been exciting. While I haven't contributed quite as much volume as last year, I've been pushing the bar with each contribution. I'm proud to have completed some of the biggest features I could possibly add to lazer. Picking up from the last installment, here are the highlights:

### Beta Channel (Tachyon)
The first contribution to start off the year was the introduction of the Beta Channel, codenamed Tachyon.

This feature was born after a rather [disastrous lazer release](https://github.com/ppy/osu/issues/30648) on Linux. The release basically bricked the game for everyone on the platform, and it took a couple of hours to fix. This incident made it painfully clear that we needed a safer way to push out releases for testing before they reach the general public.

We already do this on stable, but we hadn't implemented it on lazer because the client itself is still in active development—it didn't seem to make sense to have a beta channel for a beta client. However, as lazer has matured and people have started using it as their daily driver, I felt it was time to introduce a proper testing pipeline.

First up, I [PR'ed my changes to osu-deploy](https://github.com/ppy/osu-deploy/pull/183) and submitted a [PR to lazer itself](https://github.com/ppy/osu/pull/30706).

The problem? I was the one implementing it. I had zero clue how the core team wanted the code to look, behave, or be structured. I basically winged it and hoped for the best, leaving a laundry list of notes in the PR description explaining where I had to guess.

Naturally, that approach didn't get far. The PR sat open for months with no attention. Honestly, I was pretty discouraged. Between being an external contributor unsure of expectations and my growing interest in other projects, I let the pull request rot.

A few months later, smoogipoo came along, took my work, and [rewrote the entire thing from scratch](https://github.com/ppy/osu/pull/33162), using my code purely as a reference. He implemented it in a way that made sense to the core team and got it merged in only three days.

Compared to some of my other contributions, I actually didn't mind my implementation getting trashed. I learnt the hard way that if you want a pull request merged, you need a strategy:

1. Talk to the core team first to get a sense of what they want. They unequivocally know better than you do
2. Use existing code as a reference. Match code style and architecture as closely as possible
3. Invite feedback early and often. Open a draft PR and be open to suggestions
4. ***Make it as easy as possible for the reviewer to review your code*** (Courtesy of [bdach](https://bdach.github.io/open-source/2020/08/30/reflecting-on-first-year-of-open-source.html) for this one)
5. And lastly, [peppy's favourite](/media/peppyCodeReview.png): Read your code before you submit it

Even though I didn't get my specific code merged, I learnt something valuable. It’s not every day you get to A/B test your approach to open source contributions like that.

### Fun Side Project
Remember how I said I was interested in other projects? I ended up working on a fun side project this year: a command-launcher esque [feature](https://discord.com/channels/188630481301012481/1097318920991559880/1299018881976762389) in lazer that allows you to quickly search for and switch skins with just a few keystrokes. It received a lot of positive feedback, and I was happy that my little experiment turned out well. Here's a [video](https://youtu.be/g_hI77NGzHs) showcasing it.

Despite peppy expressing interest in getting the feature in-game, I decided that a project meant to help me get comfortable with lazer's drawables and screen systems likely didn't have the polish required for a pull request. I didn't feel like putting in the effort to refactor it, so it started as a fun side project, and ended as one.

### [Skin Mounting](https://github.com/ppy/osu/pull/30226)
I'm pretty sure I touched on this in last year's installment, but it finally got merged this year! It only took bdach taking my terrible excuse for code and rewriting almost the entire thing, but hey, at least I got the ball rolling. Like I said, valuable A/B testing!

### [NVIDIA Reflex](https://github.com/ppy/osu/pull/35678)
One of my biggest contributions this year has been NVIDIA Reflex support. This allows players with compatible NVIDIA GPUs to reduce input latency for a more responsive experience. I've wanted to add this for a while, but the documentation was complicated, and being new to the codebase, I had no idea where to start.

After a lot of trial and error, I managed to get it working, cleaned up the code, and submitted a PR. Community members chipped in with testing results, but a regular contributor, Susko3, pointed out a potential issue with audio latency. Because Reflex delays the Update thread to sync with the Draw thread, it could exacerbate audio latency if used for FPS limiting. I proposed keeping Reflex for input latency reduction only, while sticking to our existing FPS limiting system. At the time of writing, the PR is awaiting review and a resolution to the audio concern. Hopefully, we see it in lazer soon!

### Mobile Haptics
Objectively the best feature of 2025, I've been working on haptic support for mobile devices. This provides tactile feedback during interactions, enhancing the overall feel of the game. Since I only own an iOS device, I focused my efforts there. I initially aimed to use `SDL3`'s haptic API, but after discovering it was deprecated and limited to basic rumble, I went with a native implementation.

This wasn't too difficult, as lazer's usage of `Xamarin.iOS` (or `MAUI`—it doesn't really matter) made it easy to call native iOS APIs directly from C#. The main challenge was figuring out *where* to add the haptics. I've got it working for gameplay and UI interactions, but I'm still refining the architecture to ensure the core team approves.

The good news is that another contributor has expressed interest in taking over the Android implementation, and proving overall feedback. With any luck, we hope to get a pull request ready by the end of the year.

## Wrapping Up 2025
Overall, 2025 has been a fantastic year for osu! development. I've learnt a lot, contributed a lot, made plenty of mistakes, but had fun along the way. I started developing for osu! just to fix a missing feature that annoyed me; little did I know that small decision would become my main hobby and source of professional growth 2 years later.

### Imposter Syndrome
However, there were MANY times I felt like quitting. I often felt unsuited for this work, or that I was a burden to the core team. I had an unshakable anxiety that everything I did was wrong, that I was wasting time, and that I was a hindrance to progress.

I want to be lazer's software developer. By that, I mean I enjoy improving lazer's integration with low-level system features. This means I prioritize making infrequent, but highly complex changes. In hindsight, this was probably not the best idea for an external contributor.

Contrary to what you might think, I actually don't enjoy game development. I find it tedious and frustrating. I prefer developing applications that fulfill a specific purpose rather than games meant to be played for fun. With a game, the sky's the limit, and there's often no clear direction. With an application, the goal is concrete.

That's where osu!(lazer) is different. It uses its own in-house engine, `osu!framework`. The game is built *on top* of this engine, meaning much of the logic is abstracted away. This allows me to make tangible improvements with a clear purpose without dealing with the nebulous complexities of general game dev. Hence my goal of doing low-level system integration work for lazer.

While others work on relatively simple features, I'm often tackling complex implementations that require significant time from both me and the core team. Understandably, this leads to delays. Sometimes it takes months to get a response. When the team is focused on a major milestone, external contributions sit on the back burner, leading to further delays.

This isolation is discouraging. When you don't have your work acknowledged, not even a "thanks for the PR, we'll get to it when we can," it feels like you're working for nothing. As I try to prove my value, the silence eats away at my motivation. Can I reach the core team's level? Am I helping, or just adding to their workload? Do they even care about my changes?

I desire recognition, a simple "hey, good job, keep it up" would go a long way. I want *any* kind of indication that I'm on the right path, but my anxiety won't let me ask for it. I don't want to come off as [needy or annoying](/media/cooked.png). So, I keep my head down and work, hoping that one day my code will speak for itself. I don't ask non-essential questions. I don't ask for feedback. I don't ask when my PR's will be reviewed. I just wait. While my fear masks my enthusiasm, I hope my contributions show my dedication where words fail me.

### Moving Past It
Despite the doubts, I push forward. Last year, my incompetence shielded me from these feelings; this year, I've had to face them head-on. I've had to accept that not every contribution will merge smoothly, and that I'm not perfect.

I constantly remind myself that I'm not doing this for a spot on the core team; I'm doing this for pure love of the game. I'm doing this to improve as a programmer, to gain experience, and to make osu! better. When in doubt, I remind myself that my worst failure was bricking the game with my Velopack PR. Had I quit then, lazer would never have gotten skin mounting, a beta channel, NVIDIA Reflex, or mobile haptics. So, I ignore the anxiety, improve my code, silently work toward my goals, and keep pushing.

I don't ask you to feel sorry for me. Instead, my goal is to share the reality of being new to developing for a project you care deeply about while battling imposter syndrome. If even one person reads this and decides to pick up JetBrains Rider, learn C#, read the contributing guidelines, and contribute that one feature they've always wanted to see in osu!, then I've accomplished my goal.

I still believe I have a lot to offer. I want to keep learning, tackling bigger challenges, and forcing crazy ideas to work. If you're interested in following my work for osu!, [here](https://github.com/smallketchup82/osu-development-methodology)'s the repo I use for tracking my own changes.

I want to thank [peppy](https://github.com/peppy) and [bdach](https://github.com/bdach) for tolerating me, [smoogipoo](https://github.com/smoogipoo) for being the chillest person on the planet, and everyone else who mentored me. And of course, thank you to my friend [lemonrate](https://osu.ppy.sh/users/17559146) for listening to me ramble about osu! development for hours despite knowing nothing about computer science.

Here's to another year of osu! development, see you in 2026!
