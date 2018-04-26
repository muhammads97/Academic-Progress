function login(email, pw){
	var res = [];
	$.ajax({
  		type: 'POST',
   		url: 'login\\login.php', 
   		async: false,
   		data: {e : email, p: pw},
   		success: function(data){
      		res = data;
   		},
   		error: function() {
      		alert("error");
   		}
	});
	return res;
}

function click_login(){
	var e = document.getElementById("e").value;
	var p = document.getElementById("p").value;
	var r = login(e, p);
	if(r[0] == false){
		alert("this email doesn't exist");
	} else {
		if (r[1] == false){
			alert("Wrong password");
		} else {
			window.location.href="PROFILE.html";
		}
	}
}