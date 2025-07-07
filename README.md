# Proyecto Estático React

Este es un proyecto base creado con Vite, React y TailwindCSS.

## Tecnologías utilizadas

- [Vite](https://vitejs.dev/) - Herramienta de construcción rápida
- [React 19](https://react.dev/) - Biblioteca para construir interfaces de usuario
- [TailwindCSS](https://tailwindcss.com/) - Framework CSS de utilidades
- [React Icons](https://react-icons.github.io/react-icons/) - Iconos para React
- [ESLint](https://eslint.org/) - Linter para JavaScript/TypeScript

## Requisitos previos

- Node.js (versión recomendada: 18.x o superior)
- npm o yarn o pnpm

## Instalación

1. Clona el repositorio o descarga los archivos
2. Instala las dependencias:

```bash
npm install
# o
yarn install
# o
pnpm install
```

## Comandos disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Compila el proyecto para producción
- `npm run lint` - Ejecuta el linter
- `npm run preview` - Vista previa de la compilación de producción

## Estructura del proyecto

```
/
├── public/             # Archivos estáticos
├── src/                # Código fuente
│   ├── App.jsx         # Componente principal
│   ├── main.jsx        # Punto de entrada
│   └── index.css       # Estilos globales (TailwindCSS)
├── .gitignore          # Archivos ignorados por git
├── eslint.config.js    # Configuración de ESLint
├── index.html          # Plantilla HTML principal
├── package.json        # Dependencias y scripts
├── postcss.config.js   # Configuración de PostCSS
├── tailwind.config.js  # Configuración de TailwindCSS
└── vite.config.js      # Configuración de Vite
```

## Personalización

El proyecto está listo para ser personalizado según tus necesidades. Puedes:

- Modificar los colores y estilos en `tailwind.config.js`
- Añadir nuevos componentes en la carpeta `src/components` (deberás crearla)
- Configurar rutas con React Router (necesitarás instalar `react-router-dom`)
