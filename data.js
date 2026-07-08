const trainingVideos = [
  {
    "id": 1,
    "titre": "Mon chat a trouvé la cachette parfaite... et je ne l'ai retrouvé qu'une heure plus tard 🐱",
    "categorie": "Animaux",
    "createur": "Planète Animale",
    "duree": "9:42",
    "vues": "1,8 M vues",
    "publication": "Il y a 6 jours"
  },
  {
    "id": 2,
    "titre": "Pourquoi les chiens penchent-ils la tête quand on leur parle ?",
    "categorie": "Animaux",
    "createur": "Les Curieux de la Nature",
    "duree": "8:17",
    "vues": "2,4 M vues",
    "publication": "Il y a 2 semaines"
  },
  {
    "id": 3,
    "titre": "J'ai passé une journée entière dans un refuge pour animaux",
    "categorie": "Animaux",
    "createur": "Aventure Sauvage",
    "duree": "17:56",
    "vues": "684 k vues",
    "publication": "Il y a 1 semaine"
  },
  {
    "id": 4,
    "titre": "Les bébés pandas font-ils vraiment autant de siestes ?",
    "categorie": "Animaux",
    "createur": "Planète Animale",
    "duree": "10:54",
    "vues": "937 k vues",
    "publication": "Il y a 3 semaines"
  },
  {
    "id": 5,
    "titre": "Cette pieuvre a résolu le casse-tête plus vite que moi 😲",
    "categorie": "Animaux",
    "createur": "BioLab Junior",
    "duree": "7:39",
    "vues": "1,3 M vues",
    "publication": "Il y a 4 jours"
  },
  {
    "id": 6,
    "titre": "POV : un chiot décide que tu es son nouvel humain ❤️",
    "categorie": "Animaux",
    "createur": "Animaux & Compagnie",
    "duree": "0:29",
    "vues": "5,1 M vues",
    "publication": "Il y a 3 jours"
  },
  {
    "id": 7,
    "titre": "La pizza maison qui a convaincu toute ma famille",
    "categorie": "Cuisine",
    "createur": "Chef Léo",
    "duree": "14:52",
    "vues": "1,3 M vues",
    "publication": "Il y a 1 semaine"
  },
  {
    "id": 8,
    "titre": "J'ai essayé de préparer des sushis... avec beaucoup plus de riz que prévu 🍣",
    "categorie": "Cuisine",
    "createur": "Cuisine Express",
    "duree": "16:28",
    "vues": "642 k vues",
    "publication": "Il y a 5 jours"
  },
  {
    "id": 9,
    "titre": "Peut-on réussir des brownies parfaits du premier coup ?",
    "categorie": "Cuisine",
    "createur": "Les Recettes de Mia",
    "duree": "12:37",
    "vues": "958 k vues",
    "publication": "Il y a 2 semaines"
  },
  {
    "id": 10,
    "titre": "Je cuisine uniquement avec ce qu'il reste dans mon frigo",
    "categorie": "Cuisine",
    "createur": "Défi Cuisine",
    "duree": "18:04",
    "vues": "531 k vues",
    "publication": "Il y a 9 jours"
  },
  {
    "id": 11,
    "titre": "Le dessert préféré de ma grand-mère... enfin la recette !",
    "categorie": "Cuisine",
    "createur": "Chef Léo",
    "duree": "10:46",
    "vues": "2,1 M vues",
    "publication": "Il y a 3 semaines"
  },
  {
    "id": 12,
    "titre": "POV : les biscuits sortent enfin du four 🍪",
    "categorie": "Cuisine",
    "createur": "Les Recettes de Mia",
    "duree": "0:27",
    "vues": "4,6 M vues",
    "publication": "Il y a 2 jours"
  },
  {
    "id": 13,
    "titre": "J'ai construit un robot capable de ranger mon bureau 🤖",
    "categorie": "Sciences et technologie",
    "createur": "TechLab Junior",
    "duree": "16:48",
    "vues": "918 k vues",
    "publication": "Il y a 1 semaine"
  },
  {
    "id": 14,
    "titre": "Pourquoi les bananes sont-elles légèrement radioactives ?",
    "categorie": "Sciences et technologie",
    "createur": "Minute Science",
    "duree": "9:36",
    "vues": "1,7 M vues",
    "publication": "Il y a 2 semaines"
  },
  {
    "id": 15,
    "titre": "Je lance une mini-fusée fabriquée avec des matériaux du quotidien 🚀",
    "categorie": "Sciences et technologie",
    "createur": "Labo Curieux",
    "duree": "14:52",
    "vues": "643 k vues",
    "publication": "Il y a 5 jours"
  },
  {
    "id": 16,
    "titre": "POV : tu regardes une goutte d'eau au microscope pour la première fois 🔬",
    "categorie": "Sciences et technologie",
    "createur": "Explique-moi Ça",
    "duree": "0:28",
    "vues": "4,5 M vues",
    "publication": "Il y a 2 jours"
  },
  {
    "id": 17,
    "titre": "J'ai demandé à une IA d'inventer un jeu... puis je l'ai construit",
    "categorie": "Sciences et technologie",
    "createur": "TechLab Junior",
    "duree": "18:13",
    "vues": "1,2 M vues",
    "publication": "Il y a 8 jours"
  },
  {
    "id": 18,
    "titre": "Les cinq inventions qui ont changé notre quotidien sans qu'on s'en rende compte",
    "categorie": "Sciences et technologie",
    "createur": "Minute Science",
    "duree": "12:21",
    "vues": "781 k vues",
    "publication": "Il y a 3 semaines"
  },
  {
    "id": 19,
    "titre": "J'ai construit toute ma cour d'école dans Minecraft",
    "categorie": "Jeux vidéo",
    "createur": "PixelMax",
    "duree": "18:42",
    "vues": "842 k vues",
    "publication": "Il y a 3 semaines"
  },
  {
    "id": 20,
    "titre": "Mon petit frère choisit mes voitures dans Mario Kart... je dois toutes les utiliser !",
    "categorie": "Jeux vidéo",
    "createur": "GameZone Québec",
    "duree": "11:26",
    "vues": "312 k vues",
    "publication": "Il y a 5 jours"
  },
  {
    "id": 21,
    "titre": "Peut-on terminer Zelda sans utiliser une seule épée ?",
    "categorie": "Jeux vidéo",
    "createur": "Les Défis de Léo",
    "duree": "22:14",
    "vues": "1,4 M vues",
    "publication": "Il y a 2 mois"
  },
  {
    "id": 22,
    "titre": "J'ai laissé une IA décider où j'atterris dans Fortnite pendant 20 parties",
    "categorie": "Jeux vidéo",
    "createur": "PlayLab",
    "duree": "16:08",
    "vues": "967 k vues",
    "publication": "Il y a 6 jours"
  },
  {
    "id": 23,
    "titre": "Les 10 détails cachés que je n'avais jamais remarqués dans Roblox",
    "categorie": "Jeux vidéo",
    "createur": "PixelMax",
    "duree": "13:51",
    "vues": "521 k vues",
    "publication": "Il y a 1 semaine"
  },
  {
    "id": 24,
    "titre": "Ce raccourci de Mario Kart m'a fait gagner toutes les courses",
    "categorie": "Jeux vidéo",
    "createur": "Turbo Gaming",
    "duree": "9:48",
    "vues": "2,1 M vues",
    "publication": "Il y a 4 mois"
  },
  {
    "id": 25,
    "titre": "Je tente le défi des 100 rebonds... sans faire tomber le ballon",
    "categorie": "Sport",
    "createur": "Défi Max",
    "duree": "26:50",
    "vues": "734 k vues",
    "publication": "Il y a 9 jours"
  },
  {
    "id": 26,
    "titre": "Ce geste technique a complètement changé ma façon de jouer",
    "categorie": "Sport",
    "createur": "Coach Alex",
    "duree": "01:56",
    "vues": "982 k vues",
    "publication": "Il y a 2 semaines"
  },
  {
    "id": 27,
    "titre": "J'ai découvert un parcours secret parfait pour courir après l'école",
    "categorie": "Sport",
    "createur": "Objectif Sport",
    "duree": "03:15",
    "vues": "341 k vues",
    "publication": "Il y a 5 jours"
  },
  {
    "id": 28,
    "titre": "Pourquoi les joueurs professionnels changent-ils souvent de chaussures ?",
    "categorie": "Sport",
    "createur": "SportLab",
    "duree": "02:29",
    "vues": "608 k vues",
    "publication": "Il y a 3 semaines"
  },
  {
    "id": 29,
    "titre": "Le plus beau but de notre saison... filmé sous tous les angles",
    "categorie": "Sport",
    "createur": "Zone Sport",
    "duree": "01:37",
    "vues": "1,5 M vues",
    "publication": "Il y a 6 jours"
  },
  {
    "id": 30,
    "titre": "Je participe à un entraînement de gymnastique sans aucune expérience",
    "categorie": "Sport",
    "createur": "Altitude+",
    "duree": "03:54",
    "vues": "397 k vues",
    "publication": "Il y a 1 semaine"
  }
];

const testVideos = [
  {
    "id": 31,
    "titre": "Le renard qui visitait le même jardin chaque soir",
    "categorie": "Animaux",
    "createur": "Aventure Sauvage",
    "duree": "12:21",
    "vues": "451 k vues",
    "publication": "Il y a 10 jours"
  },
  {
    "id": 32,
    "titre": "Pourquoi les hiboux sont-ils presque impossibles à entendre en vol ?",
    "categorie": "Animaux",
    "createur": "BioLab Junior",
    "duree": "11:46",
    "vues": "603 k vues",
    "publication": "Il y a 2 semaines"
  },
  {
    "id": 33,
    "titre": "Je croyais observer des dauphins... jusqu'à cette énorme surprise",
    "categorie": "Animaux",
    "createur": "Océan Bleu",
    "duree": "18:14",
    "vues": "782 k vues",
    "publication": "Il y a 5 jours"
  },
  {
    "id": 34,
    "titre": "Les 5 animaux qui construisent les maisons les plus étonnantes",
    "categorie": "Animaux",
    "createur": "Les Curieux de la Nature",
    "duree": "13:08",
    "vues": "1,1 M vues",
    "publication": "Il y a 1 mois"
  },
  {
    "id": 35,
    "titre": "Mon lapin a trouvé une nouvelle façon de demander une collation 🥕",
    "categorie": "Animaux",
    "createur": "Animaux & Compagnie",
    "duree": "6:58",
    "vues": "824 k vues",
    "publication": "Il y a 11 jours"
  },
  {
    "id": 36,
    "titre": "Pourquoi les girafes dorment-elles si peu ?",
    "categorie": "Animaux",
    "createur": "BioLab Junior",
    "duree": "9:35",
    "vues": "397 k vues",
    "publication": "Il y a 3 semaines"
  },
  {
    "id": 37,
    "titre": "Je découvre le plus grand aquarium que j'aie jamais visité",
    "categorie": "Animaux",
    "createur": "Océan Bleu",
    "duree": "19:42",
    "vues": "516 k vues",
    "publication": "Il y a 9 jours"
  },
  {
    "id": 38,
    "titre": "Les abeilles savent-elles vraiment compter ?",
    "categorie": "Animaux",
    "createur": "BioLab Junior",
    "duree": "8:48",
    "vues": "945 k vues",
    "publication": "Il y a 2 mois"
  },
  {
    "id": 39,
    "titre": "Le cheval le plus patient que j'aie rencontré",
    "categorie": "Animaux",
    "createur": "Aventure Sauvage",
    "duree": "15:11",
    "vues": "338 k vues",
    "publication": "Il y a 2 semaines"
  },
  {
    "id": 40,
    "titre": "Cette caméra cachée révèle ce que font les chats pendant la nuit",
    "categorie": "Animaux",
    "createur": "Planète Animale",
    "duree": "14:24",
    "vues": "2,7 M vues",
    "publication": "Il y a 1 semaine"
  },
  {
    "id": 41,
    "titre": "Pourquoi les pingouins offrent-ils parfois des cailloux ?",
    "categorie": "Animaux",
    "createur": "Les Curieux de la Nature",
    "duree": "7:52",
    "vues": "1,6 M vues",
    "publication": "Il y a 8 jours"
  },
  {
    "id": 42,
    "titre": "J'ai nourri des chèvres... elles avaient leur propre plan 😅",
    "categorie": "Animaux",
    "createur": "Animaux & Compagnie",
    "duree": "10:16",
    "vues": "689 k vues",
    "publication": "Il y a 12 jours"
  },
  {
    "id": 43,
    "titre": "Le plus beau cri de loup que j'aie entendu en forêt",
    "categorie": "Animaux",
    "createur": "Aventure Sauvage",
    "duree": "16:39",
    "vues": "421 k vues",
    "publication": "Il y a 5 semaines"
  },
  {
    "id": 44,
    "titre": "Ce perroquet connaît une expression que personne ne lui a apprise",
    "categorie": "Animaux",
    "createur": "Animaux & Compagnie",
    "duree": "8:23",
    "vues": "1,2 M vues",
    "publication": "Il y a 4 jours"
  },
  {
    "id": 45,
    "titre": "Je pensais que les requins étaient tous dangereux... j'avais tort",
    "categorie": "Animaux",
    "createur": "Océan Bleu",
    "duree": "17:48",
    "vues": "731 k vues",
    "publication": "Il y a 2 semaines"
  },
  {
    "id": 46,
    "titre": "POV : un bébé koala s'endort dans tes bras 🐨",
    "categorie": "Animaux",
    "createur": "Planète Animale",
    "duree": "0:33",
    "vues": "4,8 M vues",
    "publication": "Il y a 2 jours"
  },
  {
    "id": 47,
    "titre": "Pourquoi les ours adorent-ils se frotter contre les arbres ?",
    "categorie": "Animaux",
    "createur": "Les Curieux de la Nature",
    "duree": "11:04",
    "vues": "554 k vues",
    "publication": "Il y a 1 semaine"
  },
  {
    "id": 48,
    "titre": "J'ai installé une caméra près d'un étang... voici ce qui est venu la nuit",
    "categorie": "Animaux",
    "createur": "Aventure Sauvage",
    "duree": "18:57",
    "vues": "609 k vues",
    "publication": "Il y a 3 semaines"
  },
  {
    "id": 49,
    "titre": "Le défi photo : réussir à capturer un colibri en plein vol 📸",
    "categorie": "Animaux",
    "createur": "BioLab Junior",
    "duree": "12:46",
    "vues": "487 k vues",
    "publication": "Il y a 6 jours"
  },
  {
    "id": 50,
    "titre": "Je laisse mon chien choisir notre promenade... il m'emmène dans un endroit inattendu 🐶",
    "categorie": "Animaux",
    "createur": "Animaux & Compagnie",
    "duree": "12:14",
    "vues": "1,1 M vues",
    "publication": "Il y a 5 jours"
  },
  {
    "id": 51,
    "titre": "Pourquoi les chats aiment-ils autant les boîtes en carton ?",
    "categorie": "Animaux",
    "createur": "Les Curieux de la Nature",
    "duree": "8:52",
    "vues": "2,2 M vues",
    "publication": "Il y a 2 semaines"
  },
  {
    "id": 52,
    "titre": "J'ai suivi une famille de castors pendant toute une matinée",
    "categorie": "Animaux",
    "createur": "Aventure Sauvage",
    "duree": "17:28",
    "vues": "563 k vues",
    "publication": "Il y a 1 semaine"
  },
  {
    "id": 53,
    "titre": "Le bébé éléphant qui découvre la pluie pour la première fois ❤️",
    "categorie": "Animaux",
    "createur": "Planète Animale",
    "duree": "7:31",
    "vues": "3,4 M vues",
    "publication": "Il y a 4 jours"
  },
  {
    "id": 54,
    "titre": "Peut-on vraiment reconnaître chaque zèbre grâce à ses rayures ?",
    "categorie": "Animaux",
    "createur": "BioLab Junior",
    "duree": "10:43",
    "vues": "481 k vues",
    "publication": "Il y a 3 semaines"
  },
  {
    "id": 55,
    "titre": "POV : un chiot pense que tu veux jouer avec lui 🦴",
    "categorie": "Animaux",
    "createur": "Animaux & Compagnie",
    "duree": "0:24",
    "vues": "5,8 M vues",
    "publication": "Il y a 3 jours"
  },
  {
    "id": 56,
    "titre": "Je découvre pourquoi les flamants roses sont vraiment roses",
    "categorie": "Animaux",
    "createur": "BioLab Junior",
    "duree": "11:36",
    "vues": "719 k vues",
    "publication": "Il y a 11 jours"
  },
  {
    "id": 57,
    "titre": "Le plus drôle des concours de saut... avec des lapins !",
    "categorie": "Animaux",
    "createur": "Planète Animale",
    "duree": "9:47",
    "vues": "982 k vues",
    "publication": "Il y a 6 jours"
  },
  {
    "id": 58,
    "titre": "Cette tortue revient chaque année au même endroit",
    "categorie": "Animaux",
    "createur": "Océan Bleu",
    "duree": "15:58",
    "vues": "402 k vues",
    "publication": "Il y a 2 semaines"
  },
  {
    "id": 59,
    "titre": "Les animaux qui survivent dans les endroits les plus froids du monde",
    "categorie": "Animaux",
    "createur": "Les Curieux de la Nature",
    "duree": "13:25",
    "vues": "1,3 M vues",
    "publication": "Il y a 2 mois"
  },
  {
    "id": 60,
    "titre": "Mon hamster a construit quelque chose que je n'avais jamais vu",
    "categorie": "Animaux",
    "createur": "Animaux & Compagnie",
    "duree": "8:16",
    "vues": "614 k vues",
    "publication": "Il y a 8 jours"
  },
  {
    "id": 61,
    "titre": "Pourquoi les corbeaux sont-ils parmi les oiseaux les plus intelligents ?",
    "categorie": "Animaux",
    "createur": "BioLab Junior",
    "duree": "12:18",
    "vues": "688 k vues",
    "publication": "Il y a 1 semaine"
  },
  {
    "id": 62,
    "titre": "Je passe une journée à observer les phoques sur la côte",
    "categorie": "Animaux",
    "createur": "Océan Bleu",
    "duree": "18:42",
    "vues": "356 k vues",
    "publication": "Il y a 3 semaines"
  },
  {
    "id": 63,
    "titre": "Le lynx le plus discret que j'aie réussi à filmer",
    "categorie": "Animaux",
    "createur": "Aventure Sauvage",
    "duree": "16:07",
    "vues": "447 k vues",
    "publication": "Il y a 13 jours"
  },
  {
    "id": 64,
    "titre": "J'ai construit un parcours d'agilité pour mon chien dans le jardin",
    "categorie": "Animaux",
    "createur": "Animaux & Compagnie",
    "duree": "10:54",
    "vues": "1,5 M vues",
    "publication": "Il y a 5 jours"
  },
  {
    "id": 65,
    "titre": "Pourquoi les loutres se tiennent-elles par la main en dormant ?",
    "categorie": "Animaux",
    "createur": "Les Curieux de la Nature",
    "duree": "9:34",
    "vues": "2,9 M vues",
    "publication": "Il y a 9 jours"
  },
  {
    "id": 66,
    "titre": "Cette caméra cachée révèle qui visite vraiment notre mangeoire la nuit",
    "categorie": "Animaux",
    "createur": "Aventure Sauvage",
    "duree": "14:46",
    "vues": "781 k vues",
    "publication": "Il y a 2 semaines"
  },
  {
    "id": 67,
    "titre": "POV : un cheval vient te dire bonjour 🐴",
    "categorie": "Animaux",
    "createur": "Planète Animale",
    "duree": "0:31",
    "vues": "4,4 M vues",
    "publication": "Il y a 2 jours"
  },
  {
    "id": 68,
    "titre": "Je découvre le plus petit caméléon du monde",
    "categorie": "Animaux",
    "createur": "BioLab Junior",
    "duree": "11:58",
    "vues": "526 k vues",
    "publication": "Il y a 12 jours"
  },
  {
    "id": 69,
    "titre": "Pourquoi les dauphins jouent-ils avec les vagues ?",
    "categorie": "Animaux",
    "createur": "Océan Bleu",
    "duree": "8:49",
    "vues": "917 k vues",
    "publication": "Il y a 1 mois"
  },
  {
    "id": 70,
    "titre": "Le hérisson qui revient chaque soir dans notre cour",
    "categorie": "Animaux",
    "createur": "Animaux & Compagnie",
    "duree": "13:17",
    "vues": "743 k vues",
    "publication": "Il y a 6 jours"
  },
  {
    "id": 71,
    "titre": "J'ai installé une caméra dans une nichoir... voici ce qui s'est passé",
    "categorie": "Animaux",
    "createur": "Aventure Sauvage",
    "duree": "17:09",
    "vues": "635 k vues",
    "publication": "Il y a 10 jours"
  },
  {
    "id": 72,
    "titre": "Le secret des ailes silencieuses des chouettes",
    "categorie": "Animaux",
    "createur": "Les Curieux de la Nature",
    "duree": "10:26",
    "vues": "574 k vues",
    "publication": "Il y a 3 semaines"
  },
  {
    "id": 73,
    "titre": "Je croyais photographier un écureuil... la forêt m'a réservé une autre surprise",
    "categorie": "Animaux",
    "createur": "Aventure Sauvage",
    "duree": "15:37",
    "vues": "498 k vues",
    "publication": "Il y a 4 semaines"
  },
  {
    "id": 74,
    "titre": "Le plus drôle des réveils... avec trois chatons affamés 😹",
    "categorie": "Animaux",
    "createur": "Planète Animale",
    "duree": "7:08",
    "vues": "2,1 M vues",
    "publication": "Il y a 1 semaine"
  },
  {
    "id": 75,
    "titre": "Je me suis réveillé avec un visiteur inattendu dans le jardin 🦊",
    "categorie": "Animaux",
    "createur": "Aventure Sauvage",
    "duree": "14:58",
    "vues": "618 k vues",
    "publication": "Il y a 1 semaine"
  },
  {
    "id": 76,
    "titre": "Pourquoi les poulpes changent-ils de couleur aussi rapidement ?",
    "categorie": "Animaux",
    "createur": "BioLab Junior",
    "duree": "10:46",
    "vues": "834 k vues",
    "publication": "Il y a 9 jours"
  },
  {
    "id": 77,
    "titre": "Mon chat refuse de dormir ailleurs que dans ce panier... voici pourquoi",
    "categorie": "Animaux",
    "createur": "Animaux & Compagnie",
    "duree": "8:53",
    "vues": "1,6 M vues",
    "publication": "Il y a 5 jours"
  },
  {
    "id": 78,
    "titre": "Le plus beau vol d'aigle que j'aie réussi à filmer",
    "categorie": "Animaux",
    "createur": "Aventure Sauvage",
    "duree": "16:37",
    "vues": "447 k vues",
    "publication": "Il y a 2 semaines"
  },
  {
    "id": 79,
    "titre": "POV : un chiot découvre la neige pour la première fois ❄️",
    "categorie": "Animaux",
    "createur": "Planète Animale",
    "duree": "0:27",
    "vues": "6,3 M vues",
    "publication": "Il y a 3 jours"
  },
  {
    "id": 80,
    "titre": "Je pensais que les paresseux dormaient toute la journée... pas du tout !",
    "categorie": "Animaux",
    "createur": "Les Curieux de la Nature",
    "duree": "11:24",
    "vues": "958 k vues",
    "publication": "Il y a 2 semaines"
  },
  {
    "id": 81,
    "titre": "Cette grenouille est presque impossible à voir... jusqu'à ce qu'elle bouge",
    "categorie": "Animaux",
    "createur": "BioLab Junior",
    "duree": "9:31",
    "vues": "506 k vues",
    "publication": "Il y a 12 jours"
  },
  {
    "id": 82,
    "titre": "Les cinq animaux qui construisent les nids les plus impressionnants",
    "categorie": "Animaux",
    "createur": "Les Curieux de la Nature",
    "duree": "13:42",
    "vues": "1,2 M vues",
    "publication": "Il y a 1 mois"
  },
  {
    "id": 83,
    "titre": "J'ai accompagné un vétérinaire pendant toute une journée",
    "categorie": "Animaux",
    "createur": "Animaux & Compagnie",
    "duree": "18:16",
    "vues": "691 k vues",
    "publication": "Il y a 6 jours"
  },
  {
    "id": 84,
    "titre": "Le plus grand troupeau de caribous que j'aie observé",
    "categorie": "Animaux",
    "createur": "Aventure Sauvage",
    "duree": "15:49",
    "vues": "342 k vues",
    "publication": "Il y a 3 semaines"
  },
  {
    "id": 85,
    "titre": "Pourquoi les manchots glissent-ils sur le ventre ?",
    "categorie": "Animaux",
    "createur": "Océan Bleu",
    "duree": "8:18",
    "vues": "1,1 M vues",
    "publication": "Il y a 11 jours"
  },
  {
    "id": 86,
    "titre": "J'ai construit un hôtel pour les insectes dans mon jardin 🐝",
    "categorie": "Animaux",
    "createur": "BioLab Junior",
    "duree": "17:22",
    "vues": "528 k vues",
    "publication": "Il y a 8 jours"
  },
  {
    "id": 87,
    "titre": "Ce bébé chèvre saute partout... et c'est impossible de ne pas sourire",
    "categorie": "Animaux",
    "createur": "Planète Animale",
    "duree": "6:57",
    "vues": "2,8 M vues",
    "publication": "Il y a 5 jours"
  },
  {
    "id": 88,
    "titre": "Je découvre comment les écureuils retrouvent leurs provisions",
    "categorie": "Animaux",
    "createur": "Les Curieux de la Nature",
    "duree": "10:55",
    "vues": "614 k vues",
    "publication": "Il y a 2 semaines"
  },
  {
    "id": 89,
    "titre": "Pourquoi les baleines chantent-elles sous l'eau ?",
    "categorie": "Animaux",
    "createur": "Océan Bleu",
    "duree": "12:47",
    "vues": "793 k vues",
    "publication": "Il y a 10 jours"
  },
  {
    "id": 90,
    "titre": "Le castor le plus travaillant que j'aie jamais vu",
    "categorie": "Animaux",
    "createur": "Aventure Sauvage",
    "duree": "14:09",
    "vues": "382 k vues",
    "publication": "Il y a 4 semaines"
  },
  {
    "id": 91,
    "titre": "POV : un perroquet essaie de répéter ton prénom 🦜",
    "categorie": "Animaux",
    "createur": "Animaux & Compagnie",
    "duree": "0:35",
    "vues": "4,9 M vues",
    "publication": "Il y a 2 jours"
  },
  {
    "id": 92,
    "titre": "Les animaux qui vivent là où presque rien ne pousse",
    "categorie": "Animaux",
    "createur": "Les Curieux de la Nature",
    "duree": "13:18",
    "vues": "476 k vues",
    "publication": "Il y a 1 semaine"
  },
  {
    "id": 93,
    "titre": "Je pensais observer un héron... mais un pygargue est arrivé",
    "categorie": "Animaux",
    "createur": "Aventure Sauvage",
    "duree": "16:43",
    "vues": "563 k vues",
    "publication": "Il y a 13 jours"
  },
  {
    "id": 94,
    "titre": "Mon lapin a trouvé la cachette parfaite pour ses friandises",
    "categorie": "Animaux",
    "createur": "Animaux & Compagnie",
    "duree": "7:41",
    "vues": "1,3 M vues",
    "publication": "Il y a 6 jours"
  },
  {
    "id": 95,
    "titre": "Comment les tortues marines retrouvent-elles leur plage de naissance ?",
    "categorie": "Animaux",
    "createur": "Océan Bleu",
    "duree": "11:52",
    "vues": "721 k vues",
    "publication": "Il y a 3 semaines"
  },
  {
    "id": 96,
    "titre": "Cette araignée est beaucoup plus utile qu'on le croit",
    "categorie": "Animaux",
    "createur": "BioLab Junior",
    "duree": "9:44",
    "vues": "498 k vues",
    "publication": "Il y a 5 semaines"
  },
  {
    "id": 97,
    "titre": "J'ai filmé un renardeau qui découvrait le monde pour la première fois",
    "categorie": "Animaux",
    "createur": "Planète Animale",
    "duree": "15:27",
    "vues": "687 k vues",
    "publication": "Il y a 9 jours"
  },
  {
    "id": 98,
    "titre": "Le jour où un colibri s'est posé juste devant ma caméra",
    "categorie": "Animaux",
    "createur": "Aventure Sauvage",
    "duree": "8:12",
    "vues": "2,2 M vues",
    "publication": "Il y a 4 jours"
  },
  {
    "id": 99,
    "titre": "Pourquoi les lémuriens passent-ils autant de temps au soleil ?",
    "categorie": "Animaux",
    "createur": "Les Curieux de la Nature",
    "duree": "10:33",
    "vues": "551 k vues",
    "publication": "Il y a 2 semaines"
  },
  {
    "id": 100,
    "titre": "Pourquoi les canards marchent-ils en file indienne ?",
    "categorie": "Animaux",
    "createur": "Les Curieux de la Nature",
    "duree": "9:48",
    "vues": "781 k vues",
    "publication": "Il y a 1 semaine"
  },
  {
    "id": 101,
    "titre": "Je suis resté complètement immobile... et un écureuil est monté sur mon sac 🐿️",
    "categorie": "Animaux",
    "createur": "Aventure Sauvage",
    "duree": "14:57",
    "vues": "694 k vues",
    "publication": "Il y a 5 jours"
  },
  {
    "id": 102,
    "titre": "Le poisson le plus coloré que j'aie vu en plongée",
    "categorie": "Animaux",
    "createur": "Océan Bleu",
    "duree": "16:13",
    "vues": "472 k vues",
    "publication": "Il y a 3 semaines"
  },
  {
    "id": 103,
    "titre": "Mon chien a appris un nouveau tour en moins de 10 minutes",
    "categorie": "Animaux",
    "createur": "Animaux & Compagnie",
    "duree": "8:36",
    "vues": "1,7 M vues",
    "publication": "Il y a 6 jours"
  },
  {
    "id": 104,
    "titre": "POV : un bébé canard décide de te suivre partout 🦆",
    "categorie": "Animaux",
    "createur": "Planète Animale",
    "duree": "0:30",
    "vues": "5,6 M vues",
    "publication": "Il y a 3 jours"
  },
  {
    "id": 105,
    "titre": "Les animaux qui changent complètement de couleur selon la saison",
    "categorie": "Animaux",
    "createur": "BioLab Junior",
    "duree": "12:42",
    "vues": "609 k vues",
    "publication": "Il y a 2 semaines"
  },
  {
    "id": 106,
    "titre": "Je découvre le plus grand papillon d'Amérique du Nord",
    "categorie": "Animaux",
    "createur": "BioLab Junior",
    "duree": "10:15",
    "vues": "438 k vues",
    "publication": "Il y a 8 jours"
  },
  {
    "id": 107,
    "titre": "Pourquoi les flamants dorment-ils sur une seule patte ?",
    "categorie": "Animaux",
    "createur": "Les Curieux de la Nature",
    "duree": "8:58",
    "vues": "1,4 M vues",
    "publication": "Il y a 11 jours"
  },
  {
    "id": 108,
    "titre": "J'ai observé une famille de ratons laveurs pendant toute une soirée",
    "categorie": "Animaux",
    "createur": "Aventure Sauvage",
    "duree": "17:24",
    "vues": "531 k vues",
    "publication": "Il y a 2 semaines"
  },
  {
    "id": 109,
    "titre": "Le chat de la maison a décidé d'adopter un jouet... pour toujours 😹",
    "categorie": "Animaux",
    "createur": "Animaux & Compagnie",
    "duree": "7:49",
    "vues": "2,3 M vues",
    "publication": "Il y a 9 jours"
  },
  {
    "id": 110,
    "titre": "Les plus incroyables migrations animales vues du ciel",
    "categorie": "Animaux",
    "createur": "Planète Animale",
    "duree": "18:36",
    "vues": "812 k vues",
    "publication": "Il y a 1 mois"
  },
  {
    "id": 111,
    "titre": "Je pensais filmer un cerf... jusqu'à ce qu'un orignal apparaisse",
    "categorie": "Animaux",
    "createur": "Aventure Sauvage",
    "duree": "15:41",
    "vues": "486 k vues",
    "publication": "Il y a 12 jours"
  },
  {
    "id": 112,
    "titre": "Comment les fourmis retrouvent-elles toujours leur chemin ?",
    "categorie": "Animaux",
    "createur": "BioLab Junior",
    "duree": "11:26",
    "vues": "663 k vues",
    "publication": "Il y a 4 semaines"
  },
  {
    "id": 113,
    "titre": "Le plus petit oiseau que j'aie réussi à photographier",
    "categorie": "Animaux",
    "createur": "Planète Animale",
    "duree": "9:12",
    "vues": "527 k vues",
    "publication": "Il y a 1 semaine"
  },
  {
    "id": 114,
    "titre": "Pourquoi les phoques semblent-ils toujours sourire ?",
    "categorie": "Animaux",
    "createur": "Océan Bleu",
    "duree": "10:54",
    "vues": "892 k vues",
    "publication": "Il y a 2 semaines"
  },
  {
    "id": 115,
    "titre": "Je fabrique un abreuvoir pour les oiseaux... et je ne m'attendais pas à autant de visiteurs",
    "categorie": "Animaux",
    "createur": "Animaux & Compagnie",
    "duree": "13:43",
    "vues": "754 k vues",
    "publication": "Il y a 5 jours"
  },
  {
    "id": 116,
    "titre": "POV : une chèvre grimpe partout... même là où tu ne t'y attends pas 🐐",
    "categorie": "Animaux",
    "createur": "Planète Animale",
    "duree": "0:28",
    "vues": "4,7 M vues",
    "publication": "Il y a 2 jours"
  },
  {
    "id": 117,
    "titre": "Le secret des moustaches des chats enfin expliqué",
    "categorie": "Animaux",
    "createur": "Les Curieux de la Nature",
    "duree": "10:37",
    "vues": "1,1 M vues",
    "publication": "Il y a 3 semaines"
  },
  {
    "id": 118,
    "titre": "J'ai passé une nuit à écouter les animaux de la forêt",
    "categorie": "Animaux",
    "createur": "Aventure Sauvage",
    "duree": "19:08",
    "vues": "346 k vues",
    "publication": "Il y a 10 jours"
  },
  {
    "id": 119,
    "titre": "Pourquoi les kangourous ne marchent-ils presque jamais en reculant ?",
    "categorie": "Animaux",
    "createur": "BioLab Junior",
    "duree": "9:53",
    "vues": "582 k vues",
    "publication": "Il y a 2 mois"
  },
  {
    "id": 120,
    "titre": "Le plus beau banc de poissons que j'aie rencontré sous l'eau",
    "categorie": "Animaux",
    "createur": "Océan Bleu",
    "duree": "17:35",
    "vues": "429 k vues",
    "publication": "Il y a 6 jours"
  },
  {
    "id": 121,
    "titre": "Cette maman hérisson avait une drôle de façon de transporter ses petits ❤️",
    "categorie": "Animaux",
    "createur": "Planète Animale",
    "duree": "8:41",
    "vues": "1,9 M vues",
    "publication": "Il y a 13 jours"
  },
  {
    "id": 122,
    "titre": "Je découvre pourquoi les coraux sont essentiels à la vie marine",
    "categorie": "Animaux",
    "createur": "Océan Bleu",
    "duree": "14:22",
    "vues": "514 k vues",
    "publication": "Il y a 3 semaines"
  },
  {
    "id": 123,
    "titre": "Le concours de bâillements entre mon chien et moi 😂",
    "categorie": "Animaux",
    "createur": "Animaux & Compagnie",
    "duree": "6:46",
    "vues": "2,6 M vues",
    "publication": "Il y a 4 jours"
  },
  {
    "id": 124,
    "titre": "Pourquoi les caméléons ne changent-ils pas seulement de couleur pour se camoufler ?",
    "categorie": "Animaux",
    "createur": "BioLab Junior",
    "duree": "12:08",
    "vues": "637 k vues",
    "publication": "Il y a 1 semaine"
  },
  {
    "id": 125,
    "titre": "Pourquoi mon pain ne levait jamais... jusqu'à aujourd'hui",
    "categorie": "Cuisine",
    "createur": "Cuisine Express",
    "duree": "11:52",
    "vues": "713 k vues",
    "publication": "Il y a 6 jours"
  },
  {
    "id": 126,
    "titre": "Le défi : cuisiner un souper complet avec seulement 15 $",
    "categorie": "Cuisine",
    "createur": "Défi Cuisine",
    "duree": "17:39",
    "vues": "824 k vues",
    "publication": "Il y a 2 semaines"
  },
  {
    "id": 127,
    "titre": "Je compare une pizza congelée avec une pizza maison",
    "categorie": "Cuisine",
    "createur": "FoodLab",
    "duree": "13:41",
    "vues": "687 k vues",
    "publication": "Il y a 11 jours"
  },
  {
    "id": 128,
    "titre": "Trois collations prêtes en moins de cinq minutes",
    "categorie": "Cuisine",
    "createur": "Cuisine Express",
    "duree": "8:35",
    "vues": "1,5 M vues",
    "publication": "Il y a 1 mois"
  },
  {
    "id": 129,
    "titre": "J'ai enfin trouvé la meilleure recette de crêpes",
    "categorie": "Cuisine",
    "createur": "Les Recettes de Mia",
    "duree": "15:18",
    "vues": "593 k vues",
    "publication": "Il y a 8 jours"
  },
  {
    "id": 130,
    "titre": "Le gâteau d'anniversaire le plus simple que j'aie préparé",
    "categorie": "Cuisine",
    "createur": "Chef Léo",
    "duree": "19:07",
    "vues": "478 k vues",
    "publication": "Il y a 2 semaines"
  },
  {
    "id": 131,
    "titre": "Je teste la recette la plus populaire sur TikTok",
    "categorie": "Cuisine",
    "createur": "FoodLab",
    "duree": "14:26",
    "vues": "2,4 M vues",
    "publication": "Il y a 4 jours"
  },
  {
    "id": 132,
    "titre": "Comment réussir des pâtes sans regarder une seule recette",
    "categorie": "Cuisine",
    "createur": "Défi Cuisine",
    "duree": "12:13",
    "vues": "416 k vues",
    "publication": "Il y a 5 semaines"
  },
  {
    "id": 133,
    "titre": "Mon petit frère note mes burgers sur 10 🍔",
    "categorie": "Cuisine",
    "createur": "Défi Cuisine",
    "duree": "10:54",
    "vues": "936 k vues",
    "publication": "Il y a 10 jours"
  },
  {
    "id": 134,
    "titre": "Pourquoi les cookies deviennent parfois trop durs ?",
    "categorie": "Cuisine",
    "createur": "FoodLab",
    "duree": "9:42",
    "vues": "651 k vues",
    "publication": "Il y a 13 jours"
  },
  {
    "id": 135,
    "titre": "Je prépare un déjeuner digne d'un hôtel... à la maison",
    "categorie": "Cuisine",
    "createur": "Chef Léo",
    "duree": "16:47",
    "vues": "544 k vues",
    "publication": "Il y a 3 semaines"
  },
  {
    "id": 136,
    "titre": "Le smoothie le plus rafraîchissant de l'été",
    "categorie": "Cuisine",
    "createur": "Cuisine Express",
    "duree": "7:58",
    "vues": "1,1 M vues",
    "publication": "Il y a 1 semaine"
  },
  {
    "id": 137,
    "titre": "POV : tu coupes enfin un gâteau parfaitement du premier coup 🎂",
    "categorie": "Cuisine",
    "createur": "Les Recettes de Mia",
    "duree": "0:31",
    "vues": "3,8 M vues",
    "publication": "Il y a 3 jours"
  },
  {
    "id": 138,
    "titre": "Je cuisine toute une journée sans utiliser le four",
    "categorie": "Cuisine",
    "createur": "Défi Cuisine",
    "duree": "18:56",
    "vues": "372 k vues",
    "publication": "Il y a 2 semaines"
  },
  {
    "id": 139,
    "titre": "Les cinq erreurs que je faisais toujours en préparant du riz",
    "categorie": "Cuisine",
    "createur": "FoodLab",
    "duree": "11:36",
    "vues": "718 k vues",
    "publication": "Il y a 9 jours"
  },
  {
    "id": 140,
    "titre": "Je transforme un simple sandwich en repas gourmand",
    "categorie": "Cuisine",
    "createur": "Chef Léo",
    "duree": "13:58",
    "vues": "483 k vues",
    "publication": "Il y a 6 jours"
  },
  {
    "id": 141,
    "titre": "Le chocolat chaud le plus crémeux que j'aie goûté",
    "categorie": "Cuisine",
    "createur": "Les Recettes de Mia",
    "duree": "9:27",
    "vues": "824 k vues",
    "publication": "Il y a 2 mois"
  },
  {
    "id": 142,
    "titre": "Je découvre pourquoi tout le monde ajoute une pincée de sel aux desserts",
    "categorie": "Cuisine",
    "createur": "FoodLab",
    "duree": "10:49",
    "vues": "562 k vues",
    "publication": "Il y a 12 jours"
  },
  {
    "id": 143,
    "titre": "Le défi cuisine que mes amis pensaient impossible à réussir",
    "categorie": "Cuisine",
    "createur": "Défi Cuisine",
    "duree": "15:43",
    "vues": "679 k vues",
    "publication": "Il y a 1 semaine"
  },
  {
    "id": 144,
    "titre": "Je prépare des tacos... mais mes amis choisissent tous les ingrédients 🌮",
    "categorie": "Cuisine",
    "createur": "Défi Cuisine",
    "duree": "13:54",
    "vues": "1,1 M vues",
    "publication": "Il y a 5 jours"
  },
  {
    "id": 145,
    "titre": "Pourquoi les œufs brouillés des restaurants sont-ils si crémeux ?",
    "categorie": "Cuisine",
    "createur": "FoodLab",
    "duree": "9:38",
    "vues": "892 k vues",
    "publication": "Il y a 2 semaines"
  },
  {
    "id": 146,
    "titre": "Mon premier pain maison... et je suis surpris du résultat",
    "categorie": "Cuisine",
    "createur": "Chef Léo",
    "duree": "17:12",
    "vues": "624 k vues",
    "publication": "Il y a 1 semaine"
  },
  {
    "id": 147,
    "titre": "POV : tu goûtes enfin le brownie encore chaud 😍",
    "categorie": "Cuisine",
    "createur": "Les Recettes de Mia",
    "duree": "0:24",
    "vues": "4,9 M vues",
    "publication": "Il y a 3 jours"
  },
  {
    "id": 148,
    "titre": "Je réalise un repas complet avec seulement cinq ingrédients",
    "categorie": "Cuisine",
    "createur": "Cuisine Express",
    "duree": "15:48",
    "vues": "537 k vues",
    "publication": "Il y a 8 jours"
  },
  {
    "id": 149,
    "titre": "Le plus beau plateau de fruits que j'aie préparé",
    "categorie": "Cuisine",
    "createur": "Chef Léo",
    "duree": "11:23",
    "vues": "341 k vues",
    "publication": "Il y a 3 semaines"
  },
  {
    "id": 150,
    "titre": "Je teste si les pâtes fraîches valent vraiment l'effort",
    "categorie": "Cuisine",
    "createur": "FoodLab",
    "duree": "14:16",
    "vues": "703 k vues",
    "publication": "Il y a 12 jours"
  },
  {
    "id": 151,
    "titre": "Peut-on cuisiner une pizza carrée aussi bonne qu'une ronde ?",
    "categorie": "Cuisine",
    "createur": "Défi Cuisine",
    "duree": "16:39",
    "vues": "482 k vues",
    "publication": "Il y a 2 semaines"
  },
  {
    "id": 152,
    "titre": "Le secret pour réussir des muffins bien moelleux",
    "categorie": "Cuisine",
    "createur": "Les Recettes de Mia",
    "duree": "10:07",
    "vues": "1,3 M vues",
    "publication": "Il y a 6 jours"
  },
  {
    "id": 153,
    "titre": "Je prépare un pique-nique sans utiliser d'aliments emballés",
    "categorie": "Cuisine",
    "createur": "Cuisine Express",
    "duree": "18:02",
    "vues": "396 k vues",
    "publication": "Il y a 10 jours"
  },
  {
    "id": 154,
    "titre": "Pourquoi les crêpes de ma grand-mère étaient toujours parfaites ?",
    "categorie": "Cuisine",
    "createur": "Chef Léo",
    "duree": "12:44",
    "vues": "958 k vues",
    "publication": "Il y a 1 mois"
  },
  {
    "id": 155,
    "titre": "Je compare du chocolat blanc au lait et noir... lequel gagne ?",
    "categorie": "Cuisine",
    "createur": "FoodLab",
    "duree": "8:56",
    "vues": "612 k vues",
    "publication": "Il y a 9 jours"
  },
  {
    "id": 156,
    "titre": "Le défi : préparer un repas dont la couleur est entièrement verte 🥦",
    "categorie": "Cuisine",
    "createur": "Défi Cuisine",
    "duree": "14:58",
    "vues": "781 k vues",
    "publication": "Il y a 4 jours"
  },
  {
    "id": 157,
    "titre": "Trois desserts que tu peux préparer sans batteur",
    "categorie": "Cuisine",
    "createur": "Les Recettes de Mia",
    "duree": "11:35",
    "vues": "1,6 M vues",
    "publication": "Il y a 2 semaines"
  },
  {
    "id": 158,
    "titre": "J'ai enfin réussi des frites croustillantes au four",
    "categorie": "Cuisine",
    "createur": "Cuisine Express",
    "duree": "13:49",
    "vues": "547 k vues",
    "publication": "Il y a 11 jours"
  },
  {
    "id": 159,
    "titre": "POV : le fromage fond exactement comme tu l'espérais 🧀",
    "categorie": "Cuisine",
    "createur": "Chef Léo",
    "duree": "0:29",
    "vues": "3,5 M vues",
    "publication": "Il y a 2 jours"
  },
  {
    "id": 160,
    "titre": "Je cuisine uniquement avec des aliments de saison",
    "categorie": "Cuisine",
    "createur": "Cuisine Express",
    "duree": "16:27",
    "vues": "422 k vues",
    "publication": "Il y a 5 semaines"
  },
  {
    "id": 161,
    "titre": "Cette astuce change complètement la façon de couper un oignon",
    "categorie": "Cuisine",
    "createur": "FoodLab",
    "duree": "7:43",
    "vues": "2,2 M vues",
    "publication": "Il y a 1 semaine"
  },
  {
    "id": 162,
    "titre": "Le défi des cupcakes décorés... sans utiliser de poche à douille",
    "categorie": "Cuisine",
    "createur": "Les Recettes de Mia",
    "duree": "15:06",
    "vues": "694 k vues",
    "publication": "Il y a 13 jours"
  },
  {
    "id": 163,
    "titre": "Je prépare le meilleur grilled cheese de ma vie",
    "categorie": "Cuisine",
    "createur": "Chef Léo",
    "duree": "10:58",
    "vues": "846 k vues",
    "publication": "Il y a 6 jours"
  },
  {
    "id": 164,
    "titre": "Pourquoi certaines pommes deviennent-elles brunes si vite ?",
    "categorie": "Cuisine",
    "createur": "FoodLab",
    "duree": "9:14",
    "vues": "571 k vues",
    "publication": "Il y a 3 semaines"
  },
  {
    "id": 165,
    "titre": "Mon père choisit le menu... je dois tout cuisiner 😅",
    "categorie": "Cuisine",
    "createur": "Défi Cuisine",
    "duree": "17:48",
    "vues": "735 k vues",
    "publication": "Il y a 8 jours"
  },
  {
    "id": 166,
    "titre": "Je découvre un fruit que je n'avais jamais goûté auparavant",
    "categorie": "Cuisine",
    "createur": "Cuisine Express",
    "duree": "12:26",
    "vues": "458 k vues",
    "publication": "Il y a 2 semaines"
  },
  {
    "id": 167,
    "titre": "Le smoothie qui me donne envie de déjeuner tous les matins",
    "categorie": "Cuisine",
    "createur": "Les Recettes de Mia",
    "duree": "8:38",
    "vues": "989 k vues",
    "publication": "Il y a 5 jours"
  },
  {
    "id": 168,
    "titre": "Je pensais que cette recette était compliquée... elle est finalement super facile !",
    "categorie": "Cuisine",
    "createur": "Chef Léo",
    "duree": "14:35",
    "vues": "643 k vues",
    "publication": "Il y a 1 semaine"
  },
  {
    "id": 169,
    "titre": "Je prépare le souper avec les ingrédients choisis par un dé 🎲",
    "categorie": "Cuisine",
    "createur": "Défi Cuisine",
    "duree": "15:28",
    "vues": "918 k vues",
    "publication": "Il y a 6 jours"
  },
  {
    "id": 170,
    "titre": "Pourquoi les pâtes collent-elles parfois entre elles ?",
    "categorie": "Cuisine",
    "createur": "FoodLab",
    "duree": "9:41",
    "vues": "684 k vues",
    "publication": "Il y a 2 semaines"
  },
  {
    "id": 171,
    "titre": "J'ai tenté de faire des croissants... et je comprends enfin pourquoi c'est si difficile",
    "categorie": "Cuisine",
    "createur": "Chef Léo",
    "duree": "18:56",
    "vues": "527 k vues",
    "publication": "Il y a 9 jours"
  },
  {
    "id": 172,
    "titre": "POV : tu verses enfin le sirop sur des crêpes toutes chaudes 🥞",
    "categorie": "Cuisine",
    "createur": "Les Recettes de Mia",
    "duree": "0:26",
    "vues": "4,2 M vues",
    "publication": "Il y a 3 jours"
  },
  {
    "id": 173,
    "titre": "Je transforme les restes du frigo en repas que tout le monde redemande",
    "categorie": "Cuisine",
    "createur": "Cuisine Express",
    "duree": "16:11",
    "vues": "603 k vues",
    "publication": "Il y a 1 semaine"
  },
  {
    "id": 174,
    "titre": "Le meilleur sandwich que j'aie préparé avec seulement trois ingrédients",
    "categorie": "Cuisine",
    "createur": "Chef Léo",
    "duree": "11:54",
    "vues": "746 k vues",
    "publication": "Il y a 5 jours"
  },
  {
    "id": 175,
    "titre": "Je compare des céréales populaires... certaines m'ont vraiment surpris",
    "categorie": "Cuisine",
    "createur": "FoodLab",
    "duree": "12:47",
    "vues": "512 k vues",
    "publication": "Il y a 3 semaines"
  },
  {
    "id": 176,
    "titre": "Le défi : cuisiner sans utiliser un seul couteau",
    "categorie": "Cuisine",
    "createur": "Défi Cuisine",
    "duree": "14:19",
    "vues": "1,1 M vues",
    "publication": "Il y a 8 jours"
  },
  {
    "id": 177,
    "titre": "Trois recettes parfaites pour un lunch d'école",
    "categorie": "Cuisine",
    "createur": "Cuisine Express",
    "duree": "13:38",
    "vues": "838 k vues",
    "publication": "Il y a 12 jours"
  },
  {
    "id": 178,
    "titre": "Pourquoi certaines pizzas gonflent-elles plus que d'autres ?",
    "categorie": "Cuisine",
    "createur": "FoodLab",
    "duree": "10:08",
    "vues": "573 k vues",
    "publication": "Il y a 1 mois"
  },
  {
    "id": 179,
    "titre": "Je prépare un dessert seulement avec des fruits",
    "categorie": "Cuisine",
    "createur": "Les Recettes de Mia",
    "duree": "15:46",
    "vues": "497 k vues",
    "publication": "Il y a 2 semaines"
  },
  {
    "id": 180,
    "titre": "Mon premier essai de soupe maison... et elle est meilleure que prévu",
    "categorie": "Cuisine",
    "createur": "Chef Léo",
    "duree": "17:03",
    "vues": "421 k vues",
    "publication": "Il y a 11 jours"
  },
  {
    "id": 181,
    "titre": "POV : les muffins sortent du four exactement comme tu l'espérais 🧁",
    "categorie": "Cuisine",
    "createur": "Les Recettes de Mia",
    "duree": "0:31",
    "vues": "3,9 M vues",
    "publication": "Il y a 2 jours"
  },
  {
    "id": 182,
    "titre": "Le fromage le plus étrange que j'aie goûté",
    "categorie": "Cuisine",
    "createur": "Cuisine Express",
    "duree": "9:17",
    "vues": "654 k vues",
    "publication": "Il y a 4 semaines"
  },
  {
    "id": 183,
    "titre": "Je teste une recette vieille de plus de 100 ans",
    "categorie": "Cuisine",
    "createur": "Chef Léo",
    "duree": "18:24",
    "vues": "384 k vues",
    "publication": "Il y a 10 jours"
  },
  {
    "id": 184,
    "titre": "Le secret des meilleures pommes de terre rôties",
    "categorie": "Cuisine",
    "createur": "FoodLab",
    "duree": "11:42",
    "vues": "931 k vues",
    "publication": "Il y a 1 semaine"
  },
  {
    "id": 185,
    "titre": "J'ai préparé un repas complet sans utiliser d'électricité",
    "categorie": "Cuisine",
    "createur": "Défi Cuisine",
    "duree": "19:08",
    "vues": "566 k vues",
    "publication": "Il y a 2 semaines"
  },
  {
    "id": 186,
    "titre": "Pourquoi le beurre change-t-il autant le goût d'un gâteau ?",
    "categorie": "Cuisine",
    "createur": "FoodLab",
    "duree": "8:54",
    "vues": "608 k vues",
    "publication": "Il y a 13 jours"
  },
  {
    "id": 187,
    "titre": "Je découvre une collation populaire dans un autre pays",
    "categorie": "Cuisine",
    "createur": "Cuisine Express",
    "duree": "12:59",
    "vues": "441 k vues",
    "publication": "Il y a 5 jours"
  },
  {
    "id": 188,
    "titre": "Le brownie le plus fondant que j'aie jamais réussi",
    "categorie": "Cuisine",
    "createur": "Les Recettes de Mia",
    "duree": "14:44",
    "vues": "1,4 M vues",
    "publication": "Il y a 3 semaines"
  },
  {
    "id": 189,
    "titre": "Mon défi : cuisiner un repas rouge du début à la fin 🍅",
    "categorie": "Cuisine",
    "createur": "Défi Cuisine",
    "duree": "16:37",
    "vues": "729 k vues",
    "publication": "Il y a 8 jours"
  },
  {
    "id": 190,
    "titre": "Je pensais que les gaufres étaient faciles... jusqu'à aujourd'hui",
    "categorie": "Cuisine",
    "createur": "Chef Léo",
    "duree": "13:21",
    "vues": "517 k vues",
    "publication": "Il y a 6 jours"
  },
  {
    "id": 191,
    "titre": "Pourquoi ajoute-t-on parfois une pincée de sucre dans une sauce ?",
    "categorie": "Cuisine",
    "createur": "FoodLab",
    "duree": "9:33",
    "vues": "786 k vues",
    "publication": "Il y a 2 semaines"
  },
  {
    "id": 192,
    "titre": "Le repas préféré de mon enfance... revisité aujourd'hui",
    "categorie": "Cuisine",
    "createur": "Chef Léo",
    "duree": "15:53",
    "vues": "692 k vues",
    "publication": "Il y a 1 mois"
  },
  {
    "id": 193,
    "titre": "Je prépare un buffet pour toute ma famille sans dépasser mon budget",
    "categorie": "Cuisine",
    "createur": "Cuisine Express",
    "duree": "18:15",
    "vues": "548 k vues",
    "publication": "Il y a 9 jours"
  },
  {
    "id": 194,
    "titre": "Je cuisine tout un repas avec des ingrédients qui commencent par la même lettre",
    "categorie": "Cuisine",
    "createur": "Défi Cuisine",
    "duree": "16:22",
    "vues": "782 k vues",
    "publication": "Il y a 6 jours"
  },
  {
    "id": 195,
    "titre": "Pourquoi le caramel durcit-il parfois beaucoup trop vite ?",
    "categorie": "Cuisine",
    "createur": "FoodLab",
    "duree": "10:14",
    "vues": "691 k vues",
    "publication": "Il y a 2 semaines"
  },
  {
    "id": 196,
    "titre": "Ma première lasagne maison... je ne pensais pas que ce serait aussi bon",
    "categorie": "Cuisine",
    "createur": "Chef Léo",
    "duree": "18:37",
    "vues": "613 k vues",
    "publication": "Il y a 1 semaine"
  },
  {
    "id": 197,
    "titre": "POV : tu casses un œuf... et le jaune reste parfaitement intact 🍳",
    "categorie": "Cuisine",
    "createur": "Les Recettes de Mia",
    "duree": "0:23",
    "vues": "4,3 M vues",
    "publication": "Il y a 3 jours"
  },
  {
    "id": 198,
    "titre": "Je prépare cinq collations parfaites pour une sortie en plein air",
    "categorie": "Cuisine",
    "createur": "Cuisine Express",
    "duree": "14:18",
    "vues": "507 k vues",
    "publication": "Il y a 8 jours"
  },
  {
    "id": 199,
    "titre": "Le secret d'une purée de pommes de terre ultra crémeuse",
    "categorie": "Cuisine",
    "createur": "Chef Léo",
    "duree": "11:47",
    "vues": "964 k vues",
    "publication": "Il y a 3 semaines"
  },
  {
    "id": 200,
    "titre": "Je goûte des fruits que je n'avais jamais vus auparavant",
    "categorie": "Cuisine",
    "createur": "Cuisine Express",
    "duree": "13:29",
    "vues": "583 k vues",
    "publication": "Il y a 11 jours"
  },
  {
    "id": 201,
    "titre": "Le défi : réussir un repas sans utiliser de cuillère",
    "categorie": "Cuisine",
    "createur": "Défi Cuisine",
    "duree": "15:52",
    "vues": "1,2 M vues",
    "publication": "Il y a 5 jours"
  },
  {
    "id": 202,
    "titre": "Pourquoi certaines pâtes restent-elles toujours al dente ?",
    "categorie": "Cuisine",
    "createur": "FoodLab",
    "duree": "9:26",
    "vues": "744 k vues",
    "publication": "Il y a 2 mois"
  },
  {
    "id": 203,
    "titre": "Trois recettes faciles pour impressionner tes invités",
    "categorie": "Cuisine",
    "createur": "Les Recettes de Mia",
    "duree": "12:36",
    "vues": "1,1 M vues",
    "publication": "Il y a 10 jours"
  },
  {
    "id": 204,
    "titre": "Je transforme un simple riz en repas digne d'un restaurant",
    "categorie": "Cuisine",
    "createur": "Chef Léo",
    "duree": "17:14",
    "vues": "496 k vues",
    "publication": "Il y a 2 semaines"
  },
  {
    "id": 205,
    "titre": "POV : le fromage gratine exactement comme dans les vidéos 🤤",
    "categorie": "Cuisine",
    "createur": "Chef Léo",
    "duree": "0:30",
    "vues": "3,7 M vues",
    "publication": "Il y a 2 jours"
  },
  {
    "id": 206,
    "titre": "Je prépare un menu complet inspiré de l'Italie",
    "categorie": "Cuisine",
    "createur": "Cuisine Express",
    "duree": "18:21",
    "vues": "439 k vues",
    "publication": "Il y a 13 jours"
  },
  {
    "id": 207,
    "titre": "Cette boisson maison est devenue mon incontournable de l'été",
    "categorie": "Cuisine",
    "createur": "Les Recettes de Mia",
    "duree": "8:42",
    "vues": "856 k vues",
    "publication": "Il y a 1 semaine"
  },
  {
    "id": 208,
    "titre": "Pourquoi les biscuits craquent-ils parfois sur le dessus ?",
    "categorie": "Cuisine",
    "createur": "FoodLab",
    "duree": "10:57",
    "vues": "612 k vues",
    "publication": "Il y a 3 semaines"
  },
  {
    "id": 209,
    "titre": "Je cuisine les yeux bandés... avec les conseils de mes amis",
    "categorie": "Cuisine",
    "createur": "Défi Cuisine",
    "duree": "16:44",
    "vues": "917 k vues",
    "publication": "Il y a 6 jours"
  },
  {
    "id": 210,
    "titre": "Le meilleur accompagnement pour un barbecue d'été",
    "categorie": "Cuisine",
    "createur": "Chef Léo",
    "duree": "13:58",
    "vues": "541 k vues",
    "publication": "Il y a 9 jours"
  },
  {
    "id": 211,
    "titre": "Je découvre un légume que je n'avais jamais osé cuisiner",
    "categorie": "Cuisine",
    "createur": "Cuisine Express",
    "duree": "12:41",
    "vues": "473 k vues",
    "publication": "Il y a 4 semaines"
  },
  {
    "id": 212,
    "titre": "Mon défi : préparer un dessert sans chocolat... et tout le monde en redemande",
    "categorie": "Cuisine",
    "createur": "Défi Cuisine",
    "duree": "15:07",
    "vues": "688 k vues",
    "publication": "Il y a 12 jours"
  },
  {
    "id": 213,
    "titre": "Pourquoi la pâte à biscuits est-elle si différente avant et après la cuisson ?",
    "categorie": "Cuisine",
    "createur": "FoodLab",
    "duree": "9:48",
    "vues": "777 k vues",
    "publication": "Il y a 2 semaines"
  },
  {
    "id": 214,
    "titre": "Je refais le repas préféré de mon grand-père",
    "categorie": "Cuisine",
    "createur": "Chef Léo",
    "duree": "17:33",
    "vues": "635 k vues",
    "publication": "Il y a 5 jours"
  },
  {
    "id": 215,
    "titre": "Le smoothie le plus coloré que j'aie préparé 🍓🥭🥝",
    "categorie": "Cuisine",
    "createur": "Les Recettes de Mia",
    "duree": "7:56",
    "vues": "1,5 M vues",
    "publication": "Il y a 8 jours"
  },
  {
    "id": 216,
    "titre": "Je teste des ustensiles de cuisine vraiment étranges",
    "categorie": "Cuisine",
    "createur": "FoodLab",
    "duree": "14:39",
    "vues": "592 k vues",
    "publication": "Il y a 1 mois"
  },
  {
    "id": 217,
    "titre": "Peut-on préparer un repas complet avec seulement un micro-ondes ?",
    "categorie": "Cuisine",
    "createur": "Cuisine Express",
    "duree": "13:17",
    "vues": "829 k vues",
    "publication": "Il y a 11 jours"
  },
  {
    "id": 218,
    "titre": "Le défi cuisine qui nous a fait le plus rire depuis longtemps 😂",
    "categorie": "Cuisine",
    "createur": "Défi Cuisine",
    "duree": "18:03",
    "vues": "973 k vues",
    "publication": "Il y a 1 semaine"
  },
  {
    "id": 219,
    "titre": "Je pensais que l'impression 3D était compliquée... jusqu'à aujourd'hui",
    "categorie": "Sciences et technologie",
    "createur": "Labo Curieux",
    "duree": "15:37",
    "vues": "502 k vues",
    "publication": "Il y a 10 jours"
  },
  {
    "id": 220,
    "titre": "Pourquoi les éclairs sont-ils aussi lumineux ?",
    "categorie": "Sciences et technologie",
    "createur": "Explique-moi Ça",
    "duree": "8:47",
    "vues": "963 k vues",
    "publication": "Il y a 1 mois"
  },
  {
    "id": 221,
    "titre": "Je construis un pont en papier... combien de livres va-t-il supporter ?",
    "categorie": "Sciences et technologie",
    "createur": "Science Défi",
    "duree": "13:56",
    "vues": "687 k vues",
    "publication": "Il y a 6 jours"
  },
  {
    "id": 222,
    "titre": "Le drone le plus facile à programmer que j'aie essayé",
    "categorie": "Sciences et technologie",
    "createur": "TechLab Junior",
    "duree": "17:44",
    "vues": "438 k vues",
    "publication": "Il y a 2 semaines"
  },
  {
    "id": 223,
    "titre": "Comment Internet traverse-t-il les océans ?",
    "categorie": "Sciences et technologie",
    "createur": "Minute Science",
    "duree": "10:33",
    "vues": "1,3 M vues",
    "publication": "Il y a 9 jours"
  },
  {
    "id": 224,
    "titre": "Je teste une expérience scientifique vue sur Internet",
    "categorie": "Sciences et technologie",
    "createur": "Science Défi",
    "duree": "14:18",
    "vues": "824 k vues",
    "publication": "Il y a 4 jours"
  },
  {
    "id": 225,
    "titre": "Pourquoi les volcans n'entrent-ils pas tous en éruption ?",
    "categorie": "Sciences et technologie",
    "createur": "Explique-moi Ça",
    "duree": "11:12",
    "vues": "716 k vues",
    "publication": "Il y a 3 semaines"
  },
  {
    "id": 226,
    "titre": "J'ai programmé mon premier jeu vidéo en moins de 30 minutes",
    "categorie": "Sciences et technologie",
    "createur": "Code & Création",
    "duree": "19:06",
    "vues": "556 k vues",
    "publication": "Il y a 12 jours"
  },
  {
    "id": 227,
    "titre": "Le mystère des trous noirs expliqué avec un simple drap",
    "categorie": "Sciences et technologie",
    "createur": "Minute Science",
    "duree": "12:58",
    "vues": "2,1 M vues",
    "publication": "Il y a 2 mois"
  },
  {
    "id": 228,
    "titre": "POV : ton premier robot réussit enfin à avancer tout seul 🎉",
    "categorie": "Sciences et technologie",
    "createur": "TechLab Junior",
    "duree": "0:31",
    "vues": "3,9 M vues",
    "publication": "Il y a 3 jours"
  },
  {
    "id": 229,
    "titre": "Je découvre pourquoi Mars est surnommée la planète rouge",
    "categorie": "Sciences et technologie",
    "createur": "Labo Curieux",
    "duree": "16:25",
    "vues": "482 k vues",
    "publication": "Il y a 2 semaines"
  },
  {
    "id": 230,
    "titre": "Le défi : construire la plus haute tour avec seulement des pailles",
    "categorie": "Sciences et technologie",
    "createur": "Science Défi",
    "duree": "15:04",
    "vues": "734 k vues",
    "publication": "Il y a 7 jours"
  },
  {
    "id": 231,
    "titre": "Pourquoi les aimants attirent-ils certains métaux mais pas tous ?",
    "categorie": "Sciences et technologie",
    "createur": "Explique-moi Ça",
    "duree": "9:52",
    "vues": "871 k vues",
    "publication": "Il y a 11 jours"
  },
  {
    "id": 232,
    "titre": "J'observe des cellules végétales au microscope pour la première fois",
    "categorie": "Sciences et technologie",
    "createur": "Labo Curieux",
    "duree": "13:48",
    "vues": "396 k vues",
    "publication": "Il y a 5 semaines"
  },
  {
    "id": 233,
    "titre": "Je compare un vieux téléphone avec un modèle d'aujourd'hui 📱",
    "categorie": "Sciences et technologie",
    "createur": "TechLab Junior",
    "duree": "11:36",
    "vues": "1,1 M vues",
    "publication": "Il y a 6 jours"
  },
  {
    "id": 234,
    "titre": "Comment les satellites savent-ils où ils sont ?",
    "categorie": "Sciences et technologie",
    "createur": "Minute Science",
    "duree": "10:44",
    "vues": "649 k vues",
    "publication": "Il y a 2 semaines"
  },
  {
    "id": 235,
    "titre": "Je croyais connaître les dinosaures... cette découverte m'a surpris",
    "categorie": "Sciences et technologie",
    "createur": "Explique-moi Ça",
    "duree": "14:27",
    "vues": "1,4 M vues",
    "publication": "Il y a 1 semaine"
  },
  {
    "id": 236,
    "titre": "Le plus petit moteur électrique que j'aie fabriqué ⚡",
    "categorie": "Sciences et technologie",
    "createur": "Science Défi",
    "duree": "17:18",
    "vues": "518 k vues",
    "publication": "Il y a 9 jours"
  },
  {
    "id": 237,
    "titre": "Cette invention vieille de 2 000 ans fonctionne encore aujourd'hui",
    "categorie": "Sciences et technologie",
    "createur": "Labo Curieux",
    "duree": "12:39",
    "vues": "782 k vues",
    "publication": "Il y a 3 semaines"
  },
  {
    "id": 238,
    "titre": "Je construis une voiture propulsée uniquement par un ballon 🎈",
    "categorie": "Sciences et technologie",
    "createur": "Science Défi",
    "duree": "15:23",
    "vues": "846 k vues",
    "publication": "Il y a 8 jours"
  },
  {
    "id": 239,
    "titre": "Pourquoi la Lune nous montre-t-elle toujours la même face ?",
    "categorie": "Sciences et technologie",
    "createur": "Minute Science",
    "duree": "10:18",
    "vues": "1,6 M vues",
    "publication": "Il y a 2 semaines"
  },
  {
    "id": 240,
    "titre": "J'ai fabriqué une lampe qui fonctionne sans pile... ou presque 💡",
    "categorie": "Sciences et technologie",
    "createur": "Labo Curieux",
    "duree": "14:41",
    "vues": "637 k vues",
    "publication": "Il y a 6 jours"
  },
  {
    "id": 241,
    "titre": "POV : ton programme fonctionne enfin du premier coup 💻",
    "categorie": "Sciences et technologie",
    "createur": "Code & Création",
    "duree": "0:24",
    "vues": "3,8 M vues",
    "publication": "Il y a 3 jours"
  },
  {
    "id": 242,
    "titre": "Je teste si une intelligence artificielle peut résoudre mes devoirs de maths",
    "categorie": "Sciences et technologie",
    "createur": "TechLab Junior",
    "duree": "17:36",
    "vues": "1,1 M vues",
    "publication": "Il y a 5 jours"
  },
  {
    "id": 243,
    "titre": "Le plus grand télescope que j'aie eu la chance d'utiliser",
    "categorie": "Sciences et technologie",
    "createur": "Minute Science",
    "duree": "18:07",
    "vues": "524 k vues",
    "publication": "Il y a 3 semaines"
  },
  {
    "id": 244,
    "titre": "Pourquoi les avions restent-ils dans le ciel ?",
    "categorie": "Sciences et technologie",
    "createur": "Explique-moi Ça",
    "duree": "9:44",
    "vues": "982 k vues",
    "publication": "Il y a 10 jours"
  },
  {
    "id": 245,
    "titre": "Je programme un mini-feu de circulation avec quelques composants électroniques",
    "categorie": "Sciences et technologie",
    "createur": "Code & Création",
    "duree": "16:58",
    "vues": "473 k vues",
    "publication": "Il y a 2 semaines"
  },
  {
    "id": 246,
    "titre": "Le défi : construire un pont qui supporte une brique avec seulement du papier",
    "categorie": "Sciences et technologie",
    "createur": "Science Défi",
    "duree": "13:29",
    "vues": "691 k vues",
    "publication": "Il y a 12 jours"
  },
  {
    "id": 247,
    "titre": "Cette illusion d'optique trompe presque tout le monde 👀",
    "categorie": "Sciences et technologie",
    "createur": "Labo Curieux",
    "duree": "8:35",
    "vues": "2,2 M vues",
    "publication": "Il y a 1 semaine"
  },
  {
    "id": 248,
    "titre": "Pourquoi le verre est-il transparent ?",
    "categorie": "Sciences et technologie",
    "createur": "Explique-moi Ça",
    "duree": "10:57",
    "vues": "714 k vues",
    "publication": "Il y a 1 mois"
  },
  {
    "id": 249,
    "titre": "Je découvre comment les robots voient le monde autour d'eux",
    "categorie": "Sciences et technologie",
    "createur": "TechLab Junior",
    "duree": "15:12",
    "vues": "589 k vues",
    "publication": "Il y a 9 jours"
  },
  {
    "id": 250,
    "titre": "Les cinq plus grandes erreurs de l'histoire des inventions",
    "categorie": "Sciences et technologie",
    "createur": "Minute Science",
    "duree": "12:46",
    "vues": "856 k vues",
    "publication": "Il y a 2 mois"
  },
  {
    "id": 251,
    "titre": "J'ai construit une alarme de porte avec un circuit électrique simple",
    "categorie": "Sciences et technologie",
    "createur": "Code & Création",
    "duree": "18:19",
    "vues": "442 k vues",
    "publication": "Il y a 4 jours"
  },
  {
    "id": 252,
    "titre": "POV : ton volcan entre enfin en éruption 🌋",
    "categorie": "Sciences et technologie",
    "createur": "Science Défi",
    "duree": "0:29",
    "vues": "4,6 M vues",
    "publication": "Il y a 2 jours"
  },
  {
    "id": 253,
    "titre": "Pourquoi certains métaux rouillent-ils et d'autres non ?",
    "categorie": "Sciences et technologie",
    "createur": "Explique-moi Ça",
    "duree": "11:08",
    "vues": "633 k vues",
    "publication": "Il y a 2 semaines"
  },
  {
    "id": 254,
    "titre": "Je pensais que l'espace était silencieux... voici la vraie explication",
    "categorie": "Sciences et technologie",
    "createur": "Minute Science",
    "duree": "14:17",
    "vues": "1,3 M vues",
    "publication": "Il y a 11 jours"
  },
  {
    "id": 255,
    "titre": "Je fabrique une grue miniature qui soulève vraiment des objets",
    "categorie": "Sciences et technologie",
    "createur": "Labo Curieux",
    "duree": "17:42",
    "vues": "396 k vues",
    "publication": "Il y a 5 semaines"
  },
  {
    "id": 256,
    "titre": "Le défi de programmation que je n'arrivais jamais à terminer",
    "categorie": "Sciences et technologie",
    "createur": "Code & Création",
    "duree": "13:51",
    "vues": "514 k vues",
    "publication": "Il y a 7 jours"
  },
  {
    "id": 257,
    "titre": "Comment les GPS savent-ils exactement où tu te trouves ?",
    "categorie": "Sciences et technologie",
    "createur": "TechLab Junior",
    "duree": "10:26",
    "vues": "948 k vues",
    "publication": "Il y a 3 semaines"
  },
  {
    "id": 258,
    "titre": "Je découvre pourquoi les bulles sont toujours rondes",
    "categorie": "Sciences et technologie",
    "createur": "Explique-moi Ça",
    "duree": "9:11",
    "vues": "781 k vues",
    "publication": "Il y a 13 jours"
  },
  {
    "id": 259,
    "titre": "Cette expérience avec de la glace m'a complètement surpris ❄️",
    "categorie": "Sciences et technologie",
    "createur": "Labo Curieux",
    "duree": "11:53",
    "vues": "1,5 M vues",
    "publication": "Il y a 6 jours"
  },
  {
    "id": 260,
    "titre": "Peut-on fabriquer de l'électricité avec un citron ?",
    "categorie": "Sciences et technologie",
    "createur": "Science Défi",
    "duree": "16:14",
    "vues": "724 k vues",
    "publication": "Il y a 1 semaine"
  },
  {
    "id": 261,
    "titre": "Je compare une vieille console de jeux avec un ordinateur moderne",
    "categorie": "Sciences et technologie",
    "createur": "TechLab Junior",
    "duree": "14:36",
    "vues": "468 k vues",
    "publication": "Il y a 4 semaines"
  },
  {
    "id": 262,
    "titre": "Le satellite qui photographie la Terre tous les jours 🛰️",
    "categorie": "Sciences et technologie",
    "createur": "Minute Science",
    "duree": "12:04",
    "vues": "612 k vues",
    "publication": "Il y a 10 jours"
  },
  {
    "id": 263,
    "titre": "J'ai fabriqué une éolienne qui produit vraiment de l'électricité 🌬️",
    "categorie": "Sciences et technologie",
    "createur": "Labo Curieux",
    "duree": "17:11",
    "vues": "598 k vues",
    "publication": "Il y a 1 semaine"
  },
  {
    "id": 264,
    "titre": "Pourquoi les astronautes flottent-ils dans la Station spatiale ?",
    "categorie": "Sciences et technologie",
    "createur": "Minute Science",
    "duree": "10:52",
    "vues": "1,9 M vues",
    "publication": "Il y a 2 semaines"
  },
  {
    "id": 265,
    "titre": "Le défi : construire le plus haut gratte-ciel avec des spaghettis",
    "categorie": "Sciences et technologie",
    "createur": "Science Défi",
    "duree": "15:37",
    "vues": "821 k vues",
    "publication": "Il y a 8 jours"
  },
  {
    "id": 266,
    "titre": "POV : ton robot évite enfin les obstacles tout seul 🤖",
    "categorie": "Sciences et technologie",
    "createur": "TechLab Junior",
    "duree": "0:30",
    "vues": "4,1 M vues",
    "publication": "Il y a 3 jours"
  },
  {
    "id": 267,
    "titre": "Je programme un mini-jeu en moins d'une heure",
    "categorie": "Sciences et technologie",
    "createur": "Code & Création",
    "duree": "18:06",
    "vues": "517 k vues",
    "publication": "Il y a 5 jours"
  },
  {
    "id": 268,
    "titre": "Pourquoi les avions laissent-ils parfois une longue traînée blanche ?",
    "categorie": "Sciences et technologie",
    "createur": "Explique-moi Ça",
    "duree": "9:43",
    "vues": "1,2 M vues",
    "publication": "Il y a 3 semaines"
  },
  {
    "id": 269,
    "titre": "Je pensais que les imprimantes 3D imprimaient seulement du plastique...",
    "categorie": "Sciences et technologie",
    "createur": "Labo Curieux",
    "duree": "14:56",
    "vues": "654 k vues",
    "publication": "Il y a 11 jours"
  },
  {
    "id": 270,
    "titre": "Les cinq découvertes scientifiques faites complètement par hasard",
    "categorie": "Sciences et technologie",
    "createur": "Minute Science",
    "duree": "12:48",
    "vues": "937 k vues",
    "publication": "Il y a 1 mois"
  },
  {
    "id": 271,
    "titre": "Je construis une catapulte miniature avec des bâtonnets de bois",
    "categorie": "Sciences et technologie",
    "createur": "Science Défi",
    "duree": "16:28",
    "vues": "583 k vues",
    "publication": "Il y a 9 jours"
  },
  {
    "id": 272,
    "titre": "Cette expérience avec un laser est encore plus impressionnante que prévu ✨",
    "categorie": "Sciences et technologie",
    "createur": "Labo Curieux",
    "duree": "11:35",
    "vues": "1,6 M vues",
    "publication": "Il y a 4 jours"
  },
  {
    "id": 273,
    "titre": "Comment un robot reconnaît-il une personne ?",
    "categorie": "Sciences et technologie",
    "createur": "TechLab Junior",
    "duree": "13:24",
    "vues": "731 k vues",
    "publication": "Il y a 2 semaines"
  },
  {
    "id": 274,
    "titre": "Pourquoi les planètes ne tombent-elles jamais sur le Soleil ?",
    "categorie": "Sciences et technologie",
    "createur": "Explique-moi Ça",
    "duree": "10:37",
    "vues": "1,4 M vues",
    "publication": "Il y a 12 jours"
  },
  {
    "id": 275,
    "titre": "Je construis un bras robotisé avec des objets recyclés",
    "categorie": "Sciences et technologie",
    "createur": "TechLab Junior",
    "duree": "19:02",
    "vues": "429 k vues",
    "publication": "Il y a 6 jours"
  },
  {
    "id": 276,
    "titre": "Le microscope révèle un monde que je n'imaginais pas 🔬",
    "categorie": "Sciences et technologie",
    "createur": "Labo Curieux",
    "duree": "15:18",
    "vues": "648 k vues",
    "publication": "Il y a 3 semaines"
  },
  {
    "id": 277,
    "titre": "POV : ton expérience fonctionne du premier essai 🎉",
    "categorie": "Sciences et technologie",
    "createur": "Science Défi",
    "duree": "0:27",
    "vues": "3,7 M vues",
    "publication": "Il y a 2 jours"
  },
  {
    "id": 278,
    "titre": "Pourquoi les fusées décollent-elles toujours verticalement ?",
    "categorie": "Sciences et technologie",
    "createur": "Minute Science",
    "duree": "11:49",
    "vues": "812 k vues",
    "publication": "Il y a 1 semaine"
  },
  {
    "id": 279,
    "titre": "J'ai demandé à une IA de dessiner l'invention du futur... puis je l'ai construite",
    "categorie": "Sciences et technologie",
    "createur": "Code & Création",
    "duree": "17:44",
    "vues": "1,1 M vues",
    "publication": "Il y a 10 jours"
  },
  {
    "id": 280,
    "titre": "Cette expérience avec des aimants semble impossible... pourtant elle fonctionne",
    "categorie": "Sciences et technologie",
    "createur": "Science Défi",
    "duree": "12:58",
    "vues": "694 k vues",
    "publication": "Il y a 2 semaines"
  },
  {
    "id": 281,
    "titre": "Comment les panneaux solaires produisent-ils de l'électricité ?",
    "categorie": "Sciences et technologie",
    "createur": "Explique-moi Ça",
    "duree": "9:58",
    "vues": "884 k vues",
    "publication": "Il y a 5 semaines"
  },
  {
    "id": 282,
    "titre": "Je découvre le plus ancien ordinateur mécanique du monde",
    "categorie": "Sciences et technologie",
    "createur": "Minute Science",
    "duree": "13:46",
    "vues": "562 k vues",
    "publication": "Il y a 13 jours"
  },
  {
    "id": 283,
    "titre": "Le défi de programmation qui m'a appris à penser autrement",
    "categorie": "Sciences et technologie",
    "createur": "Code & Création",
    "duree": "16:53",
    "vues": "488 k vues",
    "publication": "Il y a 8 jours"
  },
  {
    "id": 284,
    "titre": "Pourquoi les bulles de savon brillent-elles de toutes les couleurs ?",
    "categorie": "Sciences et technologie",
    "createur": "Explique-moi Ça",
    "duree": "8:44",
    "vues": "1,3 M vues",
    "publication": "Il y a 2 mois"
  },
  {
    "id": 285,
    "titre": "J'ai fabriqué une mini-serre entièrement automatique 🌱",
    "categorie": "Sciences et technologie",
    "createur": "Labo Curieux",
    "duree": "18:21",
    "vues": "406 k vues",
    "publication": "Il y a 9 jours"
  },
  {
    "id": 286,
    "titre": "La découverte scientifique qui a commencé par... une erreur",
    "categorie": "Sciences et technologie",
    "createur": "Minute Science",
    "duree": "12:15",
    "vues": "978 k vues",
    "publication": "Il y a 4 semaines"
  },
  {
    "id": 287,
    "titre": "Je teste un clavier contrôlé uniquement avec des bananes 🍌",
    "categorie": "Sciences et technologie",
    "createur": "TechLab Junior",
    "duree": "14:33",
    "vues": "2,5 M vues",
    "publication": "Il y a 5 jours"
  },
  {
    "id": 288,
    "titre": "Je construis une machine de Rube Goldberg qui fonctionne enfin !",
    "categorie": "Sciences et technologie",
    "createur": "Science Défi",
    "duree": "18:12",
    "vues": "746 k vues",
    "publication": "Il y a 6 jours"
  },
  {
    "id": 289,
    "titre": "Pourquoi les étoiles scintillent-elles alors que les planètes presque jamais ?",
    "categorie": "Sciences et technologie",
    "createur": "Minute Science",
    "duree": "10:41",
    "vues": "1,8 M vues",
    "publication": "Il y a 2 semaines"
  },
  {
    "id": 290,
    "titre": "J'ai fabriqué une horloge alimentée par... une pomme 🍎",
    "categorie": "Sciences et technologie",
    "createur": "Labo Curieux",
    "duree": "15:37",
    "vues": "618 k vues",
    "publication": "Il y a 9 jours"
  },
  {
    "id": 291,
    "titre": "POV : ton premier programme affiche enfin « Bonjour le monde ! » 💻",
    "categorie": "Sciences et technologie",
    "createur": "Code & Création",
    "duree": "0:26",
    "vues": "3,5 M vues",
    "publication": "Il y a 3 jours"
  },
  {
    "id": 292,
    "titre": "Je demande à une IA de résoudre un casse-tête... puis j'essaie de faire mieux",
    "categorie": "Sciences et technologie",
    "createur": "TechLab Junior",
    "duree": "16:54",
    "vues": "1,2 M vues",
    "publication": "Il y a 5 jours"
  },
  {
    "id": 293,
    "titre": "Les inventions qui semblaient absurdes... avant de changer le monde",
    "categorie": "Sciences et technologie",
    "createur": "Minute Science",
    "duree": "13:18",
    "vues": "904 k vues",
    "publication": "Il y a 1 mois"
  },
  {
    "id": 294,
    "titre": "Je teste combien de poids un pont en carton peut réellement supporter",
    "categorie": "Sciences et technologie",
    "createur": "Science Défi",
    "duree": "14:45",
    "vues": "677 k vues",
    "publication": "Il y a 12 jours"
  },
  {
    "id": 295,
    "titre": "Pourquoi les arcs-en-ciel ont-ils toujours la même forme ?",
    "categorie": "Sciences et technologie",
    "createur": "Explique-moi Ça",
    "duree": "9:57",
    "vues": "1,1 M vues",
    "publication": "Il y a 3 semaines"
  },
  {
    "id": 296,
    "titre": "J'ai transformé une vieille boîte en coffre-fort électronique",
    "categorie": "Sciences et technologie",
    "createur": "Code & Création",
    "duree": "17:09",
    "vues": "493 k vues",
    "publication": "Il y a 1 semaine"
  },
  {
    "id": 297,
    "titre": "Cette expérience avec l'air comprimé m'a complètement surpris 💨",
    "categorie": "Sciences et technologie",
    "createur": "Labo Curieux",
    "duree": "11:26",
    "vues": "1,4 M vues",
    "publication": "Il y a 8 jours"
  },
  {
    "id": 298,
    "titre": "Comment un code QR peut-il contenir autant d'informations ?",
    "categorie": "Sciences et technologie",
    "createur": "Explique-moi Ça",
    "duree": "10:14",
    "vues": "712 k vues",
    "publication": "Il y a 2 semaines"
  },
  {
    "id": 299,
    "titre": "Je découvre comment les robots apprennent à éviter les obstacles",
    "categorie": "Sciences et technologie",
    "createur": "TechLab Junior",
    "duree": "15:58",
    "vues": "582 k vues",
    "publication": "Il y a 11 jours"
  },
  {
    "id": 300,
    "titre": "Le défi : construire un véhicule qui avance sans moteur",
    "categorie": "Sciences et technologie",
    "createur": "Science Défi",
    "duree": "16:43",
    "vues": "835 k vues",
    "publication": "Il y a 4 jours"
  },
  {
    "id": 301,
    "titre": "Pourquoi les aurores boréales illuminent-elles le ciel ?",
    "categorie": "Sciences et technologie",
    "createur": "Minute Science",
    "duree": "12:37",
    "vues": "2,3 M vues",
    "publication": "Il y a 2 mois"
  },
  {
    "id": 302,
    "titre": "POV : ta fusée en papier vole enfin jusqu'au fond du gymnase 🚀",
    "categorie": "Sciences et technologie",
    "createur": "Science Défi",
    "duree": "0:29",
    "vues": "4,0 M vues",
    "publication": "Il y a 2 jours"
  },
  {
    "id": 303,
    "titre": "J'ai créé un détecteur de lumière avec quelques composants électroniques",
    "categorie": "Sciences et technologie",
    "createur": "Code & Création",
    "duree": "18:24",
    "vues": "431 k vues",
    "publication": "Il y a 10 jours"
  },
  {
    "id": 304,
    "titre": "Le plus petit ordinateur que j'aie jamais utilisé",
    "categorie": "Sciences et technologie",
    "createur": "TechLab Junior",
    "duree": "13:46",
    "vues": "654 k vues",
    "publication": "Il y a 3 semaines"
  },
  {
    "id": 305,
    "titre": "Pourquoi les glaçons flottent-ils au lieu de couler ?",
    "categorie": "Sciences et technologie",
    "createur": "Explique-moi Ça",
    "duree": "8:49",
    "vues": "987 k vues",
    "publication": "Il y a 6 jours"
  },
  {
    "id": 306,
    "titre": "Je construis une griffe mécanique pour ramasser des objets",
    "categorie": "Sciences et technologie",
    "createur": "Labo Curieux",
    "duree": "17:33",
    "vues": "517 k vues",
    "publication": "Il y a 13 jours"
  },
  {
    "id": 307,
    "titre": "Comment les voitures électriques récupèrent-elles de l'énergie en freinant ?",
    "categorie": "Sciences et technologie",
    "createur": "Minute Science",
    "duree": "11:53",
    "vues": "743 k vues",
    "publication": "Il y a 1 semaine"
  },
  {
    "id": 308,
    "titre": "J'ai fabriqué un mini phare qui s'allume automatiquement la nuit",
    "categorie": "Sciences et technologie",
    "createur": "Code & Création",
    "duree": "15:21",
    "vues": "469 k vues",
    "publication": "Il y a 5 semaines"
  },
  {
    "id": 309,
    "titre": "Cette réaction chimique change de couleur sous mes yeux 🧪",
    "categorie": "Sciences et technologie",
    "createur": "Labo Curieux",
    "duree": "10:32",
    "vues": "1,7 M vues",
    "publication": "Il y a 9 jours"
  },
  {
    "id": 310,
    "titre": "Pourquoi les satellites ne tombent-ils jamais sur la Terre ?",
    "categorie": "Sciences et technologie",
    "createur": "Explique-moi Ça",
    "duree": "9:38",
    "vues": "1,2 M vues",
    "publication": "Il y a 2 semaines"
  },
  {
    "id": 311,
    "titre": "Je compare les premiers robots industriels avec ceux d'aujourd'hui",
    "categorie": "Sciences et technologie",
    "createur": "TechLab Junior",
    "duree": "14:57",
    "vues": "538 k vues",
    "publication": "Il y a 4 semaines"
  },
  {
    "id": 312,
    "titre": "Le projet scientifique qui a impressionné toute ma classe",
    "categorie": "Sciences et technologie",
    "createur": "Science Défi",
    "duree": "16:08",
    "vues": "689 k vues",
    "publication": "Il y a 1 semaine"
  },
  {
    "id": 313,
    "titre": "Je joue à Pokémon avec une équipe choisie complètement au hasard",
    "categorie": "Jeux vidéo",
    "createur": "GameZone Québec",
    "duree": "19:35",
    "vues": "438 k vues",
    "publication": "Il y a 2 semaines"
  },
  {
    "id": 314,
    "titre": "Pourquoi tout le monde parle encore de ce vieux niveau de Geometry Dash ?",
    "categorie": "Jeux vidéo",
    "createur": "NovaPlay",
    "duree": "8:57",
    "vues": "286 k vues",
    "publication": "Il y a 8 jours"
  },
  {
    "id": 315,
    "titre": "Je transforme mon île Animal Crossing avant la rentrée scolaire",
    "categorie": "Jeux vidéo",
    "createur": "PixelMax",
    "duree": "17:23",
    "vues": "194 k vues",
    "publication": "Il y a 10 jours"
  },
  {
    "id": 316,
    "titre": "Rocket League : le but le plus chanceux de toute ma vie",
    "categorie": "Jeux vidéo",
    "createur": "Sam Gaming",
    "duree": "7:36",
    "vues": "1,1 M vues",
    "publication": "Il y a 1 mois"
  },
  {
    "id": 317,
    "titre": "Je découvre enfin ce qu'il y avait au fond de l'océan dans Subnautica",
    "categorie": "Jeux vidéo",
    "createur": "PlayLab",
    "duree": "21:47",
    "vues": "678 k vues",
    "publication": "Il y a 3 semaines"
  },
  {
    "id": 318,
    "titre": "J'ai retrouvé ma première sauvegarde Minecraft de 2018",
    "categorie": "Jeux vidéo",
    "createur": "NovaPlay",
    "duree": "14:19",
    "vues": "905 k vues",
    "publication": "Il y a 2 jours"
  },
  {
    "id": 319,
    "titre": "Le défi LEGO Fortnite qui semblait impossible... jusqu'à aujourd'hui",
    "categorie": "Jeux vidéo",
    "createur": "Les Défis de Léo",
    "duree": "15:54",
    "vues": "357 k vues",
    "publication": "Il y a 12 jours"
  },
  {
    "id": 320,
    "titre": "Mon chat regarde Brawl Stars avec moi... sa réaction est parfaite 🐱",
    "categorie": "Jeux vidéo",
    "createur": "PixelMax",
    "duree": "6:44",
    "vues": "742 k vues",
    "publication": "Il y a 5 mois"
  },
  {
    "id": 321,
    "titre": "Je tente de battre mon père à FIFA pour la première fois",
    "categorie": "Jeux vidéo",
    "createur": "Sam Gaming",
    "duree": "12:31",
    "vues": "609 k vues",
    "publication": "Il y a 4 jours"
  },
  {
    "id": 322,
    "titre": "Pourquoi ce monde Minecraft est devenu célèbre sans que personne ne joue dessus ?",
    "categorie": "Jeux vidéo",
    "createur": "GameZone Québec",
    "duree": "10:15",
    "vues": "483 k vues",
    "publication": "Il y a 3 mois"
  },
  {
    "id": 323,
    "titre": "Je reconstruis le château de Zelda avec des blocs LEGO",
    "categorie": "Jeux vidéo",
    "createur": "PlayLab",
    "duree": "23:18",
    "vues": "156 k vues",
    "publication": "Il y a 1 semaine"
  },
  {
    "id": 324,
    "titre": "Ce personnage oublié de Super Smash Bros mérite une deuxième chance",
    "categorie": "Jeux vidéo",
    "createur": "NovaPlay",
    "duree": "9:52",
    "vues": "271 k vues",
    "publication": "Il y a 9 jours"
  },
  {
    "id": 325,
    "titre": "Une journée complète à jouer seulement avec des objets trouvés au hasard",
    "categorie": "Jeux vidéo",
    "createur": "Turbo Gaming",
    "duree": "18:06",
    "vues": "512 k vues",
    "publication": "Il y a 2 semaines"
  },
  {
    "id": 326,
    "titre": "Je pensais connaître Terraria... jusqu'à ce que je découvre cette grotte",
    "categorie": "Jeux vidéo",
    "createur": "PixelMax",
    "duree": "16:42",
    "vues": "391 k vues",
    "publication": "Il y a 11 jours"
  },
  {
    "id": 327,
    "titre": "Le tournoi de Mario Kart de notre classe a eu une fin inattendue",
    "categorie": "Jeux vidéo",
    "createur": "Les Défis de Léo",
    "duree": "13:09",
    "vues": "829 k vues",
    "publication": "Il y a 6 jours"
  },
  {
    "id": 328,
    "titre": "J'ai demandé à ma grand-mère de créer mon personnage Roblox",
    "categorie": "Jeux vidéo",
    "createur": "GameZone Québec",
    "duree": "8:39",
    "vues": "1,3 M vues",
    "publication": "Il y a 1 mois"
  },
  {
    "id": 329,
    "titre": "Parmi Us : la stratégie la plus drôle que personne n'avait essayée",
    "categorie": "Jeux vidéo",
    "createur": "PlayLab",
    "duree": "11:58",
    "vues": "447 k vues",
    "publication": "Il y a 2 mois"
  },
  {
    "id": 330,
    "titre": "Le niveau secret que presque tous les joueurs ratent dans Trackmania",
    "categorie": "Jeux vidéo",
    "createur": "Turbo Gaming",
    "duree": "15:27",
    "vues": "233 k vues",
    "publication": "Il y a 2 semaines"
  },
  {
    "id": 331,
    "titre": "Je n'avais jamais vu une victoire comme celle-ci dans Fall Guys",
    "categorie": "Jeux vidéo",
    "createur": "Sam Gaming",
    "duree": "7:58",
    "vues": "690 k vues",
    "publication": "Il y a 1 semaine"
  },
  {
    "id": 332,
    "titre": "J'ai tenté de survivre une journée entière sans quitter mon premier biome dans Minecraft",
    "categorie": "Jeux vidéo",
    "createur": "Cube Aventure",
    "duree": "17:51",
    "vues": "584 k vues",
    "publication": "Il y a 9 jours"
  },
  {
    "id": 333,
    "titre": "Pourquoi tout le monde rate ce mini-jeu dans Roblox ?",
    "categorie": "Jeux vidéo",
    "createur": "GameZone Québec",
    "duree": "9:34",
    "vues": "411 k vues",
    "publication": "Il y a 3 semaines"
  },
  {
    "id": 334,
    "titre": "Ma petite sœur a décoré ma base Minecraft... et j'ai tout gardé !",
    "categorie": "Jeux vidéo",
    "createur": "PixelMax",
    "duree": "12:18",
    "vues": "768 k vues",
    "publication": "Il y a 5 jours"
  },
  {
    "id": 335,
    "titre": "Je joue à Mario Kart avec un volant en carton fabriqué à la maison",
    "categorie": "Jeux vidéo",
    "createur": "Les Défis de Léo",
    "duree": "14:07",
    "vues": "925 k vues",
    "publication": "Il y a 2 semaines"
  },
  {
    "id": 336,
    "titre": "Le coffre le plus inutile... qui contenait finalement un trésor",
    "categorie": "Jeux vidéo",
    "createur": "NovaPlay",
    "duree": "10:49",
    "vues": "352 k vues",
    "publication": "Il y a 1 mois"
  },
  {
    "id": 337,
    "titre": "Je crée un zoo géant dans Planet Zoo sans dépasser mon budget",
    "categorie": "Jeux vidéo",
    "createur": "Cube Aventure",
    "duree": "21:36",
    "vues": "241 k vues",
    "publication": "Il y a 8 jours"
  },
  {
    "id": 338,
    "titre": "Le skin que tout le monde voulait dans Fortnite... est-il vraiment si spécial ?",
    "categorie": "Jeux vidéo",
    "createur": "Turbo Gaming",
    "duree": "11:53",
    "vues": "1,6 M vues",
    "publication": "Il y a 4 semaines"
  },
  {
    "id": 339,
    "titre": "J'ai demandé à mes abonnés de choisir ma prochaine mission Pokémon",
    "categorie": "Jeux vidéo",
    "createur": "PlayLab",
    "duree": "15:24",
    "vues": "507 k vues",
    "publication": "Il y a 12 jours"
  },
  {
    "id": 340,
    "titre": "Cette course Trackmania semblait impossible jusqu'à ce que je voie cette ligne parfaite",
    "categorie": "Jeux vidéo",
    "createur": "Turbo Gaming",
    "duree": "8:42",
    "vues": "398 k vues",
    "publication": "Il y a 6 jours"
  },
  {
    "id": 341,
    "titre": "Peut-on construire une ville entière avec seulement du bois dans Minecraft ?",
    "categorie": "Jeux vidéo",
    "createur": "PixelMax",
    "duree": "19:55",
    "vues": "1,2 M vues",
    "publication": "Il y a 2 mois"
  },
  {
    "id": 342,
    "titre": "Le jour où tout notre serveur Roblox est devenu complètement silencieux",
    "categorie": "Jeux vidéo",
    "createur": "GameZone Québec",
    "duree": "13:46",
    "vues": "284 k vues",
    "publication": "Il y a 1 semaine"
  },
  {
    "id": 343,
    "titre": "Je découvre enfin pourquoi tout le monde adore Stardew Valley",
    "categorie": "Jeux vidéo",
    "createur": "NovaPlay",
    "duree": "16:09",
    "vues": "462 k vues",
    "publication": "Il y a 2 semaines"
  },
  {
    "id": 344,
    "titre": "J'ai transformé le pire personnage en véritable héros dans Brawl Stars",
    "categorie": "Jeux vidéo",
    "createur": "Sam Gaming",
    "duree": "10:57",
    "vues": "643 k vues",
    "publication": "Il y a 4 jours"
  },
  {
    "id": 345,
    "titre": "Mon défi : terminer Fall Guys sans tomber une seule fois",
    "categorie": "Jeux vidéo",
    "createur": "Les Défis de Léo",
    "duree": "9:58",
    "vues": "734 k vues",
    "publication": "Il y a 11 jours"
  },
  {
    "id": 346,
    "titre": "Les plus beaux paysages que j'ai trouvés en explorant Zelda",
    "categorie": "Jeux vidéo",
    "createur": "Cube Aventure",
    "duree": "18:31",
    "vues": "557 k vues",
    "publication": "Il y a 3 semaines"
  },
  {
    "id": 347,
    "titre": "Je n'avais jamais remarqué ce bruit caché dans Among Us",
    "categorie": "Jeux vidéo",
    "createur": "PlayLab",
    "duree": "7:45",
    "vues": "389 k vues",
    "publication": "Il y a 1 mois"
  },
  {
    "id": 348,
    "titre": "Comment un simple changement de stratégie m'a fait gagner à Clash Royale",
    "categorie": "Jeux vidéo",
    "createur": "Sam Gaming",
    "duree": "12:27",
    "vues": "826 k vues",
    "publication": "Il y a 10 jours"
  },
  {
    "id": 349,
    "titre": "J'ai organisé une chasse au trésor géante dans Animal Crossing",
    "categorie": "Jeux vidéo",
    "createur": "PixelMax",
    "duree": "20:14",
    "vues": "317 k vues",
    "publication": "Il y a 5 semaines"
  },
  {
    "id": 350,
    "titre": "Le circuit le plus drôle jamais créé dans Mario Maker",
    "categorie": "Jeux vidéo",
    "createur": "NovaPlay",
    "duree": "11:36",
    "vues": "278 k vues",
    "publication": "Il y a 2 jours"
  },
  {
    "id": 351,
    "titre": "Mon premier speedrun... et je ne m'attendais vraiment pas à ce résultat",
    "categorie": "Jeux vidéo",
    "createur": "PlayLab",
    "duree": "13:58",
    "vues": "489 k vues",
    "publication": "Il y a 9 jours"
  },
  {
    "id": 352,
    "titre": "Je laisse la roue du hasard choisir mon équipement dans Fortnite",
    "categorie": "Jeux vidéo",
    "createur": "Turbo Gaming",
    "duree": "14:41",
    "vues": "1,1 M vues",
    "publication": "Il y a 1 semaine"
  },
  {
    "id": 353,
    "titre": "Pourquoi les nouveaux joueurs font presque tous cette erreur dans Terraria",
    "categorie": "Jeux vidéo",
    "createur": "Cube Aventure",
    "duree": "15:32",
    "vues": "364 k vues",
    "publication": "Il y a 3 jours"
  },
  {
    "id": 354,
    "titre": "Le plus beau coucher de soleil que j'ai vu dans un jeu vidéo",
    "categorie": "Jeux vidéo",
    "createur": "PixelMax",
    "duree": "6:51",
    "vues": "214 k vues",
    "publication": "Il y a 2 semaines"
  },
  {
    "id": 355,
    "titre": "Je défie mon grand-père dans Wii Sports... et il me surprend complètement",
    "categorie": "Jeux vidéo",
    "createur": "Les Défis de Léo",
    "duree": "9:16",
    "vues": "958 k vues",
    "publication": "Il y a 6 mois"
  },
  {
    "id": 356,
    "titre": "Cette mission secondaire valait largement le détour",
    "categorie": "Jeux vidéo",
    "createur": "NovaPlay",
    "duree": "17:12",
    "vues": "405 k vues",
    "publication": "Il y a 13 jours"
  },
  {
    "id": 357,
    "titre": "J'ai confié toute ma partie Minecraft à mon petit cousin pendant 30 minutes",
    "categorie": "Jeux vidéo",
    "createur": "PixelMax",
    "duree": "15:48",
    "vues": "684 k vues",
    "publication": "Il y a 1 semaine"
  },
  {
    "id": 358,
    "titre": "Cette quête secondaire était cachée depuis le début... et je suis passé à côté pendant des années",
    "categorie": "Jeux vidéo",
    "createur": "Cube Aventure",
    "duree": "18:36",
    "vues": "431 k vues",
    "publication": "Il y a 3 semaines"
  },
  {
    "id": 359,
    "titre": "Je construis une maison ronde dans Minecraft... c'était beaucoup plus difficile que prévu",
    "categorie": "Jeux vidéo",
    "createur": "PixelMax",
    "duree": "20:17",
    "vues": "918 k vues",
    "publication": "Il y a 9 jours"
  },
  {
    "id": 360,
    "titre": "On échange nos objectifs dans Fortnite sans les connaître d'avance",
    "categorie": "Jeux vidéo",
    "createur": "Les Défis de Léo",
    "duree": "13:02",
    "vues": "562 k vues",
    "publication": "Il y a 2 semaines"
  },
  {
    "id": 361,
    "titre": "J'ai trouvé le coin le plus paisible de tout Animal Crossing",
    "categorie": "Jeux vidéo",
    "createur": "NovaPlay",
    "duree": "11:44",
    "vues": "249 k vues",
    "publication": "Il y a 6 jours"
  },
  {
    "id": 362,
    "titre": "Le raccourci que j'utilisais depuis toujours était finalement le plus lent",
    "categorie": "Jeux vidéo",
    "createur": "Turbo Gaming",
    "duree": "9:31",
    "vues": "796 k vues",
    "publication": "Il y a 5 jours"
  },
  {
    "id": 363,
    "titre": "Je laisse ChatGPT me proposer un défi Minecraft complètement inédit",
    "categorie": "Jeux vidéo",
    "createur": "PlayLab",
    "duree": "16:58",
    "vues": "1,7 M vues",
    "publication": "Il y a 2 mois"
  },
  {
    "id": 364,
    "titre": "POV : tu réussis enfin le saut que tu rates depuis une heure 🎮",
    "categorie": "Jeux vidéo",
    "createur": "Turbo Gaming",
    "duree": "0:24",
    "vues": "4,1 M vues",
    "publication": "Il y a 4 jours"
  },
  {
    "id": 365,
    "titre": "Ce coffre semblait vide... jusqu'à ce que je regarde une deuxième fois",
    "categorie": "Jeux vidéo",
    "createur": "Cube Aventure",
    "duree": "10:53",
    "vues": "318 k vues",
    "publication": "Il y a 12 jours"
  },
  {
    "id": 366,
    "titre": "Mon chien choisit le prochain jeu auquel je dois jouer 🐶",
    "categorie": "Jeux vidéo",
    "createur": "Sam Gaming",
    "duree": "8:46",
    "vues": "1,2 M vues",
    "publication": "Il y a 1 semaine"
  },
  {
    "id": 367,
    "titre": "Je joue à Roblox avec les paramètres graphiques au maximum",
    "categorie": "Jeux vidéo",
    "createur": "GameZone Québec",
    "duree": "14:39",
    "vues": "525 k vues",
    "publication": "Il y a 10 jours"
  },
  {
    "id": 368,
    "titre": "Pourquoi cette vieille carte Fortnite est encore la préférée des joueurs ?",
    "categorie": "Jeux vidéo",
    "createur": "NovaPlay",
    "duree": "12:55",
    "vues": "973 k vues",
    "publication": "Il y a 1 mois"
  },
  {
    "id": 369,
    "titre": "Je termine un donjon sans utiliser la moindre potion",
    "categorie": "Jeux vidéo",
    "createur": "Cube Aventure",
    "duree": "17:11",
    "vues": "402 k vues",
    "publication": "Il y a 2 semaines"
  },
  {
    "id": 370,
    "titre": "Ce mini-jeu caché est presque impossible à trouver",
    "categorie": "Jeux vidéo",
    "createur": "PlayLab",
    "duree": "7:52",
    "vues": "364 k vues",
    "publication": "Il y a 3 jours"
  },
  {
    "id": 371,
    "titre": "Le plus beau ralenti que j'ai réussi dans Rocket League",
    "categorie": "Jeux vidéo",
    "createur": "Turbo Gaming",
    "duree": "0:37",
    "vues": "2,9 M vues",
    "publication": "Il y a 5 jours"
  },
  {
    "id": 372,
    "titre": "J'ai demandé à une roue de choisir tous mes équipements",
    "categorie": "Jeux vidéo",
    "createur": "Les Défis de Léo",
    "duree": "13:27",
    "vues": "609 k vues",
    "publication": "Il y a 8 jours"
  },
  {
    "id": 373,
    "titre": "Je croyais avoir tout vu... puis ce joueur est arrivé",
    "categorie": "Jeux vidéo",
    "createur": "Sam Gaming",
    "duree": "9:58",
    "vues": "441 k vues",
    "publication": "Il y a 13 jours"
  },
  {
    "id": 374,
    "titre": "Les cinq astuces que j'aurais aimé connaître quand j'ai commencé Minecraft",
    "categorie": "Jeux vidéo",
    "createur": "PixelMax",
    "duree": "19:24",
    "vues": "1,3 M vues",
    "publication": "Il y a 3 mois"
  },
  {
    "id": 375,
    "titre": "Pourquoi cette musique de jeu donne autant de nostalgie ?",
    "categorie": "Jeux vidéo",
    "createur": "Retro Fun",
    "duree": "10:18",
    "vues": "517 k vues",
    "publication": "Il y a 2 semaines"
  },
  {
    "id": 376,
    "titre": "Le défi le plus drôle qu'un abonné m'ait proposé",
    "categorie": "Jeux vidéo",
    "createur": "GameZone Québec",
    "duree": "11:36",
    "vues": "688 k vues",
    "publication": "Il y a 6 jours"
  },
  {
    "id": 377,
    "titre": "Je visite une map construite entièrement par des élèves",
    "categorie": "Jeux vidéo",
    "createur": "PlayLab",
    "duree": "15:21",
    "vues": "295 k vues",
    "publication": "Il y a 1 semaine"
  },
  {
    "id": 378,
    "titre": "Cette partie semblait perdue... jusqu'à la dernière seconde",
    "categorie": "Jeux vidéo",
    "createur": "Turbo Gaming",
    "duree": "8:57",
    "vues": "854 k vues",
    "publication": "Il y a 11 jours"
  },
  {
    "id": 379,
    "titre": "Je découvre un jeu dont personne ne parle... et il mérite vraiment d'être connu",
    "categorie": "Jeux vidéo",
    "createur": "Retro Fun",
    "duree": "16:42",
    "vues": "208 k vues",
    "publication": "Il y a 4 semaines"
  },
  {
    "id": 380,
    "titre": "Le bug le plus amusant que j'aie rencontré cette année 😂",
    "categorie": "Jeux vidéo",
    "createur": "Sam Gaming",
    "duree": "6:51",
    "vues": "1,5 M vues",
    "publication": "Il y a 9 jours"
  },
  {
    "id": 381,
    "titre": "Je laisse le hasard choisir mon prochain jeu pendant tout un week-end",
    "categorie": "Jeux vidéo",
    "createur": "Les Défis de Léo",
    "duree": "18:08",
    "vues": "573 k vues",
    "publication": "Il y a 2 semaines"
  },
  {
    "id": 382,
    "titre": "POV : tu trouves enfin des diamants... puis un Creeper apparaît 💥",
    "categorie": "Jeux vidéo",
    "createur": "PixelMax",
    "duree": "0:34",
    "vues": "3,2 M vues",
    "publication": "Il y a 4 jours"
  },
  {
    "id": 383,
    "titre": "Je n'avais jamais osé ouvrir cette porte dans Minecraft",
    "categorie": "Jeux vidéo",
    "createur": "Cube Aventure",
    "duree": "16:27",
    "vues": "687 k vues",
    "publication": "Il y a 2 semaines"
  },
  {
    "id": 384,
    "titre": "On échange nos manettes en pleine partie... mauvaise idée !",
    "categorie": "Jeux vidéo",
    "createur": "Les Défis de Léo",
    "duree": "12:03",
    "vues": "918 k vues",
    "publication": "Il y a 5 jours"
  },
  {
    "id": 385,
    "titre": "Le mystère de cette maison abandonnée dans Roblox enfin résolu",
    "categorie": "Jeux vidéo",
    "createur": "NovaPlay",
    "duree": "14:51",
    "vues": "496 k vues",
    "publication": "Il y a 1 semaine"
  },
  {
    "id": 386,
    "titre": "J'essaie le combo préféré des champions sur Rocket League",
    "categorie": "Jeux vidéo",
    "createur": "Turbo Gaming",
    "duree": "10:22",
    "vues": "732 k vues",
    "publication": "Il y a 11 jours"
  },
  {
    "id": 387,
    "titre": "Cette île Minecraft cache un détail que presque personne ne remarque",
    "categorie": "Jeux vidéo",
    "createur": "PixelMax",
    "duree": "8:45",
    "vues": "1,8 M vues",
    "publication": "Il y a 3 semaines"
  },
  {
    "id": 388,
    "titre": "Peut-on terminer un circuit de Mario Kart... en roulant à reculons ?",
    "categorie": "Jeux vidéo",
    "createur": "GameZone Québec",
    "duree": "9:54",
    "vues": "1,1 M vues",
    "publication": "Il y a 8 jours"
  },
  {
    "id": 389,
    "titre": "Mon défi Pokémon : utiliser seulement le premier compagnon rencontré",
    "categorie": "Jeux vidéo",
    "createur": "PlayLab",
    "duree": "18:17",
    "vues": "364 k vues",
    "publication": "Il y a 12 jours"
  },
  {
    "id": 390,
    "titre": "Le secret le mieux gardé de Zelda n'était pas celui que je croyais",
    "categorie": "Jeux vidéo",
    "createur": "Cube Aventure",
    "duree": "15:48",
    "vues": "548 k vues",
    "publication": "Il y a 1 mois"
  },
  {
    "id": 391,
    "titre": "J'ai demandé à mes parents de choisir mon personnage dans Brawl Stars",
    "categorie": "Jeux vidéo",
    "createur": "Sam Gaming",
    "duree": "11:11",
    "vues": "624 k vues",
    "publication": "Il y a 6 jours"
  },
  {
    "id": 392,
    "titre": "Cette cachette Fortnite fonctionne encore... mais plus pour longtemps",
    "categorie": "Jeux vidéo",
    "createur": "Turbo Gaming",
    "duree": "7:43",
    "vues": "2,3 M vues",
    "publication": "Il y a 2 jours"
  },
  {
    "id": 393,
    "titre": "Pourquoi tout le monde construit cette ferme dans Minecraft ?",
    "categorie": "Jeux vidéo",
    "createur": "PixelMax",
    "duree": "13:29",
    "vues": "905 k vues",
    "publication": "Il y a 9 jours"
  },
  {
    "id": 394,
    "titre": "Je visite la carte la plus étrange jamais créée sur Roblox",
    "categorie": "Jeux vidéo",
    "createur": "GameZone Québec",
    "duree": "17:06",
    "vues": "452 k vues",
    "publication": "Il y a 2 semaines"
  },
  {
    "id": 395,
    "titre": "Le saut le plus satisfaisant de Geometry Dash 🎮",
    "categorie": "Jeux vidéo",
    "createur": "NovaPlay",
    "duree": "0:28",
    "vues": "2,7 M vues",
    "publication": "Il y a 3 jours"
  },
  {
    "id": 396,
    "titre": "Je croyais connaître Terraria... jusqu'à cette découverte",
    "categorie": "Jeux vidéo",
    "createur": "Cube Aventure",
    "duree": "16:54",
    "vues": "287 k vues",
    "publication": "Il y a 1 semaine"
  },
  {
    "id": 397,
    "titre": "On organise un cache-cache géant dans Among Us",
    "categorie": "Jeux vidéo",
    "createur": "Les Défis de Léo",
    "duree": "13:41",
    "vues": "811 k vues",
    "publication": "Il y a 2 semaines"
  },
  {
    "id": 398,
    "titre": "Ce joueur inconnu m'a appris une technique que je n'oublierai jamais",
    "categorie": "Jeux vidéo",
    "createur": "PlayLab",
    "duree": "9:37",
    "vues": "339 k vues",
    "publication": "Il y a 5 semaines"
  },
  {
    "id": 399,
    "titre": "Mon inventaire est rempli d'objets inutiles... Enfin  c'est ce que je pensais",
    "categorie": "Jeux vidéo",
    "createur": "PixelMax",
    "duree": "15:16",
    "vues": "719 k vues",
    "publication": "Il y a 4 jours"
  },
  {
    "id": 400,
    "titre": "J'ai recréé mon salon dans Animal Crossing avec seulement ce que j'avais déjà",
    "categorie": "Jeux vidéo",
    "createur": "NovaPlay",
    "duree": "18:02",
    "vues": "231 k vues",
    "publication": "Il y a 10 jours"
  },
  {
    "id": 401,
    "titre": "Pourquoi cette vieille console fait encore autant parler d'elle ?",
    "categorie": "Jeux vidéo",
    "createur": "Retro Fun",
    "duree": "12:48",
    "vues": "503 k vues",
    "publication": "Il y a 3 semaines"
  },
  {
    "id": 402,
    "titre": "Le boss m'a battu 17 fois... la 18e était la bonne",
    "categorie": "Jeux vidéo",
    "createur": "Sam Gaming",
    "duree": "14:58",
    "vues": "468 k vues",
    "publication": "Il y a 13 jours"
  },
  {
    "id": 403,
    "titre": "Je joue avec les réglages les plus étranges trouvés sur Internet",
    "categorie": "Jeux vidéo",
    "createur": "PlayLab",
    "duree": "10:43",
    "vues": "397 k vues",
    "publication": "Il y a 1 semaine"
  },
  {
    "id": 404,
    "titre": "Les développeurs avaient caché ce clin d'œil depuis des années",
    "categorie": "Jeux vidéo",
    "createur": "NovaPlay",
    "duree": "8:21",
    "vues": "1,5 M vues",
    "publication": "Il y a 2 mois"
  },
  {
    "id": 405,
    "titre": "Mon plus beau sauvetage dans Rocket League 🚗⚽",
    "categorie": "Jeux vidéo",
    "createur": "Turbo Gaming",
    "duree": "0:41",
    "vues": "3,9 M vues",
    "publication": "Il y a 6 jours"
  },
  {
    "id": 406,
    "titre": "J'ai enfin compris pourquoi tout le monde adore ce jeu indépendant",
    "categorie": "Jeux vidéo",
    "createur": "Cube Aventure",
    "duree": "19:12",
    "vues": "276 k vues",
    "publication": "Il y a 4 semaines"
  },
  {
    "id": 407,
    "titre": "POV : ton équipe marque à la dernière seconde ⏱️",
    "categorie": "Sport",
    "createur": "Zone Sport",
    "duree": "00:07",
    "vues": "4,2 M vues",
    "publication": "Il y a 2 jours"
  },
  {
    "id": 408,
    "titre": "Mon premier match sous la pluie... et je veux recommencer",
    "categorie": "Sport",
    "createur": "Objectif Sport",
    "duree": "03:01",
    "vues": "526 k vues",
    "publication": "Il y a 12 jours"
  },
  {
    "id": 409,
    "titre": "Le défi du parcours d'obstacles... personne n'a terminé du premier coup",
    "categorie": "Sport",
    "createur": "Défi Max",
    "duree": "02:51",
    "vues": "874 k vues",
    "publication": "Il y a 8 jours"
  },
  {
    "id": 410,
    "titre": "J'ai demandé à mon entraîneur son meilleur conseil... sa réponse m'a surpris",
    "categorie": "Sport",
    "createur": "Coach Alex",
    "duree": "01:49",
    "vues": "1,3 M vues",
    "publication": "Il y a 3 semaines"
  },
  {
    "id": 411,
    "titre": "Le vélo électrique est-il vraiment plus amusant qu'un vélo classique ?",
    "categorie": "Sport",
    "createur": "Altitude+",
    "duree": "03:31",
    "vues": "452 k vues",
    "publication": "Il y a 4 semaines"
  },
  {
    "id": 412,
    "titre": "Je compare les échauffements de trois sports complètement différents",
    "categorie": "Sport",
    "createur": "SportLab",
    "duree": "02:40",
    "vues": "566 k vues",
    "publication": "Il y a 11 jours"
  },
  {
    "id": 413,
    "titre": "Pourquoi certains joueurs restent-ils toujours aussi calmes sous pression ?",
    "categorie": "Sport",
    "createur": "Coach Alex",
    "duree": "02:10",
    "vues": "813 k vues",
    "publication": "Il y a 2 mois"
  },
  {
    "id": 414,
    "titre": "Une journée à découvrir le baseball avec une vraie équipe",
    "categorie": "Sport",
    "createur": "Objectif Sport",
    "duree": "03:40",
    "vues": "389 k vues",
    "publication": "Il y a 10 jours"
  },
  {
    "id": 415,
    "titre": "Le défi des tirs les plus improbables... combien entreront ?",
    "categorie": "Sport",
    "createur": "Défi Max",
    "duree": "02:29",
    "vues": "947 k vues",
    "publication": "Il y a 1 semaine"
  },
  {
    "id": 416,
    "titre": "J'ai essayé un entraînement inspiré des astronautes",
    "categorie": "Sport",
    "createur": "SportLab",
    "duree": "03:09",
    "vues": "691 k vues",
    "publication": "Il y a 9 jours"
  },
  {
    "id": 417,
    "titre": "Le plus beau sentier de randonnée que j'ai exploré cette année",
    "categorie": "Sport",
    "createur": "Altitude+",
    "duree": "04:00",
    "vues": "274 k vues",
    "publication": "Il y a 2 semaines"
  },
  {
    "id": 418,
    "titre": "Pourquoi les sportifs ferment-ils parfois les yeux avant de commencer ?",
    "categorie": "Sport",
    "createur": "Zone Sport",
    "duree": "01:40",
    "vues": "485 k vues",
    "publication": "Il y a 3 semaines"
  },
  {
    "id": 419,
    "titre": "J'organise un mini tournoi dans mon quartier",
    "categorie": "Sport",
    "createur": "Objectif Sport",
    "duree": "02:47",
    "vues": "604 k vues",
    "publication": "Il y a 6 jours"
  },
  {
    "id": 420,
    "titre": "Le jour où j'ai enfin réussi mon premier salto arrière",
    "categorie": "Sport",
    "createur": "Altitude+",
    "duree": "03:46",
    "vues": "738 k vues",
    "publication": "Il y a 13 jours"
  },
  {
    "id": 421,
    "titre": "Je teste si les gadgets d'entraînement les plus populaires valent vraiment le coup",
    "categorie": "Sport",
    "createur": "SportLab",
    "duree": "03:01",
    "vues": "824 k vues",
    "publication": "Il y a 5 semaines"
  },
  {
    "id": 422,
    "titre": "POV : tu bats enfin ton record personnel 🏅",
    "categorie": "Sport",
    "createur": "Coach Alex",
    "duree": "00:06",
    "vues": "3,6 M vues",
    "publication": "Il y a 4 jours"
  },
  {
    "id": 423,
    "titre": "Cette stratégie nous a permis de renverser le match",
    "categorie": "Sport",
    "createur": "Zone Sport",
    "duree": "02:34",
    "vues": "659 k vues",
    "publication": "Il y a 1 semaine"
  },
  {
    "id": 424,
    "titre": "Mon plus gros fou rire pendant un entraînement 😂",
    "categorie": "Sport",
    "createur": "Défi Max",
    "duree": "01:54",
    "vues": "1,7 M vues",
    "publication": "Il y a 2 semaines"
  },
  {
    "id": 425,
    "titre": "Je découvre pourquoi autant de gens deviennent accros à l'escalade",
    "categorie": "Sport",
    "createur": "Altitude+",
    "duree": "03:30",
    "vues": "318 k vues",
    "publication": "Il y a 8 jours"
  },
  {
    "id": 426,
    "titre": "Je n'avais jamais joué au pickleball... maintenant je comprends pourquoi tout le monde en parle",
    "categorie": "Sport",
    "createur": "Objectif Sport",
    "duree": "03:16",
    "vues": "512 k vues",
    "publication": "Il y a 1 semaine"
  },
  {
    "id": 427,
    "titre": "Le défi des 50 tirs : combien finiront vraiment dans le filet ?",
    "categorie": "Sport",
    "createur": "Défi Max",
    "duree": "02:21",
    "vues": "846 k vues",
    "publication": "Il y a 8 jours"
  },
  {
    "id": 428,
    "titre": "Pourquoi les arbitres utilisent-ils vraiment le carton jaune ?",
    "categorie": "Sport",
    "createur": "Zone Sport",
    "duree": "02:02",
    "vues": "391 k vues",
    "publication": "Il y a 2 semaines"
  },
  {
    "id": 429,
    "titre": "J'apprends à jongler avec un ballon en suivant seulement Internet",
    "categorie": "Sport",
    "createur": "Coach Alex",
    "duree": "02:35",
    "vues": "624 k vues",
    "publication": "Il y a 5 jours"
  },
  {
    "id": 430,
    "titre": "Le plus beau parcours de vélo que j'ai découvert cet été",
    "categorie": "Sport",
    "createur": "Altitude+",
    "duree": "03:44",
    "vues": "283 k vues",
    "publication": "Il y a 3 semaines"
  },
  {
    "id": 431,
    "titre": "Je teste les exercices de coordination d'une équipe professionnelle",
    "categorie": "Sport",
    "createur": "SportLab",
    "duree": "03:02",
    "vues": "717 k vues",
    "publication": "Il y a 2 mois"
  },
  {
    "id": 432,
    "titre": "Cette séance d'entraînement ne dure que 10 minutes... mais elle est redoutable",
    "categorie": "Sport",
    "createur": "Coach Alex",
    "duree": "02:06",
    "vues": "1,2 M vues",
    "publication": "Il y a 6 jours"
  },
  {
    "id": 433,
    "titre": "POV : tu arrêtes enfin un tir impossible 🥅",
    "categorie": "Sport",
    "createur": "Zone Sport",
    "duree": "00:05",
    "vues": "3,4 M vues",
    "publication": "Il y a 3 jours"
  },
  {
    "id": 434,
    "titre": "Mon ami choisit tous les défis sportifs de la journée",
    "categorie": "Sport",
    "createur": "Défi Max",
    "duree": "02:54",
    "vues": "548 k vues",
    "publication": "Il y a 10 jours"
  },
  {
    "id": 435,
    "titre": "Je pensais que le badminton était facile... j'avais complètement tort",
    "categorie": "Sport",
    "createur": "Objectif Sport",
    "duree": "03:29",
    "vues": "438 k vues",
    "publication": "Il y a 11 jours"
  },
  {
    "id": 436,
    "titre": "Les cinq plus belles célébrations que nous avons réussies cette saison",
    "categorie": "Sport",
    "createur": "Zone Sport",
    "duree": "01:51",
    "vues": "906 k vues",
    "publication": "Il y a 1 mois"
  },
  {
    "id": 437,
    "titre": "J'essaie le golf pour la première fois... où est passée la balle ?",
    "categorie": "Sport",
    "createur": "Altitude+",
    "duree": "03:13",
    "vues": "359 k vues",
    "publication": "Il y a 2 semaines"
  },
  {
    "id": 438,
    "titre": "Comment réussir un meilleur départ en course sans courir plus vite",
    "categorie": "Sport",
    "createur": "Coach Alex",
    "duree": "02:28",
    "vues": "775 k vues",
    "publication": "Il y a 9 jours"
  },
  {
    "id": 439,
    "titre": "On joue tout un match avec des règles complètement inventées",
    "categorie": "Sport",
    "createur": "Défi Max",
    "duree": "02:57",
    "vues": "1,5 M vues",
    "publication": "Il y a 4 jours"
  },
  {
    "id": 440,
    "titre": "Le plus beau terrain de basketball que j'ai visité",
    "categorie": "Sport",
    "createur": "Objectif Sport",
    "duree": "02:42",
    "vues": "304 k vues",
    "publication": "Il y a 2 semaines"
  },
  {
    "id": 441,
    "titre": "J'ai demandé à une IA de préparer mon entraînement sportif",
    "categorie": "Sport",
    "createur": "SportLab",
    "duree": "03:47",
    "vues": "632 k vues",
    "publication": "Il y a 1 semaine"
  },
  {
    "id": 442,
    "titre": "Pourquoi les nageurs portent-ils parfois deux bonnets ?",
    "categorie": "Sport",
    "createur": "Zone Sport",
    "duree": "01:36",
    "vues": "427 k vues",
    "publication": "Il y a 3 semaines"
  },
  {
    "id": 443,
    "titre": "Le défi des passes parfaites... personne ne s'attendait à cette fin",
    "categorie": "Sport",
    "createur": "Défi Max",
    "duree": "02:13",
    "vues": "689 k vues",
    "publication": "Il y a 12 jours"
  },
  {
    "id": 444,
    "titre": "Je découvre le tir à l'arc et je vise le centre dès le premier essai",
    "categorie": "Sport",
    "createur": "Altitude+",
    "duree": "03:34",
    "vues": "266 k vues",
    "publication": "Il y a 6 jours"
  },
  {
    "id": 445,
    "titre": "Les erreurs que je faisais chaque fois avant un match",
    "categorie": "Sport",
    "createur": "Coach Alex",
    "duree": "01:58",
    "vues": "958 k vues",
    "publication": "Il y a 2 mois"
  },
  {
    "id": 446,
    "titre": "Cette compétition amicale est devenue beaucoup plus sérieuse que prévu",
    "categorie": "Sport",
    "createur": "Zone Sport",
    "duree": "02:52",
    "vues": "581 k vues",
    "publication": "Il y a 8 jours"
  },
  {
    "id": 447,
    "titre": "Mon plus beau souvenir de tournoi... et ce n'est même pas une victoire",
    "categorie": "Sport",
    "createur": "Objectif Sport",
    "duree": "03:32",
    "vues": "342 k vues",
    "publication": "Il y a 5 semaines"
  },
  {
    "id": 448,
    "titre": "Je compare un ballon à 15 $ avec un ballon professionnel",
    "categorie": "Sport",
    "createur": "SportLab",
    "duree": "02:34",
    "vues": "843 k vues",
    "publication": "Il y a 1 semaine"
  },
  {
    "id": 449,
    "titre": "Le défi de l'équilibre sur slackline... combien de temps vais-je tenir ?",
    "categorie": "Sport",
    "createur": "Altitude+",
    "duree": "02:20",
    "vues": "493 k vues",
    "publication": "Il y a 13 jours"
  },
  {
    "id": 450,
    "titre": "Je joue un match complet... sans jamais parler à mon équipe",
    "categorie": "Sport",
    "createur": "Défi Max",
    "duree": "02:28",
    "vues": "584 k vues",
    "publication": "Il y a 9 jours"
  },
  {
    "id": 451,
    "titre": "Ce lancer franc semblait impossible... jusqu'à aujourd'hui",
    "categorie": "Sport",
    "createur": "Coach Alex",
    "duree": "01:49",
    "vues": "927 k vues",
    "publication": "Il y a 2 semaines"
  },
  {
    "id": 452,
    "titre": "J'ai essayé le biathlon pour la toute première fois",
    "categorie": "Sport",
    "createur": "Objectif Sport",
    "duree": "03:40",
    "vues": "362 k vues",
    "publication": "Il y a 1 semaine"
  },
  {
    "id": 453,
    "titre": "Pourquoi les gardiens de hockey tapent-ils leurs poteaux ?",
    "categorie": "Sport",
    "createur": "Zone Sport",
    "duree": "01:40",
    "vues": "418 k vues",
    "publication": "Il y a 3 semaines"
  },
  {
    "id": 454,
    "titre": "Je relève le défi des 1 000 passes avec mes amis",
    "categorie": "Sport",
    "createur": "Défi Max",
    "duree": "03:01",
    "vues": "713 k vues",
    "publication": "Il y a 12 jours"
  },
  {
    "id": 455,
    "titre": "Le sport qui brûle le plus de calories... le résultat m'a surpris",
    "categorie": "Sport",
    "createur": "SportLab",
    "duree": "02:52",
    "vues": "1,3 M vues",
    "publication": "Il y a 1 mois"
  },
  {
    "id": 456,
    "titre": "J'ai appris à faire un salto... avec un vrai entraîneur",
    "categorie": "Sport",
    "createur": "Altitude+",
    "duree": "03:56",
    "vues": "806 k vues",
    "publication": "Il y a 5 jours"
  },
  {
    "id": 457,
    "titre": "Cette technique m'a enfin permis de réussir un service au volleyball",
    "categorie": "Sport",
    "createur": "Coach Alex",
    "duree": "02:13",
    "vues": "276 k vues",
    "publication": "Il y a 2 semaines"
  },
  {
    "id": 458,
    "titre": "Mon premier entraînement de boxe a été beaucoup plus intense que prévu",
    "categorie": "Sport",
    "createur": "Objectif Sport",
    "duree": "03:11",
    "vues": "539 k vues",
    "publication": "Il y a 8 jours"
  },
  {
    "id": 459,
    "titre": "POV : tu marques le point gagnant devant toute l'école 🏐",
    "categorie": "Sport",
    "createur": "Zone Sport",
    "duree": "00:06",
    "vues": "2,8 M vues",
    "publication": "Il y a 4 jours"
  },
  {
    "id": 460,
    "titre": "On échange nos sports préférés pendant une journée complète",
    "categorie": "Sport",
    "createur": "Défi Max",
    "duree": "03:21",
    "vues": "447 k vues",
    "publication": "Il y a 10 jours"
  },
  {
    "id": 461,
    "titre": "Le plus beau plongeon que j'aie réussi cet été",
    "categorie": "Sport",
    "createur": "Altitude+",
    "duree": "02:02",
    "vues": "694 k vues",
    "publication": "Il y a 3 semaines"
  },
  {
    "id": 462,
    "titre": "Pourquoi les professionnels s'échauffent-ils toujours de cette façon ?",
    "categorie": "Sport",
    "createur": "Coach Alex",
    "duree": "02:05",
    "vues": "811 k vues",
    "publication": "Il y a 6 jours"
  },
  {
    "id": 463,
    "titre": "Je découvre un terrain caché en pleine forêt",
    "categorie": "Sport",
    "createur": "Objectif Sport",
    "duree": "03:49",
    "vues": "225 k vues",
    "publication": "Il y a 2 semaines"
  },
  {
    "id": 464,
    "titre": "Le défi du ballon géant... c'était beaucoup plus drôle que prévu !",
    "categorie": "Sport",
    "createur": "Défi Max",
    "duree": "02:40",
    "vues": "1,6 M vues",
    "publication": "Il y a 1 semaine"
  },
  {
    "id": 465,
    "titre": "J'ai testé les chaussures les moins chères contre les plus populaires",
    "categorie": "Sport",
    "createur": "SportLab",
    "duree": "02:58",
    "vues": "591 k vues",
    "publication": "Il y a 2 mois"
  },
  {
    "id": 466,
    "titre": "Cette remontée restera la plus incroyable de notre saison",
    "categorie": "Sport",
    "createur": "Zone Sport",
    "duree": "02:50",
    "vues": "482 k vues",
    "publication": "Il y a 9 jours"
  },
  {
    "id": 467,
    "titre": "Peut-on vraiment améliorer son équilibre en 7 jours ?",
    "categorie": "Sport",
    "createur": "Coach Alex",
    "duree": "02:23",
    "vues": "367 k vues",
    "publication": "Il y a 11 jours"
  },
  {
    "id": 468,
    "titre": "Je participe à une compétition sans connaître les règles... ou presque",
    "categorie": "Sport",
    "createur": "Objectif Sport",
    "duree": "03:42",
    "vues": "304 k vues",
    "publication": "Il y a 4 semaines"
  },
  {
    "id": 469,
    "titre": "Les cinq erreurs que j'aurais aimé éviter en skateboard",
    "categorie": "Sport",
    "createur": "Altitude+",
    "duree": "02:16",
    "vues": "638 k vues",
    "publication": "Il y a 13 jours"
  },
  {
    "id": 470,
    "titre": "J'affronte une équipe composée uniquement d'entraîneurs",
    "categorie": "Sport",
    "createur": "Zone Sport",
    "duree": "03:09",
    "vues": "774 k vues",
    "publication": "Il y a 5 jours"
  },
  {
    "id": 471,
    "titre": "Mon petit frère devient mon coach pendant 24 heures",
    "categorie": "Sport",
    "createur": "Défi Max",
    "duree": "01:56",
    "vues": "988 k vues",
    "publication": "Il y a 2 semaines"
  },
  {
    "id": 472,
    "titre": "Le défi des tirs impossibles... combien vais-je en réussir ?",
    "categorie": "Sport",
    "createur": "SportLab",
    "duree": "02:37",
    "vues": "853 k vues",
    "publication": "Il y a 3 jours"
  },
  {
    "id": 473,
    "titre": "Je découvre pourquoi les sportifs adorent autant l'escalade",
    "categorie": "Sport",
    "createur": "Altitude+",
    "duree": "03:29",
    "vues": "289 k vues",
    "publication": "Il y a 1 semaine"
  },
  {
    "id": 474,
    "titre": "Le meilleur conseil sportif que j'ai reçu cette année",
    "categorie": "Sport",
    "createur": "Coach Alex",
    "duree": "01:45",
    "vues": "1,1 M vues",
    "publication": "Il y a 3 semaines"
  },
  {
    "id": 475,
    "titre": "J'ai essayé le soccer avec les yeux bandés... enfin presque !",
    "categorie": "Sport",
    "createur": "Zone Sport",
    "duree": "02:39",
    "vues": "684 k vues",
    "publication": "Il y a 5 jours"
  },
  {
    "id": 476,
    "titre": "Le panier le plus chanceux que j'aie marqué de toute ma vie",
    "categorie": "Sport",
    "createur": "Défi Max",
    "duree": "01:52",
    "vues": "1,2 M vues",
    "publication": "Il y a 2 semaines"
  },
  {
    "id": 477,
    "titre": "Peut-on apprendre un nouveau sport en une seule journée ?",
    "categorie": "Sport",
    "createur": "SportLab",
    "duree": "03:48",
    "vues": "437 k vues",
    "publication": "Il y a 1 semaine"
  },
  {
    "id": 478,
    "titre": "Mon grand-père m'a lancé un défi de hockey que je n'oublierai jamais",
    "categorie": "Sport",
    "createur": "Zone Sport",
    "duree": "03:02",
    "vues": "592 k vues",
    "publication": "Il y a 3 semaines"
  },
  {
    "id": 479,
    "titre": "J'ai couru mon premier 5 km... et je ne m'attendais pas à ça",
    "categorie": "Sport",
    "createur": "Objectif Sport",
    "duree": "03:30",
    "vues": "311 k vues",
    "publication": "Il y a 6 jours"
  },
  {
    "id": 480,
    "titre": "Pourquoi tous les débutants font cette erreur au basketball ?",
    "categorie": "Sport",
    "createur": "Coach Alex",
    "duree": "02:09",
    "vues": "908 k vues",
    "publication": "Il y a 2 mois"
  },
  {
    "id": 481,
    "titre": "Le match le plus drôle qu'on ait joué entre amis 😂",
    "categorie": "Sport",
    "createur": "Défi Max",
    "duree": "02:01",
    "vues": "1,8 M vues",
    "publication": "Il y a 10 jours"
  },
  {
    "id": 482,
    "titre": "Je teste les exercices d'entraînement d'un joueur professionnel",
    "categorie": "Sport",
    "createur": "SportLab",
    "duree": "03:16",
    "vues": "526 k vues",
    "publication": "Il y a 2 semaines"
  },
  {
    "id": 483,
    "titre": "Cette règle du volleyball surprend toujours les nouveaux joueurs",
    "categorie": "Sport",
    "createur": "Coach Alex",
    "duree": "01:39",
    "vues": "264 k vues",
    "publication": "Il y a 8 jours"
  },
  {
    "id": 484,
    "titre": "POV : tu réussis enfin ton premier dunk 🏀",
    "categorie": "Sport",
    "createur": "Zone Sport",
    "duree": "00:06",
    "vues": "3,7 M vues",
    "publication": "Il y a 4 jours"
  },
  {
    "id": 485,
    "titre": "J'ai affronté mon professeur au tennis... le résultat est inattendu",
    "categorie": "Sport",
    "createur": "Défi Max",
    "duree": "02:48",
    "vues": "761 k vues",
    "publication": "Il y a 1 semaine"
  },
  {
    "id": 486,
    "titre": "Pourquoi le surf est beaucoup plus difficile qu'il n'y paraît",
    "categorie": "Sport",
    "createur": "Objectif Sport",
    "duree": "03:33",
    "vues": "419 k vues",
    "publication": "Il y a 3 semaines"
  },
  {
    "id": 487,
    "titre": "Le défi des 100 jongles au soccer... mission accomplie ?",
    "categorie": "Sport",
    "createur": "SportLab",
    "duree": "02:25",
    "vues": "602 k vues",
    "publication": "Il y a 12 jours"
  },
  {
    "id": 488,
    "titre": "J'ai découvert un sport dont je n'avais jamais entendu parler",
    "categorie": "Sport",
    "createur": "Objectif Sport",
    "duree": "04:01",
    "vues": "278 k vues",
    "publication": "Il y a 9 jours"
  },
  {
    "id": 489,
    "titre": "Mon premier cours d'escalade a complètement changé ma façon de voir ce sport",
    "categorie": "Sport",
    "createur": "Altitude+",
    "duree": "03:32",
    "vues": "344 k vues",
    "publication": "Il y a 2 semaines"
  },
  {
    "id": 490,
    "titre": "Je pensais être rapide... jusqu'à cette course",
    "categorie": "Sport",
    "createur": "Zone Sport",
    "duree": "01:56",
    "vues": "489 k vues",
    "publication": "Il y a 5 jours"
  },
  {
    "id": 491,
    "titre": "Le plus beau but de notre tournoi scolaire",
    "categorie": "Sport",
    "createur": "Défi Max",
    "duree": "01:25",
    "vues": "1,4 M vues",
    "publication": "Il y a 1 mois"
  },
  {
    "id": 492,
    "titre": "Comment améliorer ton tir sans t'entraîner plus longtemps",
    "categorie": "Sport",
    "createur": "Coach Alex",
    "duree": "02:35",
    "vues": "836 k vues",
    "publication": "Il y a 2 semaines"
  },
  {
    "id": 493,
    "titre": "Une journée complète dans la peau d'un gardien de but",
    "categorie": "Sport",
    "createur": "Objectif Sport",
    "duree": "03:55",
    "vues": "391 k vues",
    "publication": "Il y a 11 jours"
  },
  {
    "id": 494,
    "titre": "Je laisse une roue choisir mon sport de la journée",
    "categorie": "Sport",
    "createur": "SportLab",
    "duree": "03:06",
    "vues": "547 k vues",
    "publication": "Il y a 4 jours"
  },
  {
    "id": 495,
    "titre": "Le skateboard semblait facile... jusqu'à ma première descente",
    "categorie": "Sport",
    "createur": "Altitude+",
    "duree": "02:07",
    "vues": "613 k vues",
    "publication": "Il y a 13 jours"
  },
  {
    "id": 496,
    "titre": "Le secret des athlètes pour rester motivés toute l'année",
    "categorie": "Sport",
    "createur": "Coach Alex",
    "duree": "01:48",
    "vues": "952 k vues",
    "publication": "Il y a 1 mois"
  },
  {
    "id": 497,
    "titre": "Mon équipe perdait 5 à 0... puis tout a changé",
    "categorie": "Sport",
    "createur": "Zone Sport",
    "duree": "03:13",
    "vues": "722 k vues",
    "publication": "Il y a 6 jours"
  },
  {
    "id": 498,
    "titre": "Je compare cinq ballons de basketball sans regarder leur marque",
    "categorie": "Sport",
    "createur": "SportLab",
    "duree": "02:28",
    "vues": "308 k vues",
    "publication": "Il y a 3 semaines"
  },
  {
    "id": 499,
    "titre": "Le défi sportif le plus amusant à essayer avec tes amis",
    "categorie": "Sport",
    "createur": "Défi Max",
    "duree": "00:33",
    "vues": "1,1 M vues",
    "publication": "Il y a 8 jours"
  }
];
