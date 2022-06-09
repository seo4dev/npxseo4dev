import boxen from "boxen";
import chalk from "chalk";

const boxenOptions = {
  padding: 1,
  width: 54,
  title: "Seo4dev",
  titleAlignment: "center",
  borderStyle: "double",
  borderColor: "#ffb626",
};

const intro = chalk.bold(
  "Hi friend! I'm Ash. frontend web developer with graphic design background, SEO enthusiast, addicted to learning and excited to share everything I learn with you.\n\nFind me on the internet.\n\n"
);

const links = [
  {
    name: chalk.hex("#fff").bgHex("#0f111a")("Website"),
    url: "   https://seo4dev.com",
  },
  {
    name: chalk.hex("#fff").bgHex("#000")("DEV.to"),
    url: "    https://dev.to/seofordev",
  },
  {
    name: chalk.hex("#fff").bgHex("#6e5494")("GitHub"),
    url: "    https://github.com/seo4dev",
  },
  {
    name: chalk.hex("#fff").bgHex("#582be8")("Polywork"),
    url: "  https://polywork.com/seo4dev",
  },
  {
    name: chalk.hex("#fff").bgHex("#1DA1F2")("Twitter"),
    url: "   https://twitter.com/seofordev",
  },
];

const linkList = links.map((link) => `${link.name} ${link.url}`).join("\n");

console.log(boxen(intro + linkList, boxenOptions));
