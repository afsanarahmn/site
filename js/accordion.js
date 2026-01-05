const headers = document.querySelectorAll('.accordion-header');

headers.forEach(header => {
  header.addEventListener('click', () => {

    headers.forEach(h => {
      if (h !== header) {
        h.classList.remove('active');
        h.nextElementSibling.style.maxHeight = null;
      }
    });

    header.classList.toggle('active');
    const content = header.nextElementSibling;

    if (header.classList.contains('active')) {
      content.style.maxHeight = content.scrollHeight + 'px';
    } else {
      content.style.maxHeight = null;
    }
  });
});

/* =========================
   FIXED NESTED COURSES TOGGLE
========================= */
const nestedHeaders = document.querySelectorAll('.nested-header');

nestedHeaders.forEach(header => {
  header.addEventListener('click', () => {
    const content = header.nextElementSibling;
    const parentAccordion = header.closest('.accordion-content');
    const isOpen = header.classList.contains('active');

    if (isOpen) {
      // CLOSE
      header.classList.remove('active');
      content.style.maxHeight = null;
    } else {
      // OPEN
      header.classList.add('active');
      content.style.maxHeight = content.scrollHeight + 'px';
    }

    // Recalculate parent height AFTER animation
    setTimeout(() => {
      parentAccordion.style.maxHeight =
        parentAccordion.scrollHeight + 'px';
    }, 350);
  });
});


