const fullname = document.getElementById('fullname');
const title = document.getElementById("title");
const phone = document.getElementById("Phone");
const email = document.getElementById("Email");
const street = document.getElementById("street")

const url = "https://randomuser.me/api/"
 
const CardData = () => {

    fetch(url)
    .then (response => {

        return response.json();

    })
    .then(data => {
        let cardImage = data.results [0].picture.
        Image.scr = cardImage

        let title = data.results[0].name.title
        let firstName = data.results[0].name.firstname
        let lastName = data.results.name.last
        
    })
}
 CardData()