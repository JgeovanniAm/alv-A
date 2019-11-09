import React from 'react';
import Nav from '../components/nav/';
import logo from '../img/x.jpg';
import Draw from './canvas';
import './styles.scss';

function drawCanvas(canvas) {
  const ctx = canvas.getContext('2d');
  const left = 0;
  const right = 0;
  canvas.height = 80;
  canvas.width = 55;
  const numbers = [];
  const arrayNum = [];
  const arrayElement = [];

  for (let num = 1; num <= 80; num++) {
    numbers.push(num);
  }

  const totalNumbers = numbers.filter(numero => numero % 2 === 0);
  totalNumbers.forEach((x) => {
    arrayNum.push((Math.random() * 0.5) + 0.05);
    arrayElement.push(new Draw(0, x, 40, 1, ctx, left, right));
  });

  function IteracionDraw() {
    requestAnimationFrame(IteracionDraw);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    arrayElement.forEach(item => item.animation());
  }

  function lineAnimation() {
    setInterval(() => {
      const max = Math.floor((Math.random() * (20 - 10)) + 10);
      arrayElement.forEach((items, index) => {
        const item = items;
        if (max >= item.w) {
          item.left = 0;
          item.right = arrayNum[index];
        } else if (item.w >= 35) {
          item.right = 0;
          item.left = arrayNum[index];
        }
      });
    }, 500);
  }
  IteracionDraw();
  lineAnimation();
}

export default () => (
  <section className="header">
    <canvas className="canvas" ref={(e) => {
      if (e) drawCanvas(e)
    }} />
    <canvas className="canvas-second" ref={(e) => {
      if (e) drawCanvas(e)
    }} />
    <div className="header__wrapper-jpg">
      <img src={logo} alt="logo" />
    </div>
    <h1 className="header__title">ALV-A</h1>
    <Nav />
  </section>
)