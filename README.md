# CRUD App

Este proyecto es una aplicación CRUD (Crear, Leer, Actualizar, Eliminar) que utiliza Express.js para el backend y React.js con Vite para el frontend. La aplicación permite gestionar usuarios con los campos de nombre y edad, utilizando MongoDB como base de datos simulada localmente.

## Estructura del Proyecto

```
crud-app
├── backend                # Código del servidor backend
│   ├── src
│   │   ├── app.js        # Punto de entrada de la aplicación backend
│   │   ├── controllers    # Controladores para manejar la lógica de negocio
│   │   │   └── userController.js
│   │   ├── models         # Modelos de datos
│   │   │   └── userModel.js
│   │   ├── routes         # Rutas de la API
│   │   │   └── userRoutes.js
│   │   └── config         # Configuración de la base de datos
│   │       └── db.js
│   ├── package.json       # Dependencias y scripts del backend
│   └── README.md          # Documentación del backend
├── frontend               # Código del cliente frontend
│   ├── src
│   │   ├── App.jsx        # Componente principal de la aplicación frontend
│   │   ├── components      # Componentes reutilizables
│   │   │   └── UserForm.jsx
│   │   ├── styles          # Estilos de la aplicación
│   │   │   └── main.scss
│   │   └── index.jsx      # Punto de entrada de la aplicación React
│   ├── vite.config.js     # Configuración de Vite
│   ├── package.json       # Dependencias y scripts del frontend
│   └── README.md          # Documentación del frontend
└── README.md              # Documentación general del proyecto
```

## Instalación

### Backend

1. Navega al directorio `backend`.
2. Ejecuta `npm install` para instalar las dependencias.
3. Configura la conexión a MongoDB en `src/config/db.js`.
4. Ejecuta `npm start` para iniciar el servidor.

### Frontend

1. Navega al directorio `frontend`.
2. Ejecuta `npm install` para instalar las dependencias.
3. Ejecuta `npm run dev` para iniciar el servidor de desarrollo.

## Uso

- Accede a la aplicación frontend en `http://127.0.0.1:3000` (o el puerto que Vite indique).
- Utiliza el formulario para agregar, actualizar o eliminar usuarios.

## Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue o un pull request para discutir cambios.