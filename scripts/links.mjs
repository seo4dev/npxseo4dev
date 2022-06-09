#!/usr/bin/env node

import boxen from "boxen";
import chalk from "chalk";
import asciify from "asciify-image";


const boxenOptions = {
  padding: 1,
  width: 54,
  title: "Seo4dev",
  titleAlignment: "center",
  borderStyle: "double",
  borderColor: "#DC143C",
};

const intro = chalk.bold(
  "Hi friend! I'm Ash. frontend web developer with graphic design background, SEO enthusiast, addicted to learning and excited to share everything I learn with you.\n\nYou can find me on following links:\n\n"
);

const links = [
  {
    name: chalk.hex("#fff").bgHex("#DC143C")("Website"),
    url: "   https://seo4dev.com",
  },
  {
    name: chalk.hex("#fff").bgHex("#1DA1F2")("Twitter"),
    url: "   https://twitter.com/seofordev",
  },
  {
    name: chalk.hex("#fff").bgHex("#6e5494")("GitHub"),
    url: "    https://github.com/seo4dev",
  },
  {
    name: chalk.hex("#fff").bgHex("#4267B2")("Facebook"),
    url: "   https://www.facebook.com/Seo4Dev/",
  },
  {
    name: chalk.hex("#fff").bgHex("#000")("DEV.to"),
    url: "    https://dev.to/seofordev",
  },
  {
    name: chalk.hex("#fff").bgHex("#582be8")("Polywork"),
    url: "  https://polywork.com/seo4dev",
  },
];

const linkList = links.map((link) => `${link.name} ${link.url}`).join("\n");

console.log(boxen(intro + linkList, boxenOptions));

var options = {
  fit: "box",
  width: 25,
  height: 25,
};

asciify("./seo4dev.png", options)
  .then(function (asciified) {
    // Print asciified image to console
    console.log(asciified);
  })
  .catch(function (err) {
    // Print error to console
    console.error(err);
  });
