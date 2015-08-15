(function($) {
	var position = 1;
	var thumbnail = thumbnail = $(".thumbnail-gallery").find("[data-position='" + position + "']");
	var maxPosition = thumbnail.data("max-position");
	var imageUrl = "";
	var activeImage = $('#gallery-active-img');

	// var imgEle = $('#work01-img-gallery');
	var imgEle = $(".image-gallery");

	var changeActiveImage = function(thumbnail){
		thumbnail.removeClass("overlay");
		imageUrl = thumbnail.css("background-image");
		activeImage.css("background-image", imageUrl);
	}
	var addOverlayToThumbnail = function(position) {
		thumbnail = $(".thumbnail-gallery").find("[data-position='" + position + "']");
		thumbnail.addClass("overlay");
		return thumbnail;
	}
	$('.image-gallery-thumbnail').click(function(){
		addOverlayToThumbnail(position);
		
		position = $(this).data('position');
		thumbnail = $(".thumbnail-gallery").find("[data-position='" + position + "']");
		changeActiveImage(thumbnail);
	});

	$(".gallery-action-icon-right").click(function(){
		addOverlayToThumbnail(position);
		position = position + 1;
		if(position <= maxPosition) {
			thumbnail = $(".thumbnail-gallery").find("[data-position='" + position + "']");
			changeActiveImage(thumbnail)		
		} else {
			position = 1;
			addOverlayToThumbnail(position);
			changeActiveImage(thumbnail);
		}
		e.preventDefault();
		
	});

	$(".gallery-action-icon-left").click(function(){
		addOverlayToThumbnail(position);
		position = position - 1;
		if(position <= 1) {
			thumbnail = $(".thumbnail-gallery").find("[data-position='" + position + "']");
			changeActiveImage(thumbnail)		
		} else {
			position = maxPosition;
			addOverlayToThumbnail(position);
			changeActiveImage(thumbnail);
		}
		e.preventDefault();
		
	});
})(jQuery);