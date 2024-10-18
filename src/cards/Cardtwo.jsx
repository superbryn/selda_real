import "./Cardtwo.css"
import image from "./google-tensor-flow-logo-black-S.webp"

function Cardone() {
  return (
    <div className="cardtwo">
      <img src={image} alt="404" />
      <h3>How Does Mizuko Work?</h3>
      <p>Mizuko works using TensorFlow, an AI framework <br />
        that powers the recognition of sign language gestures,<br />
        translating them into text or speech for improved <br />
        communication accessibility.</p>
    </div>
  )
}

export default Cardone