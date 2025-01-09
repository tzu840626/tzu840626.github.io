let inconsolata;
let bevan;
let currentFont; // 用于存储当前字体的变量
let frameCountThreshold = 60; // 每隔60帧切换一次字体
let currentFrame = 0; // 当前帧数计数器
let textColor; // 文字颜色
let textContent = "coming soon"; // 文字内容

function preload() {
  inconsolata = loadFont("font/editundo.ttf");
  bevan = loadFont("font/fifte___.ttf");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(200);
  currentFont = inconsolata; // 初始使用 inconsolata 字体
  textFont(currentFont);
  textColor = color(255); // 初始文字颜色为白色
}

function draw() {
  background(0, 29, 255);

  let points = currentFont.textToPoints(
    textContent,
    width / 2 - textWidth(textContent) / 2,
    height / 2,
    200,
    { sampleFactor: 0.10 }
  );

  points.forEach((p, i) => {
    fill('yellow');
    rect(p.x, p.y, i / 100 + frameCount / 10);
  });
  
  currentFrame++;
  if (currentFrame >= frameCountThreshold) {
    toggleFont(); // 到达指定帧数后切换字体
    currentFrame = 0; // 重置计数器
  }
}

function toggleFont() {
  if (currentFont === inconsolata) {
    currentFont = bevan; // 切换到 bevan 字体
    textContent = "coming soon"; // 切换文字内容
    textColor = color(255, 0, 0); // 切换文字颜色为红色
  } else {
    currentFont = inconsolata; // 切换到 inconsolata 字体
    textContent = "coming soon"; // 切换文字内容
    textColor = color(255); // 切换文字颜色为白色
  }
  textFont(currentFont);
}
