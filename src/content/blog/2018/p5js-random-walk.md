---
title: 'P5.js Random Walk'
subtitle: 'Learn what it is a Random Walk and how to implement it with P5.js'
date: '2018-02-12'
tags: ['P5.js', 'creative coding', 'tutorial']
published: true
---

After attending the great talk "Con Canvas y a lo loco" by [Carmen Ansio](http://www.carmenansio.com/) that I had the opportunity to attend at Bilbostack conference, I wanted to try that cool library that I had been talking about: [P5.js](https://p5js.org/)

### And what is P5.js?

It is a library based on <strong>Processing</strong> and intended to make the code accessible to artists, students, beginners..., as advertised on its website. One of its many features is the ability to work with <strong>Canvas</strong> objects, as we will see in the example.

### What is a Random walk

A <strong>"random walk" or "random path"</strong> is a path drawn from random steps. [There are even works of art made from these paths](https://www.youtube.com/watch?v=QOkg0fJM5DQ). In the case of my example, I took advantage of the capabilities to generate <strong>points of any color on a canvas</strong> of the P5 library, to generate my random walk, which works as follows:

1. A random number is generated (in this case between 3 and 24), defining the number of points of the <strong>same color</strong> and in the **same direction** that the stroke will contain.
2. **8 possible directions** are defined: (North, Northeast, East, Southeast, South, Southwest, West, Northeast).
3. When changing the color, the initial one is taken into account to generate **random variations** from it.
4. In case a very **light color** is detected, the background of the **canvas** becomes **black**.

<iframe width="1024" height="768" scrolling="no" title="P5js Random Walk Following Mouse position" src="https://codepen.io/jmlweb/embed/preview/wyKxxq?default-tabs=js%2Cresult&amp;height=600&amp;host=https%3A%2F%2Fcodepen.io&amp;slug-hash=wyKxxq" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/jmlweb/pen/wyKxxq'>P5js Random Walk Following Mouse position</a> by José Manuel Lucas
  (<a href='https://codepen.io/jmlweb'>@jmlweb</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
