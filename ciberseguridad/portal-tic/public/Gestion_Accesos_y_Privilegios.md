# BIBLIOTECA NACIONAL PEDRO HENRÍQUEZ UREÑA
**DPyD | Versión 1**
**MANUAL DE POLÍTICAS Y PROCEDIMIENTOS**

---

**NOMBRE DEL PROCESO:** Administración y Control de Accesos

| Preparado por: Departamento de TIC | Aprobado por: Dirección Nacional | Fecha de emisión: Pendiente |
|---|---|---|

**1.0 Propósito o Misión:**
Prevenir accesos no autorizados a la información e infraestructuras, mediante la gestión rigurosa de privilegios lógicos y controles físicos basados en el principio de necesidad de saber.

**2.0 Alcance:**
- **Empieza:** Solicitud de acceso físico a instalaciones críticas o solicitud lógica a sistemas.
- **Incluye:** Creación, revisión, revocación de usuarios, gestión de contraseñas, configuraciones VPN, protección física de servidores y centros de datos.
- **Termina:** Cierre o revocación del acceso, con sus respectivas bitácoras de auditoría conservadas.

**3.0 Dueño o responsables:**
3.1 Administrador de Sistemas
3.2 Administrador de Redes
3.3 Seguridad Física
3.4 MAE

**4.0 Documentos de referencia:**
4.1 NORTIC A7:2016 (Capítulo III)
4.2 NIST CSF v2.0 (Protect - Identity Management and Access Control PR.AC)

**5.0 Políticas del Procedimiento:**
5.1 Controles de Accesos de Usuarios: Requiere aprobación del superior jerárquico. Todo movimiento (nuevo, cambio, salida) debe ser notificado inmediatamente por RRHH.
5.2 Control Físico de Infraestructura: Niveles de acceso del 1 al 4. El Centro de Datos es Nivel 4 (acceso estrictamente restringido a TIC o autorizados y acompañados). Todo acceso físico a áreas sensibles debe registrarse en bitácora.
5.3 Política de Contraseñas: Mínimo 8 caracteres, alfanuméricas, incluir mayúsculas y minúsculas. Deben cambiarse cada cuarenta y cinco (45) días.
5.4 Conexiones Remotas e Internet: Las VPN deben utilizar cifrado de mínimo 128 bits (IPsec / TLS). Solo personal autorizado utilizará VPN.
5.5 Navegación y Filtros: Prohibido el acceso a sitios ilícitos, juegos, apuestas o pornografía mediante firewalls/proxies corporativos.

**6.0 Descripción de las Actividades del Proceso:**

| Responsable | Descripción |
|---|---|
| **RRHH / Dpto. Solicitante** | 6.1 Envía formulario de alta o baja de empleado a la mesa de ayuda (TIC) para gestionar la cuenta de Active Directory. |
| **Dpto. TIC (Administrador de Sistemas)** | 6.2 Crea la cuenta asignando los permisos mínimos necesarios en función del rol.
6.3 Deshabilita la cuenta inmediatamente tras recibir notificación de salida y resguarda los datos por tiempo legal. |
| **Dpto. TIC / Seguridad Física** | 6.4 Mantiene bitácora de firmas y cédulas para cualquier visitante o externo que requiera ingresar al Centro de Datos.
6.5 Acompaña a todo personal externo durante la visita a zonas de Nivel 4. |
| **Dpto. TIC (Administrador de Redes)** | 6.6 Implementa filtrado web (Proxy/Firewall) para denegar accesos a URL maliciosas o prohibidas.
6.7 Configura y monitorea conexiones VPN, verificando certificados digitales de acceso. |

**7.0 ANEXOS:**
- 7.1 Formulario de Alta/Baja de Usuarios
- 7.2 Bitácora Física de Acceso a Centro de Datos
- 7.3 Matriz de Perfiles de Acceso Lógico

**8.0 REGISTROS:**
| CODIGO | NOMBRE | ALMACENAMIENTO | ARCHIVADO | TIEMPO | DISPOSICION |
|---|---|---|---|---|---|
| SEC-DOC | Registro Dpto TIC | Servidor Seguro | Digital/Impreso | Permanente | Restringido |

**9.0 Historia de Cambio:**
| REVISIONES | FECHAS | SECCION | DESCRIPCION | REVISADO POR | REFRENDADO POR |
|---|---|---|---|---|---|
| 1.0 | Actual | Todas | Creación oficial | Dpto. TIC | Dirección |

**10.0 TIEMPO DE RESPUESTA:** Altas y bajas en 24 horas. Auditoría de permisos anualmente.
