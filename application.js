// JavaScript Document

var itemsList = [ ];

$(document).ready(function(e) {
	
	$('#input').focus();
	
	$("#input").keypress(function(e) {
        if(e.keyCode==13){
			submit()
		};
    });
	
	$('#submit').click(submit);

	
//adding items to list
	
	function addItem(input){
		itemsList.push(input);
		var lastItem = ((itemsList.length)-1);
		itemsList[lastItem];
		$('#items').append('<li>' + "<input id='checkbox' type='checkbox'>" + itemsList[lastItem]+ '</li>');
	}
	
	function submit(){
		var input = document.getElementById('input').value;
		addItem(input);
		$('#input').val("");
	}

//remove item from list
	
	$(document).on('click', '#remove_button', function(){
		$('#items input:checked').parent().remove();
	});

//verify that something is entered	
	function verify(){
		if(input==""){
			alert("Enter something");
			return(false);
		}else{
			addItem(input);
		};
			
	}	

//verify that input is not repeated
	function nonRepeat(){
		var index = itemsList.indexOf(input);
		var indexValue = itemsList[index];
		for (i=0; i<itemsList.length;i++){
			if(input==indexValue[i]){
				alert("You already have that on the list!")
			}else{
				addItem(input);
			};
		};
	};
});
	

