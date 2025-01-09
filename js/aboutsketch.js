let s = (p) => {

  let shapes = []; // 用于存储多个形状的数组
  let numShapes = 10; // 形状的数量

  p.setup = function () {
    console.log('window height: ', window.innerHeight)
    const height = window.innerHeight;

    p.createCanvas(p.windowWidth, height);
    p.noStroke();
    p.frameRate(60);

    // 创建多个形状并将其加入数组
    for (let i = 0; i < numShapes; i++) {
      let shape = {
        size: 200, // 形状的大小
        xpos: p.random(p.width), // 形状的起始 x 位置
        ypos: p.random(p.height), // 形状的起始 y 位置
        xspeed: p.random(1, 2), // 形状的水平速度
        yspeed: p.random(1, 1), // 形状的垂直速度
        xdirection: p.random() > 0.5 ? 1 : -1, // 左或右
        ydirection: p.random() > 0.5 ? 1 : -1 // 上或下
      };
      shapes.push(shape);
    }
  }

  p.draw = function () {
    p.background(255, 255, 0);

    // 遍历并更新每个形状的位置
    for (let i = 0; i < shapes.length; i++) {
      let shape = shapes[i];

      // 添加一些较小范围的随机变化到速度，使其减少抖动
      shape.xspeed += p.random(-0.05, 0.05);
      shape.yspeed += p.random(-0.05, 0.05);

      // 更新位置
      shape.xpos += shape.xspeed * shape.xdirection;
      shape.ypos += shape.yspeed * shape.ydirection;

      // 检测是否超出屏幕边界，超出则反转方向
      if (shape.xpos > p.width - shape.size || shape.xpos < 0) {
        shape.xdirection *= -1;
      }
      if (shape.ypos > p.height - shape.size || shape.ypos < 0) {
        shape.ydirection *= -1;
      }

      // 绘制形状
      p.stroke(0, 0, 255); // 边线颜色
      p.fill(255,255, 0); // 填充颜色
      p.strokeWeight(20); // 边线宽度
      p.rect(shape.xpos, shape.ypos, shape.size, shape.size, 80); // 绘制圆角矩形
    }
  }

}

let myp5 = new p5(s, 'defaultCanvas0');
