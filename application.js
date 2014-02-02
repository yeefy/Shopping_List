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
		var input = $.trim(document.getElementById('input').value);
		addItem(input);
		$('#input').val("");
	}

//remove item from list
		function removeItem(){
			$('#remove_button').click(function(e) {
                $('#items input:checked').each(function() {
                    var itemsChecked = $('#items input:checked').index(this);
					itemsList.splice(itemsChecked, 1);
					$('#items li:eq('+itemsChecked+')').remove(this);
				});
                });
		};
	
	
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
	

