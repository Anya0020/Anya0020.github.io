import "./logo.css"
import logo from "../../image/Brown & Beige Aesthetic Minimalist Font Initials Logo.png"
import paint1 from "../../image/paint 1.png"

const Logo = () =>{
    return(
        <header>
            <div className="container">
                <div className="logo-paint">
                    <img src={paint1} alt="" />
                </div>
                <div className="logo">
                    <img src={logo} alt="" />
                    <p>SCAN ME</p>
                </div>
            </div>
        </header>
    )
}

export default Logo