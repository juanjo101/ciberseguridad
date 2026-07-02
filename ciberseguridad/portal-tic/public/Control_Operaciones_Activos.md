# BIBLIOTECA NACIONAL PEDRO HENRÍQUEZ UREÑA
**DPyD | Versión 1**
**MANUAL DE POLÍTICAS Y PROCEDIMIENTOS**

---

**NOMBRE DEL PROCESO:** Control de Operaciones e Inventario (Web, WiFi, Móviles, Cloud)

| Preparado por: Departamento de TIC | Aprobado por: Dirección Nacional | Código/Páginas: BNPHU-TIC-006 |
|---|---|---|

**1.0 Propósito o Misión:**
Establecer las medidas de protección y control sobre las plataformas web, redes inalámbricas, dispositivos móviles corporativos, adopción de la nube y mantener un registro fiel de los activos de la institución.

**2.0 Alcance:**
- **Empieza:** Requerimiento de publicación web, despliegue de red WiFi, o ingreso de activos.
- **Incluye:** Actualizaciones de CMS (Seguridad Web), filtrado WiFi, cifrado y MDM para móviles, análisis de riesgos cloud y registro en el inventario oficial.
- **Termina:** Auditorías tecnológicas o descargo de los equipos.

**3.0 Dueño o responsables:**
3.1 Dpto. TIC (Webmaster, Administrador de Redes)
3.2 Dpto. de Activos Fijos

**4.0 Documentos de referencia:**
4.1 NORTIC A7:2016 (Capítulo VI)
4.2 NIST CSF v2.0 (Identify - Asset Management ID.AM / Protect PR.PT)
4.3 NORTIC A1
4.4 NORTIC A2

**5.0 Políticas del Procedimiento:**
5.1 Seguridad Web: Obligatorio el uso de HTTPS con certificados válidos (no autofirmados). Evaluaciones periódicas OWASP para el CMS y plugins.
5.2 Servicios Wireless (WiFi): Prohibido usar protocolo WEP. El SSID institucional no debe revelar el nombre del organismo para redes ocultas. Se debe segmentar la red de visitantes de la red operativa.
5.3 Dispositivos Móviles: Uso de sistemas MDM (Mobile Device Management) para borrado remoto. Prohibido compartir dispositivos asignados. Toda unidad extraviada se declara como incidente de seguridad.
5.4 Servicios en la Nube: Ninguna información sensible nacional será almacenada en la nube si los servidores residen bajo leyes de estados ajenos sin análisis de riesgo y autorización de OGTIC.
5.5 Inventario: Todos los activos físicos y de software deben llevar un registro y estar etiquetados.

**6.0 Descripción de las Actividades del Proceso:**

| Responsable | Descripción |
|---|---|
| **Webmaster** | 6.1 Verifica suscripciones a listas de vulnerabilidades, aplica parches y elabora reportes mensuales de estado de aplicaciones web. |
| **Administrador de Redes** | 6.2 Configura las redes WiFi institucionales, aplicando filtros de acceso MAC (si aplica), IPS, y claves rotativas corporativas. |
| **Dpto. TIC** | 6.3 Inscribe dispositivos móviles en el software MDM antes de su entrega e instala el software de cifrado de almacenamiento. |
| **Dpto. Activos / TIC** | 6.4 Actualiza la base de datos de inventario con cada ingreso de hardware y software (SISTICGE/NORTIC A1). |

**7.0 ANEXOS:**
- 7.1 Matriz de Escaneo de Vulnerabilidades
- 7.2 Listado de Activos Tecnológicos
- 7.3 Acuerdos de Uso de Equipos (Móviles)

**8.0 REGISTROS:**
| CODIGO | NOMBRE | ALMACENAMIENTO | ARCHIVADO | TIEMPO | DISPOSICION |
|---|---|---|---|---|---|
| SEC-DOC | Registro Dpto TIC | Servidor Seguro | Digital/Impreso | Permanente | Restringido |

**9.0 Historia de Cambio:**
| REVISIONES | FECHAS | SECCION | DESCRIPCION | REVISADO POR | REFRENDADO POR |
|---|---|---|---|---|---|
| 1.0 | Actual | Todas | Creación oficial | Dpto. TIC | Dirección |

**10.0 TIEMPO DE RESPUESTA:** Monitoreo mensual de servicios. Actualización constante del inventario.

**FIN DEL PROCEDIMIENTO**
