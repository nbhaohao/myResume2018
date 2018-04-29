!function () {
  var view = $(".productList")
  var controller = {
      view: null,
      init: function (view) {
          this.view = view
          this.bindEvents()
      },
      bindEvents: function () {
          this.bindPreviewBtnAndSourceBtn()
      },
      bindPreviewBtnAndSourceBtn: function () {
          $(".button-funcBtn").on("click", function (event) {
              var href = $(event.currentTarget).attr("data-href")
              window.open(href, "_blank")
          })
      },
  }
  controller.init(view)
}()