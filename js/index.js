function draw() {
  var ctx = document.getElementById('canvas').getContext('2d');
  ctx.font = '48px serif';
  ctx.fillStyle = 'black';
  ctx.fillText('Hello world', 10, 50);
}draw();