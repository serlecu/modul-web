# Web for modul

based on [ice.js](https://v3.ice.work/).


## Usage

```bash
$ npm install

$ npm start
```

## Directories

```md
.
├── README.md
├── ice.config.mts                  # The project config.
├── package.json
├── .browserslistrc                 # Browsers that support.
├── public                          # Static files.
├── src                             # Application source code.
│   ├── app.ts                      # The app entry.
│   ├── assets                      # Assets directory.
│   ├── data                        # Static data (.json/.csv) directory.
│   ├── document.tsx                # The document entry.
│   ├── components                  # Components directory.
│   │   ├── composite               # Composite components directory.
│   │   |   └── Comp                # Component folder.
│   │   |   |   ├── Comp.module.css # Component styles.
│   │   |   |   └── Comp.tsx        # Component code.
│   │   └── pure                    # Pure components directory.
│   ├── hooks                       # Hooks directory.
│   ├── pages                       # Pages directory.
│   │   ├── index.module.css        # Index page style.
│   │   └── index.tsx               # Index page component.
│   └── typings.d.ts                # The type definition.
└── tsconfig.json
```

> Note!: The resources in `public` directory will be completely copied to the `output` directory during the build phase, and the filename will not be changed.


## Data structure
The data strucutre should follow non-relational database principles.
It should be separated in different collections (.json files) and each collection should be independent.

```md
Events.json
{
  "events": [
    {
      "id": "1",
      "name": "SYNC #1",
      "type": "live",
      "img_cover": "./feat_img1.jpg",
      "datetime": {
        "date": "2023-10-01",
        "time": "18H00"
      }
      "info": {
        "name_es": "SYNC #1",
        "name_va": "",
        "name_en": "",
        "name_long_es": "Sesiones de Imporvisación Audiovisual",
        "name_long_va": "",
        "name_long_en": "",
      },
      "artists": [
        {
          "id": "1",
          "name": "Artista 1", // siempre nombre artisti
          "country": "", // Country code (ISO 3166-1 alpha-2)
          "discipline": "video", // audio | video
          "website": "",
          "socials": {
            "instagram": "",
            "soundcloud": "",
            "spotify": "",
            "youtube": ""
          }
        }
      ],
      "img": [
        {
          "id": "1",
          "url": "https://example.com/photo1.jpg"
        }
      ],
      "av": [
        {
          "id": "1",
          "artist_a": "",
          "artist_b": "",
          type: "av",
          "src": "https://example.com/av1.mp4"
        }
      ],
    }
  ]
}
```
```md
Merch.json
{
  "merch": [
    {
      "id": "1",
      "category": "camiseta",
      "name_es": "modul negro",
      "name_va": "modul negre",
      "name_en": "modul black",
      "price": 00.00,
      "size": "M", // S | M | L | XL
      "description_es": "Camiseta de algodón orgánico",
      "description_va": "Samarreta de cotó orgànic",
      "description_en": "Organic cotton t-shirt",
      "imgs": [
        {
          "id": "1",
          "url": "https://example.com/tshirt1.jpg"
        }
      ]
    },
    {
      "id": "2",
      "category": "poster",
      "name_es": "Póster",
      "name_va": "Pòster",
      "name_en": "Poster",
      "price": 00.00,
      "size": "A3", // A3 | A4
      "description_es": "Póster de la última sesión",
      "description_va": "Pòster de la darrera sessió",
      "description_en": "Poster of the last session",
            "imgs": [
        {
          "id": "1",
          "url": "https://example.com/tshirt1.jpg"
        }
      ]
    }
  ]
}
```
```md
About.json
{
  "about": [
    {
      "type": "general",
      "title_es": "Qué es modul?",
      "title_va": "Qué és modul?",
      "title_en": "What's modul?",
      "content_es": "modul es una plataforma",
      "content_va": "modul es una plataforma",
      "content_pt": "modul es una plataforma",
      "content_en": "modul es una plataforma",
    },
    {
      "type": "live",
      "title_es": "live",
      "title_va": "live",
      "title_en": "live",
      "content_es": "Utilizamos el directo como...",
      "content_va": "Utilizamos el directo como...",
      "content_pt": "Utilizamos el directo como...",
      "content_en": "Utilizamos el directo como...",
    },
    ...
  ]
}
```

## ToDo
```md
- Components  
[ ] - Box  
[ ] --- GetContentSize (useRef)
[ ] --- GetSizeFromSibling
[ ] - Nav / Menu  
[ ] - SectionLogo  
[ ] - PanelBox  
[ ] - ScrollHint  
[ ] - EventsListCard  
[ ] - EventsList  
[ ] - EventImgCarrousel  
[ ] - EventImgNext/Prev  
[ ] - EventPlayer  
[ ] - MerchMenu  
[ ] - MerchCarrousel  
[ ] - MerchCard  
```
```md
- Logic  
[ ] - Scroll Navigation  
[ ] - Jump to ScrollPoint  
[ ] - Populate from JSON
[ ] - Return (breadcrumbs)  
[ ] - Lazy Load  
[ ] - Section Animation  
```
```md
- Pages  
[ ] - Landing / Home  
[ ] --- Hero  
[ ] --- Events  
[ ] --- About  
[ ] --- Contact  
[ ] - Event  
[ ] --- Event home  
[ ] --- Event details  
[ ] --- Event img carrousel  
[ ] --- Event player  
[ ] - Merch   
[ ] --- Merch menu  
``` 