
const userAPI = "https://jsonplaceholder.typicode.com/users";

let tbody = document.querySelector("#tbody");

//function to render users
const renderUserData = (users) => {
    users.forEach((user) => {
        tbody.innerHTML += `
        <tr key={${user.id}}>
        <td>${user.id}</td>
        <td>${user.name}</td>
        <td>${user.username}</td>
        <td>${user.email}</td>
        <td>${user.address.street}</td>
        <td>${user.phone}</td>
        <td>${user.website}</td>
        <td>${user.company.name}</td>
        </tr>
        `;
    });
};

//function to fetch user

const getUsers = async (url) => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        if (response.ok) {
            console.log(data);
            renderUserData(data);
        } 
    }   catch (error) {
        console.log(error);
        throw new Error(error);
    }
};

document.addEventListener('DOMContentLoaded', () => {
    getUsers(userAPI);
});