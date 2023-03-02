// see types of prompts:
// https://github.com/enquirer/enquirer/tree/master/examples
//
module.exports = [
  {
    type: "input",
    name: "name",
    message: "What's the name of your package?"
  },
  {
    type: "input",
    name: "message",
    message: "What's your message?"
  }
];