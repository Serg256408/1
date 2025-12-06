// Calculator Functions
let currentCalcStep = 1;

function nextStep(step) {
    // Hide current step
    document.querySelectorAll('.form-step').forEach(s => s.classList.remove('active'));
    
    // Show next step
    const nextStepEl = document.querySelector(`.form-step[data-step="${step}"]`);
    if (nextStepEl) {
        nextStepEl.classList.add('active');
        currentCalcStep = step;
    }
}

function setArea(area) {
    const areaInput = document.querySelector('input[name="area"]');
    if (areaInput) {
        areaInput.value = area;
    }
}

// Quiz Functions
let currentQuizStep = 1;

function quizNext(step) {
    // Hide current step
    document.querySelectorAll('.quiz-step').forEach(s => s.classList.remove('active'));
    
    // Show next step
    const nextStepEl = document.querySelector(`.quiz-step[data-step="${step}"]`);
    if (nextStepEl) {
        nextStepEl.classList.add('active');
        currentQuizStep = step;
        
        // Update progress
        updateQuizProgress(step);
        
        // Update current question number
        document.getElementById('currentQuestion').textContent = step;
    }
}

function updateQuizProgress(step) {
    const progressBar = document.getElementById('progressBar');
    if (progressBar) {
        const percentage = (step / 6) * 100;
        progressBar.style.width = percentage + '%';
    }
}

// Form Submissions
document.addEventListener('DOMContentLoaded', function() {
    // Quick Calculator Form
    const quickCalcForm = document.getElementById('quickCalc');
    if (quickCalcForm) {
        quickCalcForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleQuickCalcSubmit();
        });
    }

    // Full Quiz Form
    const fullQuizForm = document.getElementById('fullQuiz');
    if (fullQuizForm) {
        fullQuizForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleQuizSubmit();
        });
    }

    // Contact Form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleContactSubmit();
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

function handleQuickCalcSubmit() {
    const formData = new FormData(document.getElementById('quickCalc'));
    const data = Object.fromEntries(formData);
    
    console.log('Quick Calculator Data:', data);
    
    // Here you would send data to your backend
    // For MODX integration, this would be handled by FormIt/AjaxForm
    
    alert('Спасибо! Мы отправили расчёт на ваш телефон.');
    
    // Reset form
    document.getElementById('quickCalc').reset();
    nextStep(1);
}

function handleQuizSubmit() {
    const formData = new FormData(document.getElementById('fullQuiz'));
    const data = Object.fromEntries(formData);
    
    console.log('Quiz Data:', data);
    
    // Here you would send data to your backend
    // For MODX integration, this would be handled by FormIt/AjaxForm
    
    alert('Спасибо! Мы подготовили для вас расчёт и отправим его в течение 15 минут.');
    
    // Reset form
    document.getElementById('fullQuiz').reset();
    quizNext(1);
}

function handleContactSubmit() {
    const formData = new FormData(document.getElementById('contactForm'));
    const data = Object.fromEntries(formData);
    
    console.log('Contact Form Data:', data);
    
    // Here you would send data to your backend
    // For MODX integration, this would be handled by FormIt/AjaxForm
    
    alert('Спасибо за заявку! Мы свяжемся с вами в ближайшее время.');
    
    // Reset form
    document.getElementById('contactForm').reset();
}

// Phone mask
document.addEventListener('DOMContentLoaded', function() {
    const phoneInputs = document.querySelectorAll('input[type="tel"]');
    
    phoneInputs.forEach(input => {
        input.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            
            if (value.length > 0) {
                if (value[0] === '7') {
                    value = value.substring(1);
                }
                
                let formatted = '+7';
                if (value.length > 0) {
                    formatted += ' (' + value.substring(0, 3);
                }
                if (value.length >= 4) {
                    formatted += ') ' + value.substring(3, 6);
                }
                if (value.length >= 7) {
                    formatted += '-' + value.substring(6, 8);
                }
                if (value.length >= 9) {
                    formatted += '-' + value.substring(8, 10);
                }
                
                e.target.value = formatted;
            }
        });
    });
});

// Initialize Yandex Map (you'll need to add your API key)
function initMap() {
    if (typeof ymaps !== 'undefined') {
        ymaps.ready(function() {
            const map = new ymaps.Map('map', {
                center: [55.751244, 37.618423], // Moscow coordinates
                zoom: 10,
                controls: ['zoomControl', 'fullscreenControl']
            });

            // Add a placemark
            const placemark = new ymaps.Placemark([55.751244, 37.618423], {
                balloonContent: 'Транском - Асфальтирование в Москве'
            }, {
                preset: 'islands#yellowIcon'
            });

            map.geoObjects.add(placemark);
        });
    }
}

// Call initMap when page loads
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMap);
} else {
    initMap();
}
