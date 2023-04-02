import { useNavigate } from 'react-router-dom';

export default function Header(){
  const navigate = useNavigate();

  function redirect(e){
    e.preventDefault();
    navigate(e.target.getAttribute('href'), {replace:true})
  }

  return(
    <nav>
      <section className='navLogo'>
        <img src='./pictures/navLogo.png' alt='Little Lemon' />
      </section>
      <ul>
        {
          ['Home','About','Menu','Reservations', 'Order Online', 'Login'].map((str, index) => {
            return(
              <li key={index}>
                <a href={str==='Reservations'?'/book':str==='Home'?'/':`/`} onClick={redirect}>{str}</a>
              </li>
            )
          })
        }
      </ul>
    </nav>
  )
}

// #${str.toLowerCase()}