// index.js
document.addEventListener("DOMContentLoaded", function () {
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
        <ul class="topList" id="navList">
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
    document.body.appendChild(topbar);

    // Create Header
    const header = document.createElement('div');
    header.classList.add('header');
    header.innerHTML = `
        <div class="headerTitles">
            <span class="headerTitleSm">Computer Vision & ML</span>
            <span class="headerTitleLg">Innovation</span>
        </div>
        <img class="headerImg" src="https://cdn.pixabay.com/photo/2016/11/21/13/51/woman-1845517_1280.jpg" alt="Header Image">
    `;
    document.body.appendChild(header);

    // Create Home Content
    const home1 = document.createElement('div');
    home1.classList.add('home1');
    home1.innerHTML = `
        <div class="homeLeft">
            <img class="homeImg" src="https://images.pexels.com/photos/164572/pexels-photo-164572.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Our Services">
        </div>
        <div class="homeRight">
            <h3 class="homeHeader">Our Services</h3>
            <ul class="homeList">
                <li class="homeListItem">Camera Hardware and Lighting</li>
                <li class="homeListItem">End-to-End AI Software Solution</li>
                <li class="homeListItem">Image and Video Storage for Industrial Use</li>
                <li class="homeListItem">Manual and Robotic Turnkey Inspection Stations</li>
            </ul>
        </div>
    `;
    document.body.appendChild(home1);

    // Create Footer
    const footer = document.createElement('footer');
    footer.innerHTML = `
        <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0); display: flex; justify-content: center;">
            &copy; <script>document.write(new Date().getFullYear());</script> ComputerVisionML
        </div>
    `;
    document.body.appendChild(footer);
});
