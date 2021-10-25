# Tailwind CSS Boilerplate


Setting up a tailwind css based project needs to install the tailwindcss npm package, postcss and autoprefixer - it also requires to configure a tailwind.config.js as well as postcss.config.js (optional, if you're planning to use postcss) and then configure those files manually.

And finally for building the production code with tree-shaking (removing unused css from your project and keeping only what is required) you need to configure the purge settings in your tailwind configuration. For someone new to tailwind and for others who regularly use tailwind in their projects, these are boring jobs and you have to do it repeatedly for every project (or learn how to do it if someone is just starting with tailwind)

So this boilerplate has all the configuration to save your time from this boring configurtion tasks (and from gogling many things)

Use this boilerplate as the starting point for your Any + **Tailwind CSS** based projects.

### Make sure you have installed NodeJs
Install nodejs from here https://nodejs.org/en/
then install yarn package manager. just hit this in your terminal/command prompt:
```sh
npm install --global yarn
```
also you can continue this process using npm package manager. this build in from nodeJS.  

### Clone this repo
```sh
git clone https://github.com/Abdulkader69/tailwindcss-html-boilerplate.git
cd tailwindcss-html-boilerplate
```

### Install Used packages
```sh
yarn install
OR
npm install
```

### Run Development Server
```sh
yarn dev
OR
npm dev
```

### Build Productions Files
```sh
yarn build
OR
npm build
```

then grab everything from the dist folder

### configure tailwind
There is a `tailwind.config.js` file with `purge` instructions. feel free to customize it according to your need