// $("#mygallery").justifiedGallery();

var countDownDate = new Date("Jul 29, 2022 20:30:00").getTime();

var map =
[
"&\#1632;","&\#1633;","&\#1634;","&\#1635;","&\#1636;",
"&\#1637;","&\#1638;","&\#1639;","&\#1640;","&\#1641;"
];

function getArabicNumbers(str)
{
    var newStr = "";

    str = String(str);

    for(i=0; i<str.length; i++)
    {
        newStr += map[parseInt(str.charAt(i))];
    }

    return newStr;
}

var x = setInterval(function() {

  var now = new Date().getTime();
    
  var distance = countDownDate - now;
    
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  document.getElementById("timer").innerHTML = `<span class='hours'>${getArabicNumbers(hours)}</span> `
  + `<span class='minutes'>${getArabicNumbers(minutes)}</span>` + `<span class='seconds'>${getArabicNumbers(seconds)}</span>`;

  document.getElementById("remaining-days").innerHTML = `${getArabicNumbers(days)}`
    
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "EXPIRED";
  }
}, 1000);


// $("#lightgallery")
//   .justifiedGallery({
//     captions: false,
//     lastRow: "hide",
//     rowHeight: 180,
//     margins: 5
//   })
//   .on("jg.complete", function () {
//     window.lightGallery(
//       document.getElementById("lightgallery"),
//       {
//         autoplayFirstVideo: false,
//         pager: false,
//         galleryId: "nature",
//         // plugins: [lgZoom, lgThumbnail],
//         mobileSettings: {
//           controls: false,
//           showCloseIcon: false,
//           download: false,
//           rotate: false
//         }
//       }
//     );
//   });

const lightbox = new PhotoSwipeLightbox({
  gallery: '#gallery--getting-started',
  children: 'a',
});

lightbox.init();




// console.log(getArabicNumbers(12));