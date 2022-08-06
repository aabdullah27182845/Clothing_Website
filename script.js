
//adding the scroll functionality

const nav = document.querySelector('.nav')
const card = document.getElementById('card')
const clothesCard = document.querySelector('.main-card')

window.addEventListener('scroll', fixNav)

function fixNav() {
	if (window.scrollY > nav.offsetHeight + 570) {
		nav.classList.add('invert') 
	} else {
		nav.classList.remove('invert')
	}

	if (window.scrollY < 600) {
		card.classList.add('hide')
	} else {
		card.classList.remove('hide')
	}

	if (window.scrollY < 2000) {
		clothesCard.classList.add('hide')
	} else {
		clothesCard.classList.remove('hide')
	}
}





//adding the items into the fourth container and adding 

const leftBtn = document.getElementById('left-btn')
const rightBtn = document.getElementById('right-btn')

const cardContainer = document.querySelector('.card-container')
let containerIndex = 0

const clothesItem = [
	{
		name: "Deluxe Men's Hoodie",
		price: "£30.99",
		image: "https://www.sportsdirect.com/images/products/53922203_3pl.jpg",
	},
	{
		name: "Stadium Jersey",
		price: "£12.99",
		image: "https://www.sportsdirect.com/images/products/37453801_3pl.jpg"
	},
	{
		name: "Technical Zip Top",
		price: "£27.99",
		image: "https://www.sportsdirect.com/images/products/62000740_3pl.jpg",
	},
	{
		name: "Cropped Tights Women",
		price: "£16.99",
		image: "https://www.sportsdirect.com/images/products/34752703_3pl.jpg",
	},
	{
		name: "Long Bubble Jacket",
		price: "£59.99",
		image: "https://www.sportsdirect.com/images/products/60741203_3pl.jpg",
	},
	{
		name: "Paris Saint German Jacket",
		price: "£99.99",
		image: "https://www.sportsdirect.com/images/products/60955003_3pl.jpg",
	},
	{
		name: "Gucci Hoodie",
		price: "£830.00",
		image: "https://image.harrods.com/18/67/42/83/18674283_40708172_600.jpg",
	},
	{
		name: "Louboutin Bag",
		price: "£1290.00",
		image: "https://image.harrods.com/18/44/58/98/18445898_40746987_800.jpg",
	},
	{
		name: "Burberry Vintage Shirt",
		price: "£300.00",
		image: "https://image.harrods.com/18/53/86/69/18538669_40561000_600.jpg",
	},
	{
		name: "Denim Top",
		price: "£49.99",
		image: "https://image.harrods.com/18/43/52/50/18435250_40383599_600.jpg",
	}
]

leftBtn.addEventListener('click', () => {
	if (containerIndex === 5) {
		containerIndex = 5
		cardContainer.style.transform = `translateX(1537px)`
	} else {
		containerIndex++
		cardContainer.style.transform = `translateX(${containerIndex*320}px)`
	}
})

rightBtn.addEventListener('click', () => {
	if (containerIndex === -5) {
		containerIndex = -5
		cardContainer.style.transform = `translateX(-1537px)`
	} else {
		containerIndex--
		cardContainer.style.transform = `translateX(${containerIndex*320}px)`
	}
})

function createRandomList(list) {
	let outputList = []

	while (outputList.length < list.length) {

		let randomNumber = Math.floor(Math.random() * list.length)

		if (!outputList.includes(list[randomNumber])) {
			outputList.push(list[randomNumber])
		}
	}

	return outputList
}

const clothesItemRandom = createRandomList(clothesItem)

function createElements() {
	cardContainer.innerHTML = ''
	clothesItemRandom.forEach((item) => {
		const clothesEl = document.createElement('div')
		clothesEl.classList.add('clothes-card')
		clothesEl.innerHTML = `
			<img src="${item.image}" alt="">
			<p>${item.name} <br>${item.price}</p>
		`
		cardContainer.appendChild(clothesEl)
	})
}

createElements()


