import Blockchain from "assets/talk-to-us/blockchain.png";
import Brain from "assets/talk-to-us/brain.png";
import Wrench from "assets/talk-to-us/wrench.png";
import NoCode from "assets/talk-to-us/no-code.png";
import CustomCode from "assets/talk-to-us/custom-code.png";
import QuestionMark from "assets/talk-to-us/question-mark.png";

export const projectTypes = [
  {
    id: 1,
    title: "Blockchain",
    content:
      "Create secure and transparent systems for storing and transferring information or value",
    imageUrl: Blockchain.src,
  },
  {
    id: 2,
    title: "AI & ML",
    content:
      "Create systems that can learn from data, make predictions, and make decisions based on that data",
    imageUrl: Brain.src,
  },
  {
    id: 3,
    title: "Low code",
    content:
      "Create scalable digital products with minimal need of coding. Perfect for mobile apps, web platforms, and complex automations",
    imageUrl: Wrench.src,
  },
  {
    id: 4,
    title: "No code",
    content:
      "Create a wide variety of simple products without coding. Ideal for prototyping, MVPs, and landing pages",
    imageUrl: NoCode.src,
  },
  {
    id: 5,
    title: "Custom code",
    content:
      "Create any digital product or solution you can think of. Great for a wide range of products",
    imageUrl: CustomCode.src,
  },
  {
    id: 6,
    title: "I can't decide",
    content: "No worries, we can help you to choose the right one",
    imageUrl: QuestionMark.src,
  },
];
