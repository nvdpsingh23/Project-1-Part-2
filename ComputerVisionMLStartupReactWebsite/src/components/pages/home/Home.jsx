import "./Home.css"
import Header from "../../header/Header.jsx"
export default function Home() {
  return (
    <div className="home">
       <Header/>
      <div className="home1">
      <div className="homeLeft">
      <img className="homeImg" 
      src="https://images.pexels.com/photos/164572/pexels-photo-164572.jpeg?auto=compress&cs=tinysrgb&w=1200"
      alt="Error"
      />
      </div>
      <div className="homeRight">
        <h3 className="homeHeader">Our Services</h3>
         <ul className="homeList">
          <li className="homeListItem">Camera Hardware and Lighting</li>
          <li className="homeListItem">End-to-End AI Software Solution</li>
          <li className="homeListItem">Image and video Storage For Industrial Use</li>
          <li className="homeListItem">Manual and Robotic Turnkey Inspection Stations</li>
         </ul>
      </div>
      </div>
    </div>
  )
}
