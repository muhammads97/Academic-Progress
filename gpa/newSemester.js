function newSemester() {
	var ul = document.getElementById("semesters");
	var id = ul.children.length + 1;
	var li = document.createElement("li");
	li.id = "semester" + id;
	li.innerHTML = '<div class="row wrapper">'
			   			+'<form class="semester">'
				 		+	'<div class="form">'
				 		+		'<input type="text" placeholder="Semester Title" class="fram">'
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
}