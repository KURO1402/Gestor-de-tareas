# 🗂️ Gestor de Tareas

Aplicación web para la gestión de tareas personales con funcionalidades de autenticación, creación, edición y eliminación de tareas.

## 🧩 Funcionalidades principales

- Registro e inicio de sesión de usuarios
- Creación, edición y eliminación de tareas
- Visualización de lista de tareas por usuario
- Protección de rutas con autenticación (JWT)
- Interfaz responsiva

---

## 🚀 Tecnologías utilizadas

- **Frontend**: React.js
- **Backend**: Node.js + Express
- **Base de datos**: MySQL
- **Autenticación**: JWT
- **Control de versiones**: Git y GitHub

---

## 👥 Organización del equipo

### 👩‍💻 Persona 1: Frontend - Autenticación y Estructura General
- Configuración inicial de React
- Creación de vistas para login y registro
- Validación de formularios
- Conexión con el backend para autenticación
- Gestión de tokens (JWT) y persistencia de sesión

### 👨‍💻 Persona 2: Frontend - Gestión de Tareas
- Componente para listar tareas del usuario
- Formulario para agregar tareas
- Funcionalidad para editar y eliminar tareas
- Marcar tareas como completadas
- Conexión con la API del backend
- Estilos y diseño responsivo

### 👨‍💻 Persona 3: Backend - Autenticación de Usuarios
- Configuración de Express y conexión a MySQL
- Creación de endpoints:
  - `POST /register` (registro de usuarios)
  - `POST /login` (inicio de sesión)
- Implementación de JWT para autenticación
- Middleware de protección de rutas

### 👨‍💻 Persona 4: Backend - API de Tareas y Base de Datos
- Diseño de base de datos (tablas `users` y `tasks`)
- CRUD de tareas:
  - `GET /tasks`
  - `POST /tasks`
  - `PUT /tasks/:id`
  - `DELETE /tasks/:id`
- Asociación de tareas a usuarios autenticados

---

## 🗓️ Cronograma de desarrollo (1 semana)

| Día | Objetivo principal |
|-----|--------------------|
| 1   | Setup de repositorios y estructuras base (frontend + backend) |
| 2   | Autenticación de usuarios (registro e inicio de sesión) |
| 3   | Implementación del CRUD de tareas en backend |
| 4   | Desarrollo del frontend de tareas (vista de lista y agregar) |
| 5   | Edición y eliminación de tareas desde el frontend |
| 6   | Pruebas, integración completa y corrección de errores |
| 7   | Presentación, documentación final y limpieza de código |

---

## 📁 Estructura del proyecto
    /frontend
    /components
    /pages
    /services
    App.js
    index.js
    /backend
    /controllers
    /routes
    /models
    /middlewares
    app.js
    config.js