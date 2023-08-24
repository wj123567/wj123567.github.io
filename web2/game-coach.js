let form = document.querySelector("form");

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    let data = new FormData(form);
    fetch('https://script.google.com/a/macros/student.tarc.edu.my/s/AKfycbz8dnkwPA2sS0J1gG9BsKHsrD4M_Y8w-mgb-7nYkFbgKrnQYEVgT8Xjn1DvIZx6h7Rv/exec',{
            method: "POST",
            body: data
        })
        .then(res => res.text())
        .then(data => console.log(data));
})