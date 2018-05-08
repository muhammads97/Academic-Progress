function newCourse(id){
	id = id.slice(6);
	var sem = document.getElementById("semester"+id);
	console.log(sem);
	var ul = sem.children[0].children[0].children[0].children["wanted"];
	var li = document.createElement('li');
	var n = ul.children.length;
	li.id = "course" + (n + 1);
	li.innerHTML = "<input type='text' placeholder='e.g. Math' class='frame' onKeyUp = 'titleOnKeyUp(id, (n+1), this)'>"
						 			+"<div class='grades'>"
							 			+"<select class='frame' id='A' onChange = 'gradeOnChange(id, (n+1), this)'>"
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
						 				+"<select class='frame' id='B' onChange = 'creditOnChange(id, (n+1), this)'>"
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
	console.log(li);
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