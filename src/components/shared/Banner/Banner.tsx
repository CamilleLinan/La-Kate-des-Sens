import type { FC } from 'react';
import "./_Banner.scss";
import illu from "../../../assets/banner/illu_banner.png";
import ButtonBase from '../ButtonBase/ButtonBase';

const Banner: FC = () => {
  return (
    <section className='banner'>
        <div className='banner__container'>
            <article className='banner__container__text'>
                <h2>Votre spécialiste massages, à domicile.</h2>

                <p>Je m'appelle Catherine et je suis passionnée par le bien-être et l'épanouissement personnel. Ma philosophie de vie, "carpe diem", m'inspire à vivre chaque instant pleinement et à profiter de chaque opportunité qui se présente à moi. C'est cette approche qui m'a conduite à me former en massage bien-être.</p>

                <p>Au fil de ma formation, j'ai découvert l'importance de prendre soin de soi, tant sur le plan physique que mental. Le massage bien-être est pour moi un moyen d'apporter détente et sérénité à ceux qui en ont besoin. J'aime créer un espace où chacun peut se ressourcer, se reconnecter à soi-même et lâcher prise.</p>

                <p>Mon objectif est de vous offrir une expérience unique et personnalisée, adaptée à vos besoins. Que vous cherchiez à réduire le stress, à soulager des tensions ou simplement à vous accorder un moment de douceur, je suis là pour vous accompagner.</p>

                <ButtonBase children="Prendre rendez-vous" />
            </article>
            <img src={illu} alt='banniere' className='banner__container__img' />
        </div>
    </section>
  );
};

export default Banner;