$(document).ready(function () {
  /***************** Waypoints ******************/

  $(".wp1").waypoint(
    function () {
      $(".wp1").addClass("animated fadeInLeft");
    },
    {
      offset: "75%",
    }
  );
  $(".wp2").waypoint(
    function () {
      $(".wp2").addClass("animated fadeInRight");
    },
    {
      offset: "75%",
    }
  );
  $(".wp3").waypoint(
    function () {
      $(".wp3").addClass("animated fadeInLeft");
    },
    {
      offset: "75%",
    }
  );
  $(".wp4").waypoint(
    function () {
      $(".wp4").addClass("animated fadeInRight");
    },
    {
      offset: "75%",
    }
  );
  $(".wp5").waypoint(
    function () {
      $(".wp5").addClass("animated fadeInLeft");
    },
    {
      offset: "75%",
    }
  );
  $(".wp6").waypoint(
    function () {
      $(".wp6").addClass("animated fadeInRight");
    },
    {
      offset: "75%",
    }
  );
  $(".wp7").waypoint(
    function () {
      $(".wp7").addClass("animated fadeInUp");
    },
    {
      offset: "75%",
    }
  );
  $(".wp8").waypoint(
    function () {
      $(".wp8").addClass("animated fadeInLeft");
    },
    {
      offset: "75%",
    }
  );
  $(".wp9").waypoint(
    function () {
      $(".wp9").addClass("animated fadeInRight");
    },
    {
      offset: "75%",
    }
  );

  /***************** Initiate Flexslider ******************/
  $(".flexslider").flexslider({
    animation: "slide",
  });

  /***************** Initiate Fancybox ******************/

  $(".single_image").fancybox({
    padding: 4,
  });

  $(".fancybox").fancybox({
    padding: 4,
    width: 1000,
    height: 800,
  });

  /***************** Tooltips ******************/
  $('[data-toggle="tooltip"]').tooltip();

  /***************** Nav Transformicon ******************/

  /* When user clicks the Icon */
  $(".nav-toggle").click(function () {
    $(this).toggleClass("active");
    $(".header-nav").toggleClass("open");
    event.preventDefault();
  });
  /* When user clicks a link */
  $(".header-nav li a").click(function () {
    $(".nav-toggle").toggleClass("active");
    $(".header-nav").toggleClass("open");
  });

  /***************** Header BG Scroll ******************/

  $(function () {
    $(window).scroll(function () {
      var scroll = $(window).scrollTop();

      if (scroll >= 20) {
        $("section.navigation").addClass("fixed");
        $("header").css({
          "border-bottom": "none",
          padding: "35px 0",
        });
        $("header .member-actions").css({
          top: "26px",
        });
        $("header .navicon").css({
          top: "34px",
        });
      } else {
        $("section.navigation").removeClass("fixed");
        $("header").css({
          "border-bottom": "solid 1px rgba(255, 255, 255, 0.2)",
          padding: "50px 0",
        });
        $("header .member-actions").css({
          top: "41px",
        });
        $("header .navicon").css({
          top: "48px",
        });
      }
    });
  });
  /***************** Smooth Scrolling ******************/

  $(function () {
    $("a[href*=#]:not([href=#])").click(function () {
      if (
        location.pathname.replace(/^\//, "") ===
          this.pathname.replace(/^\//, "") &&
        location.hostname === this.hostname
      ) {
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        if (target.length) {
          $("html,body").animate(
            {
              scrollTop: target.offset().top - 90,
            },
            2000
          );
          return false;
        }
      }
    });
  });

  /********************** Add to Calendar **********************/
  var myCalendar = createCalendar({
    options: {
      class: "",
      // You can pass an ID. If you don't, one will be generated for you
      id: "",
    },
    data: {
      // Event title
      title: "Laura and Antonis' Wedding",

      // Event start date
      start: new Date("Jul 07, 2023 18:00"),

      // Event duration (IN MINUTES)
      // duration: 120,

      // You can also choose to set an end time
      // If an end time is set, this will take precedence over duration
      end: new Date("Jul 08, 2023 08:00"),

      // Event Address
      address: "Kokotos Estate, Stamata 14575",

      // Event Description
      description:
        "We can't wait to see you on our big day! For any queries or issues, please contact us on +41788045944.",
    },
  });

  $("#add-to-cal").html(myCalendar);

  /********************** RSVP Wedding **********************/
  $("#rsvp-wedding-form").on("submit", function (e) {
    e.preventDefault();
    var data = $(this).serialize();
    data = data + "&type=wedding";
    console.log(data);

    $("#alert-wrapper").html(
      alert_markup(
        "info",
        "<strong>Just a sec!</strong> We are saving your details."
      )
    );

    $.post(
      "https://script.google.com/macros/s/AKfycbxONEZgemAFLGC7eT5FqS1TYNpWfKTc-sXTjmZbgapD5xqmQZFs2X3Ye7tb-TAUD1PgFA/exec",
      data
    )
      .done(function (data) {
        console.log(data);
        if (data.result === "error") {
          $("#alert-wrapper").html(alert_markup("danger", data.message));
        } else {
          $("#alert-wrapper").html("");
          $("#rsvp-wedding-modal").modal("show");
        }
      })
      .fail(function (data) {
        console.log(data);
        $("#alert-wrapper").html(
          alert_markup(
            "danger",
            "<strong>Sorry!</strong> There is some issue with the server. "
          )
        );
      });
  });

  /********************** RSVP Dance **********************/
  $("#rsvp-dance-form").on("submit", function (e) {
    e.preventDefault();
    var data = $(this).serialize();
    data = data + "&type=dance";
    console.log(data);

    $("#alert-wrapper").html(
      alert_markup(
        "info",
        "<strong>Just a sec!</strong> We are saving your details."
      )
    );

    $.post(
      "https://script.google.com/macros/s/AKfycbxONEZgemAFLGC7eT5FqS1TYNpWfKTc-sXTjmZbgapD5xqmQZFs2X3Ye7tb-TAUD1PgFA/exec",
      data
    )
      .done(function (data) {
        console.log(data);
        if (data.result === "error") {
          $("#alert-wrapper").html(alert_markup("danger", data.message));
        } else {
          $("#alert-wrapper").html("");
          $("#rsvp-dance-modal").modal("show");
        }
      })
      .fail(function (data) {
        console.log(data);
        $("#alert-wrapper").html(
          alert_markup(
            "danger",
            "<strong>Sorry!</strong> There is some issue with the server. "
          )
        );
      });
  });

  /********************** RSVP Tour **********************/
  $("#rsvp-tour-form").on("submit", function (e) {
    e.preventDefault();
    var data = $(this).serialize();
    data = data + "&type=tour";
    console.log(data);

    $("#alert-wrapper").html(
      alert_markup(
        "info",
        "<strong>Just a sec!</strong> We are saving your details."
      )
    );

    $.post(
      "https://script.google.com/macros/s/AKfycbxONEZgemAFLGC7eT5FqS1TYNpWfKTc-sXTjmZbgapD5xqmQZFs2X3Ye7tb-TAUD1PgFA/exec",
      data
    )
      .done(function (data) {
        console.log(data);
        if (data.result === "error") {
          $("#alert-wrapper").html(alert_markup("danger", data.message));
        } else {
          $("#alert-wrapper").html("");
          $("#rsvp-tour-modal").modal("show");
        }
      })
      .fail(function (data) {
        console.log(data);
        $("#alert-wrapper").html(
          alert_markup(
            "danger",
            "<strong>Sorry!</strong> There is some issue with the server. "
          )
        );
      });
  });

  /********************** RSVP Tavern **********************/
  $("#rsvp-tavern-form").on("submit", function (e) {
    e.preventDefault();
    var data = $(this).serialize();
    data = data + "&type=tavern";
    console.log(data);

    $("#alert-wrapper").html(
      alert_markup(
        "info",
        "<strong>Just a sec!</strong> We are saving your details."
      )
    );

    $.post(
      "https://script.google.com/macros/s/AKfycbxONEZgemAFLGC7eT5FqS1TYNpWfKTc-sXTjmZbgapD5xqmQZFs2X3Ye7tb-TAUD1PgFA/exec",
      data
    )
      .done(function (data) {
        console.log(data);
        if (data.result === "error") {
          $("#alert-wrapper").html(alert_markup("danger", data.message));
        } else {
          $("#alert-wrapper").html("");
          $("#rsvp-tavern-modal").modal("show");
        }
      })
      .fail(function (data) {
        console.log(data);
        $("#alert-wrapper").html(
          alert_markup(
            "danger",
            "<strong>Sorry!</strong> There is some issue with the server. "
          )
        );
      });
  });
});

/********************** Extras **********************/

// Google map
function initMap() {
  var location = { lat: 22.5932759, lng: 88.27027720000001 };
  var map = new google.maps.Map(document.getElementById("map-canvas"), {
    zoom: 15,
    center: location,
    scrollwheel: false,
  });

  var marker = new google.maps.Marker({
    position: location,
    map: map,
  });
}

function initBBSRMap() {
  var la_fiesta = { lat: 20.305826, lng: 85.85480189999998 };
  var map = new google.maps.Map(document.getElementById("map-canvas"), {
    zoom: 15,
    center: la_fiesta,
    scrollwheel: false,
  });

  var marker = new google.maps.Marker({
    position: la_fiesta,
    map: map,
  });
}

// alert_markup
function alert_markup(alert_type, msg) {
  return (
    '<div class="alert alert-' +
    alert_type +
    '" role="alert">' +
    msg +
    '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span>&times;</span></button></div>'
  );
}
