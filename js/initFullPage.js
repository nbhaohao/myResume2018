!function() {
    $('#fullpage').fullpage({
        scrollingSpeed: 500,
        sectionsColor: ['#0798ec', 'rgb(75, 196, 212)', '#fec401', '#5c869a'],
        loopBottom: true,
        menu: '#slideCircleMenu',
        lockAnchors: false,
        navigation: true,
        navigationPosition: 'right',
        showActiveTooltip: false,
        afterLoad: function(anchorLink, index){
            $(".fix-navMenu .currentItemActive").removeClass("currentItemActive")
            $(".fix-navMenu [data-index='" + index + "']").addClass("currentItemActive")
        }
    })

}()
