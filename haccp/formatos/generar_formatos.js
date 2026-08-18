// Órale – Authentic Mexican Flavor Limited
// Generador de formatos HACCP en DOCX (ES/EN) — HACCP-01 a HACCP-12
// Usa la librería npm "docx". No requiere Python ni LibreOffice.
// Fuente de verdad de contenido: docs/haccp/{es,en}/HACCP_Orale_v{version}_*.html §13

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

// HACCP-06: filas fijas por zona (no filas en blanco genéricas),
// replicando la tabla del HTML §13 (una fila pre-rellenada por zona).
function fixedRow(zona, numCols, alt) {
  const pct = Math.floor(10000 / numCols) / 100;
  const fill = alt ? FILL_GRIS_CLARO : FILL_BLANCO;
  const cells = [new TableCell({
    width: { size: pct, type: WidthType.PERCENTAGE },
    shading: { fill, type: ShadingType.CLEAR, color: 'auto' },
    borders: CELL_BORDERS,
    margins: { top: 80, bottom: 80, left: 100, right: 100 },
    children: [new Paragraph({
      children: [new TextRun({ text: zona, italics: true, color: COLOR_GRIS_TEXTO, font: 'Arial', size: 20 })]
    })]
  })];
  for (let i = 1; i < numCols; i++) {
    cells.push(new TableCell({
      width: { size: pct, type: WidthType.PERCENTAGE },
      shading: { fill, type: ShadingType.CLEAR, color: 'auto' },
      borders: CELL_BORDERS,
      margins: { top: 80, bottom: 80, left: 100, right: 100 },
      children: [new Paragraph({ children: [new TextRun({ text: '', font: 'Arial', size: 20 })] })]
    }));
  }
  return new TableRow({ height: { value: 480, rule: HeightRule.ATLEAST }, children: cells });
}

function buildFixedTable(formato) {
  const rows = [headerRow(formato.columnas)];
  formato.zonas.forEach((zona, i) => {
    rows.push(fixedRow(zona, formato.columnas.length, i % 2 === 0));
  });
  return new Table({ width: { size: 100, type: WidthType.PERCENTAGE }, rows });
}

// HACCP-06: línea de campos de cabecera (Fecha / Jornada) fuera de la tabla,
// como en el HTML.
function campoCabeceraParagraph(formato) {
  if (!formato.campoCabecera) return null;
  return new Paragraph({
    spacing: { after: 160 },
    children: [new TextRun({ text: formato.campoCabecera, font: 'Arial', size: 20 })]
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
    instruccionParagraph(formato, lang)
  ];
  const campo = campoCabeceraParagraph(formato);
  if (campo) children.push(campo);
  children.push(formato.zonas ? buildFixedTable(formato) : buildTable(formato));
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
    columnas: ['Fecha', 'Platillo/Lote', 'Hora inicio', 'Temperatura interna (°C)', '≥75°C Sí/No', 'Hora fin', 'Acción correctiva', 'Responsable/Firma']
  },
  {
    id: 'HACCP-02',
    nombre: 'HACCP-02 — Control de Enfriamiento Rápido',
    instruccion: 'Registrar las temperaturas durante el proceso de enfriamiento. Límite crítico: de >63°C a ≤5°C en un máximo de 6 horas.',
    orientacion: 'landscape',
    filas: 10,
    columnas: ['Fecha', 'Producto/Lote', 'Hora inicio', 'Temperatura 30 min (°C)', 'Temperatura 1 h (°C)', 'Temperatura 2 h (°C)', 'Temperatura final (°C)', '≤5°C en 6h Sí/No', 'Acción correctiva', 'Responsable']
  },
  {
    id: 'HACCP-03',
    nombre: 'HACCP-03 — Control de Temperatura en Servicio',
    instruccion: 'Verificar el chafing dish cada hora durante el servicio. Límite crítico: ≥63°C en todo momento.',
    orientacion: 'landscape',
    filas: 20,
    columnas: ['Fecha', 'Producto', 'Hora medición', 'Temperatura (°C)', '≥63°C Sí/No', 'Acción correctiva', 'Responsable/Firma']
  },
  {
    id: 'HACCP-04',
    nombre: 'HACCP-04 — Control de Recepción de Mercancía y Trazabilidad de Proveedor',
    instruccion: 'Completar en cada entrega. GN-16 §3.3 exige conservar hasta que pueda asumirse razonablemente que el alimento ha sido consumido. Como política interna, Órale conserva los registros de alimentos de origen animal durante un mínimo de 3 años.',
    orientacion: 'landscape',
    filas: 15,
    columnas: ['Fecha', 'Proveedor (nombre y dirección)', 'Producto', 'Cantidad / Volumen', 'Origen animal Sí/No', 'Temperatura recepción (°C)', 'Fecha caducidad', 'Envase OK Sí/No', 'Aspecto OK Sí/No', '¿Aceptado? Sí/No', 'Acción si rechazo', 'Responsable']
  },
  {
    id: 'HACCP-05',
    nombre: 'HACCP-05 — Control de Temperatura del Refrigerador',
    instruccion: 'Verificar dos veces al día (mañana y noche). Límite crítico: ≤5°C.',
    orientacion: 'landscape',
    filas: 31,
    columnas: ['Fecha', 'Hora mañana', 'Temperatura mañana (°C)', '≤5°C Sí/No', 'Hora noche', 'Temperatura noche (°C)', '≤5°C Sí/No', 'Acción correctiva', 'Responsable']
  },
  {
    id: 'HACCP-06',
    nombre: 'HACCP-06 — Registro de Limpieza y Desinfección Diaria',
    instruccion: 'Completar al cierre de cada jornada. Un formulario por día. Archivar en carpeta HACCP.',
    orientacion: 'portrait',
    campoCabecera: 'Fecha: _____ / _____ / _______        Jornada:  ☐ Cocina   ☐ Punto de venta',
    zonas: ['Superficies cocina doméstica', 'Estufa y extractor', 'Tablas de corte', 'Chafing dishes', 'Mesa punto de venta', 'Estación lavado de manos'],
    columnas: ['Zona / Equipo', 'Hora', 'Producto usado', '¿Enjuagado? Sí/No', '¿Desinfectado? Sí/No', 'Responsable / Firma']
  },
  {
    id: 'HACCP-07',
    nombre: 'HACCP-07 — Registro de Incidentes y Acciones Correctivas',
    instruccion: 'Completar ante cualquier desviación de un límite crítico o queja de cliente.',
    orientacion: 'landscape',
    filas: 10,
    columnas: ['Fecha', 'Descripción', 'PCC/Etapa', 'Producto', 'Acción correctiva', 'Resultado', 'Notificado Director Sí/No', 'Notificado HSE Sí/No', 'Responsable/Firma']
  },
  {
    id: 'HACCP-08',
    nombre: 'HACCP-08 — Registro de Calibración de Termómetros',
    instruccion: 'Calibrar mensualmente con agua helada (0°C) y agua hirviendo (100°C). Tolerancia de aceptación: ±1°C respecto del valor de referencia. Una lectura fuera de esta tolerancia invalida el termómetro: se retira de uso y se sustituye antes de la siguiente jornada de producción o servicio.',
    orientacion: 'landscape',
    filas: 12,
    columnas: ['Fecha', 'Termómetro ID', 'Temperatura agua helada (°C)', '≈0°C Sí/No', 'Temperatura agua hirviendo (°C)', '≈100°C Sí/No', 'Calibración correcta Sí/No', 'Acción si falla', 'Responsable/Firma']
  },
  {
    id: 'HACCP-09',
    nombre: 'HACCP-09 — Registro de Formación del Personal',
    instruccion: 'Completar al dar de alta a cada empleado y en cada revisión anual.',
    orientacion: 'landscape',
    filas: 10,
    columnas: ['Nombre completo', 'Rol', 'Curso/Certificación', 'Nivel 1/2/3', 'Entidad formadora', 'Fecha obtención', 'Fecha renovación', 'Número de certificado', 'Firma empleado']
  },
  {
    id: 'HACCP-10',
    nombre: 'HACCP-10 — Control de Temperatura del Congelador',
    instruccion: 'Límite crítico: ≤-18°C en todo momento. Verificar dos veces al día. Una vez descongelado, no recongelar.',
    orientacion: 'landscape',
    filas: 31,
    columnas: ['Fecha', 'Hora mañana', 'Temp. mañana (°C)', '¿≤-18°C? Sí/No', 'Hora noche', 'Temp. noche (°C)', '¿≤-18°C? Sí/No', 'Contenido (platillo/lote)', 'Acción correctiva', 'Responsable']
  },
  {
    id: 'HACCP-11',
    nombre: 'HACCP-11 — Registro de Descongelación y Entregas',
    instruccion: 'Completar para cada pedido. Descongelar siempre en refrigerador. Nunca a temperatura ambiente. Nunca recongelar.',
    orientacion: 'landscape',
    filas: 20,
    columnas: ['Fecha pedido', 'Referencia de pedido', 'Platillo', 'Fecha producción / congelación', 'Cantidad (porciones)', 'Inicio descongelación', 'Temp. refrigerador (°C)', '¿Caliente o congelado?', 'Temp. regeneración (°C)', '¿≥70°C? Sí/No', 'Hora de entrega', 'Responsable']
  },
  {
    id: 'HACCP-12',
    nombre: 'HACCP-12 — Verificación de Preparación en Frío (PCC1b)',
    instruccion: 'Completar antes de cada preparación de ingredientes sin tratamiento térmico posterior y en cada apertura de jornada de servicio. Todos los puntos deben cumplirse. Si alguno no se cumple, aplicar la acción correctiva de PCC1b y registrar la desviación en HACCP-07.',
    orientacion: 'landscape',
    filas: 20,
    columnas: ['Fecha', 'Hora', 'Preparación / platillo', 'Manos lavadas Sí/No', 'Vegetales lavados Sí/No', 'Superficie limpia y desinfectada Sí/No', 'Tabla verde exclusiva Sí/No', 'Utensilios exclusivos Sí/No', 'Sin crudo de origen animal en la superficie Sí/No', 'Temp. de conservación (°C)', '¿≤5°C? Sí/No', 'Manipulación con utensilio o guante Sí/No', 'Responsable']
  }
];

const FORMATOS_EN = [
  {
    id: 'HACCP-01',
    nombre: 'HACCP-01 — Cooking Temperature Control',
    instruccion: 'Record the internal temperature of each cooked batch. Critical limit: ≥75°C.',
    orientacion: 'landscape',
    filas: 20,
    columnas: ['Date', 'Dish/Batch', 'Start time', 'Internal temperature (°C)', '≥75°C Yes/No', 'End time', 'Corrective action', 'Responsible/Signature']
  },
  {
    id: 'HACCP-02',
    nombre: 'HACCP-02 — Rapid Cooling Control',
    instruccion: 'Record temperatures during the cooling process. Critical limit: from >63°C to ≤5°C within a maximum of 6 hours.',
    orientacion: 'landscape',
    filas: 10,
    columnas: ['Date', 'Product/Batch', 'Start time', 'Temperature 30 min (°C)', 'Temperature 1 h (°C)', 'Temperature 2 h (°C)', 'Final temperature (°C)', '≤5°C within 6h Yes/No', 'Corrective action', 'Responsible']
  },
  {
    id: 'HACCP-03',
    nombre: 'HACCP-03 — Service Temperature Control',
    instruccion: 'Check the chafing dish every hour during service. Critical limit: ≥63°C at all times.',
    orientacion: 'landscape',
    filas: 20,
    columnas: ['Date', 'Product', 'Measurement time', 'Temperature (°C)', '≥63°C Yes/No', 'Corrective action', 'Responsible/Signature']
  },
  {
    id: 'HACCP-04',
    nombre: 'HACCP-04 — Goods Receipt & Supplier Traceability Control',
    instruccion: 'Complete for every delivery. GN-16 §3.3 requires retaining records until food can reasonably be assumed to have been consumed. As internal policy, Órale retains records for food of animal origin for a minimum of 3 years.',
    orientacion: 'landscape',
    filas: 15,
    columnas: ['Date', 'Supplier (name & address)', 'Product', 'Quantity / Volume', 'Animal origin Y/N', 'Reception temperature (°C)', 'Best before / Use by', 'Packaging OK Y/N', 'Appearance OK Y/N', 'Accepted? Y/N', 'Action if rejected', 'Responsible']
  },
  {
    id: 'HACCP-05',
    nombre: 'HACCP-05 — Refrigerator Temperature Control',
    instruccion: 'Check twice daily (morning and evening). Limit: ≤5°C.',
    orientacion: 'landscape',
    filas: 31,
    columnas: ['Date', 'Morning time', 'Morning temperature (°C)', '≤5°C Yes/No', 'Evening time', 'Evening temperature (°C)', '≤5°C Yes/No', 'Corrective action', 'Responsible']
  },
  {
    id: 'HACCP-06',
    nombre: 'HACCP-06 — Daily Cleaning and Disinfection Log',
    instruccion: 'Complete at the end of each session. One form per day. File in the HACCP folder.',
    orientacion: 'portrait',
    campoCabecera: 'Date: _____ / _____ / _______        Session:  ☐ Kitchen   ☐ Point of sale',
    zonas: ['Domestic kitchen surfaces', 'Hob and extractor', 'Chopping boards', 'Chafing dishes', 'Point of sale table', 'Handwashing station'],
    columnas: ['Area / Equipment', 'Time', 'Product used', 'Rinsed? Yes/No', 'Disinfected? Yes/No', 'Responsible / Signature']
  },
  {
    id: 'HACCP-07',
    nombre: 'HACCP-07 — Incident and Corrective Action Log',
    instruccion: 'Complete for any deviation from a critical limit or customer complaint.',
    orientacion: 'landscape',
    filas: 10,
    columnas: ['Date', 'Description', 'CCP/Stage', 'Product', 'Corrective action', 'Result', 'Director notified Yes/No', 'HSE notified Yes/No', 'Responsible/Signature']
  },
  {
    id: 'HACCP-08',
    nombre: 'HACCP-08 — Thermometer Calibration Log',
    instruccion: 'Calibrate monthly using ice water (0°C) and boiling water (100°C). Acceptance tolerance: ±1°C from the reference value. A reading outside this tolerance invalidates the thermometer: it is withdrawn from use and replaced before the next production or service session.',
    orientacion: 'landscape',
    filas: 12,
    columnas: ['Date', 'Thermometer ID', 'Ice water temperature (°C)', '≈0°C Yes/No', 'Boiling water temperature (°C)', '≈100°C Yes/No', 'Calibration correct Yes/No', 'Action if failed', 'Responsible/Signature']
  },
  {
    id: 'HACCP-09',
    nombre: 'HACCP-09 — Staff Training Log',
    instruccion: 'Complete upon onboarding of each employee and at annual reviews.',
    orientacion: 'landscape',
    filas: 10,
    columnas: ['Full name', 'Role', 'Course/Certification', 'Level 1/2/3', 'Training body', 'Date obtained', 'Renewal date', 'Certificate Number', 'Employee signature']
  },
  {
    id: 'HACCP-10',
    nombre: 'HACCP-10 — Freezer Temperature Control',
    instruccion: 'Critical limit: ≤-18°C at all times. Check twice a day. Once defrosted, do not refreeze.',
    orientacion: 'landscape',
    filas: 31,
    columnas: ['Date', 'Morning time', 'Morning temp. (°C)', '≤-18°C? Yes/No', 'Evening time', 'Evening temp. (°C)', '≤-18°C? Yes/No', 'Contents (dish/batch)', 'Corrective action', 'Responsible']
  },
  {
    id: 'HACCP-11',
    nombre: 'HACCP-11 — Defrosting & Delivery Record',
    instruccion: 'Complete for every order. Always defrost in the refrigerator. Never at room temperature. Never refreeze.',
    orientacion: 'landscape',
    filas: 20,
    columnas: ['Order date', 'Order reference', 'Dish', 'Production / freezing date', 'Quantity (portions)', 'Defrosting start', 'Fridge temp. (°C)', 'Hot or frozen?', 'Reheating temp. (°C)', '≥70°C? Yes/No', 'Delivery time', 'Responsible']
  },
  {
    id: 'HACCP-12',
    nombre: 'HACCP-12 — Cold Preparation Verification (CCP1b)',
    instruccion: 'Complete before each preparation of ingredients with no subsequent heat treatment and at every opening of a service session. All points must be met. If any point is not met, apply the CCP1b corrective action and record the deviation in HACCP-07.',
    orientacion: 'landscape',
    filas: 20,
    columnas: ['Date', 'Time', 'Preparation / dish', 'Hands washed Y/N', 'Vegetables washed Y/N', 'Surface cleaned and disinfected Y/N', 'Dedicated green board Y/N', 'Dedicated utensils Y/N', 'No raw animal-origin food on surface Y/N', 'Holding temp. (°C)', '≤5°C? Y/N', 'Handled with utensil or glove Y/N', 'Responsible']
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
