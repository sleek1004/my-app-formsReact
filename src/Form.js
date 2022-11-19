import React from 'react'

export default function Form(){
    const[formData, setFormData] = React.useState(
        
        {firstName: "", 
        lastName :"", 
        email: "", 
        comment: "",
       isFriendly: true
    }
        )
    


    function handleChanged(event){
        const{name, value}= event.target
       setFormData(prevFormData => {
        return{
            ...prevFormData,
          [ name]:value 
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
             <input
             type="checkbox"
             id="isFriendly"
             checked={formData.isFriendly}
             onChange={handleChanged}
             />
             <label htmlFor='isFriendly'> Are you friendly?</label>
             <br/>
        </form>
        
    )
}