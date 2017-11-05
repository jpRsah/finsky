//console.log("click");

(function ($) {
 $(document).ready(function(){
 



//inputmask

//$(":input").inputmask();
//$(selector).inputmask("99-9999999");  //static mask
$("#edit-field-vas-nomer-telefona-0-value").inputmask("+7(999)999-99-99");

$("#edit-field-vas-nomer-telefona-0-value").attr("placeholder", "+7(999)999-99-99");
$("#edit-name").attr("placeholder", "Иван Васильевич");
$("#edit-message-0-value").attr("placeholder", "Хотим вас забронировать на свадьбу, юбилей, день рождения, корпоратив...");

	var w = window.innerWidth;
	
$( window ).resize(function() {
	var w = window.innerWidth;

    //var h = window.innerHeight;
});


if( w >= 760 ){	
	$("#block-ssylkanagalereu #image").append( "<img src='/sites/default/files/great_foto/galery-link.jpg' id='demo' alt='галерея шоу в ростове на дону'>" );

	$("#block-futer #image").append( "<img alt='галерея шоу в ростове на дону'  src='/sites/default/files/great_foto/footer.jpg' />" );
}



if( w <= 550 ){	
	$("#block-ssylkanagalereu a,#block-futer a.btnp").addClass('btn btn-primary');
	
}


//$( "#block-ssylkanagalereu #image" ).append( "<p>Test</p>" );

  Drupal.behaviors.customBehavior = {
   // perform jQuery as normal in here
  };
  });
})(jQuery);
