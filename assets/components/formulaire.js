import React, { useState } from 'react';
import profile from '../../assets/images/porfolio.PNG';

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
            setFormData({
              name: "",
              email: "",
              message: "",
          });
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
        <img src={profile} alt='photo de identité'/>
        </div>
        <form onSubmit={handleSubmit} >

          <fieldset>
            <legend>Formulaire de contact</legend>

            <label htmlFor="name">Nom:<strong>*</strong></label>
            <input id="name" type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Nom" required/>

            <label htmlFor="email">Email:<strong>*</strong></label>
            <input id="email" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required/>

            <label htmlFor="message">Message:<strong>*</strong></label>
            <textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Message" required></textarea>

          </fieldset>
          <button type='submit'>envoyer</button>
        </form>
      </div>
      </> 
    );
}
export default ContactForm;