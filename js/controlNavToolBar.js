!function() {
    var view = $(".fix-navMenu")
    var controller = {
        view: null,
        init: function(view) {
            this.view = view
            this.liItems = view.find("li")
            this.bindEvents()
        },
        bindEvents: function () {
            this.liItemMouseEnterEvent()
            this.liItemMouseLeaveEvent()
        },
        liItemMouseEnterEvent: function () {
            this.liItems.on("mouseenter", function (e) {
                $(e.currentTarget).addClass("liActive").siblings().removeClass("liActive")
            })
        },
        liItemMouseLeaveEvent: function () {
            this.liItems.on("mouseleave", function (e) {
                $(e.currentTarget).removeClass("liActive")
            })
        }
    }
    controller.init(view)
}()