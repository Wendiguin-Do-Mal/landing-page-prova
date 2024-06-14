import './style.css'

function contact() {
  return (

    <section id='section-contact' className='box-default'>
      <h1 className='h1-default'>Entre em Contato</h1>
      <h2 className='h2-default'>Em caso de duvida ou de mais detalhes sobre o evento entre em contato pelo:</h2>
      <div>
        <div >
          <p className='p-default'>nosso Whatsapp:</p>
          <a href=""> <img src="src\assets\whatsapp (3).png" alt="" />   </a>
        </div>
        <div>
          <p className='p-default'>nosso Instagram:</p>
          <a href=""><img src="src\assets\instagram (2).png" alt="" /></a>
        </div>
        <div>
          <p className='p-default'>e nosso twitter:</p>
          <a href=""><img src="src\assets\twitter.png" alt="" /></a>
        </div>
      </div>
      

   

    </section>
  )
}

export default contact