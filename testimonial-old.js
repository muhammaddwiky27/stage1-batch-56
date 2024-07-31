class Testimonial {
    constructor(image, content, author) {
        this.image = image
        this.content = content
        this.author = author
    }

    html() {
        return `<div class="testimonial">
          <img
            src="${this.image}"
            class="profile-testimonial"
          />
          <p class="quote">${this.content}</p>
          <p class="author">- ${this.author}</p>
        </div>`
    }
}

const testimonial1 = new Testimonial("https://images.pexels.com/photos/62640/pexels-photo-62640.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", "Hallo semuanya, perkenalkan nama saya Chiko, saya hobby nya tidur dan bermain  ", "Chiko")

const testimonial2 = new Testimonial("https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", "Hallo semuanya, perkenalkan nama saya Buts, saya juga hobby nya tidur dan makan", "Buts")

const testimonial3 = new Testimonial("https://images.pexels.com/photos/96938/pexels-photo-96938.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", "Hallo semuanya, perkenalkan nama saya Thomas, dan saya kucingnya pemalu dan saya sendirian gak ada teman untuk diajak bermain", "Thomas")

const testimonial4 = new Testimonial("https://images.pexels.com/photos/669015/pexels-photo-669015.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", "Hallo semuanya, perkenalkan nama saya , dan Vincent saya kucingnya pemalu dan lebih sering menyendiri", "Vincent")

const testimonial5 = new Testimonial("https://images.pexels.com/photos/2558605/pexels-photo-2558605.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", "Hallo semuanya, perkenalkan nama saya Jerry, dan saya kucing paling terlucu dan palin mengemasin, dan orang-orang banyak menyukai saya", "Jerry")


const testimonials = [testimonial1, testimonial2, testimonial3, testimonial4, testimonial5] // length => 2

let testimonialHTML = ``

for(let index = 0; index < testimonials.length; index++) {
    testimonialHTML += testimonials[index].html()
}

document.getElementById("testimonials").innerHTML = testimonialHTML