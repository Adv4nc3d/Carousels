# License
BSD 3-Clause License

Copyright (c) 2021, Adv4nc3d
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this
   list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright notice,
   this list of conditions and the following disclaimer in the documentation
   and/or other materials provided with the distribution.

3. Neither the name of the copyright holder nor the names of its
   contributors may be used to endorse or promote products derived from
   this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.



# General
Carousel and container types as used by Netflix, Disney+, Amazon Video and more.<br>
All with responsive design including mouse and touch handling.<br>
Made with Html, CSS and jQuery.

- Slide Carousel,
- Strip Carousel &
- Top Five


# Slide-Carousel
### Main includes
```html
<!-- JS -->
<script src="/scripts/slide.js"></script>

<!-- CSS -->
<link rel="stylesheet" href="/scripts/slide.css">
```

### HTML example
```html
<!-- Wrapper -->
<div class="wrapper noselect">

   <!-- Slide Carousel -->
   <div class="slide-carousel" id="one">
     <div class="arrow-left">&lsaquo;</div>
     <div class="arrow-right">&rsaquo;</div>

     <div class="slides">
       <div class="slide" id="slide1"><span class="title"></span></div>
       <div class="slide" id="slide2"><span class="title"></span></div>
       ...
     </div>

     <div class="auto-play">
       <i class="fas fa-play" id="play-slider"></i>
       <i class="fas fa-pause" id="pause-slider"></i>
     </div>
     <div class="dots"></div>
   </div>
   
</div>
```

### Preview

![Alt text](/slide/images/slide_car.png?raw=true "Slide Carousel")


# Strip-Carousel
### Main includes
```html
<!-- JS -->
<script src="/scripts/strip.js"></script>

<!-- CSS -->
<link rel="stylesheet" href="/scripts/strip.css">
```

### HTML example
```html
<!-- Wrapper -->
<div class="wrapper noselect">

   <!-- Strip Carousel (Most Viewed) -->
   <span><a href="#">Most Viewed</a></span>
   <div class="strip-carousel" id="mostviewed">
     <div class="arrow-left">&lsaquo;</div>
     <div class="arrow-right">&rsaquo;</div>

     <div class="frames">
       <a href="#"><div class="frame"></div></a>
       <a href="#"><div class="frame"></div></a>
       <a href="#"><div class="frame"></div></a>
       <a href="#"><div class="frame"></div></a>
       <a href="#"><div class="frame"></div></a>
       ...
     </div>
   </div>

   <!-- Strip Carousel (Top Ten) -->
   <span><a href="#">Top Ten</a></span>
   <div class="strip-carousel" id="topten">
     <div class="arrow-left">&lsaquo;</div>
     <div class="arrow-right">&rsaquo;</div>

     <div class="frames">
       <a href="#"><div class="frame"></div></a>
       <a href="#"><div class="frame"></div></a>
       <a href="#"><div class="frame"></div></a>
       <a href="#"><div class="frame"></div></a>
       <a href="#"><div class="frame"></div></a>
       ...
     </div>
   </div>

</div>
```


### Preview

![Alt text](/strip/images/strip_car.png?raw=true "Strip Carousel")


# Top Five
### Main includes
```html
 <!-- JS -->
 <script src="/scripts/topfive.js"></script>

 <!-- CSS -->
 <link rel="stylesheet" href="/scripts/topfive.css">
```

### HTML example
```html
<!-- Wrapper -->
<div class="wrapper noselect">

   <!-- Top Five -->
   <div class="topfive">

     <!-- 1. Marvel -->
     <a href="#">
       <div class="frame" id="topone">        
         <img src="https://advanced-design.net/mgc/images/msf-logo.png" alt="marvel-logo">

         <video id="marvel_bg" class="bgvideo" preload autoplay loop playsinline muted>
           <source src="https://advanced-design.net/mgc/videos/marvel_bg.mp4" type="video/mp4">
         </video>
       </div>
     </a>

     <!-- 2. Star Wars -->
     <a href="#">
       <div class="frame" id="toptwo">
         <img src="https://advanced-design.net/mgc/images/swgoh_logo.png" alt="starwars-logo">

         <video id="starwars_bg" class="bgvideo" preload autoplay loop playsinline muted>
           <source src="https://advanced-design.net/mgc/videos/swgoh.mp4" type="video/mp4">
         </video>
       </div>
     </a>

     <a href="#"><div class="frame" id="topthree"></div></a>
     <a href="#"><div class="frame" id="topfour"></div></a>
     <a href="#"><div class="frame" id="topfive"></div></a>
   </div>
   <!-- end of Top Five -->

</div>
```


### Preview

![Alt text](/topfive/images/top_five.png?raw=true "Top Five")

