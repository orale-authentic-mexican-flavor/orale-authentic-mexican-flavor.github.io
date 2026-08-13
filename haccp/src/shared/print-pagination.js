// Órale – Authentic Mexican Flavor Limited
// Estimación de paginación para impresión (beforeprint/afterprint).
// No existe forma fiable en CSS puro de conocer el número de página exacto
// por elemento (counter(page)/counter(pages) de CSS GCPM no está
// implementado por ningún navegador mainstream) — este script calcula un
// total estimado de páginas y lo expone como data-attribute en cada
// .print-footer para uso futuro, sin alterar el texto fijo ya renderizado
// vía CSS (--print-footer-text, ver styles.css).

window.addEventListener('beforeprint', function () {
  const altoPagina = 1050;
  const altoContenido = document.body.scrollHeight;
  const totalPaginas = Math.ceil(altoContenido / altoPagina);

  const footers = document.querySelectorAll('.print-footer');
  footers.forEach(function (footer) {
    footer.setAttribute('data-page-total', totalPaginas);
  });
});

window.addEventListener('afterprint', function () {
  const footers = document.querySelectorAll('.print-footer');
  footers.forEach(function (footer) {
    footer.removeAttribute('data-page-total');
  });
});
