# Trivia game

You have been assigned a new trivia game prototype. Your task is to build a fully functional experience that meets the requirements below.

You received a partial, rough design. It is missing some layouts, features, and design details. As you develop the game, add those missing aspects in your prototype by extending the theme in the provided designs. You may also augment your own features or break away from the theme entirely reskinning the experience if you like. Consider features not included in the design such as a timer.

## Guideline for completing the exercise

- Sample questions have been provided for you, but feel free to create your own. Your final set of questions must meet the following criteria:
  - Five questions minimum
  - At least one question should have only a single answer
  - At least one question should have multiple answers
  - Other question formats are welcome but not required
  - Focus your browser and device compatibility solely on desktop Chrome and the Chrome mobile emulator. Use the Chrome emulator to test mobile device compatibility. Physical mobile device testing is not required.
  - It should be responsive and accessible.
  - You may edit any file in the project, and add any assets you require.
  - You may look up anything you like.
  - Any of the following languages, frameworks and packages are permitted but are not required.
    - JavaScript / TypeScript
    - React
    - CSS / Sass
    - CSS in JS
      - [Emotion](https://emotion.sh/docs/introduction)
        - To use the [CSS prop](https://emotion.sh/docs/css-prop#jsx-pragma) make sure to add `/** @jsxImportSource @emotion/react */` to the top of your file.
      - [Styled Components](https://styled-components.com/)
      - [ThemeUI](https://theme-ui.com/)
    - Redux
    - React Router

## Designs

JPEG images for the game are included in this repo. This Figma file is also available for you to reference as well.

To import the file in Figma, download the [Trivia-game-Figma-design.fig](https://github.com/indeed-de-exercise/figma/raw/main/Trivia-game-Figma-design.fig) file. Open Figma (website or app) and use the Import file button to import the design.

## The user experience

- Questions:
  - Each question screen is presented one at a time.
    - Design: [Question.png](./Question/png) or Figma Question board.
  - When the user submits an answer, they are presented with an indication if they were correct or wrong.
    - Design: [Correct-Answer.png](./Correct-Answer.png) or Figma Correct Answer board.
- Results:
  - After the final question, the user is sent to the results screen. The screen includes the current score, high score and the date they achieved the high score. Messaging on the screen should change based on the user’s score.
    - Design: [Final-Score.png](./Final-Sorce.png) or Figma Final Score board.
