import About from './components/About'
import Cards from './components/Cards'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Team from './components/Team'
import Footer from './components/Footer'

function App() {

  return (
    <div className="App">
        <Navbar/>
        {/* <Hero /> */}
        <About/>
        <Cards/>
        <Team/>
        <Footer/>
    </div>
  )
}

export default App
