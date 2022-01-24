
// // ********** smooth scroll ************
// const scrollLinks = document.querySelectorAll(".scroll-link");
// scrollLinks.forEach((link) => {
//   link.addEventListener("click", (e) => {
//     // prevent default
//     e.preventDefault();
//     // navigate to specific spot
//     const id = e.currentTarget.getAttribute("href").slice(1);
//     const element = document.getElementById(id);

//     const navHeight = navbar.getBoundingClientRect().height;
//     const containerHeight = linksContainer.getBoundingClientRect().height;
//     const fixedNav = navbar.classList.contains("fixed-nav");
//     let position = element.offsetTop - navHeight;

//     if (!fixedNav) {
//       position = position - navHeight;
//     }
//     if (navHeight > 82) {
//       position = position + containerHeight;
//     }

//     window.scrollTo({
//       left: 0,
//       top: position,
//     });
//     // close
//     linksContainer.style.height = 0;
//   });
// });


$(document).ready(function(){
    $(window).scroll(function () {
      triggerSlideIns( $(this), [ $('div.introduction'), $('div.experience'), $('div.project-container'), $('div.contact-container'), $('footer.footer-content')]);
    });
  });
  
  $.getDocHeight = function(){
    return Math.max(
        $(document).height(),
        $(window).height(),
        document.documentElement.clientHeight
    );
  };
  
  $.getScrollPercentage = function(){
    return 100 * Math.min(
      ($(window).height() + $(window).scrollTop()) / $.getDocHeight(),
      $(window).scrollTop()
      );
  };
  
  var triggerSlideIns = function(t, items) {
    
    for (var i = 0; i < items.length; i++) {
      if((( $.getDocHeight() - $(window).height()) - ( $.getDocHeight() - items[i].offset().top )) <= t.scrollTop()) {
        if(!items[i].hasClass('transitionSlideUp'))
        {
          items[i].addClass('transitionSlideUp');
        }
      } else { 
        items[i].removeClass('transitionSlideUp');
       }
    }
  };


  $(".container li").each(function(i) {
    $(this).delay(100 * i).fadeIn(500);
});