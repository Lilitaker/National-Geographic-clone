let picks = [
    [
        "https://i.natgeofe.com/n/36baf96d-d931-462b-ae70-a60d9e2494b9/MCarrasquero_SLA00056_square.JPG?w=195&h=195", "Travel", "", "Inside Mexico City's Salon Los Angeles"
    ],

    [
        "https://i.natgeofe.com/n/9e722a9e-472b-4444-8f31-da9d3a8ae1de/NationalGeographic_1320259_square.jpg?w=195&h=195", "Animals", "Monster Fish", "A new discovery could help save North America's biggest freshwater fish"
    ],

    [
        "https://i.natgeofe.com/n/d5c408f0-775b-4192-835f-a6444a046554/GettyImages-1200557396_square.jpg?w=195&h=195", "Animals", "Wildlife Watch", "Namibia's wild elephants are being captured for international sales"
    ],

    [
        "https://i.natgeofe.com/n/16b817fe-a248-49cf-893d-765f36a31125/natgeonewsquiz-220215_square.jpg?w=195&h=195", "Nat Geo News Quiz", "", "This week: Black diamond origins, snurfing, plus more"
    ],

    [
        "https://i.natgeofe.com/n/ee4c7600-cb9c-4c16-9913-869b24fb9b6d/NationalGeographic_2480616_square.jpg?w=195&h=195", "Animals", "", "Most U.S. wolves listed as endangered-again. Here's why."
    ],

    [
        "https://i.natgeofe.com/n/e3ef9dcd-5342-4c75-8b7a-9a1ecda33216/MM8405_1212_0882_square.jpg?w=195&h=195", "Environment", "", "Sea level rise, explained"
    ]

]


function dayPicks() {
    let picksSection = document.querySelector(".picks-section");
    for(article of picks) {
        picksSection.innerHTML += `
        <article class="pickSection-article">
            <img src="${article[0]}"/>
            <div>
                <div class="pickSection-article-text">
                    <h4 class="pickSection-article-text__category"><a href="#">${article[1]}</a></h4>
                    <h4 class="pickSection-article-text__topic"><a href=#>${article[2]}</a></h4>
                </div>
                <h3 class="pickSection-article-text__title"><a href=#>${article[3]}</a></h3>
            </div>
        </article>
      `
    };
  }
  
dayPicks();
