# Auditoría de Metodología HACCP — Plan Órale v1.3

**Fecha de auditoría:** 2026-08-17
**Archivos auditados:**
- `docs/haccp/es/HACCP_Orale_v1.3_ES.html`
- `docs/haccp/en/HACCP_Orale_v1.3_EN.html`

**Marco de evaluación:** los siete principios HACCP del Codex Alimentarius (CXC 1-1969, Anexo "HACCP System and Guidelines for its Application"), exigidos por el Artículo 5 del Reglamento (CE) 852/2004 y referenciados en GN-16 §4.2 ("Food stall operators must have procedures in place based on the principles of HACCP... to demonstrate... compliance with Article 5 of Regulation (EC) No 852/2004").

**Alcance:** esta auditoría evalúa la **coherencia metodológica del sistema HACCP como sistema** — no repite el contenido regulatorio ya auditado en `GN16_audit_2026-08-16.md` (cifras, verbos "must/should", omisiones temáticas de GN-16). No se modificó ningún archivo.

**Regla de clasificación aplicada:** todo hallazgo que cite una norma (GN-16, Reg. 852/2004, o el marco Codex de 7 principios que esta misma tarea me pide aplicar) se marca **NORMATIVO** y cita su fuente exacta. Todo hallazgo que dependa de juicio profesional sin una norma citable de respaldo se marca **CRITERIO**.

---

## 1. Resumen ejecutivo

El plan documenta seis PCC formales con tablas completas (peligro/límite/monitoreo/acción correctiva/registro) y en general sigue una estructura HACCP reconocible. Sin embargo, el sistema presenta **fallos de coherencia interna del mismo tipo que el precedente (PCC3)**, no resueltos por esa corrección anterior:

1. **§7.1 (Resumen de Monitoreo de PCCs) solo lista PCC1, PCC2 y PCC3** — PCC4 (Congelación), PCC5 (Descongelación) y PCC6 (Recalentamiento), aunque están completamente definidos en §6, no aparecen en el resumen consolidado que un inspector o un nuevo empleado usaría como referencia rápida. **(M01, NORMATIVO — Principio 4)**
2. **El límite crítico de PCC1 agrupa cuatro exigencias de temperatura distintas** (cocción inicial, recalentado en punto de venta, mantenimiento de caldo >85°C, mantenimiento en caliente ≥63°C) pero su monitoreo y registro (HACCP-01) solo cubren la primera. Tres de los cuatro límites declarados bajo PCC1 no tienen monitoreo propio bajo ese PCC — el mismo patrón que el fallo de PCC3 ya corregido. **(M02, NORMATIVO — Principios 3/4, CRÍTICO)**
3. **La tabla de análisis de peligros (§5.2) marca "¿Es PCC?: SÍ" en cinco etapas** (recepción de materia prima, almacenamiento refrigerado, preparación, transporte, atención al cliente) que no tienen sección §6 propia, ni límite crítico, ni acción correctiva formal — son PCC declarados sin desarrollar, o prerrequisitos mal etiquetados en una columna que literalmente pregunta "¿Es PCC?". **(M03, NORMATIVO — Principio 2, análisis con árbol de decisión)**
4. **La persona responsable de "implementación y mantenimiento del plan HACCP" (Operations & Compliance Manager) no tiene, según el propio texto, formación HACCP acreditada** — solo un compromiso de obtenerla en 6 meses — pese a que GN-16 §4.3.13 (must) exige formación ya recibida para quien desarrolla y mantiene el sistema. El Director, firmante del documento, no tiene ninguna formación documentada. **(M04, NORMATIVO — GN-16 §4.3.13, CRÍTICO)**
5. **El análisis de peligros no nombra específicamente *C. perfringens*, *B. cereus* ni la toxina de *S. aureus*** en ningún peligro asociado a cocción/enfriamiento/recalentado — usa lenguaje genérico ("growth of pathogens"), pese a ser precisamente el perfil de riesgo dominante de un proceso cocinar→enfriar→refrigerar/congelar→recalentar con caldos y proteínas densas. Esto se conecta con un segundo hallazgo: el protocolo general de acción correctiva (§7.3) ofrece "más cocción" como opción de recuperación sin excluir explícitamente un fallo de PCC2, donde recalentar no destruye toxinas termoestables. **(M05/M09, Principio 1, ver detalle)**
6. **El flujo de pedido por WhatsApp (§4.3) no tiene una rama para el stock refrigerado (nunca congelado) reservado para "pedidos inmediatos"** — el diagrama asume que toda entrega caliente pasa por descongelación (PCC5), pero ese stock, por definición, nunca se congela ni descongela. **(M06, Principio 9, CRÍTICO)**
7. El formulario que el propio plan designa como "fuente primaria" para identificar al cliente ante una retirada de producto (HACCP-11) **no tiene columna de identificación del cliente**. **(M07, Principio 7)**

Ningún hallazgo de esta auditoría es una invención de norma: M01, M02, M03 y M09 se evalúan contra el marco de los 7 principios Codex que esta tarea explícitamente ordena aplicar; M04 cita GN-16 §4.3.13 literal; M05 es una observación de suficiencia científica del análisis de peligros (Principio 1 exige fundamentación, no cifras de una norma específica); M06 y M07 son incoherencias verificables directamente contra el propio texto del plan.

| # | Severidad | Principio afectado | Naturaleza |
|---|---|---|---|
| M01 | Alta | 4 (Monitoreo) | Normativo (marco Codex) |
| M02 | Alta — CRÍTICO | 3/4 (Límites/Monitoreo) | Normativo (marco Codex), análogo al precedente PCC3 |
| M03 | Alta | 2 (Determinación de PCC) | Normativo (árbol de decisión Codex) |
| M04 | Alta — CRÍTICO | Roles/competencia | Normativo (GN-16 §4.3.13, must) |
| M05 | Media-Alta | 1 (Análisis de peligros) | Fundamentación científica |
| M06 | Alta — CRÍTICO | 9 (coherencia de flujos, ver marco de la tarea) | Verificable en el propio texto |
| M07 | Media | 7 (Registros) / trazabilidad | Verificable en el propio texto |
| M08–M13 | Media/Baja | Varios | Ver secciones 2–8 |

---

## 2. Evaluación por principio (Codex, 1 a 7)

| Principio | ¿Satisfecho? | Evidencia | Brecha |
|---|---|---|---|
| **1. Análisis de peligros** | Parcial | §3.2 y §5.2 identifican peligros biológicos/químicos/físicos por etapa, con probabilidad×severidad. Es sistemático, no solo una lista. | Genérico en los puntos donde más importa: ni PCC2 ni la fila "Rapid cooling" de §5.2 nombran *C. perfringens* / *B. cereus* — los esporulados que sobreviven la cocción y son la razón real de la curva de enfriamiento en dos tramos. Ver M05. |
| **2. Determinación de PCC** | Parcial | PCC1–PCC3 están bien fundamentados: cada uno es la única barrera contra un peligro que ningún paso posterior neutraliza. | §5.2 marca "¿Es PCC?: SÍ" en 5 etapas sin sección §6 propia (M03). Cuestionable si "Transporte" y "Atención al cliente" superan el árbol de decisión Codex tal como están definidos hoy. |
| **3. Límites críticos** | Parcial | Todos los límites son numéricos, con unidad y termómetro como método — no hay ningún límite vago tipo "adecuado" o "suficiente" en ningún PCC. | PCC1 agrupa 4 límites de naturaleza distinta bajo un solo PCC sin que monitoreo/registro cubran los 4 (M02). |
| **4. Monitoreo** | Parcial | Cada PCC1–6 define qué/cómo/cuándo/quién explícitamente — no hay ninguna casilla vacía. Las frecuencias (cada lote, cada 30-60 min, cada hora, 2x/día) son verosímiles para detectar la pérdida de control antes de la venta. | §7.1 (el resumen que consolida todo esto) omite PCC4/5/6 (M01). Tres de los 4 límites de PCC1 no tienen monitoreo definido (M02). |
| **5. Acciones correctivas** | Parcial | Cada PCC1–6 especifica qué hacer con el producto (continuar cocción, subdividir, descartar, retirar de servicio) y todos apuntan a HACCP-07 o HACCP-11 para el registro del incidente. Ninguna acción correctiva depende de un dato que su propio monitoreo no produzca — el fallo tipo-precedente ya no existe en PCC1–6 tomados individualmente. | El protocolo GENERAL (§7.3) sí introduce el riesgo: ofrece "más cocción" como recuperación sin excluir un fallo de PCC2 (M09). PCC2 en sí mismo NO propone recalentar — es correcto — pero el protocolo general que lo envuelve no lo distingue. |
| **6. Verificación** | Sí | §8.1 define 5 actividades de verificación distintas del monitoreo diario: revisión semanal de registros, calibración mensual de termómetros (HACCP-08), auditoría interna trimestral, revisión del plan semestral, e inspección HSE. Es una verificación real, con frecuencia y responsable, no un enunciado vacío. | Ninguna de importancia metodológica. HACCP-08 no fija una tolerancia numérica de calibración (p. ej. ±1°C) — CRITERIO, no exigido por GN-16. |
| **7. Registros** | Parcial | 11 formatos HACCP cubren prácticamente cada etapa con columnas de responsable y acción correctiva. §9 fija política de retención. | Ver tabla PCC↔registro (Sección 3): HACCP-11 hace triple función (PCC5+PCC6+trazabilidad de entrega) sin columna de cliente, pese a que §7.4 lo designa como fuente de esa identificación (M07). |

---

## 3. Tabla PCC ↔ límite ↔ monitoreo ↔ acción correctiva ↔ registro

| PCC | Límite crítico | Monitoreo (qué/cómo/cuándo/quién) | Acción correctiva | Registro |
|---|---|---|---|---|
| **PCC1 — Cocción** | ≥75°C instantáneo o ≥70°C/2min **+ 3 límites adicionales agrupados** (ver M02): 70°C recalentado en punto de venta; caldo >85°C; mantenimiento en caliente ≥63°C | Temp. interna, termómetro sonda, **al final de cada cocción**, Chef | Si <75°C continuar cocción; si hay duda, descartar lote; HACCP-07 | **HACCP-01** — pero HACCP-01 solo tiene columna para el límite de cocción inicial (≥75°C), no para los otros 3 |
| **PCC2 — Enfriamiento rápido** | >63→<21°C en 2h; <21→≤5°C en 4h más; máx. 6h total | Temp. central, sonda, a los 30min/1h/2h, Chef | Si no <21°C a las 2h: subdividir + hielo; si no ≤5°C a las 6h: **descartar**, HACCP-07 | **HACCP-02** — completo y coherente |
| **PCC3 — Mantenimiento en caliente** (solo puesto) | ≥63°C en todo momento | Temp. chafing dish, sonda, llegada + cada hora, Ops. Manager | Retirar si <63°C; no servir si <63°C >30min; descartar, HACCP-07 | **HACCP-03** — completo y coherente (ya corregido en ronda anterior) |
| **PCC4 — Congelación** | ≤-18°C; congelar inmediatamente tras enfriamiento; nunca >4h en zona de peligro; máx. 3 meses | Temp. congelador, termómetro, 2x/día, Chef u Ops. | Ajustar puerta; si >-12°C >2h evaluar descongelación parcial; nunca recongelar; HACCP-07 | **HACCP-10** — completo, pero **ausente de §7.1** (M01) |
| **PCC5 — Descongelación** | Siempre en refrigerador ≤5°C; 12–24h; consumir/recalentar en 24h; nunca recongelar | Temp. refrigerador + inspección visual, inicio y retiro, Chef u Ops. | Descartar si a temp. ambiente o con signos de deterioro; nunca recongelar | **HACCP-11** — completo, pero **ausente de §7.1** (M01) |
| **PCC6 — Recalentamiento para entrega** | ≥70°C interno antes de empacar | Temp. interna, sonda digital, antes de empacar cada pedido, Chef u Ops. | Si <70°C continuar calentando; no entregar sin verificar; HACCP-11 | **HACCP-11** (mismo formato que PCC5) — completo, pero **ausente de §7.1** (M01) |

**Formatos huérfanos o con función ambigua fuera de la tabla PCC1–6:**

| Formato | Qué registra | ¿Asociado a un PCC declarado? |
|---|---|---|
| HACCP-04 (Recepción/Trazabilidad) | Recepción de mercancía | No — corresponde a "Raw material receipt", una de las 5 etapas marcadas "¿Es PCC?: SÍ" en §5.2 sin sección §6 (M03) |
| HACCP-05 (Refrigerador) | Temp. refrigerador, 2x/día, **con columna de acción correctiva** | No — corresponde a "Refrigerated storage", también marcada "SÍ" en §5.2 sin sección §6. Funcionalmente es un PCC completo (límite+monitoreo+CA+registro) que nunca fue declarado como tal (M03) |
| HACCP-06 (Limpieza) | Limpieza diaria | Prerrequisito (§10.2), correctamente no tratado como PCC |
| HACCP-07 (Incidentes) | Log transversal de desviaciones | Correcto — formato de soporte para todos los PCC |
| HACCP-08 (Calibración) | Calibración de termómetros | Correcto — verificación (Principio 6), no monitoreo de PCC |
| HACCP-09 (Formación) | Capacitación del personal | Prerrequisito, correcto |

---

## 4. PCC cuestionables y etapas sin PCC

### M03 — Detalle: §5.2 marca "¿Es PCC?: SÍ" en 5 etapas sin desarrollo formal en §6

| Etapa (§5.2) | Peligro declarado | ¿Existe §6 PCC-N? | Análisis con árbol de decisión Codex (P1–P4) |
|---|---|---|---|
| Raw material receipt | Salmonella, E. coli, Listeria; residuos de pesticida; cuerpos extraños | No | P4 (¿un paso posterior elimina/reduce el peligro?): SÍ — la cocción (PCC1) elimina los patógenos vegetativos. Bajo el árbol de decisión estándar, correspondería **NO es PCC — controlado por programa prerrequisito** (proveedor aprobado, inspección visual), no "SÍ". |
| Refrigerated storage | Crecimiento bacteriano por temperatura incorrecta | No, pero **HACCP-05 ya tiene límite+monitoreo+acción correctiva+registro completos** | Funcionalmente ES un PCC (barrera única contra el crecimiento antes de cocinar). La inconsistencia no es "SÍ vs NO" sino que el sistema ya lo trata como PCC en la práctica (HACCP-05) sin darle number ni sección §6, ni incluirlo en §7.1. |
| Preparation / mise en place | Contaminación cruzada cruda/RTE | No | CRITERIO: para platillos que se cocinan después (la mayoría del menú), un paso posterior elimina el peligro → no PCC, prerrequisito (tablas de colores). Para platillos sin cocción posterior (nachos con guacamole, a temperatura ambiente) el razonamiento cambia — el peligro de contaminación cruzada en la preparación **no** tiene un paso posterior que lo elimine, lo que sí podría justificar un PCC específico para esa preparación. El plan no distingue por platillo. |
| Transport | Ruptura de cadena fría/caliente | No — parcialmente cubierto por el check de llegada que alimenta PCC3, pero sin límite crítico ni acción correctiva propios para un fallo *durante* el trayecto | CRITERIO/NORMATIVO mixto: no hay paso posterior que elimine un fallo de temperatura durante el transporte antes de que el producto entre en servicio — el árbol de decisión favorece tratarlo como PCC o fusionarlo explícitamente con PCC3 ("PCC3 empieza en la salida de cocina", no "en la llegada al puesto"). Tal como está, es una etapa marcada "SÍ" sin límite crítico propio. |
| Customer service | Contaminación por manipulador; alérgenos no declarados | No | El peligro no tiene un límite crítico medible con termómetro o similar ("higiene personal", "comunicación de alérgenos" no son cifras verificables in situ) — es el ejemplo de libro de un prerrequisito (higiene personal §10.1, comunicación de alérgenos §11.2) mal marcado "SÍ" en una columna que pregunta específicamente "¿Es PCC?". |

**Conclusión de M03:** la columna "Is CCP? / ¿Es PCC?" de §5.2 no es fiable como fuente de verdad sobre qué es realmente un PCC — coexisten en ella 3 filas que SÍ tienen tratamiento §6 completo (Cooking, Rapid cooling, Hot-holding, correctamente marcadas "YES (CCP1/2/3)") con 5 filas marcadas "YES" a secas que no tienen ni número de PCC ni límite crítico propio. Esto no es solo un problema de formato: es la pregunta central del Principio 2 sin resolver para un tercio de las etapas del proceso.

---

## 5. Incoherencias monitoreo ↔ acción correctiva

### M02 (detalle) — PCC1 agrupa 4 límites, monitorea solo 1

**Límite crítico declarado bajo "CCP 1 – Cooking":**
1. ≥75°C instantáneo o ≥70°C/2min (cocción inicial)
2. Mínimo 70°C para alimento recalentado/regenerado **en el punto de venta**
3. Caldos y pozole: hervir y mantener >85°C
4. Mantenimiento en caliente: ≥63°C en todo momento

**Monitoreo declarado bajo el mismo PCC1:** únicamente "temperatura interna del alimento... **al final de cada proceso de cocción**" — es decir, solo cubre el límite (1).

- El límite (4) es **texto idéntico** al límite crítico de PCC3 ("Minimum temperature of 63°C at all times during service"), duplicado sin referencia cruzada.
- El límite (3) — mantener el caldo >85°C durante el servicio — no tiene monitoreo definido en ningún PCC ni en §7.1.
- El límite (2) — recalentar a 70°C **en el punto de venta** (el puesto, distinto de PCC6 que es "for Delivery" vía WhatsApp) — no corresponde a ningún PCC formal. Es la misma temperatura que aparece en §12.1 como acción correctiva ad hoc si el chafing dish baja de 63°C ("reheat it to ≥70°C before resuming"), pero como *límite crítico* declarado dentro de PCC1 no tiene monitoreo, ni acción correctiva propia, ni registro asociado.

**Registro declarado:** "Cooking temperature control sheet (HACCP-01)". Verificado: HACCP-01 solo tiene columnas para fecha, plato/lote, hora inicio/fin, temperatura interna y "≥75°C Sí/No" — es decir, solo registra el límite (1). Los límites (2), (3) y (4) no tienen ninguna columna en ningún formato que los registre bajo el paraguas de "PCC1".

Este es el mismo patrón estructural que el precedente (una acción/registro que no cubre lo que el límite crítico promete cubrir), aplicado a 3 de los 4 límites de un mismo PCC.

### M09 — §7.3 (protocolo general) no excluye "más cocción" para un fallo de PCC2

El protocolo general de acción correctiva (§7.3, aplicable a cualquier desviación) dice textualmente: *"Assess whether it can be recovered (further cooking) or must be discarded."* Este protocolo se presenta como el procedimiento base de 6 pasos para **cualquier** desviación de límite crítico, sin excepción declarada.

**Verificado que PCC2, en su propia tabla, NO propone recalentar** — su acción correctiva específica es correcta ("divide into smaller portions, add more ice" / "discard and record in HACCP-07"). El problema no está en PCC2 mismo, sino en que el protocolo general que lo envuelve ofrece una vía de recuperación ("más cocción") que es específicamente inválida para un fallo de enfriamiento, sin decir así en ningún lugar del documento.

**Por qué importa (Principio 1, ver M05):** si un lote de pozole no alcanza ≤5°C en 6 horas, la razón para descartarlo — y no recalentarlo — es que *C. perfringens* y *B. cereus* pueden haber esporulado/multiplicado y producido toxina o esporas termoestables durante la ventana de enfriamiento lento; ni la cocción original ni un recalentado posterior destruyen esas toxinas preformadas. El plan nunca articula esta razón en ningún lugar — ni en el análisis de peligros de PCC2 (que dice solo "growth of pathogens", sin nombrar los organismos relevantes) ni en el protocolo general (que sigue ofreciendo "further cooking" como opción válida por defecto).

**Recomendación (no aplicada):** añadir una excepción explícita en §7.3: *"La opción de recuperar por cocción NO aplica a desviaciones de PCC2 (enfriamiento) — un fallo de enfriamiento se descarta siempre, sin excepción, por riesgo de toxinas termoestables preformadas."*

---

## 6. Brechas de trazabilidad por canal de venta

| Canal | ¿Se puede identificar lote → cliente? | Evidencia | Brecha |
|---|---|---|---|
| **Pedido WhatsApp (caliente, recién producido/reheat)** | Sí, en teoría | §7.4 designa HACCP-11 como "fuente primaria" de identificación del cliente | **HACCP-11, verificado columna por columna, no tiene campo de cliente** (nombre, número de WhatsApp). Sus columnas son: fecha de pedido, plato, fecha producción/congelación, cantidad, inicio descongelación, temp. refrigerador, caliente/congelado, temp. recalentado, ≥70°C Sí/No, hora de entrega, responsable. La identidad del cliente vive solo en el historial de chat de WhatsApp, fuera de cualquier registro HACCP — funciona en la práctica (WhatsApp conserva el hilo), pero el plan afirma algo que su propio formato no contiene. **(M07)** |
| **Producto congelado, vendido días/semanas después** | Sí, razonablemente | Cada porción se etiqueta con nombre del platillo, fecha de producción, fecha de congelación y fecha máxima de consumo (§4.2 paso 4, §10.3b); HACCP-11 registra "Production/freezing date" | El identificador de lote es (platillo + fecha de producción) — granularidad de sesión completa (20 raciones), no de porción individual. Es razonable a esta escala (CRITERIO, no defecto) |
| **Venta en puesto (walk-up, sin pedido previo)** | No, y el plan lo reconoce | §7.4: *"street sales without a prior order do not allow customer identification; in that case, a public notice is issued"* | No es un hallazgo — es una limitación estructural correctamente documentada y con protocolo alternativo (aviso público) |

---

## 7. Coherencia entre modalidades (tras la separación continua/eventual)

Verificado contra el texto actual (post-separación de modalidades, ronda anterior):

- **PCC1, PCC2, PCC4, PCC5** no llevan etiqueta de modalidad — correcto, aplican a ambas.
- **PCC3** lleva la nota "Applies to the street-stall sale mode" — correcto, es exclusiva de puesto.
- **PCC6** no lleva etiqueta — correcto, es exclusiva de pedido (no requiere nota bajo la convención adoptada, que solo marca lo exclusivo de puesto).
- **M06 (nuevo, no relacionado con la separación de modalidades en sí, sino descubierto al verificarla):** al revisar el flujo §4.3 (pedido) contra §1.2/§10.3, se confirma que el flujo de pedido **no tiene rama para el stock refrigerado no congelado** reservado para "pedidos inmediatos". El flujo §4.3 declarado es: 1) recepción de pedido → 2) descongelación (**siempre**, según su propio texto: "ALWAYS defrost in the refrigerator") → 3) recalentado → 4) entrega congelada (alternativa) → 5) entrega. No existe una rama "3b) recalentado directo desde refrigerado (sin descongelar)" pese a que §1.2 y §10.3 confirman que ese stock existe y se usa para pedidos inmediatos. Como la separación de modalidades tocó exactamente esta sección (§4.1/§4.3), este hallazgo es visible ahora con la misma revisión que hizo la ronda anterior, aunque su causa es anterior a la separación de modalidades.
- Ninguna etiqueta de modalidad revisada es incorrecta — no se encontró ningún PCC, registro o procedimiento que haya quedado "huérfano" de una modalidad que lo necesita **como consecuencia directa de la separación de modalidades**. El hallazgo M06 ya existía antes de esa separación; la separación no lo causó ni lo ocultó.

---

## 8. Hallazgos de criterio profesional (no normativos)

Estos hallazgos son de juicio profesional razonable, sin una norma citable específica que los exija — se marcan CRITERIO explícitamente y no deben tratarse como incumplimiento.

- **M10 (CRITERIO):** HACCP-08 (calibración de termómetros) no define una tolerancia numérica de aceptación (p. ej. "±1°C") junto a "Ice water (0°C)" / "Boiling water (100°C)" — la columna "Calibration correct Yes/No" queda a criterio del operador sin un umbral escrito. GN-16 no exige una cifra de tolerancia, así que esto es una mejora de rigor interno, no un incumplimiento.
- **M11 (CRITERIO):** el árbol de decisión Codex no está documentado explícitamente en el plan para ningún PCC — el plan declara los 6 PCC como conclusión, sin mostrar el razonamiento P1–P4 que llevó a esa conclusión. Esto no es exigido por GN-16 de forma literal, pero es buena práctica documental que facilitaría a un inspector verificar el Principio 2 sin tener que reconstruirlo (como tuvo que hacerse en la Sección 4 de este informe).
- **M12 (CRITERIO):** §7.3 (protocolo general) y las acciones correctivas específicas de cada PCC coexisten sin que el plan aclare cuál prevalece en caso de conflicto (ver M09). Documentar explícitamente "las acciones correctivas específicas de cada PCC en §6 prevalecen sobre el protocolo general de §7.3" resolvería la ambigüedad sin necesidad de reescribir §7.3 entero.
- **M13 (CRITERIO):** la fila "Preparation / mise en place" de §5.2 aplica el mismo peligro y "¿Es PCC?: SÍ" a todo el menú por igual, sin distinguir entre platillos que se cocinan después (la mayoría) y platillos servidos sin cocción posterior (nachos con guacamole, a temperatura ambiente). Un análisis de peligros más granular por tipo de plato reforzaría la fundamentación del Principio 1 para esos platillos específicos.

---

## 9. Discrepancias ES↔EN en la metodología

**Ninguna encontrada.** Se comparó específicamente cada hallazgo de esta auditoría entre ambos idiomas:

- §7.1 (Resumen de Monitoreo): ES ("7.1 Resumen de Monitoreo de PCCs") lista PCC1/PCC2/PCC3 igual que EN — la omisión de PCC4/5/6 (M01) es idéntica en ambos idiomas.
- §6 PCC1 (límite crítico agrupado, M02): el texto ES ("Límite crítico: ≥75°C instantáneo... / Temperatura mínima 70°C para alimentos recalentados/regenerados en el punto de venta / Caldos y pozole: hervir y mantener >85°C / Mantenimiento en caliente: ≥63°C en todo momento") reproduce exactamente la misma estructura de 4 límites agrupados que el EN.
- §5.2 (columna "¿Es PCC?", M03), §2 (equipo HACCP y nota de formación, M04) y §4.3 (flujo de pedido, M06) se verificaron simétricos en ambos idiomas — mismas etapas, mismas columnas, misma nota de formación con el mismo compromiso a 6 meses.
- Las etiquetas de modalidad añadidas en la ronda anterior (Sección 7 de este informe) son texto espejo exacto ES/EN, ya verificado en esa ronda.

Todos los hallazgos de esta auditoría (M01–M13) aplican **por igual y de forma idéntica** a ambas versiones del plan.

---

*Fin del reporte. No se modificó ningún archivo del plan durante esta auditoría. No se regeneró el HTML. No se generó, abrió ni modificó ningún archivo DOCX.*
