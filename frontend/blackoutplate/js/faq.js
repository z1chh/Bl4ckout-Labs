document.addEventListener('DOMContentLoaded', () => {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            const answer = item.querySelector('.faq-answer');
            if (answer.style.display === 'block') {
                answer.style.display = 'none';
                question.querySelector('::after').textContent = '+';
            } else {
                // Close all open answers
                faqItems.forEach(faq => {
                    faq.querySelector('.faq-answer').style.display = 'none';
                    faq.querySelector('.faq-question::after').textContent = '+';
                });
                // Show the clicked answer
                answer.style.display = 'block';
                question.querySelector('::after').textContent = '-';
            }
        });
    });
});
