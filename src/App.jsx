
import Header from './components/Header';
import Socials from './components/Socials';
import Info from './components/Info';
import Footer from './components/Footer';
import "../style.css";

function App(){
    return (
        <div className="card">
            <Header />
            <Socials />
            <Info />
            <Footer />
        </div>
    )
}
export default App;
