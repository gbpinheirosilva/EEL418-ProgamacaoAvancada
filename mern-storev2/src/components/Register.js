import React from 'react';

export default function Register() {
    const [formData, setFormData] = React.useState(
        {
            username:"",
            email: "", 
            password: ""
        }
    )
    
    function handleChange(event) {
        console.log(event)
        const {name, value} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
        "name": formData.username,
        "email": formData.email,
        "password": formData.password
        });

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        fetch("http://127.0.0.1:3001/users/register", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Username"
                onChange={handleChange}
                name="username"
                value={formData.username}
            />
            <input
                type="email"
                placeholder="Email"
                onChange={handleChange}
                name="email"
                value={formData.email}
            />
            <input
                type="text"
                placeholder="Password"
                onChange={handleChange}
                name="password"
                value={formData.password}
            />

            <br />
            <br />
            <button>Submit</button>
        </form>
    )
}

