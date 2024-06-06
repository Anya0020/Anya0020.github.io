import "./about.css"

const About = () =>{
    return(
        <section>
            <div className="container">
                <div className="about">
                    <h1>Մեր մասին</h1>
                </div>
                <div className="about-text">
                    <p>SCAN ME ժամանակակից այցեքարտ է ձեր բիզնեսի համար։ QR Code սկանավորելուց կբացվի մեր կողմից պատրաստած էջ, որտեղ կլինեն `
                    <br />
                    <br />
                    <div className="list">
                    <ul>
                        <li>Սոց. հարթակներ (Facebook, Instagram, Telegram...)</li>
                        <li>Հեռախոսահամար (Զանգելու հնարավորություն)</li>
                        <li>Մի փոքրիկ տեղեկություն ձեր բիզնեսի մասին։</li>
                        <li>Անժամկետ հասանելիություն</li>
                    </ul>
                    </div>
                    Մեկ SCAN ME քարտի արժեքն է 15.000 դրամ։
                   </p>
                </div>
            </div>
        </section>
    )
}

export default About