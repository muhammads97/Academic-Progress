$( document ).ready(function() {
    getSemesters();
    loadPic();
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
    semGPA("semester" + sem[i].sn);
  }
  calcGpaTotal();
}
function showSem(title, semNum){
  var ul = document.getElementById("semesters");
  var id = semNum;
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
                        +       '<button class="button color bSize addcor" id="addcor'+ id +'" type="button" onclick="newCourse(this.id)">Add Course</button>'
            + '</div>'
            +'</form>'
            +'</div>';
  ul.appendChild(li); 
}

function loadPic(){
  var session = {};
  $.ajax({
      type: 'POST',
      url: 'registeration\\get_session.php', 
      async: false,
      success: function(data){
        data = JSON.parse(data);
        session = data;
      },
      error: function() {
          alert("error");
      }
  });
  if(session.pp){
    var img = session.id + ".jpg";
    $('#profile').attr('src','images\\' + img);
  }
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
                      +"<option value='4.0'>A+</option>"
                      +"<option value='3.7'>A</option>"
                      +"<option value='3.3'>A-</option>"
                      +"<option value='3.0'>B+</option>"
                      +"<option value='2.7'>B</option>"
                      +"<option value='2.3'>B-</option>"
                      +"<option value='2.0'>C+</option>"
                      +"<option value='1.7'>C</option>"
                      +"<option value='1.3'>C-</option>"
                      +"<option value='1.0'>D+</option>"
                      +"<option value='0.7'>D</option>"
                      +"<option value='0.3'>D-</option>"
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
                  +"</div><span class='close' onClick = 'removeCourse("+semNum+", "+courseNum+")'>×</span>";
  li.children[1].children[0].value = grade;
  li.children[2].children[0].value = credit;
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

function semGPA(id){
  var li = document.getElementById(id);
  
  var lis = li.children[0].children[0].children[0].children["wanted"].children;

  var semGpa = 0;
  for (var i = 0; i < lis.length; i++){
    var credit = lis[i].children[2].children["B"].value;
    var grade = lis[i].children[1].children["A"].value;
    var courseGPA = credit * grade;
    semGpa+= courseGPA;
  }
  semGpa = semGpa/lis.length;
  var semNum = id.slice(8);
  var sem = "semester " + semNum;
  if(lis.length == 0) semGpa = 0;
  var res = document.createElement("li");
  res.innerHTML = "<div class=''>"+sem+"</div>" 
                 + "<div class=''>"+semGpa+"</div>";
  var ul = document.getElementById("gpa");
  ul.appendChild(res);
}

function calcGpaTotal(){
  var lis = document.getElementById("gpa").children;
  var total = 0;
  for(var i = 1; i < lis.length; i++){
    var div = lis[i].children[1];
    var x = div.textContent;
    var val = parseFloat(x);
    total+=val;
  }
  total = total/(lis.length - 1);
  var div = document.getElementById("cum");
  div.innerHTML = total;
}