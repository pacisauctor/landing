# Revisión de UI/UX — landing de Axel García

Segunda pasada, después del comentario de que la primera se quedó en contraste y detalles y no atacó el espacio ni el ritmo.

## Altura de la página

Medida con el contenido ya visible (sin esperar animaciones), misma anchura.

| Viewport | Antes | Después | Diferencia |
| --- | ---: | ---: | ---: |
| Escritorio 1440 px | 11 779 px | 6 644 px | −5 135 px (−44 %) |
| Móvil 390 px | 13 289 px | 12 097 px | −1 192 px (−9 %) |

En escritorio el salto es grande porque el hero ya no ocupa toda la pantalla, desaparecen dos banners que repetían cifras y las secciones dejan de ir a `py-20`. En móvil el contenido sigue en una sola columna (experiencia, habilidades y certificados), así que la altura baja menos. Las capturas de antes y después están en los artefactos del PR.

## Qué cambió en esta pasada

- Hero sin `min-h-screen`, foto más chica (144 / 176 / 224 px) y sin aro giratorio ni flecha que rebota. El llamado principal es «Agendar una llamada».
- Secciones de `py-20` a `py-10` / `py-12`. Títulos de `text-4xl` a `text-3xl`. Menos margen entre bloques y tarjetas más justas (`p-8` → `p-4`/`p-5`).
- Sobre mí más corto: el rol actual, dos párrafos y tres principios en una línea cada uno. Se quitó el subtítulo que no decía nada.
- Se eliminó el banner de habilidades que repetía 4+, 10+ y 15+, y el banner azul de certificaciones. La prueba sigue en las tarjetas.
- El bloque «Invítame un café» no se muestra mientras no haya URL.
- Animaciones de entrada fuera. Dejaban el texto en `opacity: 0` hasta 0,8 s, con retrasos en cadena, y en el primer render el `h1` no se podía leer. El menú móvil abre en 200 ms. Hover de tarjetas y botones, 200 ms, sin saltos grandes. `prefers-reduced-motion` sigue cortando el movimiento que queda.

## Contenido

El cargo visible, el `<title>`, la meta description, Open Graph, Twitter y el JSON-LD dicen **Head of Technology**. La marca, en minúsculas: **tizo**. En Experiencia, Head of Technology va de enero de 2026 a la actualidad; Head of Delivery & Engineering Operations queda como historia (2024 – 12/2025). El CTA ya no pide un Project Manager o un Lead Developer.

## Dominio

`SITE_URL` es `https://agarciadarce.com`. Canónica, Open Graph, JSON-LD, `robots.txt` y `sitemap.xml` salen de esa constante.

## Marca

Se sustituyó el monograma AG genérico. La comparación está en `docs/logo-options/comparison.png`. En uso: **02 Avance** (A con flecha). Puente y Ruta se pierden a 16 px; el wordmark «Axel» solo funciona en grande.

## Texto final de Sobre mí

Head of Technology en tizo.

Empecé construyendo software. Hoy el trabajo es entender el problema primero y después armar el sistema correcto: ingeniería, producto, datos o IA.

A veces ese sistema es código. A veces es una arquitectura, un proceso o un equipo que puede decidir sin depender de una sola persona.

- Tecnología con intención. Primero el problema y el resultado.
- Sistemas, no heroicidades. El equipo decide sin un héroe.
- Resultados, no volumen. Importa el valor, no la cantidad.

## Primera pasada (sigue vigente)

Contraste del pie (blanco y `blue-50` sobre `#2563eb`), foto en WebP con `alt="Axel García"`, enlace de agenda en pestaña nueva, foco visible, un solo `h1`, favicon y metadatos. LinkedIn, GitHub y el café siguen vacíos a propósito.
