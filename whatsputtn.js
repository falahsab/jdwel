/*<![CDATA[*/ 
  $(document).on('click','.send_form', function(){
var input_blanter = document.getElementById('wa_name');

/* Whatsapp Settings */
var walink = 'https://web.whatsapp.com/send',
    phone = '213777683564',
    walink2 = 'أريد طلب هذا المنتج:',
    text_yes = 'تم إرسال طلبك',
    text_no = 'يرجى منك ملئ الإسثمارة لترسل الطلب';

/* Smartphone Support */
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
var walink = 'whatsapp://send';
}
if("" != input_blanter.value){

 /* Call Input Form */
var input_name1 = $("#wa_name").val(),
    input_number1 = $("#wa_number").val(),
	input_title = $("#wa_title").val(),
    input_url1 = $("#wa_url").val(),
    input_textarea1 = $("#wa_textarea").val();

/* Final Whatsapp URL */
var blanter_whatsapp = walink + '?phone=' + phone + '&text=' + walink2 + '%0A%0A' +
	'*الكمية* : ' + input_number1 + '%0A' +
	'*المنتج* : ' + input_title + '%0A' +
    '*رابط المنتج* : ' + input_url1 + '%0A' +
    '*------------*%0A*الإسم* : ' + input_name1 + '%0A' +
    '*العنوان* : ' + input_textarea1 + '%0A';

/* Whatsapp Window Open */
window.open(blanter_whatsapp,'_blank');
document.getElementById("text-info").innerHTML = '<span class="yes">'+text_yes+'</span>';
} else {
document.getElementById("text-info").innerHTML = '<span class="no">'+text_no+'</span>';
}
});

$( ".wtsp-btn" ).on( "click", function() {
  $( ".form-whatsapp" ).addClass( "show");
});
$( ".close-wtsp-form" ).on( "click", function() {
  $( ".form-whatsapp" ).removeClass( "show");
});

// This is function to activate Custom Whatsapp Button
$( document ).ready( function() {
	$( document ).on( "click", '.whatsapp-send', function() {
		if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test( navigator.userAgent ) ) {
			var text = $( this ).attr( "data-text" );
			var url = $( this ).attr( "data-href" );
			var message = encodeURIComponent( text ) + " - " + encodeURIComponent( url );
			var whatsapp_url = "whatsapp://send?text=" + message;
			window.location.href = whatsapp_url;
		} else {
            $( ".error-message" ).slideDown().delay( 3500 );
			$( ".error-message" ).slideUp();

		}
	} );
} );

  /*]]>*/
