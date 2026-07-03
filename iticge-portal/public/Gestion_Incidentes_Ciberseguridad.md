<table style="width:100%; text-align:center; border-collapse: collapse; margin-bottom: 20px;" border="1">
  <tr>
    <td rowspan="2" style="width: 20%; padding: 10px;"><img src="/logo-bnphu.png" style="width: 120px;" /></td>
    <td style="font-weight: bold; width: 60%; padding: 10px; font-size: 1.1em;">BIBLIOTECA NACIONAL PEDRO HENRÍQUEZ UREÑA</td>
    <td rowspan="2" style="width: 20%; padding: 10px;">DPyD<br>Versión 1:<br>Julio 2026</td>
  </tr>
  <tr>
    <td style="font-weight: bold; padding: 10px;">MANUAL DE POLÍTICAS Y PROCEDIMIENTOS</td>
  </tr>
</table>

<table style="width:100%; border-collapse: collapse; margin-bottom: 20px;" border="1">
  <tr style="background-color: #DDEBF7;">
    <td colspan="4" style="padding: 5px;"><strong>NOMBRE DEL PROCESO:</strong> Procedimiento de Gestión de Incidentes de Ciberseguridad</td>
  </tr>
  <tr style="background-color: #DDEBF7;">
    <td style="width: 25%; padding: 5px;"><strong>Preparado por:</strong> Departamento de TIC</td>
    <td style="width: 25%; padding: 5px;"><strong>Aprobado por:</strong> Dirección Nacional</td>
    <td style="width: 20%; padding: 5px;"><strong>Código/<br>Páginas:</strong></td>
    <td style="width: 30%; padding: 5px;">BNPHU-TIC-009<br>2</td>
  </tr>
</table>

**1.0 Propósito o Misión:**
Proveer una metodología estandarizada para responder a incidentes que amenacen la seguridad (Ej. Ransomware, Phishing, Fugas de Datos).

**2.0 Alcance:**
- **Empieza:** Detección de evento anómalo o reporte de usuario.
- **Incluye:** Triaje, contención, erradicación, recuperación e investigación post-incidente.
- **Termina:** Elaboración de informe de incidente y cierre forense.

**3.0 Dueño o responsables:**
3.1 CSIRT Interno (Equipo de Respuesta)
3.2 Oficial de Seguridad (CISO)

**4.0 Documentos de referencia:**
4.1 NORTIC A7:2016
4.2 NIST Incident Response Guide (SP 800-61 Rev. 2)

**5.0 Políticas del Procedimiento:**
5.1 Todo empleado debe reportar inmediatamente equipos lentos, correos sospechosos o pérdida de información.
5.2 Preservación Forense: No se apagará ni formateará el equipo afectado sin autorización del CISO para conservar la cadena de custodia.
5.3 Reporte Obligatorio: Incidentes críticos se reportarán al CSIRT Nacional (CNCS) en menos de 24 horas.

**6.0 Descripción de las Actividades del Proceso:**

| Responsable | Descripción |
|---|---|
| **Usuario** | 6.1 Detecta anomalía y reporta inmediatamente al Centro de Servicios TIC. |
| **CSIRT Interno** | 6.2 Evalúa y clasifica el incidente. Aplica medidas de contención (desconectar de la red). |
| **CSIRT Interno** | 6.3 Elimina la amenaza (erradicación) y restaura sistemas desde backups limpios (recuperación). |
| **CISO** | 6.4 Elabora reporte post-incidente, documenta Indicadores de Compromiso (IoCs) y establece medidas preventivas futuras. |

**7.0 ANEXOS:**
- 7.1 Plantilla de Reporte de Incidente
- 7.2 Cadena de Custodia de Evidencias

**8.0 REGISTROS:**
| CODIGO | NOMBRE | ALMACENAMIENTO | ARCHIVADO | TIEMPO | DISPOSICION |
|---|---|---|---|---|---|
| SEC-DOC | Registro Dpto TIC | Servidor Seguro | Digital/Impreso | Permanente | Restringido |

**9.0 Historia de Cambio:**
| REVISIONES | FECHAS | SECCION | DESCRIPCION | REVISADO POR | REFRENDADO POR |
|---|---|---|---|---|---|
| 1.0 | Actual | Todas | Creación oficial | Dpto. TIC | Dirección |

**10.0 TIEMPO DE RESPUESTA:** Contención inicial en 1-2 horas según gravedad.

**FIN DEL PROCEDIMIENTO**
