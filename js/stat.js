'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var HISTOGRAM_X = (700 - CLOUD_WIDTH) / 2;
var HISTOGRAM_Y = 240;
var GAP = 50;
var FONT_GAP = 15;
var BAR_WIDTH = 40;
var MAX_BAR_HEIGHT = 150;
var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

var randomInterval = function (min, max) {
  return Math.random() * (max - min) + min;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, 110, 20, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, 100, 10, '#fff');

  ctx.font = '16px PT Mono';
  ctx.fillStyle = '#000';
  ctx.fillText('Ура вы победили!', 240, 40);
  ctx.fillText('Список результатов:', 225, 60);

  var maxTime = getMaxElement(times);
  for (var i = 0; i < players.length; i++) {
    var barX = HISTOGRAM_X + 2 * GAP * i;
    var barHeight = MAX_BAR_HEIGHT * times[i] / maxTime;
    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'rgba(0, 0, 255,' + randomInterval(0.2, 0.8) + ')';
    }
    ctx.fillRect(barX, HISTOGRAM_Y - barHeight, BAR_WIDTH, barHeight);

    ctx.fillStyle = '#000';
    ctx.fillText(players[i], barX, HISTOGRAM_Y + FONT_GAP);
    ctx.fillText(Math.round(times[i]), barX, HISTOGRAM_Y - 5 - barHeight);
  }
};
