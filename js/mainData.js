const mainData = () => {
    fetch('https://anime-base1-default-rtdb.firebaseio.com/anime.json')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
        });
};
mainData();
