export function renderFooter(): HTMLElement {
    const footer = document.createElement('footer');
  
    footer.classList.add('footer');
    footer.innerHTML = `
    <a href="https://github.com/anagagnidze1" class="footer__btn-github btn">
      <img src="./assets/icons/github.svg" alt="github" class="footer__github-logo logo" />
    </a>
    <p class="footer__text">Async Race 2024</p>
    <a href="https://rs.school/js/" class="footer__btn-rsschool btn">
      <img src="./assets/icons/rs_school_js.svg" alt="rsschool" class="footer__rsschool-logo logo" />
    </a>
    `;
  
    return footer;
  }
  