# CRUD App - Frontend

Este es el frontend de la aplicación CRUD que permite gestionar usuarios. La aplicación está construida con React y utiliza Vite como herramienta de construcción.

## Estructura del Proyecto

- `src/`: Contiene el código fuente de la aplicación.
  - `App.jsx`: Componente principal que gestiona la estructura de la aplicación.
  - `components/`: Carpeta que contiene componentes reutilizables.
    - `UserForm.jsx`: Componente para ingresar el nombre y la edad del usuario.
  - `styles/`: Carpeta que contiene los estilos de la aplicación.
    - `main.scss`: Archivo SCSS con los estilos globales.
  - `index.jsx`: Punto de entrada de la aplicación que renderiza el componente `App`.

## Instalación

1. Clona el repositorio:
   ```
   git clone <URL_DEL_REPOSITORIO>
   ```
2. Navega a la carpeta del frontend:
   ```
   cd crud-app/frontend
   ```
3. Instala las dependencias:
   ```
   npm install
   ```

## Uso

Para iniciar la aplicación en modo de desarrollo, ejecuta:
```
npm run dev
```

La aplicación estará disponible en `http://127.0.0.1:3000`.

## Contribuciones

Las contribuciones son bienvenidas. Si deseas contribuir, por favor abre un issue o envía un pull request.

## Licencia

Este proyecto está bajo la Licencia MIT.