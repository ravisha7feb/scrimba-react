import Header from './Header';
import Socials from './Socials';
import Info from './Info';
import Footer from './Footer';
import "./business_card.css";

function BusinessCard(){
    return (
        <div className="card">
            <Header />
            <Socials />
            <Info />
            <Footer />
        </div>
    )
}
export default BusinessCard;
