function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    document.getElementById("myUL").appendChild(li);
    document.getElementById("myInput").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
    li.onclick = function() {
      this.classList.toggle('checked');
      var txt = this.textContent;
      txt = txt.slice(0, txt.length-1);
      toggle_todoDone(txt);
    }
    span.onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
      var txt = div.textContent;
      txt = txt.slice(0, txt.length-1);
      removeTodo(txt);
    }
    store_newElement(inputValue);
  }
}

function store_newElement(txt){
  var flag = false;
  $.ajax({
      type: 'POST',
      url: 'profile/todo/addNewTodo.php', 
      async: false,
      data: {t : txt},
      success: function(data){
          flag = data;
      },
      error: function() {
          alert("error");
      }
  });
  return flag;
}

function removeTodo(txt){
  var flag = false;
  $.ajax({
      type: 'POST',
      url: 'profile/todo/removeFromTodo.php', 
      async: false,
      data: {t : txt},
      success: function(data){
          flag = data;
      },
      error: function() {
          alert("error");
      }
  });
  return flag;
}

function toggle_todoDone(txt){
  var flag = false;
  $.ajax({
      type: 'POST',
      url: 'profile/todo/updateTodo.php', 
      async: false,
      data: {t : txt},
      success: function(data){
          flag = data;
      },
      error: function() {
          alert("error");
      }
  });
  return flag;
}