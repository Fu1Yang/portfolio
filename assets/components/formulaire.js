import React, { useState } from 'react';

function ContactForm(){
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e)=> {
        e.preventDefault();
        try {
            const response = await fetch("https://localhost:8000/message/messageRecu",{ 
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
           });
           if(response.ok){
            console.log('Form submitted successfully');
           }
           else {
            console.error('Form submission error');
           }
        }
           catch(error){
            console.error('Error', error);
            
           }
    };
    return (
       <>
        <h1>Me contacter</h1>  
      <div id='formulaire'>
        
        <div id='contact'>
        <p>Je vous contacterez le plus rapidement possible</p>
        </div>
        <form onSubmit={handleSubmit}>

          <fieldset>
            <legend>Formulaire de contact</legend>

            <label htmlFor="name">Nom:</label>
            <input id="name" type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Nom" />

            <label htmlFor="email">Email:</label>
            <input id="email" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />

            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Message"></textarea>

          </fieldset>
          <button type='submit'>envoyer</button>
        </form>
      </div>
      </> 
    );
}
export default ContactForm;