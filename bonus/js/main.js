// creo un array team
const team = [
// creo gli oggetti teamMember [name, role, photo]
        {
            name: 'Wayne Barnett',
            role: 'Founder & CEO',
            photo:'wayne-barnett-founder-ceo.jpg'
        },

        {
            name: 'Angela Caroll',
            role: 'Chief Editor',
            photo:'angela-caroll-chief-editor.jpg'
        },

        {
            name: 'Walter Gordon',
            role: 'Office Manager',
            photo:'walter-gordon-office-manager.jpg'
        },

        {
            name: 'Angela Lopez',
            role: 'Social Media Manager',
            photo:'angela-lopez-social-media-manager.jpg'
        },

        {
            name: 'Scott Estrada',
            role: 'Developer',
            photo:'scott-estrada-developer.jpg'
        },

        {
            name: 'Barbara Ramos',
            role: 'Graphic Designer',
            photo: 'barbara-ramos-graphic-designer.jpg'
        }
]

const teamDOM = document.getElementById('team')

function createMemberCards(array){
    for (let i = 0; i < array.length; i++){
        // DOM column
        let col = document.createElement('div')
        col.classList.add('col-4')

        // DOM card
        let card = document.createElement('div')
        card.classList.add('card', 'bg-dark', 'border-0', 'mb-4')

        // Card image
        let cardImage = document.createElement('img')
        cardImage.setAttribute('src', `media/${array[i].photo}` )
        cardImage.classList.add('img_border')

        // Card body
        let cardBody = document.createElement('div')
        cardBody.classList.add('card-body', 'bg_custom_dark', 'body_border')

        // Card title
        let cardTitle = document.createElement('h4')
        cardTitle.innerHTML = array[i].name
        cardTitle.classList.add('card-title', 'text-center', 'text-white')

        // Card position
        let cardPosition = document.createElement('p')
        cardPosition.innerHTML = array[i].role
        cardPosition.classList.add('card-title', 'text-center', 'text-white')

        // Append elemnts
        teamDOM.appendChild(col)
        col.appendChild(card)
        card.appendChild(cardImage)
        card.appendChild(cardBody)
        cardBody.appendChild(cardTitle)
        cardBody.appendChild(cardPosition)
    }
}

createMemberCards(team)


