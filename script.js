document.addEventListener('DOMContentLoaded', function() {
  const textarea = document.getElementsByTagName('textarea')[0]
  textarea.value = window.localStorage.getItem('data')

  textarea.addEventListener("blur", function() {
    window.localStorage.setItem('data', this.value)
  });
});
