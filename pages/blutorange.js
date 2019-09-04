$(document).ready(function() {
	
	$(".bild").on("click", function() {
		var img = $("<img />", {src : this.src, "class": "fullImage"});
		$(this).html(img).show();
	});

});