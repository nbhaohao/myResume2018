!function() {
    $('#fullpage').fullpage({
        scrollingSpeed: 500,
        sectionsColor: ['#0798ec', '#ff5f45', '#fec401', '#663399'],
        loopBottom: true,
        menu: '#slideCircleMenu',
        lockAnchors: false,
        anchors:['firstPage', 'secondPage'],
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['firstSlide', 'secondSlide'],
        showActiveTooltip: false,
    })

}()
