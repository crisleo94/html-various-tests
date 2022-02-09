const API_URL = 'https://jsonplaceholder.typicode.com/users'
const cardTemplate = document.querySelector('[data-card-users-template]')
const cardContainer = document.querySelector('[data-card-users-container]')
const searchData = document.querySelector('[data-search]')

let users = []

searchData.addEventListener('input', (e) => {
  const value = e.target.value.toLowerCase()
  users.forEach((user) => {
    const isVisible =
      user.name.toLowerCase().includes(value) ||
      user.email.toLowerCase().includes(value)
    user.element.classList.toggle('hide', isVisible)
  })
})

fetch(API_URL)
  .then((res) => res.json())
  .then((data) => {
    users = data.map((user) => {
      const card = cardTemplate.content.cloneNode(true).children[0]
      const header = card.querySelector('[data-card-users-header]')
      const body = card.querySelector('[data-card-users-body]')
      header.innerHTML = user.name
      body.innerHTML = user.email
      cardContainer.append(card)
      return {
        name: user.name,
        email: user.email,
        element: card,
      }
    })
  })
