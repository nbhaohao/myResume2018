!function () {
  var view = $(".productList")
  var controller = {
      view: null,
      init: function (view) {
          this.view = view
          this.bindEvents()
          this.initTransitionHover()
      },
      initTransitionHover: function () {
          VanillaTilt.init(document.querySelectorAll(".vanillaItem"), {
              max: 25,
              speed: 400,
              axis: "x",
          });
      },
      bindEvents: function () {
          this.bindPreviewBtnAndSourceBtn()
          this.bindMobileQcodeShow()
      },
      bindPreviewBtnAndSourceBtn: function () {
          $(".button-funcBtn").on("click", function (event) {
              var href = $(event.currentTarget).attr("data-href")
              window.open(href, "_blank")
          })
      },
      bindMobileQcodeShow: function () {
          this.view.find(".mobileQcodewrapper").on("mouseenter", function (e) {
              $(e.currentTarget).addClass("active")
          })
          this.view.find(".mobileQcodewrapper").on("mouseleave", function (e) {
              $(e.currentTarget).removeClass("active")
          })
      },
  }
  controller.init(view)
}()