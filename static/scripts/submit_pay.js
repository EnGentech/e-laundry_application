$(document).ready(function(){
    let totalPayment1 = 0
    let totalPayment2 = 0
    let totalPayment3 = 0

    function displayBankDetails(){
        $('#bt').click(function(){
            $('.bankDetails').show()
        })
        $('.bankDetails').mouseleave(function(){
            $('.bankDetails').hide()
        })
    }
    
    $('.dropme_wash .submitPay').click(function(){
        $('.dropme_wash .hide').show();
    
        function parseValue(value) {
            return parseInt(value.replace('$', ''), 10) || 0; 
        }

        jean = parseValue($('.dropme_wash .pay_jean').text());
        bed = parseValue($('.dropme_wash .pay_bed').text());
        co = parseValue($('.dropme_wash .pay_co').text());
        wed = parseValue($('.dropme_wash .pay_wed').text());
        dev = parseValue($('.dropme_wash .pay_dev').text());
        cot = parseValue($('.dropme_wash .pay_cot').text());

        totalPayment1 = jean + bed + co + wed + dev + cot;

        $('.dropme_wash #pay_now').text('$' + totalPayment1);
    });

    $('.dropme_stains .submitPay').click(function(){
        $('.dropme_stains .hide').show();
    
        function parseValue(value) {
            return parseInt(value.replace('$', ''), 10) || 0; 
        }

        jean = parseValue($('.dropme_stains .pay_jean').text());
        bed = parseValue($('.dropme_stains .pay_bed').text());
        co = parseValue($('.dropme_stains .pay_co').text());
        wed = parseValue($('.dropme_stains .pay_wed').text());
        dev = parseValue($('.dropme_stains .pay_dev').text());
        cot = parseValue($('.dropme_stains .pay_cot').text());

        totalPayment2 = jean + bed + co + wed + dev + cot;

        $('.dropme_stains #pay_now').text('$' + totalPayment2);
    });

    $('.dropme_iron .submitPay').click(function(){
        $('.dropme_iron .hide').show();
    
        function parseValue(value) {
            return parseInt(value.replace('$', ''), 10) || 0; 
        }

        jean = parseValue($('.dropme_iron .pay_jean').text());
        wed = parseValue($('.dropme_iron .pay_wed').text());

        totalPayment3 = jean + wed;

        $('.dropme_iron #pay_now').text('$' + totalPayment3);
    });

    $('.proceed button').click(function(){
        total = (totalPayment1 + totalPayment2 + totalPayment3)
        if (total === 0){
            $('.proceed span').text('You have not selected an item from our services, please do so...')
            $('.payTotal').text('')
        }else if (total > 0){
            document.querySelector('.proceed button').disabled = false;
            $('.proceed span').text('Please confirm your selection above before proceeding to payment')
            $('.proceed a').attr('href', '#pay')
            $('.payTotal').text('Pay Now => $' + total)
            $('#bt').css('cursor', 'pointer')
            $('#bt').css('color', 'blue')
            displayBankDetails()
        }
        
    })
  
});
