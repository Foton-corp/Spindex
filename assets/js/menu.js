window.addEventListener('load', () => {
  const profileMenu = document.getElementsByClassName('profile-menu')[0],
        menu = document.getElementsByClassName('menu')[0],
        close = document.getElementsByClassName('close')[0];
  menu.addEventListener('click', () => {
    profileMenu.classList.add('showProfile');
    profileMenu.setAttribute('style', 'display: block !important');
    profileMenu.classList.remove('col-md-3');
    profileMenu.classList.add('col-md-8');
  })

  close.addEventListener('click', () => {
    profileMenu.classList.remove('showProfile');
    profileMenu.setAttribute('style', 'display: none');
    profileMenu.classList.remove('col-md-8');
    profileMenu.classList.add('col-md-3');
  })
});
