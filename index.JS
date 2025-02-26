// this script is used to send the data to google sheet on the contact us page
        const scriptURL = 'https://script.google.com/macros/s/AKfycbwberBxXDv01USW65Ixdc8HnoKjfkBv9RILrqO2SUrSf2n40ZINvLoVEUwnkwHwWG8aUA/exec'
        const form = document.forms['submit-to-google-sheet']
        const message=document.getElementById("message")
    
        form.addEventListener('submit', e => {
          e.preventDefault()
          fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => {
                message.innerHTML ="Message sent successfully"
                setTimeout(function(){
                    message.innerHTML=""},500)
                    form.reset()
            })
            .catch(error => console.error('Error!', error.message))
        })
    