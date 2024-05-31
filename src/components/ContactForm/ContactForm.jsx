import React, { useState } from 'react'

const ContactForm = ({contacts , addContacts})=>{
    const initialValue = { full_name: "" , phone_number:""}
    const [form , setForm] = useState(initialValue);

    const onChangeInput = (e)=>{
        setForm({...form, [e.target.name]:[e.target.value]})
    }

    const onSubmit = (e)=>{
        e.preventDefault();
        if(form.full_name === "" || form.phone_number === ""){
            alert("Please Enter the data")
        }

        addContacts([...contacts,form])
    }

    return(
        <form onSubmit={onSubmit}>
        <div>
            <input type="text" 
            name='full_name'
            placeholder='Full Name'
            onChange={onChangeInput} />
        </div>
        <div>
            <input type="tel"
            name='phone_number'
            placeholder='Phone Number'
            onChange={onChangeInput} />
        </div>
        <div id="button">
            <button>Add</button>
        </div>
    </form>

    )
}
    

export default ContactForm
