function createCard(country) {
    const card = document.createElement('div');
    card.classList.add('country')

    const flag = document.createElement('img')
    flag.src = country.flags.svg

    const title = document.createElement('h2')
    title.textContent = country.name.common

    card.append(title,flag)
    document.getElementById('countries').appendChild(card)

}



async function getCountries() {
    const response = await fetch('https://restcountries.com/v3.1/all')
    const countries = await response.json()
    console.log(countries)

    countries.forEach(createCard)
}


getCountries()
