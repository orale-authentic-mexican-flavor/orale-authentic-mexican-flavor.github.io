// Órale – Authentic Mexican Flavor Limited
// HACCP Plan Generator – English Version
// Version: 1.4
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
const OUTPUT_PATH = path.join(__dirname, '..', '..', '..', 'docs', 'haccp', 'en', 'HACCP_Orale_v1.4_EN.html');

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
<p>This plan covers Órale's modes of operation:</p>
<p><strong>Operating modes</strong></p>
<ol>
  <li><strong>Order-based sale (continuous)</strong>
  <p>Production in the domestic kitchen (Apt 301, Richmond
  Court, Mount Kennett Place, Dock Road, Limerick V94 PY76)
  and sale via WhatsApp and online channels, with home
  delivery or pickup from the same address. The customer may
  request the food hot (reheated to ≥70°C) or frozen.</p>
  </li>
  <li><strong>Street-stall sale (occasional)</strong>
  <p>Direct sale from a demountable stall at locations and
  dates authorised by Limerick City & County Council. This is
  an intermittent mode: it is activated only for each specific
  authorisation. The corresponding procedures, critical control
  points and records remain in force and are applied in full on
  every authorised stall day.</p>
  </li>
</ol>
<p>Both modes share the same production kitchen and the same
prerequisite programmes.</p>
<p><strong>Production days:</strong> Fridays and Saturdays.
Each session is dedicated to one rotating menu item
(e.g. pozole one day, tamales the next), producing
20 servings per session. Part is frozen for weekday
sales and part is kept refrigerated for immediate
orders.</p>
<p><strong>Production control by capacity:</strong>
Production per session is limited by available storage
capacity: 30 servings of frozen storage and 10 of
short-term refrigerated storage, 40 in total. No greater
volume is produced than can be rapidly cooled (CCP2) and
immediately stored at the appropriate temperature.</p>
<p><strong>Applicable menu:</strong></p>
<ul>
  <li>Pozole rojo estilo Jalisco</li>
  <li>Tacos al pastor (3 pcs)</li>
  <li>Tacos de carnitas (3 pcs)</li>
  <li>Tacos de cochinita pibil (3 pcs)</li>
  <li>Nachos with guacamole</li>
  <li>Chilaquiles</li>
  <li>Taco de nopales</li>
  <li>Rotating dishes: tamales, quesadillas</li>
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

<p><strong>Notification and registration (GN-16 §2.2 and §2.3).</strong>
GN-16 §2.2 requires the operator to notify the HSE of each unit
of its food business before beginning to operate it. GN-16 §2.3
requires that the establishment where the food is produced be
notified and remain subject to inspection, even where it is a
private dwelling.</p>
<p>The production kitchen and the point of sale are distinct
units for notification purposes. Approval of one does not
substitute for registration of the other.</p>
<p><strong>Órale's operating rule:</strong></p>
<ul>
  <li>No activity begins at any point of sale that has not been
  previously notified and registered with the HSE.</li>
  <li>No food is produced at any establishment that has not been
  notified to the HSE and remains subject to inspection.</li>
  <li>Any change to the production kitchen, to the sale locations
  or to the activities carried out is notified to the HSE in
  writing before it is applied.</li>
  <li>A copy of the registration confirmation is kept and remains
  available during operations (GN-16 §2.2).</li>
  <li>Street-stall sale requires that unit to be notified and
  registered with the HSE, independently of the registration of
  the production establishment. Authorisation from Limerick City
  & County Council enables the location; it does not substitute
  for the stall's sanitary registration.</li>
</ul>

<h2 id="sec-1-4">1.4 Operation Classification</h2>
<p>In accordance with FSAI Guidance Note No. 16 Food Stalls
(Revision 2), Órale's operation is classified as a
<strong>HIGH-RISK ACTIVITY</strong>
<span class="badge-riesgo">HIGH-RISK</span>, as it involves the
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
<p class="nota"><em><strong>Team training.</strong> All three team
members have completed the "Food Safety Level 1 – HACCP
Training" course, covering food hazards and contamination,
factors for bacterial growth, food poisoning and infection,
prerequisites of the HACCP system, personal health and hygiene,
transport, distribution and storage, food preparation, cleaning
and disinfection, pest control, and food safety legislation.
This training satisfies the GN-16 §4.3.13 requirement applicable
to food handlers.</em></p>
<p class="nota"><em>GN-16 §4.3.13 further requires that whoever
develops and maintains the procedures based on HACCP principles
has received training in the application of those principles.
Órale has consulted the HSE on the adequacy of current training
for this purpose and will adopt any supplementary training the
authority indicates.</em></p>
`;

const SECCION_3 = `
<h2 id="sec-3-1">3.1 General Description</h2>
<p>Órale prepares and serves traditional Mexican food, cooked by hand
in a domestic kitchen in Limerick. Food is prepared on the same day
it is sold, in domestic-scale batches, and transported to the point
of sale in chafing dishes and insulated containers. It is served
directly to the end consumer. No wholesale distribution or sale of
unlabelled packaged products takes place.</p>

<h3 id="sec-3-0">Pre-process Note — Red Pozole</h3>
<p>Red pozole is the most operationally complex dish
on the Órale menu. Its production process includes
the following stages:</p>
<div class="tabla-wrapper">
<table class="tabla-ancha">
  <thead>
    <tr>
      <th>Stage</th>
      <th>Description</th>
      <th>Approximate time</th>
      <th>Control point</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background:#006847;">
      <td colspan="4" style="color:white;
      font-weight:bold;padding:8px 10px;">
        PRE-PROCESSES — Total time: ~2 hours
      </td>
    </tr>
    <tr>
      <td>Pre-process 1 — Corn</td>
      <td>Wash and prepare the cacahuazintle corn or
      hydrate pre-cooked corn as available</td>
      <td>15–30 min</td>
      <td>Visual: clean grain, free of impurities</td>
    </tr>
    <tr class="alt">
      <td>Pre-process 2 — Pork</td>
      <td>Clean and cut pork into uniform portions
      for even cooking</td>
      <td>15–20 min</td>
      <td>Visual: no bone fragments or residue</td>
    </tr>
    <tr>
      <td>Pre-process 3 — Chile base</td>
      <td>Toast, hydrate and blend dried chiles
      (guajillo, ancho). Strain to obtain a smooth
      sauce free of seeds and skins</td>
      <td>20–30 min</td>
      <td>Toasting temperature controlled to prevent
      burning which makes the sauce bitter</td>
    </tr>
    <tr style="background:#006847;">
      <td colspan="4" style="color:white;
      font-weight:bold;padding:8px 10px;">
        COOKING — Total time: 3–4 hours
      </td>
    </tr>
    <tr class="alt">
      <td>Cooking 1 — Pork</td>
      <td>Cook pork with onion and garlic in
      sufficient water</td>
      <td>1.5–2 hours</td>
      <td class="celda-riesgo-alto">
        ≥75°C instantaneously at the core of the product,
        or an equivalent combination ≥70°C for 2 minutes,
        verified with probe thermometer (CCP1)
      </td>
    </tr>
    <tr>
      <td>Cooking 2 — Corn integration</td>
      <td>Add corn to the broth and continue cooking
      until the grain is fully cooked and begins
      to open</td>
      <td>1–1.5 hours</td>
      <td>Visual: open grain, soft to the touch</td>
    </tr>
    <tr class="alt">
      <td>Cooking 3 — Chile integration</td>
      <td>Add strained chile base to broth with pork
      and corn. Season and adjust consistency.
      Continue cooking over medium heat</td>
      <td>30–45 min</td>
      <td class="celda-riesgo-alto">
        Broth temperature ≥85°C maintained during
        this stage and throughout service (§3.1 —
        product specification)
      </td>
    </tr>
    <tr style="background:#FFF9C4;">
      <td><strong>TOTAL TIME</strong></td>
      <td>Pre-processes + Cooking</td>
      <td><strong>5–6 hours</strong></td>
      <td><strong>Begin preparation minimum
      6 hours before service</strong></td>
    </tr>
  </tbody>
</table>
</div>
<p class="nota"><em>Product specification: pozole and other broths
are brought to the boil and held above 85°C while cooking and
throughout service. This exceeds both the ≥75°C cooking critical
limit (CCP1) and the ≥63°C hot-holding critical limit (CCP3) — it
is Órale's operating practice, not an independent critical limit
of either CCP.</em></p>

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
      <td>Pozole Rojo</td>
      <td>Pork, corn, chilli</td>
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
      <td>Nachos con Guacamole</td>
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
      <td>Chilaquiles</td>
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
      <td>Taco de Nopales</td>
      <td>Vegetable</td>
      <td>Hot &gt;63°C</td>
      <td>Gluten (tortilla). Low allergen risk.</td>
    </tr>
  </tbody>
</table>
</div>
<p class="nota"><em>The "Service temperature" column reflects
the hot-held component of each dish only. Any raw garnish or
cold sauce added to a dish after cooking — regardless of the
dish's listed service temperature — is governed by CCP1b, not
by the hot-holding critical limit (CCP3).</em></p>
`;

const SECCION_4 = `
<h2 id="sec-4-1">4.1 Street Sale with Domestic Kitchen</h2>
<p class="nota"><strong>Applies to the street-stall sale mode, on
each day authorised by Limerick City &amp; County Council.</strong></p>
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
          <li>≥75°C instantaneously at the core, or an
          equivalent time/temperature combination
          (≥70°C for 2 minutes)</li>
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
          <li>From &gt;63°C to ≤5°C within max. 4 hours</li>
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
          <li>Checked every hour with a probe thermometer</li>
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

<h2 id="sec-4-2">4.2 Production and Freezing (Fridays and Saturdays)</h2>
<p class="nota"><em>Friday and Saturday production and freezing
supply both sales modes.</em></p>
<p>Production flow for frozen storage and weekday sales:</p>
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
      <td>Planning the dish of the day</td>
      <td>
        <ul>
          <li>Each session is dedicated to one
          rotating menu item</li>
          <li>Production: 20 servings per session, limited
          by available storage capacity (30 frozen + 10
          refrigerated = 40 in total)</li>
          <li>Part is reserved refrigerated for immediate
          orders</li>
        </ul>
      </td>
    </tr>
    <tr class="alt">
      <td>2</td>
      <td>Pre-processes and cooking</td>
      <td>
        <ul>
          <li>Per flow 4.1 stages 1–4</li>
          <li>≥75°C instantaneously, or an equivalent
          combination ≥70°C for 2 minutes (CCP1)</li>
          <li>Start minimum 6 hours before
          delivery time</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>3</td>
      <td>Rapid cooling</td>
      <td>
        <ul>
          <li>From >63°C to ≤5°C within maximum 4 hours</li>
          <li>Ice bath in the sink</li>
          <li>Record in HACCP-02 (CCP2)</li>
        </ul>
      </td>
    </tr>
    <tr class="alt">
      <td>4</td>
      <td>Portioning and labelling</td>
      <td>
        <ul>
          <li>Portion into disposable 650 ml
          containers with lid</li>
          <li>Label each portion with:
            <ul>
              <li>Dish name</li>
              <li>Production date</li>
              <li>Freezing date</li>
              <li>Maximum consumption date
              (production + 3 months)</li>
            </ul>
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>5</td>
      <td>Immediate freezing</td>
      <td>
        <ul>
          <li>Place in drawers 1, 2 or 3 of the
          freezer (exclusive to Órale)</li>
          <li>Target temperature: ≤-18°C</li>
          <li>FIFO system: oldest to the front</li>
          <li>Record in HACCP-10 (CCP4)</li>
        </ul>
      </td>
    </tr>
    <tr class="alt">
      <td>6</td>
      <td>Frozen storage</td>
      <td>
        <ul>
          <li>Drawers 1, 2 and 3 labelled "ÓRALE"</li>
          <li>Drawer 4 labelled "PARTICULAR" —
          never mix</li>
          <li>Monitoring twice a day (HACCP-10)</li>
          <li>Maximum time: 3 months from production</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>
</div>

<h2 id="sec-4-3">4.3 Home Delivery via WhatsApp</h2>
<p>Order handling and delivery flow from
Apt 301, Richmond Court:</p>
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
      <td>Order receipt</td>
      <td>
        <ul>
          <li>Order received via WhatsApp</li>
          <li>Confirm dish, quantity and
          preference: hot or frozen</li>
          <li>Confirm delivery time</li>
        </ul>
      </td>
    </tr>
    <tr class="alt">
      <td>2</td>
      <td>Defrosting (frozen product only)</td>
      <td>
        <ul>
          <li>Applies only to product taken from the freezer.
          Refrigerated stock that has never been frozen skips
          this step — see stage 3</li>
          <li>ALWAYS defrost in the refrigerator
          at ≤5°C — never at room temperature</li>
          <li>Minimum time: 12–24 hours</li>
          <li>Once defrosted: do not refreeze</li>
          <li>Record in HACCP-11 (CCP5)</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>3</td>
      <td>Refrigerated stock (no defrosting required)</td>
      <td>
        <ul>
          <li>Applies to the servings kept refrigerated for
          immediate orders — production → rapid cooling
          (CCP2) → refrigeration ≤5°C, max. 4 days (CCP7) →
          reheating ≥70°C (CCP6) → hot delivery</li>
          <li>This stock is never frozen and never defrosted</li>
          <li>Verify the production date on the label before
          use; discard if more than 4 days have elapsed
          (CCP7)</li>
        </ul>
      </td>
    </tr>
    <tr class="alt">
      <td>4</td>
      <td>Reheating (hot delivery)</td>
      <td>
        <ul>
          <li>From either the defrosted stock (stage 2) or the
          refrigerated stock (stage 3)</li>
          <li>Heat to an internal temperature ≥70°C</li>
          <li>Verify with a probe thermometer</li>
          <li>Record in HACCP-11 (CCP6)</li>
          <li>Pack immediately after reaching
          temperature</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>5</td>
      <td>Frozen delivery (if requested by customer)</td>
      <td>
        <ul>
          <li>Remove from the freezer at the
          time of delivery</li>
          <li>Frozen food transport: maintain ≤-18°C
          throughout the journey. Use an insulated bag with
          ice packs where the journey requires it</li>
          <li>Inform the customer: store at -18°C
          and consume before the date on the label</li>
        </ul>
      </td>
    </tr>
    <tr class="alt">
      <td>6</td>
      <td>Delivery</td>
      <td>
        <ul>
          <li>Delivery from Apt 301, Richmond Court</li>
          <li>Verify container is intact and
          label is legible</li>
          <li>Record in HACCP-11</li>
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
      <th>Probability</th>
      <th>Severity</th>
      <th>Risk</th>
      <th>Control measure</th>
      <th>Is CCP?</th>
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
          <li>Verify temperature ≤5°C</li>
          <li>Approved supplier</li>
          <li>Visual inspection</li>
          <li>Prerequisite: supplier control and receiving
          traceability (§4.1, HACCP-04)</li>
        </ul>
      </td>
      <td>NO</td>
    </tr>
    <tr class="celda-riesgo-medio">
      <td>Refrigerated storage — raw material</td>
      <td>Bacterial growth due to incorrect temperature</td>
      <td>Cross-contamination with cleaning products</td>
      <td>Physical contamination</td>
      <td>2</td><td>3</td><td>6</td>
      <td>
        <ul>
          <li>Refrigerator ≤5°C</li>
          <li>Raw below / cooked above</li>
          <li>FIFO</li>
          <li>Prerequisite: domestic refrigerator organisation
          (§10.3)</li>
        </ul>
      </td>
      <td>NO</td>
    </tr>
    <tr class="celda-riesgo-alto">
      <td>Refrigerated storage — finished product</td>
      <td>Growth of pathogens and toxin formation in cooked
      product held under refrigeration</td>
      <td>Cross-contamination with cleaning products</td>
      <td>Physical contamination</td>
      <td>3</td><td>3</td><td>9</td>
      <td>
        <ul>
          <li>Refrigerator ≤5°C</li>
          <li>Maximum 4 days from production date</li>
          <li>Production date labelled on every portion</li>
        </ul>
      </td>
      <td>YES (CCP7)</td>
    </tr>
    <tr class="celda-riesgo-alto">
      <td>Preparation — dishes with further cooking</td>
      <td>Cross-contamination raw meat / ready-to-eat food</td>
      <td>Detergent residue on surfaces</td>
      <td>Utensil fragments</td>
      <td>3</td><td>3</td><td>9</td>
      <td>
        <ul>
          <li>Colour-coded boards</li>
          <li>Handwashing with hot water and soap</li>
          <li>Surface hygiene</li>
          <li>Prerequisite: raw/ready-to-eat separation
          (§4.1, ANNEX)</li>
        </ul>
      </td>
      <td>NO</td>
    </tr>
    <tr class="celda-riesgo-alto">
      <td>Preparation of dishes and ingredients with no
      further cooking (Nachos con Guacamole; guacamole and raw
      tomato salsa)</td>
      <td>Cross-contamination by vegetative pathogens and by
      the handler, with no subsequent step to eliminate it</td>
      <td>Detergent residue on surfaces</td>
      <td>Utensil fragments</td>
      <td>3</td><td>3</td><td>9</td>
      <td>
        <ul>
          <li>Green cutting board, exclusive to this
          preparation</li>
          <li>Handwashing with hot water and soap</li>
          <li>Surface hygiene</li>
          <li>See CCP1b critical limit (§6, points a–i)</li>
        </ul>
      </td>
      <td>YES (CCP1b)</td>
    </tr>
    <tr class="celda-riesgo-alto">
      <td>Incorporation of raw garnishes and cold sauces at
      service</td>
      <td>Cross-contamination by vegetative pathogens and by
      the handler when raw garnishes (lettuce, tomato,
      coriander, onion, radish, lime) or cold sauces (raw
      tomato salsa, guacamole) are added to hot dishes at the
      moment of service, with no subsequent step to eliminate
      it</td>
      <td>None</td>
      <td>None</td>
      <td>3</td><td>3</td><td>9</td>
      <td>
        <ul>
          <li>Clean utensil or glove only — never the bare
          hand</li>
          <li>≤5°C storage until incorporation</li>
          <li>Maximum 2 hours out of refrigeration during
          service</li>
        </ul>
      </td>
      <td>YES (CCP1b)</td>
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
      <td>Spore germination and multiplication of Clostridium
      perfringens and Bacillus cereus during slow cooling, and
      formation of heat-stable Staphylococcus aureus toxin.
      None of these hazards is controlled by cooking: spores
      survive heat treatment and S. aureus toxin resists heat
      once formed. The control is rapid cooling (CCP2) and hand
      hygiene (§10.1).</td>
      <td>None</td>
      <td>None</td>
      <td>3</td><td>3</td><td>9</td>
      <td>
        <ul>
          <li>From &gt;63°C to ≤5°C within max. 4 h</li>
          <li>Ice bath in the sink</li>
        </ul>
      </td>
      <td>YES (CCP2)</td>
    </tr>
    <tr class="celda-riesgo-alto">
      <td>Transport</td>
      <td>Break in the hot chain</td>
      <td>None</td>
      <td>None</td>
      <td>2</td><td>3</td><td>6</td>
      <td>
        <ul>
          <li>Covered chafing dishes</li>
          <li>Time &lt;1 h</li>
          <li>Temperature check before leaving the kitchen
          and on arrival</li>
        </ul>
      </td>
      <td>YES (CCP3)</td>
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
          <li>Checked every hour</li>
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
          <li>Prerequisite: personal hygiene and allergen
          communication (§10.1, §11.2)</li>
        </ul>
      </td>
      <td>NO</td>
    </tr>
    <tr class="celda-riesgo-alto">
      <td>Freezing</td>
      <td>Survival and multiplication of pathogens if freezing
      is not immediate or does not reach ≤-18°C; product
      deterioration from slow freezing</td>
      <td>None</td>
      <td>None</td>
      <td>2</td><td>3</td><td>6</td>
      <td>
        <ul>
          <li>Immediate freezing after rapid cooling</li>
          <li>≤-18°C continuous</li>
          <li>Record in HACCP-10</li>
        </ul>
      </td>
      <td>YES (CCP4)</td>
    </tr>
    <tr class="celda-riesgo-alto">
      <td>Defrosting</td>
      <td>Pathogen multiplication if defrosted at room
      temperature or above 5°C; recontamination from exudate</td>
      <td>None</td>
      <td>None</td>
      <td>2</td><td>3</td><td>6</td>
      <td>
        <ul>
          <li>Always defrost in the refrigerator ≤5°C</li>
          <li>Never refreeze</li>
          <li>Record in HACCP-11</li>
        </ul>
      </td>
      <td>YES (CCP5)</td>
    </tr>
    <tr class="celda-riesgo-alto">
      <td>Reheating for delivery</td>
      <td>Survival of vegetative pathogens if the core of the
      product does not reach ≥70°C before packing</td>
      <td>None</td>
      <td>None</td>
      <td>2</td><td>3</td><td>6</td>
      <td>
        <ul>
          <li>Probe thermometer check on every order</li>
          <li>Record in HACCP-11</li>
        </ul>
      </td>
      <td>YES (CCP6)</td>
    </tr>
    <tr class="celda-riesgo-medio">
      <td>Home delivery</td>
      <td>Loss of temperature during the journey</td>
      <td>None</td>
      <td>None</td>
      <td>2</td><td>2</td><td>4</td>
      <td>
        <ul>
          <li>Prerequisite: insulated bag; ≥63°C for hot
          delivery and ≤-18°C for frozen delivery throughout
          the journey (§12.2)</li>
        </ul>
      </td>
      <td>NO</td>
    </tr>
  </tbody>
</table>
</div>
`;

const SECCION_6 = `
<h2 id="sec-6-1">6.1 Decision Tree — CCP Determination</h2>
<p>Application of the Codex Alimentarius decision tree to each
stage identified in §5.2. The "Conclusion" column matches the
"Is CCP?" column of §5.2.</p>
<div class="tabla-wrapper">
<table class="tabla-ancha">
  <thead>
    <tr>
      <th>Stage</th>
      <th>Q1 Do preventive measures exist?</th>
      <th>Q2 Does it eliminate or reduce the hazard to an
      acceptable level?</th>
      <th>Q3 Could the hazard reach an unacceptable level?</th>
      <th>Q4 Will a subsequent step eliminate or reduce it?</th>
      <th>Conclusion</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Raw material receipt</td>
      <td>Yes</td>
      <td>No</td>
      <td>Yes</td>
      <td>Yes — cooking (CCP1)</td>
      <td>NO — prerequisite</td>
    </tr>
    <tr class="alt">
      <td>Refrigerated storage — raw material</td>
      <td>Yes</td>
      <td>No</td>
      <td>Yes</td>
      <td>Yes — cooking (CCP1)</td>
      <td>NO — prerequisite</td>
    </tr>
    <tr>
      <td>Refrigerated storage — finished product</td>
      <td>Yes</td>
      <td>No</td>
      <td>Yes</td>
      <td>No — reheating (CCP6) does not destroy heat-stable
      toxins</td>
      <td>YES (CCP7)</td>
    </tr>
    <tr class="alt">
      <td>Preparation — dishes with further cooking</td>
      <td>Yes</td>
      <td>No</td>
      <td>Yes</td>
      <td>Yes — cooking (CCP1)</td>
      <td>NO — prerequisite</td>
    </tr>
    <tr>
      <td>Preparation of dishes and ingredients with no
      further cooking</td>
      <td>Yes</td>
      <td>No</td>
      <td>Yes</td>
      <td>No — no cooking step follows</td>
      <td>YES (CCP1b)</td>
    </tr>
    <tr class="alt">
      <td>Incorporation of raw garnishes and cold sauces at
      service</td>
      <td>Yes</td>
      <td>No</td>
      <td>Yes</td>
      <td>No — added after hot-holding (CCP3), no step follows</td>
      <td>YES (CCP1b)</td>
    </tr>
    <tr>
      <td>Cooking</td>
      <td>Yes</td>
      <td>Yes — the tree concludes at Q2</td>
      <td>N/A</td>
      <td>N/A</td>
      <td>YES (CCP1)</td>
    </tr>
    <tr>
      <td>Rapid cooling</td>
      <td>Yes</td>
      <td>No</td>
      <td>Yes</td>
      <td>No — no subsequent step destroys heat-stable toxins</td>
      <td>YES (CCP2)</td>
    </tr>
    <tr class="alt">
      <td>Transport</td>
      <td>Yes</td>
      <td>No</td>
      <td>Yes</td>
      <td>No — part of the same continuous control as service</td>
      <td>YES (CCP3)</td>
    </tr>
    <tr>
      <td>Hot-holding during service</td>
      <td>Yes</td>
      <td>Yes — the tree concludes at Q2</td>
      <td>N/A</td>
      <td>N/A</td>
      <td>YES (CCP3)</td>
    </tr>
    <tr class="alt">
      <td>Customer service</td>
      <td>Yes</td>
      <td>No</td>
      <td>Judgement*</td>
      <td>Judgement*</td>
      <td>NO — prerequisite*</td>
    </tr>
    <tr>
      <td>Freezing</td>
      <td>Yes</td>
      <td>Yes — the tree concludes at Q2</td>
      <td>N/A</td>
      <td>N/A</td>
      <td>YES (CCP4)</td>
    </tr>
    <tr class="alt">
      <td>Defrosting</td>
      <td>Yes</td>
      <td>No</td>
      <td>Yes</td>
      <td>No — nothing corrects a failed defrost before
      reheating</td>
      <td>YES (CCP5)</td>
    </tr>
    <tr>
      <td>Reheating for delivery</td>
      <td>Yes</td>
      <td>Yes — the tree concludes at Q2</td>
      <td>N/A</td>
      <td>N/A</td>
      <td>YES (CCP6)</td>
    </tr>
    <tr class="alt">
      <td>Home delivery</td>
      <td>Yes</td>
      <td>No</td>
      <td>Judgement*</td>
      <td>Judgement*</td>
      <td>NO — prerequisite*</td>
    </tr>
  </tbody>
</table>
</div>
<p class="nota"><em>* These two stages do not fit the tree
cleanly: the declared hazard (contamination by the handler /
undeclared allergens; temperature loss during the delivery
journey) has no measurable critical limit in the current plan,
unlike the rest of the CCPs. The decision tree alone does not
resolve hazards without a numeric limit well — the
classification also relies on the additional "measurability"
criterion that any CCP requires. Both are reported as non-CCP /
prerequisite, matching §5.2, but flagged here as a grey area for
future review.</em></p>

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
      <td><strong>≥75°C</strong> instantaneously at the core
      of the product, or an equivalent combination
      <strong>≥70°C for 2 minutes</strong>.</td>
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

<h2 id="pcc1b">CCP 1b – Preparation and Addition of Ingredients
Without a Subsequent Heat Treatment</h2>
<p><em>Domestic kitchen and point of sale — cold preparation
area</em></p>
<div class="tabla-wrapper">
<table>
  <tbody>
    <tr>
      <td class="celda-header-verde">Hazard identified</td>
      <td class="celda-riesgo-alto">Cross-contamination by
      vegetative pathogens (Salmonella, Escherichia coli,
      Listeria monocytogenes) from raw food of animal origin,
      surfaces, utensils or the handler's hands, and
      contamination by Staphylococcus aureus toxin. No
      subsequent step eliminates or reduces these hazards
      before consumption.</td>
    </tr>
    <tr>
      <td class="celda-header-verde">Scope</td>
      <td>
        <p>Applies to any addition of raw or ready-to-eat
        ingredients to food after heat treatment, or to dishes
        served with no heat treatment after preparation.
        Comprises:</p>
        <ul>
          <li>Dishes served with no further cooking: Nachos
          con Guacamole</li>
          <li>Raw garnishes added after cooking: lettuce,
          tomato, coriander, onion, radish, lime</li>
          <li>Sauces and cold preparations with no kill step:
          raw tomato salsa, guacamole</li>
        </ul>
        <p>These ingredients undergo no heat treatment after
        preparation, so cooking (CCP1) and reheating (CCP6) are
        not a barrier to their associated hazards. Hot-holding
        (CCP3) does not cover them either, since they are added
        at the moment of service.</p>
      </td>
    </tr>
    <tr>
      <td class="celda-header-verde">Critical limit</td>
      <td>
        <p>Procedural control, verifiable by direct
        observation. No numeric parameter applies to
        cross-contamination hazards. The following are met in
        full and without exception:</p>
        <ol type="a">
          <li>Handwashing per the §10.1 procedure immediately
          before handling these ingredients</li>
          <li>Washing vegetables under running potable water
          before preparation</li>
          <li>Clean, disinfected work surface before
          starting</li>
          <li>Green cutting board, used exclusively for
          vegetables and ready-to-eat product; never the one
          used for raw meat</li>
          <li>Clean utensils used exclusively for this
          preparation</li>
          <li>No raw food of animal origin whatsoever on the
          work surface during preparation</li>
          <li>Storage at ≤5°C from preparation until the
          moment of service, both in the kitchen and at the
          point of sale</li>
          <li>Maximum time out of refrigeration during
          service: 2 hours. After that time, remaining product
          is discarded and replenished from refrigeration</li>
          <li>Handling only with a clean utensil or glove;
          never with the bare hand</li>
        </ol>
      </td>
    </tr>
    <tr>
      <td class="celda-header-verde">Monitoring</td>
      <td>Visual verification of compliance with the nine
      points by the person in charge of the kitchen, before
      starting each preparation of this kind. During the
      service session: verification of storage temperature
      with a disinfected probe thermometer at opening and every
      hour until close. Recorded in HACCP-12. Responsible:
      {{responsables.chef}}.</td>
    </tr>
    <tr>
      <td class="celda-header-verde">Corrective action</td>
      <td class="celda-riesgo-alto">
        <ul>
          <li>If any of the points is not met: stop the
          preparation, discard the product in progress, clean
          and disinfect the surface and utensils, and start
          again from the beginning</li>
          <li>If the product has exceeded ≤5°C or 2 hours out
          of refrigeration, it is discarded; it is not
          returned to refrigeration</li>
          <li>If the non-compliance is detected after the food
          has been served, apply the product withdrawal
          procedure (§7.4)</li>
          <li>Record in HACCP-07</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td class="celda-header-verde">Record</td>
      <td>Routine verification of the nine points: HACCP-12.
      Deviations: HACCP-07.</td>
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
      <td class="celda-riesgo-alto">Spore germination and
      multiplication of Clostridium perfringens and Bacillus
      cereus during slow cooling, and formation of heat-stable
      Staphylococcus aureus toxin. None of these hazards is
      controlled by cooking: spores survive heat treatment and
      S. aureus toxin resists heat once formed. The control is
      rapid cooling (CCP2) and hand hygiene (§10.1).</td>
    </tr>
    <tr>
      <td class="celda-header-verde">Critical limit</td>
      <td>From &gt;63°C to &lt;21°C within 2 hours; from &lt;21°C
      to ≤5°C within a further 4 hours. Maximum 6 hours in total.</td>
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
          <li>If ≤5°C is not reached after 6 hours: discard
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
<p class="nota"><strong>Applies to the street-stall sale mode, on
each day authorised by Limerick City &amp; County Council.</strong></p>
<p><em>Chafing dishes at the point of sale</em></p>
<div class="tabla-wrapper">
<table>
  <tbody>
    <tr>
      <td class="celda-header-verde">Hazard identified</td>
      <td class="celda-riesgo-alto">Growth of pathogens in cooked
      food that is not held at a safe temperature — from the
      moment it leaves the production kitchen through transport,
      stall setup and the whole service session.</td>
    </tr>
    <tr>
      <td class="celda-header-verde">Scope</td>
      <td>Applies from the moment the food leaves the production
      kitchen, through the entire transport, the stall setup and
      the whole service session.</td>
    </tr>
    <tr>
      <td class="celda-header-verde">Critical limit</td>
      <td>≥63°C at all times, from leaving the kitchen until the
      end of service.</td>
    </tr>
    <tr>
      <td class="celda-header-verde">Monitoring</td>
      <td>
        <p><strong>What?</strong> Temperature of the product</p>
        <p><strong>How?</strong> Calibrated probe thermometer</p>
        <p><strong>When?</strong> Before leaving the kitchen, on
        arrival at the point of sale, and every hour during
        service</p>
        <p><strong>Who?</strong> {{responsables.operaciones}}</p>
      </td>
    </tr>
    <tr>
      <td class="celda-header-verde">Corrective action</td>
      <td class="celda-riesgo-alto">
        <ul>
          <li>Remove the food from service</li>
          <li>Reheat to ≥70°C before resuming service</li>
          <li>If reheating is not possible, withdraw the food
          from service permanently</li>
          <li>Record in HACCP-07</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td class="celda-header-verde">Record</td>
      <td>Service temperature control sheet (HACCP-03).
      Recorded every hour.</td>
    </tr>
  </tbody>
</table>
</div>
<p class="nota"><em>The ≥63°C critical limit applies to food
that has undergone heat treatment. Raw garnishes and cold
sauces added at the moment of service are covered by CCP1b and
are kept at ≤5°C until they are added.</em></p>

<h2 id="pcc4">CCP 4 – Freezing</h2>
<p><em>Domestic freezer — drawers 1, 2 and 3
exclusive to Órale</em></p>
<div class="tabla-wrapper">
<table>
  <tbody>
    <tr>
      <td class="celda-header-verde">Hazard identified</td>
      <td class="celda-riesgo-alto">Bacterial growth if
      food does not reach ≤-18°C quickly or if the cold
      chain is interrupted during storage.</td>
    </tr>
    <tr>
      <td class="celda-header-verde">Critical limit</td>
      <td>≤-18°C in the freezer, maintained continuously.</td>
    </tr>
    <tr>
      <td class="celda-header-verde">Monitoring</td>
      <td>
        <p><strong>What?</strong> Freezer temperature</p>
        <p><strong>How?</strong> Fridge thermometer
        placed in the freezer</p>
        <p><strong>When?</strong> Twice a day:
        morning and evening</p>
        <p><strong>Who?</strong>
        {{responsables.chef}} or
        {{responsables.operaciones}}</p>
      </td>
    </tr>
    <tr>
      <td class="celda-header-verde">Corrective action</td>
      <td class="celda-riesgo-alto">
        <ul>
          <li>If the reading exceeds -18°C: check the door
          closes properly and adjust the thermostat</li>
          <li>Inspect the food: if it shows signs of thawing
          (softening, surface ice crystals, accumulated
          liquid), discard it</li>
          <li>Never refreeze under any circumstances</li>
          <li>Because the duration of the deviation cannot be
          determined from the monitoring frequency in place,
          discard the product whenever in doubt</li>
          <li>Record in HACCP-07</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td class="celda-header-verde">Record</td>
      <td>HACCP-10 — Freezer temperature control.
      Frequency: twice a day.</td>
    </tr>
  </tbody>
</table>
</div>

<h2 id="pcc5">CCP 5 – Defrosting</h2>
<p><em>Domestic refrigerator — Órale levels 1 and 2</em></p>
<div class="tabla-wrapper">
<table>
  <tbody>
    <tr>
      <td class="celda-header-verde">Hazard identified</td>
      <td class="celda-riesgo-alto">Bacterial proliferation
      if food is defrosted at room temperature or in an
      uncontrolled manner within the danger zone
      (5°C–63°C).</td>
    </tr>
    <tr>
      <td class="celda-header-verde">Critical limit</td>
      <td>
        <ul>
          <li>ALWAYS defrost in the refrigerator
          at ≤5°C</li>
          <li>Never defrost at room temperature</li>
          <li>Time: 12–24 hours in the refrigerator</li>
          <li>Once defrosted: consume or reheat within
          24 hours — never refreeze</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td class="celda-header-verde">Monitoring</td>
      <td>
        <p><strong>What?</strong> Refrigerator temperature
        and condition of the food</p>
        <p><strong>How?</strong> Fridge thermometer
        and visual check</p>
        <p><strong>When?</strong> At the start of
        defrosting and when removed from the refrigerator</p>
        <p><strong>Who?</strong>
        {{responsables.chef}} or
        {{responsables.operaciones}}</p>
      </td>
    </tr>
    <tr>
      <td class="celda-header-verde">Corrective action</td>
      <td class="celda-riesgo-alto">
        <ul>
          <li>If food is found defrosted at room
          temperature: discard</li>
          <li>If the food shows signs of spoilage:
          discard and record in HACCP-07</li>
          <li>Never refreeze</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td class="celda-header-verde">Record</td>
      <td>HACCP-11 — Defrosting and delivery record.</td>
    </tr>
  </tbody>
</table>
</div>

<h2 id="pcc6">CCP 6 – Reheating for Delivery</h2>
<p><em>Domestic kitchen — for hot deliveries
via WhatsApp</em></p>
<div class="tabla-wrapper">
<table>
  <tbody>
    <tr>
      <td class="celda-header-verde">Hazard identified</td>
      <td class="celda-riesgo-alto">Survival of pathogens
      if defrosted food does not reach a sufficient
      temperature before delivery.</td>
    </tr>
    <tr>
      <td class="celda-header-verde">Critical limit</td>
      <td>
        <ul>
          <li>Minimum internal temperature
          <strong>70°C</strong> before packing</li>
          <li>Verify at the coldest point of the food</li>
          <li>Pack and deliver immediately after
          reaching temperature</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td class="celda-header-verde">Monitoring</td>
      <td>
        <p><strong>What?</strong> Internal temperature
        of the reheated food</p>
        <p><strong>How?</strong> Calibrated digital
        probe thermometer</p>
        <p><strong>When?</strong> Before packing
        each hot order</p>
        <p><strong>Who?</strong>
        {{responsables.chef}} or
        {{responsables.operaciones}}</p>
      </td>
    </tr>
    <tr>
      <td class="celda-header-verde">Corrective action</td>
      <td class="celda-riesgo-alto">
        <ul>
          <li>If &lt;70°C: continue heating</li>
          <li>Do not deliver without verifying temperature</li>
          <li>Record in HACCP-11</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td class="celda-header-verde">Record</td>
      <td>HACCP-11 — Reheating temperature field
      mandatory for every hot delivery.</td>
    </tr>
  </tbody>
</table>
</div>
<p class="nota"><em>GN-16 §5.1 frames this value as recommended
good practice ("should"). Órale adopts it as a mandatory
critical limit. Hot-holding at ≥63°C (§4.3.10, §5.1) is what
constitutes a legal requirement.</em></p>

<h2 id="pcc7">CCP 7 – Refrigerated Storage of Finished Product</h2>
<p><em>Domestic refrigerator — Órale levels 1 and 2</em></p>
<div class="tabla-wrapper">
<table>
  <tbody>
    <tr>
      <td class="celda-header-verde">Hazard identified</td>
      <td class="celda-riesgo-alto">Growth of pathogens and toxin
      formation in cooked product stored under refrigeration.
      The subsequent reheating step (CCP6) destroys vegetative
      pathogens but does not destroy heat-stable toxins.</td>
    </tr>
    <tr>
      <td class="celda-header-verde">Critical limit</td>
      <td>≤5°C continuously, for a maximum of 4 days from the
      production date.</td>
    </tr>
    <tr>
      <td class="celda-header-verde">Monitoring</td>
      <td>
        <p><strong>What?</strong> Refrigerator temperature and
        the production date labelled on each portion</p>
        <p><strong>How?</strong> Visible fridge thermometer;
        visual check of the label</p>
        <p><strong>When?</strong> Twice a day</p>
        <p><strong>Who?</strong>
        {{responsables.chef}} or
        {{responsables.operaciones}}</p>
      </td>
    </tr>
    <tr>
      <td class="celda-header-verde">Corrective action</td>
      <td class="celda-riesgo-alto">
        <ul>
          <li>If the reading exceeds 5°C, measure the core
          temperature of the product</li>
          <li>If the product exceeds 5°C, discard it — the
          duration of the deviation cannot be determined from
          the monitoring frequency in place</li>
          <li>Discard any portion that exceeds 4 days from
          production</li>
          <li>Never freeze product that has remained
          refrigerated beyond that period</li>
          <li>Record in HACCP-07</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td class="celda-header-verde">Record</td>
      <td>HACCP-05.</td>
    </tr>
  </tbody>
</table>
</div>
`;

const SECCION_7 = `
<h2 id="sec-7-1">7.1 CCP Monitoring Summary</h2>
<div class="tabla-wrapper">
<table class="tabla-ancha">
  <thead>
    <tr>
      <th>CCP</th>
      <th>Hazard</th>
      <th>Critical limit</th>
      <th>What to measure?</th>
      <th>How?</th>
      <th>Frequency</th>
      <th>Responsible</th>
      <th>Record</th>
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
      <td>HACCP-01</td>
    </tr>
    <tr class="celda-riesgo-alto">
      <td>CCP1b</td>
      <td>Cross-contamination, no kill step</td>
      <td>Procedural — 9 points (§6, CCP1b)</td>
      <td>Compliance with the 9 points</td>
      <td>Direct observation + probe thermometer (≤5°C)</td>
      <td>Before each preparation; at opening and every hour
      during service</td>
      <td>{{responsables.chef}}</td>
      <td>HACCP-12. Deviations: HACCP-07.</td>
    </tr>
    <tr>
      <td>CCP2</td>
      <td>Growth in the danger zone</td>
      <td>≤5°C within 6 h</td>
      <td>Core temperature</td>
      <td>Probe thermometer</td>
      <td>Every 30–60 min</td>
      <td>{{responsables.chef}}</td>
      <td>HACCP-02</td>
    </tr>
    <tr class="celda-riesgo-alto">
      <td>CCP3</td>
      <td>Growth during service</td>
      <td>≥63°C during service</td>
      <td>Chafing dish temperature</td>
      <td>Probe thermometer</td>
      <td>Every hour</td>
      <td>{{responsables.operaciones}}</td>
      <td>HACCP-03</td>
    </tr>
    <tr>
      <td>CCP4</td>
      <td>Bacterial growth / cold chain failure</td>
      <td>≤-18°C</td>
      <td>Freezer temperature</td>
      <td>Fridge thermometer</td>
      <td>Twice a day</td>
      <td>{{responsables.chef}} / {{responsables.operaciones}}</td>
      <td>HACCP-10</td>
    </tr>
    <tr>
      <td>CCP5</td>
      <td>Bacterial proliferation during defrosting</td>
      <td>≤5°C in the refrigerator, 12–24 h</td>
      <td>Fridge temperature and food condition</td>
      <td>Fridge thermometer + visual check</td>
      <td>Start and removal of defrosting</td>
      <td>{{responsables.chef}} / {{responsables.operaciones}}</td>
      <td>HACCP-11</td>
    </tr>
    <tr class="celda-riesgo-alto">
      <td>CCP6</td>
      <td>Pathogen survival if not reheated</td>
      <td>≥70°C before packing</td>
      <td>Internal temperature</td>
      <td>Digital probe thermometer</td>
      <td>Before packing each hot order</td>
      <td>{{responsables.chef}} / {{responsables.operaciones}}</td>
      <td>HACCP-11</td>
    </tr>
    <tr class="celda-riesgo-alto">
      <td>CCP7</td>
      <td>Pathogen growth and toxin formation</td>
      <td>≤5°C, max. 4 days from production</td>
      <td>Fridge temperature and production date</td>
      <td>Visible thermometer + label check</td>
      <td>Twice a day</td>
      <td>{{responsables.chef}} / {{responsables.operaciones}}</td>
      <td>HACCP-05</td>
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
  (morning and evening). Target temperature ≤5°C.</li>
  <li>All readings are recorded on paper (HACCP forms) and in the
  digital management tools maintained by the Operations & Compliance
  Manager.</li>
</ul>

<h2 id="sec-7-3">7.3 General Corrective Action Protocol</h2>
<p>The specific corrective actions defined for each CCP in
Section 6 take precedence over this general protocol. This
protocol applies to deviations not covered by a specific
corrective action, and as a recording and investigation
procedure in every case.</p>
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
<p class="nota"><em>Exception — CCP2 (rapid cooling) deviation:
recovery by further cooking or reheating is NOT applicable.
Toxins preformed during slow cooling are heat-stable and are
not destroyed by heat. The affected product is discarded
without exception.</em></p>

<h2 id="sec-7-4">7.4 Product Withdrawal Procedure</h2>
<p>GN-16 §3.2 (legal requirement): where unsafe food has already
reached the consumer, the customer must be informed of the
reason for withdrawal, the product must be recovered, and the
HSE must be notified.</p>
<ul>
  <li><strong>Trigger:</strong> reasonable suspicion that a
  product already delivered or sold is unsafe</li>
  <li><strong>Identification of affected customers:</strong>
  HACCP-11 links the affected batch to the corresponding order
  references. The WhatsApp Business chat history links each
  order reference to the customer and their contact details.
  Both sources are consulted together.</li>
  <li><strong>Customer notification via WhatsApp:</strong>
  reason, instruction not to consume, refund or replacement</li>
  <li><strong>Mandatory notification to the HSE</strong> of the
  incident and the measures taken</li>
  <li><strong>Withdrawal</strong> of remaining product from the
  point of sale and the freezer, identified and segregated</li>
  <li><strong>Record:</strong> product, batch, quantity affected,
  customers contacted, action taken, date of HSE notification
  (HACCP-07)</li>
  <li><strong>Known limitation:</strong> street sales without a
  prior order do not allow customer identification; in that
  case, a public notice is issued through the company's channels</li>
</ul>
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
      <td>Check against ice water (0°C) and boiling water (100°C).
      Acceptance tolerance: ±1°C from the reference value. A
      reading outside this tolerance invalidates the thermometer:
      it is withdrawn from use and replaced before the next
      production or service session.</td>
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
<p>GN-16 §3.3 requires records to be kept at least until it can
reasonably be assumed that the food has been consumed. As
internal policy, Órale keeps all HACCP records for a minimum of
3 years, in physical format (HACCP folder) and/or in the
business's digital management tools. The Operations & Compliance
Manager is responsible for keeping them available for HSE
inspection at any time.</p>

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
      <td>Every hour during service</td>
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
    <tr class="alt">
      <td>HACCP-10</td>
      <td>Freezer temperature control</td>
      <td>Twice a day</td>
      <td>Domestic kitchen</td>
    </tr>
    <tr>
      <td>HACCP-11</td>
      <td>Defrosting and delivery record</td>
      <td>Every order</td>
      <td>Home delivery</td>
    </tr>
    <tr class="alt">
      <td>HACCP-12</td>
      <td>Cold preparation verification (CCP1b)</td>
      <td>Before each preparation and at every service opening</td>
      <td>Kitchen and point of sale</td>
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
  <li>Apply non-perfumed liquid soap, enough to form
  a good lather</li>
  <li>Rub all surfaces of hands for at least 20 seconds
  (GN-16 §4.3.6 recommends 10–15 seconds; Órale adopts a
  stricter standard), including the fingertips and thumbs
  (GN-16 §4.3.6), as well as the backs of hands, between
  fingers, nails and wrists</li>
  <li>Rinse with clean running water</li>
  <li>Dry with single-use disposable paper towels</li>
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
<p><strong>Sick staff:</strong> GN-16 §4.3.6 prohibits sick staff
from handling food, without specifying an exclusion period.
Prohibited from handling food with gastrointestinal symptoms,
vomiting, diarrhoea, skin infections on hands or active
respiratory infections. Mandatory notification to the person
in charge. As an internal food safety standard, Órale applies
exclusion from food handling during the episode of diarrhoea or
vomiting and for 48 hours after symptoms have stopped.</p>

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
  <li>Target temperature: ≤5°C. Checked twice a day. Recorded
  in HACCP-05.</li>
  <li>Do not overload the refrigerator — air circulation is
  needed to maintain a uniform temperature.</li>
</ul>
<p><strong>Business / personal use separation:</strong></p>
<ul>
  <li><strong>Levels 1 and 2:</strong> exclusive to Órale —
  labelled "ÓRALE". Refrigerated capacity: 10 servings of
  650 ml for daily sale.</li>
  <li><strong>Level 3:</strong> personal use
  — labelled "PARTICULAR"</li>
  <li>Never mix business and personal-use food
  on the same level</li>
</ul>
<p><strong>Shelf life of refrigerated product:</strong>
Servings kept refrigerated for daily sale are stored at ≤5°C
for a maximum of 4 days from the production date. Each serving
is labelled with production date and maximum consumption date.
Once that period has elapsed, the serving is discarded. Product
that has remained refrigerated beyond the established period is
never frozen. This period is Órale's internal policy; GN-16
does not set a figure for it.</p>

<h2 id="sec-10-3b">10.3b Freezer Organisation</h2>
<ul>
  <li><strong>Drawers 1, 2 and 3:</strong> exclusive
  to Órale — labelled "ÓRALE"</li>
  <li><strong>Drawer 4:</strong> personal use
  — labelled "PARTICULAR"</li>
  <li>Target temperature: ≤-18°C</li>
  <li>FIFO system: oldest production to the front</li>
  <li>Each portion labelled with: dish name,
  production date, freezing date,
  maximum consumption date</li>
  <li>Maximum Órale capacity: 30 servings
  (3 drawers × 10 servings of 650 ml)</li>
  <li>Temperature check twice a day
  — record in HACCP-10</li>
  <li>Freeze immediately after completing rapid cooling
  (CCP2)</li>
  <li>Never freeze food that has been in the danger zone
  for more than 4 hours</li>
  <li>Maximum storage time: 3 months from production</li>
</ul>
<p><strong>Production control by capacity:</strong>
Production per session is limited by available storage
capacity: 30 servings of frozen storage and 10 of short-term
refrigerated storage, 40 in total. No greater volume is
produced than can be rapidly cooled (CCP2) and immediately
stored at the appropriate temperature.</p>

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

<h2 id="sec-10-7">10.7 Pest Control</h2>
<p>GN-16 §4.2 includes pest control among the 14 prerequisites
of any food safety management system.</p>
<ul>
  <li><strong>Weekly visual inspection</strong> of the domestic
  kitchen: cupboards, skirting, behind appliances, waste area</li>
  <li><strong>Inspection of the point of sale</strong> before
  each setup</li>
  <li><strong>Preventive measures:</strong>
    <ul>
      <li>Food in airtight containers</li>
      <li>Waste in a bin with a tight-fitting lid, removed at
      the end of each day</li>
      <li>No standing water</li>
      <li>Immediate cleaning of spills</li>
      <li>Storage a minimum of 450 mm off the ground</li>
    </ul>
  </li>
  <li><strong>Protocol upon detection of pest activity:</strong>
    <ol>
      <li>Suspend production</li>
      <li>Discard all potentially exposed food</li>
      <li>Complete cleaning and disinfection of the affected area</li>
      <li>Contact a professional pest control service</li>
      <li>Do not resume production until absence of activity
      is confirmed</li>
    </ol>
  </li>
  <li>Inspections and incidents recorded in HACCP-07</li>
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
      <td>Pozole Rojo</td>
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
      <td>Nachos + Guacamole</td>
      <td>Yes (nachos)</td><td>Yes (cheese)</td><td>No</td>
      <td>No</td><td>No</td><td>Possible</td><td>No</td>
    </tr>
    <tr class="alt">
      <td>Chilaquiles</td>
      <td>Yes (tortilla)</td><td>Yes (cream/cheese)</td>
      <td>Possible</td><td>No</td><td>No</td><td>Possible</td><td>No</td>
    </tr>
    <tr>
      <td>Taco de Nopales</td>
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
<p class="nota"><em>The rows below on the preparation kitchen,
production scale and supplier traceability apply to production
regardless of sales channel. The rows on site verification, the
point of sale, the handwashing station, the Casual Trading
Licence and waste management at the point of sale apply
exclusively to the street-stall sale mode, on each day
authorised by Limerick City &amp; County Council.</em></p>
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
      <td>Site condition verification (GN-16 §4.3.1)</td>
      <td>
        <ul>
          <li>Hard, level standing surface (paving or tarmac)</li>
          <li>Adequate drainage for surface water if outdoors</li>
          <li>No nearby sources of contamination: waste bins,
          open drains, animals, dusty works</li>
          <li>Verified before each setup of the stall, recorded
          on the opening format</li>
        </ul>
      </td>
    </tr>
    <tr>
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
      <td>Cold Holding at the Point of Sale (CCP1b)</td>
      <td>
        <p>Raw garnishes and cold sauces are kept in a cold
        buffet unit with an ice bed throughout the service
        session. Mandatory conditions of use:</p>
        <ul>
          <li>The ice is made from potable water and handled
          with the same hygiene as a food</li>
          <li>Garnish containers are nested into the ice bed at
          least to the level of the product they contain. They
          are not simply set on top of the ice surface</li>
          <li>Ice is replenished during the session as it
          melts, so the level is maintained at all times</li>
          <li>Meltwater is drained or removed periodically and
          does not come into contact with the food</li>
          <li>Product temperature is verified with a
          disinfected probe thermometer at every opening and
          every hour during service, in line with CCP1b
          monitoring</li>
          <li>If the product exceeds 5°C, the CCP1b corrective
          action is applied</li>
        </ul>
        <p>If the ice bed fails to maintain ≤5°C throughout the
        session, it is replaced with an active refrigeration
        method (portable fridge or ice packs/cold accumulators)
        before the next service session.</p>
      </td>
    </tr>
    <tr class="alt">
      <td>Storage Off the Ground</td>
      <td>
        <ul>
          <li>Food must be stored off the ground
          (GN-16 §4.3.10, legal requirement)</li>
          <li>GN-16 recommends a minimum height of 450 mm,
          which Órale adopts</li>
          <li>Never place food directly on the ground</li>
        </ul>
      </td>
    </tr>
    <tr class="alt">
      <td>Handwashing Station — GN16 Specifications</td>
      <td>
        <ul>
          <li>Portable container with tap — 20 litres
          (minimum capacity recommended by GN-16 §4.3.5)</li>
          <li>Labelled: <em>"POTABLE WATER ONLY"</em></li>
          <li>Separate waste water container, labelled:
          <em>"WASTE WATER"</em></li>
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
          <li><strong>Packaging materials (GN-16 §3.3.4):</strong>
          a record is kept of the supplier of containers, lids,
          cutlery, bags and any other material in contact with
          food. Packaging supplier invoices are retained under
          the same retention policy as all other records.</li>
        </ul>
      </td>
    </tr>
    <tr class="alt">
      <td>Service containers</td>
      <td>
        <ul>
          <li>650 ml food-safe disposable containers
          with lid</li>
          <li>Single use only — never reused</li>
          <li>Customer receives food in the container</li>
          <li>Used containers: disposed of by the customer
          — not recovered or reused</li>
          <li>Unsold containers at end of service: disposed
          of together with the food</li>
          <li>Complies with GN16 §4.3.12: single use
          containers used only once</li>
          <li>Keep original container packaging as evidence
          of food-safe suitability</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>
</div>

<h3>Physical description of the stall (GN-16 §4.3.2, §4.3.3, §4.3.10)</h3>
<p class="nota"><strong>Applies to the street-stall sale mode, on
each day authorised by Limerick City &amp; County Council.</strong></p>
<p>The point of sale consists of one or two 160 cm folding
tables, with a durable plastic surface that is smooth,
impervious and washable, and a folding metal frame (GN-16
§4.3.3). Órale does not operate a van, trailer or movable
unit, so GN-16 §5.2 does not apply.</p>
<p><strong>Protection of exposed food:</strong> GN-16 §4.3.10
requires providing sneeze screens or other protection from the
public wherever food is exposed, or, alternatively, keeping the
food covered. Órale operates fully under the second approach:</p>
<ul>
  <li>Food is transported from the production kitchen in
  covered metal chafing dishes, closed before leaving.</li>
  <li>The chafing dishes remain closed during transport, stall
  setup and the entire service session.</li>
  <li>The lid is removed only for the seconds needed to serve
  each portion, with the handler positioned in front of the
  container.</li>
  <li>Food is never decanted into open containers at any point
  during the operation.</li>
</ul>
<p>As a result, food is not left exposed for a sustained period
at any stage. This condition is verified at every opening of
the stall.</p>
<p>The stall has no overhead cover or side enclosure. GN-16
§4.3.2 recommends these for outdoor stalls without making them
a legal requirement; food protection is ensured through the
closed-container system described above, in line with the
alternative provided for in GN-16 §4.3.10.</p>
<p><strong>Temperature maintenance at the point of sale:</strong>
hot food is held in covered metal chafing dishes, heated by two
food-safe alcohol burners per chafing dish.</p>
<p><strong>Mandatory setup sequence:</strong></p>
<ol>
  <li>Place the chafing dishes on the table</li>
  <li>Light the two alcohol burners on each chafing dish</li>
  <li>Verify with a disinfected probe thermometer that the
  food is at ≥63°C before starting service</li>
  <li>Do not start service until that temperature is confirmed</li>
</ol>
<p>During the session, food temperature is checked with a probe
thermometer every hour, recording the reading in HACCP-03.
Burner fuel level is also checked at each measurement and
replenished before it runs out.</p>
<p><strong>Corrective action</strong> if temperature falls below
63°C: remove the food from service, reheat it to ≥70°C before
resuming, and record the incident. If reheating on-site is not
possible, the food is permanently withdrawn from service.</p>
<p>Alcohol burners are positioned so as not to pose a risk of
food contamination or accidental contact with the public
(GN-16 §4.3.2).</p>
<p><strong>Weather contingency:</strong> if rain or wind
compromises food protection, service is suspended immediately,
food is covered and moved to a closed insulated container, and
the stall is packed away. Food is never served exposed to the
elements without effective protection.</p>
<p><strong>Lighting:</strong> the operation takes place
exclusively during daylight hours with sufficient natural
light. Órale does not operate the stall at night; should it do
so in future, artificial lighting with shatter-proof diffusers
or bulbs will be provided over areas of exposed food (GN-16
§4.3.2).</p>
<p>When not in use, the stall is stored clean and in a clean
place (GN-16 §4.3.2).</p>

<h2 id="sec-12-2">12.2 Home Delivery (WhatsApp)</h2>
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
      <td>Origin and channel</td>
      <td>
        <ul>
          <li>Origin: Apt 301, Richmond Court, Mount Kennett Place,
          Dock Road, Limerick V94 PY76</li>
          <li>Channel: orders received via WhatsApp</li>
        </ul>
      </td>
    </tr>
    <tr class="alt">
      <td>Delivery modes</td>
      <td>
        <ul>
          <li>Hot delivery: reheated to ≥70°C before packing
          for delivery (CCP6)</li>
          <li>Frozen delivery: on customer request, taken
          from the freezer at the time of delivery</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Mandatory labelling on every delivery</td>
      <td>
        <ul>
          <li>Dish name</li>
          <li>Production date</li>
          <li>Freezing date</li>
          <li>Storage instructions</li>
          <li>Reheating instructions: heat to ≥70°C before
          consuming</li>
        </ul>
      </td>
    </tr>
    <tr class="alt">
      <td>Transport</td>
      <td>
        <ul>
          <li>Transported in an insulated bag</li>
          <li>Hot delivery: maintain ≥63°C throughout
          transit</li>
          <li>Frozen delivery: maintain ≤-18°C throughout
          transit. Use ice packs where the journey requires it</li>
          <li>These requirements apply during transit, under
          Órale's responsibility — distinct from the storage
          instruction given to the customer for after delivery</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Product shelf life</td>
      <td>
        <ul>
          <li>Frozen product: up to 3 months from production
          (§10.3b)</li>
          <li>Refrigerated product for daily sale: maximum
          4 days from production, at ≤5°C (§10.3)</li>
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

  return `
<p>The following blank formats correspond to the mandatory records
described in Section 9.1. Print as needed. GN-16 §3.3 requires
keeping them at least until it can reasonably be assumed that the
food has been consumed; as internal policy, Órale keeps completed
copies for a minimum of 3 years.</p>

<h2 id="sec-13-1">13.1 Recording Formats (HACCP-01 to HACCP-12)</h2>

<h3 id="haccp-01">HACCP-01 – Cooking Temperature Control</h3>
<p><strong>Instructions for use:</strong> Record the internal
temperature of each cooked batch. Critical limit: &ge;75°C.</p>
<div class="tabla-wrapper">
<table class="tabla-ancha">
  <thead>
    <tr>
      <th>Date</th>
      <th>Dish/Batch</th>
      <th>Start time</th>
      <th>Internal temperature (°C)</th>
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
the cooling process. Critical limit: from &gt;63°C to ≤5°C within
a maximum of 6 hours.</p>
<div class="tabla-wrapper">
<table class="tabla-ancha">
  <thead>
    <tr>
      <th>Date</th>
      <th>Product/Batch</th>
      <th>Start time</th>
      <th>Temperature 30 min (°C)</th>
      <th>Temperature 1 h (°C)</th>
      <th>Temperature 2 h (°C)</th>
      <th>Final temperature (°C)</th>
      <th>≤5°C within 6h Yes/No</th>
      <th>Corrective action</th>
      <th>Responsible</th>
    </tr>
  </thead>
  <tbody>
${blankRows(10, 10)}  </tbody>
</table>
</div>

<h3 id="haccp-03">HACCP-03 – Service Temperature Control</h3>
<p class="nota"><strong>Applies to the street-stall sale mode, on
each day authorised by Limerick City &amp; County Council.</strong></p>
<p><strong>Instructions for use:</strong> Check the chafing dish every
hour during service. Critical limit: &ge;63°C at all times.</p>
<div class="tabla-wrapper">
<table class="tabla-ancha">
  <thead>
    <tr>
      <th>Date</th>
      <th>Product</th>
      <th>Measurement time</th>
      <th>Temperature (°C)</th>
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
every delivery. GN-16 §3.3 requires retaining records until food
can reasonably be assumed to have been consumed. As internal
policy, Órale retains records for food of animal origin for a
minimum of 3 years.</em></p>
<div class="tabla-wrapper tabla-ancha">
<table class="tabla-ancha">
  <thead>
    <tr>
      <th>Date</th>
      <th>Supplier (name & address)</th>
      <th>Product</th>
      <th>Quantity / Volume</th>
      <th>Animal origin Y/N</th>
      <th>Reception temperature (°C)</th>
      <th>Best before / Use by</th>
      <th>Packaging OK Y/N</th>
      <th>Appearance OK Y/N</th>
      <th>Accepted? Y/N</th>
      <th>Action if rejected</th>
      <th>Responsible</th>
    </tr>
  </thead>
  <tbody>
${blankRows(15, 12)}  </tbody>
</table>
</div>

<h3 id="haccp-05">HACCP-05 – Refrigerator Temperature Control</h3>
<p><strong>Instructions for use:</strong> Check twice daily (morning
and evening). Limit: ≤5°C.</p>
<div class="tabla-wrapper">
<table class="tabla-ancha">
  <thead>
    <tr>
      <th>Date</th>
      <th>Morning time</th>
      <th>Morning temperature (°C)</th>
      <th>&le;5°C Yes/No</th>
      <th>Evening time</th>
      <th>Evening temperature (°C)</th>
      <th>&le;5°C Yes/No</th>
      <th>Corrective action</th>
      <th>Responsible</th>
    </tr>
  </thead>
  <tbody>
${blankRows(31, 9)}  </tbody>
</table>
</div>

<h3 id="haccp-06">HACCP-06 – Daily Cleaning and Disinfection Log</h3>
<p><strong>Instructions for use:</strong> Complete at the end of each
session. One form per day. File in the HACCP folder.</p>
<div style="display:flex;gap:2rem;margin-bottom:1rem;font-size:0.9rem;">
  <span><strong>Date:</strong> _____ / _____ / _______</span>
  <span><strong>Session:</strong> &#9744; Kitchen &nbsp;&nbsp; &#9744; Point of sale</span>
</div>
<div class="tabla-wrapper tabla-ancha">
<table>
  <thead>
    <tr>
      <th>Area / Equipment</th>
      <th>Time</th>
      <th>Product used</th>
      <th>Rinsed? Yes/No</th>
      <th>Disinfected? Yes/No</th>
      <th>Responsible / Signature</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background:#F5F5F5;">
      <td style="font-style:italic;color:#555;">
        Domestic kitchen surfaces</td>
      <td></td><td></td><td></td><td></td><td></td>
    </tr>
    <tr style="background:#FFFFFF;">
      <td style="font-style:italic;color:#555;">
        Hob and extractor</td>
      <td></td><td></td><td></td><td></td><td></td>
    </tr>
    <tr style="background:#F5F5F5;">
      <td style="font-style:italic;color:#555;">
        Chopping boards</td>
      <td></td><td></td><td></td><td></td><td></td>
    </tr>
    <tr style="background:#FFFFFF;">
      <td style="font-style:italic;color:#555;">
        Chafing dishes</td>
      <td></td><td></td><td></td><td></td><td></td>
    </tr>
    <tr style="background:#F5F5F5;">
      <td style="font-style:italic;color:#555;">
        Point of sale table</td>
      <td></td><td></td><td></td><td></td><td></td>
    </tr>
    <tr style="background:#FFFFFF;">
      <td style="font-style:italic;color:#555;">
        Handwashing station</td>
      <td></td><td></td><td></td><td></td><td></td>
    </tr>
  </tbody>
</table>
</div>

<h3 id="haccp-07">HACCP-07 – Incident and Corrective Action Log</h3>
<p><strong>Instructions for use:</strong> Complete for any deviation
from a critical limit or customer complaint.</p>
<div class="tabla-wrapper">
<table class="tabla-ancha">
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
water (0°C) and boiling water (100°C). Acceptance tolerance:
±1°C from the reference value. A reading outside this tolerance
invalidates the thermometer: it is withdrawn from use and
replaced before the next production or service session.</p>
<div class="tabla-wrapper">
<table class="tabla-ancha">
  <thead>
    <tr>
      <th>Date</th>
      <th>Thermometer ID</th>
      <th>Ice water temperature (°C)</th>
      <th>&asymp;0°C Yes/No</th>
      <th>Boiling water temperature (°C)</th>
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
<table class="tabla-ancha">
  <thead>
    <tr>
      <th>Full name</th>
      <th>Role</th>
      <th>Course/Certification</th>
      <th>Level 1/2/3</th>
      <th>Training body</th>
      <th>Date obtained</th>
      <th>Renewal date</th>
      <th>Certificate Number</th>
      <th>Employee signature</th>
    </tr>
  </thead>
  <tbody>
${blankRows(10, 9)}  </tbody>
</table>
</div>

<h2 id="haccp-10">HACCP-10 — Freezer Temperature Control</h2>
<p class="nota"><em>Critical limit: ≤-18°C at all
times. Check twice a day.
Once defrosted, do not refreeze.</em></p>
<div class="tabla-wrapper">
<table class="tabla-ancha">
  <thead>
    <tr>
      <th>Date</th>
      <th>Morning time</th>
      <th>Morning temp. (°C)</th>
      <th>≤-18°C? Yes/No</th>
      <th>Evening time</th>
      <th>Evening temp. (°C)</th>
      <th>≤-18°C? Yes/No</th>
      <th>Contents (dish/batch)</th>
      <th>Corrective action</th>
      <th>Responsible</th>
    </tr>
  </thead>
  <tbody>
${blankRows(31, 10)}  </tbody>
</table>
</div>

<h2 id="haccp-11">HACCP-11 — Defrosting &amp; Delivery Record</h2>
<p class="nota"><em>Complete for every order.
Always defrost in the refrigerator.
Never at room temperature. Never refreeze.</em></p>
<div class="tabla-wrapper">
<table class="tabla-ancha">
  <thead>
    <tr>
      <th>Order date</th>
      <th>Order reference</th>
      <th>Dish</th>
      <th>Production / freezing date</th>
      <th>Quantity (portions)</th>
      <th>Defrosting start</th>
      <th>Fridge temp. (°C)</th>
      <th>Hot or frozen?</th>
      <th>Reheating temp. (°C)</th>
      <th>≥70°C? Yes/No</th>
      <th>Delivery time</th>
      <th>Responsible</th>
    </tr>
  </thead>
  <tbody>
${blankRows(20, 12)}  </tbody>
</table>
</div>

<h2 id="haccp-12">HACCP-12 — Cold Preparation Verification
(CCP1b)</h2>
<p class="nota"><em>Complete before each preparation of
ingredients with no subsequent heat treatment and at every
opening of a service session. All points must be met. If any
point is not met, apply the CCP1b corrective action and record
the deviation in HACCP-07.</em></p>
<div class="tabla-wrapper tabla-ancha">
<table class="tabla-ancha">
  <thead>
    <tr>
      <th>Date</th>
      <th>Time</th>
      <th>Preparation / dish</th>
      <th>Hands washed Y/N</th>
      <th>Vegetables washed Y/N</th>
      <th>Surface cleaned and disinfected Y/N</th>
      <th>Dedicated green board Y/N</th>
      <th>Dedicated utensils Y/N</th>
      <th>No raw animal-origin food on surface Y/N</th>
      <th>Holding temp. (°C)</th>
      <th>≤5°C? Y/N</th>
      <th>Handled with utensil or glove Y/N</th>
      <th>Responsible</th>
    </tr>
  </thead>
  <tbody>
${blankRows(20, 13)}  </tbody>
</table>
</div>
`;
})();

const ANEXO = `
<h2>Domestic Kitchen — check before each preparation session</h2>
<ul class="checklist">
  <li><label class="checklist-item">
    <input type="checkbox" class="checklist-check">
    <span>Digital probe thermometer (x2 operational and calibrated)</span>
  </label></li>
  <li><label class="checklist-item">
    <input type="checkbox" class="checklist-check">
    <span>Refrigerator thermometer (current reading ≤5°C)</span>
  </label></li>
  <li><label class="checklist-item">
    <input type="checkbox" class="checklist-check">
    <span>Freezer thermometer (current reading ≤-18°C)</span>
  </label></li>
  <li><label class="checklist-item">
    <input type="checkbox" class="checklist-check">
    <span>Spray alcohol to disinfect the probe between measurements</span>
  </label></li>
  <li><label class="checklist-item">
    <input type="checkbox" class="checklist-check">
    <span>Colour-coded cutting boards
  (red: raw meat, green: vegetables, yellow: poultry)</span>
  </label></li>
  <li><label class="checklist-item">
    <input type="checkbox" class="checklist-check">
    <span>Knives separated by use — sharpened, with individual
  guards</span>
  </label></li>
  <li><label class="checklist-item">
    <input type="checkbox" class="checklist-check">
    <span>Airtight containers labelled with product and date</span>
  </label></li>
  <li><label class="checklist-item">
    <input type="checkbox" class="checklist-check">
    <span>NON-perfumed liquid soap and disposable paper at the sink</span>
  </label></li>
  <li><label class="checklist-item">
    <input type="checkbox" class="checklist-check">
    <span>Clean aprons (minimum 2)</span>
  </label></li>
  <li><label class="checklist-item">
    <input type="checkbox" class="checklist-check">
    <span>Caps or hairnets</span>
  </label></li>
  <li><label class="checklist-item">
    <input type="checkbox" class="checklist-check">
    <span>LATEX-FREE disposable gloves, food-safe</span>
  </label></li>
  <li><label class="checklist-item">
    <input type="checkbox" class="checklist-check">
    <span>BLUE coloured waterproof dressings for cuts or wounds (GN16)</span>
  </label></li>
  <li><label class="checklist-item">
    <input type="checkbox" class="checklist-check">
    <span>Food-grade approved disinfectant</span>
  </label></li>
  <li><label class="checklist-item">
    <input type="checkbox" class="checklist-check">
    <span>Disposable cloths (not reusable rags)</span>
  </label></li>
  <li><label class="checklist-item">
    <input type="checkbox" class="checklist-check">
    <span>HACCP folder with printed HACCP-01 to HACCP-12 formats</span>
  </label></li>
  <li><label class="checklist-item">
    <input type="checkbox" class="checklist-check">
    <span>Portion date-labelling stickers (dish, production date,
  freezing date, use-by date)</span>
  </label></li>
  <li><label class="checklist-item">
    <input type="checkbox" class="checklist-check">
    <span>Food stored off the ground (GN-16 §4.3.10, legal
  requirement) — minimum height recommended 450mm</span>
  </label></li>
  <li><label class="checklist-item">
    <input type="checkbox" class="checklist-check">
    <span>Freezer drawers labelled: "ÓRALE" (1-3) and "PARTICULAR" (4)</span>
  </label></li>
  <li><label class="checklist-item">
    <input type="checkbox" class="checklist-check">
    <span>Refrigerator levels labelled: "ÓRALE" (1-2) and "PARTICULAR" (3)</span>
  </label></li>
</ul>

<h2>Point of Sale — check before each outing</h2>
<p class="nota"><strong>Applies to the street-stall sale mode, on
each day authorised by Limerick City &amp; County Council.</strong></p>
<ul class="checklist">
  <li><label class="checklist-item">
    <input type="checkbox" class="checklist-check">
    <span>Portable container with tap — 20 litres (minimum
  capacity recommended by GN-16 §4.3.5) — labelled
  "POTABLE WATER ONLY"</span>
  </label></li>
  <li><label class="checklist-item">
    <input type="checkbox" class="checklist-check">
    <span>Wide-mouth container for waste water — labelled
  "WASTE WATER"</span>
  </label></li>
  <li><label class="checklist-item">
    <input type="checkbox" class="checklist-check">
    <span>NON-perfumed liquid soap and disposable paper</span>
  </label></li>
  <li><label class="checklist-item">
    <input type="checkbox" class="checklist-check">
    <span>Hand sanitiser gel (complementary — NOT a substitute
  for handwashing)</span>
  </label></li>
  <li><label class="checklist-item">
    <input type="checkbox" class="checklist-check">
    <span>Chafing dishes with tight-fitting lid (minimum 2, pre-heated)</span>
  </label></li>
  <li><label class="checklist-item">
    <input type="checkbox" class="checklist-check">
    <span>Sneeze screen or covers to protect exposed food
  (GN16 §4.3.10)</span>
  </label></li>
  <li><label class="checklist-item">
    <input type="checkbox" class="checklist-check">
    <span>Insulated bags or carriers</span>
  </label></li>
  <li><label class="checklist-item">
    <input type="checkbox" class="checklist-check">
    <span>Work table with washable surface (minimum 450mm
  off the ground)</span>
  </label></li>
  <li><label class="checklist-item">
    <input type="checkbox" class="checklist-check">
    <span>Waste bin with TIGHT-FITTING LID (GN16 §4.3.8)</span>
  </label></li>
  <li><label class="checklist-item">
    <input type="checkbox" class="checklist-check">
    <span>Allergen signage visible to the customer</span>
  </label></li>
  <li><label class="checklist-item">
    <input type="checkbox" class="checklist-check">
    <span>Probe thermometer (point-of-sale unit)</span>
  </label></li>
  <li><label class="checklist-item">
    <input type="checkbox" class="checklist-check">
    <span>Printed copy of current Casual Trading Licence</span>
  </label></li>
  <li><label class="checklist-item">
    <input type="checkbox" class="checklist-check">
    <span>Printed copy of current HACCP Plan</span>
  </label></li>
  <li><label class="checklist-item">
    <input type="checkbox" class="checklist-check">
    <span>HACCP-03 and HACCP-06 formats printed for the shift</span>
  </label></li>
  <li><label class="checklist-item">
    <input type="checkbox" class="checklist-check">
    <span>Pens for recording</span>
  </label></li>
  <li><label class="checklist-item">
    <input type="checkbox" class="checklist-check">
    <span>Food and equipment never in contact with the ground</span>
  </label></li>
  <li><label class="checklist-item">
    <input type="checkbox" class="checklist-check">
    <span>Cold buffet unit with enough potable-water ice for the
  whole session, plus reserve for replenishment</span>
  </label></li>
  <li><label class="checklist-item">
    <input type="checkbox" class="checklist-check">
    <span>Probe thermometer to verify raw garnishes and cold
  sauces</span>
  </label></li>
</ul>

<h2>Home Delivery (WhatsApp) — check before every delivery</h2>
<ul class="checklist">
  <li><label class="checklist-item">
    <input type="checkbox" class="checklist-check">
    <span>Insulated bag for transport</span>
  </label></li>
  <li><label class="checklist-item">
    <input type="checkbox" class="checklist-check">
    <span>Probe thermometer to verify reheating ≥70°C</span>
  </label></li>
  <li><label class="checklist-item">
    <input type="checkbox" class="checklist-check">
    <span>Product labels with production date, freezing date,
  and storage and reheating instructions</span>
  </label></li>
  <li><label class="checklist-item">
    <input type="checkbox" class="checklist-check">
    <span>HACCP-11 format available to record every delivery</span>
  </label></li>
</ul>

<p class="nota"><em>This checklist is based on the requirements of FSAI
Guidance Note No. 16 Food Stalls (Revision 2), applicable to high-risk
food stall activities. Recommended by HSE Environmental Health,
Limerick.</em></p>
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
legislation.</p>

<h2>Notification and registration (GN-16 §2.2 and §2.3)</h2>
<p>GN-16 §2.2 requires the operator to notify the HSE of each unit
of its food business before beginning to operate it. GN-16 §2.3
requires that the establishment where the food is produced be
notified and remain subject to inspection, even where it is a
private dwelling.</p>
<p>The production kitchen and the point of sale are distinct
units for notification purposes. Approval of one does not
substitute for registration of the other.</p>
<p><strong>Órale's operating rule:</strong></p>
<ul>
  <li>No activity begins at any point of sale that has not been
  previously notified and registered with the HSE.</li>
  <li>No food is produced at any establishment that has not been
  notified to the HSE and remains subject to inspection.</li>
  <li>Any change to the production kitchen, to the sale locations
  or to the activities carried out is notified to the HSE in
  writing before it is applied.</li>
  <li>A copy of the registration confirmation is kept and remains
  available during operations (GN-16 §2.2).</li>
  <li>Street-stall sale requires that unit to be notified and
  registered with the HSE, independently of the registration of
  the production establishment. Authorisation from Limerick City
  & County Council enables the location; it does not substitute
  for the stall's sanitary registration.</li>
</ul>
`;

const FORMATOS_RESUMEN = `
<p>All recording formats must be printed and kept in
the physical HACCP folder available during daily
operation.</p>
<div class="tabla-wrapper">
<table class="tabla-ancha">
  <thead>
    <tr>
      <th>Code</th>
      <th>Format name</th>
      <th>Related CCP</th>
      <th>Frequency</th>
      <th>Applies to</th>
      <th>Download</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>HACCP-01</td>
      <td>Cooking temperature control</td>
      <td>CCP1</td>
      <td>Each cooked batch</td>
      <td>Domestic kitchen</td>
      <td><a href="{{formatosUrl.en}}/HACCP-01_EN.docx">Download DOCX</a></td>
    </tr>
    <tr class="alt">
      <td>HACCP-02</td>
      <td>Rapid cooling control</td>
      <td>CCP2</td>
      <td>Each cooling</td>
      <td>Domestic kitchen</td>
      <td><a href="{{formatosUrl.en}}/HACCP-02_EN.docx">Download DOCX</a></td>
    </tr>
    <tr>
      <td>HACCP-03</td>
      <td>Service temperature control</td>
      <td>CCP3</td>
      <td>Every hour during service</td>
      <td>Point of sale</td>
      <td><a href="{{formatosUrl.en}}/HACCP-03_EN.docx">Download DOCX</a></td>
    </tr>
    <tr class="alt">
      <td>HACCP-04</td>
      <td>Receiving and traceability control</td>
      <td>—</td>
      <td>Each supplier delivery</td>
      <td>Domestic kitchen</td>
      <td><a href="{{formatosUrl.en}}/HACCP-04_EN.docx">Download DOCX</a></td>
    </tr>
    <tr>
      <td>HACCP-05</td>
      <td>Refrigerator temperature control</td>
      <td>CCP7</td>
      <td>Twice a day</td>
      <td>Domestic kitchen</td>
      <td><a href="{{formatosUrl.en}}/HACCP-05_EN.docx">Download DOCX</a></td>
    </tr>
    <tr class="alt">
      <td>HACCP-06</td>
      <td>Cleaning and disinfection log</td>
      <td>—</td>
      <td>At the close of each day</td>
      <td>Kitchen and point of sale</td>
      <td><a href="{{formatosUrl.en}}/HACCP-06_EN.docx">Download DOCX</a></td>
    </tr>
    <tr>
      <td>HACCP-07</td>
      <td>Incident and corrective action log</td>
      <td>All</td>
      <td>For each incident</td>
      <td>All modalities</td>
      <td><a href="{{formatosUrl.en}}/HACCP-07_EN.docx">Download DOCX</a></td>
    </tr>
    <tr class="alt">
      <td>HACCP-08</td>
      <td>Thermometer calibration log</td>
      <td>—</td>
      <td>Monthly</td>
      <td>All modalities</td>
      <td><a href="{{formatosUrl.en}}/HACCP-08_EN.docx">Download DOCX</a></td>
    </tr>
    <tr>
      <td>HACCP-09</td>
      <td>Staff training log</td>
      <td>—</td>
      <td>Onboarding + annual</td>
      <td>All modalities</td>
      <td><a href="{{formatosUrl.en}}/HACCP-09_EN.docx">Download DOCX</a></td>
    </tr>
    <tr class="alt">
      <td>HACCP-10</td>
      <td>Freezer temperature control</td>
      <td>CCP4</td>
      <td>Twice a day</td>
      <td>Domestic kitchen</td>
      <td><a href="{{formatosUrl.en}}/HACCP-10_EN.docx">Download DOCX</a></td>
    </tr>
    <tr>
      <td>HACCP-11</td>
      <td>Defrosting and delivery record</td>
      <td>CCP5 / CCP6</td>
      <td>Each WhatsApp order</td>
      <td>Home delivery</td>
      <td><a href="{{formatosUrl.en}}/HACCP-11_EN.docx">Download DOCX</a></td>
    </tr>
    <tr class="alt">
      <td>HACCP-12</td>
      <td>Cold preparation verification</td>
      <td>CCP1b</td>
      <td>Before each preparation and at every service opening</td>
      <td>Kitchen and point of sale</td>
      <td><a href="{{formatosUrl.en}}/HACCP-12_EN.docx">Download DOCX</a></td>
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
