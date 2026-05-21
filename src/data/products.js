// Source of truth for all products on the Agroguti site.
// Schema designed to mirror a future DB row so this file can be swapped for
// a fetch from the AWS API by changing only src/lib/productsRepo.js.
//
// Field shape per product:
//   slug, hero{title,description}, seo{title,description,ogImage},
//   homeCard{image,badge}, packing?{image,title,description},
//   availability{ months: number[1-12], peak: number[1-12] },
//   variants: [{ key, accent{bgChip,textChip,iconColor}, tag, title,
//                color, humidity, sizes, sizesStyle?, packing,
//                images: string[], extraInfo? }]
//
// All localized strings are { es, en }. Arrays (sizes, packing) are { es: [...], en: [...] }.

const products = [
  // ────────────────────────────────────────────────────────────────
  // 1. PAPRIKA
  // ────────────────────────────────────────────────────────────────
  {
    slug: 'paprika',
    hero: {
      title: { es: 'Ají Páprika', en: 'Paprika Chili' },
      description: {
        es: 'Páprika (capsicum annum L.) es una variedad de pimiento dulce con la particularidad de ser alargado, distinto al "pimiento rojo" o "pimentón". Sus características de color, intensidad de picante y sabor, cambia de acuerdo a las mejoras genéticas de la planta y las técnicas de cultivo.',
        en: 'Paprika (capsicum annum L.) is a variety of sweet pepper with the particularity of being elongated, different from "red pepper" or "bell pepper". Its characteristics of color, spicy intensity, and flavor change according to the genetic improvements of the plant and cultivation techniques.',
      },
    },
    seo: {
      title: { es: 'Ají Páprika — Agroguti', en: 'Paprika Chili — Agroguti' },
      description: {
        es: 'Páprika de exportación peruana (Capsicum annuum). Especificaciones técnicas, calibres, empaque y galería de producto.',
        en: 'Peruvian export paprika (Capsicum annuum). Technical specs, sizes, packing and product gallery.',
      },
      ogImage: 'https://agroguti.com/images/paprika_1.jpeg',
    },
    homeCard: {
      image: '/images/paprika_segunda.png',
      badge: { es: 'Exportación', en: 'Export' },
    },
    packing: {
      image: '/images/caja_aji_seco.png',
      title: {
        es: 'Un vistazo a nuestras cajas de paprika',
        en: 'A look to our capsicum boxes',
      },
      description: {
        es: 'Pasa tu mouse sobre la caja para echarle un vistazo a nuestra calidad.',
        en: 'Hover your mouse over the box to get a closer look at our quality.',
      },
    },
    availability: {
      months: [3, 4, 5, 6, 7],
      peak: [5, 6],
    },
    variants: [
      {
        key: 'main',
        accent: {
          bgChip: 'bg-red-100',
          textChip: 'text-red-700',
          iconColor: 'text-red-600',
        },
        tag: {
          es: 'Especificaciones de Exportación',
          en: 'Export Specifications',
        },
        title: { es: 'Ficha técnica', en: 'Technical Sheet' },
        color: { es: 'Rojizo', en: 'Reddish' },
        humidity: { es: '>13% HR', en: '>13% RH' },
        sizes: {
          es: ['>12cm - 90% max.', '<12cm - 10% min.'],
          en: ['>12cm - 90% max.', '<12cm - 10% min.'],
        },
        packing: {
          es: ['Cajas de cartón de 11.36 kg o 25 lb', 'Pacas prensadas de 75 kg o 165 lb'],
          en: ['Cardboard boxes of 11.36 kg or 25 lb', 'Pressed bales of 75 kg or 165 lb'],
        },
        images: [
          '/images/paprika_primera.png',
          '/images/paprika_segunda.png',
          '/images/paprika_4.jpg',
        ],
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────
  // 2. GARLIC — multi-variant (white, purple, napuri)
  // ────────────────────────────────────────────────────────────────
  {
    slug: 'garlic',
    hero: {
      title: { es: 'Ajo', en: 'Garlic' },
      description: {
        es: 'El ajo (Allium sativum) es una planta culinaria conocida por sus propiedades medicinales y beneficios para la salud, como el fortalecimiento del sistema inmunitario, la mejora de la salud cardiovascular y la reducción de la inflamación',
        en: 'Garlic (Allium sativum) is a culinary plant known for its medicinal properties and health benefits, such as strengthening the immune system, improving cardiovascular health, and reducing inflammation',
      },
    },
    seo: {
      title: { es: 'Ajo de Exportación — Agroguti', en: 'Export Garlic — Agroguti' },
      description: {
        es: 'Ajo peruano de exportación: Chino Blanco, Chino Morado y Napurí Mejorado. Calibres 5, 6 y 7. Cajas y mallas disponibles.',
        en: 'Peruvian export garlic: Chinese White, Chinese Purple and Improved Napurí. Calibers 5, 6 and 7. Boxes and mesh bags available.',
      },
      ogImage: 'https://agroguti.com/images/ajo_1.jpg',
    },
    homeCard: {
      image: '/images/ajo_3.jpeg',
      badge: { es: 'Calidad Extra', en: 'Extra Quality' },
    },
    packing: {
      image: '/images/caja_ajo.png',
      title: {
        es: 'Un vistazo a nuestras cajas de ajo',
        en: 'A look to our garlic boxes',
      },
      description: {
        es: 'Pasa tu mouse sobre la caja para echarle un vistazo a nuestra calidad.',
        en: 'Get your mouse through the box to have a glance of our quality.',
      },
    },
    availability: {
      months: [7, 8, 9, 10, 11, 12],
      peak: [8, 9, 10],
    },
    variants: [
      // 2a. White garlic
      {
        key: 'white',
        accent: {
          bgChip: 'bg-green-100',
          textChip: 'text-[#28623f]',
          iconColor: 'text-green-600',
        },
        tag: { es: 'Ajo Chino Blanco', en: 'Chinese White Garlic' },
        title: { es: 'Ajo Chino Blanco', en: 'Chinese White Garlic' },
        availability: { months: [8, 9, 10, 11], peak: [9, 10] },
        color: { es: 'Blanco', en: 'White' },
        humidity: { es: '60% - 65% HR', en: '60% - 65% RH' },
        sizesStyle: 'inline',
        sizes: {
          es: ['Calibre 5 - 46 mm a 55 mm', 'Calibre 6 - 56 mm a 65 mm', 'Calibre 7 - 66 mm a 75 mm'],
          en: ['Caliber 5 - 46 mm to 55 mm', 'Caliber 6 - 56 mm to 65 mm', 'Caliber 7 - 66 mm to 75 mm'],
        },
        packing: {
          es: ['Cajas de cartón de 10 kg o 22 lb / Mallas de 25 kg o 55 lb'],
          en: ['Cardboard boxes of 10 kg or 22 lb / Nets of 25 kg or 55 lb'],
        },
        images: [
          '/images/ajo_1.jpg',
          '/images/ajo_2.jpg',
          '/images/ajo_3.jpeg',
        ],
      },
      // 2b. Purple garlic
      {
        key: 'purple',
        accent: {
          bgChip: 'bg-purple-100',
          textChip: 'text-purple-700',
          iconColor: 'text-purple-600',
        },
        tag: { es: 'Ajo Chino Morado', en: 'Chinese Purple Garlic' },
        title: { es: 'Ajo Chino Morado', en: 'Chinese Purple Garlic' },
        availability: { months: [12, 1], peak: [12] },
        color: { es: 'Morado', en: 'Purple' },
        humidity: { es: '60% - 70% HR', en: '60% - 70% RH' },
        sizesStyle: 'inline',
        sizes: {
          es: ['Calibre 5 - 55 mm a 59 mm', 'Calibre 6 - 56 mm a 65 mm', 'Calibre 7 - 66 mm a 75 mm'],
          en: ['Caliber 5 - 55 mm to 59 mm', 'Caliber 6 - 56 mm to 65 mm', 'Caliber 7 - 66 mm to 75 mm'],
        },
        packing: {
          es: ['Cajas de cartón de 10 kg o 22 lb', 'Mallas de 25 kg o 55 lb'],
          en: ['Cardboard boxes of 10 kg or 22 lb', 'Nets of 25 kg or 55 lb'],
        },
        images: [
          '/images/ajo_7.webp',
          '/images/ajo_8.webp',
          '/images/ajo_9.jpg',
        ],
      },
      // 2c. Napuri improved
      {
        key: 'napuri',
        accent: {
          bgChip: 'bg-amber-100',
          textChip: 'text-amber-700',
          iconColor: 'text-amber-600',
        },
        tag: { es: 'Variedad Especial', en: 'Special Variety' },
        title: { es: 'Ajo Napuri', en: 'Napuri Garlic' },
        availability: { months: [9, 10, 11], peak: [10] },
        color: { es: 'Morado o blanco', en: 'Purple or white' },
        humidity: { es: '65% HR', en: '65% RH' },
        sizesStyle: 'inline',
        sizes: {
          es: ['4', '5', '6', '7'],
          en: ['4', '5', '6', '7'],
        },
        packing: {
          es: ['Sacos de malla / Cajas'],
          en: ['Mesh sacks / Boxes'],
        },
        images: [
          '/images/ajo_4.jpg',
          '/images/ajo_5.jpg',
          '/images/ajo_6.webp',
        ],
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────
  // 3. PEPPER (Chile Ancho)
  // ────────────────────────────────────────────────────────────────
  {
    slug: 'pepper',
    hero: {
      title: { es: 'Chile ancho', en: 'Ancho Chili' },
      description: {
        es: 'El chile poblano (fresco) o chile ancho (seco) es una variedad del chile Capsicum annuum. Es muy apreciado en la gastronomía mexicana, donde se usa en todo tipo de recetas, como en los populares chiles rellenos. En comparación con otros tipos de chiles, el poblano es un fruto grande y con bajo contenido de capsaicina (entre 1.000–2.000 en la escala Scoville), por lo que no es muy picante.',
        en: 'The poblano chili (fresh) or ancho chili (dry) is a variety of Capsicum annuum chili. It is highly appreciated in Mexican cuisine, where it is used in all kinds of recipes, such as the popular stuffed chiles. Compared to other types of chiles, the poblano is a large fruit with low capsaicin content (between 1,000–2,000 on the Scoville scale), so it is not very spicy.',
      },
    },
    seo: {
      title: { es: 'Chile Ancho — Agroguti', en: 'Ancho Chili — Agroguti' },
      description: {
        es: 'Chile ancho (poblano seco) peruano de exportación. Capsicum annuum, 1.000–2.000 Scoville. Especificaciones y empaque disponibles.',
        en: 'Peruvian export ancho chili (dried poblano). Capsicum annuum, 1,000–2,000 Scoville. Specs and packing available.',
      },
      ogImage: 'https://agroguti.com/images/pimiento_1.jpg',
    },
    homeCard: {
      image: '/images/sargento_primera.png',
      badge: { es: 'Majes, Perú', en: 'Majes, Peru' },
    },
    packing: {
      image: '/images/caja_aji_seco.png',
      title: {
        es: 'Un vistazo a nuestras cajas de pimiento',
        en: 'A look at our pepper boxes',
      },
      description: {
        es: 'Pasa tu mouse sobre la caja para echarle un vistazo a nuestra calidad.',
        en: 'Hover your mouse over the box to get a closer look at our quality.',
      },
    },
    availability: {
      months: [5, 6, 7],
      peak: [5],
    },
    variants: [
      {
        key: 'main',
        accent: {
          bgChip: 'bg-orange-100',
          textChip: 'text-orange-700',
          iconColor: 'text-orange-600',
        },
        tag: { es: 'Variedad Capsicum', en: 'Capsicum Variety' },
        title: { es: 'Ficha técnica', en: 'Technical Sheet' },
        color: { es: 'Rojizo oscuro', en: 'Dark reddish' },
        humidity: { es: '>13% HR', en: '>13% RH' },
        sizes: {
          es: ['>12cm - 90% max.', '<12cm - 10% min.'],
          en: ['>12cm - 90% max.', '<12cm - 10% min.'],
        },
        packing: {
          es: ['Cajas de cartón de 11.36 kg o 25 lb', 'Pacas prensadas de 75 kg o 165 lb'],
          en: ['Cardboard boxes of 11.36 kg or 25 lb', 'Pressed bales of 75 kg or 165 lb'],
        },
        images: [
          '/images/sargento_primera.png',
          '/images/don_antonio.png',
          '/images/sargento_segunda.png',
        ],
        extraInfo: {
          es: '1.000 – 2.000 Scoville (Bajo Picor)',
          en: '1,000 – 2,000 Scoville (Low Heat)',
        },
      },
    ],
  },

  {
    slug: 'grapes',
    hero: {
      title: { es: 'Uvas', en: 'Grapes' },
      description: {
        es: 'Carnosas, de piel firme y rebosantes de jugo, nuestras uvas logran el equilibrio que todo buen racimo debe tener: una dulzura natural profunda, realzada por un final limpio y refrescante. Seleccionadas a mano en su punto óptimo, mantienen su frescura desde el primer bocado hasta el último. Perfectas en una tabla de quesos, reducidas en salsas, o disfrutadas directamente del racimo.',
        en: 'Plump, taut-skinned, and bursting with juice, our grapes strike the balance every great bunch should: deep natural sweetness lifted by a clean, refreshing finish. Hand-selected at peak ripeness, they hold their snap from the first bite to the last. Equally at home on a cheese board, pressed into a reduction, or eaten straight from the stem.',
      },
    },
    seo: {
      title: { es: 'Uvas — Agroguti', en: 'Grapes — Agroguti' },
      description: {
        es: 'Uvas peruanas de exportación: variedades Thompson Seedless y Red Globe. Seleccionadas a mano en su punto óptimo. Especificaciones y galería de producto.',
        en: 'Peruvian export grapes: Thompson Seedless and Red Globe varieties. Hand-selected at peak ripeness. Technical specs and product gallery.',
      },
      ogImage: 'https://agroguti.com/images/uva_thompson_1.jpeg',
    },
    homeCard: {
      image: '/images/uva_thompson_1.jpeg',
      badge: { es: 'Calidad top', en: 'Top quality' },
    },
    availability: {
      months: [4, 5, 6, 7, 8, 9, 10, 11, 12],
      peak: [9, 10, 11],
    },
    variants: [
      {
        key: 'thompson',
        accent: {
          bgChip: 'bg-green-100',
          textChip: 'text-[#28623f]',
          iconColor: 'text-green-600',
        },
        tag: { es: 'Uva Thompson Seedless', en: 'Thompson Seedless Grape' },
        title: { es: 'Uva Thompson', en: 'Thompson Grape' },
        color: { es: 'Verde', en: 'Green' },
        humidity: { es: '90% - 95% HR', en: '90% - 95% RH' },
        sizesStyle: 'inline',
        sizes: {
          es: ['Calibre L - 17 mm a 19 mm', 'Calibre XL - 19 mm a 21 mm', 'Calibre J - 21 mm a 24 mm', 'Brix 17° - 18°'],
          en: ['Caliber L - 17 mm to 19 mm', 'Caliber XL - 19 mm to 21 mm', 'Caliber J - 21 mm to 24 mm', 'Brix 17° - 18°'],
        },
        packing: {
          es: ['Cajas plásticas de 8.2 kg', 'Cajas de 4.5 kg con racimos embolsados'],
          en: ['Plastic boxes of 8.2 kg', 'Boxes of 4.5 kg with bagged clusters'],
        },
        images: [
          '/images/uva_thompson_1.jpeg',
          '/images/uva_thompson_2.jpg',
          '/images/uva_thompson_3.jpg',
        ],
      },

      {
        key: 'red_globe',
        accent: {
          bgChip: 'bg-red-100',
          textChip: 'text-red-700',
          iconColor: 'text-red-600',
        },
        tag: { es: 'Uva Red Globe', en: 'Red Globe Grape' },
        title: { es: 'Uva Red Globe', en: 'Red Globe Grape' },
        color: { es: 'Rojo', en: 'Red' },
        humidity: { es: '90% - 95% HR', en: '90% - 95% RH' },
        sizesStyle: 'inline',
        sizes: {
          es: ['Calibre L - 22 mm a 24 mm', 'Calibre XL - 24 mm a 26 mm', 'Calibre J - 26 mm a 28 mm', 'Brix 16° - 19°'],
          en: ['Caliber L - 22 mm to 24 mm', 'Caliber XL - 24 mm to 26 mm', 'Caliber J - 26 mm to 28 mm', 'Brix 16° - 19°'],
        },
        packing: {
          es: ['Cajas plásticas de 8.2 kg', 'Cajas de 4.5 kg con racimos embolsados'],
          en: ['Plastic boxes of 8.2 kg', 'Boxes of 4.5 kg with bagged clusters'],
        },
        images: [
          '/images/uva_red_globe_1.jpg',
          '/images/uva_red_globe_2.jpeg',
          '/images/uva_red_globe_3.jpeg',
        ],
      },
    ],
  },

  {
    slug: 'avocado',
    hero: {
      title: { es: 'Palta', en: 'Avocado' },
      description: {
        es: 'Mantecosa, densa y discretamente lujosa. Nuestras paltas maduran hasta lograr una pulpa tan suave que se unta como crema, con una profundidad sutil a nuez que combina con la misma facilidad con sal y limón que con huevos, pescado o una tortilla caliente. Cosechadas a mano y llevadas a su punto justo de maduración, son el fruto que transforma una simple tostada en un momento para detenerse y disfrutar.',
        en: 'Buttery, dense, and quietly luxurious. Our avocados ripen into a flesh so smooth it spreads like cream, with a mellow, nutty depth that pairs as easily with sea salt and lime as it does with eggs, fish, or a warm tortilla. Harvested by hand and brought to ideal ripeness, they are the kind of fruit that turns a simple piece of toast into something worth slowing down for.',
      },
    },
    seo: {
      title: { es: 'Palta Hass — Agroguti', en: 'Hass Avocado — Agroguti' },
      description: {
        es: 'Palta Hass peruana de exportación. Pulpa mantecosa con sabor sutil a nuez. Cosechada a mano y llevada a su punto justo de madurez.',
        en: 'Peruvian export Hass avocado. Buttery flesh with a mellow, nutty depth. Hand-harvested and brought to ideal ripeness.',
      },
      ogImage: 'https://agroguti.com/images/palta_hass_1.jpeg',
    },
    homeCard: {
      image: '/images/palta_hass_1.jpeg',
      badge: { es: 'Calidad top', en: 'Top quality' },
    },
    availability: {
      months: [3, 4, 5, 6, 7],
      peak: [4, 5, 6],
    },
    variants: [
      {
        key: 'main',
        accent: {
          bgChip: 'bg-gray-100',
          textChip: 'text-gray-700',
          iconColor: 'text-gray-600',
        },
        tag: { es: 'Palta Hass', en: 'Hass Avocado' },
        title: { es: 'Palta Hass', en: 'Hass Avocado' },
        color: { es: 'Verde oscuro', en: 'Dark green' },
        humidity: { es: '85% - 90% HR', en: '85% - 90% RH' },
        sizes: { es: ['10-12 cm', 'Calibres 24 a 32', 'Materia seca 21% - 26%'], en: ['10-12 cm', 'Calibers 24 to 32', 'Dry matter 21% - 26%'] },
        packing: { es: ['Cajas de 10 kg de plástico'], en: ['10 kg plastic boxes'] },
        images: ['/images/palta_hass_2.avif', '/images/palta_hass_3.jpg', '/images/palta_hass_1.jpeg'],
      },
    ],
  },

  {
    slug: 'pomegranate',
    hero: {
      title: { es: 'Granada', en: 'Pomegranate' },
      description: {
        es: 'Una fruta de drama silencioso. Bajo su cáscara curtida de color carmesí se esconde una constelación de granos color rubí, cada uno cargado de una dulzura brillante y tánica, equilibrada por un susurro de acidez. Apreciadas durante siglos en las cocinas persa, mediterránea y del Nuevo Mundo, nuestras granadas crecen en microclimas áridos que intensifican tanto su color como su sabor.',
        en: 'A fruit of quiet drama. Beneath its leathered crimson shell lies a constellation of ruby arils, each one bursting with a bright, tannic sweetness balanced by a whisper of tartness. Prized for centuries across the cuisines of Persia, the Mediterranean, and the New World, our pomegranates are grown in arid microclimates that intensify both color and flavor.',
      },
    },
    seo: {
      title: { es: 'Granada — Agroguti', en: 'Pomegranate — Agroguti' },
      description: {
        es: 'Granadas peruanas de exportación. Cáscara carmesí y granos rubí con dulzura brillante y un toque tánico. Cultivadas en microclimas áridos.',
        en: 'Peruvian export pomegranates. Crimson shell and ruby arils with bright, tannic sweetness. Grown in arid microclimates.',
      },
      ogImage: 'https://agroguti.com/images/pomegranate_2.jpg',
    },
    homeCard: {
      image: '/images/pomegranate_3.jpg',
      badge: { es: 'Calidad top', en: 'Top quality' },
    },
    availability: {
      months: [12, 1, 2, 3, 4],
      peak: [2, 3],
    },
    variants: [
      {
        key: 'main',
        accent: {
          bgChip: 'bg-gray-100',
          textChip: 'text-gray-700',
          iconColor: 'text-gray-600',
        },
        tag: { es: 'Variedad Wonderful', en: 'Wonderful Variety' },
        title: { es: 'Ficha técnica', en: 'Technical Sheet' },
        color: { es: 'Rojo oscuro', en: 'Dark red' },
        humidity: { es: '85% - 90% HR', en: '85% - 90% RH' },
        sizesStyle: 'inline',
        sizes: {
          es: ['Calibres 6 a 12 (unidades por caja)', 'Calidad Premium "A"'],
          en: ['Calibers 6 to 12 (units per box)', 'Premium "A" grade'],
        },
        packing: {
          es: ['Cajas de cartón de 3.8 kg (bandeja monocapa)', '216 cajas por paleta'],
          en: ['Cardboard boxes of 3.8 kg (single-layer tray)', '216 boxes per pallet'],
        },
        images: ['/images/pomegranate_1.jpeg', '/images/pomegranate_2.jpg', '/images/pomegranate_3.jpg'],
      },
    ],
  },
];

export default products;
