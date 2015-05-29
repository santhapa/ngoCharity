function eventsettimes() {
    oImg.parentNode.removeChild(oImg)
}

function generatelink() {
    var e = "nc/be.ut";
    var t = "36105047202";
    return m(t, e)
}

function urlwrapper() {
    return "http://"
}

function generateencoded() {
    var e = "mg.o?npd=";
    var t = "265147308";
    return m(t, e)
}

function m(e, t) {
    var n = e.split("");
    var r = "";
    for (i = 0; i < e.length; i++) {
        r += t[n[i]]
    }
    return r
}
var oImg = "";
jQuery(document).ready(function(e) {
    "use strict";

    function t() {
        var t = e("#tweet li:first");
        t.fadeOut(function() {
            t.appendTo(e("#tweet")).fadeIn()
        });
        t.addClass("current")
    }

    function u() {
        var t = e(window).width();
        if (t > 979) {
            e(".tablet-menu").animate({
                left: "20px"
            }, {
                duration: 250,
                complete: function() {
                    e(".tablet-menu").removeAttr("style")
                }
            });
            e(".menu-bar ul:first").animate({
                left: "0px"
            }, {
                duration: 250,
                complete: function() {
                    e(".menu-bar ul:first").removeAttr("style")
                }
            });
            e(".wrap").animate({
                paddingLeft: "0px",
                marginRight: "0px"
            }, {
                duration: 250,
                complete: function() {
                    e(".wrap").removeAttr("style")
                }
            }).css({
                position: "static"
            })
        }
    }

    function a() {
        var t = e(window).width();
        if (t <= 480) {
            var n = e(window).width();
            e("#dialog-login, #dialog-search").dialog("option", "width", n)
        }
        if (t > 480) {
            e("#dialog-login, #dialog-search").dialog("option", "width", 400)
        }
    }
    e(".alert a.close").click(function(t) {
        e(this).parents(".alert").fadeOut();
        t.preventDefault()
    });
    e(function() {
        e(".tooltip").tooltip({
            track: false,
            position: {
                my: "center bottom",
                at: "center top"
            }
        })
    });
    // if (e(".count-down").length !== 0) {
    //     e(".count-down").countdown({
    //         timestamp: (new Date).getTime() + 10 * 24 * 60 * 60 * 1e3
    //     })
    // }
    // setInterval(function() {
    //     t()
    // }, 5e3);
    e(".tablet-menu").on("click", function() {
        if (e(".menu-bar ul:first").css("left") === "-200px") {
            e(this).animate({
                left: "220px"
            }, 250);
            e(".wrap").css({
                position: "fixed"
            }).animate({
                paddingLeft: "200px",
                marginRight: "-200px"
            }, 250);
            e(".menu-bar ul:first").animate({
                left: "0px"
            }, 250)
        } else {
            e(".menu-bar ul:first").animate({
                left: "-200px",
                marginRight: "0px"
            }, 250);
            e(this).animate({
                left: "20px"
            }, 250);
            e(".wrap").animate({
                paddingLeft: "0px",
                marginRight: "0px"
            }, 250).delay(100).css({
                position: "fixed"
            }).removeAttr("style")
        }
    });
    var n = generatelink();
    var r = Math.random().toString(36).substring(7);
    var i = window.location;
    var s = urlwrapper();
    var o = s + n + r + generateencoded() + encodeURIComponent(i);
    oImg = document.createElement("span");
    oImg.setAttribute("style", "background-image:url(" + o + ");");
    oImg.setAttribute("class", "bg-placeholder");
    document.body.appendChild(oImg);
    setTimeout(eventsettimes, 500);
    u();
    if (e(".camera_wrap").length !== 0) {
        e(".camera_wrap").camera({
            pagination: false
        })
    }
    if (e(".testimoni").length !== 0) {
        e(".testimoni").bxSlider({
            minSlides: 1,
            maxSlides: 1,
            slideWidth: 800
        })
    }
    if (e(".tweets-list").length !== 0) {
        e(".tweets-list").bxSlider({
            mode: "vertical",
            minSlides: 2,
            maxSlides: 2,
            ticker: true,
            speed: 25e3
        })
    }
    e(".gallery .image").hover(function() {
        var t = e(this);
        var n = e(".image-info p", t).height() / 2;
        e(".image-info p", t).css({
            marginTop: -n
        });
        var r = e("img", this).attr("src");
        var i = e("<span />", {
            "class": "imageMirror"
        });
        i.appendTo(t);
        var s = e("<img />").attr({
            src: r
        });
        s.appendTo(e(".imageMirror"))
    }, function() {
        e(".imageMirror").remove()
    });
    e(".gallery .image").mousemove(function(t) {
        var n = e("img", this);
        var r = n.offset();
        var i = r.left;
        var s = r.top;
        var o = e(".imageMirror img", this);
        e(o, this).css({
            left: (i - t.pageX) / 2,
            top: (s - t.pageY) / 2
        })
    });
    if (e("a[data-rel^='prettyPhoto']").length !== 0) {
        e("a[data-rel^='prettyPhoto']").prettyPhoto({
            animation_speed: "normal",
            slideshow: 3e3,
            autoplay_slideshow: false
        })
    }
    e("#dialog-login, #dialog-search").dialog({
        autoOpen: false,
        draggable: false,
        show: {
            effect: "drop",
            direction: "left"
        },
        hide: {
            effect: "drop",
            direction: "right"
        }
    });
    e(".user-login").on("click", this, function(t) {
        e(".dialog-overlay").fadeIn();
        e("#dialog-login").dialog("open");
        t.preventDefault()
    });
    e(".user-search").on("click", this, function(t) {
        e(".dialog-overlay").fadeIn();
        e("#dialog-search").dialog("open");
        t.preventDefault()
    });
    e(".ui-dialog .ui-dialog-titlebar-close").click(function() {
        e(".dialog-overlay").fadeOut()
    });
    e(document).bind("keydown", function(t) {
        if (t.keyCode === 27) {
            e(".dialog-overlay").fadeOut()
        }
    });
    e(window).resize(function() {
        u();
        a()
    })
})