function validate_img(file){
	if(file.type.split("/")[0] != "image"){
		alert("please choose a valid images");
		return false;
	}
	return true;
}

function post(form){
	$.ajax({
  		type: 'POST',
   		url: 'registeration\\img_upload.php', 
   		async: false,
   		data: form,
   		cache: false,
		contentType: false,
		processData: false,
   		success: function(data){
   			console.log(data);
      		if(data[0] && data[1]){
      			window.location.href="home.html";
      		} else {
      			alert("error occured please try again.")
      		}
   		},
   		error: function(xhr, status, error) {
  			console.log(xhr);
  			console.log(status);
  			console.log(error);
		}
	});
}
function on_change_img () {
	var file = document.getElementById("image").files;
	if(file.length > 0){
		file = file[0];
	} else {
		return;
	}
	var imagefile = file.type;
	var match= ["image/jpeg","image/png","image/jpg"];
	if(!((imagefile==match[0]) || (imagefile==match[1]) || (imagefile==match[2]))){
		$('#prev_img').attr('src','images\\avatar.png');
		return false;
	} else {
		//post_img(file);
		var reader = new FileReader();
		reader.onload = imageIsLoaded;
		reader.readAsDataURL(file);
	}
}

function imageIsLoaded(e) {
	//$("#file").css("color","green");
	//$('#image_preview').css("display", "block");
	$('#prev_img').attr('src', e.target.result);
	//$('#previewing').attr('width', '250px');
	//$('#previewing').attr('height', '230px');
}

function on_click_form(){
	var img = document.getElementById("image").files;
	var img_set = false;
	if(img.length > 0){
		img = img[0];
		img_set = true;
	}
	var sfield = document.getElementById("sf").value;
	if(!validate_sf(sfield)){
		alert("please enter your study field");
		return;
	}
	var data = new FormData();
	if(img_set){
		if(validate_img(img)){
			data.append('file', img, img.name);
		} else {
			return;
		}
	}
	data.append('text', sfield);
	data.append('img_set', img_set);
	post(data);
}

function validate_sf(text){
	if(text.length > 0){
		return true;
	}
	return false;
}