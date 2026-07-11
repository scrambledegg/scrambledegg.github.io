document.addEventListener("DOMContentLoaded", function() {
    // for footnote
    Array.prototype.forEach.call(document.querySelectorAll("a[role='doc-noteref'], a[rel='footnote']"), function(item) {
        let href = item.getAttribute("href");
        if (href == null)
            return;
        let target = document.getElementById(href.slice(1));
        if (target == null)
            return;
        target.style.marginTop = "-100px";
        target.style.paddingTop = "100px";
    });
});
