# Customer Scoops - Frontend Challenge

### Link deploy: https://challenge-cs-seven.vercel.app/

Este proyecto es una aplicación de formulario interactivo creada como parte de una prueba técnica de frontend para Customer Scoops. La aplicación permite a los usuarios completar un formulario en varias etapas y enviar sus respuestas. Al finalizar el formulario, la aplicación envía un correo electrónico de confirmación al usuario utilizando un servicio de backend.

## Estructura del Proyecto

La estructura principal del proyecto es la siguiente:

- `public`: Carpeta que contiene los archivos públicos, incluyendo imágenes utilizadas en la interfaz y en las plantillas de correo electrónico.
- `server`: Carpeta que contiene el código del servidor backend para enviar correos electrónicos.
  - `index.js`: Archivo principal del servidor, que configura y envía los correos.
  - `.env.local`: Archivo que almacena las variables de entorno (como la clave API de Resend).
  - `template/emailtemplate.html`: Plantilla HTML para el correo electrónico de confirmación enviado al usuario.
- `src`: Carpeta que contiene el código del frontend (React) para la aplicación de formulario.
  - Componentes, estilos y lógica de la interfaz de usuario.
  
## Instalación

### Configuración Inicial

1. Clona este repositorio en tu máquina local.
2. Navega a la carpeta principal del proyecto.

   ```bash
   cd nombre-de-tu-proyecto
   ```

3. Instala las dependencias del proyecto:

   ```bash
   npm install
   ```

4. Crea un archivo `.env.local` en la carpeta `server` y define tu clave de API de Resend para el envío de correos:

   ```env
   RESEND_API_KEY=tu_api_key_de_resend
   ```

## Ejecución del Proyecto

### 1. Ejecutar el Servidor de React (Frontend)

Para iniciar la aplicación de React en desarrollo:

```bash
npm run dev
```

Esto iniciará el frontend en `http://localhost:5173` o en el puerto que defina React.

### 2. Ejecutar el Servidor de Node.js (Backend para Envío de Correos)

El backend en Node.js está diseñado para enviar correos al finalizar el formulario. Para ejecutar el envío de correo, usa el siguiente comando en la carpeta raíz del backend:

```bash
node server/index.js
```

Este comando ejecutará el script que envía el correo utilizando la plantilla HTML definida en `server/template/emailtemplate.html`.

## Funcionalidades del Proyecto

1. **Formulario Interactivo**: La aplicación guía al usuario a través de varias pantallas de formulario, recolectando su información paso a paso.
2. **Envío de Correo de Confirmación**: El backend envía un correo electrónico de confirmación al usuario usando la API de Resend. El correo incluye una plantilla personalizada con el logo de la empresa y un enlace de agradecimiento.

## Envío de Correo

El envío de correos está gestionado por un servicio Node.js. Aquí tienes un resumen de cómo funciona:

1. El archivo `server/index.js` configura la integración con Resend utilizando la clave API almacenada en `.env.local`.
2. Carga la plantilla HTML `emailtemplate.html` desde la carpeta `server/template`.
3. Define los datos del correo, incluyendo el destinatario, el asunto y el contenido HTML.
4. Para enviar el correo, ejecuta el comando:

   ```bash
   node server/index.js
   ```

   Esto enviará el correo utilizando la API de Resend.

Hecho con 💛 Valentino Villar