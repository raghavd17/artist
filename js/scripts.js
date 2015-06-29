$(document).ready(function() {
	$.getJSON( "json/user.json", function( data ) {
	var items = [];
		$.each( data.user, function( i, item ) {

			var itemId = item.id;
			var itemName = item.name;
			var itemPlace = item.place;
			var itemUserProfile = item.user_image;
			var itemFoodImg = item.food_image;
			var itemDesc = item.description;

	items.push( '<li><div class="food_item" id="food_item_'+ itemId+'"> '
				+'<div class="image" id='+itemId+'> <ul class="user_review"><li> 101 Likes</li> <li> 50 Discuss</li></ul>'
				+'<img src='+itemFoodImg+' alt=' + itemName + ' /> </div> <div class="author clearfix"> '
				+'<img src='+itemUserProfile+'  alt="profile" class="profile" />'
				+'<h1 class="title"> '+itemName+' <cite> '+ itemPlace +' </cite></h1></div><div class="description"><p>'+itemDesc+'</p></div></div></li>' );
	});

	$( "<ul/>", {
		"class": "items",
		html: items.join( "" )
	}).appendTo( "#main_container" );

// for (var i = 0; i < items.length; i++) {
// 	console.log( "Items of " + i + " :\n" + items[i]);
// };

	$('#main_container').append('<div class="product_info"></div>');


		$('div.image').on('click',  function() {
			var itemId = $(this).attr("id");
				itemId = "food_item_"+itemId;
			var positionLft = $('.product_info').width();
			// console.log('after click image');
			$('.product_info').html('<div class="arrow_close"><img src="img/arrow_close.png" alt="Close"></div>'); 
			// console.log('after html arrow');
			$('#'+itemId).clone().appendTo('.product_info');
			// console.log('after clone appendTo');
			$('.product_info').append('<form  method="get" accept-charset="utf-8">'
							+'<input type="text" name="" value="" placeholder="Name">'
							+'<input type="email" name="" value="" placeholder="Email Address">'
							+'<textarea name="" placeholder="Comments"></textarea>'
							+'<input type="button" name="" value="Submit" class="btn btn-primary">'
							+' <input type="Reset" name="" value="Cancel" class="btn btn-inverse"></form>');
				
			// console.log('after form append');
			$('ul.items').css('left', - (positionLft + 20));
			// alert('width' + positionLft);
			$('.product_info').css('right','0');
			

			$('.arrow_close').on('click',  function() {
				$('ul.items').removeAttr('style');
				// alert('width' + positionLft);
				$('.product_info').removeAttr('style');

			});

		});
});
	
});
