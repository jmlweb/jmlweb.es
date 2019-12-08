import React from 'react';

import style from './home-intro.module.css';

const HomeIntro = () => (
  <section className={style.wrapper}>
    <h1>Hi! I'm José Manuel Lucas</h1>
    <p>
      I'm a <strong>front-end engineer</strong> from Murcia (Spain), currently
      working at <a href="http//sewan.es">Sewan</a>.
    </p>
    <p>
      I ❤️ to speak and tweet about <strong>modern web development</strong>,
      especially about <strong>React</strong>,{' '}
      <strong>JavaScript Functional Programming</strong>,{' '}
      <strong>Testing</strong> and <strong>UI design</strong>.
    </p>
  </section>
);

export default HomeIntro;
