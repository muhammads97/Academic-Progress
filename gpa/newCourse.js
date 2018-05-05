function newCourse(id){
	id = id.slice(6);
	var sem = document.getElementById("semester"+id);
	var ul = sem.children[0].children[0].children[0].children["wanted"];
	var li = document.createElement('li');
	var n = ul.children.length;
	li.id = "course" + (n + 1);
	li.innerHTML = "<input type='text' placeholder='e.g. Math' class='frame'>"
						 			+"<div class='grades'>"
							 			+"<select class='frame' id='A'>"
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
						 				+"<select class='frame' id='B'>"
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
							 		+"</div>";
	ul.appendChild(li);
}