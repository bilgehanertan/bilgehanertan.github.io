---
permalink: /assets/js/open-panel-analytics-setup.js
---
window.op =
  window.op ||
  function (...args) {
    (window.op.q = window.op.q || []).push(args);
  };
window.op("init", {
  clientId: "{{ site.openpanel_analytics }}",
  trackScreenViews: true,
  trackOutgoingLinks: true,
  trackAttributes: true,
});

// Track file downloads (CV, papers, slides, posters, etc.).
// Outgoing links are already tracked via trackOutgoingLinks; this adds a
// dedicated "file_download" event for any downloadable file link (hosted or
// external) so downloads show up as their own metric in Openpanel.
(function () {
  var DOWNLOAD_EXT = /\.(pdf|zip|docx?|pptx?|xlsx?|csv|tex|bib)(\?.*)?$/i;
  document.addEventListener("click", function (e) {
    var link = e.target && e.target.closest ? e.target.closest("a[href]") : null;
    if (!link) return;
    var href = link.getAttribute("href") || "";
    if (!DOWNLOAD_EXT.test(href)) return;
    var url = link.href.split("?")[0];
    var file = url.split("/").pop();
    // The CV gets its own dedicated event; everything else is a file_download.
    var eventName = /cv\.pdf$/i.test(url) ? "cv_view" : "file_download";
    window.op("track", eventName, { file: file, url: link.href });
  });
})();
