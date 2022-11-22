import React from 'react'

export default function Form(){
    const[formData, setFormData] = React.useState(
        
        {firstName: "", 
        lastName :"", 
        email: "", 
        comment: "",
       isFriendly: true,
       employment: ""
    }
        )
    


    function handleChanged(event){
        const{name, value}= event.target
       setFormData(prevFormData => {
        return{
            ...prevFormData,
          [ name]:  value
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
             name="isFriendly"
             />
             <label htmlFor='isFriendly'> Are you friendly?</label>
             <br/>
             <br/>
             <fieldset>
                <legend>Current employment status</legend>
                
                <input 
                    type="radio"
                    id="unemployed"
                    name="employment"
                    checked={formData.employment === "unemployed"}
                    value="unemployed"
                    onChange={handleChanged}
                />
                <label htmlFor="unemployed">Unemployed</label>
                <br />
                
                <input 
                    type="radio"
                    id="part-time"
                    name="employment"
                    value="part-time"
                    checked={formData.employment === "part-time"}
                    onChange={handleChanged}
                />
                <label htmlFor="part-time">Part-time</label>
                <br />
                
                <input 
                    type="radio"
                    id="full-time"
                    name="employment"
                    value="full-time"
                    onChange={handleChanged}
                />
                <label htmlFor="full-time">Full-time</label>
                <br />
                
            </fieldset>
        </form>
        
    )
}