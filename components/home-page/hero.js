import Image from "next/image";

import classes from "./hero.module.css";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/Oskar.jpg"
          alt="An image showing Oskar"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Oskar</h1>
      <p>
        I made this blog as a part of my education program to learn NextJs and
        inclued what I have learned from my frontend program.
      </p>
    </section>
  );
}

export default Hero;
