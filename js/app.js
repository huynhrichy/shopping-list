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

			if ($('table tr').length < 2) {
				//alert('2');
				$('tr:first-child td:nth-child(2)').removeClass('item-box-no-items');
				//$('tr:first-child td:nth-child(3)').removeClass('delete-box-no-items');
				$('#store-button').removeClass('store-button-no-items');
			}

			addItem(itemName);

		}
	});


	$('.unchecked-box').click(check);
	$('.checked-box'  ).click(uncheck);





/*

	$('.unchecked-box, .checked-box').click(function () {
 
  //function uncheck (e) {
  	function uncheck () {
		$('<img src="images/unchecked.png" alt="" class="unchecked-box">')
            .insertAfter($(this)) // [!!] The wrapping of `this` can be simplified (see next function)
            .on('click', check);  // [!!] Rebind
		$(this).closest('tr').removeClass('done');
		$(this).remove();
  }
 
  //function check (e) {
  	function check () {
		$('<img src="images/checked.png" alt="" class="checked-box">')
            .insertAfter(this)
            .on('click', uncheck);  // [!!] Rebind
		$(this).closest('tr').addClass('done');
		$(this).remove();
  }
 
 
  // [!!] Note, the event handler was being lost since a new element is added,
  //            and the old that had the event handler was removed. In `uncheck`,
  //            simply rebind the event handler to the new event.
	$('.unchecked-box').click(check);
	$('.checked-box'  ).click(uncheck);
	
});
*/

/*
	$('.unchecked-box').click(function() {
		// get the item of this row
		
		
		$('<img src="images/checked.png" alt="" class="checked-box">').insertAfter($(this));
		//$(this).closest('tr').find('.checked-box').addClass('.unchecked-box');
		$(this).closest('tr').addClass('done');
		$(this).fadeOut(400, function() {
		});
		$(this).remove();
*/



		//var itemName = $(this).closest('tr').find('.item-name');
		//$(this).closest('tr').remove();
		//checkItem(itemName);
//	});
/*
	$('.checked-box').click(function() {
		$('<img src="images/unchecked.png" alt="" class="unchecked-box">').insertAfter($(this));
		//$(this).closest('tr').find('.checked-box').addClass('.checked-box');
		$(this).closest('tr').removeClass('done');
		$(this).fadeOut(400, function() {
		});
		$(this).remove();
*/

		/*
		// get the item of this row
		var itemName = $(this).closest('tr').find('.item-name');

		// delete row
		$(this).closest('tr').remove();

		uncheckItem(itemName);
		*/
//	});

	$('.delete-button').click(function() {
		$(this).closest('tr').fadeOut(400, function() {
		});


		$(this).closest('tr').remove();
		//alert($('table tr').length + ' table rows left');



		if ($('table tr').length < 2) {
			//alert('1');
			$('tr:first-child td:nth-child(2)').addClass('item-box-no-items');
			//$('tr:first-child td:nth-child(3)').addClass('delete-button-no-items');
			$('#store-button').addClass('store-button-no-items');
		}
	});

/*
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
	*/

/*
	$('.unchecked-box').mouseenter(function() {
		$(this).css({opacity: 0.5});
	}).mouseleave(function() {
		$(this).css({opacity: 1.0});
	});*/

});
/*
function getItemNameOfRow(check-box) {

}
*/

function toggleCheckBox() {

}

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
	$('<tr><td><img src="images/unchecked.png" alt="" class="unchecked-box"></td><td class="item-name">' + item + '</td><td><img src="images/delete.png" alt="" class="delete-button"></td></tr>')
	.insertAfter($('#enter-item-row'));
	// get to the box and add event handler... in the tr, first td?
	//.$('.unchecked-box').first().click(check);
	//.click(check);

	// bind click and remove event handlers to new items (the images)

	$('.unchecked-box').click(check);
	$('.delete-button').click(removeItem);


}

function checkItem(item) {
	// if click on unchecked item name or unchecked box
	// check item by removing unchecked box and replacing with checked box
	// change classes to make ish grayed out
	// reposition to top of done ish

	//alert('');

	var itemName = item.text();
	$('<tr class="done"><td><img src="images/checked.png" alt="" class="checked-box"></td><td class="item-name">' + itemName + '</td><td><img src="images/delete.png" alt="" class="delete-button"></td></tr>').insertBefore($('.done').first());

	//alert('attempted to check ' + itemName + ' off');

	
	//$('<tr class="done"><td><img src="images/checked.png" alt="" class="checked-box"></td><td class="item-name">' + itemName + '</td><td><img src="images/delete.png" alt="" class="delete-button"></td></tr>').insertBefore($('.done').first());
	// add class and add box

}

function uncheckItem(item) {
	// if click on checked item name or checked box
	// uncheck item by removing checked box and replacing with checked box
	// change classes to make ish not grayed out
	// reposition to just above done ish
	//alert('attempted to uncheck ' + item.text() + ' off');

	var itemName = item.text();

	//alert('attempted to check ' + itemName + ' off');

	$('<tr><td><img src="images/unchecked.png" alt="" class="unchecked-box"></td><td class="item-name">' + itemName + '</td><td><img src="images/delete.png" alt="" class="delete-button"></td></tr>').insertBefore($('.done'));

}

function removeItem() {
	// wuts this??????
	$(this).closest('tr').remove();
	//alert($('table tr').length + ' table rows left');

	if ($('table tr').length < 2) {
		//alert('1');
		$('tr:first-child td:nth-child(2)').addClass('item-box-no-items');
		//$('tr:first-child td:nth-child(3)').addClass('delete-button-no-items');
		$('#store-button').addClass('store-button-no-items');
	}
}

function uncheck () {
	$('<img src="images/unchecked.png" alt="" class="unchecked-box">')
        .insertAfter($(this)) // [!!] The wrapping of `this` can be simplified (see next function)
        .on('click', check);  // [!!] Rebind
	$(this).closest('tr').removeClass('done');
	$(this).remove();
}

//function check (e) {
	function check () {
		//alert('');

	$('<img src="images/checked.png" alt="" class="checked-box">')
        .insertAfter(this)
        .on('click', uncheck);  // [!!] Rebind
	$(this).closest('tr').addClass('done');
	$(this).remove();
}