//this javascript sends the form data to the google sheet
const scriptURL = 'https://script.google.com/macros/s/AKfycbzqFKGabVJn9jjLMkGTvEnPVVGsBf9UIdIUMqvyz0F8_w35hchysqgtlacWpO3oA8_CJQ/exec';
const form = document.forms['submit-to-google-sheet'];
const message = document.getElementById("success_message");

form.addEventListener('submit', e => {
    e.preventDefault();

    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => response.text()) // here we're getting the form data and converting them to text
        .then(data => {
            message.innerText = "Message sent successfully!";
            message.style.color = "green";
            form.reset(); // reset form after successful submission
            setTimeout(() => {
                message.innerHTML = "";},2000); // Show success message for 2 seconds
        })
        .catch(error => {
            console.error('Error!', error.message);
            message.innerHTML = "Submission failed!";
            message.style.color = "red";
        });
});
