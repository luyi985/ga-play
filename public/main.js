(function(w, d) {
    function onPageViewHandler(e) {
        if(!dataLayer) return;
        dataLayer.log('dataLayer');
        dataLayer.push({
            event: 'Pageview',
            attributes: {
                timeValue: new Date().getTime(),
                productId: 1234
            }
        })
    }




    w.addEventListener('load', function(){
        document.querySelectorAll('.js-page-view-trigger').forEach(function(ele) {
            ele.addEventListener('click', onPageViewHandler);
        })
    })
})(window, document)



