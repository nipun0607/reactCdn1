let rootEle = document.querySelector("#root");

const heading = React.createElement("h1", null, "Learn web development");

const para1 = React.createElement(
  "p",
  null,
  "Welcome to MDN learning area.This sets of articles aims to guide complete beginners to web development with all that they need to start coding websites."
);

const firstParaContainer = React.createElement("div", null, para1);

const link = React.createElement(
  "a",
  { href: "https://developer.mozilla.org/en-US/" },
  "the rest of MDN"
);

const para2 = React.createElement(
  "p",
  null,
  'The aim of this area of MDN is not to take you from "beginner" to "expert" but to take you from "beginner" to "comfortable".From there,you should be able to start making your way, learning from ',link,
  " and other to immediate to advance resourcesthat assume alot of previous knowledge."
);

const secondParaContainer = React.createElement("div", null, para2);

const para3 = React.createElement(
  "p",
  null,
  "If you are complete beginner,web development can be challenging-we will hold your hand and provide enough detail for you to feel comfortable and learn topics properly.You should feel at home wheather you are student learning web development(on your own or as part for class), a teacher looking for a class materials, a hhobbyist, or someone who just want to understand more about how web techmologies work."
);

const thirdParaContainer = React.createElement("div", null, para3);
const mainContainer = React.createElement(
  "div",
  null,
  heading,
  firstParaContainer,
  secondParaContainer,
  thirdParaContainer
);
ReactDOM.render(mainContainer, rootEle);
