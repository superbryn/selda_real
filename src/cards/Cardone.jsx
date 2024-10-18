import "./Cardone.css"
import image from "./Designer.jpeg"

function Cardone() {
  return (
    <div className="cardone">
      <img src={image} alt="404" />
      <h3>What is Mizuko?</h3>
      <p>Mizuko is a Sign Expression Language Digital Assistant <br />
        designed to facilitate communication using sign <br />
        language, leveraging AI technology to interpret and <br />
        translate hand signs into text or speech, enhancing <br />
        accessibility for the hearing impaired.</p>
    </div>
  )
}

export default Cardone