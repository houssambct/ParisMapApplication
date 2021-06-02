import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class PlacesService {
  constructor() {}

  restaurants = [
    {
      name: "Comice",
      description:
        "The bulk of Paris’s famed haute cuisine is fiscally out of reach for many. However Michelin-starred Comice, headed by Canadian chef Noam Gedalof and sommelier Etheliya Hananova (the two are married), is an indulgence that won’t completely melt your credit card. The look strikes a similar balance: elegant but relaxed, with striking arrangements from a renowned local florist. Hananova’s wine list — which features lesser-known wines from around the world — is terrific, as is Gedalof’s light, inventive contemporary French cooking. Try the duck foie gras with hazelnuts, strawberries, balsamic, and black pepper or the butter-poached lobster with sweet pea and mascarpone ravioli. ",
      latitude: 48.862004,
      longitude: 2.304327,
      adress: "31 Avenue de Versailles 75016 Paris, France",
      icon: "assets/restaurents/resto1.jpg",
    },
    {
      name: "L'Astrance",
      description:
        "Chef Pascal Barbot has the most elegantly lyrical gastronomic imagination of any chef working in Paris today, and it’s expressed by dishes that are often spectacularly simple, like his buttermilk and burnt toast crumb soup. The dish is not always on the menu, but if you tell them you’re desperate for it when you make your reservation, Barbot and maitre d’hotel Christophe Rohat are such nice guys, they might make it for you. Otherwise, you should beg for the mille-feuille of white mushrooms, apple, and foie gras. ",
      latitude: 48.873296,
      longitude: 2.334526,
      adress: "4 rue Beethoven Paris, Île-de-France",
      icon: "assets/restaurents/resto2.jpg",
    },
    {
      name: "Restaurant Arnaud Nicolas",
      description:
        "With excellent handmade pates, sausages, and terrines, award-winning charcutier and chef Arnaud Nicolas has revived an ancient branch of French gastronomy. The space, on a leafy avenue in the silk-stocking Seventh Arrondissement, is decorated with exposed stone walls, a beamed ceiling, and battleship-gray moldings. Roasts and meat pies, Gallic pleasures that date back at least to the Middle Ages, figure as first courses, before an evolving menu filled with seasonal produce. Nicolas shows off his style in cod with baby artichokes, yellow pollack with cockles and shellfish jus, grilled duckling with baby onions, and an airy baba au rhum.",
      latitude: 48.84574,
      longitude: 2.36541,
      adress: "46 Avenue de la Bourdonnais 75007 Paris, France",
      icon: "assets/restaurents/resto3.jpg",
    },
    {
      name: "Chez L'Ami Jean",
      description:
        "Chef Stéphane Jego’s heaving Left Bank bistro is perpetually packed. Like so few other Parisian chefs, Jego knows how to deliver beautiful, traditional French bistro food, modernized with tweaks so subtle most people won’t even notice. He’s barely touched the 1930s space since taking it over 17 years ago from a Basque rugby pub. The earthy dishes, often inspired by southwestern French farmhouse food, are so deeply satisfying you won’t mind the occasionally slow service or boisterous regulars. The menu includes Parmesan soup with cabbage and bonito flakes, roasted pigeon with thyme and garlic, pork belly with lentils, and light and fluffy rice pudding.",
      latitude: 48.837605,
      longitude: 2.342761,
      adress: "27 Rue Malar 75007 Paris, France",
      icon: "assets/restaurents/resto4.jpg",
    },
    {
      name: "Restaurant David Toutain",
      description:
        "After working with Alain Passard and Marc Veyrat, David Toutain first wowed Paris at Agapé Substance in Saint-Germain. Now he has his own place, and his constantly changing tasting menus (which range from 70 to 250 euroes) deliver the boldest and most interesting food in Paris. Think dishes like seared foie gras in baked potato bouillon with black truffles; a monochromatic white composition of cuttlefish with yuba; and nearly translucent Parmesan gnocchi, seasoned with the juice extracted from cooking the cheese at very low temperatures for hours. ",
      latitude: 48.834442,
      longitude: 2.322858,
      adress: "29 rue Surcouf Paris, Île-de-France",
      icon: "assets/restaurents/resto5.jpg",
    },
    {
      name: "La Scene",
      description:
        "Chef Stéphanie Le Quellec’s glamorous subterranean dining room feels like a luxury railroad car, with the chef working in a theater-like open kitchen at the head of the room. It’s fun and amusing, which is the point. Le Quellec has reinvented French haute cuisine for the 21st century, offering diners a good time instead of another long stuffy experience. Her cooking is light, lucid, and precise, with touches of gastronomic wit. Poached langoustines come with buckwheat and a quenelle of blanc-manger and claw meat. Scottish grouse with morels is cooked with smoked tea. Veal sweetbreads arrive with roasted cauliflower and harissa. And a ganache, featuring Criollo chocolate from Venezuela, is made with olive oil. La Scene is one of the rare Paris restaurants that works as well for a romantic tete a tete as it does for a business meal.",
      latitude: 48.834442,
      longitude: 2.361292,
      adress: "32 Avenue Matignon 75008 Paris, France",
      icon: "assets/restaurents/resto6.jpg",
    },
    {
      name: "L’Epicure",
      description:
        "Given the vertiginous prices of French haute cuisine, no one digging deep in their pockets deserves a disappointing meal. Chef Éric Fréchon’s restaurant is a fail-safe for special, exorbitantly expensive meals at the top of the French food chain. Fréchon has helmed the kitchen here for more than 20 years and worn the ultimate Gallic gastronomic crown of three Michelin stars for the last 10. Start with his signature macaroni stuffed with black truffles, duck foie gras, and artichoke, or maybe the grilled leeks with seaweed butter and oyster tartare. Then tuck into the lobster roasted in its shell with grilled chestnuts and celeriac with truffle jus, or go for the veal sweetbreads braised with cocoa and tobacco leaves. Dinner at L’Epicure is suave, elegant, and surprising, and the dining room is a grand slam of Old World elegance, with crystal chandeliers, a fireplace, and heavy chintz curtains at French doors overlooking the courtyard.",
      latitude: 48.82947,
      longitude: 2.335212,
      adress: "112 Rue du Faubourg Saint-Honoré 75008 Paris, France",
      icon: "assets/restaurents/resto7.jpg",
    },
    {
      name: "L’Arpège",
      description:
        "Okay, it costs a freaking fortune (390 euros), but the vegetarian tasting menu by three-Michelin-starred chef Alain Passard is as close to nirvana as Paris can deliver for vegetarians. It’s so good that accompanying non-vegetarians will forget they came as a somewhat selfless gesture, too. Passard’s vegetables come from his own organic farm, and what you’ll get depends on what's available at the time. A sample of Passard’s talent with the bounty of the garden includes dishes like cep mushrooms with lemon and a vol au vent (puff pastry case) filled with baby peas, turnips, and snow peas in a sauce spiked with Cote du Jura wine. It’s worth pointing out that people have strong feelings about L’Arpège — the restaurant has its share of critics, including Eater’s own Ryan Sutton. ",
      latitude: 48.838509,
      longitude: 2.383941,
      adress: "84 rue de Varenne Paris, Île-de-France",
      icon: "assets/restaurents/resto8.jpg",
    },
  ];

  cinemas = [
    {
      name: "THE ELECTRIC CINEMA ",
      description:
        "Imaginez regarder de grands classiques tels que « Le Parrain » ou « Il était une fois en Amérique » au sein de cette sublime salle.Ambiance intime et moderne, quoi de mieux pour un premier rendez vous ? =).Ambiance fleuri et enchantée, une salle idéal pour de l’héroïc-fantasy, imaginez la trilogie du Seigneur des Anneaux dans ce cinéma…",
      latitude: 48.854776,
      longitude: 2.324917,
      adress: "101 Rue Berger, 75001 Paris",
      icon: "assets/cinemas/cinema1.jpg",
    },
    {
      name: "THE ORANGE CINEMA",
      description:
        "Il doit être difficile de décoller de son lit après que le film soit terminé et faut espérer que le film ne soit pas trop long ou inintéressant car là, le coup de barre peut nous plonger dans une belle sieste.Une salle qui correspondrait bien au cinéma que propose le réalisateur, Wes Anderson, bien structuré avec de belles couleurs ainsi que de l’originalité.",
      latitude: 48.859746,
      longitude: 2.340016,
      adress: "83 Boulevard du Montparnasse, 75006 Paris",
      icon: "assets/cinemas/cinema2.jpg",
    },
    {
      name: "ELGIN AND WINTER",
      description:
        "Imaginez, regarder un film tel que « Heat » ou « Blade Runner » dans cette salle. Y a de quoi nous illuminé non ? :p.Rien de mieux pour voir « Les Dents de la Mer » ou encore « Seul au monde », même si « L’odyssée de Pi » reste l’idéal et a du laisser un très beau souvenir aux spectateurs.",
      latitude: 48.861101,
      longitude: 2.356488,
      adress: " 144-146 Av. des Champs-Élysées, 75008 Paris",
      icon: "assets/cinemas/cinema3.jpg",
    },
    {
      name: "L’OLYMPIA",
      description:
        "Une salle parfaite pour voir de grand classique tel que les chef d’œuvres d’Hitchcock ou des films comme « Titanic ».Ce cinéma conviendrait très bien aux œuvres de David Lynch ou Stanley Kubrick. Un environnement séduisant et abyssal à la fois.Un endroit rêvé pour en prendre pleins les yeux et les oreilles. Les péplums sont bien évidemment adéquats avec un tel cadre mais des grandes œuvres comme « Lawrence d’Arabie » ou « Braveheart » auraient également leurs places.",
      latitude: 48.849806,
      longitude: 2.337271,
      adress: "166 Boulevard Macdonald, 75019 Paris",
      icon: "assets/cinemas/cinema4.jpg",
    },
  ];

  nightClubs = [
    {
      name: "Bassiani, Tbilisi",
      description: "Bassiani est  juste LE plus grand club de Tbilisi. Conçu comme un énorme labyrinthe de ciment, il se trouve dans la cave de la  Dinamo Arena, le stade de l’équipe nationale de Foot de Géorgie. Le samedi matin vous pouvez observer la fumée qui sort du terrain, signe de la grosse soi-soi qui tire à sa fin là-dessous, où quelques 1200 personnes se sont trémoussées autour d’une piscine vide.",
      latitude: "48.865618",
      longitude: "2.391491",
      adress: "Tsereteli rue 2, Tbilisi, Georgie",
      icon: "assets/nightClubs/club1.jpg",
    },
    {
      name: "Berghain/Panorama",
      description: "Situé dans ce qui semble être un terrain vague à la lisière de Kreuzberg et Friedrichshain, le Berghain est  considéré par un peu tout le monde comme l’un des meilleurs clubs du monde (et l’un des plus sélectifs). Dedans on y trouve 3 dancefloors : le Berghain, soit la salle principale plongée dans le noir et où s’enchaînent les DJs, le Panorama Bar qui se trouve à l’étage et qui est dédié à la House, et la toute nouvelle salle, Säule, au rez-de-chaussée, qui a ouvert ce printemps et qui est plus branchée ambient.",
      latitude: 48.857487,
      longitude: 2.392863,
      adress: "70 Am Wriezener Bahnhof, 10243 Berlin",
      icon: "assets/nightClubs/club2.jpg",
    },
    {
      name: "Closer",
      description: "Imaginez une ancienne usine, en plein quartier de Podil, que l’on a reconvertie en un vaste espace accueillant un peu tout ce qui se fait de culturel : à savoir grosses soirées, expos artistiques, concerts et festivals, bon ben ça… C’est le Closer.  À l’étage vous trouverez un espace appelé la Mezzanine, où vous pourrez vous détendre au son de concerts live et dans des chaises super confortables.",
      latitude: 48.840317,
      longitude: 2.295405,
      adress: "Nyzhneyurkovskaya Str. 31, Kiev",
      icon: "assets/nightClubs/club3.jpg",
    },
  ];

  jardins = [
    {
      name: "Jardins de Butchart",
      description: "Situé à Brentwood Bay, ce jardin offre des paysages magnifiques toute l’année: au printemps les premières fleurs éclosent, en automne le jardin japonais revêt ses plus belles couleurs et en hiver la neige enveloppe délicatement la flore.",
      latitude: "48.888649",
      longitude: "2.340016",
      adress: "1 Rue des Abondances, 92100 Boulogne-Billancourt",
      icon: "assets/jardins/jardin1.jpg",
    },
    {
      name: "ardins de l’Alhambra",
      description: "D’un grand raffinement, ces jardins magnifient la forteresse de l’Alhambra. D’origine hispano-arabe, ces jardins offrent élégance et quiétude avec ses rigoles, canaux, bassins, fontaines et jets d’eau.",
      latitude: 48.888649,
      longitude: 2.314622,
      adress: "10 Av. des Champs-Élysées, 75008 Paris",
      icon: "assets/jardins/jardin2.jpg",
    },
    {
      name: "Jardins de Suzhou",
      description: "Ces classiques jardins, célèbres pour leur beauté, sont des chefs d’œuvre de l’art des jardins chinois aménagés du XIe au XIXe siècles. Neuf de ces jardins sont classés au patrimoine mondial de l’UNESCO.",
      latitude: 48.870135,
      longitude: 2.291973,
      adress: "10 Rue des Rosiers, 75004 Paris",
      icon: "assets/jardins/jardin3.jpg",
    },
    {
      name: "Jardin de Monet",
      description: "C’est le célèbre peintre Claude Monet qui a décidé de reconstruire à neuf ce jardin, en y ajoutant de nombreuses variétés de fleurs et l’illustre pont vert. Sa source d’inspiration est aujourd’hui un lieu paisible empreint de belles couleurs.",
      latitude: 48.840769,
      longitude: 2.296778,
      adress: "Place d'Armes, 78000 Versailles",
      icon: "assets/jardins/jardin4.jpg",
    },
  ];

  theatres = [
    {
      name: "Le Madison Square Garden",
      description: "Avec une capacité de 20 000 places, c’est un lieu bien connu des New-Yorkais, puisque c’est la salle attitrée de deux équipes de sport locales – les Knicks de New York (basket) et les Rangers de New York (hockey sur glace). C’est également une salle de concert, qui a notamment vu défiler sur scène Frank Sinatra, les Stones, David Bowie et plus récemment les Spice Girls, U2 ou encore Beyonce. La salle que l’on connaît aujourd’hui a été inaugurée en 1968 à Manhattan, et a connu de nombreuses métamorphoses et rénovations depuis.",
      latitude: 48.861553,
      longitude: 2.358547,
      adress: "7 Boulevard Montmartre, 75002 Paris",
      icon: "assets/theatres/theatre1.jpg",
    },
  ];

  piscines = [
    {
      name: "La piscine de la maison d’hôtes",
      description: "Non il ne s’agit pas d’un hôtel luxueux mais bien d’une maison d’hôtes paisible qui possède une piscine dans un décor à couper le souffle. Avec une incroyable vue sur la vallée de la Nesque, la piscine joue la carte naturelle et donne le vertige pour un moment suspendu dans la quiétude et la chaleur du sud de la France.",
      latitude: 48.861553,
      longitude: 2.358547,
      adress: "4 Rue Louis Armand, 75015 Paris",
      icon: "assets/piscines/piscine1.jpg",
    },
    {
      name: "La piscine Elounda Peninsula",
      description: "Un tête-à-tête avec la mer et ses sublimes montagnes ? C’est la carte postale de rêve qui vous attend dans les suites de l’hôtel. La piscine s’offre même un espace détente suspendu au-dessus de l’eau pour profiter de la vue pendant et après la baignade. Un petit coin de paradis.",
      latitude: 48.843480,
      longitude: 2.346879,
      adress: "14 Rue de l'Ingénieur Robert Keller, 75015 Paris",
      icon: "assets/piscines/piscine2.jpg",
    },
  ];

  sportClubs = [

    {
      name: "Neoness",
      description: "Plus de 100 machines de cardio et musculation avec système audio intégréBody attack, body combat, body pumpOptions à la carte :Cours collectifs (zumba, pilates, body attack, afro danse, yoga)CasierAccès douche",
      latitude: 48.852065,
      longitude: 2.307759,
      adress: "23 Rue des Balkans, 75020 Paris",
      icon: "assets/sportClubs/sportClub1.jpg",
    },
    {
      name: "Les Cercles de la Forme	",
      description: "Plateaux de musculationCardio-trainingStretch, zumba, etc.De nombreux arts martiaux : karaté, judo, kung-fu, tae kwon do, ju jitsu, boxe thaï, MMA, krav maga, capoeira, etc.Sauna, hammamActivités pour enfant : danse, judo, karaté, krav maga",
      latitude: 48.834894,
      longitude: 2.339330,
      adress: "147 bis Rue Saint-Honoré, 75001 Paris",
      icon: "assets/sportClubs/sportClub2.jpg",
    },
    {
      name: "Fitness Park	",
      description: "Cardio-training, musculation, cross training, cours collectifs virtuelsBurning park : HIIT high intensity interval trainingFight Park : sports de combat (boxe thaï, grappling, boxe anglaise, k1, kick boxing, lady boxing, etc.)Accompagnement d'un coach gratuit",
      latitude: 48.892712,
      longitude: 2.349625,
      adress: "5-9 Rue du Faubourg Poissonnière, 75009 Paris",
      icon: "assets/sportClubs/sportClub3.jpg",
    },
    {
      name: "Keep Cool	",
      description: "Salle de sport à la fois social club et galerie d'artExpos, débats, conférence, projectionsPlateau sportif : cardio-training, yoga, gym, salles de musculation, boxe, Boot Camp, cycling, etc.Zone de bien-être, spa, massages, ostéopathes",
      latitude: 48.836701,
      longitude: 2.349625,
      adress: "8 Rue Frémicourt, 75015 Paris",
      icon: "assets/sportClubs/sportClub4.jpg",
    },
  ];
}
