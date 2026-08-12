// Órale – Authentic Mexican Flavor Limited
// Generador del Plan HACCP – Versión en Español
// Versión: 1.3
// Autor: David Enrique Ochoa Diaz
// NOTA: Este archivo consume datos desde config.js
// No hardcodear datos sensibles en este script

const fs = require('fs');
const path = require('path');
const config = require('../../config');
const i18n = require('../shared/i18n');

const LANG = 'es';

const BASE_HTML_PATH = path.join(__dirname, '..', 'shared', 'base.html');
const STYLES_SRC_PATH = path.join(__dirname, '..', 'shared', 'styles.css');
const STYLES_DEST_PATH = path.join(__dirname, '..', '..', 'outputs', 'shared', 'styles.css');
const OUTPUT_PATH = path.join(__dirname, '..', '..', 'outputs', 'es', 'HACCP_Orale_v1.3_ES.html');

// ---------------------------------------------------------------------------
// Contenido de las Secciones 1–6 (HTML inyectado en cada div.seccion-contenido)
// ---------------------------------------------------------------------------

const SECCION_1 = `
<h2 id="sec-1-1">1.1 Propósito</h2>
<p>El presente Plan HACCP ha sido elaborado conforme a los requisitos
de la Food Safety Authority of Ireland (FSAI), el Reglamento (CE)
N.º 852/2004 sobre higiene de los productos alimenticios, y las
directrices HACCP del Codex Alimentarius.</p>
<p>Este documento establece los procedimientos de seguridad alimentaria
para {{empresa}}, garantizando que todos los alimentos servidos sean
seguros para el consumo, identificando y controlando los peligros
relevantes en cada etapa del proceso.</p>

<h2 id="sec-1-2">1.2 Alcance</h2>
<p>Este plan cubre la modalidad de operación de Órale:</p>
<ul>
  <li><strong>Cocina de preparación:</strong> Apartamento doméstico en
  Limerick. Cocina estándar con estufa, extractor, horno, refrigerador
  y agua caliente. Sujeta a inspección y aprobación por HSE
  Environmental Health (Premises Ref: {{hse.premisesRef}}).</li>
  <li><strong>Transporte:</strong> Chafing dishes cubiertos y
  contenedores isotérmicos. Tiempo máximo 1 hora.</li>
  <li><strong>Venta en calle:</strong> Ubicaciones autorizadas por
  Limerick City & County Council.</li>
</ul>
<p><strong>Escala de producción (Fase 1):</strong> Volumen doméstico.
Ejemplo representativo: 20 porciones de pozole de 650 ml por jornada.</p>
<p><strong>Menú aplicable:</strong></p>
<ul>
  <li>Pozole rojo estilo Jalisco (V)</li>
  <li>Tacos al pastor (3 pzs)</li>
  <li>Tacos de carnitas (3 pzs)</li>
  <li>Tacos de cochinita pibil (3 pzs)</li>
  <li>Nachos con guacamole (V)</li>
  <li>Chilaquiles (V)</li>
  <li>Taco de nopales (V)</li>
  <li>Platillos rotativos: tamales, barbacoa, esquites, quesadillas</li>
</ul>

<h2 id="sec-1-3">1.3 Marco Regulatorio Aplicable</h2>
<table>
  <thead>
    <tr>
      <th>Regulación / Autoridad</th>
      <th>Requisito</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>FSAI (Food Safety Authority of Ireland)</td>
      <td>Registro obligatorio como food business; plan HACCP documentado</td>
    </tr>
    <tr class="alt">
      <td>HSE Environmental Health</td>
      <td>Inspección y aprobación de cocina de preparación
      (Premises Ref: {{hse.premisesRef}}); registros HACCP</td>
    </tr>
    <tr>
      <td>Reg. (CE) 852/2004</td>
      <td>Higiene de productos alimenticios – base legal europea</td>
    </tr>
    <tr class="alt">
      <td>Codex Alimentarius</td>
      <td>Siete principios HACCP aplicados en este documento</td>
    </tr>
    <tr>
      <td>Limerick City & County Council</td>
      <td>Casual Trading Licence y ubicaciones autorizadas</td>
    </tr>
    <tr class="alt">
      <td>Food Safety Training (Level 1/2)</td>
      <td>Formación obligatoria de todo el personal</td>
    </tr>
  </tbody>
</table>
`;

const SECCION_2 = `
<table>
  <thead>
    <tr>
      <th>Rol</th>
      <th>Persona Responsable</th>
      <th>Responsabilidades HACCP</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Director / HACCP Manager</td>
      <td>{{responsables.director}}</td>
      <td>
        <ul>
          <li>Responsable principal del plan</li>
          <li>Revisión y actualización del documento</li>
          <li>Auditorías internas</li>
          <li>Contacto con HSE y FSAI</li>
          <li>Coordinación de inspección de cocina doméstica</li>
        </ul>
      </td>
    </tr>
    <tr class="alt">
      <td>Operations & Compliance Manager</td>
      <td>{{responsables.operaciones}}</td>
      <td>
        <ul>
          <li>Supervisión diaria del punto de venta</li>
          <li>Implementación y mantenimiento del plan HACCP</li>
          <li>Registros de temperatura y control de recepción</li>
          <li>Control de alérgenos y limpieza</li>
          <li>Gestión de rutas, licencias y cumplimiento HSE/FSAI</li>
          <li>Primer respondedor ante incidencias de seguridad alimentaria</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Chef / Responsable de Cocina</td>
      <td>{{responsables.chef}}</td>
      <td>
        <ul>
          <li>Preparación de alimentos en cocina doméstica</li>
          <li>Control de temperaturas de cocción</li>
          <li>Separación de crudos y cocinados</li>
          <li>Higiene y limpieza de cocina</li>
          <li>Registros diarios de producción</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>
<p class="nota"><em>Requisito de formación: Todo el personal que
manipule alimentos deberá contar con Food Safety Level 1 como mínimo.
El Operations & Compliance Manager deberá acreditar Food Safety
Level 2 y HACCP antes de su incorporación.</em></p>
`;

const SECCION_3 = `
<h2 id="sec-3-1">3.1 Descripción General</h2>
<p>Órale elabora y sirve comida mexicana tradicional cocinada de forma
artesanal en cocina doméstica en Limerick. Los alimentos se preparan
el mismo día de venta en lotes de escala doméstica y se transportan
al punto de venta en chafing dishes y contenedores isotérmicos.
Se sirven directamente al consumidor final. No se realiza distribución
mayorista ni venta de productos envasados no etiquetados.</p>

<h2 id="sec-3-2">3.2 Tabla de Productos y Peligros Asociados</h2>
<table>
  <thead>
    <tr>
      <th>Producto</th>
      <th>Tipo proteína</th>
      <th>Temperatura servicio</th>
      <th>Principales alérgenos / peligros</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Pozole Rojo (V)</td>
      <td>Sin carne (maíz, chile)</td>
      <td>Caliente &gt;63°C</td>
      <td>Verificar salsas por gluten</td>
    </tr>
    <tr class="alt">
      <td>Tacos al Pastor</td>
      <td>Cerdo marinado</td>
      <td>Caliente &gt;63°C</td>
      <td>
        <ul>
          <li>Gluten (tortilla)</li>
          <li>Sulfitos (chile)</li>
          <li>Trazas de lácteos</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Tacos de Carnitas</td>
      <td>Cerdo</td>
      <td>Caliente &gt;63°C</td>
      <td>
        <ul>
          <li>Gluten (tortilla)</li>
          <li>Grasa animal</li>
        </ul>
      </td>
    </tr>
    <tr class="alt">
      <td>Tacos Cochinita Pibil</td>
      <td>Cerdo marinado</td>
      <td>Caliente &gt;63°C</td>
      <td>
        <ul>
          <li>Gluten (tortilla)</li>
          <li>Achiote/annatto</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Nachos con Guacamole (V)</td>
      <td>Sin carne</td>
      <td>Temperatura ambiente</td>
      <td>
        <ul>
          <li>Gluten (nachos)</li>
          <li>Lácteos (queso)</li>
          <li>Sulfitos</li>
        </ul>
      </td>
    </tr>
    <tr class="alt">
      <td>Chilaquiles (V)</td>
      <td>Sin carne (huevo opcional)</td>
      <td>Caliente &gt;63°C</td>
      <td>
        <ul>
          <li>Gluten (tortilla frita)</li>
          <li>Huevo</li>
          <li>Lácteos (crema/queso)</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Taco de Nopales (V)</td>
      <td>Vegetal</td>
      <td>Caliente &gt;63°C</td>
      <td>Gluten (tortilla). Bajo riesgo alérgeno.</td>
    </tr>
  </tbody>
</table>
`;

const SECCION_4 = `
<h2 id="sec-4-1">4.1 Venta en Calle con Cocina Doméstica</h2>
<p>Flujo completo desde la cocina doméstica hasta el punto de venta:</p>
<table>
  <thead>
    <tr>
      <th>#</th>
      <th>Etapa</th>
      <th>Descripción</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Compra de materias primas</td>
      <td>
        <ul>
          <li>Proveedores aprobados (Musgrave MarketPlace y otros)</li>
          <li>Verificación de calidad y fecha de caducidad</li>
          <li>Control de temperatura en punto de compra</li>
        </ul>
      </td>
    </tr>
    <tr class="alt">
      <td>2</td>
      <td>Recepción y almacenamiento en cocina doméstica</td>
      <td>
        <ul>
          <li>Carnes crudas en balda inferior del refrigerador</li>
          <li>Alimentos cocinados/listos en balda superior</li>
          <li>Productos secos en armario cerrado</li>
          <li>Sistema FIFO</li>
          <li>Registro de lotes en HACCP-04</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>3</td>
      <td>Preparación previa (mise en place)</td>
      <td>
        <ul>
          <li>Tablas de corte por código de color</li>
          <li>Roja: carne cruda</li>
          <li>Verde: vegetales</li>
          <li>Amarilla: aves</li>
          <li>Lavado de manos con agua caliente y jabón antes y
          después de cada tarea</li>
        </ul>
      </td>
    </tr>
    <tr class="alt">
      <td>4</td>
      <td>Cocción en cocina doméstica</td>
      <td>
        <ul>
          <li>Estufa doméstica con extractor</li>
          <li>Temperatura interna mínima 75°C en carnes</li>
          <li>Caldos y pozole: hervir y mantener &gt;85°C</li>
          <li>Verificación con termómetro sonda calibrado</li>
          <li>Registro en HACCP-01</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>5</td>
      <td>Enfriamiento rápido (si aplica)</td>
      <td>
        <ul>
          <li>De &gt;63°C a &lt;5°C en máx. 4 horas</li>
          <li>Baño de hielo en fregadero doméstico</li>
          <li>Porciones pequeñas para acelerar enfriamiento</li>
          <li>Registro en HACCP-02</li>
        </ul>
      </td>
    </tr>
    <tr class="alt">
      <td>6</td>
      <td>Carga en chafing dishes y contenedores</td>
      <td>
        <ul>
          <li>Chafing dishes cubiertos precalentados para
          alimentos calientes</li>
          <li>Contenedores herméticos refrigerados para
          alimentos fríos</li>
          <li>Etiquetado: producto, fecha y hora de preparación</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>7</td>
      <td>Transporte al punto de venta</td>
      <td>
        <ul>
          <li>Bolsas o maletines isotérmicos</li>
          <li>Tiempo máximo: 1 hora</li>
          <li>Verificación de temperatura al llegar (&gt;63°C)</li>
        </ul>
      </td>
    </tr>
    <tr class="alt">
      <td>8</td>
      <td>Montaje del punto de venta</td>
      <td>
        <ul>
          <li>Mesa de trabajo limpia y desinfectada</li>
          <li>Estación portátil de lavado de manos</li>
          <li>Agua potable, jabón líquido y papel desechable</li>
          <li>Gel desinfectante visible y accesible</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>9</td>
      <td>Mantenimiento caliente durante servicio</td>
      <td>
        <ul>
          <li>Chafing dishes mantienen temperatura &gt;63°C</li>
          <li>Control cada 2 horas con termómetro sonda</li>
          <li>Registro en HACCP-03</li>
          <li>Descartar si bajan de 63°C sin posibilidad de regenerar</li>
        </ul>
      </td>
    </tr>
    <tr class="alt">
      <td>10</td>
      <td>Armado y despacho al cliente</td>
      <td>
        <ul>
          <li>Porciones según gramaje estándar</li>
          <li>Manipulador único</li>
          <li>Comunicación activa de alérgenos al cliente</li>
          <li>Tiempo máximo de exposición: 2 horas</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>11</td>
      <td>Cierre y limpieza del punto de venta</td>
      <td>
        <ul>
          <li>Eliminación de sobrantes — no reutilizar</li>
          <li>Limpieza de chafing dishes, utensilios y mesa</li>
          <li>Registro de cierre en HACCP-06</li>
        </ul>
      </td>
    </tr>
    <tr class="alt">
      <td>12</td>
      <td>Limpieza de cocina doméstica</td>
      <td>
        <ul>
          <li>Limpieza de superficies, estufa y utensilios</li>
          <li>Desinfección con productos aprobados para uso alimentario</li>
          <li>Registro en HACCP-06</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>
`;

const SECCION_5 = `
<h2 id="sec-5-1">5.1 Leyenda de Riesgo</h2>
<table>
  <thead>
    <tr>
      <th>Puntuación</th>
      <th>Probabilidad</th>
      <th>Severidad</th>
      <th>Clasificación</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1–2</td>
      <td>Baja</td>
      <td>Baja</td>
      <td>PC (Punto de Control)</td>
    </tr>
    <tr class="alt">
      <td>3–4</td>
      <td>Media</td>
      <td>Media</td>
      <td>PC o PCC según contexto</td>
    </tr>
    <tr class="celda-riesgo-alto">
      <td>6–9</td>
      <td>Alta</td>
      <td>Alta</td>
      <td>PCC (Punto Crítico de Control)</td>
    </tr>
  </tbody>
</table>

<h2 id="sec-5-2">5.2 Tabla de Análisis de Peligros</h2>
<table>
  <thead>
    <tr>
      <th>Etapa</th>
      <th>Peligro biológico</th>
      <th>Peligro químico</th>
      <th>Peligro físico</th>
      <th>Prob.</th>
      <th>Sev.</th>
      <th>Riesgo</th>
      <th>Medida de control</th>
      <th>PCC?</th>
    </tr>
  </thead>
  <tbody>
    <tr class="celda-riesgo-alto">
      <td>Recepción MP</td>
      <td>Salmonella, E. coli, Listeria en carnes crudas</td>
      <td>Residuos de pesticidas</td>
      <td>Cuerpos extraños</td>
      <td>3</td><td>3</td><td>9</td>
      <td>
        <ul>
          <li>Verificar temperatura &lt;5°C</li>
          <li>Proveedor aprobado</li>
          <li>Inspección visual</li>
        </ul>
      </td>
      <td>SÍ</td>
    </tr>
    <tr class="celda-riesgo-medio">
      <td>Almacenamiento refrigerado</td>
      <td>Proliferación bacteriana por temperatura incorrecta</td>
      <td>Contaminación cruzada con productos de limpieza</td>
      <td>Contaminación física</td>
      <td>2</td><td>3</td><td>6</td>
      <td>
        <ul>
          <li>Refrigerador &lt;5°C</li>
          <li>Crudos abajo / cocinados arriba</li>
          <li>FIFO</li>
        </ul>
      </td>
      <td>SÍ</td>
    </tr>
    <tr class="celda-riesgo-alto">
      <td>Preparación / mise en place</td>
      <td>Contaminación cruzada carne cruda / alimentos listos</td>
      <td>Residuos de detergente en superficies</td>
      <td>Fragmentos de utensilios</td>
      <td>3</td><td>3</td><td>9</td>
      <td>
        <ul>
          <li>Tablas por código de color</li>
          <li>Lavado de manos con agua caliente y jabón</li>
          <li>Higiene de superficies</li>
        </ul>
      </td>
      <td>SÍ</td>
    </tr>
    <tr class="celda-riesgo-alto">
      <td>Cocción</td>
      <td>Supervivencia de patógenos (Salmonella, E. coli, Listeria)</td>
      <td>Ninguno significativo</td>
      <td>Ninguno</td>
      <td>2</td><td>3</td><td>6</td>
      <td>
        <ul>
          <li>Temperatura interna &gt;75°C</li>
          <li>Termómetro sonda calibrado</li>
        </ul>
      </td>
      <td>SÍ (PCC1)</td>
    </tr>
    <tr class="celda-riesgo-alto">
      <td>Enfriamiento rápido</td>
      <td>Proliferación en zona de peligro (5–63°C)</td>
      <td>Ninguno</td>
      <td>Ninguno</td>
      <td>3</td><td>3</td><td>9</td>
      <td>
        <ul>
          <li>De &gt;63°C a &lt;5°C en máx. 4 h</li>
          <li>Baño de hielo en fregadero</li>
        </ul>
      </td>
      <td>SÍ (PCC2)</td>
    </tr>
    <tr class="celda-riesgo-medio">
      <td>Transporte</td>
      <td>Rotura de cadena de frío/calor</td>
      <td>Ninguno</td>
      <td>Ninguno</td>
      <td>2</td><td>3</td><td>6</td>
      <td>
        <ul>
          <li>Chafing dishes cubiertos</li>
          <li>Tiempo &lt;1 h</li>
          <li>Verificación de temperatura al llegar</li>
        </ul>
      </td>
      <td>SÍ</td>
    </tr>
    <tr class="celda-riesgo-alto">
      <td>Mantención caliente en servicio</td>
      <td>Crecimiento bacteriano si temperatura baja de 63°C</td>
      <td>Ninguno</td>
      <td>Ninguno</td>
      <td>2</td><td>3</td><td>6</td>
      <td>
        <ul>
          <li>&gt;63°C en todo momento</li>
          <li>Control cada 2 h</li>
          <li>Desechar si baja del límite</li>
        </ul>
      </td>
      <td>SÍ (PCC3)</td>
    </tr>
    <tr class="celda-riesgo-medio">
      <td>Servicio al cliente</td>
      <td>Contaminación por manipulador</td>
      <td>Alérgenos no declarados</td>
      <td>Ninguno</td>
      <td>2</td><td>3</td><td>6</td>
      <td>
        <ul>
          <li>Higiene personal</li>
          <li>Lavado de manos</li>
          <li>Comunicación activa de alérgenos</li>
        </ul>
      </td>
      <td>SÍ</td>
    </tr>
  </tbody>
</table>
`;

const SECCION_6 = `
<h2 id="pcc1">PCC 1 – Cocción</h2>
<p><em>Cocina doméstica, estufa con extractor</em></p>
<table>
  <tbody>
    <tr>
      <td class="celda-header-verde">Peligro identificado</td>
      <td class="celda-riesgo-alto">Supervivencia de patógenos
      (Salmonella, E. coli, Listeria, Campylobacter) en carnes y
      caldos insuficientemente cocinados.</td>
    </tr>
    <tr>
      <td class="celda-header-verde">Límite crítico</td>
      <td>Temperatura interna mínima 75°C durante al menos 15 segundos.
      Caldos y pozole: hervir y mantener &gt;85°C.</td>
    </tr>
    <tr>
      <td class="celda-header-verde">Monitoreo</td>
      <td>
        <p><strong>¿Qué?</strong> Temperatura interna del alimento</p>
        <p><strong>¿Cómo?</strong> Termómetro sonda calibrado en el
        punto más frío</p>
        <p><strong>¿Cuándo?</strong> Al finalizar cada cocción</p>
        <p><strong>¿Quién?</strong> {{responsables.chef}}</p>
      </td>
    </tr>
    <tr>
      <td class="celda-header-verde">Acción correctiva</td>
      <td class="celda-riesgo-alto">
        <ul>
          <li>Si &lt;75°C: continuar cocción</li>
          <li>Si hay dudas: retirar el lote, no servir</li>
          <li>Repetir con nuevo lote verificado</li>
          <li>Registrar el incidente en HACCP-07</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td class="celda-header-verde">Registro</td>
      <td>Hoja de control de temperaturas de cocción (HACCP-01).
      Frecuencia: cada lote.</td>
    </tr>
  </tbody>
</table>

<h2 id="pcc2">PCC 2 – Enfriamiento Rápido</h2>
<p><em>Fregadero doméstico con baño de hielo</em></p>
<table>
  <tbody>
    <tr>
      <td class="celda-header-verde">Peligro identificado</td>
      <td class="celda-riesgo-alto">Proliferación de patógenos en
      zona de peligro (5°C–63°C) durante enfriamiento lento.
      Especialmente crítico en caldos (pozole) y proteínas cocidas.</td>
    </tr>
    <tr>
      <td class="celda-header-verde">Límite crítico</td>
      <td>De &gt;63°C a &lt;21°C en 2 horas; de &lt;21°C a &lt;5°C
      en 4 horas adicionales. Máximo 6 horas en total.</td>
    </tr>
    <tr>
      <td class="celda-header-verde">Monitoreo</td>
      <td>
        <p><strong>¿Qué?</strong> Temperatura central del alimento</p>
        <p><strong>¿Cómo?</strong> Termómetro sonda en punto central</p>
        <p><strong>¿Cuándo?</strong> A los 30 min, 1 h y 2 h de
        iniciado el enfriamiento</p>
        <p><strong>¿Quién?</strong> {{responsables.chef}}</p>
      </td>
    </tr>
    <tr>
      <td class="celda-header-verde">Acción correctiva</td>
      <td class="celda-riesgo-alto">
        <ul>
          <li>Si a las 2 horas no se alcanza &lt;21°C: dividir en
          porciones más pequeñas, añadir más hielo</li>
          <li>Si a las 6 horas no está a &lt;5°C: descartar y
          registrar en HACCP-07</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td class="celda-header-verde">Registro</td>
      <td>Hoja de control de enfriamiento (HACCP-02). Hora de inicio,
      temperaturas intermedias y temperatura final.</td>
    </tr>
  </tbody>
</table>

<h2 id="pcc3">PCC 3 – Mantenimiento en Caliente durante Servicio</h2>
<p><em>Chafing dishes en punto de venta</em></p>
<table>
  <tbody>
    <tr>
      <td class="celda-header-verde">Peligro identificado</td>
      <td class="celda-riesgo-alto">Crecimiento de patógenos en
      alimentos cocinados que no se mantienen a temperatura segura
      durante el servicio en el punto de venta.</td>
    </tr>
    <tr>
      <td class="celda-header-verde">Límite crítico</td>
      <td>Temperatura mínima de 63°C en todo momento durante el
      servicio. Verificar &gt;63°C antes de abrir al público.</td>
    </tr>
    <tr>
      <td class="celda-header-verde">Monitoreo</td>
      <td>
        <p><strong>¿Qué?</strong> Temperatura del producto en
        chafing dish</p>
        <p><strong>¿Cómo?</strong> Termómetro sonda calibrado</p>
        <p><strong>¿Cuándo?</strong> Al llegar al punto de venta
        y cada 2 horas durante el servicio</p>
        <p><strong>¿Quién?</strong> {{responsables.operaciones}}</p>
      </td>
    </tr>
    <tr>
      <td class="celda-header-verde">Acción correctiva</td>
      <td class="celda-riesgo-alto">
        <ul>
          <li>Si temperatura cae por debajo de 63°C: retirar del
          servicio inmediatamente</li>
          <li>No servir alimentos que hayan estado &lt;63°C más
          de 30 minutos</li>
          <li>Descartar y registrar en HACCP-07</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td class="celda-header-verde">Registro</td>
      <td>Hoja de control de temperatura en servicio (HACCP-03).
      Registro cada 2 horas.</td>
    </tr>
  </tbody>
</table>
`;

const SECCION_7 = `
<h2 id="sec-7-1">7.1 Resumen de Monitoreo de PCCs</h2>
<table>
  <thead>
    <tr>
      <th>PCC</th>
      <th>Peligro</th>
      <th>Límite crítico</th>
      <th>¿Qué medir?</th>
      <th>¿Cómo?</th>
      <th>Frecuencia</th>
      <th>Responsable</th>
    </tr>
  </thead>
  <tbody>
    <tr class="celda-riesgo-alto">
      <td>PCC1</td>
      <td>Supervivencia patógenos</td>
      <td>≥75°C interno</td>
      <td>Temperatura interna</td>
      <td>Termómetro sonda</td>
      <td>Cada lote cocido</td>
      <td>{{responsables.chef}}</td>
    </tr>
    <tr>
      <td>PCC2</td>
      <td>Proliferación zona peligro</td>
      <td>&lt;5°C en 6 h</td>
      <td>Temperatura central</td>
      <td>Termómetro sonda</td>
      <td>Cada 30–60 min</td>
      <td>{{responsables.chef}}</td>
    </tr>
    <tr class="celda-riesgo-alto">
      <td>PCC3</td>
      <td>Crecimiento en servicio</td>
      <td>≥63°C en servicio</td>
      <td>Temperatura chafing dish</td>
      <td>Termómetro sonda</td>
      <td>Cada 2 horas</td>
      <td>{{responsables.operaciones}}</td>
    </tr>
  </tbody>
</table>

<h2 id="sec-7-2">7.2 Equipamiento de Medición Requerido</h2>
<ul>
  <li>Termómetros de sonda digitales (mínimo 2 unidades):
  calibrados mensualmente. Uno permanece en la cocina doméstica;
  otro se traslada al punto de venta.</li>
  <li>Termómetro del refrigerador doméstico: verificación 2 veces
  al día (mañana y noche). Temperatura objetivo &lt;5°C.</li>
  <li>Todas las lecturas se registran en papel (formatos HACCP)
  y en las herramientas digitales de gestión gestionadas por el
  Operations & Compliance Manager.</li>
</ul>

<h2 id="sec-7-3">7.3 Protocolo de Acción Correctiva General</h2>
<ol>
  <li>Identificar desviación del límite crítico.</li>
  <li>Apartar y etiquetar el producto afectado como
  <strong>'EN CUARENTENA – NO SERVIR'</strong>.</li>
  <li>Evaluar si puede ser recuperado (más cocción) o debe
  descartarse.</li>
  <li>Registrar la desviación, la acción tomada y el resultado
  en el formato correspondiente.</li>
  <li>Informar al Director / HACCP Manager en el mismo turno.</li>
  <li>Revisar la causa raíz para implementar medidas preventivas.</li>
</ol>
`;

const SECCION_8 = `
<h2 id="sec-8-1">8.1 Actividades de Verificación</h2>
<table>
  <thead>
    <tr>
      <th>Actividad</th>
      <th>Descripción</th>
      <th>Frecuencia</th>
      <th>Responsable</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Revisión de registros de PCCs</td>
      <td>Verificar que todas las hojas de control estén completas
      y sin valores fuera de límite sin corrección documentada.</td>
      <td>Semanal</td>
      <td>{{responsables.director}} / {{responsables.chef}}</td>
    </tr>
    <tr class="alt">
      <td>Calibración de termómetros</td>
      <td>Contraste con agua helada (0°C) y agua hirviendo (100°C).</td>
      <td>Mensual</td>
      <td>{{responsables.chef}}</td>
    </tr>
    <tr>
      <td>Auditoría interna HACCP</td>
      <td>Verificación de toda la cadena: cocina doméstica,
      transporte y punto de venta.</td>
      <td>Trimestral</td>
      <td>{{responsables.director}}</td>
    </tr>
    <tr class="alt">
      <td>Revisión del plan HACCP</td>
      <td>Actualizar ante: cambios de menú, cambio de cocina,
      nuevo personal, quejas o inspección HSE.</td>
      <td>Semestral o ante cambio</td>
      <td>{{responsables.director}}</td>
    </tr>
    <tr>
      <td>Inspección HSE</td>
      <td>Cooperar plenamente. Presentar todos los registros.
      Implementar correcciones en plazos indicados.</td>
      <td>Según requerimiento</td>
      <td>{{responsables.director}} / {{responsables.chef}}</td>
    </tr>
  </tbody>
</table>

<h2 id="sec-8-2">8.2 Gestión de Quejas de Clientes</h2>
<ul>
  <li>Toda queja relacionada con seguridad alimentaria será
  registrada por el Operations & Compliance Manager con: fecha,
  descripción, producto implicado y acción tomada (HACCP-07).</li>
  <li>El Director será notificado inmediatamente ante cualquier
  queja grave.</li>
  <li>Ante un caso probable de enfermedad alimentaria de más de
  2 personas relacionadas con Órale, se notificará al HSE
  Environmental Health en el plazo legal (24–48 horas).</li>
</ul>
`;

const SECCION_9 = `
<p>Todos los registros HACCP se conservarán por un mínimo de
3 años en formato físico (carpeta HACCP) y/o en las herramientas
digitales de gestión del negocio. El Operations & Compliance
Manager es responsable de mantenerlos disponibles para inspección
por parte del HSE en cualquier momento.</p>

<h2 id="sec-9-1">9.1 Formatos de Registro Obligatorios</h2>
<table>
  <thead>
    <tr>
      <th>Formato</th>
      <th>Descripción</th>
      <th>Frecuencia</th>
      <th>Aplica a</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>HACCP-01</td>
      <td>Control de temperaturas de cocción</td>
      <td>Cada lote cocido</td>
      <td>Cocina doméstica</td>
    </tr>
    <tr class="alt">
      <td>HACCP-02</td>
      <td>Control de enfriamiento rápido</td>
      <td>Cada proceso de enfriamiento</td>
      <td>Cocina doméstica</td>
    </tr>
    <tr>
      <td>HACCP-03</td>
      <td>Control de temperatura en servicio</td>
      <td>Cada 2 horas durante servicio</td>
      <td>Punto de venta</td>
    </tr>
    <tr class="alt">
      <td>HACCP-04</td>
      <td>Control de recepción de mercancía</td>
      <td>Cada entrega de proveedor</td>
      <td>Cocina doméstica</td>
    </tr>
    <tr>
      <td>HACCP-05</td>
      <td>Control de temperatura del refrigerador doméstico</td>
      <td>2 veces por día</td>
      <td>Cocina doméstica</td>
    </tr>
    <tr class="alt">
      <td>HACCP-06</td>
      <td>Registro de limpieza y desinfección diaria</td>
      <td>Al cierre de cada jornada</td>
      <td>Cocina y punto de venta</td>
    </tr>
    <tr>
      <td>HACCP-07</td>
      <td>Registro de incidentes y acciones correctivas</td>
      <td>Ante cada incidente</td>
      <td>Todas</td>
    </tr>
    <tr class="alt">
      <td>HACCP-08</td>
      <td>Registro de calibración de termómetros</td>
      <td>Mensual</td>
      <td>Todas</td>
    </tr>
    <tr>
      <td>HACCP-09</td>
      <td>Registro de formación del personal</td>
      <td>Alta de cada empleado + anual</td>
      <td>Todas</td>
    </tr>
  </tbody>
</table>
`;

const SECCION_10 = `
<h2 id="sec-10-1">10.1 Higiene Personal</h2>
<ul>
  <li>Lavado de manos: agua caliente + jabón + mínimo 20 segundos.
  Obligatorio al iniciar la preparación, tras tocar carne cruda,
  tras ir al baño, tras tocar teléfono/dinero/basura, tras toser
  o estornudar.</li>
  <li>La cocina doméstica cuenta con agua caliente, jabón y papel
  disponibles en el fregadero — utilizados como estación de lavado
  de manos durante toda la preparación.</li>
  <li>En el punto de venta: estación portátil de lavado de manos
  con agua, jabón y papel desechable obligatoria en cada operación.</li>
  <li>Ropa de trabajo: delantal limpio y malla o gorra para el
  cabello durante toda la preparación. Uñas cortas y limpias.
  Sin joyas en manos o muñecas durante la manipulación.</li>
  <li>Personal enfermo: prohibido manipular alimentos con síntomas
  gastrointestinales, vómitos, diarrea, infecciones cutáneas en
  manos o infecciones respiratorias activas.</li>
</ul>

<h2 id="sec-10-2">10.2 Limpieza y Desinfección de la Cocina Doméstica</h2>
<ul>
  <li>Antes de cada sesión: limpiar y desinfectar todas las
  superficies con producto aprobado para uso alimentario.</li>
  <li>Procedimiento:
    <ol>
      <li>Limpiar (eliminar residuos físicos)</li>
      <li>Aclarar</li>
      <li>Desinfectar</li>
      <li>Aclarar final</li>
      <li>Secar al aire</li>
    </ol>
  </li>
  <li>Tablas de corte: lavar con agua caliente y jabón tras cada
  uso. Desinfectar al finalizar la sesión.</li>
  <li>Utensilios: lavar en lavavajillas o a mano con agua caliente
  y jabón. Secar con papel desechable, no con trapos reutilizables.</li>
  <li>Registro de limpieza en HACCP-06 al finalizar cada jornada.</li>
</ul>

<h2 id="sec-10-3">10.3 Organización del Refrigerador Doméstico</h2>
<ul>
  <li><strong>Balda superior:</strong> alimentos cocinados y listos
  para consumo.</li>
  <li><strong>Balda media:</strong> lácteos, huevos, ingredientes
  preparados.</li>
  <li><strong>Balda inferior:</strong> carnes crudas en recipientes
  herméticos para evitar goteo.</li>
  <li><strong>Cajón de verduras:</strong> vegetales frescos.</li>
  <li>Temperatura objetivo: &lt;5°C. Verificación dos veces al día.
  Registro en HACCP-05.</li>
  <li>No sobrecargar el refrigerador — la circulación de aire es
  necesaria para mantener temperatura uniforme.</li>
</ul>

<h2 id="sec-10-4">10.4 Gestión del Agua</h2>
<ul>
  <li>Agua de red potable del apartamento para toda la preparación
  de alimentos.</li>
  <li>Estación portátil de lavado de manos en punto de venta:
  agua embotellada potable en bidón con grifo, jabón líquido
  y papel. Agua sucia en recipiente separado.</li>
</ul>

<h2 id="sec-10-5">10.5 Manejo de Residuos</h2>
<ul>
  <li>Residuos orgánicos de la cocina doméstica: bolsas cerradas,
  eliminadas en contenedores del edificio según normativa de
  Limerick City & County Council.</li>
  <li>Sobrantes del punto de venta: no reutilizar al día siguiente.
  Eliminación en el mismo día.</li>
  <li>Aceites usados: almacenados en contenedor hermético y
  eliminados en punto de recogida autorizado.</li>
</ul>

<h2 id="sec-10-6">10.6 Mantenimiento de Utensilios y Equipos</h2>
<ul>
  <li>Chafing dishes: lavar y desinfectar tras cada uso. Verificar
  integridad de tapas antes de cada jornada.</li>
  <li>Termómetros de sonda: limpiar con alcohol antes y después
  de cada medición. Calibración mensual en HACCP-08.</li>
  <li>Tablas de corte: inspección visual semanal — desechar si
  presentan cortes profundos.</li>
  <li>Cuchillos: afilados y en buen estado. Almacenados en
  protectores individuales.</li>
</ul>
`;

const SECCION_11 = `
<h2 id="sec-11-1">11.1 Alérgenos Presentes en el Menú</h2>
<p>De conformidad con el Reglamento (UE) N.º 1169/2011, Órale
gestiona activamente los 14 alérgenos de declaración obligatoria.</p>
<table>
  <thead>
    <tr>
      <th>Platillo</th>
      <th>Gluten</th>
      <th>Lácteos</th>
      <th>Huevo</th>
      <th>Frutos S.</th>
      <th>Soja</th>
      <th>Sulfitos</th>
      <th>Sésamo</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Pozole Rojo (V)</td>
      <td>Verificar</td><td>No</td><td>No</td>
      <td>No</td><td>No</td><td>Posible</td><td>No</td>
    </tr>
    <tr class="alt">
      <td>Tacos al Pastor</td>
      <td>SÍ (tortilla)</td><td>Posible</td><td>No</td>
      <td>No</td><td>No</td><td>SÍ (chile)</td><td>No</td>
    </tr>
    <tr>
      <td>Tacos Carnitas</td>
      <td>SÍ (tortilla)</td><td>No</td><td>No</td>
      <td>No</td><td>No</td><td>Posible</td><td>No</td>
    </tr>
    <tr class="alt">
      <td>Tacos Cochinita</td>
      <td>SÍ (tortilla)</td><td>No</td><td>No</td>
      <td>No</td><td>No</td><td>Posible</td><td>No</td>
    </tr>
    <tr>
      <td>Nachos + Guacamole (V)</td>
      <td>SÍ (nachos)</td><td>SÍ (queso)</td><td>No</td>
      <td>No</td><td>No</td><td>Posible</td><td>No</td>
    </tr>
    <tr class="alt">
      <td>Chilaquiles (V)</td>
      <td>SÍ (tortilla)</td><td>SÍ (crema/queso)</td>
      <td>Posible</td><td>No</td><td>No</td><td>Posible</td><td>No</td>
    </tr>
    <tr>
      <td>Taco de Nopales (V)</td>
      <td>SÍ (tortilla)</td><td>No</td><td>No</td>
      <td>No</td><td>No</td><td>No</td><td>No</td>
    </tr>
  </tbody>
</table>

<h2 id="sec-11-2">11.2 Comunicación de Alérgenos al Cliente</h2>
<ul>
  <li>Señalización en el punto de venta:
  <em>'For allergen information, please ask a member of staff.'</em></li>
  <li>Menú digital (QR) y físico actualizado por el Operations
  & Compliance Manager ante cada cambio de receta o proveedor.</li>
  <li>Personal formado para responder preguntas de alérgenos
  de forma correcta.</li>
  <li>Ante clientes con alergias graves: comunicar que la cocina
  no está 100% libre de trazas cruzadas.</li>
</ul>
`;

const SECCION_12 = `
<h2 id="sec-12-1">12.1 Cocina Doméstica y Venta en Calle</h2>
<table>
  <thead>
    <tr>
      <th>Aspecto</th>
      <th>Requerimiento específico</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Cocina de preparación</td>
      <td>
        <ul>
          <li>Apartamento doméstico, Limerick</li>
          <li>Cocina estándar: estufa, extractor, horno,
          refrigerador, agua caliente</li>
          <li>Sujeta a inspección y aprobación HSE
          (Premises Ref: {{hse.premisesRef}})</li>
        </ul>
      </td>
    </tr>
    <tr class="alt">
      <td>Separación crudos/cocinados</td>
      <td>
        <ul>
          <li>Tablas por código de color: roja (carne cruda),
          verde (vegetales), amarilla (aves)</li>
          <li>Cuchillos separados con protectores individuales</li>
          <li>Crudos en balda inferior del refrigerador</li>
          <li>Cocinados en balda superior del refrigerador</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Escala de producción</td>
      <td>
        <ul>
          <li>Volumen ajustado a capacidad doméstica</li>
          <li>Ejemplo: 20 porciones de pozole de 650 ml por jornada</li>
          <li>No se supera la capacidad de los equipos
          del apartamento</li>
        </ul>
      </td>
    </tr>
    <tr class="alt">
      <td>Transporte</td>
      <td>
        <ul>
          <li>Chafing dishes cubiertos precalentados</li>
          <li>Tiempo máximo: 1 hora</li>
          <li>Verificación de temperatura al llegar (&gt;63°C)</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Lavado de manos en punto de venta</td>
      <td>
        <ul>
          <li>Estación portátil obligatoria en cada operación</li>
          <li>Bidón con grifo, agua potable, jabón y papel</li>
          <li>Recipiente separado para agua residual</li>
        </ul>
      </td>
    </tr>
    <tr class="alt">
      <td>Manipulador en punto de venta</td>
      <td>
        <ul>
          <li>Manipulador único</li>
          <li>Toda la comida llega completamente cocinada</li>
          <li>No se manipula carne cruda en calle</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Tiempo máximo de exposición</td>
      <td>
        <ul>
          <li>Alimentos calientes: máximo 2 horas desde llegada</li>
          <li>Desechar sobrantes al cierre</li>
          <li>No reutilizar al día siguiente</li>
        </ul>
      </td>
    </tr>
    <tr class="alt">
      <td>Casual Trading Licence</td>
      <td>
        <ul>
          <li>Mantener copia de la autorización LCCC en el
          punto de venta en todo momento</li>
          <li>Operar únicamente en ubicaciones y horarios autorizados</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>
`;

const SECCIONES = {
  'seccion-1': SECCION_1,
  'seccion-2': SECCION_2,
  'seccion-3': SECCION_3,
  'seccion-4': SECCION_4,
  'seccion-5': SECCION_5,
  'seccion-6': SECCION_6,
  'seccion-7': SECCION_7,
  'seccion-8': SECCION_8,
  'seccion-9': SECCION_9,
  'seccion-10': SECCION_10,
  'seccion-11': SECCION_11,
  'seccion-12': SECCION_12
};

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/**
 * Inyecta contentHtml dentro del único <div class="seccion-contenido"></div>
 * que sigue a <section id="sectionId" class="seccion">.
 */
function injectSection(html, sectionId, contentHtml) {
  const sectionMarker = `<section id="${sectionId}" class="seccion">`;
  const sectionIdx = html.indexOf(sectionMarker);
  if (sectionIdx === -1) {
    throw new Error(`No se encontró la sección "${sectionId}" en base.html`);
  }

  const divMarker = '<div class="seccion-contenido"></div>';
  const divIdx = html.indexOf(divMarker, sectionIdx);
  if (divIdx === -1) {
    throw new Error(`No se encontró el div.seccion-contenido para "${sectionId}"`);
  }

  const before = html.slice(0, divIdx);
  const after = html.slice(divIdx + divMarker.length);
  const replacement = `<div class="seccion-contenido">\n${contentHtml.trim()}\n</div>`;

  return before + replacement + after;
}

/** Resuelve "a.b.c" contra un objeto anidado. */
function resolvePath(obj, keyPath) {
  return keyPath.split('.').reduce((acc, key) => (acc != null ? acc[key] : undefined), obj);
}

/** Reemplaza todos los {{placeholder}} (incluyendo rutas con punto) contra data. */
function fillPlaceholders(html, data) {
  return html.replace(/\{\{\s*([\w.]+)\s*\}\}/g, (match, key) => {
    const value = resolvePath(data, key);
    if (value === undefined || value === null) {
      console.warn(`Advertencia: placeholder "{{${key}}}" no se pudo resolver, se deja sin sustituir.`);
      return match;
    }
    return String(value);
  });
}

// ---------------------------------------------------------------------------
// Generación
// ---------------------------------------------------------------------------

function generar() {
  console.log(`Generando HACCP Plan ES v${config.version}...`);

  let html = fs.readFileSync(BASE_HTML_PATH, 'utf8');

  Object.keys(SECCIONES).forEach((sectionId) => {
    html = injectSection(html, sectionId, SECCIONES[sectionId]);
  });

  const data = Object.assign({}, config, {
    lang: LANG,
    ui: i18n[LANG].ui,
    nav: i18n[LANG].nav
  });
  html = fillPlaceholders(html, data);

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, html, 'utf8');

  // El HTML generado referencia "../shared/styles.css" desde outputs/es/,
  // lo que resuelve a outputs/shared/styles.css — se copia aquí para que
  // el link no quede roto una vez que el HTML vive fuera de src/.
  fs.mkdirSync(path.dirname(STYLES_DEST_PATH), { recursive: true });
  fs.copyFileSync(STYLES_SRC_PATH, STYLES_DEST_PATH);

  console.log(`OK: HTML generado en ${OUTPUT_PATH}`);
}

generar();
