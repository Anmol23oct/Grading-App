import React, { useState,useEffect } from 'react'
import './ContactForm2.css'
import {db,storage,analytics} from './firebase.js'
import { getAnalytics, logEvent } from "firebase/analytics";
import {addDoc, collection} from 'firebase/firestore';
import {ref,uploadBytesResumable,getDownloadURL} from "firebase/storage";
import { async } from '@firebase/util';
import TitleText from '../../utils/TitleText'
const ContactForm2 = () => {
    TitleText('CodeBench - Help')
    const [name,setName] = useState("");
    const [email,setEmail]= useState("");
    const [message,setMessage] = useState("");
    const usersCollectionRef = collection(db,"Contacts")
    const [loader,setloader]=useState(false)
    const [isfile, setFile] = useState(null);
    const[errors, setErrors]= useState({});
    const handleFile =(e) =>{
        console.log(e)
        if (e.target.files[0]){
            setFile(e.target.files[0])
        }
        else{
            console.log("error in getting the file")
        }
        
    };
    const validate=()=>{
        let errors = {};
        if (!name){
            errors.name="Name is Required"
        }
        if (!email){
            errors.email="NetId is Required"
        }
        if (!message){
            errors.message="Message is Required"
        }
        return errors;
    }
// ------- Insert -----------
const handleSubmit = async(event) => {
    try {
      event.preventDefault();
      let errors=validate();
      if (Object.keys(errors).length) return setErrors(errors);
      let file = isfile;
      setloader(true)

        if (file!=null){

        

        var storagePath = 'uploads/' + file.name;

        const storageRef = ref(storage, storagePath);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on('state_changed', (snapshot) => {
            // progrss function ....
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
        }, 
        (error) => { 
            // error function ....
            console.log(error);
        }, 
        () => {
            // complete function ....
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log('File available at', downloadURL);
            addDoc(usersCollectionRef,{name:name,email:email,message:message, image:downloadURL, time: Date().toLocaleString()})
            .then(()=>{
                alert("Submitted, We will get back to you")
                setloader(false)
            }).catch((error)=>{
                alert(error.message)
                setloader(false)
            });
            setName("");
            setEmail("");
            setMessage("");
            setFile(null);
            });
        });
        }
        else{
            addDoc(usersCollectionRef,{name:name,email:email,message:message, time: Date().toLocaleString()})
            .then(()=>{
                alert("Submitted, We will get back to you")
                setloader(false)
            }).catch((error)=>{
                alert(error.message)
                setloader(false)
            });
            setName("");
            setEmail("");
            setMessage("");
            setFile(null);
        }
    } catch (error) { throw error;}  
  }



useEffect(() =>{
    const analytics = getAnalytics();
    logEvent(analytics, 'contact_us')
    console.log("contactus")
});

  return (
    
    <div className='app'>
        <form className='form' onSubmit={handleSubmit}>
            <h1>
                Contact Us for Queries
            </h1>

            <label>Name*</label>
            <input placeholder='Name'
            // error={errors.name ? {content: errors.name}: null}
            value={name}
            onChange={(e)=> setName(e.target.value)}
            />
            {errors.name ? <p>{errors.name}</p>: null}

            <label>NetId*</label>
            <input placeholder='NetId'
            // error={errors.email ? {content: errors.email}: null}
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
            />
            {errors.email ? <p>{errors.email}</p>: null}

            <label>Message*</label>
            <textarea placeholder='Message'
            // error={errors.message ? {content: errors.message}: null}   
            value={message}
            onChange={(e)=> setMessage(e.target.value)}></textarea>
            {errors.message ? <p>{errors.message}</p>: null}

            <label>Upload Screenshot (optional)</label>
            <input type="file" onChange={handleFile}/>
            <button type='submit' style={{background: loader ? "#ccc":"rgb(2,2,110)"}}>
            Submit</button>

        </form>
    </div>
  )
}

export default ContactForm2