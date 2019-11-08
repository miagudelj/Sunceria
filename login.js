/**
 * Kurzbeschreibung
 *
 * @author  Mia Gudelj
 * @since   2019-09-04
 * @version 1.0
 */
$(document).ready(function()    {
	
	// jquery event attachment 
	$("#loginButton").click(login);
	
	function login(){
		
		var userValue = $("#user").val();
		var pwValue = $("#pw").val();
		
		console.log("INFOS: " + userValue + ";" + pwValue);
		if (userValue === "user") {
			if (pwValue === "1234") {
				$("fieldset").fadeOut(600, function () {
					location = "pages/home.html";
                        });
			}
			else {
				alert("Ungültiges Passwort");
			}
		}
		else {
			alert("Ungültiger Benutzername");
		}
	}
	
	
		
	
});

