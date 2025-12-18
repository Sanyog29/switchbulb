// Get elements
const bulb = document.getElementById('bulb');
const switchBtn = document.getElementById('switch');
const switchText = document.querySelector('.switch-text');

// Variable to track light state
let isOn = false;

// Add click event listener to switch
switchBtn.addEventListener('click', function() {
    if (isOn) {
        // Turn off the light
        bulb.classList.remove('on');
        switchBtn.classList.remove('active');
        switchText.textContent = 'OFF';
        document.body.classList.remove('light-on');
        isOn = false;
    } else {
        // Turn on the light
        bulb.classList.add('on');
        switchBtn.classList.add('active');
        switchText.textContent = 'ON';
        document.body.classList.add('light-on');
        isOn = true;
    }
});