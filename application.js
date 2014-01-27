// JavaScript Document
$(document).ready(function(e) {
	$("#input").keypress(function(e) {
        if(e.keyCode==13){
			$("#submit").click();
		};
    });
	
	
	//add an item to the list
	$('#submit').click(function(e) {
			
				//var itemList = new Array[input];
			
				//for (i=0; i<itemList.length; i++) {
			
				//if (input != "") {
				//itemList.push(input);
				//console.log(input);
				//$('#items').append(input);
					
					var input = $('#input').val();
					$('#items').append('<li>'+input+'<input type=button class="remove_item" value = "X"/></li>');
					$("#input").val("");
					$("#input").focus();
			});
			
			
	//remove an item from the list
	$('#items').on('click', '.remove_item', function(){
		$(this).parent().remove();
	});
});
	

