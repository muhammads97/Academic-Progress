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
    getCourses(sem[i].sn);
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

function getCourses(semNum){
  var courses = [];
    $.ajax({
      type: 'POST',
      url: 'gpa/getCourses.php', 
      async: false,
      data: {semNum : semNum},
      success: function(data){
          courses = data;
          console.log(courses);
          showCourses(semNum, courses);
      },
      error: function(xhr, status, error) {
        console.log(xhr);
        console.log(status);
        console.log(error);
    }
  });
}
function showCourses(semNum, courses){
  var li = document.getElementById("semester" + semNum);
  var ul = li.children[0].children[0].children[0].children["wanted"];
  for(var i = 0; i < courses.length; i++){
    createLiCourse(courses[i].cn, semNum, courses[i].title, courses[i].grade, courses[i].credit, ul);
  }
}

function createLiCourse(courseNum, semNum, title, grade, credit, ul){
  if(title == null){
    title = "";
  }
  var li = document.createElement('li');
  li.id = "course" + courseNum;
  li.innerHTML = "<input type='text' placeholder='e.g. Math' class='frame' onKeyUp = 'titleOnKeyUp("+semNum+", "+courseNum+", this)' value = '"+title+"'>"
                  +"<div class='grades'>"
                    +"<select class='frame' id='A' onChange = 'gradeOnChange("+semNum+", "+courseNum+", this)' value = '"+grade+"'>"
                      +"<option value='95'>A+</option>"
                      +"<option value='93'>A</option>"
                      +"<option value='90'>A-</option>"
                      +"<option value='87'>B+</option>"
                      +"<option value='83'>B</option>"
                      +"<option value='80'>B-</option>"
                      +"<option value='77'>C+</option>"
                      +"<option value='73'>C</option>"
                      +"<option value='70'>C-</option>"
                      +"<option value='67'>D+</option>"
                      +"<option value='63'>D</option>"
                      +"<option value='60'>D-</option>"
                      +"<option value='0'>F</option>"
                    +"</select>"
                  +"</div> "
                  +"<div class='credit'>"
                    +"<select class='frame' id='B' onChange = 'creditOnChange("+semNum+", "+courseNum+", this)' value = '"+credit+"'>"
                      +"<option value='1'>1</option>"
                      +"<option value='1.5'>1.5</option>"
                      +"<option value='2'>2</option>"
                      +"<option value='2.5'>2.5</option>"
                      +"<option value='3'>3</option>"
                      +"<option value='3.5'>3.5</option>"
                      +"<option value='4'>4</option>"
                      +"<option value='4.5'>4.5</option>"
                      +"<option value='5'>5</option>"
                      +"<option value='5.5'>5.5</option>"
                    +"</select>"
                  +"</div><span class='close'>×</span>";
  ul.appendChild(li);
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
function settings_click(){
  window.location.href="setting.html";
}
function profile_click(){
  window.location.href="home.html";
}
function gpa_click(){
  window.location.href="gpa.html";
}