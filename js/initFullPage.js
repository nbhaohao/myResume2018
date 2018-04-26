!function() {
    $('#fullpage').fullpage({
        scrollingSpeed: 500,
        sectionsColor: ['#ff5f45', '#0798ec', '#fc6c7c', '#fec401', '#663399'],
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
