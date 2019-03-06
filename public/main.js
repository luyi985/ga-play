
(function(){
    function getTimeVal() {
        return new Date().getTime()
    }

    function onPath() {
        var v = getTimeVal();
        window.history.pushState('new page', 'new path' + v, '/new-page/' + v);
    }

    function onHash() {
        var v = getTimeVal();
        window.history.pushState('new page', 'new hash' + v, '/new-page#' + v);
    }

    function onQuery() {
        var v = getTimeVal();
        window.history.pushState('new page', 'new query' + v, '/new-page?' + v);
    }

    document.querySelectorAll('.js-url-path').forEach(function(ele) {
        ele.addEventListener('click', onPath);
    })

    document.querySelectorAll('.js-url-hash').forEach(function(ele) {
        ele.addEventListener('click', onHash);
    })

    document.querySelectorAll('.js-url-query').forEach(function(ele) {
        ele.addEventListener('click', onQuery);
    })
})();
