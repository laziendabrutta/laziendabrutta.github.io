document.addEventListener('DOMContentLoaded', function() {
   loadPartial('partials/header.html', '#header');
   loadPartial('partials/footer.html', '#footer');
});

function loadPartial(url, elementSelector) {
   fetch(url)
     .then(response => {
         if (!response.ok) {
             throw new Error('Network response was not ok');
         }
         return response.text();
     })
     .then(html => {
         document.querySelector(elementSelector).innerHTML = html;
     })
     .catch(error => {
         console.error('Error loading partial:', error);
         document.querySelector(elementSelector).innerHTML = '<p>Error loading content.</p>';
     });
} 