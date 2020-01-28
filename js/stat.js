'use strict';
// заявляем функцию renderStatistics, являющейся методом объекта window:
window.renderStatistics = function (ctx, names, time) {
  // рисуем тень (прямоугольник):
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);
  // рисуем белый прямоугольник:
  ctx.fillStyle = '#FFFFFF';
  ctx.fillRect(100, 10, 420, 270);
  // Пишем вверху тексты:
  ctx.fillStyle = '#000000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура, Вы победили!', 210, 30);
  ctx.fillText('Текущие результаты:', 200, 45);
  // переменная x будет использоваться в циклах отрисовки результатов, в нашем случае это начальная координата X:
  var x = 150;
  // создаем цикл отрисовки результатов:
  for (var i = names.length - 1; i >= 0; i--) {
    // внизу цикл пишет имя игрока:
    ctx.fillText(names[i], x, 250);
    // Заявляем переменную равную высоте гистограммы игроков:
    var heightPlayerHistogram = time[i] * 0.015;
    // рисуем прямоугольник по высоте пропорционален времени игры игроков:
      if (names[i] == 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      } else {
          ctx.fillStyle = 'rgba(0, 0, 255,' + Math.random() + ')';
      }
    ctx.fillRect(x, (230 - heightPlayerHistogram), 40, heightPlayerHistogram);
    // сверху гистограммы пишем результат времени игроков:
    ctx.fillStyle = '#000000';
    ctx.fillText(Math.round(time[i]), x, (200 - heightPlayerHistogram));
    // прибавляем 90 к X, чтобы расстояние между результатами было 50 px (ширина гистограммы 40, 40+50=90)
    x = x + 90;
  }
 }
