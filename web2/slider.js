const testimonials=[
    {
        name: "Jennie",
        job: "Game Enthusiast",
        image:"./wz_image/review_g2.jpg",
        testimonial: "&#x201C; Being a newbie in the gaming world can be intimidating, but GamerHub made it so much easier for me to connect with experienced players who are patient and helpful. I've learned a ton, and I'm having a blast! &#x201D;",
    },
    {
        name: "James MacCormack",
        job: "Game Developer",
        image:"./wz_image/james.jpeg",
        testimonial: "&#x201C; GamerHub has been a game-changer for my streaming career. I've connected with viewers who share my gaming interests, and we've built a supportive community together. This platform has taken my streaming to the next level! &#x201D;",
    },
    {
        name: "39Daph",
        job: "Twitch Streamer",
        image:"./wz_image/review_g1.jpg",
        testimonial: "&#x201C; GamerHub has been a game-changer for my streaming career. I've connected with viewers who share my gaming interests, and we've built a supportive community together. This platform has taken my streaming to the next level! &#x201D;",
        
    },
    {
        name: "Kkoma",
        job: "Game Enthusiast",
        image: "./wz_image/kkoma.jpg",
        testimonial: "&#x201C; GamerHub has been a game-changer for me! I used to struggle finding the right gaming buddies, but this platform connects you with like-minded gamers effortlessly. I've made some fantastic friends here, and our gaming sessions are always a blast. GamerHub, you rock! &#x201D;",
    },
];

//current slide
    let i =0;
// total slide
    let j = testimonials.length;

    let testimonialContainer=document.getElementById("testimonial_container");
    let nextBtn = document.getElementById("next");
    let prevBtn = document.getElementById("prev");

    nextBtn.addEventListener("click" , () =>{
        i=(j+i+1)%j;
        displayTestimonial();
    });

    prevBtn.addEventListener("click" , () =>{
        i=(j+i-1)%j;
        displayTestimonial();
    });


    let displayTestimonial = () => {
       testimonialContainer.innerHTML= `
       <p>${testimonials[i].testimonial}</p>
       <img src=${testimonials[i].image}>
       <h3>${testimonials[i].name}</h3>
       <h6>${testimonials[i].job}</h6>
        `;
    }
    window.onload = displayTestimonial;