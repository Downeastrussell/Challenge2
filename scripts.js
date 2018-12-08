var movieSchedule = [
    {
      title: "Ralph Breaks the Internet",
      rating: "PG",
      poster: "https://lumiere-a.akamaihd.net/v1/images/r_ralphbreakstheinternet_header_ddt-17403_08ef6d92.jpeg?region=0,0,1024,1274&optimize=true"
    }, 
    {
      title: "The Grinch",
      rating: "G",
      poster: "https://images-na.ssl-images-amazon.com/images/I/71vgX4VFdiL._SY679_.jpg"
    },
    {
      title: "Fantastic Beasts: The Crimes of Grindlewald",
      rating: "PG-13",
      poster: "https://images-na.ssl-images-amazon.com/images/I/716fk%2BBZ-NL._SY606_.jpg"
    }
  ]


  

    var htmlString0 = `
        <h3 class="movieTitle">${movieSchedule[0].title}</h3>
        <h2 class="rating"> ${movieSchedule[0].rating}</h2>
        <img class="imgage" src="${movieSchedule[0].poster}"> 
        

    `

    

    var htmlString1 = `
    <h3 class="movieTitle">${movieSchedule[1].title}</h3>
    <h2 class="rating1"> ${movieSchedule[1].rating}</h2>
    <img class="imgage1" src="${movieSchedule[1].poster}"> 
    

    `



    var htmlString2 = `
    <h3 class="movieTitle">${movieSchedule[2].title}</h3>
    <h2 class="rating2"> ${movieSchedule[2].rating}</h2>
    <img class="imgage2" src="${movieSchedule[2].poster}"> 


    `

document.querySelector("#movie-schedule").innerHTML = htmlString0 + htmlString1 + htmlString2;


