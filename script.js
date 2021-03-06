function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function increaseDecrease() {
  var squareLeft = $(".left");
  var squareRight = $(".right");
  var squareCenter = $(".center");
  var counter = $("span");
  var i = 0;

  squareLeft.click(function() {
    counter.html(++i);
    squareCenter.css("background-color", getRandomColor());
  });

  squareRight.click(function() {
    counter.html(--i);
    squareCenter.css("background-color", getRandomColor());
  })
}

increaseDecrease();
