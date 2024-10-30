import "./home.css";
import { cleanPage } from "../../utils/cleanPage";

export const home = () => {
  const main = document.querySelector("main");
  cleanPage(main);
  main.innerHTML = `
    <section class="home">
    <p>Hey, I'm</p>
    <h1>Erik Portillo</h1>
    <p>I'm Erik Portillo, a software engineer and a student in a higher-level Web Application Development (DAW) program, which I've been studying for two months. I live in Oropesa del Mar and balance my studies with work. I'm passionate about creating digital projects that live on the internet, whether they're websites, applications, or anything in between. I've been freelancing for a year while studying, which has allowed me to gain valuable experience across various fields through my projects and work.</p>
    <a href="mailto:peterparker@gmail.com">Say hi →</a>
    </section> `;
};
