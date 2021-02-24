$(document).ready(function()
{  
  /*
    Strip Carousel Display
  */

  /* set Frame size */
  function set_frame_size()
  {    
    // Browser Window width
    var browser_width = $(window).width();

    // Frame width in % divided by document width
    var calc_frame_width = 0;
    var calc_frame_height = 0;

    // Responsive view
    /* Smartphones */
    if (browser_width < 768)
    {
      calc_frame_width = ((browser_width - ((browser_width/100)*20)) / 2) - 17.5;
      calc_frame_height = (browser_width / 100) * 30;
    }
    /* Tablets (potrait) */
    else if (browser_width > 768 && browser_width < 1024)
    {
      calc_frame_width = ((browser_width - ((browser_width/100)*10)) / 3) - 18;
      calc_frame_height = (browser_width / 100) * 19;
    }
    /* Tablets (landscape) */
    else if (browser_width > 1024 && browser_width < 1440)
    {
      calc_frame_width = ((browser_width - ((browser_width/100)*10)) / 4) - 19;
      calc_frame_height = (browser_width / 100) * 15;
    }
    /* Desktop and above */
    else if (browser_width > 1440)
    {
      calc_frame_width = ((browser_width - ((browser_width/100)*10)) / 5) - 20;
      calc_frame_height = (browser_width / 100) * 12.5;
    }

    // set Frame width and margin
    $(".strip-carousel .frames .frame").css("width", calc_frame_width + "px");
    $(".strip-carousel .frames .frame").css("margin-right", "20px");
    
    // set Carousel height
    $(".strip-carousel").css({
      "height":calc_frame_height,
      "min-height":calc_frame_height
    });
    
    // set Navigation Arrows Height
    var calc_height = (calc_frame_height - ((calc_frame_height/100)*20)) + 20;
    $(".strip-carousel .arrow-left, .strip-carousel .arrow-right").css({
      "height": calc_height+"px",
      "line-height": calc_height-10+"px"
    });
  }

  /* set Carousel width */
  function set_carousel_width()
  {
    $(".strip-carousel .frames").each(function()
    {
      // get Carousel Id
      var carousel_id = $(this).parent().attr("id");

      // Total amount of Frames
      var frames_amount = $(".strip-carousel#" + carousel_id + " .frames .frame").length;

      // get Frame width
      var frame_width = $(".strip-carousel#" + carousel_id + " .frames .frame").width();

      // calculate Carousel width + margin p/Frame
      var carousel_width = (frames_amount * frame_width) + (frames_amount * 20);

      // set Strip Carousel width
      $(".strip-carousel#" + carousel_id + " .frames").css("width", carousel_width + "px");
    });
  }

  /* Frames out of view */
  function frames_out_of_view()
  {
    // Browser Window width
    var browser_width = $(window).width();

    // Frame
    var frame = $(".strip-carousel .frames .frame");

    // Frame width
    var frame_width = frame.width();

    // Frame offsets
    var frame_offset = 0;
    var frame_offset_x = 0;

    // each Frame
    frame.each(function()
    {
      frame_offset = $(this).offset();
      frame_offset_x = frame_offset.left;

      // Frames out Right
      if (((frame_offset_x + frame_width) > browser_width) || (frame_offset_x < 0))
      {
        // out of view
        $(this).css("opacity", "0.5");

        // disable pointer events
        $(this).css("pointer-events", "none");
      }
      else
      {
        // restore opacity
        $(this).css("opacity", "1");

        // enable pointer events
        $(this).css("pointer-events", "auto");
      }
    });
  }

  /* Frames out of view by Id */
  function frames_out_of_view_by_id(carousel_id)
  {
    // Frames out Array(Right, Left)
    var frames_out = [0, 0];

    // Browser Window width
    var browser_width = $(window).width();

    // Frame
    var frame = $(".strip-carousel#"+carousel_id+" .frames .frame");

    // Frame width
    var frame_width = frame.width();

    // Frame offsets
    var frame_offset = 0;
    var frame_offset_x = 0;

    // each Frame
    frame.each(function()
    {
      // Frame offset
      frame_offset = $(this).offset();

      // Frame x offset
      frame_offset_x = frame_offset.left;

      // Right out of view
      if ((frame_offset_x + frame_width) > browser_width)
      {
        frames_out[0]++;
      }
      // Left out of view
      else if (frame_offset_x < 0)
      {
        frames_out[1]++;
      }
    });

    // return Frames out of view
    return frames_out;
  }

  /* Adjust Frames on Resize */
  function adjust_on_resize()
  {
    // get Window width
    var window_width = $(window).width();

    // Strip Carousel Id
    var carousel_id = "";
    
    // Frames margin
    var frames_margin_left = 0;

    // Frame
    var frame = $(".strip-carousel .frames .frame");

    // Frame width
    var frame_width = frame.width();

    // Frames out of view by Id array
    var frames_out;

    // Divide Frame width by Window width
    var result = Math.floor(window_width / frame_width);

    // Adjust Left in Pixels
    var adjust_left = 0;

    // each Strip-Carousel
    $(".strip-carousel").each(function()
    {
      // get Carousel Id
      carousel_id = $(this).attr("id");

      // get Frames out of view by Id
      frames_out = frames_out_of_view_by_id(carousel_id);
      
      frames_margin_left = $(".strip-carousel#"+carousel_id+" .frames").css("margin-left");

      // if more than 1 Frame out Left
      if (frames_out[1] > 0)
      {
        // if more Frames than can be displayed, use result
        if (frames_out[1] >= result)
        {
          adjust_left = (frame_width * result) + (result * 20);
        }
        // rest
        else
        {
          adjust_left = (frame_width * frames_out[1]) + (frames_out[1] * 20);
        }

        // adjust Left
        if (window_width < 768)
        {
          $(".strip-carousel#"+carousel_id+" .frames").css("margin-left", "calc(10% - " + adjust_left + "px)");
        } else {
          $(".strip-carousel#"+carousel_id+" .frames").css("margin-left", "calc( 5% - " + adjust_left + "px)");
        }
      }
      else
      {
        // Beginning of Frame
        if (window_width < 768)
        {
          $(".strip-carousel#"+carousel_id+" .frames").css("margin-left", "10%");
        } else {
          $(".strip-carousel#"+carousel_id+" .frames").css("margin-left", " 5%");
        }
      }
    });
  }



  /*

    Navigation

  */

  /* Navigation Arrows on MouseOver Strip-Carousel */
  function navigation_arrows_mouseover()
  {
    // on Mouse Out
    $(".strip-carousel").mouseout(function()
    {
      // Hide arrows
      $(".strip-carousel .arrow-right, .strip-carousel .arrow-left").hide();
    });

    // on Mouse Over
    $(".strip-carousel").mouseover(function()
    {
      // get Carousel Id
      var carousel_id = $(this).attr("id");

      // Frames out of view by Id
      var frames_out = frames_out_of_view_by_id(carousel_id);

      // Right out of view
      if (frames_out[0] > 0)
      {
        // Show 'right' arrow
        $(".strip-carousel#"+carousel_id+" .arrow-right").show();
      }

      // Left out of view
      if (frames_out[1] > 0)
      {
        // Show 'left' arrow
        $(".strip-carousel#"+carousel_id+" .arrow-left").show();
      }
    });
  } navigation_arrows_mouseover();

  /* Navigation (0 = Right, 1 = Left) */
  function navigation_side(id, side)
  {
    $(".strip-carousel, .strip-carousel .frames, .strip-carousel .frames .frame").css("pointer-events", "none");
    
    // get Window width
    var window_width = $(window).width();

    // get Frame
    var frame = $(".strip-carousel#"+id+" .frames .frame");

    // get Frames out of view by Id
    var frames_out = frames_out_of_view_by_id(id);

    // get Frame width
    var frame_width = frame.width();

    // Divide Frame width by Window width
    var result = Math.floor(window_width / frame_width);

    // Calculate Pixels
    var calc = 0;

    // if more Frames than can be displayed, use result
    if (frames_out[side] >= result)
    {
      calc = (frame_width * result) + (result * 20);
    }
    // rest
    else
    {
      calc = (frame_width * frames_out[side]) + (frames_out[side] * 20);
      
      if (side == 0)
      {
        $(".strip-carousel .arrow-right").hide();
      }
      else if (side == 1)
      {
        $(".strip-carousel .arrow-left").hide();
      }
    }

    // Animation
    if (side == 0)
    {
      $(".strip-carousel#"+id+" .frames").animate({
        marginLeft: "-="+calc+"px"
      }, 750, function() {
        $(".strip-carousel, .strip-carousel .frames, .strip-carousel .frames .frame").css("pointer-events", "auto");
        
        // Navigation Arrows on Mouse Over
        navigation_arrows_mouseover();

        // Frames out of view
        frames_out_of_view();
      });
    }
    else if (side == 1)
    {
      $(".strip-carousel#"+id+" .frames").animate({
        marginLeft: "+="+calc+"px"
      }, 750, function() {
        $(".strip-carousel, .strip-carousel .frames, .strip-carousel .frames .frame").css("pointer-events", "auto");
        
        // Navigation Arrows on Mouse Over
        navigation_arrows_mouseover();

        // Frames out of view
        frames_out_of_view();
      });
    }
  }

  /* Navigation Arrows */
  function navigation_arrows()
  {    
    // Left arrow 'click'
    $(".strip-carousel .arrow-left").click(function(e)
    {      
      // get Strip-Carousel Id
      var id = $(this).parent().attr("id");

      // navigate left
      navigation_side(id, 1);
    });

    // right arrow 'click'
    $(".strip-carousel .arrow-right").click(function(e)
    {      
      // get Strip-Carousel Id
      var id = $(this).parent().attr("id");

      // navigate left
      navigation_side(id, 0);
    });
  } navigation_arrows();

  /* Mouse Navigation */
  function mouse_navigation()
  {
    // Strip-Carousel Frames Container
    var frame = $(".strip-carousel .frames");

    // Strip-Carousel Id
    var carousel_id = "";

    // Mouse axis positions
    var mouse_x_pos = 0;
    var mouse_y_pos = 0;

    // Mouse sensivity
    var mouse_sensivity = 30;

    // Mouse Left click position
    var mouse_x_pos_clicked = 0;
    var mouse_y_pos_clicked = 0;

    // current Frames position
    var cur_frames_pos_x = 0;

    // MouseOver Frames Container
    frame.mouseover(function()
    {
      // Strip-Carousel Id
      carousel_id = $(this).parent().attr("id");
    })
    // MouseOut Frames Container
    .mouseout(function()
    {

    });
    
    // Mouse Move
    frame.mousemove(function(e)
    {
      // Mouse X axis
      mouse_x_pos = e.pageX;

      // Mouse Y axis
      mouse_y_pos = e.pageY;
    });
    
    // Mouse Buttons pressed
    frame.mousedown(function(event)
    {
      // Mouse Left click X position
      mouse_x_pos_clicked = event.pageX;

      // Mouse Left click Y position
      mouse_y_pos_clicked = event.pageY;
      
      event.preventDefault();
    })
    // Mouse Buttons released
    .mouseup(function(event)
    {
      // move Left, scroll Right
      if (mouse_x_pos_clicked > (mouse_x_pos + mouse_sensivity))
      {
        navigation_side(carousel_id, 0);
      }
      // move Right, scroll Left
      else if (mouse_x_pos_clicked < (mouse_x_pos - mouse_sensivity))
      {
        navigation_side(carousel_id, 1);
      }
    });
  } mouse_navigation();

  /* Touch Navigation */
  function touch_navigation()
  {
    // Strip-Carousel Frames Container
    var frames = $(".strip-carousel .frames");
    
    // Strip-Carousel Id
    var carousel_id = "";
    
    // Touch Start positions
    var touchstart_pos_x = 0;
    var touchstart_pos_y = 0;
    
    // Touch Move positions
    var touchmove_pos_x = 0;
    var touchmove_pos_y = 0;
    
    // Touch End positions
    var touchend_pos_x = 0;
    var touchend_pos_y = 0;
    
    // on Touch Start
    frames.on("touchstart", function(e)
    {
      // get Touch Start X position
      touchstart_pos_x = e.touches[0].clientX;
      
      // get Touch Start Y position
      touchstart_pos_y = e.touches[0].clientY;
      
      // get Strip-Carousel Id
      carousel_id = $(this).parent().attr("id");
    })
    // on Touch Move
    .on("touchmove", function(e)
    {
      
    })
    // on Touch End
    .on("touchend", function(e)
    {
      // get Touch End X position
      touchend_pos_x = e.changedTouches[0].clientX - touchstart_pos_x;
      
      // get Touch End Y position
      touchend_pos_y = e.changedTouches[0].clientY - touchstart_pos_y;
      
      if (touchend_pos_x > 30)
      {
        navigation_side(carousel_id, 1);
        e.preventDefault();
      }
      else if (touchend_pos_x < -30)
      {
        navigation_side(carousel_id, 0);
        e.preventDefault();
      }
    });
  } touch_navigation();



  /*

    Strip Carousel Main

  */

  /* main */
  function strip_carousel()
  {
    // Frame size
    set_frame_size();

    // Carousel width
    set_carousel_width();

    // Frames out of View
    frames_out_of_view();

    // Adjust on Resize
    adjust_on_resize();
  } strip_carousel();



  /*

    Window on Resize

  */

  /* on Resize */
  $(window).resize(function()
  {
    // Strip Carousel
    strip_carousel();
  });

  /* END of document.ready */
});
