import { useNavigate } from 'react-router-dom';

export default function Footer(){
  const navigate = useNavigate();

  function redirect(e){
    e.preventDefault();
    navigate(e.target.getAttribute('href'), {replace:true})
  }

  return(
    <footer>
      <section className='fooLogo'>
        <img src='./pictures/fooLogo.png' alt='Logo' />
      </section>
      <section className='doormat'>
        <strong>Doormat Navigation</strong>
        <a href='/' onClick={redirect}>Home</a>
        <a href='/' onClick={redirect}>About</a>
        <a href='/' onClick={redirect}>Menu</a>
        <a href='/book' onClick={redirect}>Reservations</a>
        <a href='/' onClick={redirect}>Order Online</a>
        <a href='/' onClick={redirect}>Login</a>
      </section>
      <section className='contact'>
        <strong>Contact</strong>
        <p>Address</p>
        <p>Phone no.</p>
        <p>E-mail</p>
      </section>
      <section className='socialMedia'>
        <strong>Social Media Links</strong>
        <p>Twitter</p>
        <p>Facebook</p>
        <p>Instagram</p>
      </section>
    </footer>
  )
}