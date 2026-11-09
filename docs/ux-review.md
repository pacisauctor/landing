# Revisión de UI/UX — landing de Axel García

Auditoría visual sobre el sitio existente (sistema azul, Inter, tarjetas y secciones). No es un rediseño: solo se aplicaron correcciones de bajo riesgo. Los cambios de fondo, de contenido o de arquitectura quedan como sugerencias.

## Hallazgos

1. **Contraste del pie de página.** El nombre usaba un degradado de `blue-400` a `blue-600` sobre fondo `blue-600` (`#2563eb`). El tramo final del texto desaparecía. Los títulos de columna (`text-blue-300`, contraste ~2.9:1) y los enlaces (`text-gray-400`, ~2.0:1) tampoco llegaban a AA. El blanco sobre ese azul sí pasa (~5.2:1) y `blue-50` también (~4.8:1).
2. **Foto de perfil incorrecta y pesada.** El hero apuntaba a `axel.jpg` (retrato de cuerpo entero, ~1.5 MB) y la ruta no tenía `/` inicial, así que `next/image` no la resolvía como asset público.
3. **El botón de agenda no llevaba a ningún sitio.** `EXTERNAL_LINKS.calendar` estaba vacío y el control era un `window.open` condicionado, no un enlace.
4. **Jerarquía entre secciones.** Experiencia y Habilidades compartían fondo blanco; las tarjetas de Contacto también se fundían con el fondo blanco.
5. **Hero en pantallas estrechas.** El círculo de 320 px (`w-80`) más el padding desbordaba viewports de ~320 px. El menú fijo podía tapar la foto.
6. **Cargos truncados.** En Experiencia, el puesto y la empresa usaban `truncate` en una sola línea, así que en móvil se perdía «Head of Delivery & Engineering Operations».
7. **Iconos de habilidades definidos y no mostrados.** Cada categoría ya traía icono y color, pero la tarjeta solo mostraba el título.
8. **Enlaces sociales vacíos.** LinkedIn y GitHub eran `<a href="">`, que recarga la página. El comentario del código pedía que no navegaran.
9. **Pantalla de carga artificial.** El estado inicial ocultaba el contenido (y el único `h1`) hasta un `useEffect` que no espera ningún dato.
10. **Foco y nombre accesible.** El logo era un `div` con clic, el menú móvil no tenía `aria-expanded` y varios controles no tenían anillo de foco.
11. **Fuente Inter por partida doble.** `next/font` ya la carga y `globals.css` volvía a pedirla a Google Fonts.
12. **Años de experiencia inconsistentes** y **«tizo» / «Tizo»**. Ver sugerencias: no se tocó el copy.
13. **SEO incompleto para el cargo actual.** El título seguía en «Project Manager & Lead Developer», sin canónica fiable, sin imagen Open Graph, sin JSON-LD y sin `robots.txt` / `sitemap.xml`. El dominio `axelgarcia.dev` no está respaldado por configuración de deploy.

## Qué se aplicó

- Pie: nombre, títulos, cuerpo y enlaces en blanco o `blue-50`; divisoria `border-white/40`; enlaces rápidos centrados con más área táctil; correo con `break-all`.
- Foto profesional en `public/images/axel-garcia.webp` (~37 KB), `alt="Axel García"`, recorte circular responsive (`224 / 288 / 384` px) y `object-position` hacia el rostro. Se eliminó `public/axel.jpg`.
- «Agendar una Llamada» es un `<a href="https://calendar.app.google/prgzVh2q3h4Yp2TU7" target="_blank" rel="noopener noreferrer">`. No había otro botón de agenda en la página montada. «Contáctame» sigue bajando a contacto; teléfono y WhatsApp siguen en sus canales.
- Fondos alternos: Habilidades `bg-gray-50`, Certificaciones `bg-white`, Contacto `bg-gray-50`, para separar bloques y sacar las tarjetas del blanco sobre blanco.
- Hero: imagen más chica en móvil, `pt-16` para librar la navegación, anillos de foco y el chevron como botón con nombre accesible.
- Experiencia: el puesto y la empresa pueden partir línea en lugar de truncarse.
- Habilidades: iconos de categoría y de habilidades blandas, con el mismo círculo suave que ya usan las estadísticas.
- Redes sin URL: se muestran, no navegan. «Invítame un Café» queda deshabilitado mientras `buyMeACoffee` esté vacío.
- Se quitó la pantalla de carga que no esperaba nada, para que el `h1` esté en el HTML inicial. Sigue habiendo un solo `h1` (el nombre en el hero).
- Logo monograma AG (`public/logo.svg`) en la navegación y el pie. Favicon: `favicon.svg`, `favicon.ico`, `apple-touch-icon.png` (180), `icon-192.png`, `icon-512.png` y manifest. Enlazados en el `<head>`.
- SEO en español: título, descripción, `lang="es"`, canónica, Open Graph, Twitter card, imagen OG 1200×630, JSON-LD `Person` (nombre, `jobTitle`, email, teléfono, `worksFor` Tizo). `sameAs` no se incluye porque LinkedIn y GitHub están vacíos. `robots.txt` y `sitemap.xml` salen de `app/robots.ts` y `app/sitemap.ts`.
- `prefers-reduced-motion` desactiva el aro giratorio; Framer Motion respeta la preferencia del sistema. Placeholders de formulario en gris 500.

## Sugerencias que no se aplicaron

- **Unificar los años** (el hero y las estadísticas dicen 4+; Sobre mí y el pie dicen más de 5). Hace falta la cifra que Axel quiera publicar.
- **Grafía de la empresa** («tizo» en el hero y en Experiencia, «Tizo» en el pie y en este encargo). Puede ser marca en minúscula.
- **Quitar o rellenar el bloque «Invítame un café»** y los iconos de LinkedIn/GitHub. Siguen visibles a propósito, como marcaba el código, pero un botón deshabilitado en producción confunde.
- **Handle de Twitter `@axelgarcia`.** Estaba en la metadata y no aparece en el sitio. Se quitó para no publicar un perfil no confirmado.
- **Certificados enlazados en caliente** (YouTube, Pinterest, Blogger). Pueden romperse y algunas miniaturas no son el diploma. Hospedarlas sería un cambio de contenido, no un ajuste visual.
- **`simple-hero.tsx` y `projects-section.tsx` no se montan.** El hero simple todavía usa una foto de Unsplash y un CV que abre `#`. No se tocaron para no refactorizar código fuera de la página.
- **Reescribir las tarjetas de PrimeReact** (padding doble de `Card` + `p-8`, barras de progreso sin nombre accesible propio). El porcentaje ya está en texto; cambiar el componente sería más invasivo.
- **Barra de navegación con estado de sección activa** y un segundo llamado a agendar en el hero. Mejoran la orientación, pero añaden UI nueva.
- **Dominio real, Search Console y perfiles `sameAs`.** Bloqueados hasta que Axel confirme las URLs.

## Placeholders que necesitan a Axel

| Dónde | Qué falta |
| --- | --- |
| `lib/site.ts` → `SITE_URL` | Dominio de producción. Hoy: `https://pendiente-dominio.example`. Canónica, Open Graph, JSON-LD, `robots.txt` y `sitemap.xml` usan esa constante. `https://axelgarcia.dev` no está verificado. |
| `lib/external-links.ts` | `linkedin`, `github`, `buyMeACoffee` siguen vacíos. Con una URL pública se puede añadir `sameAs` al JSON-LD. |
| Copy | Años de experiencia (4+ frente a 5+) y si la marca es `tizo` o `Tizo`. |
| Redes | Confirmar si existe un usuario de X/Twitter antes de volver a poner `twitter:creator`. |
