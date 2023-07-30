const mainData = () => {
  fetch("https://anime-1db9f-default-rtdb.firebaseio.com/anime.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    });
};

mainData();
