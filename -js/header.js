
function header_href_prefix(hrefprefix) {
  console.log('function href_prefix(' + hrefprefix + ');');
  const elements_with_href = document.querySelectorAll('.header a');
  const len = elements_with_href.length;
  for (let i = 0; i < len; i++) {
    elements_with_href[i].setAttribute('href', hrefprefix + elements_with_href[i].getAttribute('href'))
  }
  const header_img = document.querySelector('.header img');
  header_img.setAttribute('src', hrefprefix + header_img.getAttribute('src'));
}