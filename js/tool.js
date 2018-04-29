window.NOTIFICATION_TOOLS = {
    showErrorToast: function (type, text) {
        new Noty({
            type: type,
            text: text,
            timeout: 1000,
            layout: "topCenter",
            theme: 'mint',
        }).show();
    }
}