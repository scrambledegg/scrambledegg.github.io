$(function(){var offset=300,offset_opacity=1200,scroll_top_duration=700,$backToTop=$('#back-to-top');$shareNav=$('#share-nav');$(window).scroll(function(){if($(this).scrollTop()>offset){$backToTop.fadeIn();$shareNav.fadeIn();}else{$backToTop.fadeOut();$backToTop.removeClass('btt-fade-out');$shareNav.fadeOut();}
if($(this).scrollTop()>offset_opacity){$backToTop.addClass('btt-fade-out');}});$backToTop.on('click',function(event){event.preventDefault();$('body,html').animate({scrollTop:0,},scroll_top_duration);});});