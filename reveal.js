var wrapElements = document.getElementsByClassName('wrap');
var observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5
};

var revealOnScroll = function(entries, observer) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      entry.target.classList.toggle("active");
      observer.unobserve(entry.target);
    }
  });
};

var observer = new IntersectionObserver(revealOnScroll, observerOptions);
Array.prototype.forEach.call(wrapElements, function(element) {
  observer.observe(element);
});
