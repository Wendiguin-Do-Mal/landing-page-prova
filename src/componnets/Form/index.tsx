import { useState } from "react";
import "./style.css"

function form() {
        //  let name: string;
        const [name, setName] = useState<string>('');
        const [email, setEmail] = useState<string>('');
        const [tel, setTel] = useState<number | string>('');
        const [engine, setEngine] = useState<string>('');
        const [specialization, setSpecialization] = useState<string>('');

       



  return (<>
    <section id="section-form" className="box-default">
      <h2 className="h2-default">Cadastre e participe agora mesmo!</h2>
      <p className="p-default">Entre nessa aventura e mostre do que você é capaz!!!</p>
      <form action="submit" >
        <fieldset className="fieldset-form">
          <label htmlFor="name" >Nome:</label>
          <input name='name' type="text" onChange={(e) => setName(e.target.value)} value={name} />
        </fieldset>
        <fieldset className="fieldset-form">
          <label htmlFor="email">Email:</label>
          <input name='email' type="text" onChange={(e) => setEmail(e.target.value)} value={email} />
        </fieldset>
        <fieldset className="fieldset-form">
          <label htmlFor="tel">Telefone:</label>
          <input name='tel' type="number" onChange={(e) => setTel(Number(e.target.value))} value={tel} />
        </fieldset>
        <fieldset className="fieldset-form">
          <label htmlFor="engine">Plataforma de Desenvolvimento:</label>
          <input name='engine' type="text" onChange={(e) => setEngine(e.target.value)} value={engine} />
        </fieldset>
        <fieldset className="fieldset-form">
          <label htmlFor="specialization">Especialização:</label>
          <input name='specialization' type="text" onChange={(e) => setSpecialization(e.target.value)} value={specialization} />
        </fieldset>

        <button type='submit' className="button-default">Enviar</button>

      </form>

     
    </section>

  </>
    
  )
}

export default form