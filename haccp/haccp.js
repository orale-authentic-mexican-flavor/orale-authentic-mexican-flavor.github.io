// Órale – Authentic Mexican Flavor Limited
// Entry point principal
// Ejecuta ambas versiones ES y EN

const { execSync } = require('child_process');

console.log('Generando documentos HACCP – ES y EN...');

try {
  execSync('node src/es/haccp_es.js', { stdio: 'inherit' });
  execSync('node src/en/haccp_en.js', { stdio: 'inherit' });
  console.log('Generación completada.');
} catch (error) {
  console.error('Error durante la generación:', error.message);
  process.exit(1);
}
