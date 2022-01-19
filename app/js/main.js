window.addEventListener('DOMContentLoaded', () => {
    
    
    const modalTimer = setTimeout(openModal, 10000);
    
    function closeModal() {
        const modal = document.querySelector('.modal');

        modal.classList.add('hide');
        modal.classList.remove('show');
        document.body.style.overflow = '';
    }

    function openModal() {
        const modal = document.querySelector('.modal');

        modal.classList.add('show');
        modal.classList.remove('hide');
        document.body.style.overflow = 'hidden';
        clearInterval(modalTimer);
    }

    function modal() {
        const modalTrigger = document.querySelector('[data-modal]'),
                modal = document.querySelector('.modal');

                
        modalTrigger.addEventListener('click', () => {
            openModal();
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal || e.target.getAttribute('data-close') == '') {
                closeModal();
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.code == 'Escape' && modal.classList.contains('show')) {
                closeModal();
            }
        });

        

    }


    modal();


});