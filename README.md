NOTE: This project is discontinued.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

NOTE: This project is on hold for some time, the reason being that I just got hired and for the new job I need to learn Vue.js (from scratch). I will relocate and move to a new country. Once things settle down a bit (when spring comes, I hope), I'll evaluate if I have time to work on this again.

# React Katas

![Image](./src/images/bruce_lee_kicking_ass.jpg)

## Why?

As I am trying to learn the [advanced aspects of React](https://reactjs.org/docs/accessibility.html), I feel that reading the documentation isn't enough, and I need some environment where to easily practice these skills. I think that a good way to do that is to have some kind of setup where I can directly practice a specific aspect that I want to learn, without worring about anything else.

So I started creating this project inspired by the awesome [JavaScript 30](https://javascript30.com/) challenge.

## Overview

Each folder contains a "kata" to practice a specific technique of React. The title of the folder (inside the src/katas folder) will tell you what skill is to be trained. Inside each of these folders, there are two folders: START and FINISH.

The goal is to change the code of the files inside the START folder (or a copy of it) to end with something resembling the code inside the FINISH folder. So the files in the FINISH folder are also something that you can look at for cheating :)

Inside the README.md file of each kata you will find more specific information, instructions and a step-by-step solution.

## For whom may this be useful?

I hope it will be useful to you if you know the basics of React and want a more in-depth knowledge (e.g. you can write a small widget or app with React, but you don't know what are context, higher order components, react routing, component composition, render props, error boundaries, lazy and suspense...)

This will NOT be useful to you if you are a complete beginner to React. If you want to learn about React, I recommend the free exercises in [freecodecamp](https://www.freecodecamp.org/), and of course you have the [official React documentation](https://reactjs.org/docs/hello-world.html).

## Setup

1. Download this repo locally: `https://github.com/luismartinezs/react-katas.git`
2. The first time you work on these, run `npm install` in your console to download all the dependencies
3. In the file /src/index.js, change line 4 according to what you're working on
4. Use `npm start` to visualize the user interface in your browser

## Project status

- The project is work in progress, however the current folders inside the katas folder are ready for anyone to train.

- At the moment, I plan to add katas for the following, more or less in this order:
  - [Windowing](https://reactjs.org/docs/optimizing-performance.html#virtualize-long-lists) - DONE
  - Embedded React
  - [Portals](https://reactjs.org/docs/portals.html) and [Refs](https://reactjs.org/docs/glossary.html#refs)
  - [Render props](https://reactjs.org/docs/render-props.html)
  - DefaultProps and PropTypes
  - React testing

- I don't like to reinvent wheels (my time is limited!), so I try to copy pieces of code from the documentation or other sources rather than creating them from scratch. Of course, wherever credit is due, credit is given.

- The design of some of these katas, admittedly looks like a piece of crap. My excuse for that is that designing something to look nice takes a bit of time, and right now I'd rather spend that time adding new katas and practicing. I didn't create this to practice design skills!

## Generate the CSS file

If for some reason you need to regenerate the CSS file /src/style.css (in principle you shouldn't need to), do the following:

1. Transpile the scss file from the root folder with: `sass src/scss/style.scss src/style-transpiled.css` (you need to have sass installed globally)
2. Then run `grunt watch` also from the root folder (you'll need to have grunt installed globally)

## Issues

If have any trouble, please open an issue in github: [https://github.com/luismartinezs/react-katas](https://github.com/luismartinezs/react-katas)

## Author

I am pretty new to the development world, only started learning a few months ago, so forgive me if the code itself here is not according to best practices, or you find it is not up to professional standards.

Enjoy your path to master React-Fu!

Luis Martínez @ 2019

![Image](./src/images/bruce_lee_vs_chuck_norris.jpg)
