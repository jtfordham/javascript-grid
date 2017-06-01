$(document).ready(function(){
	//$('.square').off();
	var grid_size = 0;

	createGrid(grid_size);


});

function createGrid(grid_size){
	$('.square').off();
	$('#clear-grid').off();
	if(grid_size === 0){
		var rows = 16;
		var square_width = 58;
		var square_height = 58;
	}else{
		rows = grid_size;
		square_width = 960/grid_size - 2;
		square_height = square_width;
	}

	for( var i = 0; i < rows; i++){
		for( var j = 0; j < rows; j++){
				$('#grid-holder').append('<div class="square" style="width:' + square_width + 'px; height:' + square_height + 'px;"></div>');

		}
		$('#grid-holder').append('<div class="grid-row"></div>');
	}

	$('.square').on('mouseenter',function(){
		$(this).animate({backgroundColor: '#ff0000'}, 'fast');
	});

	$('.square').on('mouseleave',function(){
		$(this).animate({backgroundColor: '#0099ff'}, 'fast');
	});

	$('#clear-grid').on('click',function(){
		$('#grid-holder').empty();
		grid_size = prompt("Enter the amount of squares per row: ");
		createGrid(grid_size);
	});

}