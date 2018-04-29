!function () {
  var view = $(".myInfo-sectionBar")
  var controller = {
      view: null,
      init: function (view) {
          this.view = view
          this.bindEvents()
      },
      bindEvents: function () {
        this.bindLinkBtnClickEvent()
        this.bindQCodeMouseEnterAndLeave()
      },
      bindLinkBtnClickEvent: function () {
          this.view.find(".linkBtnGroup button").on("click", function (e) {
              var targetType = $(e.currentTarget).attr("data-type")
              var targetElement = $("a[data-type='" + targetType + "']")[0]
              if (targetElement) {
                  targetElement.click()
              }
          })
      },
      bindQCodeMouseEnterAndLeave: function () {
          var $Qcode = this.view.find(".weixin-qCodeSVG-Wrapper")
          var targetQcodeWrapper = $(".myContact .weixin .weixinQcodeWrapper")
          $Qcode.on("mouseenter", function (e) {
              targetQcodeWrapper.addClass("active")
          })
          $Qcode.on("mouseleave", function (e) {
              targetQcodeWrapper.removeClass("active")
          })
      }
  }      
  controller.init(view)
}()