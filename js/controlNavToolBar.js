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
            this.liItemClickEvent()
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
        },
        liItemClickEvent: function () {
            this.liItems.on("click", function (e) {
                var index = $(e.currentTarget).attr("data-index")
                this.jumpToSlide(index)
            }.bind(this))
        },
        jumpToSlide: function (index) {
            $.fn.fullpage.moveTo(index)
        }
    }
    controller.init(view)
}()