(function() {
    var e;
    $(document).on("ready page:load", function() {
        return $("a[data-anchor]").click(function(e) {
            var t;
            return e.preventDefault(), t = $(this).data("anchor"), $("html body").animate({ scrollTop: $(t).offset().top - 15 }, 600), !1 }) }), $(document).on("click", ".js-jumbotron-before", function() {
        return e(-1) }), $(document).on("click", ".js-jumbotron-next", function() {
        return e(1) }), e = function(e) {
        var t, n, r;
        return n = $(".js-jumbotron").length, t = $(".js-jumbotron").index($(".js-jumbotron.active")), r = t + e, r = r >= 0 && r < n ? r : r < 0 ? n - 1 : r >= n ? 0 : void 0, console.log(r), $(".js-jumbotron.active").removeClass("active"), $(".js-jumbotron").eq(r).addClass("active") } }).call(this);
