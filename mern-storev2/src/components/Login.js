// var myHeaders = new Headers();
// myHeaders.append("Content-Type", "application/json");

// var raw = JSON.stringify({
//   "email": "test6@mail.com",
//   "password": "123654"
// });

// var requestOptions = {
//   method: 'POST',
//   headers: myHeaders,
//   body: raw,
//   redirect: 'follow'
// };

// fetch("http://127.0.0.1:3000/users/login", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));

import React from 'react';

export default function Login() {
    const [formData, setFormData] = React.useState(
        {
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
        "email": formData.email,
        "password": formData.password
        });

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        fetch("http://127.0.0.1:3000/users/login", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    }

    return (
        <form onSubmit={handleSubmit}>
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

