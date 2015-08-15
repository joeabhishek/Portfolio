(function($) {
	var position = 1;
	var thumbnail = thumbnail = $(".thumbnail-gallery").find("[data-position='" + position + "']");
	var maxPosition = thumbnail.data("max-position");
	var imageUrl = "";
	var thumbState = {
		'g1': 1,
		'g2': 1,
		'g3': 1
	}

	//var activeImage = $('#gallery-active-img');

	// var imgEle = $('#work01-img-gallery');
	var imgEle = $(".image-gallery");

	var changeActiveImage = function($gallery, $thumbnail){
		var $activeImg =  $('#gallery-active-img' + $gallery.attr('id').substr(1,1)); 
		$thumbnail.removeClass("overlay");
		imageUrl = $thumbnail.css("background-image");
		$activeImg.css("background-image", imageUrl);
	}
	var addOverlayToThumbnail = function($gallery, galleryID) {
		var thumbnail = $gallery.find("[data-position='" + thumbState[galleryID] + "']");
		thumbnail.addClass("overlay");
		return thumbnail;
	}

	$('.image-gallery-thumbnail').click(function(e){
		var $gallery = $(this).parent().parent();
		var galleryID = $gallery.attr('id');
		var position = $(this).data('position');
		var $thumbnail = $gallery.find("[data-position='" + position + "']");
		addOverlayToThumbnail($gallery, galleryID);
		thumbState[galleryID] = position;
		changeActiveImage($gallery, $thumbnail);
	});

	$(".gallery-action-icon-right").click(function(e){
		var $gallery = $(this).parent();
		var galleryID = $gallery.attr('id');
		var position = thumbState[galleryID];
		var $thumbnail =$gallery.find("[data-position='1']");
		var maxPosition = thumbnail.data('max-position');
		addOverlayToThumbnail($gallery, galleryID);
		position = position + 1;
		if(position <= maxPosition) {
			thumbState[galleryID] = position;
			$thumbnail = $gallery.find("[data-position='" + position + "']");
			changeActiveImage($gallery, $thumbnail)		
		} else {
			position = 1;
			thumbState[galleryID] = position;
			$thumbnail = $gallery.find("[data-position='" + position + "']");
			addOverlayToThumbnail($gallery, galleryID);
			changeActiveImage($gallery, $thumbnail);
		}
		e.preventDefault();
		
	});

	$(".gallery-action-icon-left").click(function(e){
		var $gallery = $(this).parent();
		var galleryID = $gallery.attr('id');
		var position = thumbState[galleryID];
		var $thumbnail =$gallery.find("[data-position='1']");
		var maxPosition = thumbnail.data('max-position');
		addOverlayToThumbnail($gallery, galleryID);
		position = position - 1;
		if(position >= 1) {
			thumbState[galleryID] = position;
			$thumbnail = $gallery.find("[data-position='" + position + "']");
			changeActiveImage($gallery, $thumbnail)		
		} else {
			position = maxPosition;
			thumbState[galleryID] = position;
			$thumbnail = $gallery.find("[data-position='" + position + "']");
			addOverlayToThumbnail($gallery, galleryID);
			changeActiveImage($gallery, $thumbnail);
		}
		e.preventDefault();	
	});
})(jQuery);