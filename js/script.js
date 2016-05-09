$(document).ready(function() {
    var num = $('.nav>li').length; /* or suitably high number depending on your layout */
    $('#flipbook').booklet({
        width: 1740,
        height: 650,
        closed: true,
        autoCenter: true,
        pagePadding: 0,
        arrows: true,
        hover: false,
        pageNumbers: false,
        change: function(event, data) {
            switch (data.index) {
                case 0:
                    $('#page-1').tab('show');
                    $('#firstpage_caption ').show();
                    $('#generic_caption').hide();
                    break;

                default:
                    $('#page-' + data.index).tab('show');
                    $('#firstpage_caption ').hide();
                    $('#generic_caption').show();
                    break;
            }

        }
    });
    $(".healthcare_resource a").fancybox({
        openEffect: 'elastic',
        closeEffect: 'elastic',
        height: 824,
        iframe: {
            preload: false
        },
    });
    $('.nav>li').each(function(i, item) {
        $(item).css('z-index', num - i);
    });
    $('img').bind('contextmenu', function(e) {
        return false;
    });
    $('img').on('dragstart', function(event) {
        event.preventDefault();
    });
    $('.nav a').click(function(e) {
        if ($(this).attr('href') == "#home") {
            $(".full").css("background", "white");
            $('#home_button').css("opacity", "0");
            $('li#sublevel_button').css("opacity", "0");

        } else {
            $('#home_button').css("opacity", "1");
            if ($(this).attr('href') != "#healthcare_resource") {
                $(".full").css("background", "url('img/background.jpg') no-repeat center center fixed");
                $('li#sublevel_button').css("opacity", "1");
                e.preventDefault();
                $('#flipbook').booklet("gotopage", $(this).data('page'));
            } else {
                $('li#sublevel_button').css("opacity", "0");
                $(".full").css("background", "white");

            }
        }
    })

});
