export default function Specials(){
  return(
    <section className='specials'>
      <header>
        <h1>Specials</h1>
        <button>
          Online Menu
        </button>
      </header>
      <section className='cards'>
        <section>
          <figure className='image'></figure>
          <section className='desc'>
            <p><b>Greek Salad</b>$12.99</p>
            <article>
              Greek salad or horiatiki salad is a popular salad in Greek cuisine generally made with pieces of tomatoes, cucumbers, onion, feta cheese, and olives and dressed with salt, Greek oregano, and olive oil. Common additions include green bell pepper slices or caper berries.
            </article>
            <p>Order a delivery <span>&#x1F6F5;</span></p>
          </section>
        </section>
        <section>
          <figure className="image"></figure>
          <section className='desc'>
            <p><b>Bruschetta</b>$5.90</p>
            <article>
              Bruschetta is an antipasto from Italy consisting of grilled bread rubbed with garlic and topped with olive oil and salt. Variations may include toppings of tomato, vegetables, beans, cured meat, or cheese. In Italy, bruschetta is often prepared using a brustolina grill.
            </article>
            <p>Order a delivery <span>&#x1F6F5;</span></p>
          </section>
        </section>
        <section>
          <figure className='image'></figure>
          <section className='desc'>
            <p><b>Lemon Dessert</b>$4.99</p>
            <article>
            The lemon bar, also called lemon square, is a popular type of dessert bar in the United States consisting of a thin, shortbread crust and a lemon curd filling.
            </article>
            <p>Order a delivery <span>&#x1F6F5;</span></p>
          </section>
        </section>
      </section>
    </section>
  )
}