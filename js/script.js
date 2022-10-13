let readAll_btn = document.getElementById('readAll-btn');
readAll_btn.addEventListener('click', () => {
    Array.from(document.getElementsByClassName('notification')).forEach((el) => el.classList.remove('unread'))
})