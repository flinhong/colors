$( document ).ready(function() {
  $("#preloader").fadeOut("slow", function() {
    $(this).remove();
  });

  $('#colors .card, #details .card, #infors .card').fadeIn('slow');

  $('#details .dd-c').peity('donut', {
    fill: ["#0d5661", "#eee"],
    innerRadius: 36,
    radius: 40
  });
  $('#details .dd-m').peity('donut', {
    fill: ["#cb1b45", "#eee"],
    innerRadius: 36,
    radius: 40
  });
  $('#details .dd-y').peity('donut', {
    fill: ["#ffc408", "#eee"],
    innerRadius: 36,
    radius: 40
  });
  $('#details .dd-k').peity('donut', {
    fill: ["#1c1c1c", "#eee"],
    innerRadius: 36,
    radius: 40
  });

  function cmykCircles() {
    $('#colors .dd-c:not(.initialed)').peity('donut', {
      fill: ["#0d5661", "#eee"],
      innerRadius: 14,
      radius: 18
    });
    $('#colors .dd-m:not(.initialed)').peity('donut', {
      fill: ["#cb1b45", "#eee"],
      innerRadius: 14,
      radius: 18
    });
    $('#colors .dd-y:not(.initialed)').peity('donut', {
      fill: ["#ffc408", "#eee"],
      innerRadius: 14,
      radius: 18
    });
    $('#colors .dd-k:not(.initialed)').peity('donut', {
      fill: ["#1c1c1c", "#eee"],
      innerRadius: 14,
      radius: 18
    });
  }
  setTimeout(cmykCircles, 400);

  function hexToRgb(hex) { //https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function(m, r, g, b) {
        return r + r + g + g + b + b;
    });

    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
  }

  // $('#colors .donut').each(function() {
  //   $(this).addClass('initialed')
  // })

  $('#colors .hex-value').each(function () {
    var hex = $(this).text();
    var card = $(this).closest('.card').css('border-color', hex);
  });

  $('#colors .col-2').each(function() {
    var thisE = $(this);
    $(this).on('click', function() {
      $('#colors .change-color').removeClass('change-color');
      changeColor(thisE);
      // var name = $(this).find('.card-title').text();
      // var enname = $(this).find('.en-name').text();
      // var hex = $(this).find('.hex-value').text().toLowerCase();
      // var cmyk_c = $(this).find('.dd-c').text();
      // var cmyk_m = $(this).find('.dd-m').text();
      // var cmyk_y = $(this).find('.dd-y').text();
      // var cmyk_k = $(this).find('.dd-k').text();
      // var rgb = hexToRgb(hex);
      // var rgb_text = 'rgb(' + rgb.r + ', ' + rgb.g + ', ' + rgb.b + ')';
      // var luma = 0.2126 * rgb.r + 0.7152 * rgb.g + 0.0722 * rgb.b;
      // if (luma<150) {
      //   $('body').css('color', '#eee')
      // } else {
      //   $('body').css('color', '#1c1c1c')
      // }
      // if (luma>200) {
      //   $('.main').css('background-color', 'rgba(0, 0, 0, 0.2)')
      // } else {
      //   $('.main').css('background-color', 'transparent')
      // }

      // $('#infors').animate({'opacity': 0}, 400, function () {
      //     $(this).find('.card-title').hide(0).text(name).fadeIn('slow');
      //     $(this).find('.en-name').text(enname).hide(0).fadeIn('slow');
      //     $(this).find('.card-footer p:first').text(hex);
      //     $(this).find('.card-footer p:last').text(rgb_text);
      // }).animate({'opacity': 1}, 400);

      // $('#details .dd-c').text(cmyk_c).change();
      // $('#details .dd-c').prev().text('C: ' + cmyk_c.split('/', 1));
      // $('#details .dd-m').text(cmyk_m).change();
      // $('#details .dd-m').prev().text('M: ' + cmyk_m.split('/', 1));
      // $('#details .dd-y').text(cmyk_y).change();
      // $('#details .dd-y').prev().text('Y: ' + cmyk_y.split('/', 1));
      // $('#details .dd-k').text(cmyk_k).change();
      // $('#details .dd-k').prev().text('K: ' + cmyk_k.split('/', 1));

      // $('#details .bg-r').css('height', rgb.r*100/255+'%');
      // $('#details .bg-g').css('height', rgb.g*100/255+'%');
      // $('#details .bg-b').css('height', rgb.b*100/255+'%');

      // $(this).addClass('change-color');
      // $('body').css('background-color', hex);
    });
  });

  function changeColor(element) {
      var name = $(element).find('.card-title').text();
      var enname = $(element).find('.en-name').text();
      var hex = $(element).find('.hex-value').text().toLowerCase();
      var cmyk_c = $(element).find('.dd-c').text();
      var cmyk_m = $(element).find('.dd-m').text();
      var cmyk_y = $(element).find('.dd-y').text();
      var cmyk_k = $(element).find('.dd-k').text();
      var rgb = hexToRgb(hex);
      var rgb_text = 'rgb(' + rgb.r + ', ' + rgb.g + ', ' + rgb.b + ')';

      var luma = 0.2126 * rgb.r + 0.7152 * rgb.g + 0.0722 * rgb.b;
      if (luma<150) {
        $('body').css('color', '#eee')
      } else {
        $('body').css('color', '#1c1c1c')
      }
      if (luma>200) {
        $('.main').css('background-color', 'rgba(0, 0, 0, 0.2)')
      } else {
        $('.main').css('background-color', 'transparent')
      }
      
      $('#infors').find('.card-title').hide(0).text(name).fadeIn('fast');
      $('#infors').find('.en-name').text(enname).hide(0).fadeIn('fast');
      $('#infors').find('.card-footer p:first').text(hex);
      $('#infors').find('.card-footer p:last').text(rgb_text);

      $('#details .dd-c').text(cmyk_c).change();
      $('#details .dd-c').prev().text('C: ' + cmyk_c.split('/', 1));
      $('#details .dd-m').text(cmyk_m).change();
      $('#details .dd-m').prev().text('M: ' + cmyk_m.split('/', 1));
      $('#details .dd-y').text(cmyk_y).change();
      $('#details .dd-y').prev().text('Y: ' + cmyk_y.split('/', 1));
      $('#details .dd-k').text(cmyk_k).change();
      $('#details .dd-k').prev().text('K: ' + cmyk_k.split('/', 1));

      $('#details .bg-r').css('height', rgb.r*100/255+'%');
      $('#details .bg-g').css('height', rgb.g*100/255+'%');
      $('#details .bg-b').css('height', rgb.b*100/255+'%');

      $(element).addClass('change-color');
      $('body').css('background-color', hex);
  }

  function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
  }
  $('[data-toggle="tooltip"]').tooltip();
  $('#infors .card-footer p').each(function() {
    $(this).on('click', function() {
      copyToClipboard($(this));
      $(this).tooltip('hide').attr('data-original-title', '已复制到剪贴板').tooltip('show');
    }).on('mouseleave', function() {
      $(this).attr('data-original-title', '点击复制');
    });
  });

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  var rad = getRandomInt(0, 250);
  var radE = $('#colors .col-2')[rad];
  changeColor(radE);
});