let currentStep = 0;
const steps = document.querySelectorAll('.step');
const icons = document.querySelectorAll('.icon');
const line = document.querySelector('.line');

document.getElementById('nextBtn').addEventListener('click', () => {
    if (currentStep < steps.length - 1) {
        steps[currentStep].classList.add('completed');
        steps[currentStep].classList.remove('active');
        steps[currentStep + 1].classList.add('active');
        currentStep++;
        updateLine();
        updateIcons();
    }
});

document.getElementById('prevBtn').addEventListener('click', () => {
    if (currentStep > 0) {
        steps[currentStep].classList.remove('active');
        steps[currentStep - 1].classList.remove('completed');
        steps[currentStep - 1].classList.add('active');
        currentStep--;
        updateLine();
        updateIcons();
    }
});

function updateLine() {
    const percentage = (currentStep / (steps.length - 1)) * 75;
    line.style.width = `${percentage}%`;
    line.classList.toggle('green', currentStep > 0);
}

function updateIcons() {
    icons.forEach((icon, index) => {
        if (index <= currentStep) {
            icon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16"><path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0"/></svg>`;
        } else {
            icon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16"><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/></svg>`;
        }
    });
}
steps[0].classList.add('active');
updateLine();
updateIcons();