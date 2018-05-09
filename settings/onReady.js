$( document ).ready(function() {
   var countries = [];
    $.ajax({
      type: 'POST',
      url: 'registeration\\get_countries.php', 
      async: false,
      success: function(data){
          countries = data;
      },
      error: function() {
          alert("error");
      }
    });
    country_select(countries);
    loadPic();
    loadUserData();
});
function country_select(arr){
  var s_country = document.getElementById("country");
  for(var i = 1; i <= 245; i++){
    var option = document.createElement("OPTION");
    option.setAttribute("value", i);
    var t = document.createTextNode(arr[i]);
    option.innerHTML = arr[i];
    s_country.appendChild(option);
  }
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
    $('#profile').attr('src','images/' + img);
    $('#settings_profile').attr('src','images/' + img);
  }
}

function loadUserData(){
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
  $("#fname").val(session.fn);
  $("#sname").val(session.second);
  $("#surname").val(session.sn);
  $("#email").val(session.email);
  $("#pw").val(session.pw);
  $("#sf").val(session.sf);
  $("#bd").val(session.bb);
  $("#country").val(session.country);
}
function profile_click(){
  window.location.href="home.html";
}
function gpa_click(){
  window.location.href="gpa.html";
}
function save_click(){
  var fn = document.getElementById("fname").value;
  var sn = document.getElementById("sname").value;
  var surn = document.getElementById("surname").value;
  var bd = document.getElementById("bd").value;
  var c = document.getElementById("country").value;
  var arr = {};
    arr["fn"] = fn;
    arr["sn"] = sn;
    arr["surn"] = surn;
    arr["bd"] = bd;
    arr["c"] = c;
    $.ajax({
      type: 'POST',
      url: 'settings\\saveSettings.php', 
      async: false,
      data: arr,
      success: function(data){
          console.log(data);
      },
      error: function(xhr, status, error) {
        console.log(xhr);
        console.log(status);
        console.log(error);
    }
  });
    imgUpload();
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
          if(data[0] && data[1]){
            window.location.href="setting.html";
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
  if(!(imagefile == "image/jpeg")){
    console.log(imagefile);
    $('#settings_profile').attr('src','images\\avatar.png');
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
  $('#settings_profile').attr('src', e.target.result);
  //$('#previewing').attr('width', '250px');
  //$('#previewing').attr('height', '230px');
}
function imgUpload(){
  var img = document.getElementById("image").files;
  var img_set = false;
  if(img.length > 0){
    img = img[0];
    img_set = true;
  }
  var sfield = document.getElementById("sf").value;
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
function validate_img(file){
  if(file.type.split("/")[0] != "image"){
    alert("please choose a valid images");
    return false;
  }
  return true;
}