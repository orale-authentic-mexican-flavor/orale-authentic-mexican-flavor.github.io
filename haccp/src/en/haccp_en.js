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
const STYLES_DEST_PATH = path.join(__dirname, '..', '..', '..', 'docs', 'haccp', 'shared', 'styles.css');
const PAGINATION_SRC_PATH = path.join(__dirname, '..', 'shared', 'print-pagination.js');
const PAGINATION_DEST_PATH = path.join(__dirname, '..', '..', '..', 'docs', 'haccp', 'shared', 'print-pagination.js');
const OUTPUT_PATH = path.join(__dirname, '..', '..', '..', 'docs', 'haccp', 'en', 'HACCP_Orale_v1.3_EN.html');

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
<div class="tabla-wrapper">
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
</div>

<h2 id="sec-1-4">1.4 Operation Classification</h2>
<p>In accordance with FSAI Guidance Note No. 16 Food Stalls
(Revision 2), Órale's operation is classified as a
<strong>HIGH-RISK ACTIVITY</strong>, as it involves the
preparation, cooking and direct sale of hot food including
food of animal origin (pork).</p>
<p>This classification means Órale must comply with all general
requirements (GN16 Section 4.3) and the specific requirements
for high-risk activities (GN16 Section 5.1). This HACCP Plan
has been prepared in accordance with these standards.</p>
<p class="nota"><em>Regulatory reference: FSAI Guidance Note
No. 16 Food Stalls (Revision 2), 2016. Available at:
<a href="https://www.fsai.ie/publications/guidance-note-16-food-stalls"
target="_blank">fsai.ie</a></em></p>
`;

const SECCION_2 = `
<div class="tabla-wrapper">
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
</div>
<p class="nota"><em>Training requirement: All staff who handle food
must hold at least Food Safety Level 1. The Operations & Compliance
Manager holds a Food Safety Level 1 certificate and commits to
obtaining Food Safety Level 2 and HACCP certification within a
maximum of 6 months from the issue date of this document.</em></p>
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
<div class="tabla-wrapper">
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
</div>
`;

const SECCION_4 = `
<h2 id="sec-4-1">4.1 Street Sale with Domestic Kitchen</h2>
<p>Complete flow from the domestic kitchen to the point of sale:</p>
<div class="tabla-wrapper">
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
          <li>Certified insulated bags or carriers to maintain temperature</li>
          <li>Hot food: maintain ≥63°C throughout transport
          (not only upon arrival)</li>
          <li>Maximum transport time: 1 hour</li>
          <li>Temperature check at departure from kitchen
          and upon arrival at point of sale</li>
          <li>Record departure and arrival temperatures in HACCP-03</li>
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
</div>
`;

const SECCION_5 = `
<h2 id="sec-5-1">5.1 Risk Legend</h2>
<div class="tabla-wrapper">
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
</div>

<h2 id="sec-5-2">5.2 Hazard Analysis Table</h2>
<div class="tabla-wrapper">
<table class="tabla-ancha">
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
</div>
`;

const SECCION_6 = `
<h2 id="pcc1">CCP 1 – Cooking</h2>
<p><em>Domestic kitchen, hob with extractor fan</em></p>
<div class="tabla-wrapper">
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
      <td>
        <ul>
          <li>Minimum internal temperature <strong>75°C</strong>
          for at least 15 seconds for initial cooking</li>
          <li>Minimum temperature <strong>70°C</strong> for
          reheated/regenerated food at the point of sale</li>
          <li>Broths and pozole: bring to boil and maintain &gt;85°C</li>
          <li>Hot holding: ≥63°C at all times</li>
        </ul>
      </td>
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
</div>

<h2 id="pcc2">CCP 2 – Rapid Cooling</h2>
<p><em>Domestic sink with ice bath</em></p>
<div class="tabla-wrapper">
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
</div>

<h2 id="pcc3">CCP 3 – Hot-Holding During Service</h2>
<p><em>Chafing dishes at the point of sale</em></p>
<div class="tabla-wrapper">
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
</div>
`;

const SECCION_7 = `
<h2 id="sec-7-1">7.1 CCP Monitoring Summary</h2>
<div class="tabla-wrapper">
<table>
  <thead>
    <tr>
      <th>CCP</th>
      <th>Hazard</th>
      <th>Critical limit</th>
      <th>What to measure?</th>
      <th>How?</th>
      <th>Frequency</th>
      <th>Responsible</th>
    </tr>
  </thead>
  <tbody>
    <tr class="celda-riesgo-alto">
      <td>CCP1</td>
      <td>Pathogen survival</td>
      <td>≥75°C internal</td>
      <td>Internal temperature</td>
      <td>Probe thermometer</td>
      <td>Every cooked batch</td>
      <td>{{responsables.chef}}</td>
    </tr>
    <tr>
      <td>CCP2</td>
      <td>Growth in the danger zone</td>
      <td>&lt;5°C within 6 h</td>
      <td>Core temperature</td>
      <td>Probe thermometer</td>
      <td>Every 30–60 min</td>
      <td>{{responsables.chef}}</td>
    </tr>
    <tr class="celda-riesgo-alto">
      <td>CCP3</td>
      <td>Growth during service</td>
      <td>≥63°C during service</td>
      <td>Chafing dish temperature</td>
      <td>Probe thermometer</td>
      <td>Every 2 hours</td>
      <td>{{responsables.operaciones}}</td>
    </tr>
  </tbody>
</table>
</div>

<h2 id="sec-7-2">7.2 Required Measuring Equipment</h2>
<ul>
  <li>Digital probe thermometers (minimum 2 units): calibrated
  monthly. One remains in the domestic kitchen; the other is
  taken to the point of sale.</li>
  <li>Domestic refrigerator thermometer: checked twice a day
  (morning and evening). Target temperature &lt;5°C.</li>
  <li>All readings are recorded on paper (HACCP forms) and in the
  digital management tools maintained by the Operations & Compliance
  Manager.</li>
</ul>

<h2 id="sec-7-3">7.3 General Corrective Action Protocol</h2>
<ol>
  <li>Identify the deviation from the critical limit.</li>
  <li>Set aside and label the affected product as
  <strong>'QUARANTINED – DO NOT SERVE'</strong>.</li>
  <li>Assess whether it can be recovered (further cooking) or
  must be discarded.</li>
  <li>Record the deviation, the action taken and the outcome on
  the corresponding form.</li>
  <li>Inform the Director / HACCP Manager during the same shift.</li>
  <li>Review the root cause to implement preventive measures.</li>
</ol>
`;

const SECCION_8 = `
<h2 id="sec-8-1">8.1 Verification Activities</h2>
<div class="tabla-wrapper">
<table>
  <thead>
    <tr>
      <th>Activity</th>
      <th>Description</th>
      <th>Frequency</th>
      <th>Responsible</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Review of CCP records</td>
      <td>Verify that all control sheets are complete and free
      of out-of-limit values without a documented correction.</td>
      <td>Weekly</td>
      <td>{{responsables.director}} / {{responsables.chef}}</td>
    </tr>
    <tr class="alt">
      <td>Thermometer calibration</td>
      <td>Check against ice water (0°C) and boiling water (100°C).</td>
      <td>Monthly</td>
      <td>{{responsables.chef}}</td>
    </tr>
    <tr>
      <td>Internal HACCP audit</td>
      <td>Verification of the whole chain: domestic kitchen,
      transport and point of sale.</td>
      <td>Quarterly</td>
      <td>{{responsables.director}}</td>
    </tr>
    <tr class="alt">
      <td>HACCP plan review</td>
      <td>Update following: menu changes, a change of kitchen,
      new staff, complaints or an HSE inspection.</td>
      <td>Every 6 months or on change</td>
      <td>{{responsables.director}}</td>
    </tr>
    <tr>
      <td>HSE inspection</td>
      <td>Cooperate fully. Present all records. Implement
      corrections within the indicated timeframes.</td>
      <td>As required</td>
      <td>{{responsables.director}} / {{responsables.chef}}</td>
    </tr>
  </tbody>
</table>
</div>

<h2 id="sec-8-2">8.2 Customer Complaint Management</h2>
<ul>
  <li>Any complaint related to food safety will be recorded by
  the Operations & Compliance Manager with: date, description,
  product involved and action taken (HACCP-07).</li>
  <li>The Director will be notified immediately of any serious
  complaint.</li>
  <li>In the event of a probable foodborne illness case involving
  more than 2 people linked to Órale, HSE Environmental Health
  will be notified within the legal timeframe (24–48 hours).</li>
</ul>
`;

const SECCION_9 = `
<p>All HACCP records will be kept for a minimum of 3 years in
physical format (HACCP folder) and/or in the business's digital
management tools. The Operations & Compliance Manager is
responsible for keeping them available for HSE inspection at
any time.</p>

<h2 id="sec-9-1">9.1 Mandatory Recording Formats</h2>
<div class="tabla-wrapper">
<table>
  <thead>
    <tr>
      <th>Format</th>
      <th>Description</th>
      <th>Frequency</th>
      <th>Applies to</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>HACCP-01</td>
      <td>Cooking temperature control</td>
      <td>Every cooked batch</td>
      <td>Domestic kitchen</td>
    </tr>
    <tr class="alt">
      <td>HACCP-02</td>
      <td>Rapid cooling control</td>
      <td>Every cooling process</td>
      <td>Domestic kitchen</td>
    </tr>
    <tr>
      <td>HACCP-03</td>
      <td>Service temperature control</td>
      <td>Every 2 hours during service</td>
      <td>Point of sale</td>
    </tr>
    <tr class="alt">
      <td>HACCP-04</td>
      <td>Goods receiving control</td>
      <td>Every supplier delivery</td>
      <td>Domestic kitchen</td>
    </tr>
    <tr>
      <td>HACCP-05</td>
      <td>Domestic refrigerator temperature control</td>
      <td>Twice a day</td>
      <td>Domestic kitchen</td>
    </tr>
    <tr class="alt">
      <td>HACCP-06</td>
      <td>Daily cleaning and disinfection record</td>
      <td>At the close of each day</td>
      <td>Kitchen and point of sale</td>
    </tr>
    <tr>
      <td>HACCP-07</td>
      <td>Incident and corrective action record</td>
      <td>On every incident</td>
      <td>All</td>
    </tr>
    <tr class="alt">
      <td>HACCP-08</td>
      <td>Thermometer calibration record</td>
      <td>Monthly</td>
      <td>All</td>
    </tr>
    <tr>
      <td>HACCP-09</td>
      <td>Staff training record</td>
      <td>On hire + annually</td>
      <td>All</td>
    </tr>
  </tbody>
</table>
</div>
`;

const SECCION_10 = `
<h2 id="sec-10-1">10.1 Personal Hygiene</h2>
<p><strong>Mandatory handwashing</strong> with warm running
water + non-perfumed soap + minimum 20 seconds, at the
following times:</p>
<ul>
  <li>At the start of each preparation or service session</li>
  <li>Before handling cooked or ready-to-eat food</li>
  <li>After handling raw food</li>
  <li>After using the toilet</li>
  <li>After handling waste or rubbish</li>
  <li>After touching animals</li>
  <li>After blowing nose, sneezing or coughing</li>
  <li>After eating or smoking</li>
  <li>After handling money or dirty objects</li>
  <li>Before putting on disposable gloves</li>
  <li>After every break</li>
</ul>
<p><strong>Correct handwashing procedure:</strong></p>
<ol>
  <li>Wet hands under warm running water</li>
  <li>Apply enough soap to form a good lather</li>
  <li>Rub all surfaces of hands for at least 10–15 seconds,
  including fingertips and thumbs</li>
  <li>Rinse thoroughly under running water</li>
  <li>Dry with disposable paper towels</li>
</ol>
<p class="nota"><em>GN16 §4.3.5: Hand sanitiser gel/alcohol
is NOT a legal substitute for handwashing in high-risk
activities. Alcohol-based agents are completely inactivated
by organic matter and are not suitable where hands may
come into contact with food debris. Gel may be used as
a complementary measure only, never as a replacement for
soap and water handwashing.</em></p>
<p><strong>Disposable gloves:</strong></p>
<ul>
  <li>Hands must be clean before putting on gloves</li>
  <li>Must be <strong>latex-free</strong> and food-safe</li>
  <li>Change regularly and dispose of correctly</li>
  <li>Change when switching tasks (raw to cooked,
  waste, money)</li>
  <li>Gloves protect the food, not the food handler</li>
</ul>
<p><strong>Protective clothing and personal presentation:</strong></p>
<ul>
  <li>Clean apron specific to stall operation — remove
  when going to the toilet, handling waste or taking breaks</li>
  <li>Hair tied back and covered with hat or hairnet</li>
  <li>Jewellery: only plain wedding band, small sleeper
  earrings or studs permitted</li>
  <li>No nail varnish, false nails or false eyelashes</li>
  <li>Cuts or wounds: cover with waterproof dressing —
  <strong>blue coloured</strong> dressings recommended
  (GN16) as they are visible if they fall into food</li>
  <li>No smoking at the point of sale</li>
</ul>
<p><strong>Sick staff:</strong> prohibited from handling food
with gastrointestinal symptoms, vomiting, diarrhoea, skin
infections on hands or active respiratory infections.
Mandatory notification to the person in charge.</p>

<h2 id="sec-10-2">10.2 Cleaning and Disinfection of the Domestic Kitchen</h2>
<ul>
  <li>Before each session: clean and disinfect all surfaces with
  a product approved for food use.</li>
  <li>Procedure:
    <ol>
      <li>Clean (remove physical residue)</li>
      <li>Rinse</li>
      <li>Disinfect</li>
      <li>Final rinse</li>
      <li>Air dry</li>
    </ol>
  </li>
  <li>Cutting boards: wash with hot water and soap after each
  use. Disinfect at the end of the session.</li>
  <li>Utensils: wash in the dishwasher or by hand with hot water
  and soap. Dry with disposable paper towels, not reusable cloths.</li>
  <li>Cleaning record in HACCP-06 at the end of each day.</li>
</ul>

<h2 id="sec-10-3">10.3 Domestic Refrigerator Organisation</h2>
<ul>
  <li><strong>Top shelf:</strong> cooked food ready for
  consumption.</li>
  <li><strong>Middle shelf:</strong> dairy, eggs, prepared
  ingredients.</li>
  <li><strong>Bottom shelf:</strong> raw meats in airtight
  containers to prevent dripping.</li>
  <li><strong>Vegetable drawer:</strong> fresh vegetables.</li>
  <li>Target temperature: &lt;5°C. Checked twice a day. Recorded
  in HACCP-05.</li>
  <li>Do not overload the refrigerator — air circulation is
  needed to maintain a uniform temperature.</li>
</ul>

<h2 id="sec-10-4">10.4 Water Management</h2>
<ul>
  <li>Mains drinking water from the apartment for all food
  preparation.</li>
  <li>Portable handwashing station at the point of sale: potable
  bottled water in a jerry can with tap, liquid soap and paper
  towels. Wastewater in a separate container.</li>
</ul>

<h2 id="sec-10-5">10.5 Waste Management</h2>
<ul>
  <li>Organic waste from the domestic kitchen: sealed bags,
  disposed of in the building's bins in accordance with Limerick
  City & County Council regulations.</li>
  <li>Leftovers from the point of sale: not reused the next day.
  Disposed of the same day.</li>
  <li>Used oil: stored in an airtight container and disposed of
  at an authorised collection point.</li>
</ul>

<h2 id="sec-10-6">10.6 Utensil and Equipment Maintenance</h2>
<ul>
  <li>Chafing dishes: washed and disinfected after each use.
  Lid integrity checked before each day's service.</li>
  <li>Probe thermometers: cleaned with alcohol before and after
  each measurement. Calibrated monthly, recorded in HACCP-08.</li>
  <li>Cutting boards: weekly visual inspection — discarded if
  they show deep cuts.</li>
  <li>Knives: kept sharp and in good condition. Stored in
  individual guards.</li>
</ul>
`;

const SECCION_11 = `
<h2 id="sec-11-1">11.1 Allergens Present in the Menu</h2>
<p>In accordance with Regulation (EU) No. 1169/2011, Órale
actively manages the 14 allergens subject to mandatory
declaration.</p>
<div class="tabla-wrapper">
<table class="tabla-ancha">
  <thead>
    <tr>
      <th>Dish</th>
      <th>Gluten</th>
      <th>Dairy</th>
      <th>Egg</th>
      <th>Tree Nuts</th>
      <th>Soya</th>
      <th>Sulphites</th>
      <th>Sesame</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Pozole Rojo (V)</td>
      <td>Check</td><td>No</td><td>No</td>
      <td>No</td><td>No</td><td>Possible</td><td>No</td>
    </tr>
    <tr class="alt">
      <td>Tacos al Pastor</td>
      <td>Yes (tortilla)</td><td>Possible</td><td>No</td>
      <td>No</td><td>No</td><td>Yes (chile)</td><td>No</td>
    </tr>
    <tr>
      <td>Tacos Carnitas</td>
      <td>Yes (tortilla)</td><td>No</td><td>No</td>
      <td>No</td><td>No</td><td>Possible</td><td>No</td>
    </tr>
    <tr class="alt">
      <td>Tacos Cochinita</td>
      <td>Yes (tortilla)</td><td>No</td><td>No</td>
      <td>No</td><td>No</td><td>Possible</td><td>No</td>
    </tr>
    <tr>
      <td>Nachos + Guacamole (V)</td>
      <td>Yes (nachos)</td><td>Yes (cheese)</td><td>No</td>
      <td>No</td><td>No</td><td>Possible</td><td>No</td>
    </tr>
    <tr class="alt">
      <td>Chilaquiles (V)</td>
      <td>Yes (tortilla)</td><td>Yes (cream/cheese)</td>
      <td>Possible</td><td>No</td><td>No</td><td>Possible</td><td>No</td>
    </tr>
    <tr>
      <td>Taco de Nopales (V)</td>
      <td>Yes (tortilla)</td><td>No</td><td>No</td>
      <td>No</td><td>No</td><td>No</td><td>No</td>
    </tr>
  </tbody>
</table>
</div>

<h2 id="sec-11-2">11.2 Allergen Communication to Customers</h2>
<ul>
  <li>Signage at the point of sale:
  <em>'For allergen information, please ask a member of staff.'</em></li>
  <li>Digital menu (QR) and physical menu updated by the
  Operations & Compliance Manager after every recipe or supplier
  change.</li>
  <li>Staff trained to answer allergen questions correctly.</li>
  <li>For customers with severe allergies: communicate that the
  kitchen is not 100% free of cross-contact traces.</li>
</ul>
`;

const SECCION_12 = `
<h2 id="sec-12-1">12.1 Domestic Kitchen and Street Trading</h2>
<div class="tabla-wrapper">
<table>
  <thead>
    <tr>
      <th>Aspect</th>
      <th>Specific requirement</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Preparation kitchen</td>
      <td>
        <ul>
          <li>Domestic apartment, Limerick</li>
          <li>Standard kitchen: hob, extractor fan, oven,
          refrigerator, hot water</li>
          <li>Subject to inspection and approval by HSE
          (Premises Ref: {{hse.premisesRef}})</li>
        </ul>
      </td>
    </tr>
    <tr class="alt">
      <td>Raw/cooked separation</td>
      <td>
        <ul>
          <li>Colour-coded boards: red (raw meat), green
          (vegetables), yellow (poultry)</li>
          <li>Knives kept separate in individual guards</li>
          <li>Raw items on the bottom shelf of the refrigerator</li>
          <li>Cooked items on the top shelf of the refrigerator</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Production scale</td>
      <td>
        <ul>
          <li>Volume matched to domestic capacity</li>
          <li>Example: 20 servings of 650 ml pozole per day</li>
          <li>Apartment equipment capacity is never exceeded</li>
        </ul>
      </td>
    </tr>
    <tr class="alt">
      <td>Transport</td>
      <td>
        <ul>
          <li>Covered, pre-heated chafing dishes</li>
          <li>Maximum time: 1 hour</li>
          <li>Temperature verified on arrival (&gt;63°C)</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Handwashing at the point of sale</td>
      <td>
        <ul>
          <li>Portable station mandatory at every operation</li>
          <li>Jerry can with tap, drinking water, soap and
          paper towels</li>
          <li>Separate container for wastewater</li>
        </ul>
      </td>
    </tr>
    <tr class="alt">
      <td>Point-of-sale handler</td>
      <td>
        <ul>
          <li>Single handler</li>
          <li>All food arrives fully cooked</li>
          <li>No raw meat is handled on the street</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Maximum exposure time</td>
      <td>
        <ul>
          <li>Hot food: maximum 2 hours from arrival</li>
          <li>Leftovers discarded at closing</li>
          <li>Not reused the next day</li>
        </ul>
      </td>
    </tr>
    <tr class="alt">
      <td>Casual Trading Licence</td>
      <td>
        <ul>
          <li>A copy of the LCCC authorisation is kept at the
          point of sale at all times</li>
          <li>Operates only at authorised locations and times</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Activity Classification</td>
      <td>
        <ul>
          <li>Operation classified as HIGH-RISK under GN16</li>
          <li>Requirements of GN16 Section 4.3 and 5.1 apply</li>
        </ul>
      </td>
    </tr>
    <tr class="alt">
      <td>Food Protection During Service</td>
      <td>
        <ul>
          <li>Sneeze screen or cover over chafing dishes at all
          times during service</li>
          <li>Open only at the moment of serving and close
          immediately</li>
          <li>Food never exposed to the public without protection</li>
          <li>GN16 §4.3.10: physical protection mandatory wherever
          food is exposed</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Storage Off the Ground</td>
      <td>
        <ul>
          <li>All food and equipment stored
          <strong>a minimum of 450 mm off the ground</strong></li>
          <li>Never place food directly on the ground</li>
          <li>GN16 §4.3.10</li>
        </ul>
      </td>
    </tr>
    <tr class="alt">
      <td>Handwashing Station — GN16 Specifications</td>
      <td>
        <ul>
          <li>Portable container with tap: <strong>minimum
          20 litre</strong> capacity (GN16 §4.3.5)</li>
          <li>Labelled: <em>"Potable Water Only"</em></li>
          <li>Separate waste water container, labelled:
          <em>"Waste Water"</em></li>
          <li>Waste water must not be discharged onto the ground</li>
          <li>Non-perfumed liquid soap and disposable paper towels</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Waste Management at Point of Sale</td>
      <td>
        <ul>
          <li>Waste bin with a <strong>tight-fitting lid</strong>
          mandatory — GN16 §4.3.8</li>
          <li>Empty during the day if necessary</li>
          <li>Segregate waste from food storage</li>
          <li>No waste left on the public street</li>
        </ul>
      </td>
    </tr>
    <tr class="alt">
      <td>Supplier Traceability (GN16 §3.3)</td>
      <td>
        <ul>
          <li>Keep a record of: supplier name and address,
          product type, delivery date</li>
          <li>For food of animal origin (pork, chicken): retain
          delivery notes until the food can reasonably be assumed
          to have been consumed</li>
          <li>Recorded in HACCP-04</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>
</div>
`;

const SECCION_13 = (function () {
  function blankRows(numRows, numCols) {
    const cell = '<td>&nbsp;</td>';
    let out = '';
    for (let i = 0; i < numRows; i++) {
      out += `    <tr${i % 2 === 1 ? ' class="alt"' : ''}>${cell.repeat(numCols)}</tr>\n`;
    }
    return out;
  }

  function zoneRows(blocks) {
    let out = '';
    let idx = 0;
    blocks.forEach((block) => {
      for (let i = 0; i < block.rows; i++) {
        const cls = idx % 2 === 1 ? ' class="alt"' : '';
        out += `    <tr${cls}><td>&nbsp;</td><td style="background-color:#E0E0E0;">${block.zone}</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>\n`;
        idx++;
      }
    });
    return out;
  }

  return `
<p>The following blank formats correspond to the mandatory records
described in Section 9.1. Print as needed and keep completed copies
for a minimum of 3 years.</p>

<h2 id="sec-13-1">13.1 Recording Formats (HACCP-01 to HACCP-09)</h2>

<h3 id="haccp-01">HACCP-01 – Cooking Temperature Control</h3>
<p><strong>Instructions for use:</strong> Record the internal
temperature of each cooked batch. Critical limit: &ge;75°C.</p>
<div class="tabla-wrapper">
<table>
  <thead>
    <tr>
      <th>Date</th>
      <th>Dish/Batch</th>
      <th>Start time</th>
      <th>Internal temp. (°C)</th>
      <th>&ge;75°C Yes/No</th>
      <th>End time</th>
      <th>Corrective action</th>
      <th>Responsible/Signature</th>
    </tr>
  </thead>
  <tbody>
${blankRows(20, 8)}  </tbody>
</table>
</div>

<h3 id="haccp-02">HACCP-02 – Rapid Cooling Control</h3>
<p><strong>Instructions for use:</strong> Record temperatures during
the cooling process. Critical limit: from &gt;63°C to &lt;5°C within
a maximum of 6 hours.</p>
<div class="tabla-wrapper">
<table>
  <thead>
    <tr>
      <th>Date</th>
      <th>Product/Batch</th>
      <th>Start time</th>
      <th>Temp. 30 min (°C)</th>
      <th>Temp. 1 h (°C)</th>
      <th>Temp. 2 h (°C)</th>
      <th>Final temp. (°C)</th>
      <th>&lt;5°C within 6h Yes/No</th>
      <th>Corrective action</th>
      <th>Responsible</th>
    </tr>
  </thead>
  <tbody>
${blankRows(10, 10)}  </tbody>
</table>
</div>

<h3 id="haccp-03">HACCP-03 – Service Temperature Control</h3>
<p><strong>Instructions for use:</strong> Check the chafing dish every
2 hours during service. Critical limit: &ge;63°C at all times.</p>
<div class="tabla-wrapper">
<table>
  <thead>
    <tr>
      <th>Date</th>
      <th>Product</th>
      <th>Measurement time</th>
      <th>Temp. (°C)</th>
      <th>&ge;63°C Yes/No</th>
      <th>Corrective action</th>
      <th>Responsible/Signature</th>
    </tr>
  </thead>
  <tbody>
${blankRows(20, 7)}  </tbody>
</table>
</div>

<h3 id="haccp-04">HACCP-04 — Goods Receipt & Supplier
Traceability Control</h3>
<p class="nota"><em>GN16 §3.3: Instruction: Complete for
every delivery. Retain until food can reasonably be assumed
to have been consumed. For food of animal origin, retain
for a minimum of 3 years.</em></p>
<div class="tabla-wrapper">
<table>
  <thead>
    <tr>
      <th>Date</th>
      <th>Supplier (name & address)</th>
      <th>Product</th>
      <th>Animal origin Y/N</th>
      <th>Reception temp. (°C)</th>
      <th>Best before / Use by</th>
      <th>Packaging OK Y/N</th>
      <th>Appearance OK Y/N</th>
      <th>Accepted? Y/N</th>
      <th>Action if rejected</th>
      <th>Responsible</th>
    </tr>
  </thead>
  <tbody>
${blankRows(15, 11)}  </tbody>
</table>
</div>

<h3 id="haccp-05">HACCP-05 – Refrigerator Temperature Control</h3>
<p><strong>Instructions for use:</strong> Check twice daily (morning
and evening). Limit: &lt;5°C.</p>
<div class="tabla-wrapper">
<table>
  <thead>
    <tr>
      <th>Date</th>
      <th>Morning time</th>
      <th>Morning temp. (°C)</th>
      <th>&lt;5°C Yes/No</th>
      <th>Evening time</th>
      <th>Evening temp. (°C)</th>
      <th>&lt;5°C Yes/No</th>
      <th>Corrective action</th>
      <th>Responsible</th>
    </tr>
  </thead>
  <tbody>
${blankRows(31, 9)}  </tbody>
</table>
</div>

<h3 id="haccp-06">HACCP-06 – Daily Cleaning and Disinfection Log</h3>
<p><strong>Instructions for use:</strong> Complete at the close of
each working day, for each zone/equipment shown in the pre-printed
(grey) column.</p>
<div class="tabla-wrapper">
<table>
  <thead>
    <tr>
      <th>Date</th>
      <th>Zone/Equipment</th>
      <th>Time</th>
      <th>Product used</th>
      <th>Rinsed Yes/No</th>
      <th>Disinfected Yes/No</th>
      <th>Responsible/Signature</th>
    </tr>
  </thead>
  <tbody>
${zoneRows([
    { zone: 'Domestic kitchen surfaces', rows: 4 },
    { zone: 'Stove and extractor', rows: 4 },
    { zone: 'Cutting boards', rows: 3 },
    { zone: 'Chafing dishes', rows: 3 },
    { zone: 'Point-of-sale table', rows: 3 },
    { zone: 'Handwashing station', rows: 3 }
  ])}  </tbody>
</table>
</div>

<h3 id="haccp-07">HACCP-07 – Incident and Corrective Action Log</h3>
<p><strong>Instructions for use:</strong> Complete for any deviation
from a critical limit or customer complaint.</p>
<div class="tabla-wrapper">
<table>
  <thead>
    <tr>
      <th>Date</th>
      <th>Description</th>
      <th>CCP/Stage</th>
      <th>Product</th>
      <th>Corrective action</th>
      <th>Result</th>
      <th>Director notified Yes/No</th>
      <th>HSE notified Yes/No</th>
      <th>Responsible/Signature</th>
    </tr>
  </thead>
  <tbody>
${blankRows(10, 9)}  </tbody>
</table>
</div>

<h3 id="haccp-08">HACCP-08 – Thermometer Calibration Log</h3>
<p><strong>Instructions for use:</strong> Calibrate monthly using ice
water (0°C) and boiling water (100°C).</p>
<div class="tabla-wrapper">
<table>
  <thead>
    <tr>
      <th>Date</th>
      <th>Thermometer ID</th>
      <th>Ice water temp. (°C)</th>
      <th>&asymp;0°C Yes/No</th>
      <th>Boiling water temp. (°C)</th>
      <th>&asymp;100°C Yes/No</th>
      <th>Calibration correct Yes/No</th>
      <th>Action if failed</th>
      <th>Responsible/Signature</th>
    </tr>
  </thead>
  <tbody>
${blankRows(12, 9)}  </tbody>
</table>
</div>

<h3 id="haccp-09">HACCP-09 – Staff Training Log</h3>
<p><strong>Instructions for use:</strong> Complete upon onboarding of
each employee and at annual reviews.</p>
<div class="tabla-wrapper">
<table>
  <thead>
    <tr>
      <th>Full name</th>
      <th>Role</th>
      <th>Course/Certification</th>
      <th>Level 1/2/3</th>
      <th>Training body</th>
      <th>Date obtained</th>
      <th>Renewal date</th>
      <th>Certificate No.</th>
      <th>Employee signature</th>
    </tr>
  </thead>
  <tbody>
${blankRows(10, 9)}  </tbody>
</table>
</div>
`;
})();

const ANEXO = `
<h2>Domestic Kitchen — before each preparation</h2>
<ul class="checklist">
  <li>Digital probe thermometer (x2 operational and calibrated)</li>
  <li>Visible refrigerator thermometer (current reading &lt;5°C)</li>
  <li>Spray alcohol to disinfect the probe between measurements</li>
  <li>Colour-coded cutting boards
  (red: raw meat, green: vegetables, yellow: poultry)</li>
  <li>Knives separated by use — sharpened, with individual
  guards</li>
  <li>Airtight containers labelled with product and date</li>
  <li>NON-perfumed liquid soap and disposable paper at the sink</li>
  <li>Clean aprons (minimum 2 for rotation)</li>
  <li>Caps or hairnets</li>
  <li>LATEX-FREE disposable gloves, food-safe</li>
  <li>BLUE coloured waterproof dressings for cuts/wounds</li>
  <li>Food-grade approved disinfectant</li>
  <li>Disposable cloths (not reusable rags)</li>
  <li>HACCP folder with printed HACCP-01 to HACCP-09 formats</li>
  <li>Product date-labelling stickers</li>
  <li>Pens for recording</li>
  <li>Food stored a minimum of 450mm off the ground</li>
</ul>

<h2>Point of Sale — before each outing</h2>
<ul class="checklist">
  <li>Portable container with tap — MINIMUM 20 LITRE capacity</li>
  <li>Container labelled: "POTABLE WATER ONLY"</li>
  <li>Container for waste water — labelled: "WASTE WATER"</li>
  <li>NON-perfumed liquid soap and disposable paper</li>
  <li>Hand sanitiser gel (complementary — NOT a substitute
  for handwashing)</li>
  <li>Chafing dishes with tight-fitting lid (minimum 2, pre-heated)</li>
  <li>Sneeze screen or covers to protect exposed food</li>
  <li>Certified insulated bags or carriers</li>
  <li>Work table with washable surface (minimum 450mm
  off the ground)</li>
  <li>Waste bin with TIGHT-FITTING LID</li>
  <li>Allergen signage visible to the customer</li>
  <li>Probe thermometer (point-of-sale unit)</li>
  <li>Printed copy of current Casual Trading Licence</li>
  <li>Printed copy of current HACCP Plan (current version)</li>
  <li>HACCP-03 and HACCP-06 formats printed for the shift</li>
  <li>Pens for recording</li>
  <li>Food and equipment never in contact with the ground</li>
</ul>

<p><strong>Check before each operational working day.</strong></p>
<p class="nota"><em>This checklist is based on the requirements of FSAI
Guidance Note No. 16 Food Stalls (Revision 2), applicable
to high-risk food stall activities.</em></p>
`;

const SECCION_14 = `
<div class="tabla-wrapper">
<table>
  <tbody>
    <tr>
      <td><strong>Document</strong></td>
      <td>HACCP Plan – Órale Authentic Mexican Flavor</td>
    </tr>
    <tr class="alt">
      <td><strong>Company</strong></td>
      <td>{{empresa}} (CRO: {{cro}})</td>
    </tr>
    <tr>
      <td><strong>Preparation kitchen</strong></td>
      <td>Apt 301, Richmond Court, Mount Kennett Place, Dock Road,
      Limerick V94 PY76</td>
    </tr>
    <tr class="alt">
      <td><strong>Version</strong></td>
      <td>{{version}}</td>
    </tr>
    <tr>
      <td><strong>Issue date</strong></td>
      <td>{{fechaEmision}}</td>
    </tr>
    <tr class="alt">
      <td><strong>Prepared by</strong></td>
      <td>{{responsables.director}} – Founder &amp; Director</td>
    </tr>
    <tr>
      <td><strong>Next review</strong></td>
      <td>{{proximaRevision}}</td>
    </tr>
    <tr class="alt">
      <td><strong>Approved by</strong></td>
      <td>{{responsables.director}}</td>
    </tr>
    <tr>
      <td><strong>Signature</strong></td>
      <td>___________________________</td>
    </tr>
    <tr class="alt">
      <td><strong>Date of signature</strong></td>
      <td>_____ / _____ / 2026</td>
    </tr>
  </tbody>
</table>
</div>

<p class="nota">This HACCP Plan has been prepared in good faith and in
compliance with applicable Irish and European food safety
legislation. The domestic kitchen described in this document
is pending formal inspection and approval by HSE Environmental
Health. Órale commits to operating only after obtaining that
approval and to implementing all improvements required by the
competent authority.</p>
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
  'anexo': ANEXO
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

const BTN_IDIOMA = '<a href="{{urlES}}" id="btn-idioma" class="btn-idioma">🌐 Español</a>';

function generar() {
  console.log(`Generating HACCP Plan EN v${config.version}...`);

  let html = fs.readFileSync(BASE_HTML_PATH, 'utf8');

  Object.keys(SECCIONES).forEach((sectionId) => {
    html = injectSection(html, sectionId, SECCIONES[sectionId]);
  });

  html = html.replace('<!-- BTN_IDIOMA -->', BTN_IDIOMA);

  const data = Object.assign({}, config, {
    lang: LANG,
    fechaEmision: config.fechaEmisionEN,
    proximaRevision: config.proximaRevisionEN,
    urlES: config.urls.es,
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

  fs.mkdirSync(path.dirname(PAGINATION_DEST_PATH), { recursive: true });
  fs.copyFileSync(PAGINATION_SRC_PATH, PAGINATION_DEST_PATH);

  console.log(`OK: HTML generated at ${OUTPUT_PATH}`);
}

generar();
