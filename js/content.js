var config = {attributes: false, childList: true, characterData: false};

var htmlBody = $("body")[0];
var netflixLoadedObserver = new MutationObserver(function(mutations){
    mutations.forEach(function (mutation) {
        var popupSelector = $(".focus-trap-wrapper");
        if (popupSelector.length > 0) {
            var title = document.body.getElementsByClassName("previewModal--boxart")[0].alt;
            console.log(popupSelector)
            console.log("Found one! " + title)
        }
    })
});

netflixLoadedObserver.observe(htmlBody, config);