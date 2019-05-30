(function() {
  // login js
  const welcomeBlock = $('.welcome__block')[0];
  const loginBlock = $('.login')[0];
  const authBtn = $('.welcome__auth-btn')[0];
  const goMainBtn = $('#go-main');

  $(authBtn).on('click', (e) => {
    e.preventDefault();
    $(authBtn).addClass('welcome__block--hide');
    $(welcomeBlock).addClass('welcome__block--hide');
    $(loginBlock).addClass('login--show');


  });

  $(goMainBtn).on('click', (e) => {
    e.preventDefault();
    $(authBtn).removeClass('welcome__block--hide');
    $(welcomeBlock).removeClass('welcome__block--hide');
    $(loginBlock).removeClass('login--show');
  });

  const manCeckbox = $('.login__custom-checkbox')[0];
  $(manCeckbox).on('click', (e) => {
    $(manCeckbox).toggleClass('login__custom-checkbox--active')
  });

  const sidebarToggle = $('.sidebar__toggle')[0];
  const sidebar = $('.sidebar')[0];
  $(sidebarToggle).on('click', (e) => {
    $(sidebar).toggleClass('sidebar--active')
  });




})();
