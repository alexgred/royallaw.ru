(function ($) {
  'use strict';

  $.fn.viewportChecker = function (useroptions) {

    // Define options and extend with user
    var options = {
      classToAdd: 'visible',
      offset: 100,
      scrollBox: window
    };
    $.extend(options, useroptions);

    var $elem = this;
    var boxSize = {height: $(options.scrollBox).height(), width: $(options.scrollBox).width()};

    /*
      * Main method
      */
    this.checkElements = function () {
      var viewportStart;
      var viewportEnd;

      // Set vars to check
      if (!options.scrollHorizontal) {
        viewportStart = Math.max(
          $('html').scrollTop(),
          $('body').scrollTop(),
          $(window).scrollTop()
        );
        viewportEnd = (viewportStart + boxSize.height);
      }
      else {
        viewportStart = Math.max(
          $('html').scrollLeft(),
          $('body').scrollLeft(),
          $(window).scrollLeft()
        );
        viewportEnd = (viewportStart + boxSize.width);
      }

      // Loop through all given dom elements
      $elem.each(function () {
        var $obj = $(this);
        var objOptions = {};
        var attrOptions = {};

        if ($obj.data('vp-add-class')) {
          attrOptions.classToAdd = $obj.data('vp-add-class');
        }
        if ($obj.data('vp-offset')) {
          attrOptions.offset = $obj.data('vp-offset');
        }

        $.extend(objOptions, options);
        $.extend(objOptions, attrOptions);

        // If class already exists; quit
        if ($obj.data('vp-animated')) {
          return;
        }

        // Check offset is percentage based
        if (String(objOptions.offset).indexOf('%') > 0) {
          objOptions.offset = (parseInt(objOptions.offset) / 100) * boxSize.height;
        }

        // Get the raw start and end positions
        var rawStart = $obj.offset().top;

        // Add the defined offset
        var elemStart = Math.round(rawStart) + objOptions.offset;
        var elemEnd = elemStart + $obj.height();

        // Add class if in viewport
        if ((elemStart < viewportEnd) && (elemEnd > viewportStart)) {
          $obj.addClass(objOptions.classToAdd);
          $obj.data('vp-animated', true);
        }
      });
    };

    // Select events
    if ('ontouchstart' in window || 'onmsgesturechange' in window) {
      // Device with touchscreen
      $(document).bind('touchmove MSPointerMove pointermove', this.checkElements);
    }

    $(options.scrollBox).bind('load scroll', this.checkElements);

    $(window).resize(function (e) {
      boxSize = {height: $(options.scrollBox).height(), width: $(options.scrollBox).width()};
      $elem.checkElements();
    });

    this.checkElements();

    return this;
  };

})(jQuery);

$(document).ready(function() {
  
  // affix
  $('.navbar').affix({
    offset: {
      top: 20
    }
  });

  // anchor
  $('ul.nav a.anchor').on('click', function (event) {
    event.preventDefault();
    
    var id  = $(this).attr('href');
    var top = $(id).offset().top - 80;

		$('body, html').animate({
      scrollTop: top
    }, 600);
  });


  //Scroll to top
  var windowBottom = $('body').height() - $(window).height() - 100;

  $(window).scroll(function () {

    if ($(window).scrollTop() >= windowBottom) {
      $('.scroll-to-top').fadeIn(300);
    }
    else {
      $('.scroll-to-top').fadeOut(300);
    }
  });

  $('.scroll-to-top').click(function () {
    $('body, html').animate({
      scrollTop: 0
    }, 400);
  });


  // Mail
  $('.form-contacts').submit(function(event) {
    var name = $(this).find('input.name').val();
    var phone = $(this).find('input.phone').val();
    var email = $(this).find('input.email').val();
    var question = $(this).find('textarea.question').val();
    var form = $(this).attr('id');

    $.ajax({
      type: "POST",
      url: "/mail.php",
      data: { name: name, phone: phone, email: email, form: form, question: question },
      success: function(data){
        $('.region-alert').append('<div class="alert alert-success alert-dismissible" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button><span class="glyphicon glyphicon-ok"></span>Спасибо! Ваша заявка принята.</div>');
      }
    });


    return false;
  });

});
