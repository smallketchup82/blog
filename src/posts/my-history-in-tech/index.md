---
title: My History in Programming
description: From school Chromebook websites to open source, and learning how to enjoy programming without making it my entire identity.
date: 2026-10-23
---

Hey fellow internet strangers! It's been a while since my last proper blog post. I've spent a lot of that time thinking about programming, which is a slightly inconvenient thing to do when you're trying to take a break from programming.

My last two posts were mostly about contributing to osu!. This time, I want to go further back. Before C#, before pull requests, before I knew enough about software architecture to spend hours worrying about it, I was a kid writing HTML on a school Chromebook.

People have called me a programming prodigy for as long as I can remember. Teachers, friends, family, people who needed their computers fixed. I got used to being the person who was good with technology. Eventually, I got a little too used to it.

So this is going to be about the things I made, the people who helped me make them, and how something I loved gradually became something I felt I had to be exceptional at. There's a lot I'm proud of here. There's also a lot I wouldn't recommend copying.

## Before I Knew What Programming Was

I've been surrounded by technology for most of my life. We had a family computer, my parents had smartphones, and I grew up playing on an Xbox 360, a GameCube, and a Wii. My father worked in IT and eventually became a college professor in the field, so computers were hardly some mysterious thing nobody in my family understood.

You could make an argument about having it in my blood. Personally, I think having access to computers and far too much curiosity explains it pretty well.

By elementary school, I was spending a lot of my free time online. Roblox, browser games, PopularMMOs videos, the usual. I eventually preferred the computer to my consoles because there was simply more I could do with it.

I also became the kid teachers asked for help when something wasn't working. That didn't mean I understood computers particularly deeply. Usually, it meant I was willing to click around until I figured something out.

I remember downloading movies, putting them in Google Drive, and being allowed to show them to my class on the projector during lunch or recess. My understanding of copyright was considerably less developed than my understanding of how to get a video playing.

At that point, I mostly knew how to *use* technology. The interesting part came when I realised I could make some of it myself.

## The School Chromebook Era

I started writing HTML around Grade 5. Our school Chromebooks had a basic text editor, and I discovered that saving a file with an `.html` extension let me open it as a website.

That was pretty much all the equipment I needed.

My early attempts were simple pages with buttons and links, assembled with help from tutorials and whatever I could find online. W3Schools did a substantial amount of the teaching. Over time, I picked up CSS and then enough JavaScript to make things happen when you clicked on something.

One of the first projects I actually cared about was a copypasta website. I used to send my friends funny blocks of text, but finding the text, selecting it, copying it, and then pasting it was apparently too much manual labour for me. So I made a page where clicking on some text would copy it to your clipboard.

An extremely important problem, finally solved through software engineering.

I still have an early version in my programming archive. One of its test messages reads:

> i spent 2+ hours on this and it finally works. i also spent another hour trying to make its animation

That probably describes my introduction to programming better than any polished explanation I could write now.

The result wasn't especially useful to anyone else. But I had thought of something, figured out how to build it, and watched it work. That felt incredible. Programming became a way to turn whatever was in my head into something I could actually interact with.

After that came a coin-flip website, a password-protected page, CSS experiments, and a notes website that used browser storage. The notes site also had a clock with an animation around the time our school bell would ring, because obviously that was a necessary feature.

I did a lot of this on school Chromebooks, sometimes during lessons. Some teachers weren't impressed. Others seemed to consider it a reasonable improvement over playing games. My Grade 5 teacher even gave me time to teach the class some basic coding and logic using Code.org.

Looking back, I had an unusually good environment for getting started. I had access to the tools, adults who encouraged me, and enough free time to spend an afternoon making a button work. That matters a lot more than the word "prodigy" suggests.

## Python, Cameras, and Finding Something to Make

Eventually, I wanted to do more than build websites, so I started learning Python.

Learning the basic syntax wasn't the difficult part. Finding something I wanted to do with it was.

With HTML and CSS, the result was immediately visible. I could change a colour, move a button, or add an animation, and see the difference. A Python script printing some text to a console didn't have quite the same appeal.

Then I discovered computer vision.

I experimented with reading text from images and webcam feeds, recognising objects, and drawing a person's joints over video. I also made automation scripts with PyAutoGUI. Some were more successful than others, but getting a computer to react to something happening in front of a camera was much more exciting than another console exercise.

To be clear, I wasn't inventing these models. I was using existing libraries and trying to understand how to make them do something interesting. My later `pythonstuff` project collected some of these kinds of experiments using OpenCV, MediaPipe, and object detection models.

This was also an early introduction to the difference between understanding a tutorial and understanding the system behind it. Getting a demo running felt great. Figuring out why it stopped running after a dependency changed was a separate hobby I hadn't knowingly signed up for.

## Finding a Community: Galaxy

Around this period, a Roblox game called Galaxy became a much bigger part of my life.

I had played it before, but getting involved with the community gave me something the little websites and Python experiments didn't: people who had problems I could help solve.

I started editing the Galaxy Wiki, which was hosted on Fandom at the time. I became a wiki moderator, then an administrator, and eventually took on more responsibility for the staff team and the wiki itself. I also became a moderator for the game's Discord and later spent time as a developer for Galaxy.

As a game developer, I mostly gravitated towards practical improvements: ship reload indicators, custom purchase amounts, and changes to the interface. Even then, I preferred making an existing thing more useful over coming up with an entire game from scratch.

The community was messy. We were a lot of young people with strong opinions, internet access, and more responsibility than we necessarily knew what to do with. I wasn't some uniquely mature exception to that. I made mistakes, got involved in arguments, and spent time on things that really didn't deserve it.

But I also made friends and found a reason to keep learning. If the wiki needed a tool, I could try to build it. If people were doing something repetitive, I could try to automate it. Suddenly, programming had an audience beyond whoever happened to be sitting next to me in class.

## Meeting yname

One of the most important people I met through Galaxy was yname.

He helped me with programming, let me host the wiki bot on his server, and introduced me to a lot of the infrastructure behind the things I wanted to build. Reading through our old conversations, I'm impressed by how patient he was. I'm also a little embarrassed that any of this is still on record.

There is enough material here that I think he deserves his own section of evidence.

### An Operating System Expert

In November 2020, he was helping me connect to his server. The connection setup asked which operating system the server used, and I selected Windows. Naturally. What else would a computer run?

When that didn't work, he explained that I needed to select Linux because his server ran Ubuntu. My response was:

> **Me:** wow no windows?  
> **Me:** now i feel bad for you  
> **yname:** this is my server  
> **Me:** hah

About nine minutes later, I asked him "whats bash".

After he explained that it was a terminal, and mentioned that Macs used it too, I informed him that "macs are shit when it comes to programmign with but alr".

My lack of knowledge was not going to stop me having opinions.

### Learning All the Commands

A few months later, I bought my first Raspberry Pi. Having previously expressed my condolences about his choice of operating system, I now needed him to teach me how to use mine.

> **Me:** but i kinda have no idea how to use linux and its commands  
> **Me:** so can u teach me how to use all the commands  
> **Me:** like nano, sudo, all of that.  
> **yname:** yes 🙂

All the commands. Just a small favour.

I quickly developed strong views about those too. After asking what nano was, I complained that "nano is so bad tho" because you "cant even use mouse". While struggling to install Node.js on the Pi, I announced that "im starting to rethink if the linux penguin is a good OS developer.."

Apparently, I believed the penguin was personally responsible for my dependency problems.

I eventually got an older version of Node.js running, celebrated, and then discovered that it was too old for the version of Discord.js I needed. The next morning, my considered response was "ok screw javascript", followed by "python it is".

This was roughly how my technical decision-making worked at the time.

There were also some difficulties understanding which tools did what. For example, when considering byobu, a tool for managing terminal sessions:

> **Me:** say should i download byobu  
> **yname:** if you want sure  
> **Me:** is it better than nano  
> **yname:** byobu is a terminal inside a terminal  
> **Me:** ah yes i sure do love it when theres a terminal inside of my terminal 🤓

I was comparing it to a text editor. I hadn't established what either thing did, but I did want to know which was better.

By October, I was using byobu while we worked on the server. My verdict had developed considerably:

> **Me:** get ri of  
> **Me:** byobu  
> **Me:** its very difficult  
> **Me:** for me  
> **Me:** uhh  
> **Me:** how do i get otu of it

A few messages later, before saying goodnight, I assured him:

> i'll probs be able to figure things out if anything breaks

Provided the first thing that broke wasn't my ability to leave the terminal, presumably.

### The Sudo Authorities

Trying to get the new wiki running provided even more material. I didn't have administrator permissions on his server, which I reported as:

> it looks like im not a sudoer
>
> and i am now being reported to the authorities

The following day, I was sending messages like "GIVE SUDO OR SOMETHING MAN". He explained why he couldn't give me unrestricted access to a server containing his private data, and offered to set up a container for me instead. A very reasonable response to someone whose main qualification was that he really wanted the website to work.

I also sent him an elaborate deployment plan which included this step:

> i then hack into mainframe and watch the matrix for 5 minutes, afterwards i get your external ip

Other parts of the plan involved begging him to forward a port, alarming my antivirus, and configuring "some more mumbo jumbo". Looking back, I can understand why he didn't immediately hand over full control of the server.

### Please Review My Epic Code

Of course, I also wanted him to appreciate the things I was making. In September 2021, I asked him to look through my "epic lines of code" and rate my "epic programming skills".

He suggested making a button spin when clicked. I explained that I'd already done that, but the interface destroyed and recreated itself, so you couldn't actually see the animation.

I had implemented the feature. Whether anyone could perceive it was apparently a separate concern.

Later that month, he was looking through the wiki bot and found a chunk of code surrounded by braces. After sending it to me, he asked:

> **yname:** what is this  
> **yname:** why is there {} around it  
> **Me:** to be able to minimize in vscode  
> **yname:** ok

There you have it. The architectural reasoning behind my code organisation was that I wanted to fold it up in the editor.

He also found an unfinished interactive feature and asked whether saying "cancel" was supposed to cancel it or do nothing. I replied "no idea" and had to ask where the file was.

Some people leave comments explaining their code. I was available to be confused about it in real time.

### Learning Git

That same September, I messaged him after losing a bot while trying to upload it to GitHub. While he was trying to help recover it, I explained what I'd done next:

> **yname:** you deleted the folder??  
> **yname:** with the .git inside?  
> **Me:** ye  
> **yname:** bruh

I explained that I'd deleted `.git` "to reset things bc i broke stuff". That was the directory containing the history that might have helped recover the work.

My solution to a version-control problem had been to remove the version control.

Later in the conversation, I asked him to teach me how to use Git "without deleting everything". While explaining what I'd done, I checked that he was familiar with the software involved:

> **Me:** u know vscode  
> **yname:** yes i know vscode

Just making sure we were both qualified to continue the investigation.

I like that he didn't always pretend to know everything either. A couple of weeks later:

> **Me:** what does git stash do  
> **yname:** idk  
> **yname:** lol  
> **Me:** nice

Between us, we were gradually discovering which parts of Git either of us could explain.

### A Server of My Own

By November 2021, I had my own server to make mistakes on. One evening, I opened our conversation with "hi", "so", and then "i may have accidentally deleted everything on my user".

I had created a folder named `~` and, while trying to remove it, accidentally started deleting my home directory instead. Fortunately, I stopped the command before it deleted everything. Unfortunately, that still left me trying to recover bot files from a Docker container.

The boy who felt bad for someone running Linux had now acquired enough Linux knowledge to become a danger to his own files.

Having my own server also meant I could give yname an account and, eventually, administrator access. You might think that after all the requests for sudo on his server, I would have been quite understanding about this.

Instead, we developed an ongoing dispute over his permissions while messing around with a Minecraft server.

At one point, I informed him that he'd been reported to the "sudo police" and that I'd restore his access when I got home. He replied that he'd already added himself back, because he still had an administrator terminal open. Then he sent "hackerman".

Later in the same conversation, I tried a more thorough approach:

> **Me:** i have rid of your sudo  
> **yname:** rebooted lol  
> **Me:** and logged you out of all terminals

This appeared to work for approximately as long as it took him to send the next few messages:

> **yname:** i request sudo access  
> **Me:** monkey  
> **yname:** i have obtained sudo  
> **Me:** how  
> **yname:** yes  
> **yname:** try to figure it out  
> **Me:** no idea

He offered me a hint afterwards. Even my attempts to stop him administering the server became another thing he had to teach me.

He wasn't always the entirely serious party in these conversations. That probably made him a much better match for someone who considered "hack into mainframe and watch the matrix" a necessary deployment step.

### Minor Oopsies

In April 2022, I urgently asked for help because my server had lost its network connection after a reboot. I'd contacted the hosting provider, who said the problem was on my side. I described it to yname as "i just did a simple reboot lol".

We started investigating. Then, some way into the conversation, I remembered a detail:

> **Me:** wait  
> **Me:** i know why this happened  
> **yname:** why?  
> **Me:** a bit earlier my python glitched so i tried to uninstall it  
> **Me:** but uhh  
> **Me:** i forgot a lot of things on ubuntu rely on python  
> **Me:** and i. ran apt purge  
> **Me:** minor oopsies

This prompted a particularly helpful observation:

> **yname:** also the backup system is written in python lol

I had managed to break the server and interfere with the thing meant to help recover it. A much more comprehensive incident than the original "simple reboot" report suggested.

Once I was in rescue mode, he checked the backups. There were hourly backups up to around the time I'd uninstalled Python, which did rather support the theory.

The following month, while trying to fix the server's login message, I installed the wrong package and accidentally added a graphical desktop. I then needed help getting rid of it. When yname suggested removing a package, my response was:

> **Me:** what does that do  
> **Me:** idk  
> **Me:** but i did it

You might reasonably hope that the Python incident had taught me to ask that question *before* running the command. Apparently, the lesson needed another pass.

### Other Important Technical Discussions

Not every conversation involved recovering something. Sometimes, I was simply learning about a new technology:

> **Me:** hey what is a mail server  
> **yname:** email  
> **Me:** what does a mail server do  
> **yname:** receive emails and send emails

He went on to explain some of the complications involved in running one. I concluded that it sounded hard and moved on to the next interesting thing I'd found in a list of self-hosted software.

He also explained static site generators and sent me an example site. That led to this exchange:

> **yname:** Notice how fast it loads  
> **Me:** it took me 10 seconds for the page to stop loading and render

In fairness, I immediately admitted I was using a VPN. He suggested that the site hadn't been visited in months. Neither of us got quite the demonstration we'd intended.

By March 2022, I was asking about learning SQL and becoming a full-stack developer. My ambitions had grown, though certain technologies were still causing concern. I told him that some backend jobs wanted Kubernetes experience, followed by:

> and i piss myself even hearing the word "kubernetes"

Later that month, I asked him for help setting up a VPN and offered payment in the form of "limiting my trolling on april fools".

He said he didn't have experience with what I was asking for. The offer was unsuccessful, and I moved straight on to telling him about a different server problem.

### Actually Learning Something

But underneath all the nonsense, I was learning. yname helped me get the bot running around the clock, answered questions about tools I barely understood, and talked me through problems I couldn't solve myself. He also encouraged me. In February 2021, he told me my bot was very good, and I thanked him for hosting it because it made the bot much more useful to the wiki staff.

I could be confidently wrong, ask an extremely basic question a few minutes later, and keep going. Having someone willing to help made it much easier to try unfamiliar things. It also left us with a very thorough record of just how unfamiliar they were.

## Leaving Fandom and Building the Galaxypedia

By 2021, we were getting increasingly tired of Fandom.

Advertisements, restrictions on customisation, and platform changes we had no control over made it frustrating to maintain the wiki. The move away from Fandom's old Oasis skin was another push towards doing something ourselves. If we were going to spend that much effort changing the site, we wanted more say in the result.

So we moved to an independently hosted MediaWiki site: the [Galaxypedia](https://wiki.galaxy.casa).

That sounds straightforward when written in a sentence. In practice, it meant importing the wiki's content, setting up the software, dealing with the database and files, configuring the site, and figuring out how to keep everything running afterwards.

I became responsible for much of the backend, administration, styling, and staff organisation, working alongside Explodabat and the other people who kept the wiki going. We funded it through donations rather than advertisements. Having fewer ads was one of the reasons we'd left in the first place; putting them straight back wasn't particularly appealing.

The name of the server was Comet. I spent a lot of time thinking about Comet.

At its peak, I remember the Galaxypedia reaching thousands of unique visitors per month, hundreds of unique visitors per day, and millions of requests per month. I can't find the old analytics now, so those figures are from memory.

For the first time, making something work on my own computer wasn't enough. People expected the site to be available. Updates could break things. Backups needed to exist before I needed them. A change to one part of the system could affect something I hadn't even been thinking about.

I also learned that migrations are considerably easier to plan than to recover from.

In 2022, I moved the wiki from SQLite to MariaDB after struggling to get the features I wanted working with the existing database. It took multiple attempts and a lot of manual work. During that process, I mishandled the image import and ended up with lower-resolution versions being treated as originals.

That wasn't a theoretical lesson about data integrity. It was a website full of visibly blurry pictures, followed by the work of figuring out what had happened and helping fix it.

I don't want to pretend I was running everything flawlessly. I was learning in public, sometimes through mistakes that other people had to live with. But I learned a lot more from maintaining that wiki than I ever would have from another isolated tutorial project.

## Making the Wiki Update Itself

One of the more obvious problems with a game wiki is that games keep changing.

Ships get rebalanced. Weapons change. Someone has to go through the pages and update the numbers. Then the game changes again.

That was a very good way to discover my interest in automation.

The [KetchupBot updater](https://github.com/Galaxypedia-Wiki/ketchupbot-updater) grew out of the idea that the game's own data should be able to update the wiki. Instead of asking volunteers to manually copy ship statistics, the bot could fetch data from the Galaxy Info API and update the relevant parts of the pages.

There were earlier scripts and different versions along the way. Over time, the work expanded to ship infoboxes, turret tables, and the less exciting details involved in making automated edits safe enough to trust.

Changing a number in a test file is easy. Changing numbers across a live community wiki, while preserving the things people have written by hand, requires a little more care.

This was one of the first projects where my programming was useful even when nobody was watching me do it. Players could look something up and get better information. Editors could spend less time copying statistics and more time improving the actual articles.

I didn't need to persuade people that automation was useful. There was a task, it was repetitive, and I could make a computer do a substantial part of it. That kind of work still appeals to me.

Running the Galaxypedia also taught me that software is only part of maintaining a community resource. You need people who contribute, people who answer questions, and people who care enough to notice when something is wrong. The wiki wasn't just my programming project, even if I sometimes treated it as an extension of myself.

## Discord Bots: An Interlude

There were also a lot of Discord bots.

My first was called `tech-support-scammer`. Despite the extremely professional name, it was a bot for messing around with friends, playing audio, and trying out whatever commands I felt like adding. The archived code is about as organised as you'd expect from that description.

Then came the Galaxy Wiki bot, which was meant to make the staff's lives easier and let people interact with the wiki from Discord. I remember deciding that this time I was going to keep the code tidy and keep improving it, unlike the previous bot.

It also became messy. A valuable early introduction to the limits of promising yourself that you'll simply write better code next time.

There was `sugoncredit-bot`, a joke points system made for the Galaxy Discord. There was [nicknamer2](https://github.com/smallketchup82/nicknamer2), which could take messages in a server and use them to change a selected person's nickname. This was, of course, developed exclusively for responsible and constructive purposes.

I also ran a music bot. That one needs a distinction: the instance I called Sugon Music Bot was a self-hosted version of FredBoat, rather than a music system I had written entirely myself. Operating it still meant dealing with hosting, resource usage, updates, and eventually the fact that an old version wasn't keeping up with Discord. I shut it down in 2023 after it stopped working reliably.

Eventually, I moved towards more practical tools, including [ketchupbot-discord](https://github.com/Galaxypedia-Wiki/ketchupbot-discord) for the Galaxypedia and work in C# with Discord.Net.

The silly projects were useful, though. A bot gave me an excuse to learn about events, asynchronous code, APIs, configuration, and deployment. More importantly, my friends could immediately use whatever I'd made. I didn't need to invent a business plan to justify spending an evening on it.

## GalaxyGPT and Moving On

In 2023, I started working on [GalaxyGPT](https://github.com/Galaxypedia-Wiki/GalaxyGPT).

The idea was to let people ask questions about Galaxy and get answers based on information from the Galaxypedia. It searched the wiki's content using embeddings, then supplied relevant information to a language model so it could produce an answer.

I had a working version using the embeddings API by early April 2023. The project changed considerably after that, including a later move to C# and work with Qdrant for storing and searching the embedded content.

It was a good excuse to learn things I hadn't needed before. Preparing a dataset, finding relevant information, handling requests, and making the answer accessible were all different problems. A convincing response also wasn't necessarily a correct one, which mattered rather a lot for something meant to help people look up game information.

But by then, my relationship with Galaxy was already changing.

I had stepped away from game staff responsibilities in 2022, and in March 2023 I left the main Discord again. I needed more time for school and less time being caught up in whatever was happening in the community.

Moving on from the wiki was harder. I had put so much into it that maintaining it felt like an obligation, even when I wasn't especially interested in the game anymore. In conversations with friends, I kept coming back to the same problem: I wanted distance, but people still used what we'd built.

There wasn't one clean moment when I stopped caring. I continued maintaining things, worked with other people on new ideas, and sometimes found myself enjoying it again. We even worked on a different version of the site that never made it into production.

Still, I couldn't expect the same community project to remain the centre of my life indefinitely. Eventually, I needed somewhere else to put that energy.

## Finding osu!, and a Much Larger Codebase

That somewhere was osu!.

I started playing more with friends, became interested in lazer, and eventually found something that annoyed me enough to fix it myself. In multiplayer lobbies, I wanted to see difficulty information without having to open the selected beatmap.

So I forked the repository and tried to add a tooltip.

I submitted [my first pull request](https://github.com/ppy/osu/pull/26531) in January 2024. It was merged the following month. I had only basic experience with C# at the time, and understanding the existing codebase took much more effort than the final feature might suggest.

If you've read my first osu! post, you'll know that the code review was educational. In particular, having two variables with almost identical names serving different purposes was apparently not my finest design decision.

But it worked. Something I had written was now part of a game I played with my friends.

That feeling was very familiar. It was the same thing I'd liked about the bots and the wiki, except now I was contributing to a much larger project, alongside people who knew far more than I did.

I wanted to do it again.

The contributions became more ambitious: Windows file associations, audio normalisation, moving the updater to Velopack, skin mounting, a beta release channel, NVIDIA Reflex, and experiments with mobile haptics.

Those projects had different outcomes. Some work merged. Some was substantially revised or replaced by another implementation. Some remained experimental. As of writing this, my audio normalisation and NVIDIA Reflex pull requests are still open.

I don't want to turn this post into another complete changelog, since I've already written two of those. The important part is that I was now working in an environment where getting something to function was only the beginning.

It also had to fit the project, be maintainable, survive review, and work on other people's machines. I learned that last requirement particularly thoroughly when my updater work caused problems with Windows shortcuts and file associations.

There are few things more effective at changing your attitude towards testing than having real users discover what you didn't test.

## Helping Someone Else Get Started

While all this was happening, I also got to experience the other side of learning with someone.

I met cornhusker through the Galaxypedia, and by late 2023 we were working together on [a Re:Zero web novel summarizer](https://github.com/smallketchup82/rezero-summarizer).

I was reading Arc 7 and finding it difficult to keep track of everything. The summaries I wanted weren't consistently available, so I made a tool that downloaded the text, split it into chapters and parts, and used an AI model to produce summaries. It was intended to help me remember what I'd read, rather than replace reading the story.

Working on it together gave us something concrete to discuss. We talked about Python, regular expressions, Git, branches, merging, rebasing, code review, and automated builds. At one point, after a session, I told him I thought he'd learned more about regex than Python.

I sent him *Pro Git*, explained why you shouldn't casually rewrite the history of a shared branch, and worked through changes with him using Live Share. There were actual pull requests and actual problems to fix, which made the explanations much less abstract.

Calling myself his mentor doesn't mean I had all the answers. He helped with my projects too. But I had enough experience in some areas to make them easier for someone else to approach, the same way other people had done for me.

Later, in March 2025, he told me about contributing to tModLoader. I was really happy to see him going out and contributing to another project himself.

That was a different kind of satisfaction from finishing a feature. The useful part of helping someone learn is that eventually they can go and do things without you.

## School Projects, a Coding Club, and Graduating

Alongside all the extracurricular programming, I still had actual computer science classes.

I used those as an excuse to make projects I found interesting. `pythonstuff` brought together computer vision experiments. [javastockfish](https://github.com/smallketchup82/javastockfish) was a Java chess project using Stockfish. I wasn't writing a world-class chess engine myself; integrating one into a program was already plenty to work on.

Then there was `gradeManager`, a Python application with a terminal interface for managing courses and marks. It used a database to store the information and supported things like weighted categories and exam grades.

These weren't revolutionary ideas, but I liked being able to take an assignment and turn it into something with a little more substance. There was an end goal, a reason to learn a new library, and usually a deadline to stop me adding features forever.

In my final year of high school, I became co-president of the coding club. That meant helping other students, being involved in club activities, and helping organise programming contests. It also meant that being "the person who knows programming" was now attached to an actual title.

I enjoyed it. I also put more pressure on myself than I needed to.

One contest in February 2025 sticks out. Before it started, I told the others to read the questions carefully and collect partial marks instead of spending the whole contest trying to perfect one solution.

Then I spent roughly two hours on the hardest question.

I eventually gave up and tried to salvage the remaining time with something easier. It was a considerably worse result than I'd achieved the previous year, and I took it badly.

The embarrassing part wasn't just the score. It was realising that I'd given sensible advice and then ignored it because I wanted to be the person who could solve the difficult problem.

The other club members weren't nearly as bothered as I was. I was treating it as evidence that I wasn't the programmer I thought I was. To them, it was a contest that hadn't gone well, with some reasonable opportunities to tease me afterwards.

I graduated in 2025 and went on to university. By then, programming had given me projects, friends, a club to help lead, and a fairly clear idea of what I wanted my future to involve.

My marks had been consistently strong too. I finished every high school CS course with a grade of 95% or higher, and I'm still averaging an A+ across the CS courses I've taken at university.

It had also become something I relied on to feel good about myself.

## When Contributing Stopped Feeling Good

By late 2025, contributing to osu! was becoming difficult in a way I didn't know how to fix with code.

I admired the core developers. I wanted to learn from them, work alongside them, and eventually become part of the team. At first, that was a perfectly reasonable ambition. Over time, it started carrying much more emotional weight than it should have.

I wasn't just asking whether a feature worked. I wanted some indication that I was doing well, that I was useful, and that I might eventually belong there.

The problem was that the work I enjoyed most also required a lot of attention from the people reviewing it.

A large contribution doesn't stop costing time when its author finishes writing it. Someone has to understand the approach, think through the edge cases, decide whether it fits the project, and take responsibility for maintaining it afterwards. The core team had their own work and plenty of other contributions competing for that time.

I understood that logically. Emotionally, spending weeks on something and then hearing very little for months was discouraging.

When feedback did come, it naturally focused on what needed changing. Sometimes my design needed substantial revision. Sometimes someone more experienced took the work in a different direction. None of that was unusual for open source, but I increasingly struggled to separate criticism of the work from criticism of my ability.

I also made myself harder to help. I didn't want to be annoying, so I avoided asking questions or requesting feedback. I hoped being independent would show that I was capable. Then I felt isolated because I was doing everything by myself.

There was a moment during a development meeting when I wanted to give a quick update about the haptics work. I didn't get the opportunity I'd hoped for, and afterwards it was clarified that that part of the meeting was primarily for the existing team.

I don't think anyone intended it as a personal rejection. But I had invested so much in the idea of eventually being part of that group that it felt like one.

In December, I told a friend I wanted to work on something people used, as part of a team, where I could see my work serve a purpose. I was starting to expect one volunteer hobby to provide all of my professional direction, confidence, and sense of belonging.

That was a lot to ask of it.

Eventually, submitting a smaller change and getting a quick response helped something click. I had been trying to demonstrate my value by making increasingly ambitious contributions, while also giving the reviewers increasingly large amounts of work.

There was a mismatch between what I wanted to spend my time doing and what the project could readily accommodate. I could acknowledge that without deciding that either side had done something wrong.

So I stepped back from active osu! development. I still care about the game and the work I've contributed, but the way I was approaching it had stopped being sustainable.

## An Ego Check, With Some Complications

It would be easy to describe this as a simple lesson in humility. Kid thinks he's good at programming, meets people who are better, gets humbled. End of story.

There's some truth to that. There were plenty of things I didn't know, and I needed to discover that. But I think the more important problem was how much being good at programming meant to me.

For years, it had been the thing I could fall back on. If school wasn't going well, if I didn't feel confident socially, if I wasn't happy with something else in my life, I could still tell myself I was good at this.

Being encouraged as a kid wasn't a bad thing. The problem was that I gradually turned the encouragement into a standard I felt obliged to maintain.

Every project had to be a little more impressive. Every difficult problem was an opportunity to prove something. If a project was easy, I started dismissing it as beneath my abilities. If it was hard and I struggled, that struggle felt like evidence that my abilities weren't real.

There wasn't much room left for learning.

I can see that pattern in the programming contest, in how I chose osu! contributions, and in how I reacted when someone rewrote my code. I wasn't simply disappointed that something hadn't worked. I was worried about what it said about me.

I don't think the answer is to decide that I was secretly terrible all along. That would just be the same obsession with ranking myself, with a less flattering result.

I had put in a lot of work. I had made useful things. I also had enormous gaps in my knowledge, like anyone else who was still learning. Those facts can exist together.

The harder thing to accept is that I don't need a final verdict on whether I'm exceptionally talented before I'm allowed to enjoy programming.

## Perfectionism, and Losing the Hobby

As I became more conscious of everything that could be wrong with my code, I started judging it much more harshly before anyone else could see it.

Was the design correct? Were the classes organised properly? Was I following the right pattern? Would someone more experienced look at this and immediately know I'd made a mistake?

Reviewing your own work is useful. Feeling unable to show anything until you've eliminated every possible criticism is much less useful.

I started behaving as though there was one correct way to build a system, and experienced programmers knew it while I didn't. If I couldn't immediately find that answer, I'd get stuck before I'd made enough of the thing to learn what it actually needed.

By 2026, this had become a fairly reliable cycle. I'd think of a small project, dismiss it as too easy, come up with something much more ambitious, start planning it, get overwhelmed, and stop.

In June, I described almost that exact loop to a friend. Reading it back, it's difficult to miss the absurdity. I had become so concerned with making something worthy of my skills that I was barely using those skills at all.

Around the end of my first university year, I went through a particularly difficult period. My motivation dropped, things I normally enjoyed became hard to enjoy, and programming no longer felt like an escape. Other stresses were involved too; it wouldn't be honest to attribute everything to one game or one code review.

But losing my relationship with programming left a bigger gap than I'd expected. It had supplied a lot of my confidence, purpose, and plans for the future. Without it, I didn't really know what was supposed to take its place.

I missed the person I remembered being in high school: curious, excited, willing to throw himself at something unfamiliar and figure it out. I wanted that feeling back, and I kept assuming the way to get it was to build something impressive enough.

Which was, unfortunately, the same approach that had helped get me stuck.

## A New Era of Experimentation

I've started making things again.

One recent project is [TempFold](https://github.com/smallketchup82/TempFold). It uses an ESP32-C3 temperature sensor and a C# application to control Folding@home based on room temperature. If the room needs more heat, the computer can do some folding. If the temperature reaches the upper threshold, it pauses.

A computer is already quite capable of making a room warmer. I figured it might as well do something useful in the process.

It isn't an air conditioner and it can't cool the room down. But it is a concrete problem with a physical result, and getting the sensor, firmware, and application working together gave me a reason to learn some things outside my usual software projects.

I'm also working on [ZkInfraNeo](https://github.com/smallketchup82/ZkInfraNeo), an experiment in rebuilding the backend server for Zero-K, another game I play with friends.

That project is much larger and still in research and development. It isn't a finished replacement for the existing server, and I don't want to describe it as though adoption is guaranteed. It's something I'm building and learning from.

The interesting challenge has been designing a larger system rather than making an isolated feature work. Networking, persistence, authentication, and the boundaries between different responsibilities all need thought. I've been spending more time learning about architecture and design patterns, and trying to understand the actual tradeoffs behind them.

Knowing the names of patterns doesn't mean I automatically know which ones a project needs. Sometimes the useful next step is much simpler than the architecture diagram I was about to draw.

There are other projects I'm keeping to myself for now. I would rather have something concrete to show before turning them into announcements.

None of this means the old habits have disappeared. I still catch myself worrying that Neo needs to prove I'm capable of building something complicated. I still spend too long wondering whether a design is good enough to show someone.

The difference is that I can recognise the pattern a little earlier. At least sometimes, I can return to the actual problem in front of me instead of turning it into another judgment of my entire programming career.

## Programming in the Age of AI

AI has complicated my feelings about all of this too.

I'd been interested in it for years, from computer vision experiments to GalaxyGPT and the Re:Zero summarizer. Using models to make something useful wasn't new to me. Having them become increasingly capable of doing the programming itself felt different.

A lot of my confidence had come from being able to make computers do things that most people around me couldn't. Seeing AI do some of that work made me question what was actually valuable about the skills I'd spent years developing.

At the same time, I've used AI to help with my own work, including code and architectural questions. That introduced another insecurity: if I needed help deciding how to organise a system, had I really learned enough? Would people take the work less seriously if they knew how I'd made it?

I don't have a completely settled answer to how I feel about AI's place in programming or the wider industry. I don't want to turn this into either a sales pitch or a declaration that the craft is dead.

What I do know is that I still need to understand the software I'm responsible for. An answer I can't explain doesn't resolve my uncertainty. A large amount of generated code isn't especially useful if I can't tell whether it fits the problem.

I'm trying to use the help without treating it as either proof of my incompetence or permission to stop thinking. Asking for an explanation, testing an assumption, and learning why a design works are useful things to do. They don't become less useful because I wish I already knew the answer.

I also don't think waiting for the perfect project idea will fix my relationship with programming. Most of the things I enjoyed making started with something ordinary that annoyed me: copying text, updating a wiki, remembering a chapter, or checking a beatmap's difficulty.

I can pay attention to those problems again. They don't need to be impressive before they're worth solving.

## What I Want to Keep

There's a sentence I've been trying to take seriously: **"To get good at something, you need to be willing to be bad at it first."**

I understood that when I was learning to make websites, even if I wouldn't have phrased it that way. I didn't expect a perfect design before I made a button copy some text. I spent hours trying things, got excited when they worked, and moved on to the next idea.

Somewhere along the way, I started treating that uncertainty as something I should have outgrown.

I want to keep the curiosity and the willingness to work through difficult problems. I want to keep caring whether the things I make are useful. I want to keep learning from people who know more than I do, and helping people who are getting started.

I don't want every unfinished project, request for changes, or gap in my knowledge to feel like a threat to who I am.

I also need to be honest about what all of this cost. There were times I neglected school, spent too much time in online communities, and let my sleep, health, and life away from the computer take a back seat. Those weren't necessary ingredients in becoming a programmer. They were things I should have taken better care of.

I don't think I was a magical child who somehow knew how computers worked. I was interested, I started early, I spent a lot of time on it, and people helped me. Then I spent several years mistaking the result of that process for an identity I had to defend.

I'm still working on separating those things. Starting a new project hasn't automatically made me comfortable with mistakes, and understanding the problem hasn't automatically changed how it feels.

But I am making things again, and there are moments when it's fun in the way I remember.

If you're getting started, I hope the projects here give you some ideas. You can learn a lot from a silly bot or a website nobody else needs. If you've been doing this for a while and feel stuck, I hope there's something familiar here too.

I still want to become a better programmer. I just want to be able to enjoy being one while I'm learning.

Thanks for reading this far. I'll see you in the next one!
