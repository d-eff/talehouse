const getRequest = (endpoint) => {
  return fetch(new Request(endpoint, {method: 'GET'}))
    .then(response => {
      if (response.status == 200) {
        return response.json();
      }
    });
};

const containers = dragula();

const populateHand = (handId, numCards) => {
  const hand = document.getElementById(`player${handId}Hand`);
  const fragment = document.createDocumentFragment();

  getRequest(`/barkeep/${numCards}`).then((data) => {
    for (var counter = 0; counter < numCards; counter++) {
      const card = document.createElement("div");
      card.className = "card";
      card.textContent = data[counter];
      fragment.appendChild(card);
    }
    hand.appendChild(fragment);
    containers.containers.push(hand);
  });
};

const main = () => {
  const story = document.getElementById('story');
  containers.containers.push(story);
  populateHand('1', '5');
  populateHand('2', '5');
  populateHand('3', '5');
  populateHand('4', '5');
  
};

main();
  
