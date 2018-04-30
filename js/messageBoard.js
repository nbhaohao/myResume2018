!function (){
    var notificationTools = window.NOTIFICATION_TOOLS
    var model = {
        limit: 5,
        skip: 0,
        init: function () {
            this.initLeanCloud()
        },
        fetch: function () {
            var query = new AV.Query('newMessage')
            query.descending('createdAt')
            query.limit(this.limit)
            query.skip(this.skip)
            return query.find().then(function (response) {
                return response.map(function(element, index, arr) {
                    return element.attributes
                })
            })
        },
        add: function (data) {
            var TestObject = AV.Object.extend('newMessage');
            var testObject = new TestObject();
            return testObject.save(data)
        },
        getAllNum: function () {
            var query = new AV.Query('newMessage')
            return query.count()
        },
        initLeanCloud: function () {
            var APP_ID = 'jj3Sr3gBj51Y1wDFUsfnM01m-gzGzoHsz'
            var APP_KEY = 't0ONRl9J4BCVDSDIDoNGFmWA'
            AV.init({
                appId: APP_ID,
                appKey: APP_KEY
            })
        }
    }
    var view = $(".messageBoard-main")
    var controller = {
        view: null,
        model: null,
        pagination: null,
        nameInput: null,
        commentTextarea: null,
        messageList: null,
        loaddingDiv: null,
        btnFlag: true,
        paginationDefaultOptions: {
            totalPages: 1,
            visiblePages: 1,
            startPage: 1,
            first: "第一页",
            prev: "上一页",
            next: "下一页",
            last: "末页",
        },
        init: function (view, model) {
            this.view = view
            this.model = model
            this.pagination = this.view.find("#pagination-demo")
            this.nameInput = this.view.find("input[name='name']")
            this.commentTextarea = this.view.find("textarea[name='content']")
            this.messageList = this.view.find(".commentsList")
            this.loaddingDiv = this.view.find(".loader-inner.ball-pulse")
            this.paginationDefaultOptions.onPageClick = function (event, page) {
                this.model.skip = (page - 1) * 5
                this.initMessageList()
            }.bind(this),
            this.bindEvents()
            model.init()
            this.initPagination()
            this.resetPagination()
        },
        getCurrentPageNum: function (count) {
            if (count === 0 || count <=5) {
                return 1
            }
            else if (count > 5) {
                var btnNums = Math.floor(count / 5)
                if (btnNums * 5 < count) {
                    btnNums +=1
                }
                return btnNums
            }
        },
        initPagination: function () {
            this.pagination.twbsPagination(this.paginationDefaultOptions);
        },
        resetPagination: function () {
            this.model.getAllNum().then(function (count) {
                this.view.find(".messageCount").text(count)
                var pageCount = this.getCurrentPageNum(count)
                var activeBtn = $("#pagination-demo li.page-item.active")
                var currentPage = activeBtn.text() || 1
                var visiBtns = pageCount > 5 ? 5 : pageCount
                this.pagination.twbsPagination('destroy')
                this.pagination.twbsPagination($.extend({}, this.paginationDefaultOptions, {
                     startPage: Number(currentPage),
                     totalPages: pageCount,
                     visiblePages: visiBtns,
                 }));
                activeBtn = $("#pagination-demo li.page-item.active")
                if (activeBtn.length !== 0) {
                    activeBtn.trigger("click")
                }
                else {
                    this.initMessageList()
                }
            }.bind(this))
        },
        bindEvents: function () {
            this.bindSendNewCommentBtn()
            $('.loader-inner').loaders()
        },
        bindSendNewCommentBtn: function () {
            this.view.find(".sendNewCommentBtn").on("click", function (e) {
                if (!this.btnFlag) {
                    return
                }
                this.btnFlag = false
                var nameValue = this.nameInput.val()
                if (!nameValue.trim()) {
                    notificationTools.showErrorToast("error", "请先输入姓名再提交")
                    this.btnFlag = true
                    return
                }
                if (nameValue.length > 12) {
                    notificationTools.showErrorToast("error", "姓名过长")
                    this.btnFlag = true
                    return
                }
                var contentValue = this.commentTextarea.val()
                if (!contentValue.trim()) {
                    notificationTools.showErrorToast("error", "请先输入内容再提交")
                    this.btnFlag = true
                    return
                }
                if (nameValue.length > 100) {
                    notificationTools.showErrorToast("error", "输入内容过长")
                    this.btnFlag = true
                    return
                }
                this.model.add({
                    name: nameValue,
                    comment: contentValue,
                }).then(function (object) {
                    notificationTools.showErrorToast("success", "添加成功")
                    if (this.messageList.find(".messageItem").length < 5) {
                        this.initMessageList("first")
                    } else {
                        this.resetPagination()
                    }
                    //this.initMessageList()
                }.bind(this), function (error) {
                    notificationTools.showErrorToast("error", "添加失败")
                })
            }.bind(this))
        },
        initMessageList: function (type) {
            this.loaddingDiv.addClass("active")
            this.messageList.html("")
            this.model.fetch().then(function (objects) {
                for (var i = 0; i < objects.length; i++) {
                    var item = objects[i]
                    var newDiv = document.createElement("div")
                    newDiv.className = "messageItem"
                    var newP1 = document.createElement("p")
                    newP1.className = "nameWrapper"
                    var newSpan = document.createElement("span")
                    newSpan.className = "name"
                    newSpan.innerText = item.name + "说："
                    var newP2 = document.createElement("p")
                    newP2.className = "message"
                    newP2.innerText = item.comment
                    newP1.appendChild(newSpan)
                    newDiv.appendChild(newP1)
                    newDiv.appendChild(newP2)
                    this.messageList.append(newDiv)
                }
                if (type !== undefined) {
                    this.view.find(".messageCount").text(i)
                }
                setTimeout(function () {
                    this.loaddingDiv.removeClass("active")
                    this.btnFlag = true
                }.bind(this), 200)
            }.bind(this), function (error) {
                console.log("error")
            })
        },
    }
    controller.init(view, model)
}()