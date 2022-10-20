import styles from './Footer.module.css';
import instagram from '../../svg/instagram.svg';
import youtube from '../../svg/youtube.svg';
import twitter from '../../svg/twitter.svg';
import facebook from '../../svg/facebook.svg';
import github from '../../svg/github.svg';

export const Footer = () => {
  return (
    <footer className={styles.footer} >
      <ul>
        <li><a href="https://www.instagram.com/webdevmemes/"><img src={instagram} alt="instagram" role="img" /></a></li>
        <li><a href="https://www.youtube.com/c/Fireship"><img src={youtube} alt="youtube" role="img" /></a></li>
        <li><a href="https://twitter.com/webdevmemes"><img src={twitter} alt="twitter" role="img" /></a></li>
        <li><a href="https://m.facebook.com/WebDeveloperMemes"><img src={facebook} alt="facebook" role="img" /></a></li>
        <li><a href="https://github.com/Surfer0997"><img src={github} alt="github" role="img" /></a></li>
      </ul>
      <ul>
        <li>Sponsored by: </li>
        <li><a href="https://surfer0997.github.io/chat/">Super Chat</a></li>
        <li><a href="https://surfer0997.github.io/sushi-order/">Yapona sushi</a></li>
        <li><a href="https://surfer0997.github.io/sushi-workers/">POW employment</a></li>
      </ul>
    <span className={styles.copyright} id="footer">All rights are plagiated, 2022. ©</span>
    </footer>
  );
};
