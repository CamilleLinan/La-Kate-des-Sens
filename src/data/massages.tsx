import type { Massage } from "models/Massage";

import carpediem from "./images/1carpediem.jpg";
import californien from "./images/2californien.jpg";
import visage from "./images/4visage.jpg";
import pied from "./images/5pied.jpg";
import kansu from "./images/6kansu.jpg";
import senior from "./images/7senior.jpeg";
import dos from "./images/3dos.jpg";
// import perso from "./images/8perso.jpg";

export const massages: Massage[] = [
  {
    id: 1,
    title: "Massage « Carpe Diem »",
    description:
      "Enveloppant, qui invite au lâcher-prise et à la reconnexion avec soi-même.",
    descriptionLong: [
      "Une expérience profonde de relaxation, idéale pour ceux qui souhaitent se détendre complètement et se ressourcer. Sa douceur et son enveloppement favorisent un relâchement total, parfait pour échapper au stress du quotidien et retrouver une paix intérieure.",
    ],
    bonus:
      "Comprend un rituel avec un bain de pieds délassant, au début du massage. Sans oublier le Bol Kansu, un beau bijou de l’Ayurveda, à la fin du massage.",
    duration: "1h30",
    price: 70,
    image: carpediem,
  },
  {
    id: 2,
    title: "Massage « L'Éveil des Sens »",
    description: "Fluide et relaxant, qui apaise autant le corps que l’esprit.",
    descriptionLong: [
      "Avec son surnom évocateur de « toucher du cœur », il combine des techniques apaisantes et relaxantes. Cela permet non seulement de détendre le corps, mais aussi d'apaiser l'esprit, ce qui en fait un choix excellent pour ceux qui souhaitent une expérience de bien-être complète à l'écoute de vos sens.",
    ],
    duration: "1h",
    price: 60,
    image: californien,
  },
  {
    id: 3,
    title: "Massage « Sphère Essence Ciel »",
    description:
      "Un massage tout en douceur du décolleté, du visage et du crâne.",
    descriptionLong: [
      "Ce massage favorise une profonde relaxation en dénouant les tensions accumulées dans le visage, la nuque et la tête. Il calme l’esprit, améliore la qualité du sommeil et procure une agréable sensation de légèreté. Plongez dans un océan de sérénité, là où le bien être règne.",
    ],
    duration: "40 mn",
    price: 40,
    image: visage,
  },
  {
    id: 4,
    title: "Massage du Dos",
    description: "Ciblé pour libérer les tensions accumulées dans le dos.",
    descriptionLong: [
      "Spécifiquement conçu pour dénouer les nœuds et apaiser les contractures, ce massage soulage les zones les plus sollicitées au quotidien. Idéal pour retrouver confort et légèreté.",
    ],
    duration: "40 mn",
    price: 40,
    image: dos,
  },
  {
    id: 5,
    title: "Massage Thaï du Pied & Jambes",
    description:
      "Stimulant, qui rééquilibre l’énergie vitale par la réflexologie plantaire.",
    descriptionLong: [
      "Agissant comme un dialogue entre vos pieds et le reste de votre corps et en stimulant des points spécifiques de la voûte plantaire, ce massage aide à rééquilibrer le Chi, l’énergie vitale, et relance les processus naturels d’harmonisation du corps.",
      "Il est particulièrement efficace pour réduire le stress et procurer une détente profonde. Ce massage thaïlandais ne se limite pas aux pieds mais s’applique également à toute la jambe. Traditionnellement, ce soin peut être enrichi de pressions douces sur les mains, le cou et le cuir chevelu, pour renforcer l’harmonie du corps.",
    ],
    duration: "45 mn",
    price: 45,
    image: pied,
  },
  {
    id: 6,
    title: "Massage au Bol Kansu",
    description:
      "Un rituel Ayurvédique apaisant qui harmonise corps et esprit.",
    descriptionLong: [
      "Ce massage du pied avec le bol Kansu est très connu dans l’Ayurveda. Ce massage touche les points réflexes du pied en libérant les énergies et leur permettre de circuler dans le corps. Il favorise également le sommeil, et apporte une relaxation profonde pendant le massage.",
      "Le bol Kansu est fabriqué à partir d’un alliage de 5 métaux aux vertus complémentaires : l’or, le zinc, le bronze, le cuivre, l’argent et l’étain. Selon l'ayurvéda, le cuivre absorbe l'excès de chaleur, le zinc favorise le métabolisme, et l'étain équilibre les émotions.",
    ],
    duration: "30 mn",
    price: 30,
    image: kansu,
  },
  {
    id: 7,
    title: "Massage « Douceur & Réconfort »",
    description:
      "Tendre et apaisant, pensé pour les personnes sensibles, en situation de handicap ou âgées.",
    descriptionLong: [
      "Conçu pour offrir un moment de réconfort et de bienveillance, ce massage s’adresse particulièrement aux personnes âgées, les personnes en situation de handicap ou les personnes en quête de douceur. Ses gestes lents et enveloppants apaisent le corps et procurent une sensation de sécurité et de sérénité.",
    ],
    duration: "30 mn",
    price: 30,
    image: senior,
  },
  // {
  //   id: 8,
  //   title: "Massage Personnalisé",
  //   description:
  //     "Un massage sur mesure, adapté à vos envies et besoins du moment.",
  //   descriptionLong: [
  //     "Parce que chaque personne est unique, ce massage est créé spécialement pour vous. En fonction de vos attentes et de vos ressentis, il combine différentes techniques pour un soin parfaitement adapté.",
  //   ],
  //   image: perso,
  // },
];
