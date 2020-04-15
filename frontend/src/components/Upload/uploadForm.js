const input = document.querySelector('input');
const myForm = document.querySelector('form');

myForm.addEventListener("submit", e => {
    e.preventDefault();
    console.log('input', input.files);

    const formData = new FormData(myForm);
    console.log('formData', formData.get('dataset'));

    const headers = new Headers({})
    const config = {
        headers,
        method: 'POST',
        body: formData
    }
    fetch('http://localhost:3000/backend/api/users/', config)
})