$(document).ready(function(){
    $('.items #button1, .dropme_wash').hover(function(){
        $('.items #button1').css('color', 'red')
        $('.items #button1').css('background-color', 'white')
        $('.items #button1').css('border-color', 'white')
        $('.dropme_wash').toggle()
    })
    $('.items #button1, .dropme_wash').mouseleave(function(){
        $('.items #button1').css('color', 'rgb(0, 0, 84)')
        $('.items #button1').css('background-color', 'transparent')
        $('.items #button1').css('border-color', 'rgb(0, 0, 84)')
        $('.dropme_wash').hide()
    })


    $('.items #button2').hover(function(){
        $('.dropme_stains').toggle()
    })
    $('.items #button2').mouseleave(function(){
        $('.dropme_stains').hide()
    })


    $('.items #button3').hover(function(){
        $('.dropme_iron').toggle()
    })
    $('.items #button3').mouseleave(function(){
        $('.dropme_iron').hide()
    })
})