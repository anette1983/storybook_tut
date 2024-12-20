<p align="center">
  <a href="https://www.chromatic.com/">
    <img alt="Chromatic" src="https://avatars2.githubusercontent.com/u/24584319?s=200&v=4" width="60" />
  </a>
</p>

<h1 align="center">
  Chromatic's Intro to Storybook React template
</h1>

This template ships with the main React and Storybook configuration files you'll need to get up and running fast.

## 🚅 Quick start

1.  **Create the application.**

    Use [degit](https://github.com/Rich-Harris/degit) to get this template.

    ```shell
    # Clone the template
    npx degit chromaui/intro-storybook-react-template taskbox
    ```

1.  **Install the dependencies.**

    Navigate into your new site’s directory and install the necessary dependencies.

    ```shell
    # Navigate to the directory
    cd taskbox/

    # Install the dependencies
    yarn
    ```

1.  **Open the source code and start editing!**

    Open the `taskbox` directory in your code editor of choice and building your first component!

1.  **Browse your stories!**

    Run `yarn storybook` to see your component's stories at `http://localhost:6006`

## 🔎 What's inside?

A quick look at the top-level files and directories included with this template.

    .
    ├── .storybook
    ├── node_modules
    ├── public
    ├── src
    ├── .eslintrc.cjs
    ├── .gitignore
    ├── .index.html
    ├── LICENSE
    ├── package.json
    ├── yarn.lock
    ├── vite.config.js
    └── README.md

1.  **`.storybook`**: This directory contains Storybook's [configuration](https://storybook.js.org/docs/react/configure/overview) files.

2.  **`node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages).

3.  **`public`**: This directory will contain the development and production build of the site.

4.  **`src`**: This directory will contain all of the code related to what you will see on your application.

5.  **`.eslintrc.cjs`**: This file is the configuration file for [ESLint](https://eslint.org/), a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.

6.  **`.gitignore`**: This file tells git which files it should not track or maintain during the development process of your project.

7.  **`.index.html`**: This is the HTML page that is served when generating a development or production build.

8.  **`LICENSE`**: The template is licensed under the MIT licence.

9.  **`package.json`**: Standard manifest file for Node.js projects, which typically includes project specific metadata (such as the project's name, the author among other information). It's based on this file that npm will know which packages are necessary to the project.

10. **`yarn.lock`**: This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(Do not change it manually).**

11. **`vite.config.js`**: This is the configuration file for [Vite](https://vitejs.dev/), a build tool that aims to provide a faster and leaner development experience for modern web projects.

12. **`README.md`**: A text file containing useful reference information about the project.

## Contribute

If you encounter an issue with the template, we encourage you to open an issue in this template's repository.

## Learning Storybook

1. Read our introductory tutorial at [Learn Storybook](https://storybook.js.org/tutorials/intro-to-storybook/react/en/get-started/).
2. Learn how to transform your component libraries into design systems in our [Design Systems for Developers](https://storybook.js.org/tutorials/design-systems-for-developers/) tutorial.
3. See our official documentation at [Storybook](https://storybook.js.org/).

To deploy Storybook, we first need to export it as a static web app. This functionality is already built-in to Storybook and pre-configured.

Running yarn build-storybook will output a static Storybook in the storybook-static directory, which can then be deployed to any static site hosting service.

Publish Storybook
This tutorial uses Chromatic, a free publishing service made by the Storybook maintainers. It allows us to deploy and host our Storybook safely and securely in the cloud.

View your Storybook at https://6761ca46f76975b4f875c313-wgrytfmuct.chromatic.com/

Continuous deployment with Chromatic
Now that we've hosted our project in a GitHub repository, we can use a continuous integration (CI) service to deploy our Storybook automatically. GitHub Actions is a free CI service that's built into GitHub that makes automatic publishing easy.
https://6761ca46f76975b4f875c313-wgrytfmuct.chromatic.com/

Visual testing for Storybook
Visual regression tests, also called visual tests, are designed to catch changes in appearance. They work by capturing screenshots of every story and comparing them commit-to-commit to surface changes. It's perfect for verifying graphical elements like layout, color, size, and contrast.

Storybook helps us build components; testing helps us maintain them. This tutorial covers four types of UI testing: manual, accessibility, interaction, and visual regression. You can automate the last three by adding them to a CI as we've just finished setting up, and it helps us ship components without worrying about stowaway bugs. The whole workflow is illustrated below.

https://storybook.js.org/docs/essentials/controls
Storybook Controls gives you a graphical UI to interact with a component's arguments dynamically without needing to code. It creates an addon panel next to your component examples ("stories"), so you can edit them live.

https://storybook.js.org/docs/get-started/install
