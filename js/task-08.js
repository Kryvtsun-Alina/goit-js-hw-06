const Form = document.querySelector('.login-form');
Form.addEventListener('submit', onFormSubmit);
function onFormSubmit(event) {
    event.preventDefault();
    const {elements: { email, password },
    } = event.currentTarget

    if (email.value === '' || password.value === '') {
        return alert('Please fill in all the fields!')
    }
    const userInformation = { email: email.value, Password: password.value }
    
    console.log(userInformation)
    event.currentTarget.reset()
};
