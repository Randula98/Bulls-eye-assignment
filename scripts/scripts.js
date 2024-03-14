//import navbar component
fetch('components/NavBar.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('navbarComponent').innerHTML = data;
    });

//import hero component
fetch('components/Hero.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('heroComponent').innerHTML = data;
    });

//import solutions component
fetch('components/Solutions.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('solutionsComponent').innerHTML = data;
    });

//import products component
fetch('components/Products.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('productsComponent').innerHTML = data;
    });

//import industries component
fetch('components/Industries.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('industriesComponent').innerHTML = data;
    });

//import contact us component
fetch('components/ContactUs.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('contactUsComponent').innerHTML = data;
    });

//import footer component
fetch('components/Footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('footerComponent').innerHTML = data;
    });