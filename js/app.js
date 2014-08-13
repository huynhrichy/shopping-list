$(document).ready(function() {
	$('.main').fadeIn(1000, function() {
	});

	$('#item-box').keypress(function(event) {
		if (event.which == 13) {
			addItem($(this).val());
		}
	});

	$('#store-button').click(function() {
		var itemName = $('#item-box').val();
		if (itemName) {
			addItem(itemName);
		}
	});

});


// take in name of item
function addItem(item) {
	//alert('attempted to add ' + name);

	// remove text from textbox
	$('#item-box').val('');

	// make a new table row at the top for new item
	//$('table > tr:first').before('<tr><td></td><td>item</td><td></td></tr>');
	//$('<tr><td></td><td>item</td><td></td></tr>').prependTo('table');

	//insert after
	$('<tr><td></td><td>item</td><td></td></tr>').insertAfter($('#enter-item-row'));

	// add pics and everything
}

function checkItem() {

}

function uncheckItem() {

}

function removeItem() {

}