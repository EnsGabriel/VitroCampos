// ---------- Menu mobile ----------
const navToggle = document.querySelector('.nav-toggle');
if (navToggle) {
  navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
  });
}

// ---------- Reveal on scroll ----------
const revealEls = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && revealEls.length) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealEls.forEach((el) => io.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add('in'));
}

// ---------- Ano automático no rodapé ----------
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ---------- Formulário de contacto -> WhatsApp ----------
function enviarPorWhatsApp(event) {
  event.preventDefault();

  const nome = document.getElementById('nome')?.value.trim() || '';
  const telefone = document.getElementById('telefone')?.value.trim() || '';
  const servicio = document.getElementById('servico')?.value || '';
  const mensaje = document.getElementById('mensagem')?.value.trim() || '';

  if (!nome || !telefone) {
    alert('Por favor completá al menos el nombre y el teléfono antes de enviar.');
    return false;
  }

  const partes = [
    `Hola VitroCampos! Soy ${nome}.`,
    `Teléfono: ${telefone}`,
    `Servicio de interés: ${servicio}`,
  ];
  if (mensaje) partes.push(`Detalle: ${mensaje}`);

  const texto = encodeURIComponent(partes.join('\n'));
  const numero = '595993649798';

  window.open(`https://wa.me/${numero}?text=${texto}`, '_blank');
  return false;
}
