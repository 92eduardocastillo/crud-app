# CRUD App con Express.js y React

Este proyecto es una aplicación CRUD que utiliza Express.js para el backend y React para el frontend. La aplicación permite gestionar usuarios con los campos `nombre` y `edad`, almacenando los datos en una base de datos MongoDB simulada localmente.

## Estructura del Proyecto

```
crud-app
├── backend
│   ├── src
│   │   ├── app.js                # Punto de entrada del backend
│   │   ├── controllers           # Controladores para manejar la lógica de negocio
│   │   │   └── userController.js  # Controlador de usuarios
│   │   ├── models                # Modelos de datos
│   │   │   └── userModel.js      # Modelo de usuario
│   │   ├── routes                # Rutas de la API
│   │   │   └── userRoutes.js     # Rutas de usuarios
│   │   └── config                # Configuración de la aplicación
│   │       └── db.js             # Configuración de la base de datos
│   ├── package.json              # Dependencias y scripts del backend
│   └── README.md                 # Documentación del backend
├── frontend
│   ├── src
│   │   ├── App.jsx               # Componente principal del frontend
│   │   ├── components            # Componentes de la aplicación
│   │   │   └── UserForm.jsx      # Formulario para ingresar usuarios
│   │   ├── styles                # Estilos de la aplicación
│   │   │   └── main.scss         # Estilos SCSS
│   │   └── index.jsx             # Punto de entrada del frontend
│   ├── vite.config.js            # Configuración de Vite
│   ├── package.json              # Dependencias y scripts del frontend
│   └── README.md                 # Documentación del frontend
└── README.md                     # Documentación general del proyecto
```

## Instalación

1. Clona el repositorio:
   ```
   git clone <URL_DEL_REPOSITORIO>
   cd crud-app
   ```

2. Instala las dependencias del backend:
   ```
   cd backend
   npm install
   ```

3. Instala las dependencias del frontend:
   ```
   cd ../frontend
   npm install
   ```

## Uso

### Backend

1. Inicia el servidor del backend:
   ```
   cd backend
   npm start
   ```

2. La API estará disponible en `http://127.0.0.1:5000/api/users`.

### Frontend

1. Inicia el servidor de desarrollo del frontend:
   ```
   cd frontend
   npm run dev
   ```

2. La aplicación estará disponible en `http://127.0.0.1:3000`.

## Contribuciones

Las contribuciones son bienvenidas. Si deseas contribuir, por favor abre un issue o envía un pull request.

## Licencia

Este proyecto está bajo la Licencia MIT.