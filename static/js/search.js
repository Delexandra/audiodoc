/* audiodoc — client-side fuzzy search via fuse.js
 * uses the hugo-generated index at /index.json
 */

(function() {
  'use strict';

  var input = document.getElementById('search-input');
  var resultsContainer = document.getElementById('search-results');
  if (!input || !resultsContainer) return;

  var fuse = null;

  function initSearch() {
    if (fuse) return;

    var script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/fuse.js@7.0.0/dist/fuse.min.js';
    script.onload = function() {
      fetch(window.audiodocSearchIndex || '/index.json')
        .then(function(r) { return r.json(); })
        .then(function(data) {
          fuse = new Fuse(data, {
            keys: [
              { name: 'title', weight: 3 },
              { name: 'description', weight: 2 },
              { name: 'content', weight: 1 }
            ],
            threshold: 0.4,
            ignoreLocation: true,
            minMatchCharLength: 2
          });
        })
        .catch(function() { fuse = null; });
    };
    document.head.appendChild(script);
  }

  input.addEventListener('focus', initSearch);

  input.addEventListener('input', function() {
    var query = this.value.trim();

    while (resultsContainer.firstChild) {
      resultsContainer.removeChild(resultsContainer.firstChild);
    }

    if (!query || query.length < 2 || !fuse) {
      resultsContainer.classList.remove('active');
      return;
    }

    var matches = fuse.search(query, { limit: 10 });

    if (matches.length === 0) {
      resultsContainer.classList.remove('active');
      return;
    }

    matches.forEach(function(result) {
      var match = result.item;
      var item = document.createElement('a');
      item.className = 'search-result-item';
      item.href = match.permalink;

      var title = document.createElement('div');
      title.className = 'search-result-title';
      title.textContent = match.title;
      item.appendChild(title);

      if (match.description) {
        var summary = document.createElement('div');
        summary.className = 'search-result-summary';
        summary.textContent = match.description;
        item.appendChild(summary);
      }

      resultsContainer.appendChild(item);
    });

    resultsContainer.classList.add('active');
  });

  input.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      resultsContainer.classList.remove('active');
      input.blur();
      return;
    }

    var items = resultsContainer.querySelectorAll('.search-result-item');
    var active = resultsContainer.querySelector('.search-result-item.focused');
    var index = -1;

    if (active) {
      for (var i = 0; i < items.length; i++) {
        if (items[i] === active) { index = i; break; }
      }
    }

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (active) active.classList.remove('focused');
      index = (index + 1) % items.length;
      items[index].classList.add('focused');
      items[index].scrollIntoView({ block: 'nearest' });
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (active) active.classList.remove('focused');
      index = index <= 0 ? items.length - 1 : index - 1;
      items[index].classList.add('focused');
      items[index].scrollIntoView({ block: 'nearest' });
    } else if (e.key === 'Enter') {
      if (active) {
        e.preventDefault();
        window.location.href = active.href;
      }
    }
  });

  document.addEventListener('click', function(e) {
    if (!e.target.closest('.header-search')) {
      resultsContainer.classList.remove('active');
    }
  });
})();
