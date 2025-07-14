import type { FC } from 'react';
import "./_Footer.scss";

const Footer: FC = () => {
    return (
        <footer className="footer">
            <div className="footer__container">
                <h2 className='footer__title'>La Kate des Sens</h2>
                <nav>
                    <p><b>Me Contacter</b></p>
                    <p>Contact</p>
                    <p>Page Facebook</p>
                </nav>

                <nav>
                    <p><b>À Propos</b></p>
                    <p>CGV</p>
                    <p>Mentions Légales</p>
                </nav>
            </div>
    
            <p className='footer__copyright'>
                &copy; {new Date().getFullYear()} La Kate des Sens - Tous droits réservés
            </p>
        </footer>
    );
};

export default Footer;