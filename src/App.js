// import React,{useState} from 'react';

// function App() {
//   const [formData,setFormData]=useState({
//     username:'',
//     email:'',
//     password:'',
//     confirmPassword:''
//   });

//   const [errors,setErrors]=useState({});

//   const validateForm=()=>{
//     let valid=true;
//     const newErrors={};
//     // username validation
//     if(formData.username.trim()===''){
//       newErrors.username='Username is required';
//       valid=false;
//     }
//     const emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if(!emailRegex.test(formData.email)){
//       newErrors.email='Invalid Email Address';
//       valid=false;
//     }
//     if(formData.password.length<6){
//       newErrors.password='Passwords must be atleast 6 characters long';
//       valid=false;
//     }

//     if(formData.confirmPassword!==formData.password){
//       newErrors.confirmPassword='Passwords doesnot match';
//       valid=false;
//     }
//     setErrors(newErrors);
//     return valid;
//   }
//  const handleSubmit=(e)=>{
//   e.preventDefault();
//   if(validateForm()){
//     console.log('Form Submitted Successfully');
//   }
//   else{
//     console.log('Form has error .fix that error');
//   }
//  }

//   const handleChange=(e)=>{
//     const {name,value}=e.target;
//     setFormData({...formData,[name]:value});
//   };
//   return (
//     <>
//       <center>
//         <form onSubmit={handleSubmit}>
//          <div>
//          <label>Username</label><br/>
//          <input
//          type="text"
//          name="username"
//          value={formData.username}
//          onChange={handleChange}/>
//          {errors.username && <p>{errors.username}</p>}
//          </div><br/>
//          <div>
//          <label>Email</label><br/>
//          <input
//          type="email"
//          name="email"
//          value={formData.email}
//          onChange={handleChange}/>
//          {errors.email && <p>{errors.email}</p>}
//          </div><br/>
//          <div>
//          <label>Password</label><br/>
//          <input
//          type="password"
//          name="password"
//          value={formData.password}
//          onChange={handleChange}/>
//          {errors.password && <p>{errors.password}</p>}
//          </div><br/>
//          <div>
//          <label>Confirm Password</label><br/>
//          <input
//          type="password"
//          name="confirmPassword"
//          value={formData.confirmPassword}
//          onChange={handleChange}/>
//          {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
//          </div><br/>
//          <button type="submit">Register</button>
//         </form>
//       </center>
//     </>
//   );
// }

// export default App;



import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const App = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      // .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
      //   publicKey: 'YOUR_PUBLIC_KEY',
      // })
       .sendForm('service_hv4cbwr', 'template_737tvar', form.current, {
        publicKey: '8OHsqDXRPepvPJkIv',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <label>PHONE NUMBER</label>
      <input type="number" name="number"/>
      <input type="submit" value="Send" />
    </form>
  );
};

export default App;


// import React,{useState} from 'react';

// const App=()=>{
//   const [name,setName]=useState(0)
//   return(
//     <div>
//  {name}
//  <button onClick={()=>setName(name+1)}>submit</button>
//     </div>
//   )
// }
// export default App;