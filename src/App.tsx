
import './App.css'
import'./componnets/animation.css'
import About from './componnets/About'
import BackgroundAnimated from './componnets/BackgroundAnimeted'
import Contact from './componnets/Contact'
import Curiosity from './componnets/Curiosity'
import Form from './componnets/Form'
import Header from './componnets/Header'
import Home from './componnets/Home'
import Rules from './componnets/Rules'

function App() {
 

  return (
    <>
    <div style={{
      display:"flex",
      flexDirection:"column",
      backgroundColor:"#000000",
      }}>
        <BackgroundAnimated/>
      <Header/>
      <Home/>
      <About/>
      <Rules/>
      <Form/>
      <Curiosity/>
      <Contact/>



    </div>
     
    </>
  )
}

export default App
