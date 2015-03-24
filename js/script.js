$(document).ready(function() {
	$(document).on('click','#x',function() { 
		// TESTING alert('you clicked a delete button!');
		// TESTING console.log($(this).parent().parent().attr('class'));
		if ($(this).parent().parent().attr('class') === 'item') {
			var thisCost = parseFloat(($(this).parent().parent()).children('.price').text());
			console.log(($(this).parent().parent()).children('.price').text());
			var totalCost = parseFloat($('#left').text())-thisCost;
			console.log("totalCost="+totalCost);
			$('#leftId span').text(totalCost.toFixed(2));
		}
		else if ($(this).parent().parent().attr('class') === 'item-struck') {
			var thisCost = parseFloat(($(this).parent().parent()).children('.price').text());
			console.log(($(this).parent().parent()).children('.price').text());
			var totalCost = parseFloat($('#spent').text())-thisCost;
			console.log("totalCost="+totalCost);
			$('#spentId span').text(totalCost.toFixed(2));
		}
		$(this).parent().parent().remove();
		return false;
	})
	$(document).on('click','#check',function() { 
		var thisCost = parseFloat(($(this).parent().parent()).children('.price').text());
		var newSpent = parseFloat($('#spent').text())+thisCost;
		var newLeft = parseFloat($('#left').text())-thisCost;
		$('#spentId span').text(newSpent.toFixed(2));
		$('#leftId span').text(newLeft.toFixed(2));
	   $(this).parent().parent().attr('class', 'item-struck');
	   $(this).attr('id', 'checked');

	})
	$(document).on('click','#checked',function() { 
		var thisCost = parseFloat(($(this).parent().parent()).children('.price').text());
		var newSpent = parseFloat($('#spent').text())-thisCost;
		var newLeft = parseFloat($('#left').text())+thisCost;
		$('#spentId span').text(newSpent.toFixed(2));
		$('#leftId span').text(newLeft.toFixed(2));
	   $(this).parent().parent().attr('class', 'item');
	   $(this).attr('id', 'check');
	});

	$("#addButton").click(function() {
		// TESTING alert('Test works to this point!');
		// TESTING console.log($('#newName').val());
		// TESTING console.log($('#newPrice').val());

		newItem($('#newName').val(),$('#newPrice').val());

		// TESTING console.log(parseFloat($('#left').text())+parseFloat($('#newPrice').val()));
		var totalCost=parseFloat($('#left').text())+parseFloat($('#newPrice').val());
		$('#leftId span').text(totalCost.toFixed(2));
		
		return false;
	});
});

var newItem = function(item, price) {
	if($('#newName').val().length > 0){
		$('#itemList').append(
			$('<li>').attr('class','item').append(
				$('<div>').attr('class','name').append(item),
				$('<div>').attr('class','price').append(price),
				$('<div>').attr('class','buttons').append(
					$('<button>').attr('id','check').append(
						$('<i>').attr('class','fa fa-check')),
					$('<button>').attr('id','x').append(
						$('<i>').attr('class','fa fa-trash-o'))
				)
			)
		)	
	}
}

