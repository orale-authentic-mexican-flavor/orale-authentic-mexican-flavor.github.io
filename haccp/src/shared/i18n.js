// Órale – Authentic Mexican Flavor Limited
// Textos de interfaz (UI) y navegación de base.html, en ES y EN.
// Usado por src/es/haccp_es.js y src/en/haccp_en.js para llenar los
// placeholders {{ui.*}} y {{nav.*}} del template compartido base.html.
// No contiene datos sensibles del negocio (eso vive en config.js).

module.exports = {
  es: {
    ui: {
      planLabel: "Plan HACCP",
      btnVistaImpresion: "Vista Impresión",
      btnVistaNormal: "Vista Normal",
      btnImprimir: "Imprimir",
      printFooterText: "Documento confidencial – Uso interno y regulatorio"
    },
    nav: {
      s1: "1. Introducción y Alcance",
      s1_1: "1.1 Propósito",
      s1_2: "1.2 Alcance",
      s1_3: "1.3 Marco Regulatorio",

      s2: "2. Equipo HACCP",

      s3: "3. Descripción de Productos",
      s3_1: "3.1 Descripción General",
      s3_2: "3.2 Tabla de Productos",

      s4: "4. Diagramas de Flujo",
      s4_1: "4.1 Venta en Calle",

      s5: "5. Análisis de Peligros",
      s5_1: "5.1 Leyenda de Riesgo",
      s5_2: "5.2 Tabla de Análisis",

      s6: "6. Puntos Críticos de Control",
      pcc1: "PCC 1 – Cocción",
      pcc2: "PCC 2 – Enfriamiento",
      pcc3: "PCC 3 – Mantenimiento en Caliente",

      s7: "7. Monitoreo y Acciones Correctivas",
      s7_1: "7.1 Resumen de Monitoreo",
      s7_2: "7.2 Equipamiento",
      s7_3: "7.3 Protocolo de Acción Correctiva",

      s8: "8. Verificación y Revisión",
      s8_1: "8.1 Actividades de Verificación",
      s8_2: "8.2 Gestión de Quejas",

      s9: "9. Documentación y Registros",
      s9_1: "9.1 Formatos Obligatorios",

      s10: "10. Programas Prerrequisito",
      s10_1: "10.1 Higiene Personal",
      s10_2: "10.2 Limpieza y Desinfección",
      s10_3: "10.3 Organización del Refrigerador",
      s10_4: "10.4 Gestión del Agua",
      s10_5: "10.5 Manejo de Residuos",
      s10_6: "10.6 Mantenimiento de Utensilios",

      s11: "11. Gestión de Alérgenos",
      s11_1: "11.1 Tabla de Alérgenos",
      s11_2: "11.2 Comunicación al Cliente",

      s12: "12. Consideraciones Específicas",
      s12_1: "12.1 Cocina Doméstica y Venta en Calle",

      s13: "13. Formatos HACCP",
      s13_1: "HACCP-01 al HACCP-09",

      s14: "14. Aprobación y Firma",

      anexo: "Anexo. Equipamiento Mínimo"
    }
  },

  en: {
    ui: {
      planLabel: "HACCP Plan",
      btnVistaImpresion: "Print View",
      btnVistaNormal: "Normal View",
      btnImprimir: "Print",
      printFooterText: "Confidential document – Internal and regulatory use"
    },
    nav: {
      s1: "1. Introduction and Scope",
      s1_1: "1.1 Purpose",
      s1_2: "1.2 Scope",
      s1_3: "1.3 Regulatory Framework",

      s2: "2. HACCP Team",

      s3: "3. Product Description",
      s3_1: "3.1 General Description",
      s3_2: "3.2 Product Table",

      s4: "4. Flow Diagrams",
      s4_1: "4.1 Street Sale",

      s5: "5. Hazard Analysis",
      s5_1: "5.1 Risk Legend",
      s5_2: "5.2 Analysis Table",

      s6: "6. Critical Control Points",
      pcc1: "CCP 1 – Cooking",
      pcc2: "CCP 2 – Cooling",
      pcc3: "CCP 3 – Hot-Holding",

      s7: "7. Monitoring and Corrective Actions",
      s7_1: "7.1 Monitoring Summary",
      s7_2: "7.2 Equipment",
      s7_3: "7.3 Corrective Action Protocol",

      s8: "8. Verification and Review",
      s8_1: "8.1 Verification Activities",
      s8_2: "8.2 Customer Complaint Management",

      s9: "9. Documentation and Records",
      s9_1: "9.1 Mandatory Formats",

      s10: "10. Prerequisite Programmes (PRPs)",
      s10_1: "10.1 Personal Hygiene",
      s10_2: "10.2 Cleaning and Disinfection",
      s10_3: "10.3 Refrigerator Organisation",
      s10_4: "10.4 Water Management",
      s10_5: "10.5 Waste Management",
      s10_6: "10.6 Utensil Maintenance",

      s11: "11. Allergen Management",
      s11_1: "11.1 Allergen Table",
      s11_2: "11.2 Customer Communication",

      s12: "12. Specific Considerations",
      s12_1: "12.1 Domestic Kitchen and Street Sale",

      s13: "13. HACCP Recording Formats",
      s13_1: "HACCP-01 to HACCP-09",

      s14: "14. Approval and Signature",

      anexo: "Annex. Minimum Required Equipment"
    }
  }
};
