!function () {
    var view = $(".messageBoard-main")
    var controller = {
        view: null,
        pagination: null,
        nameInput: null,
        commentTextarea: null,
        init: function (view) {
            this.view = view
            this.pagination = this.view.find("#pagination-demo")
            this.nameInput = this.view.find("input[name='name']")
            this.commentTextarea = this.view.find("textarea[name='content']")
            this.initPagination()
            this.bindEvents()
        },
        initPagination: function () {
            this.pagination.twbsPagination({
                totalPages: 35,
                visiblePages: 7,
                onPageClick: function (event, page) {
                    $('#page-content').text('Page ' + page);
                }
            });
        },
        bindEvents: function () {
            this.bindSendNewCommentBtn()
        },
        bindSendNewCommentBtn: function () {
            this.view.find(".sendNewCommentBtn").on("click", function (e) {
                var nameValue =
            })
        }
    }
    controller.init(view)
}()