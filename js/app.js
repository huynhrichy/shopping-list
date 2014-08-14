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

	$('#title').mousedown(function() {
		// add box-active class
		$(this).toggleClass('.box-active');
		//$(this).addClass('.box-active');

		//$(this).css({opacity: 0.5});
	}).mouseup(function() {
		// reset opacity
		$(this).toggleClass('.box-active');

		// remove box-active class
	});

	$('.unchecked-box').mousedown(function() {
		// add box-active class
		$(this).toggleClass('.box-active');

		//$(this).css({opacity: 0.5});
	}).mouseup(function() {
		// reset opacity
		$(this).toggleClass('.box-active');

		// remove box-active class
	});

	$('.checked-box').mousedown(function() {
		// add box-active class
		$(this).toggleClass('.box-active');

		//$(this).css({opacity: 0.5});
	}).mouseup(function() {
		// reset opacity
		$(this).toggleClass('.box-active');

		// remove box-active class
	});

/*
	$('.unchecked-box').mouseenter(function() {
		$(this).css({opacity: 0.5});
	}).mouseleave(function() {
		$(this).css({opacity: 1.0});
	});*/

});


// take in name of item
function addItem(item) {
	//alert('attempted to add ' + item);

	// remove text from textbox
	$('#item-box').val('');

	// make a new table row at the top for new item
	//$('table > tr:first').before('<tr><td></td><td>item</td><td></td></tr>');
	//$('<tr><td></td><td>item</td><td></td></tr>').prependTo('table');

	//insert after
	// add pics and everything
	$('<tr><td><img src="images/unchecked.png" alt="" class="unchecked-box"></td><td class="item-name">' + item + '</td><td><img src="images/delete.png" alt="" class="delete-button"></td></tr>').insertAfter($('#enter-item-row'));

}

function checkItem() {
	// if click on unchecked item name or unchecked box
	// check item by removing unchecked box and replacing with checked box
	// change classes to make ish grayed out
	// reposition to top of done ish

	alert('attempted to check item off');
}

function uncheckItem() {
	// if click on checked item name or checked box
	// uncheck item by removing checked box and replacing with checked box
	// change classes to make ish not grayed out
	// reposition to just above done ish
}

function removeItem() {

}