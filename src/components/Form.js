
export default function Form(props){
  function focusTarget(e){
    e.preventDefault();
    e.target.nextElementSibling.focus();
  }
  return(
    <section className='form' aria-label='form'>
      <form onSubmit={props.onSubmit}>
        <header><h1>Reserve a Table</h1></header>
        <label onClick={focusTarget} data-testid='label' labelfor="name">Name :</label>
        <input data-testid='name' id='name' type='text' placeholder='Name, eg. John Doe' required aria-required />
        <label onClick={focusTarget} data-testid='label' labelfor="phone">Phone No. :</label>
        <input data-testid='phone' id='phone' type='tel' placeholder='Phone no.' required aria-required />
        <label onClick={focusTarget} data-testid='label' labelfor="guests">Number of Guests :</label>
        <input data-testid='guest' id='guests' type='number' placeholder='Number of guests' required aria-required />
        <label onClick={focusTarget} data-testid='label' labelfor="date">Date :</label>
        <input data-testid='date' id='date' type='date' onChange={props.onDate} required aria-required />
        <label onClick={focusTarget} data-testid='label' labelfor="time" title='First select date to show up time.'>Time :</label>
        <select data-testid='time' id='time' required aria-required title='First select date to show up time.'>
          <option>Select time</option>
          <Times availTimes = {props.times} />
        </select>
        <label onClick={focusTarget} data-testid='label' labelfor="occassion">Occassion (optional) :</label>
        <select id='occassion'>
          <option>Select occassion</option>
          <option>Anniversary</option>
          <option>Birthday</option>
        </select>
        <button data-testid='submit' type='submit'>Submit</button>
      </form>
    </section>
  )
}

function Times(props){
  return (
    (props.availTimes)?props.availTimes.map((time,index) => <option key={index}>{time}</option>):''
  )
}