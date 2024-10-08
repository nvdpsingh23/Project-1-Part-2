// about.js
document.addEventListener("DOMContentLoaded", function () {
    // Create the main container
    const body = document.body;

    // Create Topbar
    const topbar = document.createElement('div');
    topbar.classList.add('top');

    // Create Top Left
    const topLeft = document.createElement('div');
    topLeft.classList.add('topLeft');
    topLeft.innerHTML = '<span class="hamburger">&#9776;</span>';

    // Create Top Center
    const topCenter = document.createElement('div');
    topCenter.classList.add('topCenter');
    topCenter.innerHTML = `
        <ul class="topList">
            <li class="topListItem"><a href="index.html">Home</a></li>
            <li class="topListItem"><a href="about.html">About</a></li>
            <li class="topListItem"><a href="contact.html">Contact</a></li>
        </ul>
    `;

    // Create Top Right
    const topRight = document.createElement('div');
    topRight.classList.add('topRight');
    topRight.innerHTML = `
        <i class="topIcon">FB</i>
        <i class="topIcon">IG</i>
    `;

    // Append all parts to the topbar
    topbar.appendChild(topLeft);
    topbar.appendChild(topCenter);
    topbar.appendChild(topRight);
    body.appendChild(topbar);

    // Create About Content
    const aboutPage = document.createElement('div');
    aboutPage.classList.add('about-page');
    aboutPage.innerHTML = `
        <div class="background-image"></div>
        <div class="content">
            <h1>About Us</h1>
            <p>Welcome to ComputerVisionML, a pioneering startup at the forefront of Computer Vision and Machine Learning technologies. Our mission is to leverage innovative AI solutions to transform industries and enhance everyday experiences.</p>
            <h2>Our Vision</h2>
            <p>At ComputerVisionML, we envision a world where intelligent systems seamlessly integrate into daily life, empowering businesses and individuals alike to harness the potential of AI.</p>
            <h2>What We Offer</h2>
            <ul>
                <li>AI-Powered Image Recognition Solutions</li>
                <li>Advanced Data Analytics Services</li>
                <li>Custom Machine Learning Model Development</li>
                <li>Consulting and Support for AI Implementation</li>
            </ul>
        </div>
    `;

    // Append the About Content to the body
    body.appendChild(aboutPage);

    // Create Footer
    const footer = document.createElement('footer');
    footer.innerHTML = `
        <div class="text-center p-3">
            &copy; <script>document.write(new Date().getFullYear());</script> ComputerVisionML
        </div>
    `;
    
    // Append Footer to the body
    body.appendChild(footer);
});
