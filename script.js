const API_ADVICE = 'https://api.adviceslip.com/advice';

const advice = document.querySelector('#advice');
const nextBtn = document.querySelector('#next-btn');
const adviceId = document.querySelector('#advice-id');

const getAdvice = async () => {
    try {
        const response = await fetch(API_ADVICE);
        const data = await response.json();
        advice.innerHTML = `"${data.slip.advice}"`;
        adviceId.innerHTML = `#${data.slip.id}`;
    } catch (error) {
        console.log('Error: ', error);
    }
}

// nextBtn.addEventListener('click', getAdvice);