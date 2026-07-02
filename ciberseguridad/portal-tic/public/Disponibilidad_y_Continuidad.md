<table style="width:100%; text-align:center; border-collapse: collapse; margin-bottom: 20px;" border="1">
  <tr>
    <td rowspan="2" style="width: 20%; padding: 10px;"><img src="/logo-bnphu.png" style="width: 120px;" /></td>
    <td style="font-weight: bold; width: 60%; padding: 10px; font-size: 1.1em;">BIBLIOTECA NACIONAL PEDRO HENRÍQUEZ UREÑA</td>
    <td rowspan="2" style="width: 20%; padding: 10px;">DPyD<br>Versión 1:<br>Enero, 2020</td>
  </tr>
  <tr>
    <td style="font-weight: bold; padding: 10px;">MANUAL DE POLÍTICAS Y PROCEDIMIENTOS</td>
  </tr>
</table>

<table style="width:100%; border-collapse: collapse; margin-bottom: 20px;" border="1">
  <tr style="background-color: #DDEBF7;">
    <td colspan="4" style="padding: 5px;"><strong>NOMBRE DEL PROCESO:</strong> Plan de Disponibilidad y Continuidad del Negocio (BCP / DRP)</td>
  </tr>
  <tr style="background-color: #DDEBF7;">
    <td style="width: 25%; padding: 5px;"><strong>Preparado por:</strong> Departamento de TIC</td>
    <td style="width: 25%; padding: 5px;"><strong>Aprobado por:</strong> Dirección Nacional</td>
    <td style="width: 20%; padding: 5px;"><strong>Código/<br>Páginas:</strong></td>
    <td style="width: 30%; padding: 5px;">BNPHU-TIC-004<br>2</td>
  </tr>
</table>

**1.0 Propósito o Misión:**
Mantener las operaciones tecnológicas a un nivel aceptable frente a eventualidades o desastres, estableciendo un protocolo de gestión de incidentes y un esquema de recuperación técnica.

**2.0 Alcance:**
- **Empieza:** Detección de evento, interrupción o alerta tecnológica.
- **Incluye:** Análisis de capacidad, registro del incidente, activación del Comité de Continuidad (CONTI), Análisis de Impacto (BIA), y recuperación de desastres (DRP).
- **Termina:** Restauración a la normalidad operativa, elaboración de lecciones aprendidas y cierre del evento.

**3.0 Dueño o responsables:**
3.1 Comité de Continuidad (CONTI)
3.2 Oficial de Seguridad
3.3 Departamento de TIC

**4.0 Documentos de referencia:**
4.1 NORTIC A7:2016 (Capítulo IV)
4.2 NIST CSF v2.0 (Respond - Incident Management RS.MA / Recover RC.RP)

**5.0 Políticas del Procedimiento:**
5.1 Gestión de Incidentes (PGI): Todo incidente debe reportarse. Incidentes criminales deben escalarse al DICAT (Ley 53-07).
5.2 Comité de Continuidad (CONTI): Integrado por la MAE, Enc. de TIC y áreas claves. Toma las decisiones estratégicas ante desastres.
5.3 BIA (Análisis de Impacto): Identificar los procesos críticos institucionales y establecer el RTO (Recovery Time Objective) y RPO (Recovery Point Objective).
5.4 DRP (Disaster Recovery Plan): Incluye contingencias técnicas, respaldo de infraestructuras críticas, mantenimientos o localidades alternas con al menos 2 semanas de autonomía.
5.5 Simulacros: Es obligatorio documentar y ejecutar simulacros de evacuación, fallo tecnológico y restauración al menos una vez al año.

**6.0 Descripción de las Actividades del Proceso:**

| Responsable | Descripción |
|---|---|
| **Usuario / Dpto. TIC** | 6.1 Detecta la interrupción y registra un ticket de incidente. TIC inicia el diagnóstico primario. |
| **Dpto. TIC / CISO** | 6.2 Contiene el incidente. Si sobrepasa la capacidad operativa normal, se escala al Comité CONTI. |
| **Comité CONTI / MAE** | 6.3 Analiza el nivel de impacto según el BIA. Declara formalmente estado de emergencia o desastre y activa el DRP. |
| **Dpto. TIC** | 6.4 Ejecuta los procedimientos de contingencia: restauración de respaldos off-site, conmutación a enlaces redundantes o activación de servicios en la nube. |
| **Comité CONTI** | 6.5 Concluida la recuperación, elabora informe de lecciones aprendidas, ajusta el DRP y envía reportes formales a organismos rectores (OGTIC, CNCS). |

**7.0 ANEXOS:**
- 7.1 Plan de Recuperación ante Desastres (DRP)
- 7.2 Documento de BIA (Análisis de Impacto)
- 7.3 Informes de Simulacros

**8.0 REGISTROS:**
| CODIGO | NOMBRE | ALMACENAMIENTO | ARCHIVADO | TIEMPO | DISPOSICION |
|---|---|---|---|---|---|
| SEC-DOC | Registro Dpto TIC | Servidor Seguro | Digital/Impreso | Permanente | Restringido |

**9.0 Historia de Cambio:**
| REVISIONES | FECHAS | SECCION | DESCRIPCION | REVISADO POR | REFRENDADO POR |
|---|---|---|---|---|---|
| 1.0 | Actual | Todas | Creación oficial | Dpto. TIC | Dirección |

**10.0 TIEMPO DE RESPUESTA:** Ejecución inmediata. Tiempos de recuperación varían según el RTO del proceso.

**FIN DEL PROCEDIMIENTO**
