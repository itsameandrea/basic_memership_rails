$(document).ready(function() {
  
  //$('#card_number').validateCreditCard(function(result)
    {
      
       // if (!result.length_valid && $('#card_number').val().length > 1 ){//&& $('#card_number').is(':focus')
          
      //    $('#card_number').removeClass('form-control');
      //    $('#card_number').addClass('error-payment');
    //    }
        
    //    else {
          
    //      console.log("else" + result.length_valid + $('#card_number').val().length + !$('#card_number').is(':focus'))
    //      $('#card_number').removeClass('error-payment');
    //      $('#card_number').addClass('form-control');
          
    //    }
    //});
  
  Stripe.setPublishableKey($('meta[name="stripe-key"]').attr('content'));
  // Watch for a form submission:
  $("#form-submit-btn").click(function(event) {
    event.preventDefault();
    $('input[type=submit]').prop('disabled', true);
    var error = false;
    var ccNum = $('#card_number').val(),
        cvcNum = $('#card_code').val(),
        expMonth = $('#card_month').val(),
        expYear = $('#card_year').val();

    if (!error) {
      // Get the Stripe token:
      Stripe.createToken({
        number: ccNum,
        cvc: cvcNum,
        exp_month: expMonth,
        exp_year: expYear
      }, stripeResponseHandler);
    }
    return false;
  }); // form submission
  
   if ($('#card_number').val().length != 16 && $('#card_number').val().length > 0){
      
      alert('ciaaaao');
      $('#card_number').addClass('error-payment');
      
    }
  
  function stripeResponseHandler(status, response) {
    // Get a reference to the form:
    var f = $("#new_user");

    // Get the token from the response:
    var token = response.id;

    // Add the token to the form:
    f.append('<input type="hidden" name="user[stripe_card_token]" value="' + token + '" />');

    // Submit the form:
    f.get(0).submit(); 
  }
  
  function validateForm(){
    
    var ccNum = $('#card_number').val(),
        cvcNum = $('#card_code').val(),
        expMonth = $('#card_month').val(),
        expYear = $('#card_year').val();
        
        if (ccNum > 1 && ccNum != 16){
          
          $('#card_number').addClass('error-payment');
          
        }
    }
  
});
