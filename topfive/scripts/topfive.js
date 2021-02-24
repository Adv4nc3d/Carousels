/**
    Top Five
**/

/* set Top Five Frame size */
function set_topfive_frames_size()
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
    calc_frame_width = ((browser_width - ((browser_width/100)*20)) / 5) - 15;
    calc_frame_height = (browser_width / 100) * 10;
  }
  /* Tablets (potrait) */
  else if (browser_width > 768 && browser_width < 1024)
  {
    calc_frame_width = ((browser_width - ((browser_width/100)*10)) / 5) - 20;
    calc_frame_height = (browser_width / 100) * 10;
  }
  /* Tablets (landscape) */
  else if (browser_width > 1024 && browser_width < 1440)
  {
    calc_frame_width = ((browser_width - ((browser_width/100)*10)) / 5) - 20;
    calc_frame_height = (browser_width / 100) * 10;
  }
  /* Desktop and above */
  else if (browser_width > 1440)
  {
    calc_frame_width = ((browser_width - ((browser_width/100)*10)) / 5) - 20;
    calc_frame_height = (browser_width / 100) * 10;
  }

  // set Frame width
  $(".topfive .frame").css("width", calc_frame_width + "px");

  // set Top Fives Container height
  $(".topfive").css({
    "height":calc_frame_height,
    "min-height":calc_frame_height
  });

  // Top Logo Image size
  $(".topfive .frame img").css({
    "height":calc_frame_height,
    "width":calc_frame_width
  });

  // Top Background Video Frame size
  $(".topfive .frame .bgvideo").css({
    "height":calc_frame_height,
    "width":calc_frame_width
  });
}

/* play Video on Hover */
function play_video_on_hover()
{
  $(".topfive .frame").hover(function()
  {
    // get Frame Id
    var id = $(this).attr("id");
    
    $(".topfive .frame#"+id+" img").hide();

    // Video Container
    var video = $(".topfive .frame#"+id+" video.bgvideo");

    // show Background Video
    video.css("display", "inline-block");

    // Load Video
    /*
    var video_name = $(".topfive .frame#"+id+" video").attr("id");
    var vid = document.getElementById(video_name);
    if (vid)
    {
      vid.pause();
      vid.load();
      vid.play();
    }
    */
  }, function() {
    // hide Background Video
    $("video.bgvideo").hide();
    $(".topfive .frame img").show();
  });
}

/**
    Document Ready
**/

$(document).ready(function()
{
  // set Top Five Frame size
  set_topfive_frames_size();

  // play Background Video on Hover
  play_video_on_hover();

  /* on Resize */
  $(window).resize(function()
  {
    // Top Fives Frames size
    set_topfive_frames_size();
  });
});
