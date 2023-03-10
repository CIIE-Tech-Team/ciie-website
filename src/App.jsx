import About from './components/About'
import Cards from './components/Cards'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Team from './components/Team'
import Footer from './components/Footer'
import Testimonials from './components/Testimonials'


function App() {

  return (
    <div className="App">
        <Navbar/>
        {/* <Hero /> */}
        <Cards/>
        <About/>
        <Testimonials/>
      

        
        
        <Footer/>
    </div>
  )
}

export default App
