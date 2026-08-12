// Órale – Authentic Mexican Flavor Limited
// HACCP Plan Generator – English Version
// Version: 1.3
// Author: David Enrique Ochoa Diaz
// NOTE: This file consumes data from config.js
// Do not hardcode sensitive data in this script

const fs = require('fs');
const path = require('path');
const config = require('../../config');
const i18n = require('../shared/i18n');

const LANG = 'en';

const BASE_HTML_PATH = path.join(__dirname, '..', 'shared', 'base.html');
const STYLES_SRC_PATH = path.join(__dirname, '..', 'shared', 'styles.css');
const STYLES_DEST_PATH = path.join(__dirname, '..', '..', 'outputs', 'shared', 'styles.css');
const OUTPUT_PATH = path.join(__dirname, '..', '..', 'outputs', 'en', 'HACCP_Orale_v1.3_EN.html');

// ---------------------------------------------------------------------------
// Content for Sections 1–6 (HTML injected into each div.seccion-contenido)
// ---------------------------------------------------------------------------

const SECCION_1 = `
<h2 id="sec-1-1">1.1 Purpose</h2>
<p>This HACCP Plan has been developed in accordance with the requirements
of the Food Safety Authority of Ireland (FSAI), Regulation (EC)
No. 852/2004 on the hygiene of foodstuffs, and the HACCP guidelines
of the Codex Alimentarius.</p>
<p>This document sets out the food safety procedures for {{empresa}},
ensuring that all food served is safe for consumption, by identifying
and controlling the relevant hazards at each stage of the process.</p>

<h2 id="sec-1-2">1.2 Scope</h2>
<p>This plan covers Órale's mode of operation:</p>
<ul>
  <li><strong>Preparation kitchen:</strong> Domestic apartment in
  Limerick. Standard kitchen with hob, extractor fan, oven, refrigerator
  and hot water. Subject to inspection and approval by HSE
  Environmental Health (Premises Ref: {{hse.premisesRef}}).</li>
  <li><strong>Transport:</strong> Covered chafing dishes and
  insulated containers. Maximum time 1 hour.</li>
  <li><strong>Street trading:</strong> Locations authorised by
  Limerick City & County Council.</li>
</ul>
<p><strong>Production scale (Phase 1):</strong> Domestic-scale volume.
Representative example: 20 servings of 650 ml pozole per day.</p>
<p><strong>Applicable menu:</strong></p>
<ul>
  <li>Pozole rojo estilo Jalisco (V)</li>
  <li>Tacos al pastor (3 pcs)</li>
  <li>Tacos de carnitas (3 pcs)</li>
  <li>Tacos de cochinita pibil (3 pcs)</li>
  <li>Nachos with guacamole (V)</li>
  <li>Chilaquiles (V)</li>
  <li>Taco de nopales (V)</li>
  <li>Rotating dishes: tamales, barbacoa, esquites, quesadillas</li>
</ul>

<h2 id="sec-1-3">1.3 Applicable Regulatory Framework</h2>
<table>
  <thead>
    <tr>
      <th>Regulation / Authority</th>
      <th>Requirement</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>FSAI (Food Safety Authority of Ireland)</td>
      <td>Mandatory registration as a food business; documented HACCP plan</td>
    </tr>
    <tr class="alt">
      <td>HSE Environmental Health</td>
      <td>Inspection and approval of the preparation kitchen
      (Premises Ref: {{hse.premisesRef}}); HACCP records</td>
    </tr>
    <tr>
      <td>Reg. (EC) 852/2004</td>
      <td>Hygiene of foodstuffs – European legal basis</td>
    </tr>
    <tr class="alt">
      <td>Codex Alimentarius</td>
      <td>Seven HACCP principles applied in this document</td>
    </tr>
    <tr>
      <td>Limerick City & County Council</td>
      <td>Casual Trading Licence and authorised locations</td>
    </tr>
    <tr class="alt">
      <td>Food Safety Training (Level 1/2)</td>
      <td>Mandatory training for all staff</td>
    </tr>
  </tbody>
</table>
`;

const SECCION_2 = `
<table>
  <thead>
    <tr>
      <th>Role</th>
      <th>Responsible Person</th>
      <th>HACCP Responsibilities</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Director / HACCP Manager</td>
      <td>{{responsables.director}}</td>
      <td>
        <ul>
          <li>Main person responsible for the plan</li>
          <li>Review and update of the document</li>
          <li>Internal audits</li>
          <li>Contact with HSE and FSAI</li>
          <li>Coordination of domestic kitchen inspection</li>
        </ul>
      </td>
    </tr>
    <tr class="alt">
      <td>Operations & Compliance Manager</td>
      <td>{{responsables.operaciones}}</td>
      <td>
        <ul>
          <li>Daily supervision of the point of sale</li>
          <li>Implementation and maintenance of the HACCP plan</li>
          <li>Temperature records and receiving control</li>
          <li>Allergen control and cleaning</li>
          <li>Management of routes, licences and HSE/FSAI compliance</li>
          <li>First responder to food safety incidents</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Chef / Kitchen Lead</td>
      <td>{{responsables.chef}}</td>
      <td>
        <ul>
          <li>Food preparation in the domestic kitchen</li>
          <li>Control of cooking temperatures</li>
          <li>Separation of raw and cooked foods</li>
          <li>Kitchen hygiene and cleaning</li>
          <li>Daily production records</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>
<p class="nota"><em>Training requirement: All staff who handle food
must hold at least Food Safety Level 1. The Operations & Compliance
Manager must hold Food Safety Level 2 and HACCP certification
before taking up the role.</em></p>
`;

const SECCION_3 = `
<h2 id="sec-3-1">3.1 General Description</h2>
<p>Órale prepares and serves traditional Mexican food, cooked by hand
in a domestic kitchen in Limerick. Food is prepared on the same day
it is sold, in domestic-scale batches, and transported to the point
of sale in chafing dishes and insulated containers. It is served
directly to the end consumer. No wholesale distribution or sale of
unlabelled packaged products takes place.</p>

<h2 id="sec-3-2">3.2 Product and Associated Hazards Table</h2>
<table>
  <thead>
    <tr>
      <th>Product</th>
      <th>Protein type</th>
      <th>Service temperature</th>
      <th>Main allergens / hazards</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Pozole Rojo (V)</td>
      <td>Meat-free (corn, chilli)</td>
      <td>Hot &gt;63°C</td>
      <td>Check sauces for gluten</td>
    </tr>
    <tr class="alt">
      <td>Tacos al Pastor</td>
      <td>Marinated pork</td>
      <td>Hot &gt;63°C</td>
      <td>
        <ul>
          <li>Gluten (tortilla)</li>
          <li>Sulphites (chilli)</li>
          <li>Traces of dairy</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Tacos de Carnitas</td>
      <td>Pork</td>
      <td>Hot &gt;63°C</td>
      <td>
        <ul>
          <li>Gluten (tortilla)</li>
          <li>Animal fat</li>
        </ul>
      </td>
    </tr>
    <tr class="alt">
      <td>Tacos Cochinita Pibil</td>
      <td>Marinated pork</td>
      <td>Hot &gt;63°C</td>
      <td>
        <ul>
          <li>Gluten (tortilla)</li>
          <li>Achiote/annatto</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Nachos con Guacamole (V)</td>
      <td>Meat-free</td>
      <td>Room temperature</td>
      <td>
        <ul>
          <li>Gluten (nachos)</li>
          <li>Dairy (cheese)</li>
          <li>Sulphites</li>
        </ul>
      </td>
    </tr>
    <tr class="alt">
      <td>Chilaquiles (V)</td>
      <td>Meat-free (egg optional)</td>
      <td>Hot &gt;63°C</td>
      <td>
        <ul>
          <li>Gluten (fried tortilla)</li>
          <li>Egg</li>
          <li>Dairy (cream/cheese)</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Taco de Nopales (V)</td>
      <td>Vegetable</td>
      <td>Hot &gt;63°C</td>
      <td>Gluten (tortilla). Low allergen risk.</td>
    </tr>
  </tbody>
</table>
`;

const SECCION_4 = `
<h2 id="sec-4-1">4.1 Street Sale with Domestic Kitchen</h2>
<p>Complete flow from the domestic kitchen to the point of sale:</p>
<table>
  <thead>
    <tr>
      <th>#</th>
      <th>Stage</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Purchase of raw materials</td>
      <td>
        <ul>
          <li>Approved suppliers (Musgrave MarketPlace and others)</li>
          <li>Quality and expiry date verification</li>
          <li>Temperature control at point of purchase</li>
        </ul>
      </td>
    </tr>
    <tr class="alt">
      <td>2</td>
      <td>Receipt and storage in the domestic kitchen</td>
      <td>
        <ul>
          <li>Raw meats on the bottom shelf of the refrigerator</li>
          <li>Cooked/ready-to-eat food on the top shelf</li>
          <li>Dry goods in a closed cupboard</li>
          <li>FIFO system</li>
          <li>Batch record in HACCP-04</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>3</td>
      <td>Pre-preparation (mise en place)</td>
      <td>
        <ul>
          <li>Colour-coded chopping boards</li>
          <li>Red: raw meat</li>
          <li>Green: vegetables</li>
          <li>Yellow: poultry</li>
          <li>Handwashing with hot water and soap before and
          after each task</li>
        </ul>
      </td>
    </tr>
    <tr class="alt">
      <td>4</td>
      <td>Cooking in the domestic kitchen</td>
      <td>
        <ul>
          <li>Domestic hob with extractor fan</li>
          <li>Minimum internal temperature 75°C for meats</li>
          <li>Broths and pozole: bring to the boil and maintain &gt;85°C</li>
          <li>Verification with a calibrated probe thermometer</li>
          <li>Record in HACCP-01</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>5</td>
      <td>Rapid cooling (if applicable)</td>
      <td>
        <ul>
          <li>From &gt;63°C to &lt;5°C within max. 4 hours</li>
          <li>Ice bath in the domestic sink</li>
          <li>Small portions to speed up cooling</li>
          <li>Record in HACCP-02</li>
        </ul>
      </td>
    </tr>
    <tr class="alt">
      <td>6</td>
      <td>Loading into chafing dishes and containers</td>
      <td>
        <ul>
          <li>Pre-heated covered chafing dishes for
          hot food</li>
          <li>Refrigerated airtight containers for
          cold food</li>
          <li>Labelling: product, preparation date and time</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>7</td>
      <td>Transport to the point of sale</td>
      <td>
        <ul>
          <li>Insulated bags or carry cases</li>
          <li>Maximum time: 1 hour</li>
          <li>Temperature check on arrival (&gt;63°C)</li>
        </ul>
      </td>
    </tr>
    <tr class="alt">
      <td>8</td>
      <td>Setting up the point of sale</td>
      <td>
        <ul>
          <li>Clean and sanitised work table</li>
          <li>Portable handwashing station</li>
          <li>Potable water, liquid soap and disposable paper towels</li>
          <li>Hand sanitiser visible and accessible</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>9</td>
      <td>Hot-holding during service</td>
      <td>
        <ul>
          <li>Chafing dishes maintain temperature &gt;63°C</li>
          <li>Checked every 2 hours with a probe thermometer</li>
          <li>Record in HACCP-03</li>
          <li>Discard if it drops below 63°C with no possibility of reheating</li>
        </ul>
      </td>
    </tr>
    <tr class="alt">
      <td>10</td>
      <td>Assembly and service to the customer</td>
      <td>
        <ul>
          <li>Portions to standard weight</li>
          <li>Single handler</li>
          <li>Active allergen communication to the customer</li>
          <li>Maximum exposure time: 2 hours</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>11</td>
      <td>Closing and cleaning of the point of sale</td>
      <td>
        <ul>
          <li>Disposal of leftovers — do not reuse</li>
          <li>Cleaning of chafing dishes, utensils and table</li>
          <li>Closing record in HACCP-06</li>
        </ul>
      </td>
    </tr>
    <tr class="alt">
      <td>12</td>
      <td>Cleaning of the domestic kitchen</td>
      <td>
        <ul>
          <li>Cleaning of surfaces, hob and utensils</li>
          <li>Disinfection with products approved for food use</li>
          <li>Record in HACCP-06</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>
`;

const SECCION_5 = `
<h2 id="sec-5-1">5.1 Risk Legend</h2>
<table>
  <thead>
    <tr>
      <th>Score</th>
      <th>Likelihood</th>
      <th>Severity</th>
      <th>Classification</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1–2</td>
      <td>Low</td>
      <td>Low</td>
      <td>CP (Control Point)</td>
    </tr>
    <tr class="alt">
      <td>3–4</td>
      <td>Medium</td>
      <td>Medium</td>
      <td>CP or CCP depending on context</td>
    </tr>
    <tr class="celda-riesgo-alto">
      <td>6–9</td>
      <td>High</td>
      <td>High</td>
      <td>CCP (Critical Control Point)</td>
    </tr>
  </tbody>
</table>

<h2 id="sec-5-2">5.2 Hazard Analysis Table</h2>
<table>
  <thead>
    <tr>
      <th>Stage</th>
      <th>Biological hazard</th>
      <th>Chemical hazard</th>
      <th>Physical hazard</th>
      <th>Prob.</th>
      <th>Sev.</th>
      <th>Risk</th>
      <th>Control measure</th>
      <th>CCP?</th>
    </tr>
  </thead>
  <tbody>
    <tr class="celda-riesgo-alto">
      <td>Raw material receipt</td>
      <td>Salmonella, E. coli, Listeria in raw meats</td>
      <td>Pesticide residues</td>
      <td>Foreign bodies</td>
      <td>3</td><td>3</td><td>9</td>
      <td>
        <ul>
          <li>Verify temperature &lt;5°C</li>
          <li>Approved supplier</li>
          <li>Visual inspection</li>
        </ul>
      </td>
      <td>YES</td>
    </tr>
    <tr class="celda-riesgo-medio">
      <td>Refrigerated storage</td>
      <td>Bacterial growth due to incorrect temperature</td>
      <td>Cross-contamination with cleaning products</td>
      <td>Physical contamination</td>
      <td>2</td><td>3</td><td>6</td>
      <td>
        <ul>
          <li>Refrigerator &lt;5°C</li>
          <li>Raw below / cooked above</li>
          <li>FIFO</li>
        </ul>
      </td>
      <td>YES</td>
    </tr>
    <tr class="celda-riesgo-alto">
      <td>Preparation / mise en place</td>
      <td>Cross-contamination raw meat / ready-to-eat food</td>
      <td>Detergent residue on surfaces</td>
      <td>Utensil fragments</td>
      <td>3</td><td>3</td><td>9</td>
      <td>
        <ul>
          <li>Colour-coded boards</li>
          <li>Handwashing with hot water and soap</li>
          <li>Surface hygiene</li>
        </ul>
      </td>
      <td>YES</td>
    </tr>
    <tr class="celda-riesgo-alto">
      <td>Cooking</td>
      <td>Survival of pathogens (Salmonella, E. coli, Listeria)</td>
      <td>None significant</td>
      <td>None</td>
      <td>2</td><td>3</td><td>6</td>
      <td>
        <ul>
          <li>Internal temperature &gt;75°C</li>
          <li>Calibrated probe thermometer</li>
        </ul>
      </td>
      <td>YES (CCP1)</td>
    </tr>
    <tr class="celda-riesgo-alto">
      <td>Rapid cooling</td>
      <td>Growth in the danger zone (5–63°C)</td>
      <td>None</td>
      <td>None</td>
      <td>3</td><td>3</td><td>9</td>
      <td>
        <ul>
          <li>From &gt;63°C to &lt;5°C within max. 4 h</li>
          <li>Ice bath in the sink</li>
        </ul>
      </td>
      <td>YES (CCP2)</td>
    </tr>
    <tr class="celda-riesgo-medio">
      <td>Transport</td>
      <td>Break in the cold/hot chain</td>
      <td>None</td>
      <td>None</td>
      <td>2</td><td>3</td><td>6</td>
      <td>
        <ul>
          <li>Covered chafing dishes</li>
          <li>Time &lt;1 h</li>
          <li>Temperature check on arrival</li>
        </ul>
      </td>
      <td>YES</td>
    </tr>
    <tr class="celda-riesgo-alto">
      <td>Hot-holding during service</td>
      <td>Bacterial growth if temperature drops below 63°C</td>
      <td>None</td>
      <td>None</td>
      <td>2</td><td>3</td><td>6</td>
      <td>
        <ul>
          <li>&gt;63°C at all times</li>
          <li>Checked every 2 h</li>
          <li>Discard if it drops below the limit</li>
        </ul>
      </td>
      <td>YES (CCP3)</td>
    </tr>
    <tr class="celda-riesgo-medio">
      <td>Customer service</td>
      <td>Contamination by handler</td>
      <td>Undeclared allergens</td>
      <td>None</td>
      <td>2</td><td>3</td><td>6</td>
      <td>
        <ul>
          <li>Personal hygiene</li>
          <li>Handwashing</li>
          <li>Active allergen communication</li>
        </ul>
      </td>
      <td>YES</td>
    </tr>
  </tbody>
</table>
`;

const SECCION_6 = `
<h2 id="pcc1">CCP 1 – Cooking</h2>
<p><em>Domestic kitchen, hob with extractor fan</em></p>
<table>
  <tbody>
    <tr>
      <td class="celda-header-verde">Hazard identified</td>
      <td class="celda-riesgo-alto">Survival of pathogens
      (Salmonella, E. coli, Listeria, Campylobacter) in
      insufficiently cooked meats and broths.</td>
    </tr>
    <tr>
      <td class="celda-header-verde">Critical limit</td>
      <td>Minimum internal temperature 75°C for at least 15 seconds.
      Broths and pozole: bring to the boil and maintain &gt;85°C.</td>
    </tr>
    <tr>
      <td class="celda-header-verde">Monitoring</td>
      <td>
        <p><strong>What?</strong> Internal temperature of the food</p>
        <p><strong>How?</strong> Calibrated probe thermometer at
        the coldest point</p>
        <p><strong>When?</strong> At the end of each cooking process</p>
        <p><strong>Who?</strong> {{responsables.chef}}</p>
      </td>
    </tr>
    <tr>
      <td class="celda-header-verde">Corrective action</td>
      <td class="celda-riesgo-alto">
        <ul>
          <li>If &lt;75°C: continue cooking</li>
          <li>If in doubt: remove the batch, do not serve</li>
          <li>Repeat with a new verified batch</li>
          <li>Record the incident in HACCP-07</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td class="celda-header-verde">Record</td>
      <td>Cooking temperature control sheet (HACCP-01).
      Frequency: every batch.</td>
    </tr>
  </tbody>
</table>

<h2 id="pcc2">CCP 2 – Rapid Cooling</h2>
<p><em>Domestic sink with ice bath</em></p>
<table>
  <tbody>
    <tr>
      <td class="celda-header-verde">Hazard identified</td>
      <td class="celda-riesgo-alto">Growth of pathogens in the
      danger zone (5°C–63°C) during slow cooling. Especially
      critical for broths (pozole) and cooked proteins.</td>
    </tr>
    <tr>
      <td class="celda-header-verde">Critical limit</td>
      <td>From &gt;63°C to &lt;21°C within 2 hours; from &lt;21°C
      to &lt;5°C within a further 4 hours. Maximum 6 hours in total.</td>
    </tr>
    <tr>
      <td class="celda-header-verde">Monitoring</td>
      <td>
        <p><strong>What?</strong> Core temperature of the food</p>
        <p><strong>How?</strong> Probe thermometer at the core</p>
        <p><strong>When?</strong> At 30 min, 1 h and 2 h after
        cooling begins</p>
        <p><strong>Who?</strong> {{responsables.chef}}</p>
      </td>
    </tr>
    <tr>
      <td class="celda-header-verde">Corrective action</td>
      <td class="celda-riesgo-alto">
        <ul>
          <li>If &lt;21°C is not reached after 2 hours: divide
          into smaller portions, add more ice</li>
          <li>If &lt;5°C is not reached after 6 hours: discard
          and record in HACCP-07</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td class="celda-header-verde">Record</td>
      <td>Cooling control sheet (HACCP-02). Start time,
      intermediate temperatures and final temperature.</td>
    </tr>
  </tbody>
</table>

<h2 id="pcc3">CCP 3 – Hot-Holding During Service</h2>
<p><em>Chafing dishes at the point of sale</em></p>
<table>
  <tbody>
    <tr>
      <td class="celda-header-verde">Hazard identified</td>
      <td class="celda-riesgo-alto">Growth of pathogens in cooked
      food that is not held at a safe temperature during service
      at the point of sale.</td>
    </tr>
    <tr>
      <td class="celda-header-verde">Critical limit</td>
      <td>Minimum temperature of 63°C at all times during service.
      Verify &gt;63°C before opening to the public.</td>
    </tr>
    <tr>
      <td class="celda-header-verde">Monitoring</td>
      <td>
        <p><strong>What?</strong> Temperature of the product in
        the chafing dish</p>
        <p><strong>How?</strong> Calibrated probe thermometer</p>
        <p><strong>When?</strong> On arrival at the point of sale
        and every 2 hours during service</p>
        <p><strong>Who?</strong> {{responsables.operaciones}}</p>
      </td>
    </tr>
    <tr>
      <td class="celda-header-verde">Corrective action</td>
      <td class="celda-riesgo-alto">
        <ul>
          <li>If temperature falls below 63°C: remove from
          service immediately</li>
          <li>Do not serve food that has been &lt;63°C for more
          than 30 minutes</li>
          <li>Discard and record in HACCP-07</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td class="celda-header-verde">Record</td>
      <td>Service temperature control sheet (HACCP-03).
      Recorded every 2 hours.</td>
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
  'seccion-6': SECCION_6
};

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/**
 * Injects contentHtml into the single <div class="seccion-contenido"></div>
 * that follows <section id="sectionId" class="seccion">.
 */
function injectSection(html, sectionId, contentHtml) {
  const sectionMarker = `<section id="${sectionId}" class="seccion">`;
  const sectionIdx = html.indexOf(sectionMarker);
  if (sectionIdx === -1) {
    throw new Error(`Section "${sectionId}" not found in base.html`);
  }

  const divMarker = '<div class="seccion-contenido"></div>';
  const divIdx = html.indexOf(divMarker, sectionIdx);
  if (divIdx === -1) {
    throw new Error(`div.seccion-contenido not found for "${sectionId}"`);
  }

  const before = html.slice(0, divIdx);
  const after = html.slice(divIdx + divMarker.length);
  const replacement = `<div class="seccion-contenido">\n${contentHtml.trim()}\n</div>`;

  return before + replacement + after;
}

/** Resolves "a.b.c" against a nested object. */
function resolvePath(obj, keyPath) {
  return keyPath.split('.').reduce((acc, key) => (acc != null ? acc[key] : undefined), obj);
}

/** Replaces every {{placeholder}} (including dotted paths) against data. */
function fillPlaceholders(html, data) {
  return html.replace(/\{\{\s*([\w.]+)\s*\}\}/g, (match, key) => {
    const value = resolvePath(data, key);
    if (value === undefined || value === null) {
      console.warn(`Warning: placeholder "{{${key}}}" could not be resolved, left unsubstituted.`);
      return match;
    }
    return String(value);
  });
}

// ---------------------------------------------------------------------------
// Generation
// ---------------------------------------------------------------------------

function generar() {
  console.log(`Generating HACCP Plan EN v${config.version}...`);

  let html = fs.readFileSync(BASE_HTML_PATH, 'utf8');

  Object.keys(SECCIONES).forEach((sectionId) => {
    html = injectSection(html, sectionId, SECCIONES[sectionId]);
  });

  const data = Object.assign({}, config, {
    lang: LANG,
    fechaEmision: config.fechaEmisionEN,
    ui: i18n[LANG].ui,
    nav: i18n[LANG].nav
  });
  html = fillPlaceholders(html, data);

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, html, 'utf8');

  // The generated HTML references "../shared/styles.css" from outputs/en/,
  // which resolves to outputs/shared/styles.css — copy it here so the
  // link isn't broken once the HTML lives outside of src/.
  fs.mkdirSync(path.dirname(STYLES_DEST_PATH), { recursive: true });
  fs.copyFileSync(STYLES_SRC_PATH, STYLES_DEST_PATH);

  console.log(`OK: HTML generated at ${OUTPUT_PATH}`);
}

generar();
