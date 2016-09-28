var currentURL = window.location.origin; 
$("#submit").on("click", function(){
    	function validateForm() {
		  var isValid = true;
		  $('.form-control').each(function() {
		    if ( $(this).val() === '' )
		        isValid = false;
		  });

		  $('.chosen-select').each(function() {

		  	if( $(this).val() === "")
		  		isValid = false
		  })
		  return isValid;
		}

		if (validateForm() == true){
	    	var userData = {
	    		name: $("#name").val(),
	    		photo: $("#photo").val(),
	    		scores: [$("#q1").val(), $("#q2").val(), $("#q3").val(), $("#q4").val(), $("#q5").val(), $("#q6").val(), $("#q7").val(), $("#q8").val(), $("#q9").val(), $("#q10").val()]
	    	}

	    	$.post(currentURL + "/api/friends", userData, function(data){ 
          var nameFriend = data.name;
          var photoFriend = data.photo;

          $("#nameFriend").text(nameFriend);
          $("#photoFriend").attr("src",photoFriend);

          if(data){
            console.log(data);
            $('#myModal').modal('show');
          }

	    
	    	});

		}else{
			alert("Please answer all questions");
		}
    	
    	return false;
    });
	

$("#show").on("click", function(){
        $.get(currentURL + "/api/show", function(data){
          console.log(data);
            $("#potentialMatches").html(data);

        if(data){
            $('#myModal2').modal('show');
             }
        });
        return false;
});



