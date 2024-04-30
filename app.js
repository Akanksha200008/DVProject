document.getElementById('toggleButton').addEventListener('click', function() {
  var sidebar = document.getElementById('sidebar');
  var content = document.querySelector('.content');
  sidebar.classList.toggle('hidden');
  content.style.marginLeft = sidebar.classList.contains('hidden') ? '0' : '250px';
  this.textContent = sidebar.classList.contains('hidden') ? '>' : '<';
});

// Function to reset all iframes to their original view
function resetAllIframes() {
  const iframes = document.querySelectorAll('iframe');
  iframes.forEach(iframe => {
      iframe.contentWindow.postMessage({ action: 'reset' }, '*');
  });
}

// Add interaction for "All Students" button
document.getElementById('dashboardBtn').addEventListener('click', function() {
  document.querySelectorAll('.sidebar-btn').forEach(btn => btn.classList.remove('active'));
  this.classList.add('active');
  resetAllIframes(); // Reset all iframes to their original view
});

document.querySelectorAll('.sidebar-btn').forEach(button => {
  button.addEventListener('click', function() {
      const streamId = this.textContent.trim();
      console.log("Clicked button with id:", streamId);
      const iframes = document.querySelectorAll('iframe');
      iframes.forEach(iframe => {
          iframe.contentWindow.postMessage({ action: "filter", stream: streamId }, '*');
      });
  });
});
