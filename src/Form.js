import React from 'react'

export default function Form(){
    const[formData, setFormData] = React.useState(
        {firstName: "", lastName :"", email:"", comment:""}
        )
    


    function handleChanged(event){
       setFormData(prevFormData => {
        return{
            ...prevFormData,
            [event.target.name]:event.target.value
        }
       })
    }
    
 
    return(
    
        <form>
            <input
               type="text"
               placeholder='First Name'
               onChange={handleChanged}
               name="firstName"
               value={formData.firstName}

            />
            <input
            type="text"
            placeholder='Last Name'
            onChange={handleChanged}
            name="lastName"
             value={formData.lastName}
            />
            <input
            type="email"
            placeholder='Email'
            onChange={handleChanged}
            name="email"
            value={formData.firstName}
            />
            
            <textarea
            placeholder='comments'
            onChange={handleChanged}
            value={formData.comment}
            name="comment"
             />
        </form>
        
    )
}