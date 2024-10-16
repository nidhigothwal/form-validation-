console.log('script is working')



document.querySelector('#submit-button').addEventListener('click', function () {
    let firstname = document.querySelector('.firstname').value
    if (firstname === '') {
        console.log('full name is not working')
        document.querySelector('#name-error').innerText = 'Please fill first name.'
    } else {
        document.querySelector('#name-error').innerText = ''
        document.querySelector('.data-firstname').innerText = firstname
    }

    let lastname = document.querySelector('.lastname').value
    if (lastname === '') {
        document.querySelector('#lastname-error').innerText = 'Please fill last name.'
    } else {
        document.querySelector('.data-lastname').innerText = lastname
        document.querySelector('#lastname-error').innerText = ''

    }

    let phonenumber = document.querySelector('.phonenumber').value
    if (phonenumber === '') {
        document.querySelector('#number-error').innerText = 'Please fill phone number.'
    } else {
        document.querySelector('.data-phonenumber').innerText = phonenumber
         document.querySelector('#number-error').innerText = ''
    }

    let address = document.querySelector('.address').value
    if (address === '') {
        document.querySelector('#address-error').innerText = 'Please fill address.'
    } else {
        document.querySelector('.data-address').innerText = address
        document.querySelector('#address-error').innerText = ''

    }



})
