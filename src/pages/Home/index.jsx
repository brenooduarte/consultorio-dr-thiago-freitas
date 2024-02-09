import './styles.scss'
import thiago from '../../assets/thiago.png'
import tooth from '../../assets/tooth.png'
import telephone from '../../assets/telephone.svg'

const Home = () => {
  return (
    <>

      <section className='initial-section'>
        
        <div className='header'>
          <img className='telephone-image' src={telephone} alt="Telephone" />
          <a className='telephone-number' href="">(83) 9 8179-4041</a>
          <a href="">Perfil</a>
          <a href="">Tratamentos</a>
          <a href="">Atendimento</a>
          <a href="">Espaço</a>
        </div>

        <div className='info-container'>
          <h1>Dr. Thiago Freitas</h1>
          <p>Agende sua consulta para cuidados <br />
            personalizados e resultados excepcionais. <br />
            Sorria com confiança!</p>
            <button className='button'>Agendar consulta</button>
        </div>
        

        <img className='thiago-image' src={thiago} alt="Thiago" />
        <img className='tooth' src={tooth} alt="Tooth" />
        <div className='rectangle'></div>        

      </section>

    </>
  )
}

export default Home
 