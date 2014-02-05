// JavaScript Document

var itemsList = [ ];

$(document).ready(function(e) {
	
	$('#input').focus();
	
	//use enter key to submit
	$("#input").keypress(function(e) {
        if(e.keyCode==13){
			$('#submit').click();
		};
    });

	
//adding items to list
	$('#submit').click(function(){
		
		var input = document.getElementById('input').value;
		var index = itemsList.indexOf(input);
		var indexValue = itemsList[index];
		
		//verify that item is not repeated
		for (i=0; i<itemsList.length;i++){
			if(input==indexValue){
			alert("You already have that on the list!")
			$('#input').val("");
			return(false);
			};
		};
		
		//prevent empty inputs
		if(input==""||input==" "||input=="   "){
			return(false);
		}
		//add item to list
		else{
			itemsList.push(input);
			var lastItem = ((itemsList.length)-1);
			$('#items').append('<li>' + "<input id='checkbox' type='checkbox' index='"+lastItem+"'>" + itemsList[lastItem]+ '</li>')			
		};
		$('#input').val("");
	});

	

//remove item from list
	
	$(document).on('click', '#remove_button', function(){
		$('#items input:checked').parent().remove();
		itemsList.remove($('#items input:checked').attr('index'));          
	});
	
	
});
	

