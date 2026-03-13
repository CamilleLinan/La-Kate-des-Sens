import type { Massage } from "models/Massage";

import carpediem from "./images/1carpediem.jpg";
import californien from "./images/2californien.jpg";
import visage from "./images/4visage.jpg";
import pied from "./images/5pied.jpg";
import kansu from "./images/6kansu.jpg";
import senior from "./images/7senior.jpeg";
import dos from "./images/3dos.jpg";
import bebe1 from "./images/8bebe1.jpg";
import bebe2 from "./images/8bebe2.jpg";
import bebe3 from "./images/8bebe3.jpg";

export const massages: Massage[] = [
  {
    id: "carpe-diem",
    title: "Massage « Carpe Diem »",
    description:
      "Enveloppant, qui invite au lâcher-prise et à la reconnexion avec soi-même.",
    descriptionLong: [
      "Une expérience profonde de relaxation, idéale pour ceux qui souhaitent se détendre complètement et se ressourcer. Sa douceur et son enveloppement favorisent un relâchement total, parfait pour échapper au stress du quotidien et retrouver une paix intérieure.",
    ],
    bonus:
      "Comprend un rituel avec un bain de pieds délassant, au début du massage. Sans oublier le Bol Kansu, un beau bijou de l’Ayurveda, à la fin du massage.",
    duration: "1h30",
    prices: [70],
    image: carpediem,
  },
  {
    id: "eveil-des-sens",
    title: "Massage « L'Éveil des Sens »",
    description: "Fluide et relaxant, qui apaise autant le corps que l’esprit.",
    descriptionLong: [
      "Avec son surnom évocateur de « toucher du cœur », il combine des techniques apaisantes et relaxantes. Cela permet non seulement de détendre le corps, mais aussi d'apaiser l'esprit, ce qui en fait un choix excellent pour ceux qui souhaitent une expérience de bien-être complète à l'écoute de vos sens.",
    ],
    duration: "1h",
    prices: [60],
    image: californien,
  },
  {
    id: "sphere-essence-ciel",
    title: "Massage « Sphère Essence Ciel »",
    description:
      "Un massage tout en douceur du décolleté, du visage et du crâne.",
    descriptionLong: [
      "Ce massage favorise une profonde relaxation en dénouant les tensions accumulées dans le visage, la nuque et la tête. Il calme l’esprit, améliore la qualité du sommeil et procure une agréable sensation de légèreté. Plongez dans un océan de sérénité, là où le bien être règne.",
    ],
    duration: "40mn",
    prices: [40],
    image: visage,
  },
  {
    id: "massage-du-dos",
    title: "Massage du Dos",
    description: "Ciblé pour libérer les tensions accumulées dans le dos.",
    descriptionLong: [
      "Spécifiquement conçu pour dénouer les nœuds et apaiser les contractures, ce massage soulage les zones les plus sollicitées au quotidien. Idéal pour retrouver confort et légèreté.",
    ],
    duration: "40mn",
    prices: [40],
    image: dos,
  },
  {
    id: "massage-thai",
    title: "Massage Thaï du Pied & Jambes",
    description:
      "Stimulant, qui rééquilibre l’énergie vitale par la réflexologie plantaire.",
    descriptionLong: [
      "Agissant comme un dialogue entre vos pieds et le reste de votre corps et en stimulant des points spécifiques de la voûte plantaire, ce massage aide à rééquilibrer le Chi, l’énergie vitale, et relance les processus naturels d’harmonisation du corps.",
      "Il est particulièrement efficace pour réduire le stress et procurer une détente profonde. Ce massage thaïlandais ne se limite pas aux pieds mais s’applique également à toute la jambe. Traditionnellement, ce soin peut être enrichi de pressions douces sur les mains, le cou et le cuir chevelu, pour renforcer l’harmonie du corps.",
    ],
    duration: "30mn - 1h",
    prices: [30, 60],
    image: pied,
  },
  {
    id: "massage-bol-kansu",
    title: "Massage au Bol Kansu",
    description:
      "Un rituel Ayurvédique apaisant qui harmonise corps et esprit.",
    descriptionLong: [
      "Ce massage du pied avec le bol Kansu est très connu dans l’Ayurveda. Ce massage touche les points réflexes du pied en libérant les énergies et leur permettre de circuler dans le corps. Il favorise également le sommeil, et apporte une relaxation profonde pendant le massage.",
      "Le bol Kansu est fabriqué à partir d’un alliage de 5 métaux aux vertus complémentaires : l’or, le zinc, le bronze, le cuivre, l’argent et l’étain. Selon l'ayurvéda, le cuivre absorbe l'excès de chaleur, le zinc favorise le métabolisme, et l'étain équilibre les émotions.",
    ],
    duration: "30mn",
    prices: [30],
    image: kansu,
  },
  {
    id: "douceur-et-reconfort",
    title: "Massage « Douceur & Réconfort »",
    description:
      "Tendre et apaisant, pensé pour les personnes sensibles, en situation de handicap ou âgées.",
    descriptionLong: [
      "Conçu pour offrir un moment de réconfort et de bienveillance, ce massage s’adresse particulièrement aux personnes âgées, les personnes en situation de handicap ou les personnes en quête de douceur. Ses gestes lents et enveloppants apaisent le corps et procurent une sensation de sécurité et de sérénité.",
    ],
    duration: "30mn",
    prices: [30],
    image: senior,
  },
  {
    id: "massage-bebe",
    title: "Massage & Ateliers bébé « 1er voyage au cœur des sens »",
    description:
      "Un moment de douceur et de présence pour votre bébé dès les premières semaines de vie.",
    descriptionLong: [
      "Le massage pour bébé est une quête silencieuse, un voyage au cœur de l’essentiel. Chaque geste devient une promesse, chaque contact une présence. Le bébé guide, le parent ressent, et le cœur s’ouvre.",
      "Ce moment favorise l’attachement, apaise les tensions et crée une bulle hors du temps. Une approche douce et respectueuse, au rythme de bébé.",
      "Les huiles utilisées sont naturelles, neutres et spécialement adaptées aux bébés.",
    ],
    bonus:
      "Bienfaits : apaise les pleurs, soulage les coliques, stimule le développement sensoriel et renforce le sentiment de sécurité affective.",
    options: [
      {
        label: "Massage du bébé",
        description:
          "Je masse votre bébé avec une infinie douceur dans un cadre calme et rassurant, pour un moment de détente et de connexion.",
        duration: "30mn (dont 15mn de massage)",
        prices: [30],
        image: bebe1,
      },
      {
        label: "Atelier individuel parents",
        description:
          "Je vous transmets les gestes du massage bébé afin que vous puissiez reproduire ce rituel de bien-être et de lien à la maison.",
        duration: "1h",
        prices: [45],
        image: bebe2,
      },
      {
        label: "Cycle apprentissage massage bébé",
        description:
          "Un apprentissage progressif en 4 séances pour acquérir les gestes et masser votre bébé sereinement au quotidien.",
        duration: "4 × 1h",
        prices: [120],
        image: bebe3,
      },
    ],
    image: bebe1,
  },
];
