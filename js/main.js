$(document).ready(function() {
	$('#burger').click(function() {
		$('#ham-second').toggle(1000);
	});
});
function openHam(x) {
	x.classList.toggle("change");
}

function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "flex";
  evt.currentTarget.className += " active";
}
document.getElementById("defaultOpen").click();

$(document).on('click','.myBtn',function(){
	var myTargetModal = '#' + $(this).data('bid');
	$('#myModal').hide();
	$('.modal-content').hide();
	$('#myModal').fadeIn();
	$(myTargetModal).fadeIn();
	$('.html').css('overflow','hidden');
	$('.body').css('overflow','hidden');
	function is_touch_device() {
		var prefixes = ' -webkit- -moz- -o- -ms- '.split(' ');
		var mq = function(query) {
		  return window.matchMedia(query).matches;
		}
		if (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
		  return true;
		}
		var query = ['(', prefixes.join('touch-enabled),('), 'heartz', ')'].join('');
		return mq(query);
	}
	if (is_touch_device() == true) {
		$('.body').css('padding-right','0');
	} else {
		$('.body').css('padding-right','15px');
	}
	   
});
$("body" ).on( "click",".close", function() {
  	$('#myModal').hide();
	$('.modal-content').hide();
	$('.html').css('overflow','auto');
	$('.body').css('overflow','auto');
	$('.body').css('padding-right','0px');
});
$(document).click(function(e) {
	if ($(e.target).is('#myModal')) {
		$('#myModal').hide();
		$('.modal-content').hide();
		$('.html').css('overflow','auto');
		$('.body').css('overflow','auto');
		$('.body').css('padding-right','0px');
	}
});

$(document).ready(function(){
  $('.intro-slider').slick({
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  });
});

$("form").on("change", ".file-upload-field", function(){
	$(this).parent(".file-upload-wrapper").attr("data-text", $(this).val().replace(/.*(\/|\\)/, '') );
});
//Validation of modal mail form//
function valid (form) {
	var name = form.modalName.value;
	var phone = form.modalPhone.value;
	var nameInp = document.getElementById("modal-name");
	var phoneInp = document.getElementById("modal-phone");
	var regName = /^(([A-Za-z]+[ ]?|[a-z]+[-]?)+)$/;
	var regNameru = /^(([А-Яа-я]+[ ]?|[а-я]+[-]?)+)$/;
	if(name == "" || name == " " || !(regName.test(name) || regNameru.test(name))) {
		nameInp.style.background = "#ff000033";
		nameInp.style.color = "#fff";
		event.preventDefault();
	} else {
		nameInp.style.background = "#F0F0F0";
		nameInp.style.color = "#868686";
	}
	if(phone == "" || phone == " " || phone.replace(/\(|\)|\+|\_|\s/gi, '').length < 12) {
		phoneInp.style.background = "#ff000033";
		phoneInp.style.color = "#fff";
		event.preventDefault();
	} else {
		phoneInp.style.background = "#F0F0F0";
		phoneInp.style.color = "#868686";
	}
}
//END//
//Validation of main page mail form//
function validMain (form) {
	var mainName = form.name.value;
	var mainPhone = form.phone.value;
	var mainNameInp = document.getElementById("name");
	var mainPhoneInp = document.getElementById("phone");
	var regName = /^(([A-Za-z]+[ ]?|[a-z]+[-]?)+)$/;
	var regNameru = /^(([А-Яа-я]+[ ]?|[а-я]+[-]?)+)$/;
	if(mainName == "" || mainName == " " || !(regName.test(mainName) || regNameru.test(mainName))) {
		mainNameInp.style.background = "#ff000033";
		mainNameInp.style.color = "#fff";
		event.preventDefault();
	} else {
		mainNameInp.style.background = "#F0F0F0";
		mainNameInp.style.color = "#868686";
	}
	if(mainPhone == "" || mainPhone == " " || mainPhone.replace(/\(|\)|\+|\_|\s/gi, '').length < 12) {
		mainPhoneInp.style.background = "#ff000033";
		mainPhoneInp.style.color = "#fff";
		event.preventDefault();
	} else {
		mainPhoneInp.style.background = "#F0F0F0";
		mainPhoneInp.style.color = "#868686";
	}
}
//END//
//Mask of phone input//
$(document).ready(function() {
	$("#phone").inputmask("+38(999) 99 99 999");  //static mask
	$("#modal-phone").inputmask("+38(999) 99 99 999");  //static mask
});
//END//

$(document).ready(function(){
    $(".menu-items").on("click","li a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href');
		$('html, body').animate({
			scrollTop: $(id).offset().top-50
		}, 1000);
	});
	$(".ham-items").on("click","li a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href');
		$('html, body').animate({
			scrollTop: $(id).offset().top-50
		}, 1000);
    });
});