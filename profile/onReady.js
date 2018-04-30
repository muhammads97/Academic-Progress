$( document ).ready(function() {
    $.ajax({
  		type: 'POST',
   		url: 'profile/todo/getTodo.php', 
   		async: false,
   		success: function(data){
          addElements(data);
   		},
   		error: function(n, m, r) {
      		//alert("error888");
          console.log(n);
          console.log(m);
          console.log(r);
   		}
	});
});
 function addElements(arr){
    for(var i = 0; i < arr.length; i++){
      var li = document.createElement("li");
      var t = document.createTextNode(arr[i].txt);
      li.appendChild(t);
      document.getElementById("myUL").appendChild(li);
      var span = document.createElement("SPAN");
      var txt = document.createTextNode("\u00D7");
      span.className = "close";
      span.appendChild(txt);
      li.appendChild(span);
      if(arr[i].d == 1){
        li.classList.toggle('checked');
      }
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
    }
}

function logout_click(){
  $.ajax({
      type: 'POST',
      url: 'profile/clear_session.php', 
      async: false,
      success: function(data){
        //console.log(data);
        window.location.href="SIGN IN PAGE.html";
      },
      error: function(n, m, r) {
          //alert("error888");
          console.log(n);
          console.log(m);
          console.log(r);
      }
  });
}