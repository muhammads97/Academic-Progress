function name_v(name){
	if(name.length < 2){
		return false;
	}
	var re = /[^A-Za-z ]/;
	return !(re.test(name));
}

function email_v(email){
	if(email.length < 5) return false;
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function password_v(pw){
	if(pw.length < 6) return false;
	return true;
}

function birthdate_v(bd){
	var arr = bd.split("-");
	if(isNaN(bd[0]) || isNaN(bd[1]) || isNaN(bd[2])){
		return false;
	}
	if(parseInt(arr[0]) > 2004){
		return false;
	}
	return true;
}
function country_v(country){
	if(country == 0){
		return false;
	}
	return true;
}

function email_unique(email){
	var flag = false;
	$.ajax({
  		type: 'POST',
   		url: 'registeration\\email_validation.php', 
   		async: false,
   		data: {e : email},
   		success: function(data){
      		flag = data.res;
   		},
   		error: function() {
      		alert("error");
   		}
	});
	return flag;
}

function fn_keyup(){
	var t = document.getElementById("fname").value;
	if(!name_v(t)){
		document.getElementById("error1").style.visibility = "visible";
		document.getElementById("fname").style.borderColor = "red";
	} else {
		document.getElementById("error1").style.visibility = "hidden";
		document.getElementById("fname").style.borderColor = "#dbe2e8";
	}
}

function surn_keyup(){
	var t = document.getElementById("surname").value;
	if(!name_v(t)){
		document.getElementById("error2").style.visibility = "visible";
		document.getElementById("surname").style.borderColor = "red";
	} else {
		document.getElementById("error2").style.visibility = "hidden";
		document.getElementById("surname").style.borderColor = "#dbe2e8";
	}
}

function email_keyup(){
	var t = document.getElementById("email").value;
	if(!email_v(t)){
		document.getElementById("error3").style.visibility = "visible";
		document.getElementById("email").style.borderColor = "red";
	} else {
		document.getElementById("error3").style.visibility = "hidden";
		document.getElementById("email").style.borderColor = "#dbe2e8";
	}
}

function pw_keyup(){
	var t = document.getElementById("pw").value;
	if(!password_v(t)){
		document.getElementById("error4").style.visibility = "visible";
		document.getElementById("pw").style.borderColor = "red";
	} else {
		document.getElementById("error4").style.visibility = "hidden";
		document.getElementById("pw").style.borderColor = "#dbe2e8";
	}
}

function bd_onchange(){
	var d = document.getElementById("bd").value;
	if(!birthdate_v(d)){
		document.getElementById("error5").style.visibility = "visible";
		document.getElementById("bd").style.borderColor = "red";
	} else {
		document.getElementById("error5").style.visibility = "hidden";
		document.getElementById("bd").style.borderColor = "#dbe2e8";
	}
}

function c_onchange(){
	var c = document.getElementById("country").value;
	console.log(c);
	if(!country_v(c)){
		document.getElementById("error6").style.visibility = "visible";
		document.getElementById("country").style.borderColor = "red";
	} else {
		document.getElementById("error6").style.visibility = "hidden";
		document.getElementById("counrty").style.borderColor = "#dbe2e8";
	}
}

function form_validation(fn, sn, e, p, bd, c){
	if(!name_v(fn)) return false;
	if(!name_v(sn)) return false;
	if(!email_v(e)) return false;
	if(!password_v(p)) return false;
	if(!birthdate_v(bd)) return false;
	if(!country_v(c)) return false;
	if(!email_unique(e)) return false;
	return true;
}

function reg_click(){
	var fn = document.getElementById("fname").value;
	var sn = document.getElementById("sname").value;
	var surn = document.getElementById("surname").value;
	var e = document.getElementById("email").value;
	var p = document.getElementById("pw").value;
	var bd = document.getElementById("bd").value;
	var c = document.getElementById("country").value;
	if(form_validation(fn, sn, e, p, bd, c)){
		var arr = {};
		arr["fn"] = fn;
		arr["sn"] = sn;
		arr["surn"] = surn;
		arr["e"] = e;
		arr["p"] = p;
		arr["bd"] = bd;
		arr["c"] = c;
		register(arr);
	}
}

function register(arr){
	var u = "";
	console.log(arr);
	$.ajax({
  		type: 'POST',
   		url: 'registeration\\reg.php', 
   		async: false,
   		data: arr,
   		success: function(data){
      		u = data.r;
   		},
   		error: function(xhr, status, error) {
  			console.log(xhr);
  			console.log(status);
  			console.log(error);
		}
	});
	console.log(u);
}