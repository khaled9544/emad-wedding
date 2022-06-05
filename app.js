$(document).ready(function () {
  if (jQuery) {
    var countDownDate = new Date("Jul 29, 2022 20:30:00").getTime();

    var map =
      [
        "&\#1632;", "&\#1633;", "&\#1634;", "&\#1635;", "&\#1636;",
        "&\#1637;", "&\#1638;", "&\#1639;", "&\#1640;", "&\#1641;"
      ];

    function getArabicNumbers(str) {
      var newStr = "";

      str = String(str);

      for (i = 0; i < str.length; i++) {
        newStr += map[parseInt(str.charAt(i))];
      }

      return newStr;
    }

    var x = setInterval(function () {

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


    document.getElementById("wedding-date").innerHTML = `${getArabicNumbers(29)} يوليو <br>,${getArabicNumbers(2022)}`;


    function getUrlVars() {
      // console.log("hello")
      var vars = [], hash;
      var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
      for (var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
      }
      return vars;
    }

    var person = getUrlVars()["any"];
    if (person) {
      document.getElementById("number-of-invitees").innerHTML = `${getArabicNumbers(parseInt(person[3]))}`;
    } else {
      document.getElementById("number-of-invitees").innerHTML = `${getArabicNumbers(6)}`;
    }

    // this.interval = setInterval(() => {
    //   if(document.readyState === 'complete') {
    //     // document.getElementById('main-container').style.display = 'block';
    //     document.getElementById('splash-screen').style.display = 'none';
    //     clearInterval(this.interval);
    //   }
    // }, 2000);


    // Handler for .ready() called.
    document.getElementById('splash-screen').style.display = 'none';
  } else {
    document.getElementById('splash-screen').style.display = 'flex';
  }

});