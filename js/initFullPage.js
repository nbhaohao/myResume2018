!function() {
    $('#fullpage').fullpage({
        scrollingSpeed: 500,
        sectionsColor: ['#0798ec', 'rgb(75, 196, 212)', '#fec401', 'rgb(113, 155, 189)'],
        loopBottom: true,
        menu: '#slideCircleMenu',
        lockAnchors: false,
        navigation: true,
        navigationPosition: 'right',
        showActiveTooltip: false,
        normalScrollElements: ".commentListWrapper",
        afterLoad: function(anchorLink, index){
            $(".fix-navMenu .currentItemActive").removeClass("currentItemActive")
            $(".fix-navMenu [data-index='" + index + "']").addClass("currentItemActive")
        },
         afterRender: function(){
             $(".maskDiv").removeClass("active")
             $("body").removeClass("initHidden")
         }
    })

}()
