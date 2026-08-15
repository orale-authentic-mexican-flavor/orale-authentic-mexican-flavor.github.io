// Órale – Authentic Mexican Flavor Limited
// Generador de formatos HACCP en DOCX (ES/EN) — HACCP-01 a HACCP-09
// Usa la librería npm "docx". No requiere Python ni LibreOffice.

const fs = require('fs');
const path = require('path');
const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  WidthType, AlignmentType, BorderStyle, ShadingType, HeightRule,
  VerticalAlign, PageOrientation, Header, Footer
} = require('docx');

const config = require('../config.js');

const COLOR_ROJO = 'B22222';
const COLOR_GRIS_OSCURO = '2E4053';
const COLOR_GRIS_TEXTO = '555555';
const FILL_HEADER = '2E4053';
const FILL_BLANCO = 'FFFFFF';
const FILL_GRIS_CLARO = 'F5F5F5';

// A4 en twips (1/20 pt) — el negocio opera en Irlanda/UE.
const A4_WIDTH = 11906;
const A4_HEIGHT = 16838;

const BORDER = { style: BorderStyle.SINGLE, size: 4, color: 'CCCCCC' };
const CELL_BORDERS = { top: BORDER, bottom: BORDER, left: BORDER, right: BORDER };

function headerParagraphs(formato, lang) {
  const fecha = lang === 'es' ? config.fechaEmision : config.fechaEmisionEN;
  return [
    new Paragraph({
      children: [
        new TextRun({
          text: 'ÓRALE – AUTHENTIC MEXICAN FLAVOR',
          bold: true,
          color: COLOR_ROJO,
          font: 'Arial',
          size: 24
        })
      ]
    }),
    new Paragraph({
      children: [
        new TextRun({
          text: formato.nombre,
          bold: true,
          color: COLOR_GRIS_OSCURO,
          font: 'Arial',
          size: 24
        })
      ]
    }),
    new Paragraph({
      children: [
        new TextRun({
          text: `${lang === 'es' ? 'Versión' : 'Version'} ${config.version} · ${fecha}`,
          font: 'Arial',
          size: 20,
          color: COLOR_GRIS_TEXTO
        })
      ],
      spacing: { after: 120 }
    })
  ];
}

function footerParagraph(formato, lang) {
  const etiqueta = lang === 'es' ? 'Formato' : 'Format';
  return new Paragraph({
    alignment: AlignmentType.CENTER,
    children: [
      new TextRun({
        text: `${config.empresa} · CRO ${config.cro} · ${etiqueta} ${formato.id} v${config.version}`,
        italics: true,
        font: 'Arial',
        size: 16,
        color: COLOR_GRIS_TEXTO
      })
    ]
  });
}

function instruccionParagraph(formato, lang) {
  const etiqueta = lang === 'es' ? 'Instrucciones: ' : 'Instructions: ';
  return new Paragraph({
    spacing: { after: 200 },
    children: [
      new TextRun({ text: etiqueta, bold: true, italics: true, font: 'Arial', size: 20 }),
      new TextRun({ text: formato.instruccion, italics: true, font: 'Arial', size: 20 })
    ]
  });
}

function headerRow(columnas) {
  const pct = Math.floor(10000 / columnas.length) / 100;
  return new TableRow({
    tableHeader: true,
    children: columnas.map((titulo) => new TableCell({
      width: { size: pct, type: WidthType.PERCENTAGE },
      shading: { fill: FILL_HEADER, type: ShadingType.CLEAR, color: 'auto' },
      verticalAlign: VerticalAlign.CENTER,
      borders: CELL_BORDERS,
      margins: { top: 80, bottom: 80, left: 100, right: 100 },
      children: [new Paragraph({
        alignment: AlignmentType.CENTER,
        children: [new TextRun({ text: titulo, bold: true, color: 'FFFFFF', font: 'Arial', size: 24 })]
      })]
    }))
  });
}

function blankRow(numCols, alt) {
  const pct = Math.floor(10000 / numCols) / 100;
  const fill = alt ? FILL_GRIS_CLARO : FILL_BLANCO;
  const cells = [];
  for (let i = 0; i < numCols; i++) {
    cells.push(new TableCell({
      width: { size: pct, type: WidthType.PERCENTAGE },
      shading: { fill, type: ShadingType.CLEAR, color: 'auto' },
      borders: CELL_BORDERS,
      margins: { top: 80, bottom: 80, left: 100, right: 100 },
      children: [new Paragraph({ children: [new TextRun({ text: '', font: 'Arial', size: 20 })] })]
    }));
  }
  return new TableRow({
    height: { value: 480, rule: HeightRule.ATLEAST },
    children: cells
  });
}

function buildTable(formato) {
  const rows = [headerRow(formato.columnas)];
  for (let i = 0; i < formato.filas; i++) {
    rows.push(blankRow(formato.columnas.length, i % 2 === 1));
  }
  return new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    rows
  });
}

function notaPieParagraph(formato) {
  if (!formato.notaPie) return null;
  return new Paragraph({
    spacing: { before: 200 },
    children: [new TextRun({ text: formato.notaPie, italics: true, font: 'Arial', size: 18, color: COLOR_GRIS_TEXTO })]
  });
}

function buildDocument(formato, lang) {
  const orientation = formato.orientacion === 'landscape'
    ? PageOrientation.LANDSCAPE
    : PageOrientation.PORTRAIT;

  const children = [
    ...headerParagraphs(formato, lang),
    instruccionParagraph(formato, lang),
    buildTable(formato)
  ];
  const nota = notaPieParagraph(formato);
  if (nota) children.push(nota);

  return new Document({
    sections: [{
      properties: {
        page: {
          size: { orientation, width: A4_WIDTH, height: A4_HEIGHT },
          margin: { top: 720, bottom: 720, left: 720, right: 720 }
        }
      },
      headers: { default: new Header({ children: [] }) },
      footers: { default: new Footer({ children: [footerParagraph(formato, lang)] }) },
      children
    }]
  });
}

const FORMATOS_ES = [
  {
    id: 'HACCP-01',
    nombre: 'HACCP-01 — Control de Temperaturas de Cocción',
    instruccion: 'Registrar la temperatura interna de cada lote cocido. Límite crítico: ≥75°C.',
    orientacion: 'landscape',
    filas: 20,
    columnas: ['Fecha', 'Platillo / Lote', 'Hora inicio', 'Temperatura interna (°C)', '¿≥75°C? Sí/No', 'Hora fin', 'Acción correctiva', 'Responsable / Firma']
  },
  {
    id: 'HACCP-02',
    nombre: 'HACCP-02 — Control de Enfriamiento Rápido',
    instruccion: 'Registrar temperaturas durante el enfriamiento. Límite crítico: de >63°C a <5°C en máximo 6 horas.',
    orientacion: 'landscape',
    filas: 10,
    columnas: ['Fecha', 'Producto / Lote', 'Hora inicio', 'Temp. a 30 min (°C)', 'Temp. a 1 h (°C)', 'Temp. a 2 h (°C)', 'Temp. final (°C)', '¿<5°C en 6 h? Sí/No', 'Acción correctiva', 'Responsable']
  },
  {
    id: 'HACCP-03',
    nombre: 'HACCP-03 — Control de Temperatura en Servicio',
    instruccion: 'Verificar temperatura en chafing dish cada 2 horas. Límite crítico: ≥63°C en todo momento.',
    orientacion: 'landscape',
    filas: 20,
    columnas: ['Fecha', 'Producto', 'Hora medición', 'Temperatura (°C)', '¿≥63°C? Sí/No', 'Acción correctiva', 'Responsable / Firma']
  },
  {
    id: 'HACCP-04',
    nombre: 'HACCP-04 — Control de Recepción de Mercancía y Trazabilidad de Proveedor',
    instruccion: 'Completar en cada entrega de proveedor. Rechazar si temperatura >5°C en refrigerados o envase dañado. Conservar mínimo 3 años para alimentos de origen animal.',
    orientacion: 'landscape',
    filas: 15,
    columnas: ['Fecha', 'Proveedor (nombre y dirección)', 'Producto', '¿Origen animal? Sí/No', 'Temp. recepción (°C)', 'Fecha caducidad', '¿Envase OK? Sí/No', '¿Aspecto OK? Sí/No', '¿Aceptado? Sí/No', 'Acción si rechazo', 'Responsable']
  },
  {
    id: 'HACCP-05',
    nombre: 'HACCP-05 — Control de Temperatura del Refrigerador',
    instruccion: 'Verificar y registrar dos veces al día. Límite crítico: <5°C en todo momento.',
    orientacion: 'portrait',
    filas: 31,
    columnas: ['Fecha', 'Hora mañana', 'Temp. mañana (°C)', '¿<5°C? Sí/No', 'Hora noche', 'Temp. noche (°C)', '¿<5°C? Sí/No', 'Acción correctiva', 'Responsable']
  },
  {
    id: 'HACCP-06',
    nombre: 'HACCP-06 — Registro de Limpieza y Desinfección Diaria',
    instruccion: 'Completar al cierre de cada jornada de preparación y de punto de venta.',
    orientacion: 'landscape',
    filas: 20,
    columnas: ['Fecha', 'Zona / Equipo', 'Hora limpieza', 'Producto usado', '¿Enjuagado? Sí/No', '¿Desinfectado? Sí/No', 'Responsable / Firma'],
    notaPie: 'Zonas a verificar: Superficies cocina doméstica | Estufa y extractor | Tablas de corte | Chafing dishes | Mesa punto de venta | Estación lavado de manos'
  },
  {
    id: 'HACCP-07',
    nombre: 'HACCP-07 — Registro de Incidentes y Acciones Correctivas',
    instruccion: 'Completar ante cualquier desviación de límite crítico, queja de cliente o incidente de seguridad alimentaria.',
    orientacion: 'landscape',
    filas: 10,
    columnas: ['Fecha', 'Descripción del incidente', 'PCC / Etapa afectada', 'Producto implicado', 'Acción correctiva tomada', 'Resultado', '¿Notificado al Director? Sí/No', '¿Notificado al HSE? Sí/No', 'Responsable / Firma']
  },
  {
    id: 'HACCP-08',
    nombre: 'HACCP-08 — Registro de Calibración de Termómetros',
    instruccion: 'Calibrar mensualmente con agua helada (0°C) y agua hirviendo (100°C).',
    orientacion: 'landscape',
    filas: 12,
    columnas: ['Fecha', 'Termómetro (ID / descripción)', 'Temp. agua helada registrada (°C)', '¿≈0°C? Sí/No', 'Temp. agua hirviendo registrada (°C)', '¿≈100°C? Sí/No', '¿Calibración correcta? Sí/No', 'Acción si falla', 'Responsable / Firma']
  },
  {
    id: 'HACCP-09',
    nombre: 'HACCP-09 — Registro de Formación del Personal',
    instruccion: 'Completar al dar de alta a cada empleado y en revisiones anuales.',
    orientacion: 'landscape',
    filas: 10,
    columnas: ['Nombre completo', 'Rol', 'Curso / Certificación', 'Nivel (1/2/3)', 'Entidad formadora', 'Fecha de obtención', 'Fecha de renovación', 'Nº certificado', 'Firma del empleado']
  }
];

const FORMATOS_EN = [
  {
    id: 'HACCP-01',
    nombre: 'HACCP-01 — Cooking Temperature Control',
    instruccion: 'Record the internal temperature of each cooked batch. Critical limit: ≥75°C.',
    orientacion: 'landscape',
    filas: 20,
    columnas: ['Date', 'Dish / Batch', 'Start time', 'Internal temperature (°C)', '≥75°C? Yes/No', 'End time', 'Corrective action', 'Responsible / Signature']
  },
  {
    id: 'HACCP-02',
    nombre: 'HACCP-02 — Rapid Cooling Control',
    instruccion: 'Record temperatures during cooling. Critical limit: from >63°C to <5°C within 6 hours maximum.',
    orientacion: 'landscape',
    filas: 10,
    columnas: ['Date', 'Product / Batch', 'Start time', 'Temp. at 30 min (°C)', 'Temp. at 1 h (°C)', 'Temp. at 2 h (°C)', 'Final temp. (°C)', '<5°C within 6 h? Yes/No', 'Corrective action', 'Responsible']
  },
  {
    id: 'HACCP-03',
    nombre: 'HACCP-03 — Service Temperature Control',
    instruccion: 'Check chafing dish temperature every 2 hours. Critical limit: ≥63°C at all times.',
    orientacion: 'landscape',
    filas: 20,
    columnas: ['Date', 'Product', 'Time of check', 'Temperature (°C)', '≥63°C? Yes/No', 'Corrective action', 'Responsible / Signature']
  },
  {
    id: 'HACCP-04',
    nombre: 'HACCP-04 — Goods Receipt & Supplier Traceability Control',
    instruccion: 'Complete for every delivery. Reject if temperature >5°C for refrigerated goods or damaged packaging. Retain minimum 3 years for food of animal origin.',
    orientacion: 'landscape',
    filas: 15,
    columnas: ['Date', 'Supplier (name & address)', 'Product', 'Animal origin? Yes/No', 'Reception temp. (°C)', 'Best before / Use by', 'Packaging OK? Yes/No', 'Appearance OK? Yes/No', 'Accepted? Yes/No', 'Action if rejected', 'Responsible']
  },
  {
    id: 'HACCP-05',
    nombre: 'HACCP-05 — Refrigerator Temperature Control',
    instruccion: 'Check and record twice daily. Critical limit: <5°C at all times.',
    orientacion: 'portrait',
    filas: 31,
    columnas: ['Date', 'Morning time', 'Morning temp. (°C)', '<5°C? Yes/No', 'Evening time', 'Evening temp. (°C)', '<5°C? Yes/No', 'Corrective action', 'Responsible']
  },
  {
    id: 'HACCP-06',
    nombre: 'HACCP-06 — Daily Cleaning & Disinfection Record',
    instruccion: 'Complete at the end of each preparation and point of sale session.',
    orientacion: 'landscape',
    filas: 20,
    columnas: ['Date', 'Area / Equipment', 'Cleaning time', 'Product used', 'Rinsed? Yes/No', 'Disinfected? Yes/No', 'Responsible / Signature'],
    notaPie: 'Areas to check: Domestic kitchen surfaces | Hob and extractor | Chopping boards | Chafing dishes | Point of sale table | Handwashing station'
  },
  {
    id: 'HACCP-07',
    nombre: 'HACCP-07 — Incident & Corrective Action Record',
    instruccion: 'Complete for any critical limit deviation, customer complaint or food safety incident.',
    orientacion: 'landscape',
    filas: 10,
    columnas: ['Date', 'Incident description', 'CCP / Stage', 'Product involved', 'Corrective action taken', 'Result', 'Director notified? Yes/No', 'HSE notified? Yes/No', 'Responsible / Signature']
  },
  {
    id: 'HACCP-08',
    nombre: 'HACCP-08 — Thermometer Calibration Record',
    instruccion: 'Calibrate monthly using iced water (0°C) and boiling water (100°C).',
    orientacion: 'landscape',
    filas: 12,
    columnas: ['Date', 'Thermometer (ID / description)', 'Iced water temp. recorded (°C)', '≈0°C? Yes/No', 'Boiling water temp. recorded (°C)', '≈100°C? Yes/No', 'Calibration correct? Yes/No', 'Action if failed', 'Responsible / Signature']
  },
  {
    id: 'HACCP-09',
    nombre: 'HACCP-09 — Staff Training Record',
    instruccion: 'Complete when onboarding each employee and at annual reviews.',
    orientacion: 'landscape',
    filas: 10,
    columnas: ['Full name', 'Role', 'Course / Certification', 'Level (1/2/3)', 'Training provider', 'Date obtained', 'Renewal date', 'Certificate no.', 'Employee signature']
  }
];

async function generarSet(formatos, lang) {
  const outDir = path.join(__dirname, lang);
  fs.mkdirSync(outDir, { recursive: true });
  for (const formato of formatos) {
    const doc = buildDocument(formato, lang);
    const buffer = await Packer.toBuffer(doc);
    const filePath = path.join(outDir, `${formato.id}_${lang.toUpperCase()}.docx`);
    fs.writeFileSync(filePath, buffer);
    console.log(`OK: ${filePath} (${buffer.length} bytes)`);
  }
}

(async () => {
  console.log('Generando formatos HACCP en DOCX...');
  await generarSet(FORMATOS_ES, 'es');
  await generarSet(FORMATOS_EN, 'en');
  console.log('Listo.');
})();
