$(document).ready(function() {
	$('.main').fadeIn(1000, function() {
	});

	$('#item-box').keypress(function(event) {
		if (event.which == 13 && $('#item-box').val()) {
			addItem($(this).val());
		}
	});

	$('#store-button').click(function() {
		var itemName = $('#item-box').val();
		if (itemName) {
			if ($('table tr').length < 2) {
				$('tr:first-child td:nth-child(2)').removeClass('item-box-no-items');
				$('#store-button').removeClass('store-button-no-items');
			}
			addItem(itemName);
		}
	});

	$('.unchecked-box').click(checkItem);
	$('.checked-box').click(uncheckItem);
	$('.delete-button').click(removeItem);
});

function addItem(item) {
	$('#item-box').val('');
	$('<tr><td><img src="images/unchecked.png" alt="" class="unchecked-box"></td><td class="item-name">' 
		+ item + '</td><td><img src="images/delete.png" alt="" class="delete-button"></td></tr>')
	.insertAfter($('#enter-item-row'));
	$('.unchecked-box').click(checkItem);
	$('.delete-button').click(removeItem);
}

function removeItem() {
	$(this).closest('tr').remove();
	if ($('table tr').length < 2) {
		$('tr:first-child td:nth-child(2)').addClass('item-box-no-items');
		$('#store-button').addClass('store-button-no-items');
	}
}

function uncheckItem() {
	$('<img src="images/unchecked.png" alt="" class="unchecked-box">')
        .insertAfter($(this))
        .on('click', checkItem);
	$(this).closest('tr').removeClass('done');
	$(this).remove();
}

function checkItem() {
	$('<img src="images/checked.png" alt="" class="checked-box">')
        .insertAfter(this)
        .on('click', uncheckItem);
	$(this).closest('tr').addClass('done');
	$(this).remove();
}