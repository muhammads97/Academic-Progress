function newSemester() {
	var ul = document.getElementById("semesters");
	var id = ul.children.length + 1;
	var li = document.createElement("li");
	li.id = "semester" + id;
	li.innerHTML = '<div class="row wrapper">'
			   			+'<form class="semester">'
				 		+	'<div class="form">'
				 		+		'<input type="text" placeholder="Semester Title" class="fram" onKeyup = "titleOnChange('+id+', this.value)">'
				 		+		'<br>'
						+	 	'<label>Course Name</label>' 
						+	 	'<label>Grade </label>'
						+ 		'<label>Credits</label>' 
						+ 		'<ul id="wanted">'
						+		'</ul>'
                        +   		'<button class="button color bSize" id="addcor'+ id +'" type="button" onclick="newCourse(this.id)">Add Course</button>'
						+	'</div>'
						+'</form>'
						+'</div>';
	ul.appendChild(li); 
	addSemester();
}

function addSemester(){
	var ul = document.getElementById("semesters");
	var id = ul.children.length;
	$.ajax({
  		type: 'POST',
   		url: 'gpa/addSem.php', 
   		async: false,
   		data: {SemesterNumber : id},
   		success: function(data){
      		console.log(data);
   		},
   		error: function(xhr, status, error) {
  			console.log(xhr);
  			console.log(status);
  			console.log(error);
		}
	});
}

function titleOnChange(id, input){
	console.log("ss");
	$.ajax({
  		type: 'POST',
   		url: 'gpa/updateSem.php', 
   		async: false,
   		data: {SemesterNumber : id, title : input},
   		success: function(data){
      		console.log(data);
   		},
   		error: function(xhr, status, error) {
  			console.log(xhr);
  			console.log(status);
  			console.log(error);
		}
	});
}