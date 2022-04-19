import React from 'react';
import {useState} from "react";
import emailjs from 'emailjs-com';
const Inquiry = () => {

    const [contactInfo,setContactInfo]= useState( { 
        name: "",
        email:"",
        remarks:""
    }
    );
    
   
   

    const onChange = (e) => {
        setContactInfo( {...contactInfo,[e.target.id]:e.target.value});
    };

    const onSubmit = (e) =>{
        e.preventDefault();
       console.log(contactInfo);

        emailjs.sendForm('service_0ocxt3d','template_h8wjasn',e.target,'user_TW9c1kWvid9GtXWBSUd9U')
        .then( (result) => {
            console.log(result.text);
        },(error) => {
            console.log(error.text);
        } );
        e.target.reset();
    };


    return (
        <form className="mt-2" onSubmit={onSubmit}>
            <div className="form-group">
                <label htmlFor="name"> Name  </label>
                <input  id="name" type="text" name="name"
                placeholder="Name"
                value={contactInfo.name}
                onChange={onChange}
                className="form-control"
                />
            </div>
            <div className="form-group">
                <label htmlFor="email">  Email </label>
                <input id="email" type="email"
                name="email"
                value={contactInfo.email}
                onChange={onChange}
                placeholder="Email"
                className="form-control"/>
               
            </div>
            <div className="form-group">
                <label htmlFor="remarks"> Remarks  </label>
                <input id="remarks" type="text"
                name="remarks"
                className="form-control"
                value={contactInfo.remarks}
                onChange={onChange}
                placeholder="Remarks"
                />
            </div>
            <input type="submit" 
            disabled={ !contactInfo.name || !contactInfo.email }
            className="form-control"
            className="btn btn-primary mt-2"
            value="submit"
           /> 
        </form>
    );
};

export default Inquiry;