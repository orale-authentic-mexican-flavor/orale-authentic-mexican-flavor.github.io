// Órale – Authentic Mexican Flavor Limited
// Generador del Plan HACCP – Versión en Español
// Versión: 1.4
// Autor: David Enrique Ochoa Diaz
// NOTA: Este archivo consume datos desde config.js
// No hardcodear datos sensibles en este script

const fs = require('fs');
const path = require('path');
const config = require('../../_private/config');
const i18n = require('../../shared/i18n');

const LANG = 'es';

const BASE_HTML_PATH = path.join(__dirname, '..', 'shared', 'base.html');
const STYLES_SRC_PATH = path.join(__dirname, '..', 'shared', 'styles.css');
const STYLES_DEST_PATH = path.join(__dirname, '..', '..', '..', 'docs', 'haccp', 'shared', 'styles.css');
const PAGINATION_SRC_PATH = path.join(__dirname, '..', 'shared', 'print-pagination.js');
const PAGINATION_DEST_PATH = path.join(__dirname, '..', '..', '..', 'docs', 'haccp', 'shared', 'print-pagination.js');
const OUTPUT_PATH = path.join(__dirname, '..', '..', '..', 'docs', 'haccp', 'es', 'HACCP_Orale_v1.4_ES.html');

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
<p>Este plan cubre las modalidades de operación de Órale:</p>
<p><strong>Modalidades de operación</strong></p>
<ol>
  <li><strong>Venta por pedido (continua)</strong>
  <p>Producción en cocina doméstica (Apt 301, Richmond Court,
  Mount Kennett Place, Dock Road, Limerick V94 PY76) y venta
  por WhatsApp y canales en línea, con entrega a domicilio o
  recogida desde el mismo domicilio. El cliente puede
  solicitar el alimento caliente (regenerado a ≥70°C) o
  congelado.</p>
  </li>
  <li><strong>Venta desde puesto (eventual)</strong>
  <p>Venta directa desde puesto desmontable en ubicaciones y
  fechas autorizadas por Limerick City & County Council. Es
  una modalidad intermitente: se activa únicamente para cada
  autorización concreta. Los procedimientos, puntos críticos
  de control y registros correspondientes están vigentes y
  se aplican íntegramente en cada jornada de puesto.</p>
  </li>
</ol>
<p>Ambas modalidades comparten la misma cocina de producción y
los mismos programas prerrequisito.</p>
<p><strong>Días de producción:</strong> Viernes y sábados.
Cada jornada se dedica a un platillo del menú rotativo
(por ejemplo: pozole un día, tamales otro), generando
20 raciones por jornada. Una parte se congela para
venta entre semana y una parte se mantiene refrigerada
para pedidos inmediatos.</p>
<p><strong>Control de producción por capacidad:</strong>
La producción por jornada está limitada por la capacidad
de almacenamiento disponible: 30 raciones de congelación
y 10 de refrigeración a corto plazo, 40 en total. No se
produce un volumen superior al que puede enfriarse
rápidamente (PCC2) y almacenarse de inmediato a la
temperatura que corresponda.</p>
<p><strong>Menú aplicable:</strong></p>
<ul>
  <li>Pozole rojo estilo Jalisco</li>
  <li>Tacos al pastor (3 pzs)</li>
  <li>Tacos de carnitas (3 pzs)</li>
  <li>Tacos de cochinita pibil (3 pzs)</li>
  <li>Nachos con guacamole</li>
  <li>Chilaquiles</li>
  <li>Taco de nopales</li>
  <li>Platillos rotativos: tamales, quesadillas</li>
</ul>

<h2 id="sec-1-3">1.3 Marco Regulatorio Aplicable</h2>
<div class="tabla-wrapper">
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
</div>

<p><strong>Notificación y registro (GN-16 §2.2 y §2.3).</strong>
GN-16 §2.2 establece que el operador debe notificar al HSE cada
unidad de su negocio alimentario antes de comenzar a operarla.
GN-16 §2.3 establece que el establecimiento donde se produce el
alimento debe ser notificado y queda sujeto a inspección, incluso
tratándose de una vivienda particular.</p>
<p>La cocina de producción y el puesto de venta constituyen
unidades distintas a efectos de notificación. La aprobación de
una no sustituye al registro de la otra.</p>
<p><strong>Regla operativa de Órale:</strong></p>
<ul>
  <li>No se inicia actividad en ningún punto de venta que no haya
  sido previamente notificado y registrado ante el HSE.</li>
  <li>No se produce alimento en ningún establecimiento que no haya
  sido notificado al HSE y esté sujeto a inspección.</li>
  <li>Cualquier cambio en la cocina de producción, en las
  ubicaciones de venta o en las actividades desarrolladas se
  notifica al HSE por escrito antes de aplicarse.</li>
  <li>Se conserva copia de la confirmación de registro y se
  mantiene disponible durante la operación (GN-16 §2.2).</li>
  <li>La venta desde puesto requiere que dicha unidad esté
  notificada y registrada ante el HSE, de forma independiente al
  registro del establecimiento de producción. La autorización de
  Limerick City & County Council habilita la ubicación, no
  sustituye el registro sanitario del puesto.</li>
</ul>

<h2 id="sec-1-4">1.4 Clasificación de la Operación</h2>
<p>De conformidad con el FSAI Guidance Note No. 16 Food Stalls
(Revision 2), la operación de Órale se clasifica como
<strong>ACTIVIDAD DE ALTO RIESGO</strong>
<span class="badge-riesgo">HIGH-RISK</span>, dado que
implica la preparación, cocción y venta directa de alimentos
calientes que incluyen carnes de origen animal (cerdo).</p>
<p>Esta clasificación determina que Órale debe cumplir con todos
los requisitos generales (Sección 4.3 de GN16) y los requisitos
específicos para actividades de alto riesgo (Sección 5.1 de GN16).
El presente plan HACCP ha sido elaborado conforme a estos
estándares.</p>
<p class="nota"><em>Referencia normativa: FSAI Guidance Note No. 16
Food Stalls (Revision 2), 2016. Disponible en:
<a href="https://www.fsai.ie/publications/guidance-note-16-food-stalls"
target="_blank">fsai.ie</a></em></p>
`;

const SECCION_2 = `
<div class="tabla-wrapper">
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
</div>
<p class="nota"><em><strong>Formación del equipo.</strong> Los tres
miembros del equipo han completado el curso "Food Safety Level 1
– HACCP Training", que cubre peligros alimentarios y
contaminación, factores de crecimiento bacteriano, intoxicación
e infección alimentaria, prerrequisitos del sistema HACCP, salud
e higiene personal, transporte, distribución y almacenamiento,
preparación de alimentos, limpieza y desinfección, control de
plagas, y legislación de seguridad alimentaria. Esta formación
satisface el requisito de GN-16 §4.3.13 aplicable a los
manipuladores de alimentos.</em></p>
<p class="nota"><em>GN-16 §4.3.13 exige además que quien
desarrolla y mantiene los procedimientos basados en principios
HACCP haya recibido formación en la aplicación de dichos
principios. Órale ha consultado al HSE sobre la adecuación de la
formación actual para este fin y adoptará la formación
complementaria que la autoridad indique.</em></p>
`;

const SECCION_3 = `
<h2 id="sec-3-1">3.1 Descripción General</h2>
<p>Órale elabora y sirve comida mexicana tradicional cocinada de forma
artesanal en cocina doméstica en Limerick. Los alimentos se preparan
el mismo día de venta en lotes de escala doméstica y se transportan
al punto de venta en chafing dishes y contenedores isotérmicos.
Se sirven directamente al consumidor final. No se realiza distribución
mayorista ni venta de productos envasados no etiquetados.</p>

<h3 id="sec-3-0">Nota sobre preprocesos — Pozole Rojo</h3>
<p>El pozole rojo es el platillo de mayor complejidad
operativa del menú de Órale. Su proceso de producción
incluye las siguientes etapas:</p>
<div class="tabla-wrapper">
<table class="tabla-ancha">
  <thead>
    <tr>
      <th>Etapa</th>
      <th>Descripción</th>
      <th>Tiempo aproximado</th>
      <th>Punto de control</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background:#006847;">
      <td colspan="4" style="color:white;
      font-weight:bold;padding:8px 10px;">
        PREPROCESOS — Tiempo total: ~2 horas
      </td>
    </tr>
    <tr>
      <td>Preproceso 1 — Maíz</td>
      <td>Lavar y desgranar el maíz cacahuazintle o
      hidratar el maíz precocido según disponibilidad</td>
      <td>15–30 min</td>
      <td>Visual: grano limpio y sin impurezas</td>
    </tr>
    <tr class="alt">
      <td>Preproceso 2 — Carne de cerdo</td>
      <td>Limpiar y trocear la carne de cerdo en
      porciones uniformes para cocción pareja</td>
      <td>15–20 min</td>
      <td>Visual: sin restos de hueso o fragmentos</td>
    </tr>
    <tr>
      <td>Preproceso 3 — Base de chile</td>
      <td>Tostar, hidratar y licuar los chiles secos
      (guajillo, ancho). Colar para obtener una salsa
      homogénea sin semillas ni pieles</td>
      <td>20–30 min</td>
      <td>Temperatura de tostado controlada para evitar
      quemado que amarga la salsa</td>
    </tr>
    <tr style="background:#006847;">
      <td colspan="4" style="color:white;
      font-weight:bold;padding:8px 10px;">
        COCCIÓN — Tiempo total: 3–4 horas
      </td>
    </tr>
    <tr class="alt">
      <td>Cocción 1 — Carne</td>
      <td>Cocer la carne de cerdo con cebolla y ajo
      en agua suficiente</td>
      <td>1.5–2 horas</td>
      <td class="celda-riesgo-alto">
        ≥75°C instantáneo en el centro del producto, o
        combinación equivalente ≥70°C durante 2 minutos,
        verificada con termómetro sonda (PCC1)
      </td>
    </tr>
    <tr>
      <td>Cocción 2 — Integración del maíz</td>
      <td>Agregar el maíz al caldo y continuar cocción
      hasta que el grano esté completamente cocido
      y comience a abrirse</td>
      <td>1–1.5 horas</td>
      <td>Visual: grano abierto y suave al tacto</td>
    </tr>
    <tr class="alt">
      <td>Cocción 3 — Integración del chile</td>
      <td>Incorporar la base de chile colada al caldo
      con carne y maíz. Sazonar y ajustar consistencia.
      Continuar cocción a fuego medio</td>
      <td>30–45 min</td>
      <td class="celda-riesgo-alto">
        Temperatura del caldo ≥85°C mantenida durante
        esta etapa y durante el servicio (§3.1 —
        especificación de producto)
      </td>
    </tr>
    <tr style="background:#FFF9C4;">
      <td><strong>TIEMPO TOTAL</strong></td>
      <td>Preprocesos + Cocción</td>
      <td><strong>5–6 horas</strong></td>
      <td><strong>Iniciar preparación con mínimo
      6 horas de anticipación al servicio</strong></td>
    </tr>
  </tbody>
</table>
</div>
<p class="nota"><em>Especificación de producto: el pozole y otros
caldos se llevan a ebullición y se mantienen por encima de 85°C
durante la cocción y durante todo el servicio. Esto supera tanto
el límite crítico de cocción ≥75°C (PCC1) como el límite crítico
de mantenimiento en caliente ≥63°C (PCC3) — es una práctica
operativa de Órale, no un límite crítico independiente de
ninguno de los dos PCC.</em></p>

<h2 id="sec-3-2">3.2 Tabla de Productos y Peligros Asociados</h2>
<div class="tabla-wrapper">
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
      <td>Pozole Rojo</td>
      <td>Carne de cerdo, maíz, chile</td>
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
      <td>Nachos con Guacamole</td>
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
      <td>Chilaquiles</td>
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
      <td>Taco de Nopales</td>
      <td>Vegetal</td>
      <td>Caliente &gt;63°C</td>
      <td>Gluten (tortilla). Bajo riesgo alérgeno.</td>
    </tr>
  </tbody>
</table>
</div>
<p class="nota"><em>La columna "Temperatura de servicio" refleja
únicamente el componente mantenido en caliente de cada platillo.
Cualquier guarnición cruda o salsa fría añadida a un platillo
después de cocinarlo —independientemente de la temperatura de
servicio declarada— se rige por PCC1b, no por el límite crítico
de mantenimiento en caliente (PCC3).</em></p>
`;

const SECCION_4 = `
<h2 id="sec-4-1">4.1 Venta en Calle con Cocina Doméstica</h2>
<p class="nota"><strong>Aplica a la modalidad de venta desde
puesto, en cada jornada autorizada por Limerick City &amp; County
Council.</strong></p>
<p>Flujo completo desde la cocina doméstica hasta el punto de venta:</p>
<div class="tabla-wrapper">
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
          <li>≥75°C instantáneo en el centro del producto, o
          combinación tiempo/temperatura equivalente
          (≥70°C durante 2 minutos)</li>
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
          <li>De &gt;63°C a ≤5°C en máx. 4 horas</li>
          <li>Baño de hielo en la tarja doméstica</li>
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
          <li>Bolsas o maletines isotérmicos certificados para
          mantener temperatura</li>
          <li>Alimentos calientes: mantener ≥63°C durante todo
          el transporte (no solo al llegar)</li>
          <li>Tiempo máximo de transporte: 1 hora</li>
          <li>Verificación de temperatura al salir de la cocina
          y al llegar al punto de venta</li>
          <li>Registro en HACCP-03 de temperatura de salida y llegada</li>
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
          <li>Control cada hora con termómetro sonda</li>
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
</div>

<h2 id="sec-4-2">4.2 Producción y Congelación (Viernes y Sábados)</h2>
<p class="nota"><em>La producción y congelación de viernes y
sábado abastecen ambas modalidades de venta.</em></p>
<p>Flujo de producción para almacenamiento congelado
y ventas entre semana:</p>
<div class="tabla-wrapper">
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
      <td>Planificación del platillo del día</td>
      <td>
        <ul>
          <li>Cada jornada se dedica a un platillo
          del menú rotativo</li>
          <li>Producción: 20 raciones por jornada,
          limitada por la capacidad de almacenamiento
          disponible (30 de congelación + 10 de
          refrigeración = 40 en total)</li>
          <li>Una parte se reserva
          refrigerada para pedidos inmediatos</li>
        </ul>
      </td>
    </tr>
    <tr class="alt">
      <td>2</td>
      <td>Preprocesos y cocción</td>
      <td>
        <ul>
          <li>Según flujo 4.1 etapas 1–4</li>
          <li>≥75°C instantáneo, o combinación equivalente
          ≥70°C durante 2 minutos (PCC1)</li>
          <li>Inicio mínimo 6 horas antes del
          horario de entrega</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>3</td>
      <td>Enfriamiento rápido</td>
      <td>
        <ul>
          <li>De >63°C a ≤5°C en máximo 4 horas</li>
          <li>Baño de hielo en tarja</li>
          <li>Registro en HACCP-02 (PCC2)</li>
        </ul>
      </td>
    </tr>
    <tr class="alt">
      <td>4</td>
      <td>Porcionado y etiquetado</td>
      <td>
        <ul>
          <li>Porcionar en contenedores desechables
          de 650 ml con tapa</li>
          <li>Etiquetar cada porción con:
            <ul>
              <li>Nombre del platillo</li>
              <li>Fecha de producción</li>
              <li>Fecha de congelación</li>
              <li>Fecha máxima de consumo
              (producción + 3 meses)</li>
            </ul>
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>5</td>
      <td>Congelación inmediata</td>
      <td>
        <ul>
          <li>Colocar en cajones 1, 2 o 3 del
          congelador (exclusivos Órale)</li>
          <li>Temperatura objetivo: ≤-18°C</li>
          <li>Sistema FIFO: lo más antiguo al frente</li>
          <li>Registro en HACCP-10 (PCC4)</li>
        </ul>
      </td>
    </tr>
    <tr class="alt">
      <td>6</td>
      <td>Almacenamiento congelado</td>
      <td>
        <ul>
          <li>Cajones 1, 2 y 3 etiquetados "ÓRALE"</li>
          <li>Cajón 4 etiquetado "PARTICULAR" —
          nunca mezclar</li>
          <li>Monitoreo 2 veces al día (HACCP-10)</li>
          <li>Tiempo máximo: 3 meses desde producción</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>
</div>

<h2 id="sec-4-3">4.3 Entrega a Domicilio por WhatsApp</h2>
<p>Flujo de atención de pedidos y entrega desde
Apt 301, Richmond Court:</p>
<div class="tabla-wrapper">
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
      <td>Recepción del pedido</td>
      <td>
        <ul>
          <li>Pedido recibido por WhatsApp</li>
          <li>Confirmar platillo, cantidad y
          preferencia: caliente o congelado</li>
          <li>Confirmar hora de entrega</li>
        </ul>
      </td>
    </tr>
    <tr class="alt">
      <td>2</td>
      <td>Descongelación (solo producto congelado)</td>
      <td>
        <ul>
          <li>Aplica únicamente al producto retirado del
          congelador. El stock refrigerado que nunca se congeló
          omite este paso — ver etapa 3</li>
          <li>Descongelar SIEMPRE en refrigerador
          a ≤5°C — nunca a temperatura ambiente</li>
          <li>Tiempo mínimo: 12–24 horas</li>
          <li>Una vez descongelado: no recongelar</li>
          <li>Registro en HACCP-11 (PCC5)</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>3</td>
      <td>Stock refrigerado (sin descongelación)</td>
      <td>
        <ul>
          <li>Aplica a las raciones mantenidas refrigeradas
          para pedidos inmediatos — producción → enfriamiento
          rápido (PCC2) → refrigeración ≤5°C, máx. 4 días
          (PCC7) → regeneración ≥70°C (PCC6) → entrega
          caliente</li>
          <li>Este stock nunca se congela ni se descongela</li>
          <li>Verificar la fecha de producción en la etiqueta
          antes de usar; desechar si han pasado más de 4 días
          (PCC7)</li>
        </ul>
      </td>
    </tr>
    <tr class="alt">
      <td>4</td>
      <td>Regeneración (entrega caliente)</td>
      <td>
        <ul>
          <li>Desde el stock descongelado (etapa 2) o desde el
          stock refrigerado (etapa 3)</li>
          <li>Calentar a temperatura interna ≥70°C</li>
          <li>Verificar con termómetro sonda</li>
          <li>Registro en HACCP-11 (PCC6)</li>
          <li>Empacar inmediatamente tras
          alcanzar temperatura</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>5</td>
      <td>Entrega congelado (si cliente lo solicita)</td>
      <td>
        <ul>
          <li>Retirar del congelador al momento
          de la entrega</li>
          <li>Transporte de alimento congelado: mantener
          ≤-18°C durante todo el trayecto. Emplear bolsa
          isotérmica con acumuladores de frío cuando el
          trayecto lo requiera</li>
          <li>Informar al cliente: conservar a -18°C
          y consumir antes de la fecha de la etiqueta</li>
        </ul>
      </td>
    </tr>
    <tr class="alt">
      <td>6</td>
      <td>Entrega</td>
      <td>
        <ul>
          <li>Entrega desde Apt 301, Richmond Court</li>
          <li>Verificar contenedor íntegro y
          etiqueta legible</li>
          <li>Registrar en HACCP-11</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>
</div>
`;

const SECCION_5 = `
<h2 id="sec-5-1">5.1 Leyenda de Riesgo</h2>
<div class="tabla-wrapper">
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
</div>

<h2 id="sec-5-2">5.2 Tabla de Análisis de Peligros</h2>
<div class="tabla-wrapper">
<table class="tabla-ancha">
  <thead>
    <tr>
      <th>Etapa</th>
      <th>Peligro biológico</th>
      <th>Peligro químico</th>
      <th>Peligro físico</th>
      <th>Probabilidad</th>
      <th>Severidad</th>
      <th>Riesgo</th>
      <th>Medida de control</th>
      <th>¿Es PCC?</th>
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
          <li>Verificar temperatura ≤5°C</li>
          <li>Proveedor aprobado</li>
          <li>Inspección visual</li>
          <li>Prerrequisito: control de proveedores y
          trazabilidad en recepción (§4.1, HACCP-04)</li>
        </ul>
      </td>
      <td>NO</td>
    </tr>
    <tr class="celda-riesgo-medio">
      <td>Almacenamiento refrigerado — materia prima</td>
      <td>Proliferación bacteriana por temperatura incorrecta</td>
      <td>Contaminación cruzada con productos de limpieza</td>
      <td>Contaminación física</td>
      <td>2</td><td>3</td><td>6</td>
      <td>
        <ul>
          <li>Refrigerador ≤5°C</li>
          <li>Crudos abajo / cocinados arriba</li>
          <li>FIFO</li>
          <li>Prerrequisito: organización del refrigerador
          doméstico (§10.3)</li>
        </ul>
      </td>
      <td>NO</td>
    </tr>
    <tr class="celda-riesgo-alto">
      <td>Almacenamiento refrigerado — producto terminado</td>
      <td>Crecimiento de patógenos y formación de toxinas en
      producto cocido mantenido en refrigeración</td>
      <td>Contaminación cruzada con productos de limpieza</td>
      <td>Contaminación física</td>
      <td>3</td><td>3</td><td>9</td>
      <td>
        <ul>
          <li>Refrigerador ≤5°C</li>
          <li>Máximo 4 días desde fecha de producción</li>
          <li>Fecha de producción etiquetada en cada ración</li>
        </ul>
      </td>
      <td>SÍ (PCC7)</td>
    </tr>
    <tr class="celda-riesgo-alto">
      <td>Preparación — platillos con cocción posterior</td>
      <td>Contaminación cruzada carne cruda / alimentos listos</td>
      <td>Residuos de detergente en superficies</td>
      <td>Fragmentos de utensilios</td>
      <td>3</td><td>3</td><td>9</td>
      <td>
        <ul>
          <li>Tablas por código de color</li>
          <li>Lavado de manos con agua caliente y jabón</li>
          <li>Higiene de superficies</li>
          <li>Prerrequisito: separación crudo/listo para
          consumo (§4.1, ANEXO)</li>
        </ul>
      </td>
      <td>NO</td>
    </tr>
    <tr class="celda-riesgo-alto">
      <td>Preparación de platillos e ingredientes sin cocción
      posterior (Nachos con Guacamole; guacamole y salsa de
      jitomate cruda)</td>
      <td>Contaminación cruzada por patógenos vegetativos y por
      el manipulador, sin paso posterior que la elimine</td>
      <td>Residuos de detergente en superficies</td>
      <td>Fragmentos de utensilios</td>
      <td>3</td><td>3</td><td>9</td>
      <td>
        <ul>
          <li>Tabla de corte verde, de uso exclusivo para esta
          preparación</li>
          <li>Lavado de manos con agua caliente y jabón</li>
          <li>Higiene de superficies</li>
          <li>Ver límite crítico de PCC1b (§6, puntos a–i)</li>
        </ul>
      </td>
      <td>SÍ (PCC1b)</td>
    </tr>
    <tr class="celda-riesgo-alto">
      <td>Incorporación de guarniciones crudas y salsas frías
      en el servicio</td>
      <td>Contaminación cruzada por patógenos vegetativos y por
      el manipulador al incorporar guarniciones crudas
      (lechuga, jitomate, cilantro, cebolla, rábano, limón) o
      salsas frías (salsa de jitomate cruda, guacamole) a
      platillos calientes en el momento del servicio, sin paso
      posterior que la elimine</td>
      <td>Ninguno</td>
      <td>Ninguno</td>
      <td>3</td><td>3</td><td>9</td>
      <td>
        <ul>
          <li>Solo con utensilio o guante limpio — nunca con la
          mano desnuda</li>
          <li>Conservación a ≤5°C hasta su incorporación</li>
          <li>Máximo 2 horas fuera de refrigeración durante el
          servicio</li>
        </ul>
      </td>
      <td>SÍ (PCC1b)</td>
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
      <td>Germinación de esporas y multiplicación de
      Clostridium perfringens y Bacillus cereus durante un
      enfriamiento lento, y formación de toxina termoestable de
      Staphylococcus aureus. Ninguno de estos peligros se
      controla mediante cocción: las esporas sobreviven al
      tratamiento térmico y la toxina de S. aureus resiste el
      calor una vez formada. El control es el enfriamiento
      rápido (PCC2) y la higiene de manos (§10.1).</td>
      <td>Ninguno</td>
      <td>Ninguno</td>
      <td>3</td><td>3</td><td>9</td>
      <td>
        <ul>
          <li>De &gt;63°C a ≤5°C en máx. 4 h</li>
          <li>Baño de hielo en la tarja</li>
        </ul>
      </td>
      <td>SÍ (PCC2)</td>
    </tr>
    <tr class="celda-riesgo-alto">
      <td>Transporte</td>
      <td>Rotura de la cadena de calor</td>
      <td>Ninguno</td>
      <td>Ninguno</td>
      <td>2</td><td>3</td><td>6</td>
      <td>
        <ul>
          <li>Chafing dishes cubiertos</li>
          <li>Tiempo &lt;1 h</li>
          <li>Verificación de temperatura antes de salir de
          la cocina y al llegar</li>
        </ul>
      </td>
      <td>SÍ (PCC3)</td>
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
          <li>Control cada hora</li>
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
          <li>Prerrequisito: higiene personal y comunicación
          de alérgenos (§10.1, §11.2)</li>
        </ul>
      </td>
      <td>NO</td>
    </tr>
    <tr class="celda-riesgo-alto">
      <td>Congelación</td>
      <td>Supervivencia y multiplicación de patógenos si la
      congelación no es inmediata o no alcanza ≤-18°C; deterioro
      del producto por congelación lenta</td>
      <td>Ninguno</td>
      <td>Ninguno</td>
      <td>2</td><td>3</td><td>6</td>
      <td>
        <ul>
          <li>Congelación inmediata tras enfriamiento rápido</li>
          <li>≤-18°C continuo</li>
          <li>Registro en HACCP-10</li>
        </ul>
      </td>
      <td>SÍ (PCC4)</td>
    </tr>
    <tr class="celda-riesgo-alto">
      <td>Descongelación</td>
      <td>Multiplicación de patógenos si se descongela a
      temperatura ambiente o por encima de 5°C; recontaminación
      por exudado</td>
      <td>Ninguno</td>
      <td>Ninguno</td>
      <td>2</td><td>3</td><td>6</td>
      <td>
        <ul>
          <li>Descongelar siempre en refrigerador ≤5°C</li>
          <li>Nunca recongelar</li>
          <li>Registro en HACCP-11</li>
        </ul>
      </td>
      <td>SÍ (PCC5)</td>
    </tr>
    <tr class="celda-riesgo-alto">
      <td>Regeneración para entrega</td>
      <td>Supervivencia de patógenos vegetativos si el centro
      del producto no alcanza ≥70°C antes de empacar</td>
      <td>Ninguno</td>
      <td>Ninguno</td>
      <td>2</td><td>3</td><td>6</td>
      <td>
        <ul>
          <li>Verificación con termómetro de sonda en cada
          pedido</li>
          <li>Registro en HACCP-11</li>
        </ul>
      </td>
      <td>SÍ (PCC6)</td>
    </tr>
    <tr class="celda-riesgo-medio">
      <td>Entrega a domicilio</td>
      <td>Pérdida de temperatura durante el trayecto</td>
      <td>Ninguno</td>
      <td>Ninguno</td>
      <td>2</td><td>2</td><td>4</td>
      <td>
        <ul>
          <li>Prerrequisito: bolsa isotérmica; ≥63°C para
          entrega caliente y ≤-18°C para entrega congelada
          durante todo el trayecto (§12.2)</li>
        </ul>
      </td>
      <td>NO</td>
    </tr>
  </tbody>
</table>
</div>
`;

const SECCION_6 = `
<h2 id="sec-6-1">6.1 Árbol de Decisiones — Determinación de PCC</h2>
<p>Aplicación del árbol de decisiones del Codex Alimentarius a
cada etapa identificada en §5.2. La columna "Conclusión"
coincide con la columna "¿Es PCC?" de §5.2.</p>
<div class="tabla-wrapper">
<table class="tabla-ancha">
  <thead>
    <tr>
      <th>Etapa</th>
      <th>P1 ¿Existen medidas preventivas?</th>
      <th>P2 ¿Elimina o reduce el peligro a nivel aceptable?</th>
      <th>P3 ¿Puede el peligro alcanzar nivel inaceptable?</th>
      <th>P4 ¿Un paso posterior lo elimina o reduce?</th>
      <th>Conclusión</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Recepción MP</td>
      <td>Sí</td>
      <td>No</td>
      <td>Sí</td>
      <td>Sí — cocción (PCC1)</td>
      <td>NO — prerrequisito</td>
    </tr>
    <tr class="alt">
      <td>Almacenamiento refrigerado — materia prima</td>
      <td>Sí</td>
      <td>No</td>
      <td>Sí</td>
      <td>Sí — cocción (PCC1)</td>
      <td>NO — prerrequisito</td>
    </tr>
    <tr>
      <td>Almacenamiento refrigerado — producto terminado</td>
      <td>Sí</td>
      <td>No</td>
      <td>Sí</td>
      <td>No — la regeneración (PCC6) no destruye toxinas
      termoestables</td>
      <td>SÍ (PCC7)</td>
    </tr>
    <tr class="alt">
      <td>Preparación — platillos con cocción posterior</td>
      <td>Sí</td>
      <td>No</td>
      <td>Sí</td>
      <td>Sí — cocción (PCC1)</td>
      <td>NO — prerrequisito</td>
    </tr>
    <tr>
      <td>Preparación de platillos e ingredientes sin cocción
      posterior</td>
      <td>Sí</td>
      <td>No</td>
      <td>Sí</td>
      <td>No — no hay cocción posterior</td>
      <td>SÍ (PCC1b)</td>
    </tr>
    <tr class="alt">
      <td>Incorporación de guarniciones crudas y salsas frías
      en el servicio</td>
      <td>Sí</td>
      <td>No</td>
      <td>Sí</td>
      <td>No — se incorporan después del mantenimiento en
      caliente (PCC3), ningún paso posterior las cubre</td>
      <td>SÍ (PCC1b)</td>
    </tr>
    <tr>
      <td>Cocción</td>
      <td>Sí</td>
      <td>Sí — el árbol concluye en P2</td>
      <td>N/A</td>
      <td>N/A</td>
      <td>SÍ (PCC1)</td>
    </tr>
    <tr>
      <td>Enfriamiento rápido</td>
      <td>Sí</td>
      <td>No</td>
      <td>Sí</td>
      <td>No — ningún paso posterior destruye toxinas
      termoestables</td>
      <td>SÍ (PCC2)</td>
    </tr>
    <tr class="alt">
      <td>Transporte</td>
      <td>Sí</td>
      <td>No</td>
      <td>Sí</td>
      <td>No — forma parte del mismo control continuo que el
      servicio</td>
      <td>SÍ (PCC3)</td>
    </tr>
    <tr>
      <td>Mantención caliente en servicio</td>
      <td>Sí</td>
      <td>Sí — el árbol concluye en P2</td>
      <td>N/A</td>
      <td>N/A</td>
      <td>SÍ (PCC3)</td>
    </tr>
    <tr class="alt">
      <td>Servicio al cliente</td>
      <td>Sí</td>
      <td>No</td>
      <td>Criterio*</td>
      <td>Criterio*</td>
      <td>NO — prerrequisito*</td>
    </tr>
    <tr>
      <td>Congelación</td>
      <td>Sí</td>
      <td>Sí — el árbol concluye en P2</td>
      <td>N/A</td>
      <td>N/A</td>
      <td>SÍ (PCC4)</td>
    </tr>
    <tr class="alt">
      <td>Descongelación</td>
      <td>Sí</td>
      <td>No</td>
      <td>Sí</td>
      <td>No — nada corrige una descongelación fallida antes
      de la regeneración</td>
      <td>SÍ (PCC5)</td>
    </tr>
    <tr>
      <td>Regeneración para entrega</td>
      <td>Sí</td>
      <td>Sí — el árbol concluye en P2</td>
      <td>N/A</td>
      <td>N/A</td>
      <td>SÍ (PCC6)</td>
    </tr>
    <tr class="alt">
      <td>Entrega a domicilio</td>
      <td>Sí</td>
      <td>No</td>
      <td>Criterio*</td>
      <td>Criterio*</td>
      <td>NO — prerrequisito*</td>
    </tr>
  </tbody>
</table>
</div>
<p class="nota"><em>* Estas dos etapas no encajan limpiamente en
el árbol: el peligro declarado (contaminación por manipulador /
alérgenos no declarados; pérdida de temperatura durante el
trayecto de entrega) no tiene un límite crítico medible en el
plan actual, a diferencia del resto de los PCC. El árbol de
decisión por sí solo no resuelve bien peligros sin límite
numérico — la clasificación se apoya además en el criterio de
"medibilidad" que exige cualquier PCC. Ambas se reportan como
no-PCC / prerrequisito, coincidiendo con §5.2, pero se marcan
aquí como zona gris para revisión futura.</em></p>

<h2 id="pcc1">PCC 1 – Cocción</h2>
<p><em>Cocina doméstica, estufa con extractor</em></p>
<div class="tabla-wrapper">
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
      <td><strong>≥75°C</strong> instantáneo en el centro
      del producto, o combinación equivalente
      <strong>≥70°C durante 2 minutos</strong>.</td>
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
</div>

<h2 id="pcc1b">PCC 1b – Preparación e Incorporación de
Ingredientes sin Tratamiento Térmico Posterior</h2>
<p><em>Cocina doméstica y punto de venta — área de preparación
en frío</em></p>
<div class="tabla-wrapper">
<table>
  <tbody>
    <tr>
      <td class="celda-header-verde">Peligro identificado</td>
      <td class="celda-riesgo-alto">Contaminación cruzada por
      patógenos vegetativos (Salmonella, Escherichia coli,
      Listeria monocytogenes) procedentes de alimento crudo de
      origen animal, superficies, utensilios o manos del
      manipulador, y contaminación por toxina de Staphylococcus
      aureus. No existe paso posterior que elimine o reduzca
      estos peligros antes del consumo.</td>
    </tr>
    <tr>
      <td class="celda-header-verde">Alcance</td>
      <td>
        <p>Aplica a toda incorporación de ingredientes crudos o
        listos para consumo que se añaden al alimento después
        del tratamiento térmico, o a platillos que se sirven
        sin tratamiento térmico posterior a su preparación.
        Comprende:</p>
        <ul>
          <li>Platillos servidos sin cocción posterior: Nachos
          con Guacamole</li>
          <li>Guarniciones crudas añadidas después de cocinar:
          lechuga, jitomate, cilantro, cebolla, rábano,
          limón</li>
          <li>Salsas y preparaciones frías sin paso letal:
          salsa de jitomate cruda, guacamole</li>
        </ul>
        <p>Estos ingredientes no pasan por ningún tratamiento
        térmico posterior a su preparación, por lo que la
        cocción (PCC1) y la regeneración (PCC6) no constituyen
        barrera para los peligros asociados a ellos. El
        mantenimiento en caliente (PCC3) tampoco los cubre, ya
        que se incorporan en el momento del servicio.</p>
      </td>
    </tr>
    <tr>
      <td class="celda-header-verde">Límite crítico</td>
      <td>
        <p>Control procedimental, verificable por observación
        directa. No existe un parámetro numérico aplicable a
        los peligros de contaminación cruzada. Se cumplen
        íntegramente y sin excepción:</p>
        <ol type="a">
          <li>Lavado de manos conforme al procedimiento de
          §10.1 inmediatamente antes de manipular estos
          ingredientes</li>
          <li>Lavado de vegetales con agua potable corriente
          antes de su preparación</li>
          <li>Superficie de trabajo limpia y desinfectada antes
          de comenzar</li>
          <li>Tabla de corte verde, de uso exclusivo para
          vegetales y producto listo para consumo; nunca la
          usada para carne cruda</li>
          <li>Utensilios limpios y de uso exclusivo para esta
          preparación</li>
          <li>Ausencia total de alimento crudo de origen animal
          en la superficie de trabajo durante la
          preparación</li>
          <li>Conservación a ≤5°C desde la preparación hasta el
          momento de servir, tanto en cocina como en el punto
          de venta</li>
          <li>Tiempo máximo fuera de refrigeración durante el
          servicio: 2 horas. Transcurrido ese plazo, el
          producto remanente se desecha y se repone desde
          refrigeración</li>
          <li>Manipulación exclusivamente con utensilio o
          guante limpio; nunca con la mano desnuda</li>
        </ol>
      </td>
    </tr>
    <tr>
      <td class="celda-header-verde">Monitoreo</td>
      <td>Verificación visual del cumplimiento de los nueve
      puntos por parte del responsable de cocina, antes de
      iniciar cada preparación de este tipo. Durante la jornada
      de servicio: verificación de la temperatura de
      conservación con termómetro de sonda desinfectado en la
      apertura y cada hora hasta el cierre. Registro en
      HACCP-12. Responsable: {{responsables.chef}}.</td>
    </tr>
    <tr>
      <td class="celda-header-verde">Acción correctiva</td>
      <td class="celda-riesgo-alto">
        <ul>
          <li>Si alguno de los puntos no se cumple: detener la
          preparación, desechar el producto en curso, limpiar y
          desinfectar la superficie y los utensilios, y
          reiniciar desde el principio</li>
          <li>Si el producto ha superado ≤5°C o las 2 horas
          fuera de refrigeración, se desecha; no se reincorpora
          a refrigeración</li>
          <li>Si el incumplimiento se detecta después de
          servir, aplicar el procedimiento de retirada de
          producto (§7.4)</li>
          <li>Registrar en HACCP-07</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td class="celda-header-verde">Registro</td>
      <td>Verificación rutinaria de los nueve puntos: HACCP-12.
      Desviaciones: HACCP-07.</td>
    </tr>
  </tbody>
</table>
</div>

<h2 id="pcc2">PCC 2 – Enfriamiento Rápido</h2>
<p><em>Tarja doméstica con baño de hielo</em></p>
<div class="tabla-wrapper">
<table>
  <tbody>
    <tr>
      <td class="celda-header-verde">Peligro identificado</td>
      <td class="celda-riesgo-alto">Germinación de esporas y
      multiplicación de Clostridium perfringens y Bacillus
      cereus durante un enfriamiento lento, y formación de
      toxina termoestable de Staphylococcus aureus. Ninguno de
      estos peligros se controla mediante cocción: las esporas
      sobreviven al tratamiento térmico y la toxina de
      S. aureus resiste el calor una vez formada. El control es
      el enfriamiento rápido (PCC2) y la higiene de manos
      (§10.1).</td>
    </tr>
    <tr>
      <td class="celda-header-verde">Límite crítico</td>
      <td>De &gt;63°C a &lt;21°C en 2 horas; de &lt;21°C a ≤5°C
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
          <li>Si a las 6 horas no está a ≤5°C: descartar y
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
</div>

<h2 id="pcc3">PCC 3 – Mantenimiento en Caliente durante Servicio</h2>
<p class="nota"><strong>Aplica a la modalidad de venta desde
puesto, en cada jornada autorizada por Limerick City &amp; County
Council.</strong></p>
<p><em>Chafing dishes en punto de venta</em></p>
<div class="tabla-wrapper">
<table>
  <tbody>
    <tr>
      <td class="celda-header-verde">Peligro identificado</td>
      <td class="celda-riesgo-alto">Crecimiento de patógenos en
      alimentos cocinados que no se mantienen a temperatura
      segura — desde que salen de la cocina de producción,
      durante el transporte, el montaje del puesto y toda la
      jornada de servicio.</td>
    </tr>
    <tr>
      <td class="celda-header-verde">Alcance</td>
      <td>Aplica desde la salida del alimento de la cocina de
      producción, durante todo el transporte, el montaje del
      puesto y toda la jornada de servicio.</td>
    </tr>
    <tr>
      <td class="celda-header-verde">Límite crítico</td>
      <td>≥63°C en todo momento, desde la salida de la cocina
      hasta el fin del servicio.</td>
    </tr>
    <tr>
      <td class="celda-header-verde">Monitoreo</td>
      <td>
        <p><strong>¿Qué?</strong> Temperatura del producto</p>
        <p><strong>¿Cómo?</strong> Termómetro sonda calibrado</p>
        <p><strong>¿Cuándo?</strong> Antes de salir de la cocina,
        al llegar al punto de venta, y cada hora durante el
        servicio</p>
        <p><strong>¿Quién?</strong> {{responsables.operaciones}}</p>
      </td>
    </tr>
    <tr>
      <td class="celda-header-verde">Acción correctiva</td>
      <td class="celda-riesgo-alto">
        <ul>
          <li>Retirar el alimento del servicio</li>
          <li>Regenerar a ≥70°C antes de reanudar el servicio</li>
          <li>Si no es posible regenerar, retirar el alimento
          del servicio de forma definitiva</li>
          <li>Registrar en HACCP-07</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td class="celda-header-verde">Registro</td>
      <td>Hoja de control de temperatura en servicio (HACCP-03).
      Registro cada hora.</td>
    </tr>
  </tbody>
</table>
</div>
<p class="nota"><em>El límite crítico de ≥63°C aplica al
alimento sometido a tratamiento térmico. Las guarniciones
crudas y salsas frías que se incorporan en el momento del
servicio están cubiertas por PCC1b y se mantienen a ≤5°C hasta
su incorporación.</em></p>

<h2 id="pcc4">PCC 4 – Congelación</h2>
<p><em>Congelador doméstico — cajones 1, 2 y 3
exclusivos Órale</em></p>
<div class="tabla-wrapper">
<table>
  <tbody>
    <tr>
      <td class="celda-header-verde">Peligro identificado</td>
      <td class="celda-riesgo-alto">Crecimiento bacteriano
      si el alimento no alcanza ≤-18°C rápidamente o si
      la cadena de frío se interrumpe durante el
      almacenamiento.</td>
    </tr>
    <tr>
      <td class="celda-header-verde">Límite crítico</td>
      <td>≤-18°C en el congelador, mantenido de forma
      continua.</td>
    </tr>
    <tr>
      <td class="celda-header-verde">Monitoreo</td>
      <td>
        <p><strong>¿Qué?</strong> Temperatura del
        congelador</p>
        <p><strong>¿Cómo?</strong> Termómetro de nevera
        colocado en el congelador</p>
        <p><strong>¿Cuándo?</strong> Dos veces al día:
        mañana y noche</p>
        <p><strong>¿Quién?</strong>
        {{responsables.chef}} o
        {{responsables.operaciones}}</p>
      </td>
    </tr>
    <tr>
      <td class="celda-header-verde">Acción correctiva</td>
      <td class="celda-riesgo-alto">
        <ul>
          <li>Si la lectura supera -18°C: verificar cierre
          de puerta y ajustar termostato</li>
          <li>Inspeccionar el producto: si presenta signos
          de descongelación (reblandecimiento, cristales de
          hielo superficiales, líquido acumulado), se
          desecha</li>
          <li>No se recongela en ningún caso</li>
          <li>Como la duración de la desviación no es
          determinable con el monitoreo establecido, ante
          cualquier duda el producto se desecha</li>
          <li>Registrar en HACCP-07</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td class="celda-header-verde">Registro</td>
      <td>HACCP-10 — Control de temperatura del
      congelador. Frecuencia: 2 veces al día.</td>
    </tr>
  </tbody>
</table>
</div>

<h2 id="pcc5">PCC 5 – Descongelación</h2>
<p><em>Refrigerador doméstico — niveles 1 y 2 Órale</em></p>
<div class="tabla-wrapper">
<table>
  <tbody>
    <tr>
      <td class="celda-header-verde">Peligro identificado</td>
      <td class="celda-riesgo-alto">Proliferación bacteriana
      si el alimento se descongela a temperatura ambiente
      o de forma descontrolada en la zona de peligro
      (5°C–63°C).</td>
    </tr>
    <tr>
      <td class="celda-header-verde">Límite crítico</td>
      <td>
        <ul>
          <li>Descongelar SIEMPRE en refrigerador
          a ≤5°C</li>
          <li>Nunca descongelar a temperatura ambiente</li>
          <li>Tiempo: 12–24 horas en refrigerador</li>
          <li>Una vez descongelado: consumir o regenerar
          en 24 horas — nunca recongelar</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td class="celda-header-verde">Monitoreo</td>
      <td>
        <p><strong>¿Qué?</strong> Temperatura del
        refrigerador y estado del alimento</p>
        <p><strong>¿Cómo?</strong> Termómetro de nevera
        y verificación visual</p>
        <p><strong>¿Cuándo?</strong> Al inicio de la
        descongelación y al retirar del refrigerador</p>
        <p><strong>¿Quién?</strong>
        {{responsables.chef}} o
        {{responsables.operaciones}}</p>
      </td>
    </tr>
    <tr>
      <td class="celda-header-verde">Acción correctiva</td>
      <td class="celda-riesgo-alto">
        <ul>
          <li>Si se detecta alimento descongelado
          a temperatura ambiente: desechar</li>
          <li>Si el alimento muestra signos de
          deterioro: desechar y registrar en HACCP-07</li>
          <li>Nunca recongelar</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td class="celda-header-verde">Registro</td>
      <td>HACCP-11 — Registro de descongelación
      y entregas.</td>
    </tr>
  </tbody>
</table>
</div>

<h2 id="pcc6">PCC 6 – Regeneración para Entrega</h2>
<p><em>Cocina doméstica — para entregas calientes
por WhatsApp</em></p>
<div class="tabla-wrapper">
<table>
  <tbody>
    <tr>
      <td class="celda-header-verde">Peligro identificado</td>
      <td class="celda-riesgo-alto">Supervivencia de
      patógenos si el alimento descongelado no alcanza
      temperatura suficiente antes de la entrega.</td>
    </tr>
    <tr>
      <td class="celda-header-verde">Límite crítico</td>
      <td>
        <ul>
          <li>Temperatura interna mínima
          <strong>70°C</strong> antes de empacar</li>
          <li>Verificar en el punto más frío del alimento</li>
          <li>Empacar y entregar inmediatamente tras
          alcanzar la temperatura</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td class="celda-header-verde">Monitoreo</td>
      <td>
        <p><strong>¿Qué?</strong> Temperatura interna
        del alimento regenerado</p>
        <p><strong>¿Cómo?</strong> Termómetro sonda
        digital calibrado</p>
        <p><strong>¿Cuándo?</strong> Antes de empacar
        cada pedido caliente</p>
        <p><strong>¿Quién?</strong>
        {{responsables.chef}} o
        {{responsables.operaciones}}</p>
      </td>
    </tr>
    <tr>
      <td class="celda-header-verde">Acción correctiva</td>
      <td class="celda-riesgo-alto">
        <ul>
          <li>Si &lt;70°C: continuar calentando</li>
          <li>No entregar sin verificar temperatura</li>
          <li>Registrar en HACCP-11</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td class="celda-header-verde">Registro</td>
      <td>HACCP-11 — Campo de temperatura de
      regeneración obligatorio para cada
      entrega caliente.</td>
    </tr>
  </tbody>
</table>
</div>
<p class="nota"><em>GN-16 §5.1 formula este valor como buena
práctica recomendada ("should"). Órale lo adopta como límite
crítico obligatorio. El mantenimiento en caliente a ≥63°C
(§4.3.10, §5.1) sí constituye requisito legal.</em></p>

<h2 id="pcc7">PCC 7 – Almacenamiento Refrigerado de Producto
Terminado</h2>
<p><em>Refrigerador doméstico — niveles 1 y 2 Órale</em></p>
<div class="tabla-wrapper">
<table>
  <tbody>
    <tr>
      <td class="celda-header-verde">Peligro identificado</td>
      <td class="celda-riesgo-alto">Crecimiento de patógenos y
      formación de toxinas en producto cocido almacenado en
      refrigeración. La regeneración posterior (PCC6) destruye
      patógenos vegetativos, pero no destruye toxinas
      termoestables.</td>
    </tr>
    <tr>
      <td class="celda-header-verde">Límite crítico</td>
      <td>≤5°C de forma continua, durante un máximo de 4 días
      desde la fecha de producción.</td>
    </tr>
    <tr>
      <td class="celda-header-verde">Monitoreo</td>
      <td>
        <p><strong>¿Qué?</strong> Temperatura del refrigerador y
        fecha de producción etiquetada en cada ración</p>
        <p><strong>¿Cómo?</strong> Termómetro de nevera visible;
        verificación visual de la etiqueta</p>
        <p><strong>¿Cuándo?</strong> Dos veces al día</p>
        <p><strong>¿Quién?</strong>
        {{responsables.chef}} o
        {{responsables.operaciones}}</p>
      </td>
    </tr>
    <tr>
      <td class="celda-header-verde">Acción correctiva</td>
      <td class="celda-riesgo-alto">
        <ul>
          <li>Si la lectura supera 5°C, medir la temperatura
          central del producto</li>
          <li>Si el producto supera 5°C, se desecha — la
          duración de la desviación no es determinable con el
          monitoreo establecido</li>
          <li>Toda ración que exceda los 4 días desde
          producción se desecha</li>
          <li>No se congela producto que haya estado
          refrigerado más allá del plazo</li>
          <li>Registrar en HACCP-07</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td class="celda-header-verde">Registro</td>
      <td>HACCP-05.</td>
    </tr>
  </tbody>
</table>
</div>
`;

const SECCION_7 = `
<h2 id="sec-7-1">7.1 Resumen de Monitoreo de PCCs</h2>
<div class="tabla-wrapper">
<table class="tabla-ancha">
  <thead>
    <tr>
      <th>PCC</th>
      <th>Peligro</th>
      <th>Límite crítico</th>
      <th>¿Qué medir?</th>
      <th>¿Cómo?</th>
      <th>Frecuencia</th>
      <th>Responsable</th>
      <th>Registro</th>
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
      <td>HACCP-01</td>
    </tr>
    <tr class="celda-riesgo-alto">
      <td>PCC1b</td>
      <td>Contaminación cruzada, sin paso letal</td>
      <td>Procedimental — 9 puntos (§6, PCC1b)</td>
      <td>Cumplimiento de los 9 puntos</td>
      <td>Observación directa + termómetro de sonda (≤5°C)</td>
      <td>Antes de cada preparación; en la apertura y cada hora
      durante el servicio</td>
      <td>{{responsables.chef}}</td>
      <td>HACCP-12. Desviaciones: HACCP-07.</td>
    </tr>
    <tr>
      <td>PCC2</td>
      <td>Proliferación zona peligro</td>
      <td>≤5°C en 6 h</td>
      <td>Temperatura central</td>
      <td>Termómetro sonda</td>
      <td>Cada 30–60 min</td>
      <td>{{responsables.chef}}</td>
      <td>HACCP-02</td>
    </tr>
    <tr class="celda-riesgo-alto">
      <td>PCC3</td>
      <td>Crecimiento en servicio</td>
      <td>≥63°C en servicio</td>
      <td>Temperatura chafing dish</td>
      <td>Termómetro sonda</td>
      <td>Cada hora</td>
      <td>{{responsables.operaciones}}</td>
      <td>HACCP-03</td>
    </tr>
    <tr>
      <td>PCC4</td>
      <td>Crecimiento bacteriano / fallo de cadena de frío</td>
      <td>≤-18°C</td>
      <td>Temperatura del congelador</td>
      <td>Termómetro de nevera</td>
      <td>2 veces al día</td>
      <td>{{responsables.chef}} / {{responsables.operaciones}}</td>
      <td>HACCP-10</td>
    </tr>
    <tr>
      <td>PCC5</td>
      <td>Proliferación bacteriana durante descongelación</td>
      <td>≤5°C en refrigerador, 12–24 h</td>
      <td>Temperatura del refrigerador y estado del alimento</td>
      <td>Termómetro de nevera + verificación visual</td>
      <td>Inicio y retiro de la descongelación</td>
      <td>{{responsables.chef}} / {{responsables.operaciones}}</td>
      <td>HACCP-11</td>
    </tr>
    <tr class="celda-riesgo-alto">
      <td>PCC6</td>
      <td>Supervivencia de patógenos si no se regenera</td>
      <td>≥70°C antes de empacar</td>
      <td>Temperatura interna</td>
      <td>Termómetro sonda digital</td>
      <td>Antes de empacar cada pedido caliente</td>
      <td>{{responsables.chef}} / {{responsables.operaciones}}</td>
      <td>HACCP-11</td>
    </tr>
    <tr class="celda-riesgo-alto">
      <td>PCC7</td>
      <td>Crecimiento de patógenos y formación de toxinas</td>
      <td>≤5°C, máx. 4 días desde producción</td>
      <td>Temperatura del refrigerador y fecha de producción</td>
      <td>Termómetro visible + verificación de etiqueta</td>
      <td>2 veces al día</td>
      <td>{{responsables.chef}} / {{responsables.operaciones}}</td>
      <td>HACCP-05</td>
    </tr>
  </tbody>
</table>
</div>

<h2 id="sec-7-2">7.2 Equipamiento de Medición Requerido</h2>
<ul>
  <li>Termómetros de sonda digitales (mínimo 2 unidades):
  calibrados mensualmente. Uno permanece en la cocina doméstica;
  otro se traslada al punto de venta.</li>
  <li>Termómetro del refrigerador doméstico: verificación 2 veces
  al día (mañana y noche). Temperatura objetivo ≤5°C.</li>
  <li>Todas las lecturas se registran en papel (formatos HACCP)
  y en las herramientas digitales de gestión gestionadas por el
  Operations & Compliance Manager.</li>
</ul>

<h2 id="sec-7-3">7.3 Protocolo de Acción Correctiva General</h2>
<p>Las acciones correctivas específicas definidas para cada PCC
en la sección 6 prevalecen sobre este protocolo general. Este
protocolo aplica a desviaciones no cubiertas por una acción
correctiva específica, y como procedimiento de registro e
investigación en todos los casos.</p>
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
<p class="nota"><em>Excepción — desviación de PCC2 (enfriamiento
rápido): la recuperación mediante cocción o regeneración
adicional NO es aplicable. Las toxinas preformadas durante un
enfriamiento lento son termoestables y no se destruyen con
calor. El producto afectado se desecha sin excepción.</em></p>

<h2 id="sec-7-4">7.4 Procedimiento de Retirada de Producto</h2>
<p>GN-16 §3.2 (requisito legal): ante alimento inseguro que ya
ha llegado al consumidor, debe informarse al cliente del motivo
de la retirada, recuperarse el producto y notificarse al HSE.</p>
<ul>
  <li><strong>Activación:</strong> sospecha fundada de que un
  producto ya entregado o vendido es inseguro</li>
  <li><strong>Identificación de clientes afectados:</strong>
  HACCP-11 vincula el lote afectado con las referencias de
  pedido correspondientes. El historial de WhatsApp Business
  vincula cada referencia de pedido con el cliente y su
  contacto. Ambas fuentes se consultan de forma conjunta.</li>
  <li><strong>Notificación al cliente por WhatsApp:</strong>
  motivo, instrucción de no consumir, reembolso o reposición</li>
  <li><strong>Notificación obligatoria al HSE</strong> del
  incidente y las medidas tomadas</li>
  <li><strong>Retirada</strong> del producto restante del punto
  de venta y del congelador, identificado y segregado</li>
  <li><strong>Registro:</strong> producto, lote, cantidad
  afectada, clientes contactados, acción tomada, fecha de
  notificación al HSE (HACCP-07)</li>
  <li><strong>Limitación conocida:</strong> las ventas en calle
  sin pedido previo no permiten identificar al cliente; en ese
  caso se emite aviso público en los canales de la empresa</li>
</ul>
`;

const SECCION_8 = `
<h2 id="sec-8-1">8.1 Actividades de Verificación</h2>
<div class="tabla-wrapper">
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
      <td>Contraste con agua helada (0°C) y agua hirviendo (100°C).
      Tolerancia de aceptación: ±1°C respecto del valor de
      referencia. Una lectura fuera de esta tolerancia invalida
      el termómetro: se retira de uso y se sustituye antes de la
      siguiente jornada de producción o servicio.</td>
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
</div>

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
<p>GN-16 §3.3 exige conservar los registros al menos hasta que
pueda asumirse razonablemente que el alimento ha sido consumido.
Como política interna, Órale conserva todos los registros HACCP
durante un mínimo de 3 años, en formato físico (carpeta HACCP)
y/o en las herramientas digitales de gestión del negocio. El
Operations & Compliance Manager es responsable de mantenerlos
disponibles para inspección por parte del HSE en cualquier
momento.</p>

<h2 id="sec-9-1">9.1 Formatos de Registro Obligatorios</h2>
<div class="tabla-wrapper">
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
      <td>Cada hora durante servicio</td>
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
    <tr class="alt">
      <td>HACCP-10</td>
      <td>Control de temperatura del congelador</td>
      <td>2 veces por día</td>
      <td>Cocina doméstica</td>
    </tr>
    <tr>
      <td>HACCP-11</td>
      <td>Registro de descongelación y entregas</td>
      <td>Cada pedido</td>
      <td>Entrega a domicilio</td>
    </tr>
    <tr class="alt">
      <td>HACCP-12</td>
      <td>Verificación de preparación en frío (PCC1b)</td>
      <td>Antes de cada preparación y en cada apertura de
      servicio</td>
      <td>Cocina y punto de venta</td>
    </tr>
  </tbody>
</table>
</div>
`;

const SECCION_10 = `
<h2 id="sec-10-1">10.1 Higiene Personal</h2>
<p><strong>Lavado de manos obligatorio</strong> con agua
caliente + jabón no perfumado + mínimo 20 segundos, en los
siguientes momentos:</p>
<ul>
  <li>Al iniciar la jornada de preparación o servicio</li>
  <li>Antes de manipular alimentos cocinados o
  listos para consumo</li>
  <li>Tras manipular alimentos crudos</li>
  <li>Tras ir al baño</li>
  <li>Tras manejar residuos o basura</li>
  <li>Tras tocar animales</li>
  <li>Tras sonarse, estornudar o toser</li>
  <li>Tras comer o fumar</li>
  <li>Tras manejar dinero u objetos sucios</li>
  <li>Antes de ponerse guantes desechables</li>
  <li>Tras cada pausa o descanso</li>
</ul>
<p><strong>Procedimiento correcto de lavado de manos:</strong></p>
<ol>
  <li>Mojar las manos con agua caliente corriente</li>
  <li>Aplicar jabón líquido no perfumado, suficiente
  para hacer espuma</li>
  <li>Frotar todas las superficies de las manos durante
  mínimo 20 segundos (GN-16 §4.3.6 recomienda 10–15 segundos;
  Órale adopta un estándar más estricto), incluyendo yemas
  de los dedos y pulgares (GN-16 §4.3.6), así como dorso,
  entre los dedos, uñas y muñecas</li>
  <li>Enjuagar con agua limpia</li>
  <li>Secar con papel desechable de un solo uso</li>
</ol>
<p class="nota"><em>GN16 §4.3.5: El gel/alcohol desinfectante
NO es sustituto legal del lavado de manos en actividades de
alto riesgo. Los agentes alcohólicos quedan completamente
inactivados por materia orgánica y no son adecuados cuando
las manos pueden estar en contacto con restos de alimentos.
El gel puede usarse como medida complementaria pero nunca
en sustitución del lavado con agua y jabón.</em></p>
<p><strong>Guantes desechables:</strong></p>
<ul>
  <li>Las manos deben estar limpias antes de ponerse los guantes</li>
  <li>Deben ser <strong>libres de látex</strong> y aptos para
  uso alimentario</li>
  <li>Cambiar regularmente y desechar correctamente</li>
  <li>Cambiar al cambiar de tarea (crudos a cocinados,
  basura, dinero)</li>
  <li>Los guantes protegen el alimento, no al manipulador</li>
</ul>
<p><strong>Ropa de trabajo y presentación personal:</strong></p>
<ul>
  <li>Delantal limpio específico para la operación del punto
  de venta — retirar al ir al baño, manejar basura o
  tomar descansos</li>
  <li>Cabello recogido y cubierto con gorra o malla</li>
  <li>Joyas: solo se permite alianza, pendientes de aro
  pequeño o espárrago</li>
  <li>Sin esmalte de uñas, uñas postizas ni pestañas postizas</li>
  <li>Heridas o cortes: cubrir con vendaje impermeable
  de <strong>color azul</strong> (recomendado por GN16
  para ser visible si cae en el alimento)</li>
  <li>Prohibido fumar en el punto de venta</li>
</ul>
<p><strong>Personal enfermo:</strong> GN-16 §4.3.6 prohíbe que el
personal enfermo manipule alimentos, sin especificar un periodo
de exclusión. Prohibido manipular alimentos con síntomas
gastrointestinales, vómitos, diarrea, infecciones cutáneas en
manos o infecciones respiratorias activas. Notificación
obligatoria al responsable. Como estándar de seguridad
alimentaria interno, Órale aplica exclusión de la manipulación
de alimentos durante el episodio de diarrea o vómito y hasta
48 horas después del cese de los síntomas.</p>

<h2 id="sec-10-2">10.2 Limpieza y Desinfección de la Cocina Doméstica</h2>
<ul>
  <li>Antes de cada sesión: limpiar y desinfectar todas las
  superficies con producto aprobado para uso alimentario.</li>
  <li>Procedimiento:
    <ol>
      <li>Limpiar (eliminar residuos físicos)</li>
      <li>Enjuagar</li>
      <li>Desinfectar</li>
      <li>Enjuague final</li>
      <li>Secar al aire</li>
    </ol>
  </li>
  <li>Tablas de corte: lavar con agua caliente y jabón tras cada
  uso. Desinfectar al finalizar la sesión.</li>
  <li>Utensilios: lavar en lavatrastes o a mano con agua caliente
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
  <li>Temperatura objetivo: ≤5°C. Verificación dos veces al día.
  Registro en HACCP-05.</li>
  <li>No sobrecargar el refrigerador — la circulación de aire es
  necesaria para mantener temperatura uniforme.</li>
</ul>
<p><strong>Separación empresa / uso particular:</strong></p>
<ul>
  <li><strong>Nivel 1 y 2:</strong> exclusivos Órale — etiquetados
  "ÓRALE". Capacidad de refrigeración: 10 raciones de 650 ml
  para venta diaria.</li>
  <li><strong>Nivel 3:</strong> uso particular
  — etiquetado "PARTICULAR"</li>
  <li>Nunca mezclar alimentos de empresa y
  uso particular en el mismo nivel</li>
</ul>
<p><strong>Vida útil del producto refrigerado:</strong>
Las raciones mantenidas en refrigeración para venta diaria se
conservan a ≤5°C durante un máximo de 4 días desde la fecha de
producción. Cada ración se etiqueta con fecha de producción y
fecha máxima de consumo. Transcurrido el plazo, la ración se
desecha. No se congela producto que haya permanecido en
refrigeración más allá del plazo establecido. Este plazo es
política interna de Órale; GN-16 no establece una cifra al
respecto.</p>

<h2 id="sec-10-3b">10.3b Organización del Congelador</h2>
<ul>
  <li><strong>Cajones 1, 2 y 3:</strong> exclusivos
  Órale — etiquetados "ÓRALE"</li>
  <li><strong>Cajón 4:</strong> uso particular
  — etiquetado "PARTICULAR"</li>
  <li>Temperatura objetivo: ≤-18°C</li>
  <li>Sistema FIFO: producción más antigua al frente</li>
  <li>Cada porción etiquetada con: nombre del platillo,
  fecha de producción, fecha de congelación,
  fecha máxima de consumo</li>
  <li>Capacidad máxima Órale: 30 raciones
  (3 cajones × 10 raciones de 650 ml)</li>
  <li>Verificación de temperatura 2 veces al día
  — registro en HACCP-10</li>
  <li>Congelar inmediatamente tras completar el
  enfriamiento rápido (PCC2)</li>
  <li>Nunca congelar alimento que ha estado en zona de
  peligro más de 4 horas</li>
  <li>Tiempo máximo de almacenamiento: 3 meses desde
  producción</li>
</ul>
<p><strong>Control de producción por capacidad:</strong>
La producción por jornada está limitada por la capacidad
de almacenamiento disponible: 30 raciones de congelación
y 10 de refrigeración a corto plazo, 40 en total. No se
produce un volumen superior al que puede enfriarse
rápidamente (PCC2) y almacenarse de inmediato a la
temperatura que corresponda.</p>

<h2 id="sec-10-4">10.4 Gestión del Agua</h2>
<ul>
  <li>Agua de red potable del apartamento para toda la preparación
  de alimentos.</li>
  <li>Estación portátil de lavado de manos en punto de venta:
  agua embotellada potable en garrafón con llave del agua, jabón líquido
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

<h2 id="sec-10-7">10.7 Control de Plagas</h2>
<p>GN-16 §4.2 incluye el control de plagas entre los 14
prerrequisitos de todo sistema de gestión de seguridad
alimentaria.</p>
<ul>
  <li><strong>Inspección visual semanal</strong> de la cocina
  doméstica: alacenas, zócalos, detrás de electrodomésticos,
  zona de residuos</li>
  <li><strong>Inspección del punto de venta</strong> antes de
  cada instalación</li>
  <li><strong>Medidas preventivas:</strong>
    <ul>
      <li>Alimentos en recipientes herméticos</li>
      <li>Residuos en cubeta con tapa hermética, retirada al
      final de cada jornada</li>
      <li>Sin agua estancada</li>
      <li>Limpieza inmediata de derrames</li>
      <li>Almacenamiento mínimo 450 mm sobre el suelo</li>
    </ul>
  </li>
  <li><strong>Protocolo ante detección de actividad de plagas:</strong>
    <ol>
      <li>Suspender producción</li>
      <li>Desechar todo alimento potencialmente expuesto</li>
      <li>Limpieza y desinfección completa de la zona afectada</li>
      <li>Contactar servicio profesional de control de plagas</li>
      <li>No reanudar la producción hasta confirmar ausencia
      de actividad</li>
    </ol>
  </li>
  <li>Registro de inspecciones e incidencias en HACCP-07</li>
</ul>
`;

const SECCION_11 = `
<h2 id="sec-11-1">11.1 Alérgenos Presentes en el Menú</h2>
<p>De conformidad con el Reglamento (UE) N.º 1169/2011, Órale
gestiona activamente los 14 alérgenos de declaración obligatoria.</p>
<div class="tabla-wrapper">
<table class="tabla-ancha">
  <thead>
    <tr>
      <th>Platillo</th>
      <th>Gluten</th>
      <th>Lácteos</th>
      <th>Huevo</th>
      <th>Frutos Secos</th>
      <th>Soja</th>
      <th>Sulfitos</th>
      <th>Sésamo</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Pozole Rojo</td>
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
      <td>Nachos + Guacamole</td>
      <td>SÍ (nachos)</td><td>SÍ (queso)</td><td>No</td>
      <td>No</td><td>No</td><td>Posible</td><td>No</td>
    </tr>
    <tr class="alt">
      <td>Chilaquiles</td>
      <td>SÍ (tortilla)</td><td>SÍ (crema/queso)</td>
      <td>Posible</td><td>No</td><td>No</td><td>Posible</td><td>No</td>
    </tr>
    <tr>
      <td>Taco de Nopales</td>
      <td>SÍ (tortilla)</td><td>No</td><td>No</td>
      <td>No</td><td>No</td><td>No</td><td>No</td>
    </tr>
  </tbody>
</table>
</div>

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
<p class="nota"><em>Las filas sobre cocina de preparación, escala
de producción y trazabilidad de proveedores aplican a la
producción independientemente del canal de venta. Las filas
sobre verificación del sitio, punto de venta, estación de lavado
de manos, Casual Trading Licence y gestión de residuos en el
punto de venta aplican exclusivamente a la modalidad de venta
desde puesto, en cada jornada autorizada por Limerick City &amp;
County Council.</em></p>
<div class="tabla-wrapper">
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
      <td>Verificación de condiciones del sitio (GN-16 §4.3.1)</td>
      <td>
        <ul>
          <li>Superficie dura y nivelada (pavimento o asfalto)</li>
          <li>Drenaje adecuado de agua superficial si es al
          aire libre</li>
          <li>Ausencia de fuentes próximas de contaminación:
          contenedores de basura, desagües abiertos, animales,
          obras con polvo</li>
          <li>Verificación previa a cada instalación del puesto,
          registrada en el formato de apertura</li>
        </ul>
      </td>
    </tr>
    <tr>
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
          <li>Ejemplo: 20 raciones de 650 ml por jornada</li>
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
          <li>Garrafón con llave del agua, agua potable, jabón y papel</li>
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
    <tr>
      <td>Clasificación de actividad</td>
      <td>
        <ul>
          <li>Operación clasificada como HIGH-RISK según GN16</li>
          <li>Aplican requisitos de Sección 4.3 y 5.1 de GN16</li>
        </ul>
      </td>
    </tr>
    <tr class="alt">
      <td>Protección del alimento en servicio</td>
      <td>
        <ul>
          <li>Sneeze screen o tapa sobre chafing dishes en todo
          momento durante el servicio</li>
          <li>Abrir solo al momento de servir y cerrar
          inmediatamente</li>
          <li>Alimento nunca expuesto sin protección al público</li>
          <li>GN16 §4.3.10: protección física obligatoria donde
          el alimento está expuesto</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Conservación en Frío en el Punto de Venta (PCC1b)</td>
      <td>
        <p>Las guarniciones crudas y las salsas frías se
        mantienen en bufetera fría con lecho de hielo durante
        toda la jornada de servicio. Condiciones de uso
        obligatorias:</p>
        <ul>
          <li>El hielo se elabora con agua potable y se
          manipula con la misma higiene que un alimento</li>
          <li>Los recipientes de guarnición se hunden en el
          lecho de hielo hasta al menos el nivel del producto
          que contienen. No se apoyan sobre la superficie del
          hielo</li>
          <li>El hielo se repone durante la jornada conforme se
          derrite, de modo que el nivel se mantenga en todo
          momento</li>
          <li>El agua de deshielo se drena o retira
          periódicamente y no entra en contacto con el
          alimento</li>
          <li>La temperatura del producto se verifica con
          termómetro de sonda desinfectado en cada apertura y
          cada hora durante el servicio, conforme al monitoreo
          de PCC1b</li>
          <li>Si el producto supera 5°C, se aplica la acción
          correctiva de PCC1b</li>
        </ul>
        <p>Si el lecho de hielo no logra mantener ≤5°C durante
        toda la jornada, se sustituye por un medio de
        refrigeración activo (nevera portátil o acumuladores de
        frío) antes de la siguiente jornada de servicio.</p>
      </td>
    </tr>
    <tr class="alt">
      <td>Almacenamiento sobre el suelo</td>
      <td>
        <ul>
          <li>El alimento debe almacenarse fuera del suelo
          (GN-16 §4.3.10, requisito legal)</li>
          <li>GN-16 recomienda una altura mínima de 450 mm,
          que Órale adopta</li>
          <li>Nunca colocar alimentos directamente en el suelo</li>
        </ul>
      </td>
    </tr>
    <tr class="alt">
      <td>Estación de lavado de manos — especificaciones GN16</td>
      <td>
        <ul>
          <li>Garrafón portátil con grifo — 20 litros
          (capacidad mínima recomendada por GN-16 §4.3.5)</li>
          <li>Etiquetado: <em>"POTABLE WATER ONLY"</em></li>
          <li>Recipiente de agua residual separado y etiquetado:
          <em>"WASTE WATER"</em></li>
          <li>El agua residual no puede descargarse al suelo</li>
          <li>Jabón líquido no perfumado y papel desechable</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Gestión de residuos en punto de venta</td>
      <td>
        <ul>
          <li>Cubeta de basura con <strong>tapa hermética</strong>
          (tight-fitting lid) obligatorio — GN16 §4.3.8</li>
          <li>Vaciar durante la jornada si es necesario</li>
          <li>Segregar residuos de almacenamiento de alimentos</li>
          <li>No dejar residuos en la vía pública</li>
        </ul>
      </td>
    </tr>
    <tr class="alt">
      <td>Trazabilidad de proveedores (GN16 §3.3)</td>
      <td>
        <ul>
          <li>Mantener registro de: nombre y dirección del
          proveedor, tipo de producto, fecha de entrega</li>
          <li>Para alimentos de origen animal (cerdo, pollo):
          guardar albaranes hasta que pueda asumirse razonablemente
          que el alimento ha sido consumido</li>
          <li>Registro en HACCP-04</li>
          <li><strong>Envases y empaques (GN-16 §3.3.4):</strong>
          se mantiene registro del proveedor de contenedores,
          tapas, cubiertos, bolsas y demás materiales en contacto
          con el alimento. Las facturas del proveedor de envases
          se conservan bajo la misma política de conservación
          que el resto de registros.</li>
        </ul>
      </td>
    </tr>
    <tr class="alt">
      <td>Contenedores de servicio</td>
      <td>
        <ul>
          <li>Contenedores desechables de 650 ml aptos
          para uso alimentario (food safe) con tapa</li>
          <li>De un solo uso — nunca se reutilizan</li>
          <li>El cliente recibe el alimento en el contenedor</li>
          <li>Contenedores usados: desechados por el cliente
          en basura — no se recuperan ni reutilizan</li>
          <li>Contenedores no vendidos al cierre de jornada:
          desechados íntegramente junto con el alimento</li>
          <li>Cumple GN16 §4.3.12: contenedores de un solo
          uso utilizados una única vez</li>
          <li>Mantener packaging original del contenedor
          como evidencia de aptitud para uso alimentario</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>
</div>

<h3>Descripción física del puesto (GN-16 §4.3.2, §4.3.3, §4.3.10)</h3>
<p class="nota"><strong>Aplica a la modalidad de venta desde
puesto, en cada jornada autorizada por Limerick City &amp; County
Council.</strong></p>
<p>El puesto de venta consiste en una o dos mesas plegables de
160 cm, con superficie de plástico resistente, lisa, impermeable
y lavable, y estructura metálica plegable (GN-16 §4.3.3). Órale
no opera furgoneta, tráiler ni unidad móvil, por lo que GN-16
§5.2 no resulta aplicable.</p>
<p><strong>Protección del alimento expuesto:</strong> GN-16
§4.3.10 exige proveer sneeze screens u otra protección frente al
público donde haya alimento expuesto, o bien, de forma
alternativa, mantener el alimento cubierto. Órale opera bajo la
segunda modalidad de forma íntegra:</p>
<ul>
  <li>El alimento se traslada desde la cocina de producción en
  bufeteras metálicas con tapa, cerradas antes de salir.</li>
  <li>Las bufeteras permanecen cerradas durante el transporte, el
  montaje del puesto y toda la jornada de servicio.</li>
  <li>La tapa se retira únicamente durante los segundos
  necesarios para servir cada porción, con el manipulador
  situado frente al recipiente.</li>
  <li>No se trasvasa alimento a recipientes abiertos en ningún
  momento de la operación.</li>
</ul>
<p>En consecuencia, el alimento no permanece expuesto de forma
sostenida en ninguna etapa. Esta condición se verifica en cada
apertura de jornada.</p>
<p>El puesto no dispone de cubierta superior ni de cerramiento
lateral. GN-16 §4.3.2 los recomienda para puestos al aire libre
sin constituir requisito legal; la protección del alimento se
asegura mediante el sistema de recipientes cerrados descrito
arriba, conforme a la alternativa prevista en GN-16 §4.3.10.</p>
<p><strong>Mantenimiento de temperatura en el punto de venta:</strong>
el alimento caliente se mantiene en bufeteras metálicas con tapa,
calentadas mediante dos mecheros de alcohol aptos para uso
alimentario por bufetera.</p>
<p><strong>Secuencia obligatoria de montaje:</strong></p>
<ol>
  <li>Colocar las bufeteras sobre la mesa</li>
  <li>Encender los dos mecheros de alcohol de cada bufetera</li>
  <li>Verificar con termómetro de sonda desinfectado que el
  alimento se encuentra a ≥63°C antes de iniciar el servicio</li>
  <li>No iniciar el servicio hasta confirmar dicha temperatura</li>
</ol>
<p>Durante la jornada se verifica la temperatura del alimento con
termómetro de sonda cada hora, registrando la lectura en
HACCP-03. Se verifica asimismo el nivel de combustible de los
mecheros en cada medición y se repone antes de su agotamiento.</p>
<p><strong>Acción correctiva</strong> si la temperatura desciende
por debajo de 63°C: retirar el alimento del servicio, regenerarlo
a ≥70°C antes de reanudar y registrar la incidencia. Si no es
posible regenerar en el punto de venta, el alimento se retira
definitivamente del servicio.</p>
<p>Los mecheros de alcohol se sitúan de forma que no representen
riesgo de contaminación del alimento ni de contacto accidental
con el público (GN-16 §4.3.2).</p>
<p><strong>Contingencia meteorológica:</strong> ante lluvia o
viento que comprometan la protección del alimento, el servicio
se suspende de inmediato, el alimento se cubre y se traslada a
contenedor isotérmico cerrado, y el puesto se recoge. No se
sirve alimento a la intemperie sin protección efectiva.</p>
<p><strong>Iluminación:</strong> la operación se realiza
exclusivamente en horario diurno con luz natural suficiente.
Órale no opera el puesto en horario nocturno; de hacerlo en el
futuro, se dispondrá iluminación artificial con difusores o
bombillas antiastillas sobre las zonas de alimento expuesto
(GN-16 §4.3.2).</p>
<p>Cuando el puesto no está en uso, se almacena limpio y en
lugar limpio (GN-16 §4.3.2).</p>

<h2 id="sec-12-2">12.2 Entrega a Domicilio (WhatsApp)</h2>
<div class="tabla-wrapper">
<table>
  <thead>
    <tr>
      <th>Aspecto</th>
      <th>Requerimiento específico</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Origen y canal</td>
      <td>
        <ul>
          <li>Origen: Apt 301, Richmond Court, Mount Kennett Place,
          Dock Road, Limerick V94 PY76</li>
          <li>Canal: pedidos recibidos por WhatsApp</li>
        </ul>
      </td>
    </tr>
    <tr class="alt">
      <td>Modalidades de entrega</td>
      <td>
        <ul>
          <li>Entrega caliente: regenerada a ≥70°C antes de
          empacar para la entrega (PCC6)</li>
          <li>Entrega congelada: a solicitud del cliente,
          retirada del congelador al momento de la entrega</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Etiquetado obligatorio en cada entrega</td>
      <td>
        <ul>
          <li>Nombre del platillo</li>
          <li>Fecha de producción</li>
          <li>Fecha de congelación</li>
          <li>Instrucciones de conservación</li>
          <li>Instrucciones de recalentamiento: calentar hasta
          ≥70°C antes de consumir</li>
        </ul>
      </td>
    </tr>
    <tr class="alt">
      <td>Transporte</td>
      <td>
        <ul>
          <li>Transporte en bolsa isotérmica</li>
          <li>Entrega caliente: mantener ≥63°C durante
          todo el trayecto</li>
          <li>Entrega congelada: mantener ≤-18°C durante
          todo el trayecto. Emplear acumuladores de frío
          cuando el trayecto lo requiera</li>
          <li>Estas exigencias aplican durante el trayecto,
          bajo responsabilidad de Órale — distinto de la
          instrucción de conservación que se entrega al
          cliente para después de la entrega</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Vida útil del producto</td>
      <td>
        <ul>
          <li>Producto congelado: hasta 3 meses desde
          producción (§10.3b)</li>
          <li>Producto en refrigeración para venta diaria:
          máximo 4 días desde producción, a ≤5°C (§10.3)</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>
</div>
`;

const SECCION_13 = (function () {
  function filasVacias(numFilas, numCols) {
    const celda = '<td>&nbsp;</td>';
    let out = '';
    for (let i = 0; i < numFilas; i++) {
      out += `    <tr${i % 2 === 1 ? ' class="alt"' : ''}>${celda.repeat(numCols)}</tr>\n`;
    }
    return out;
  }

  return `
<p>Los siguientes formatos en blanco corresponden a los registros
obligatorios descritos en la Sección 9.1. Imprimir según necesidad.
GN-16 §3.3 exige conservarlos al menos hasta que pueda asumirse
razonablemente que el alimento ha sido consumido; como política
interna, Órale los conserva completados durante un mínimo de
3 años.</p>

<h2 id="sec-13-1">13.1 Formatos de Registro (HACCP-01 a HACCP-12)</h2>

<h3 id="haccp-01">HACCP-01 – Control de Temperaturas de Cocción</h3>
<p><strong>Instrucción de uso:</strong> Registrar la temperatura interna
de cada lote cocido. Límite crítico: &ge;75°C.</p>
<div class="tabla-wrapper">
<table class="tabla-ancha">
  <thead>
    <tr>
      <th>Fecha</th>
      <th>Platillo/Lote</th>
      <th>Hora inicio</th>
      <th>Temperatura interna (°C)</th>
      <th>&ge;75°C Sí/No</th>
      <th>Hora fin</th>
      <th>Acción correctiva</th>
      <th>Responsable/Firma</th>
    </tr>
  </thead>
  <tbody>
${filasVacias(20, 8)}  </tbody>
</table>
</div>

<h3 id="haccp-02">HACCP-02 – Control de Enfriamiento Rápido</h3>
<p><strong>Instrucción de uso:</strong> Registrar las temperaturas
durante el proceso de enfriamiento. Límite crítico: de &gt;63°C a
≤5°C en un máximo de 6 horas.</p>
<div class="tabla-wrapper">
<table class="tabla-ancha">
  <thead>
    <tr>
      <th>Fecha</th>
      <th>Producto/Lote</th>
      <th>Hora inicio</th>
      <th>Temperatura 30 min (°C)</th>
      <th>Temperatura 1 h (°C)</th>
      <th>Temperatura 2 h (°C)</th>
      <th>Temperatura final (°C)</th>
      <th>≤5°C en 6h Sí/No</th>
      <th>Acción correctiva</th>
      <th>Responsable</th>
    </tr>
  </thead>
  <tbody>
${filasVacias(10, 10)}  </tbody>
</table>
</div>

<h3 id="haccp-03">HACCP-03 – Control de Temperatura en Servicio</h3>
<p class="nota"><strong>Aplica a la modalidad de venta desde
puesto, en cada jornada autorizada por Limerick City &amp; County
Council.</strong></p>
<p><strong>Instrucción de uso:</strong> Verificar el chafing dish cada
hora durante el servicio. Límite crítico: &ge;63°C en todo momento.</p>
<div class="tabla-wrapper">
<table class="tabla-ancha">
  <thead>
    <tr>
      <th>Fecha</th>
      <th>Producto</th>
      <th>Hora medición</th>
      <th>Temperatura (°C)</th>
      <th>&ge;63°C Sí/No</th>
      <th>Acción correctiva</th>
      <th>Responsable/Firma</th>
    </tr>
  </thead>
  <tbody>
${filasVacias(20, 7)}  </tbody>
</table>
</div>

<h3 id="haccp-04">HACCP-04 — Control de Recepción de Mercancía
y Trazabilidad de Proveedor</h3>
<p class="nota"><em>GN16 §3.3: Instrucción: Completar en cada
entrega. GN-16 §3.3 exige conservar hasta que pueda asumirse
razonablemente que el alimento ha sido consumido. Como política
interna, Órale conserva los registros de alimentos de origen
animal durante un mínimo de 3 años.</em></p>
<div class="tabla-wrapper tabla-ancha">
<table class="tabla-ancha">
  <thead>
    <tr>
      <th>Fecha</th>
      <th>Proveedor (nombre y dirección)</th>
      <th>Producto</th>
      <th>Cantidad / Volumen</th>
      <th>Origen animal Sí/No</th>
      <th>Temperatura recepción (°C)</th>
      <th>Fecha caducidad</th>
      <th>Envase OK Sí/No</th>
      <th>Aspecto OK Sí/No</th>
      <th>¿Aceptado? Sí/No</th>
      <th>Acción si rechazo</th>
      <th>Responsable</th>
    </tr>
  </thead>
  <tbody>
${filasVacias(15, 12)}  </tbody>
</table>
</div>

<h3 id="haccp-05">HACCP-05 – Control de Temperatura del Refrigerador</h3>
<p><strong>Instrucción de uso:</strong> Verificar dos veces al día
(mañana y noche). Límite crítico: ≤5°C.</p>
<div class="tabla-wrapper">
<table class="tabla-ancha">
  <thead>
    <tr>
      <th>Fecha</th>
      <th>Hora mañana</th>
      <th>Temperatura mañana (°C)</th>
      <th>&le;5°C Sí/No</th>
      <th>Hora noche</th>
      <th>Temperatura noche (°C)</th>
      <th>&le;5°C Sí/No</th>
      <th>Acción correctiva</th>
      <th>Responsable</th>
    </tr>
  </thead>
  <tbody>
${filasVacias(31, 9)}  </tbody>
</table>
</div>

<h3 id="haccp-06">HACCP-06 – Registro de Limpieza y Desinfección Diaria</h3>
<p><strong>Instrucción de uso:</strong> Completar al cierre de cada
jornada. Un formulario por día. Archivar en carpeta HACCP.</p>
<div style="display:flex;gap:2rem;margin-bottom:1rem;font-size:0.9rem;">
  <span><strong>Fecha:</strong> _____ / _____ / _______</span>
  <span><strong>Jornada:</strong> &#9744; Cocina &nbsp;&nbsp; &#9744; Punto de venta</span>
</div>
<div class="tabla-wrapper tabla-ancha">
<table>
  <thead>
    <tr>
      <th>Zona / Equipo</th>
      <th>Hora</th>
      <th>Producto usado</th>
      <th>¿Enjuagado? Sí/No</th>
      <th>¿Desinfectado? Sí/No</th>
      <th>Responsable / Firma</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background:#F5F5F5;">
      <td style="font-style:italic;color:#555;">
        Superficies cocina doméstica</td>
      <td></td><td></td><td></td><td></td><td></td>
    </tr>
    <tr style="background:#FFFFFF;">
      <td style="font-style:italic;color:#555;">
        Estufa y extractor</td>
      <td></td><td></td><td></td><td></td><td></td>
    </tr>
    <tr style="background:#F5F5F5;">
      <td style="font-style:italic;color:#555;">
        Tablas de corte</td>
      <td></td><td></td><td></td><td></td><td></td>
    </tr>
    <tr style="background:#FFFFFF;">
      <td style="font-style:italic;color:#555;">
        Chafing dishes</td>
      <td></td><td></td><td></td><td></td><td></td>
    </tr>
    <tr style="background:#F5F5F5;">
      <td style="font-style:italic;color:#555;">
        Mesa punto de venta</td>
      <td></td><td></td><td></td><td></td><td></td>
    </tr>
    <tr style="background:#FFFFFF;">
      <td style="font-style:italic;color:#555;">
        Estación lavado de manos</td>
      <td></td><td></td><td></td><td></td><td></td>
    </tr>
  </tbody>
</table>
</div>

<h3 id="haccp-07">HACCP-07 – Registro de Incidentes y Acciones Correctivas</h3>
<p><strong>Instrucción de uso:</strong> Completar ante cualquier
desviación de un límite crítico o queja de cliente.</p>
<div class="tabla-wrapper">
<table class="tabla-ancha">
  <thead>
    <tr>
      <th>Fecha</th>
      <th>Descripción</th>
      <th>PCC/Etapa</th>
      <th>Producto</th>
      <th>Acción correctiva</th>
      <th>Resultado</th>
      <th>Notificado Director Sí/No</th>
      <th>Notificado HSE Sí/No</th>
      <th>Responsable/Firma</th>
    </tr>
  </thead>
  <tbody>
${filasVacias(10, 9)}  </tbody>
</table>
</div>

<h3 id="haccp-08">HACCP-08 – Registro de Calibración de Termómetros</h3>
<p><strong>Instrucción de uso:</strong> Calibrar mensualmente con agua
helada (0°C) y agua hirviendo (100°C). Tolerancia de aceptación:
±1°C respecto del valor de referencia. Una lectura fuera de esta
tolerancia invalida el termómetro: se retira de uso y se
sustituye antes de la siguiente jornada de producción o
servicio.</p>
<div class="tabla-wrapper">
<table class="tabla-ancha">
  <thead>
    <tr>
      <th>Fecha</th>
      <th>Termómetro ID</th>
      <th>Temperatura agua helada (°C)</th>
      <th>&asymp;0°C Sí/No</th>
      <th>Temperatura agua hirviendo (°C)</th>
      <th>&asymp;100°C Sí/No</th>
      <th>Calibración correcta Sí/No</th>
      <th>Acción si falla</th>
      <th>Responsable/Firma</th>
    </tr>
  </thead>
  <tbody>
${filasVacias(12, 9)}  </tbody>
</table>
</div>

<h3 id="haccp-09">HACCP-09 – Registro de Formación del Personal</h3>
<p><strong>Instrucción de uso:</strong> Completar al dar de alta a
cada empleado y en cada revisión anual.</p>
<div class="tabla-wrapper">
<table class="tabla-ancha">
  <thead>
    <tr>
      <th>Nombre completo</th>
      <th>Rol</th>
      <th>Curso/Certificación</th>
      <th>Nivel 1/2/3</th>
      <th>Entidad formadora</th>
      <th>Fecha obtención</th>
      <th>Fecha renovación</th>
      <th>Número de certificado</th>
      <th>Firma empleado</th>
    </tr>
  </thead>
  <tbody>
${filasVacias(10, 9)}  </tbody>
</table>
</div>

<h2 id="haccp-10">HACCP-10 — Control de Temperatura
del Congelador</h2>
<p class="nota"><em>Límite crítico: ≤-18°C en todo
momento. Verificar dos veces al día.
Una vez descongelado, no recongelar.</em></p>
<div class="tabla-wrapper">
<table class="tabla-ancha">
  <thead>
    <tr>
      <th>Fecha</th>
      <th>Hora mañana</th>
      <th>Temp. mañana (°C)</th>
      <th>¿≤-18°C? Sí/No</th>
      <th>Hora noche</th>
      <th>Temp. noche (°C)</th>
      <th>¿≤-18°C? Sí/No</th>
      <th>Contenido (platillo/lote)</th>
      <th>Acción correctiva</th>
      <th>Responsable</th>
    </tr>
  </thead>
  <tbody>
${filasVacias(31, 10)}  </tbody>
</table>
</div>

<h2 id="haccp-11">HACCP-11 — Registro de Descongelación
y Entregas</h2>
<p class="nota"><em>Completar para cada pedido.
Descongelar siempre en refrigerador.
Nunca a temperatura ambiente. Nunca recongelar.</em></p>
<div class="tabla-wrapper">
<table class="tabla-ancha">
  <thead>
    <tr>
      <th>Fecha pedido</th>
      <th>Referencia de pedido</th>
      <th>Platillo</th>
      <th>Fecha producción / congelación</th>
      <th>Cantidad (porciones)</th>
      <th>Inicio descongelación</th>
      <th>Temp. refrigerador (°C)</th>
      <th>¿Caliente o congelado?</th>
      <th>Temp. regeneración (°C)</th>
      <th>¿≥70°C? Sí/No</th>
      <th>Hora de entrega</th>
      <th>Responsable</th>
    </tr>
  </thead>
  <tbody>
${filasVacias(20, 12)}  </tbody>
</table>
</div>

<h2 id="haccp-12">HACCP-12 — Verificación de Preparación en Frío
(PCC1b)</h2>
<p class="nota"><em>Completar antes de cada preparación de
ingredientes sin tratamiento térmico posterior y en cada
apertura de jornada de servicio. Todos los puntos deben
cumplirse. Si alguno no se cumple, aplicar la acción correctiva
de PCC1b y registrar la desviación en HACCP-07.</em></p>
<div class="tabla-wrapper tabla-ancha">
<table class="tabla-ancha">
  <thead>
    <tr>
      <th>Fecha</th>
      <th>Hora</th>
      <th>Preparación / platillo</th>
      <th>Manos lavadas Sí/No</th>
      <th>Vegetales lavados Sí/No</th>
      <th>Superficie limpia y desinfectada Sí/No</th>
      <th>Tabla verde exclusiva Sí/No</th>
      <th>Utensilios exclusivos Sí/No</th>
      <th>Sin crudo de origen animal en la superficie Sí/No</th>
      <th>Temp. de conservación (°C)</th>
      <th>¿≤5°C? Sí/No</th>
      <th>Manipulación con utensilio o guante Sí/No</th>
      <th>Responsable</th>
    </tr>
  </thead>
  <tbody>
${filasVacias(20, 13)}  </tbody>
</table>
</div>
`;
})();

const ANEXO = `
<h2>Cocina Doméstica — verificar antes de cada sesión de preparación</h2>
<ul class="checklist">
  <li><label class="checklist-item">
    <input type="checkbox" class="checklist-check">
    <span>Termómetro de sonda digital (x2 operativos y calibrados)</span>
  </label></li>
  <li><label class="checklist-item">
    <input type="checkbox" class="checklist-check">
    <span>Termómetro de nevera en refrigerador (lectura actual ≤5°C)</span>
  </label></li>
  <li><label class="checklist-item">
    <input type="checkbox" class="checklist-check">
    <span>Termómetro de nevera en congelador (lectura actual ≤-18°C)</span>
  </label></li>
  <li><label class="checklist-item">
    <input type="checkbox" class="checklist-check">
    <span>Alcohol en spray para desinfectar sonda entre mediciones</span>
  </label></li>
  <li><label class="checklist-item">
    <input type="checkbox" class="checklist-check">
    <span>Tablas de corte por código de color
  (roja: carne cruda, verde: vegetales, amarilla: aves)</span>
  </label></li>
  <li><label class="checklist-item">
    <input type="checkbox" class="checklist-check">
    <span>Cuchillos separados por uso — afilados, con protectores
  individuales</span>
  </label></li>
  <li><label class="checklist-item">
    <input type="checkbox" class="checklist-check">
    <span>Recipientes herméticos etiquetados con producto y fecha</span>
  </label></li>
  <li><label class="checklist-item">
    <input type="checkbox" class="checklist-check">
    <span>Jabón líquido NO perfumado y papel desechable en tarja</span>
  </label></li>
  <li><label class="checklist-item">
    <input type="checkbox" class="checklist-check">
    <span>Delantales limpios (mínimo 2)</span>
  </label></li>
  <li><label class="checklist-item">
    <input type="checkbox" class="checklist-check">
    <span>Gorras o mallas para el cabello</span>
  </label></li>
  <li><label class="checklist-item">
    <input type="checkbox" class="checklist-check">
    <span>Guantes desechables LIBRES DE LÁTEX, aptos para uso
  alimentario</span>
  </label></li>
  <li><label class="checklist-item">
    <input type="checkbox" class="checklist-check">
    <span>Vendajes impermeables de COLOR AZUL para heridas o cortes (GN16)</span>
  </label></li>
  <li><label class="checklist-item">
    <input type="checkbox" class="checklist-check">
    <span>Desinfectante aprobado para uso alimentario</span>
  </label></li>
  <li><label class="checklist-item">
    <input type="checkbox" class="checklist-check">
    <span>Toallas desechables (no trapos reutilizables)</span>
  </label></li>
  <li><label class="checklist-item">
    <input type="checkbox" class="checklist-check">
    <span>Carpeta HACCP con formatos HACCP-01 a HACCP-12 impresos</span>
  </label></li>
  <li><label class="checklist-item">
    <input type="checkbox" class="checklist-check">
    <span>Etiquetas para fechado de porciones (platillo, fecha producción,
  fecha congelación, fecha máxima de consumo)</span>
  </label></li>
  <li><label class="checklist-item">
    <input type="checkbox" class="checklist-check">
    <span>Alimentos almacenados fuera del suelo (GN-16 §4.3.10,
  requisito legal) — altura mínima recomendada 450mm</span>
  </label></li>
  <li><label class="checklist-item">
    <input type="checkbox" class="checklist-check">
    <span>Cajones congelador etiquetados: "ÓRALE" (1-3) y "PARTICULAR" (4)</span>
  </label></li>
  <li><label class="checklist-item">
    <input type="checkbox" class="checklist-check">
    <span>Niveles refrigerador etiquetados: "ÓRALE" (1-2) y "PARTICULAR" (3)</span>
  </label></li>
</ul>

<h2>Punto de Venta — verificar antes de cada salida</h2>
<p class="nota"><strong>Aplica a la modalidad de venta desde
puesto, en cada jornada autorizada por Limerick City &amp; County
Council.</strong></p>
<ul class="checklist">
  <li><label class="checklist-item">
    <input type="checkbox" class="checklist-check">
    <span>Garrafón portátil con grifo — 20 litros (capacidad
  mínima recomendada por GN-16 §4.3.5) — etiquetado
  "POTABLE WATER ONLY"</span>
  </label></li>
  <li><label class="checklist-item">
    <input type="checkbox" class="checklist-check">
    <span>Recipiente de boca ancha para agua residual — etiquetado
  "WASTE WATER"</span>
  </label></li>
  <li><label class="checklist-item">
    <input type="checkbox" class="checklist-check">
    <span>Jabón líquido NO perfumado y papel desechable</span>
  </label></li>
  <li><label class="checklist-item">
    <input type="checkbox" class="checklist-check">
    <span>Gel desinfectante (complementario — NO sustituto del
  lavado de manos)</span>
  </label></li>
  <li><label class="checklist-item">
    <input type="checkbox" class="checklist-check">
    <span>Chafing dishes con tapa hermética (mínimo 2, precalentados)</span>
  </label></li>
  <li><label class="checklist-item">
    <input type="checkbox" class="checklist-check">
    <span>Sneeze screen o tapas para proteger el alimento expuesto
  (GN16 §4.3.10)</span>
  </label></li>
  <li><label class="checklist-item">
    <input type="checkbox" class="checklist-check">
    <span>Bolsas o maletines isotérmicos</span>
  </label></li>
  <li><label class="checklist-item">
    <input type="checkbox" class="checklist-check">
    <span>Mesa de trabajo con superficie lavable (mínimo 450mm
  sobre el suelo)</span>
  </label></li>
  <li><label class="checklist-item">
    <input type="checkbox" class="checklist-check">
    <span>Cubeta de basura con TAPA HERMÉTICA (GN16 §4.3.8)</span>
  </label></li>
  <li><label class="checklist-item">
    <input type="checkbox" class="checklist-check">
    <span>Señalización de alérgenos visible para el cliente</span>
  </label></li>
  <li><label class="checklist-item">
    <input type="checkbox" class="checklist-check">
    <span>Termómetro de sonda (unidad punto de venta)</span>
  </label></li>
  <li><label class="checklist-item">
    <input type="checkbox" class="checklist-check">
    <span>Copia impresa de autorización LCCC vigente</span>
  </label></li>
  <li><label class="checklist-item">
    <input type="checkbox" class="checklist-check">
    <span>Copia impresa del Plan HACCP vigente</span>
  </label></li>
  <li><label class="checklist-item">
    <input type="checkbox" class="checklist-check">
    <span>Formatos HACCP-03 y HACCP-06 impresos para la jornada</span>
  </label></li>
  <li><label class="checklist-item">
    <input type="checkbox" class="checklist-check">
    <span>Bolígrafos para registros</span>
  </label></li>
  <li><label class="checklist-item">
    <input type="checkbox" class="checklist-check">
    <span>Alimentos y equipamiento nunca en contacto con el suelo</span>
  </label></li>
  <li><label class="checklist-item">
    <input type="checkbox" class="checklist-check">
    <span>Bufetera fría con hielo de agua potable suficiente para
  toda la jornada, más reserva para reposición</span>
  </label></li>
  <li><label class="checklist-item">
    <input type="checkbox" class="checklist-check">
    <span>Termómetro de sonda para verificar guarniciones y
  salsas frías</span>
  </label></li>
</ul>

<h2>Entrega a Domicilio (WhatsApp) — verificar antes de cada entrega</h2>
<ul class="checklist">
  <li><label class="checklist-item">
    <input type="checkbox" class="checklist-check">
    <span>Bolsa isotérmica para transporte</span>
  </label></li>
  <li><label class="checklist-item">
    <input type="checkbox" class="checklist-check">
    <span>Termómetro de sonda para verificar regeneración ≥70°C</span>
  </label></li>
  <li><label class="checklist-item">
    <input type="checkbox" class="checklist-check">
    <span>Etiquetas de producto con fecha de producción, fecha de
  congelación e instrucciones de conservación y recalentamiento</span>
  </label></li>
  <li><label class="checklist-item">
    <input type="checkbox" class="checklist-check">
    <span>Formato HACCP-11 disponible para registro de cada entrega</span>
  </label></li>
</ul>

<p class="nota"><em>Este checklist está basado en los requisitos del FSAI
Guidance Note No. 16 Food Stalls (Revision 2), aplicable a operaciones de
alto riesgo (high-risk activities). Recomendado por HSE Environmental
Health, Limerick.</em></p>
`;

const SECCION_14 = `
<div class="tabla-wrapper">
<table>
  <tbody>
    <tr>
      <td><strong>Documento</strong></td>
      <td>Plan HACCP – Órale Authentic Mexican Flavor</td>
    </tr>
    <tr class="alt">
      <td><strong>Empresa</strong></td>
      <td>{{empresa}} (CRO: {{cro}})</td>
    </tr>
    <tr>
      <td><strong>Cocina de preparación</strong></td>
      <td>Apt 301, Richmond Court, Mount Kennett Place, Dock Road,
      Limerick V94 PY76</td>
    </tr>
    <tr class="alt">
      <td><strong>Versión</strong></td>
      <td>{{version}}</td>
    </tr>
    <tr>
      <td><strong>Fecha de emisión</strong></td>
      <td>{{fechaEmision}}</td>
    </tr>
    <tr class="alt">
      <td><strong>Elaborado por</strong></td>
      <td>{{responsables.director}} – Founder &amp; Director</td>
    </tr>
    <tr>
      <td><strong>Próxima revisión</strong></td>
      <td>{{proximaRevision}}</td>
    </tr>
    <tr class="alt">
      <td><strong>Aprobado por</strong></td>
      <td>{{responsables.director}}</td>
    </tr>
    <tr>
      <td><strong>Firma</strong></td>
      <td>___________________________</td>
    </tr>
    <tr class="alt">
      <td><strong>Fecha de firma</strong></td>
      <td>_____ / _____ / 2026</td>
    </tr>
  </tbody>
</table>
</div>

<p class="nota">Este plan HACCP ha sido elaborado de buena fe y en
cumplimiento de la legislación irlandesa y europea aplicable.</p>

<h2>Notificación y registro (GN-16 §2.2 y §2.3)</h2>
<p>GN-16 §2.2 establece que el operador debe notificar al HSE cada
unidad de su negocio alimentario antes de comenzar a operarla.
GN-16 §2.3 establece que el establecimiento donde se produce el
alimento debe ser notificado y queda sujeto a inspección, incluso
tratándose de una vivienda particular.</p>
<p>La cocina de producción y el puesto de venta constituyen
unidades distintas a efectos de notificación. La aprobación de
una no sustituye al registro de la otra.</p>
<p><strong>Regla operativa de Órale:</strong></p>
<ul>
  <li>No se inicia actividad en ningún punto de venta que no haya
  sido previamente notificado y registrado ante el HSE.</li>
  <li>No se produce alimento en ningún establecimiento que no haya
  sido notificado al HSE y esté sujeto a inspección.</li>
  <li>Cualquier cambio en la cocina de producción, en las
  ubicaciones de venta o en las actividades desarrolladas se
  notifica al HSE por escrito antes de aplicarse.</li>
  <li>Se conserva copia de la confirmación de registro y se
  mantiene disponible durante la operación (GN-16 §2.2).</li>
  <li>La venta desde puesto requiere que dicha unidad esté
  notificada y registrada ante el HSE, de forma independiente al
  registro del establecimiento de producción. La autorización de
  Limerick City & County Council habilita la ubicación, no
  sustituye el registro sanitario del puesto.</li>
</ul>
`;

const FORMATOS_RESUMEN = `
<p>Todos los formatos de registro deben imprimirse
y mantenerse en la carpeta física HACCP disponible
durante la operación diaria.</p>
<div class="tabla-wrapper">
<table class="tabla-ancha">
  <thead>
    <tr>
      <th>Código</th>
      <th>Nombre del formato</th>
      <th>PCC asociado</th>
      <th>Frecuencia</th>
      <th>Aplica a</th>
      <th>Descargar</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>HACCP-01</td>
      <td>Control de temperaturas de cocción</td>
      <td>PCC1</td>
      <td>Cada lote cocido</td>
      <td>Cocina doméstica</td>
      <td><a href="{{formatosUrl.es}}/HACCP-01_ES.docx">Descargar DOCX</a></td>
    </tr>
    <tr class="alt">
      <td>HACCP-02</td>
      <td>Control de enfriamiento rápido</td>
      <td>PCC2</td>
      <td>Cada enfriamiento</td>
      <td>Cocina doméstica</td>
      <td><a href="{{formatosUrl.es}}/HACCP-02_ES.docx">Descargar DOCX</a></td>
    </tr>
    <tr>
      <td>HACCP-03</td>
      <td>Control de temperatura en servicio</td>
      <td>PCC3</td>
      <td>Cada hora en servicio</td>
      <td>Punto de venta</td>
      <td><a href="{{formatosUrl.es}}/HACCP-03_ES.docx">Descargar DOCX</a></td>
    </tr>
    <tr class="alt">
      <td>HACCP-04</td>
      <td>Control de recepción y trazabilidad</td>
      <td>—</td>
      <td>Cada entrega de proveedor</td>
      <td>Cocina doméstica</td>
      <td><a href="{{formatosUrl.es}}/HACCP-04_ES.docx">Descargar DOCX</a></td>
    </tr>
    <tr>
      <td>HACCP-05</td>
      <td>Control temperatura del refrigerador</td>
      <td>PCC7</td>
      <td>2 veces al día</td>
      <td>Cocina doméstica</td>
      <td><a href="{{formatosUrl.es}}/HACCP-05_ES.docx">Descargar DOCX</a></td>
    </tr>
    <tr class="alt">
      <td>HACCP-06</td>
      <td>Registro de limpieza y desinfección</td>
      <td>—</td>
      <td>Al cierre de cada jornada</td>
      <td>Cocina y punto de venta</td>
      <td><a href="{{formatosUrl.es}}/HACCP-06_ES.docx">Descargar DOCX</a></td>
    </tr>
    <tr>
      <td>HACCP-07</td>
      <td>Registro de incidentes y acciones correctivas</td>
      <td>Todos</td>
      <td>Ante cada incidente</td>
      <td>Todas las modalidades</td>
      <td><a href="{{formatosUrl.es}}/HACCP-07_ES.docx">Descargar DOCX</a></td>
    </tr>
    <tr class="alt">
      <td>HACCP-08</td>
      <td>Registro de calibración de termómetros</td>
      <td>—</td>
      <td>Mensual</td>
      <td>Todas las modalidades</td>
      <td><a href="{{formatosUrl.es}}/HACCP-08_ES.docx">Descargar DOCX</a></td>
    </tr>
    <tr>
      <td>HACCP-09</td>
      <td>Registro de formación del personal</td>
      <td>—</td>
      <td>Alta de empleado + anual</td>
      <td>Todas las modalidades</td>
      <td><a href="{{formatosUrl.es}}/HACCP-09_ES.docx">Descargar DOCX</a></td>
    </tr>
    <tr class="alt">
      <td>HACCP-10</td>
      <td>Control temperatura del congelador</td>
      <td>PCC4</td>
      <td>2 veces al día</td>
      <td>Cocina doméstica</td>
      <td><a href="{{formatosUrl.es}}/HACCP-10_ES.docx">Descargar DOCX</a></td>
    </tr>
    <tr>
      <td>HACCP-11</td>
      <td>Registro de descongelación y entregas</td>
      <td>PCC5 / PCC6</td>
      <td>Cada pedido WhatsApp</td>
      <td>Entrega a domicilio</td>
      <td><a href="{{formatosUrl.es}}/HACCP-11_ES.docx">Descargar DOCX</a></td>
    </tr>
    <tr class="alt">
      <td>HACCP-12</td>
      <td>Verificación de preparación en frío</td>
      <td>PCC1b</td>
      <td>Antes de cada preparación y en cada apertura de
      servicio</td>
      <td>Cocina y punto de venta</td>
      <td><a href="{{formatosUrl.es}}/HACCP-12_ES.docx">Descargar DOCX</a></td>
    </tr>
  </tbody>
</table>
</div>
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
  'seccion-12': SECCION_12,
  'seccion-13': SECCION_13,
  'seccion-14': SECCION_14,
  'formatos-resumen': FORMATOS_RESUMEN,
  'anexo': ANEXO
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

const BTN_IDIOMA = '<a href="{{urlEN}}" id="btn-idioma" class="btn-idioma">🌐 English</a>';

function generar() {
  console.log(`Generando HACCP Plan ES v${config.version}...`);

  let html = fs.readFileSync(BASE_HTML_PATH, 'utf8');

  Object.keys(SECCIONES).forEach((sectionId) => {
    html = injectSection(html, sectionId, SECCIONES[sectionId]);
  });

  html = html.replace('<!-- BTN_IDIOMA -->', BTN_IDIOMA);

  const data = Object.assign({}, config, {
    lang: LANG,
    urlEN: config.urls.en,
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

  fs.mkdirSync(path.dirname(PAGINATION_DEST_PATH), { recursive: true });
  fs.copyFileSync(PAGINATION_SRC_PATH, PAGINATION_DEST_PATH);

  console.log(`OK: HTML generado en ${OUTPUT_PATH}`);
}

generar();
