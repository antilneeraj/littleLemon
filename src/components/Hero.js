import { useNavigate } from 'react-router-dom';

export default function Hero(){
  const navigate = useNavigate();
  function directToBook(){
    navigate('/book')
  }
  return (
    <section className='hero'>
      <section className='about'>
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          Little Lemon is a restaurant that delivers delicious meals at an affordable price to its customers on time. We offer lemonades, tortillas, and vegetables like potatoes, onions, etc. We also offer a variety of fruits. So if you also want to have some meal, order your food by clicking the button below.
        </p>
        <button onClick={directToBook}>
          Reserve a table
        </button>
      </section>
      <section className='heroImage'>
        <img src='./pictures/heroImage.jpg' alt='Hero' />
      </section>
    </section>
  )
}