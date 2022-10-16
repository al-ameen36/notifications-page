let notification_count = document.getElementById('notification-count')
notification_count.innerHTML = document.getElementsByClassName('unread').length

let readAll_btn = document.getElementById('readAll-btn');
readAll_btn.addEventListener('click', () => {
    Array.from(document.getElementsByClassName('notification')).forEach((el) => el.classList.remove('unread'))
    notification_count.innerHTML = document.getElementsByClassName('unread').length
})

let unread_notifications = document.getElementsByClassName('unread')
Array.from(unread_notifications).forEach((unread) => {
    unread.addEventListener('click', function () {
        this.classList.remove('unread')
        notification_count.innerHTML = document.getElementsByClassName('unread').length
    })
})