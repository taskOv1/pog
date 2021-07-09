document.getElementById('trigger').onclick = () => {
  open();
};

function open() {
  document.getElementById('menu').classList.toggle('show');
  document.getElementById('body').classList.toggle('stop-scroll');
}