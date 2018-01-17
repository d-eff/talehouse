(function() {
  fetch(new Request('/barkeep', {method: 'GET'}))
    .then(response => {
      if (response.status == 200) {
        return (response.json());
      }
    })
    .then((data) => {
      console.log(data);
    });
})();