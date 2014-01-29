// JavaScript Document

var itemsList = [ ];

$(document).ready(function(e) {
	
	$('#input').focus();
	
	function addItem(input){
		itemsList.push(input);
		var lastItem = ((itemsList.length)-1);
		itemsList[lastItem];
		//var newItemOnList = "<li>" + itemList[lastItem]+ "</li>";
		$('#items').append('<li>' + itemsList[lastItem]+ '</li>');
	}
	
	function submit(){
		var input = $.trim(document.getElementById('input').value);
		addItem(input);
		$('#input').val("");
	}


	

	$("#input").keypress(function(e) {
        if(e.keyCode==13){
			submit()
		};
    });
	
	$('#submit').click(submit);
	
	//add an item to the list
	//$('#submit').click(function(e) {
			
				//var itemList = new Array[input];
			
				//for (i=0; i<itemList.length; i++) {
			
				//if (input != "") {
				//itemList.push(input);
				//console.log(input);
				//$('#items').append(input);
					
					//var input = $('#input').val();
					//$('#items').append('<li>'+input+'<input type=button class="remove_item" value = "X"/></li>');
					//$("#input").val("");
					//$("#input").focus();
			//});
			
			
	//remove an item from the list
	//$('#items').on('click', '.remove_item', function(){
		//$(this).parent().remove();
	//});
});
	

