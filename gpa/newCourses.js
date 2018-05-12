function newCourse(id){
	id = id.slice(6);
	var sem = document.getElementById("semester"+id);
	console.log(sem);
	var ul = sem.children[0].children[0].children[0].children["wanted"];
	var li = document.createElement('li');
	var n = ul.children.length;
	li.id = "course" + (n + 1);
	console.log(n+1);
	li.innerHTML = "<input type='text' placeholder='e.g. Math' class='frame' onKeyUp = 'titleOnKeyUp("+id+", "+(n+1)+", this)'>"
						 			+"<div class='grades'>"
							 			+"<select class='frame' id='A' onChange = 'gradeOnChange("+id+", "+(n+1)+", this)'>"
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
						 				+"<select class='frame' id='B' onChange = 'creditOnChange("+id+", "+(n+1)+", this)'>"
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
							 		+"</div><span class='close' onClick = 'removeCourse("+id+", "+(n+1)+")'>×</span>";
	li.children[1].children[0].value = '4.0';
  li.children[2].children[0].value = '1';
	ul.appendChild(li);
	addCourse(id, (n+1));
}
function addCourse(semNumber, courseNum) {
	$.ajax({
  		type: 'POST',
   		url: 'gpa/addCourse.php', 
   		async: false,
   		data: {SemesterNumber : semNumber, courseNumber: courseNum},
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
function titleOnKeyUp(semesterNumber, courseNumber, input){
	var t = input.value;
	$.ajax({
  		type: 'POST',
   		url: 'gpa/changeTitle.php', 
   		async: false,
   		data: {SemesterNumber : semesterNumber, courseNumber: courseNumber, title: t},
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
function gradeOnChange(semesterNumber, courseNumber, input){
	var t = input.value;
	$.ajax({
  		type: 'POST',
   		url: 'gpa/changeGrade.php', 
   		async: false,
   		data: {SemesterNumber : semesterNumber, courseNumber: courseNumber, grade: t},
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
function creditOnChange(semesterNumber, courseNumber, input){
	var t = input.value;
	$.ajax({
  		type: 'POST',
   		url: 'gpa/changeCredit.php', 
   		async: false,
   		data: {SemesterNumber : semesterNumber, courseNumber: courseNumber, credit: t},
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

function removeCourse(semesterNumber, courseNumber){
	var sem = document.getElementById("semester"+semesterNumber);
	var ul = sem.children[0].children[0].children[0].children["wanted"];
	$.ajax({
  		type: 'POST',
   		url: 'gpa/removeCourse.php', 
   		async: false,
   		data: {SemesterNumber : semesterNumber, courseNumber: courseNumber},
   		success: function(data){
      		var id = "course" + courseNumber;
      		ul.removeChild(ul.children[id]);
   		},
   		error: function(xhr, status, error) {
  			console.log(xhr);
  			console.log(status);
  			console.log(error);
		}
	});
}