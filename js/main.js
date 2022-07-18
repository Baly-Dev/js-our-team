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

// milestone 01
for (let i = 0; i < team.length; i++){
    console.log(`Member Name: ${team[i].name} | Member role: ${team[i].role} | Member photo: ${team[i].photo}`)
}

// milestone 02
function createMemberString(array){
    for (let i = 0; i < array.length; i++){
        // creo DOM element per contenere la stringa
        let teamMember = document.createElement('li')
        teamMember.innerHTML = `Member name - ${array[i].name} | Member role - ${array[i].role} | Member photo - ${array[i].name}`
        teamMember.classList.add('text-white', 'fw-bold', 'fs-4')

        // appendo la stringa al container
        document.getElementById('team').appendChild(teamMember)
    }
}

createMemberString(team)

