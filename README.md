This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# React Katas

As I am trying to learn the [advanced aspects of React](https://reactjs.org/docs/accessibility.html), I feel that reading the documentation isn't enough, and I need some environment where to easily practice these skills. I think that a good way to do that is to have some kind of setup where I can directly practice a specific aspect that I want to learn, without worring about anything else.

So I started creating this project inspired by the awesome [JavaScript 30](https://javascript30.com/) challenge.

Each folder contains a "kata" to practice a specific technique of React. The title of the folder (inside the src folder) will tell you what skill is to be trained. Inside each of these folders, there are two folders: START and FINISH.

The goal is to change the code of the files inside the START folder (or a copy of it) to end with something resembling the code inside the FINISH folder. So the files in the FINISH folder are also something that you can look at for cheating :)

Inside the README.md file of each kata you will find more specific information, instructions and a step-by-step solution.

Enjoy your path to master React-Fu!

![Image](./src/images/bruceLee.jpg)

## Setup:

1. The first time you work on these, run `npm install` in the console to download all the dependencies
2. In the file /src/index.js, change line 4 according to what you're working on

## Generate the CSS file

If for some reason you need to regenerate the CSS file /src/style.css (in principle you shouldn't need to), do the following:

1. Transpile the scss file from the root folder with: `sass src/scss/style.scss src/style-transpiled.css` (you need to have sass installed globally)
1. Then run `grunt watch` also from the root folder (you'll need to have grunt installed globally)

## Issues

If have any trouble, please open an issue in github: [https://github.com/luismartinezs/react-katas](https://github.com/luismartinezs/react-katas)

## Author

I am pretty new to the development world, only started learning a few months ago, so forgive me if the code itself here is not according to best practices, or you find it is not professional code.

Luis Martínez @ 2019