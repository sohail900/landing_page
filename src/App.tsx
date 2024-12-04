import AboutUs from './components/About'
import ContactUs from './components/ContactUs'
import Features from './components/Features'
import Hero from './components/Hero'
import Reviews from './components/Reviews'
import Screenshots from './components/Screenshots'
import Footer from './layout/Footer'
import Navbar from './layout/Navbar'

function App() {
    return (
        <>
            <Navbar />
            <div className='max-w-[1800px] mx-auto'>
                <Hero />
                <Features />
                <AboutUs />
                <Screenshots />
                <Reviews />
                <ContactUs />
                <Footer />
            </div>
        </>
    )
}

export default App
