const downloadBtn = document.getElementById('download-btn');
const alertDiv = document.getElementById('alert');
const progressBar = document.getElementById('progress-bar');
const closeBtn = document.getElementById('close-btn');

downloadBtn.addEventListener('click', () => {
  // Simulate a file download with a timeout
  setTimeout(() => {
    alertDiv.style.display = 'flex';
    progressBar.style.width = '100%';
  }, 2000);
});

closeBtn.addEventListener('click', () => {
  alertDiv.style.display = 'none';
  progressBar.style.width = '0%';
});
