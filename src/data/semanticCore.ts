
// СЕМАНТИЧЕСКОЕ ЯДРО И КЛАСТЕРИЗАЦИЯ СТРАНИЦ

export const semanticCore = {
  // Главные кластеры
  clusters: {
    destinations: {
      name: "Направления Азербайджана",
      keywords: [
        { keyword: "Azerbaijan travel guide", volume: 12000, difficulty: "medium" },
        { keyword: "Visit Azerbaijan", volume: 8000, difficulty: "medium" },
        { keyword: "Azerbaijan tourism", volume: 10000, difficulty: "medium" },
        { keyword: "Best places in Azerbaijan", volume: 5000, difficulty: "low" },
        { keyword: "Azerbaijan destinations", volume: 3000, difficulty: "low" }
      ],
      pages: [
        "/azerbaijan",
        "/cities/baku",
        "/cities/ganja",
        "/cities/sheki",
        "/cities/gabala",
        "/cities/guba",
        "/cities/qusar",
        "/cities/lankaran"
      ]
    },
    
    thingsToDo: {
      name: "Развлечения и активности",
      keywords: [
        { keyword: "Things to do in Baku", volume: 8500, difficulty: "medium" },
        { keyword: "Baku attractions", volume: 6200, difficulty: "medium" },
        { keyword: "Azerbaijan tours", volume: 4500, difficulty: "low" },
        { keyword: "Best activities Azerbaijan", volume: 2000, difficulty: "low" },
        { keyword: "What to do in Azerbaijan", volume: 3500, difficulty: "low" }
      ],
      pages: [
        "/attractions",
        "/tours",
        "/things-to-do",
        "/itineraries"
      ]
    },
    
    accommodation: {
      name: "Проживание",
      keywords: [
        { keyword: "Hotels in Baku", volume: 15000, difficulty: "high" },
        { keyword: "Best hotels Azerbaijan", volume: 5000, difficulty: "medium" },
        { keyword: "Baku accommodation", volume: 3000, difficulty: "low" },
        { keyword: "Luxury hotels Baku", volume: 2500, difficulty: "medium" },
        { keyword: "Budget hotels Azerbaijan", volume: 1800, difficulty: "low" }
      ],
      pages: [
        "/hotels",
        "/hotels/baku"
      ]
    },
    
    food: {
      name: "Еда и рестораны",
      keywords: [
        { keyword: "Best restaurants Baku", volume: 5500, difficulty: "medium" },
        { keyword: "Azerbaijani food guide", volume: 3200, difficulty: "low" },
        { keyword: "Where to eat in Baku", volume: 4800, difficulty: "medium" },
        { keyword: "Traditional food Azerbaijan", volume: 2100, difficulty: "low" }
      ],
      pages: [
        "/restaurants",
        "/restaurants/baku"
      ]
    },
    
    practicalInfo: {
      name: "Практическая информация",
      keywords: [
        { keyword: "Azerbaijan visa", volume: 8000, difficulty: "medium" },
        { keyword: "Best time to visit Azerbaijan", volume: 4500, difficulty: "low" },
        { keyword: "Azerbaijan travel tips", volume: 3500, difficulty: "low" },
        { keyword: "Getting around Azerbaijan", volume: 2200, difficulty: "low" },
        { keyword: "Azerbaijan currency", volume: 1800, difficulty: "low" }
      ],
      pages: [
        "/visa",
        "/guide",
        "/insurance",
        "/transfers"
      ]
    }
  },
  
  // Long-tail keywords (низкая конкуренция, высокая конверсия)
  longTailKeywords: [
    {
      keyword: "Khinalig village guide",
      volume: 500,
      difficulty: "low",
      page: "/attractions/khinalig-village",
      content: "Глубокий гид по самой высокой деревне Европы"
    },
    {
      keyword: "Azerbaijan visa on arrival",
      volume: 3000,
      difficulty: "low",
      page: "/visa",
      content: "Подробная информация о визе по прибытии"
    },
    {
      keyword: "Baku old city walking tour",
      volume: 800,
      difficulty: "low",
      page: "/itineraries/baku-old-city",
      content: "Самостоятельный пешеходный тур по Старому городу"
    },
    {
      keyword: "Sheki halva recipe",
      volume: 400,
      difficulty: "low",
      page: "/blog/sheki-halva",
      content: "Как приготовить настоящую шекинскую халву"
    },
    {
      keyword: "Azerbaijan adventure tours",
      volume: 1200,
      difficulty: "low",
      page: "/tours/adventure",
      content: "Приключения в горах Кавказа"
    },
    {
      keyword: "Traditional carpet shopping Baku",
      volume: 400,
      difficulty: "low",
      page: "/blog/carpet-shopping",
      content: "Где и как покупать азербайджанские ковры"
    },
    {
      keyword: "Guba waterfalls hiking",
      volume: 350,
      difficulty: "low",
      page: "/attractions/guba-waterfalls",
      content: "Поход к водопадам Губы"
    },
    {
      keyword: "Azerbaijan wine tours",
      volume: 600,
      difficulty: "low",
      page: "/tours/wine-tours",
      content: "Дегустация вин в Габале и Гяндже"
    }
  ],
  
  // Структура URL для программного SEO
  urlStructure: {
    destinations: "/cities/{slug}",
    attractions: "/attractions/{slug}",
    restaurants: "/restaurants/{slug}",
    hotels: "/hotels/{slug}",
    tours: "/tours/{slug}",
    itineraries: "/itineraries/{slug}",
    blog: "/blog/{slug}"
  }
};

// Структура заголовков для SEO
export const headingStructure = {
  h1: {
    pattern: "{Город/Достопримечательность} | Полный гид, цены, маршруты | Azerbaijan Travel",
    examples: [
      "Баку | Полный гид, цены, маршруты | Azerbaijan Travel",
      "Шеки | Жемчужина Кавказа | Azerbaijan Travel",
      "Khinalig Village | Самая высокая деревня Европы | Azerbaijan Travel"
    ]
  },
  
  h2: [
    "Краткая информация",
    "Как добраться",
    "Где остановиться",
    "Что посмотреть",
    "Где поесть",
    "Логистика и транспорт",
    "Скрытые жемчужины",
    "Маршруты",
    "Ошибки туристов",
    "Лайфхаки",
    "FAQ"
  ]
};

// Внутренняя перелинковка
export const internalLinking = {
  // Основные правила
  rules: [
    {
      from: "/cities/baku",
      to: ["/attractions", "/restaurants/baku", "/hotels/baku", "/tours", "/itineraries/baku"]
    },
    {
      from: "/attractions",
      to: ["/cities/{city}", "/tours/{attraction}", "/blog/{attraction}-guide"]
    },
    {
      from: "/tours",
      to: ["/cities/{city}", "/attractions/{attraction}", "/blog/{tour}-experience"]
    }
  ],
  
  // Связи между контентом
  contentLinks: {
    bakuToSheki: {
      from: "/cities/baku",
      to: "/cities/sheki",
      anchor: "Путешествие в Шеки",
      context: "Древняя столица Шеки всего в 4 часах езды от Баку"
    },
    shekiToGabala: {
      from: "/cities/sheki",
      to: "/cities/gabala",
      anchor: "Габала — горный курорт",
      context: "Продолжите путь в горы Габалы"
    },
    gubaToKhinalig: {
      from: "/cities/guba",
      to: "/attractions/khinalig-village",
      anchor: "Khinalig Village",
      context: "Самая высокая деревня Европы находится в Губе"
    }
  }
};

// Структура контента для каждой страницы
export const contentStructure = {
  cityPage: [
    "H1: Название города | Полный гид",
    "Краткое описание (100-150 слов)",
    "Секция 'Как добраться' (логистика)",
    "Секция 'Что посмотреть' (3-5 достопримечательностей)",
    "Секция 'Где остановиться' (3-5 отелей)",
    "Секция 'Где поесть' (3-5 ресторанов)",
    "Секция 'Логистика между городами'",
    "Секция 'Скрытые жемчужины'",
    "Секция 'Маршруты'",
    "Секция 'Ошибки туристов'",
    "Секция 'Лайфхаки'",
    "FAQ",
    "Внутренняя перелинковка на другие страницы"
  ],
  
  attractionPage: [
    "H1: Название достопримечательности | Полный гид",
    "Описание (история, что интересного)",
    "Как добраться (транспорт, координаты)",
    "Время работы и стоимость",
    "Советы по посещению",
    "Ближайшие достопримечательности",
    "Фотогалерея"
  ]
};
