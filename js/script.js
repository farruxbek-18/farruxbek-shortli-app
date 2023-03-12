const elUrlShortenerForm = document.querySelector(".js-url-shortener-form");
const elUrlShortenerResults = document.querySelector(".url-shortener__results");
const elCopyShortLinkButton = document.querySelector(".js-copy-short-button");
const elUrlShortener = document.querySelector(".url-shortener");

if (elUrlShortenerForm) {
  elUrlShortenerForm.addEventListener("submit", function (evt) {
    evt.preventDefault();
    elUrlShortenerResults.classList.add("url-shortener__results-open");
  });
}
if (elUrlShortener) {
  elUrlShortener.addEventListener("click", function (evt) {
    if (evt.target.matches(".js-copy-short-button")) {
      // cheng button text
      evt.target.textContent = "Copied!";
      // cheng button copy link
      navigator.clipboard.writeText(
        evt.target.previousElementSibling.textContent
      );
      // cheng bacground-coler
      evt.target.classList.add("button-result-copied");

      // reset button text and class
      setTimeout(function () {
        evt.target.textContent = "Copy";
        evt.target.classList.remove("button-result-copied");
      }, 1000);
    }
  });
}
