# CLAUDE.md

Guía para el asistente de desarrollo (Claude Code) en el repositorio HACCP de **Órale – Authentic Mexican Flavor Limited** (CRO: 805512), un negocio de comida mexicana en Limerick, Irlanda.

## Reglas generales — NUNCA las ignores

- No generar commits, push ni pull requests. El desarrollador los genera manualmente.
- No tocar la rama `main` directamente.
- No generar ningún archivo de output (HTML, DOCX, PDF) sin autorización explícita del desarrollador.
- No ejecutar scripts de generación sin autorización explícita.
- Confirmar cada cambio antes de proceder al siguiente.
- Siempre generar los documentos en dos versiones paralelas: español (ES) e inglés (EN).

## Contexto del negocio

- **Empresa:** ORALE - AUTHENTIC MEXICAN FLAVOR LIMITED, CRO: 805512
- **Cocina de preparación:** Apt 301, Richmond Court, Mount Kennett Place, Dock Road, Limerick V94 PY76
- **Modalidad:** únicamente cocina doméstica + transporte en condiciones adecuadas + venta en calle
- **Sin referencias a "food truck"** en ningún documento
- **Autoridad reguladora:** HSE Environmental Health / FSAI, Premises Ref: 134791
- **Contacto HSE:** Joe Brennan, JoeM.Brennan@hse.ie

## Equipo HACCP

- **Director / HACCP Manager:** Vicente Rodriguez Hernandez
- **Operations & Compliance Manager:** David Enrique Ochoa Diaz
- **Chef / Responsable de Cocina:** Aracely Sansores Gongora

## Cambios pendientes para próxima versión del HACCP (v1.3)

- Versión objetivo: **1.3**
- Eliminar todas las referencias a food truck
- Operations & Compliance Manager: David Enrique Ochoa Diaz (no "Por contratar")
- En tablas de PCCs, cada elemento del monitoreo (¿Qué?, ¿Cómo?, ¿Cuándo?, ¿Quién?) en línea separada
- En celdas con múltiples elementos separados por punto, cada elemento en línea separada
- Aguas frescas retiradas temporalmente del menú
- Agregar Anexo de equipamiento mínimo requerido como checklist operativo
- Todos los formatos HACCP (01-09) integrados en el documento principal
- Generar documento secundario con solo los formatos (standalone)
- Datos sensibles (direcciones, nombres, referencias) en `config.js`, excluido de git

## Formato de outputs

- **Documentos:** HTML (no DOCX)
- **Nombres:**
  - `HACCP_Orale_v1.3_ES.html`
  - `HACCP_Orale_v1.3_EN.html`
- **Formatos standalone:**
  - `HACCP_Formatos_v1.3_ES.html`
  - `HACCP_Formatos_v1.3_EN.html`
- **Paleta de colores Órale:**
  - `#B22222` rojo chile
  - `#006847` verde nopal
  - `#FFD700` amarillo cempasúchil
  - `#0047AB` azul talavera
  - `#FBF6EC` crema

## Convenciones del script

- Funciones auxiliares en archivo separado (`utils.js`)
- `config.js` contiene todos los datos sensibles y configurables
- Separación clara entre estructura (`haccp.js`) y datos (`config.js`)
