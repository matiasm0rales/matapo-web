# matapo-web

Landing page de [Matapo](https://github.com/matiasm0rales/tapo-tv): app no oficial para ver y controlar cámaras Tapo en Android TV y en la Mac.

Hecha con React, Vite y CSS propio. Sin backend. Tipografía Manrope (autoalojada con `@fontsource-variable/manrope`).

## Desarrollo

```bash
npm install
```

```bash
npm run dev
```

```bash
npm run build && npm run preview
```

## Contenido

El texto, las capturas (`public/screenshots/`) y la marca (`public/brand/`) salen del repo de la app. Las capturas están en WebP; el PNG original de cada una vive en la app. `public/og.png` es el banner para Open Graph.

## Despliegue

Se despliega en Vercel; cada push a `main` publica una nueva versión.
