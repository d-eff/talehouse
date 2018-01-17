(function() {
  const getRequest = (endpoint) => {
    return fetch(new Request(endpoint, {method: 'GET'}))
      .then(response => {
        if (response.status == 200) {
          return response.json();
        }
      });
  };

  getRequest('/barkeep').then((data) => {
    console.log(data);
  });
})();
