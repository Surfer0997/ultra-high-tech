import styles from './ToPartners.module.css';
import idCard from '../../../svg/id-card.svg';
import brain from '../../../svg/brain.svg';
import graph from '../../../svg/graph.svg';
import handshake from '../../../svg/handshake.svg';
import check from '../../../svg/check.svg';
import { Card } from '../../UI/Card';

export const ToPartners = () => {
  return (
    <div className={styles.partners}>
      <Card>
        <img src={check} alt="Result is the main goal" role="img" />
        <h4 style={{ color: '#c2cd23' }}>Create impact</h4>
        <p>
          Work with us to co-develop ineffective, deprecated and useless
          products in line with your organisational priorities and values that
          support young entrepreneurs locally, regionally and globally.
        </p>
      </Card>
      <Card>
        <img src={handshake} alt="Engage your personnel" role="img" />
        <h4 style={{ color: '#01a7b8' }}>Promote employee engagement</h4>
        <p>
          If you are brave enough not to fire your employees on the last day of
          three-month probation. We don't have anything to talk about with you.
        </p>
      </Card>
      <Card>
        <img src={graph} alt="" role="img" />
        <h4 style={{ color: '#f8981c' }}>Access data from diverse contexts</h4>
        <p>
          Reach the lowest possible effectiveness in the shortest terms with our
          experienced analytics department.
        </p>
      </Card>
      <Card>
        <img src={brain} alt="Find like-minded people" role="img" />
        <h4 style={{ color: '#074586' }}>Engage with like minds</h4>
        <p>
          Expand your profile and broaden your perspectives through the many
          formal and informal opportunities the network offers to convene
          leading fake experts, specialists and supporters in the web
          development field.
        </p>
      </Card>
      <Card>
        <img src={idCard} alt="Security requirements" role="img" />
        <h4 style={{ color: '#000' }}>Security is priority</h4>
        <img
          className={styles.cardImage}
          src="https://www.piraeusbank.com/sites/bulgaria/bg/PublishingImages/LearnMore/CCV.png"
          alt="Send photos of your credit card backside to skammamont@neskam.skam"
        />
        <p>
          Never heard about SSL or HTTPS? You are on the right way! Many stupid
          people are wasting their time on such excesses as security. We are
          following principle "work smarter, not harder", so we prefer extra 15
          minutes break time to md5 hashing protocol.
        </p>
      </Card>
    </div>
  );
};
