$( document ).ready(function() {
    getSemesters();
});

function getSemesters(){
    var sem = [];
    $.ajax({
      type: 'POST',
      url: 'gpa/getSem.php', 
      async: false,
      success: function(data){
          sem = data;
          showSemesters(sem);
      },
      error: function(xhr, status, error) {
        console.log(xhr);
        console.log(status);
        console.log(error);
    }
  });
}

function showSemesters(sem){
  for(var i = 0; i < sem.length; i++){
    showSem(sem[i].title, sem[i].sn);
  }
}
function showSem(title, semNum){
  var ul = document.getElementById("semesters");
  var id = semNum;
  console.log(id);
  var li = document.createElement("li");
  if(title == null){
    title = '';
  }
  li.id = "semester" + semNum;
  li.innerHTML = '<div class="row wrapper">'
              +'<form class="semester">'
            + '<div class="form">'
            +   '<input type="text" placeholder="Semester Title" class="fram" value = "'+title +'">'
            +   '<br>'
            +   '<label>Course Name</label>' 
            +   '<label>Grade </label>'
            +     '<label>Credits</label>' 
            +     '<ul id="wanted">'
            +   '</ul>'
                        +       '<button class="button color bSize" id="addcor'+ id +'" type="button" onclick="newCourse(this.id)">Add Course</button>'
            + '</div>'
            +'</form>'
            +'</div>';
  ul.appendChild(li); 
}