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
		$('#prev_img').attr('src','images\\' + img);
	}
}