import "./About.css";

export default function About() {
  return (
    <div className="about-page">
      <li className="background-image"></li>
      <div className="content">
        <h1>About Us</h1>
        <p>
          Welcome to ComputerVisionML, a pioneering startup at the forefront of 
          Computer Vision and Machine Learning technologies. Our mission is to 
          leverage innovative AI solutions to transform industries and enhance 
          everyday experiences. 
        </p>
        <h2>Our Vision</h2>
        <p>
          At ComputerVisionML, we envision a world where intelligent systems 
          seamlessly integrate into daily life, empowering businesses and 
          individuals alike to harness the potential of AI.
        </p>
        <h2>What We Offer</h2>
        <ul>
          <li>AI-Powered Image Recognition Solutions</li>
          <li>Advanced Data Analytics Services</li>
          <li>Custom Machine Learning Model Development</li>
          <li>Consulting and Support for AI Implementation</li>
        </ul>
        <h2>Meet Our Team</h2>
        <p>
          Our diverse team of experts in AI, machine learning, and software 
          engineering is committed to delivering cutting-edge solutions 
          tailored to our clients' unique needs.
        </p>
      </div>
    </div>
  );
}
