function check() {
    const form = document.getElementById('myform');

    if (form.checkValidity()){
        alert("Your form has been submitted. We will contact you soon!");
    }
}