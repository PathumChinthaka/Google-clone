let query=document.querySelector('.search');

  query.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      let url='https://www.google.com/search?q='+query.value;
      window.open(url,'_self');
      alert("Enter key pressed!");
      event.preventDefault();
    }
  });
