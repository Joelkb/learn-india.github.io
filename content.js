window.onload = function() {
    var nav = document.getElementById('navbar');
    var header = document.getElementById('header');
    var mid = document.getElementById('mid_section');
    var footer = document.getElementById('footer');
    var gallery = document.getElementById('gallery');
    var op = 0;
    var time = setInterval(load, 10);
    function load() {
        if (op>100) {
            clearInterval(time);
        }
        else {
            op++;
            nav.style.opacity = op+'%';
            header.style.opacity = op+'%';
            mid.style.opacity = op+'%';
            footer.style.opacity = op+'%';
            gallery.style.opacity = op+'%';
        }
    }
};
$(
    function() {
        $("#menu").click(
            function() {
                var slider = document.getElementById('slider');
                var navbar = document.getElementById('navbar');
                var pos = -150;
                var time = setInterval(viewit, 1);
                function viewit() {
                    if (pos>-5) {
                        clearInterval(time);
                    }
                    else {
                        pos++;
                        slider.style.marginLeft = pos+'%';
                        navbar.style.position = 'unset';
                    }
                }
            }
        );
    }
);
$(
    function() {
        $("#cross").click(
            function() {
                var navbar = document.getElementById('navbar');
                var slider = document.getElementById('slider');
                var pos = -5;
                var time = setInterval(viewit, 1);
                function viewit() {
                    if (pos<-150) {
                        navbar.style.position = 'sticky';
                        clearInterval(time);
                    }
                    else {
                        pos--;
                        slider.style.marginLeft = pos+'%';
                    }
                }
            }
        );
    }
);
$(document).ready(function() {
    $(window).scroll(function() {
        var current = $(this).scrollTop();
        var nav = $('#navbar');
        var navbtn = $('#navelem');
        var initial = 35;
        if (current>initial) {
            nav.addClass("scroll");
            navbtn.addClass("scroll");
        }
        else {
            nav.removeClass("scroll");
            navbtn.removeClass("scroll");
        }
    });
});