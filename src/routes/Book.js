import Header from "../components/Header";
import Form from "../components/Form";
import Footer from "../components/Footer";
import API from '../components/API';
import { useReducer, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


export default function BookPage(){
  const navigate = useNavigate();
  const updateTimes = (opt, times) => times

  const [times, dispatch] = useReducer(updateTimes, '')
  function dateChangeHandler(e){
    const date = new Date(e.target.value);
    dispatch(API.fetchAPI(date));
  }

  const initializeTimes = () => {
    const date = new Date();
    dispatch(API.fetchAPI(date));
  }

  useEffect(() => {
    initializeTimes()
  }, [])

  function submitHandler(e){
    e.preventDefault();
    const inputs = [...e.target.querySelectorAll('input'), ...e.target.querySelectorAll('select')];

    // validation
    
    if(!inputs[1].value.match(/^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/)){
      alert('Enter a valid phone number, that contains 10 digits, where regional code is optional');
      inputs[1].focus()
      return
    }
    if(new Date(inputs[3].value) < new Date()){
      alert('Enter a valid date. Past dates are not allowed.');
      inputs[3].focus()
      return
    }
    if(inputs[4].value==='Select time'){
      alert('Please select a time. The field is required.');
      inputs[4].focus()
      return
    }
    if(new Date(inputs[4].value).getTime() < new Date().getTime()){
      alert('Select a valid time. Past times are not allowed.')
      inputs[4].focus()
      return
    }

    const obj = ['name', 'phone', 'guests', 'date', 'time', 'occassion'].map((query, index) => [query, inputs[index].value==='Select occassion'?'No occassion':inputs[index].value])
    if(API.submitAPI(obj)){
      localStorage.setItem('LittleLemon', JSON.stringify({book: (localStorage.getItem('LittleLemon')?[...JSON.parse(localStorage.getItem('LittleLemon')).book,obj]:[obj])}))
      navigate('/submitted', {replace:true})
    };
  }

  return(
    <>
      <Header />
      <Form
        times = {times}
        onSubmit = {submitHandler}
        onDate = {dateChangeHandler}
       />
      <Footer />
    </>
  )
}