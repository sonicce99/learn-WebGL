// DrawRectangle.js (written by Matsuda)
function main() {
  // <canvas> 요소 로딩
  var canvas = document.getElementById("example"); // 'example' 는 HTML 의 canvas id
  // canvas 요소는 null 이 될 수 없다. Error handling 필요
  if (!canvas) {
    console.log("Failed to retrieve the <canvas> element");
    return;
  }

  // 2D graphic rendering "context"
  var ctx = canvas.getContext("2d"); // 3D 일 경우, '3d' 로 변경

  // 파랑 사각형 그리기
  ctx.fillStyle = "rgba(0, 0, 255, 1.0)"; // blue
  ctx.fillRect(10, 10, 30, 150); // 좌표
}
