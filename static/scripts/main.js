$(document).ready(function () {
  $('.items #button1, .dropme_wash').hover(function () {
    $('.items #button1').css('color', 'red');
    $('.items #button1').css('background-color', 'white');
    $('.items #button1').css('border-color', 'white');
    $('.dropme_wash').toggle();
  });
  $('.items #button1, .dropme_wash').mouseleave(function () {
    $('.items #button1').css('color', 'rgb(0, 0, 84)');
    $('.items #button1').css('background-color', 'transparent');
    $('.items #button1').css('border-color', 'rgb(0, 0, 84)');
    $('.dropme_wash').hide();
  });

  $('.items #button2, .dropme_stains').hover(function () {
    $('.items #button2').css('color', 'red');
    $('.items #button2').css('background-color', 'white');
    $('.items #button2').css('border-color', 'white');
    $('.dropme_stains').toggle();
  });
  $('.items #button2, .dropme_stains').mouseleave(function () {
    $('.items #button2').css('color', 'rgb(0, 0, 84)');
    $('.items #button2').css('background-color', 'transparent');
    $('.items #button2').css('border-color', 'rgb(0, 0, 84)');
    $('.dropme_stains').hide();
  });

  $('.items #button3, .dropme_iron').hover(function () {
    $('.items #button3').css('color', 'red');
    $('.items #button3').css('background-color', 'white');
    $('.items #button3').css('border-color', 'white');
    $('.dropme_iron').toggle();
  });
  $('.items #button3, .dropme_iron').mouseleave(function () {
    $('.items #button3').css('color', 'rgb(0, 0, 84)');
    $('.items #button3').css('background-color', 'transparent');
    $('.items #button3').css('border-color', 'rgb(0, 0, 84)');
    $('.dropme_iron').hide();
  });

  $('.dropme_wash .jean').change(function () {
    if ($(this).is(':checked')) {
      $('.dropme_wash #jean').on('change');
      let num = $('.dropme_wash #jean').val();
      if (num >= 0) {
        num = num * 10;
        const total = '$' + num;
        $('.dropme_wash .pay_jean').text(total);
      } else {
        $('.dropme_wash .pay_jean').text(0);
      }

      $('.dropme_wash #jean').change(function () {
        let num = $('.dropme_wash #jean').val();
        if (num >= 0) {
          num = num * 10;
          const total = '$' + num;
          $('.dropme_wash .pay_jean').text(total);
        } else {
          $('.dropme_wash .pay_jean').text(0);
        }
      });
    } else {
      $('.dropme_wash .pay_jean').text(0);
      $('.dropme_wash #jean').off('change');
    }
  });

  $('.dropme_wash .bed').change(function () {
    if ($(this).is(':checked')) {
      $('.dropme_wash #bed').on('change');
      let num = $('.dropme_wash #bed').val();
      if (num >= 0) {
        num = num * 25;
        const total = '$' + num;
        $('.dropme_wash .pay_bed').text(total);
      } else {
        $('.dropme_wash .pay_bed').text(0);
      }

      $('.dropme_wash #bed').change(function () {
        let num = $('.dropme_wash #bed').val();
        if (num >= 0) {
          num = num * 25;
          const total = '$' + num;
          $('.dropme_wash .pay_bed').text(total);
        } else {
          $('.dropme_wash .pay_bed').text(0);
        }
      });
    } else {
      $('.dropme_wash .pay_bed').text(0);
      $('.dropme_wash #bed').off('change');
    }
  });

  $('.dropme_wash .co').change(function () {
    if ($(this).is(':checked')) {
      $('.dropme_wash #co').on('change');
      let num = $('.dropme_wash #co').val();
      if (num >= 0) {
        num = num * 15;
        const total = '$' + num;
        $('.dropme_wash .pay_co').text(total);
      } else {
        $('.dropme_wash .pay_co').text(0);
      }

      $('.dropme_wash #co').change(function () {
        let num = $('.dropme_wash #co').val();
        if (num >= 0) {
          num = num * 15;
          const total = '$' + num;
          $('.dropme_wash .pay_co').text(total);
        } else {
          $('.dropme_wash .pay_co').text(0);
        }
      });
    } else {
      $('.dropme_wash .pay_co').text(0);
      $('.dropme_wash #co').off('change');
    }
  });

  $('.dropme_wash .wed').change(function () {
    if ($(this).is(':checked')) {
      $('.dropme_wash #wed').on('change');
      let num = $('.dropme_wash #wed').val();
      if (num >= 0) {
        num = num * 35;
        const total = '$' + num;
        $('.dropme_wash .pay_wed').text(total);
      } else {
        $('.dropme_wash .pay_wed').text(0);
      }

      $('.dropme_wash #wed').change(function () {
        let num = $('.dropme_wash #wed').val();
        if (num >= 0) {
          num = num * 35;
          const total = '$' + num;
          $('.dropme_wash .pay_wed').text(total);
        } else {
          $('.dropme_wash .pay_wed').text(0);
        }
      });
    } else {
      $('.dropme_wash .pay_wed').text(0);
      $('.dropme_wash #wed').off('change');
    }
  });

  $('.dropme_wash .dev').change(function () {
    if ($(this).is(':checked')) {
      $('.dropme_wash #dev').on('change');
      let num = $('.dropme_wash #dev').val();
      if (num >= 0) {
        num = num * 20;
        const total = '$' + num;
        $('.dropme_wash .pay_dev').text(total);
      } else {
        $('.dropme_wash .pay_dev').text(0);
      }

      $('.dropme_wash #dev').change(function () {
        let num = $('.dropme_wash #dev').val();
        if (num >= 0) {
          num = num * 20;
          const total = '$' + num;
          $('.dropme_wash .pay_dev').text(total);
        } else {
          $('.dropme_wash .pay_dev').text(0);
        }
      });
    } else {
      $('.dropme_wash .pay_dev').text(0);
      $('.dropme_wash #dev').off('change');
    }
  });

  $('.dropme_wash .cot').change(function () {
    if ($(this).is(':checked')) {
      $('.dropme_wash #cot').on('change');
      let num = $('#cot').val();
      if (num >= 0) {
        num = num * 8;
        const total = '$' + num;
        $('.dropme_wash .pay_cot').text(total);
      } else {
        $('.dropme_wash .pay_cot').text(0);
      }

      $('.dropme_wash #cot').change(function () {
        let num = $('.dropme_wash #cot').val();
        if (num >= 0) {
          num = num * 8;
          const total = '$' + num;
          $('.dropme_wash .pay_cot').text(total);
        } else {
          $('.dropme_wash .pay_cot').text(0);
        }
      });
    } else {
      $('.dropme_wash .pay_cot').text(0);
      $('.dropme_wash #cot').off('change');
    }
  });

  $('.dropme_stains .jean').change(function () {
    if ($(this).is(':checked')) {
      $('.dropme_stains #jean').on('change');
      let num = $('.dropme_stains #jean').val();
      if (num >= 0) {
        num = num * 25;
        const total = '$' + num;
        $('.dropme_stains .pay_jean').text(total);
      } else {
        $('.dropme_stains .pay_jean').text(0);
      }

      $('.dropme_stains #jean').change(function () {
        let num = $('.dropme_stains #jean').val();
        if (num >= 0) {
          num = num * 25;
          const total = '$' + num;
          $('.dropme_stains .pay_jean').text(total);
        } else {
          $('.dropme_stains .pay_jean').text(0);
        }
      });
    } else {
      $('.dropme_stains .pay_jean').text(0);
      $('.dropme_stains #jean').off('change');
    }
  });

  $('.dropme_stains .bed').change(function () {
    if ($(this).is(':checked')) {
      $('.dropme_stains #bed').on('change');
      let num = $('.dropme_stains #bed').val();
      if (num >= 0) {
        num = num * 40;
        const total = '$' + num;
        $('.dropme_stains .pay_bed').text(total);
      } else {
        $('.dropme_stains .pay_bed').text(0);
      }

      $('.dropme_stains #bed').change(function () {
        let num = $('.dropme_stains #bed').val();
        if (num >= 0) {
          num = num * 40;
          const total = '$' + num;
          $('.dropme_stains .pay_bed').text(total);
        } else {
          $('.dropme_stains .pay_bed').text(0);
        }
      });
    } else {
      $('.dropme_stains .pay_bed').text(0);
      $('.dropme_stains #bed').off('change');
    }
  });

  $('.dropme_stains .co').change(function () {
    if ($(this).is(':checked')) {
      $('.dropme_stains #co').on('change');
      let num = $('.dropme_stains #co').val();
      if (num >= 0) {
        num = num * 30;
        const total = '$' + num;
        $('.dropme_stains .pay_co').text(total);
      } else {
        $('.dropme_stains .pay_co').text(0);
      }

      $('.dropme_stains #co').change(function () {
        let num = $('.dropme_stains #co').val();
        if (num >= 0) {
          num = num * 30;
          const total = '$' + num;
          $('.dropme_stains .pay_co').text(total);
        } else {
          $('.dropme_stains .pay_co').text(0);
        }
      });
    } else {
      $('.dropme_stains .pay_co').text(0);
      $('.dropme_stains #co').off('change');
    }
  });

  $('.dropme_stains .wed').change(function () {
    if ($(this).is(':checked')) {
      $('.dropme_stains #wed').on('change');
      let num = $('.dropme_stains #wed').val();
      if (num >= 0) {
        num = num * 55;
        const total = '$' + num;
        $('.dropme_stains .pay_wed').text(total);
      } else {
        $('.dropme_stains .pay_wed').text(0);
      }

      $('.dropme_stains #wed').change(function () {
        let num = $('.dropme_stains #wed').val();
        if (num >= 0) {
          num = num * 55;
          const total = '$' + num;
          $('.dropme_stains .pay_wed').text(total);
        } else {
          $('.dropme_stains .pay_wed').text(0);
        }
      });
    } else {
      $('.dropme_stains .pay_wed').text(0);
      $('.dropme_stains #wed').off('change');
    }
  });

  $('.dropme_stains .dev').change(function () {
    if ($(this).is(':checked')) {
      $('.dropme_stains #dev').on('change');
      let num = $('.dropme_stains #dev').val();
      if (num >= 0) {
        num = num * 28;
        const total = '$' + num;
        $('.dropme_stains .pay_dev').text(total);
      } else {
        $('.dropme_stains .pay_dev').text(0);
      }

      $('.dropme_stains #dev').change(function () {
        let num = $('.dropme_stains #dev').val();
        if (num >= 0) {
          num = num * 28;
          const total = '$' + num;
          $('.dropme_stains .pay_dev').text(total);
        } else {
          $('.dropme_stains .pay_dev').text(0);
        }
      });
    } else {
      $('.dropme_stains .pay_dev').text(0);
      $('.dropme_stains #dev').off('change');
    }
  });

  $('.dropme_stains .cot').change(function () {
    if ($(this).is(':checked')) {
      $('.dropme_stains #cot').on('change');
      let num = $('#cot').val();
      if (num >= 0) {
        num = num * 18;
        const total = '$' + num;
        $('.dropme_stains .pay_cot').text(total);
      } else {
        $('.dropme_stains .pay_cot').text(0);
      }

      $('.dropme_stains #cot').change(function () {
        let num = $('.dropme_stains #cot').val();
        if (num >= 0) {
          num = num * 18;
          const total = '$' + num;
          $('.dropme_stains .pay_cot').text(total);
        } else {
          $('.dropme_stains .pay_cot').text(0);
        }
      });
    } else {
      $('.dropme_stains .pay_cot').text(0);
      $('.dropme_stains #cot').off('change');
    }
  });

  $('.dropme_iron .jean').change(function () {
    if ($(this).is(':checked')) {
      $('.dropme_iron #jean').on('change');
      let num = $('.dropme_iron #jean').val();
      if (num >= 0) {
        num = num * 2;
        const total = '$' + num;
        $('.dropme_iron .pay_jean').text(total);
      } else {
        $('.dropme_iron .pay_jean').text(0);
      }

      $('.dropme_iron #jean').change(function () {
        let num = $('.dropme_iron #jean').val();
        if (num >= 0) {
          num = num * 2;
          const total = '$' + num;
          $('.dropme_iron .pay_jean').text(total);
        } else {
          $('.dropme_iron .pay_jean').text(0);
        }
      });
    } else {
      $('.dropme_iron .pay_jean').text(0);
      $('.dropme_iron #jean').off('change');
    }
  });

  $('.dropme_iron .bed').change(function () {
    if ($(this).is(':checked')) {
      $('.dropme_iron #bed').on('change');
      let num = $('.dropme_iron #bed').val();
      if (num >= 0) {
        num = num * 0;
        const total = '$' + num;
        $('.dropme_iron .pay_bed').text(total);
      } else {
        $('.dropme_iron .pay_bed').text(0);
      }

      $('.dropme_iron #bed').change(function () {
        let num = $('.dropme_iron #bed').val();
        if (num >= 0) {
          num = num * 0;
          const total = '$' + num;
          $('.dropme_iron .pay_bed').text(total);
        } else {
          $('.dropme_iron .pay_bed').text(0);
        }
      });
    } else {
      $('.dropme_iron .pay_bed').text(0);
      $('.dropme_iron #bed').off('change');
    }
  });

  $('.dropme_iron .co').change(function () {
    if ($(this).is(':checked')) {
      $('.dropme_iron #co').on('change');
      let num = $('.dropme_iron #co').val();
      if (num >= 0) {
        num = num * 0;
        const total = '$' + num;
        $('.dropme_iron .pay_co').text(total);
      } else {
        $('.dropme_iron .pay_co').text(0);
      }

      $('.dropme_iron #co').change(function () {
        let num = $('.dropme_iron #co').val();
        if (num >= 0) {
          num = num * 0;
          const total = '$' + num;
          $('.dropme_iron .pay_co').text(total);
        } else {
          $('.dropme_iron .pay_co').text(0);
        }
      });
    } else {
      $('.dropme_iron .pay_co').text(0);
      $('.dropme_iron #co').off('change');
    }
  });

  $('.dropme_iron .wed').change(function () {
    if ($(this).is(':checked')) {
      $('.dropme_iron #wed').on('change');
      let num = $('.dropme_iron #wed').val();
      if (num >= 0) {
        num = num * 5;
        const total = '$' + num;
        $('.dropme_iron .pay_wed').text(total);
      } else {
        $('.dropme_iron .pay_wed').text(0);
      }

      $('.dropme_iron #wed').change(function () {
        let num = $('.dropme_iron #wed').val();
        if (num >= 0) {
          num = num * 5;
          const total = '$' + num;
          $('.dropme_iron .pay_wed').text(total);
        } else {
          $('.dropme_iron .pay_wed').text(0);
        }
      });
    } else {
      $('.dropme_iron .pay_wed').text(0);
      $('.dropme_iron #wed').off('change');
    }
  });
});
