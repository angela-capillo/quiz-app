# Quizzerone!

## Background

This is my first app made with HTML and CSS. I tried to use the knowledge I got so far from these past days of web dev bootcamp, and though I know I messed up quite some things (´margin: 0;´ -- talking to you here), I hope it turns out ok!

## Notes

1. What I did at first was to just draft the app with some basic structure and classes and variables, did multiple commits as soon as I did some significative changes (e.g. finalised new components in css), and pushed everything. One thing I did (probably wrong :D) was to just work on the main branch -- a bit because I was lazy and a bit because I just wanted a full draft to be kind of ready before working on many things on different branches. Though from now on I'll start creating new branches for the fnext steps!

2. Since I am going to use more branches from now on, my idea is to create a new branch for each the following edits:

    - Create the bookmark page
    - Create the profile page (tbd)
    - Restyle the app and make it snazzy ;)

3. When I started creating the bookmark page, I realised that I actually didn't wrap the bookmark icon in the card in a button (:D) nor wrapped the icons in the navbar in links, so I addressed that issue that before creating the bookmark page :) I also populated cards with better content instead of leaving placeholders.

4. I did push everything but noticed that there was something super weird going on: there was some sort of list item dot at the very top of my cards and I thought it was the list style. I spent 40 minutes trying to figure out why it was showing since I did all the due resets, and was actually working after the first push :´( It turned out it was the bookmark button: I forgot to "transfer" the position to the button and restyle it so to become transparent (sad violin).

5. I began restyling the app a bit to make it snazzy and it's going towards a weird direction now. Still have a couple tweaks to make, especially regarding the nav (would also like to redesign the icons myself if time allows), but will just push, create a pr and merge everything for the time being. It was a long day :D
