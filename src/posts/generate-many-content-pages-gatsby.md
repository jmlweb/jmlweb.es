---
title: 'Generate many content pages with Gatsby'
date: '2019-11-28'
---

[Gatsby](https://www.gatsbyjs.org/) is a static site generator based on React with a lot of popularity nowadays.

In fact, the React documentation site is built using this technology.

In this tutorial we'll learn how to build pages with different content, using also a custom template.

## Preparing our content directories

Using `gatsby-source-filesystem` plugin, we'll add the different content types. For each one, we define the `path`, and the `name`.

```css
@import url('https://use.typekit.net/ocs7ygv.css');

body {
  font-feature-settings: 'smcp';
  font-family: var(--font-default);
  background-image: linear-gradient(var(--color-white), var(--color-ground));
  min-height: 100vh;
}

a {
  color: var(--color-primary);
  text-decoration: none;
}
```

```js
module.exports = {
  // siteMetadata...
  plugins: {
    // ...
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/talks`,
        name: 'talks',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/posts`,
        name: 'posts',
      },
    },
    //...
  }
}
```

```jsx
import React, { useState } from 'react';

const MyComponent = () => {
  const [counter, setCounter] = useState(0);
  const less = setCounter(prevState => prevState - 1);
  const more = setCounter(prevState => prevState + 1);
  return (
    <div>
      <p>Current value: {counter}</p>
      <button type="button" onClick={less}>
        Less
      </button>
      <button type="button" onClick={more}>
        More
      </button>
    </div>
  );
};
```
