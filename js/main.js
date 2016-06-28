(function($){
  $.fn.type = function(string, callback) {
    var stringArr = string.split("");
    var delay = (Math.random() * 400);

    function appendLetter(el, char) {
      el.append(char);
    }

    for( i = 0; i < stringArr.length; i++ ) {
      setTimeout(appendLetter, delay, this, stringArr[i]);
      delay += (Math.random() * 150);
    }
    setTimeout(callback, delay);
    return this;
  };

  $.fn.backspace = function(n, callback) {
    var delay = (Math.random() * 400);

    function removeLetter(el) {
      var content = el.text();
      var newContent = content.slice(0, -1);
      el.text(newContent);
    }

    for( i = 0; i <= n; i ++ ) {
      setTimeout(removeLetter, delay, this);
      delay += (Math.random() * 150);
    }
    setTimeout(callback, delay);
    return this;
  };
}(jQuery));

$(document).ready(function(){
  // $("#typing").type("Typing?");
  // $("#backspace").backspace(5);
  $("p").type("Oohhh look at me, I'm javascript typing in a paragraph. I don't make mestakes....", function(){
    $("p").backspace(10, function(){
      $("p").type("istakes...");
    });
  });
});
