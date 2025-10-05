import type { Massage } from "models/Massage";

import carpediem from "./images/1carpediem.jpg";
import californien from "./images/2californien.jpg";
import dos from "./images/3dos.jpg";
import visage from "./images/4visage.jpg";
import pied from "./images/5pied.jpg";
import kansu from "./images/6kansu.jpg";
import senior from "./images/7senior.jpeg";
import perso from "./images/8perso.jpg";

export const massages: Massage[] = [
  {
    id: 1,
    title: "Massage « Carpe Diem »",
    description:
      "Enveloppant, qui invite au lâcher-prise et à la reconnexion avec soi-même.",
    descriptionLong:
      "Une expérience profonde de relaxation, idéale pour ceux qui souhaitent se détendre complètement et se ressourcer. Sa douceur et son enveloppement favorisent un relâchement total, parfait pour échapper au stress du quotidien et retrouver une paix intérieure.",
    duration: "1h15",
    price: 60,
    image: carpediem,
  },
  {
    id: 2,
    title: "Massage Californien – Suédois",
    description: "Fluide et relaxant, qui apaise autant le corps que l’esprit.",
    descriptionLong:
      "Avec son surnom évocateur de « toucher du cœur », il combine des techniques californiennes douces et enveloppantes avec la profondeur du massage suédois. Cela permet non seulement de détendre le corps, mais aussi d'apaiser l'esprit, ce qui en fait un choix excellent pour ceux qui souhaitent une expérience de bien-être complète.",
    duration: "1h",
    price: 55,
    image: californien,
  },
  {
    id: 3,
    title: "Massage du Dos",
    description: "Ciblé pour libérer les tensions accumulées dans le dos.",
    descriptionLong:
      "Spécifiquement conçu pour dénouer les nœuds et apaiser les contractures, ce massage soulage les zones les plus sollicitées au quotidien. Idéal pour retrouver confort et légèreté.",
    duration: "40 mn",
    price: 40,
    image: dos,
  },
  {
    id: 4,
    title: "Massage Visage & Crâne",
    description:
      "Un soin apaisant qui relâche les tensions du visage et du cuir chevelu.",
    descriptionLong:
      "Ce massage favorise une profonde relaxation en dénouant les tensions accumulées dans le visage, la nuque et la tête. Il calme l’esprit, améliore la qualité du sommeil et procure une agréable sensation de légèreté.",
    duration: "30 mn",
    price: 30,
    image: visage,
  },
  {
    id: 5,
    title: "Massage Thaï du Pied",
    description:
      "Stimulant, qui rééquilibre l’énergie vitale par la réflexologie plantaire.",
    descriptionLong:
      "Agissant comme un dialogue entre vos pieds et le reste de votre corps, ce massage stimule des points précis de la voûte plantaire. Il aide à rééquilibrer le Chi, l’énergie vitale, et relance les processus naturels d’harmonisation du corps. Il est particulièrement efficace pour réduire le stress et procurer une détente profonde.",
    duration: "30 mn",
    price: 30,
    image: pied,
  },
  {
    id: 6,
    title: "Massage au Bol Kansu",
    description:
      "Un rituel ayurvédique apaisant qui harmonise corps et esprit.",
    descriptionLong:
      "Issu de la tradition ayurvédique, ce massage des pieds avec un petit bol en alliage de métaux (or, cuivre, zinc, bronze, argent, étain) agit sur les points réflexes. Il aide à calmer l’anxiété, réduire la colère, améliorer le sommeil et apporter une profonde sérénité.",
    duration: "30 mn",
    price: 30,
    image: kansu,
  },
  {
    id: 7,
    title: "Massage Douceur & Réconfort",
    description:
      "Tendre et apaisant, pensé pour les personnes sensibles ou âgées.",
    descriptionLong:
      "Conçu pour offrir un moment de réconfort et de bienveillance, ce massage s’adresse particulièrement aux personnes âgées ou en quête de douceur. Ses gestes lents et enveloppants apaisent le corps et procurent une sensation de sécurité et de sérénité.",
    duration: "30 mn",
    price: 30,
    image: senior,
  },
  {
    id: 8,
    title: "Massage Personnalisé",
    description:
      "Un massage sur mesure, adapté à vos envies et besoins du moment.",
    descriptionLong:
      "Parce que chaque personne est unique, ce massage est créé spécialement pour vous. En fonction de vos attentes et de vos ressentis, il combine différentes techniques pour un soin parfaitement adapté.",
    duration: null,
    price: null,
    image: perso,
  },
];
