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