;
(function(w, d) {
    function onPageViewHandler(e) {
        if (!dataLayer) return;
        dataLayer.log('dataLayer');
        dataLayer.push({
            event: 'Pageview',
            attributes: {
                timeValue: new Date().getTime(),
                url: window.location.href
            }
        })
    }

    function urlcheck(cb) {
        var currentUrl = window.location.href;
        var newUrl = ''
        setInterval(function() {
            newUrl = window.location.href;
            if (newUrl !== currentUrl) {
                currentUrl = newUrl;
                cb(currentUrl);
            }
        }, 500)
    }

    document.querySelectorAll('.js-page-view-trigger').forEach(function(ele) {
        ele.addEventListener('click', onPageViewHandler);
    })
    urlcheck(onPageViewHandler);
})(window, document);