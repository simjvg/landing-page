const userImage = document.getElementById('user-image');
const userName = document.getElementById('user-name');
const userCity = document.getElementById('user-city');
const userCountry = document.getElementById('user-country');
const userPhone = document.getElementById('user-phone');
const userGender = document.getElementById('user-gender');
const getUserButton = document.getElementById('get-user-btn');

getUserButton.addEventListener('click', () => {
    // Hacer una solicitud a la API
    fetch('https://randomuser.me/api/')
        .then((response) => response.json())
        .then((data) => {
            const user = data.results[0];
            userImage.src = user.picture.large;
            userName.textContent = `${user.name.title}, ${user.name.first} ${user.name.last}`;
            userCity.textContent = user.location.city;
            userCountry.textContent = user.location.country;
            userPhone.textContent = user.phone;
            userPhone.href = `tel:${user.phone}`;
            userGender.textContent = user.gender;

            // Cambiar el color del género
            if (user.gender === 'female') {
                userGender.classList.add('female');
                userGender.classList.remove('male'); // Asegúrate de eliminar la clase "male"
            } else {
                userGender.classList.remove('female'); // Asegúrate de eliminar la clase "female"
                userGender.classList.add('male');
            }

            })
        .catch((error) => {
            console.error('Error al obtener el usuario:', error);
        });
});
