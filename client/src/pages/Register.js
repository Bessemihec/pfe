import React, { useState } from 'react';
import '../Login.css';
import ComboBox from '../components/Combobox';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Register() {
 
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const[message,setMessage]=useState("");

  const onChangeHandler = (e) => {
        
        
    setForm({
        
        ...form,
        [e.target.name]: e.target.value,
   
    });
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      // Check if the email already exists
      const Email = await axios.get(`/api/register?Email=${form.Email}`);
      if (Email.data.exists) {
        setMessage('Email already exists');
        return;
      }
    
    const response = await axios.post('/api/register', form);
    
   
    
      console.log(response.data);
      setForm({});
      setMessage('');
      if (form.Role === 'employee') {
        window.location.href = '/offre';
      } else if (form.Role === 'candidat') {
        window.location.href = '/formulaire';
    }
  }
    catch (error) {
      console.error(error.response.data);
      setErrors(error.response.data);
      setMessage("user exist");
    }
  };

  return (
    <div class="container-fluid">
		<div class="row main-content bg-success text-center">
			<div class="col-md-4 text-center company__info">
				<span class="company__logo"><h2><span class="fa fa-android"></span></h2></span>
        
        <img src={require("../sources/poste.svg.png")} />
			</div>
			<div class="col-md-8 col-xs-12 col-sm-12 login_form ">
				<div class="container-fluid">
					<div class="row">
						<h2>Register </h2>
					</div>
					<div class="row">
      <form onSubmit={handleSubmit} className="form-group">
      <div className="row">
      <label htmlFor="Email">Email</label>
                        <input
                            type="email"
                            name="Email"
                            placeholder="Enter email"
                            onChange={onChangeHandler}
                            errors={errors.Email}
                            required
                            className="form__input"
                        />
                      
                      </div>
                    
                      <div className="row">
                        <label htmlFor="Firstname">Name</label>
                        <input
                            type="text"
                            
                            name="Firstname"
                            placeholder="Enter name"
                            onChange={onChangeHandler}
                            errors={errors.Firstname}
                            required
                            className="form__input"
                        />
                          </div>
                          <div className="row">
                      <label htmlFor="Lastname">Last Name</label>
                        <input
                            type="text"
                           
                            name="Lastname"
                            placeholder="Enter last name"
                            onChange={onChangeHandler}
                            errors={errors.Lastname}
                            required
                            className="form__input"
                        />
                    </div>
                    <div className="row">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter password"
                            onChange={onChangeHandler}
                            
                            required
                            className="form__input"
                        />
                     
                  
                       
                     </div>

                     <div className="row">
                        <label htmlFor="Age">Age</label>
                        <input
                            type="text"

                            name="Age"
                            placeholder="Enter age"

                            
                            onChange={onChangeHandler}
                            errors={errors.Age}
                            required
                            className="form__input"
                        />
                       
                 </div>
                 <div className="row">
                    <label htmlFor="Phone">Phone Number</label>
                        <input
                            type="tel"
                            
                            name="Phone"
                            placeholder="Enter phone number"
                            onChange={onChangeHandler}
                            errors={errors.Phone}

                            required
                            className="form__input"
                        />
                    </div>
                    <div className="row">
                        <label htmlFor="Adress">Adress</label>
                        <input
                            type="text"
                            
                            name="Adress"
                            placeholder="Enter Adress"
                            onChange={onChangeHandler}
                            errors={errors.Adress}

                            required
                            className="form__input"
                        />
                    </div>
                    <div className="row">
                       
                          <label htmlFor="Role">Role</label>
                        <input
                            type="Role"
                            name="Role"
                            placeholder="Enter Role"
                            onChange={onChangeHandler}
                            errors={errors.Email}
                            required
                            className="form__input"
                        />
                            </div>
       
                            <div class="row">
      <button className="bttn" type="submit">Submit</button>
      {message && <div>{message}</div>}
      </div>
      </form>
    </div>
    </div>
    </div>
    </div>
    </div>
  );
  }

export default Register;