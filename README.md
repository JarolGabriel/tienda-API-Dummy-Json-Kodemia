# Tienda Online con React

Este proyecto es una tienda online desarrollada con React, utilizando varias
librerías y herramientas para mejorar la experiencia de desarrollo y la
funcionalidad del sitio. La aplicación permite a los usuarios navegar por los
productos, iniciar sesión y ver detalles específicos de los productos.

## Características

- **Rutas:** La navegación entre las páginas se maneja con `react-router`,
  permitiendo la creación de rutas dinámicas, como la visualización de productos
  por su ID.
- **Estado:** Se utiliza `useState` para manejar el estado local en los
  componentes.
- **Efectos secundarios:** `useEffect` se emplea para realizar operaciones como
  la obtención de datos de la API cuando se cargan los componentes.
- **Referencias:** `useRef` se usa para manejar referencias directas a elementos
  del DOM.
- **Estilos:** Tailwind CSS se utiliza para el diseño responsivo y la
  personalización del estilo de los componentes.
- **Formulario:** `useForme` facilita la gestión de formularios dentro de la
  aplicación.
- **Condiciones de clase:** `clsx` se usa para manejar de manera eficiente las
  clases condicionales en los componentes.
- **Outlet:** Se usa el componente `Outlet` para la renderización de rutas
  anidadas.

## Páginas

- **Inicio (Home):** Página principal donde se muestran productos destacados y
  opciones de navegación.
- **Login:** Página para que los usuarios puedan iniciar sesión.
- **Productos:** Página que lista todos los productos disponibles en la tienda.
- **Producto Detallado:** Página que muestra los detalles de un producto
  específico, seleccionado por su ID.

## Tecnologías Utilizadas

- **React:** Biblioteca principal para la construcción de la interfaz de
  usuario.
- **Node.js:** Utilizado para manejar el backend y las API necesarias para la
  aplicación.
- **Vite:** Herramienta de desarrollo para un rápido inicio y construcción de la
  aplicación.
- **Tailwind CSS:** Framework de CSS para estilizar la aplicación.
- **React Router:** Manejo de rutas en la aplicación.
- **useForme:** Librería para manejar formularios en React.
- **clsx:** Utilidad para condicionar clases CSS en React.

## API Utilizada

- **Dummy JSON API:** Se consume la API de
  [Dummy JSON](https://dummyjson.com/products) para obtener datos de productos
  que se muestran en la tienda.

## Instalación y Configuración

1. Clona este repositorio:
   ```bash
   git clone https://github.com/tu-usuario/tu-repo.git
   ```
2. Navega al directorio del proyecto:
   ```bash
   cd tu-repo
   ```
3. Instala las dependencias:
   ```bash
   npm install
   ```
4. Ejecuta la aplicación en modo desarrollo:
   ```bash
   npm run dev
   ```

## Cómo Contribuir

Las contribuciones son bienvenidas. Por favor, sigue los pasos para contribuir:

1. Haz un fork del repositorio.
2. Crea una nueva rama con tus cambios: `git checkout -b mi-nueva-rama`.
3. Realiza los cambios y haz un commit:
   `git commit -m 'Descripción de mis cambios'`.
4. Sube tus cambios a la rama: `git push origin mi-nueva-rama`.
5. Envía un Pull Request.

## Licencia

Este proyecto está bajo la Licencia MIT. Para más detalles, consulta el archivo
[LICENSE](LICENSE).
