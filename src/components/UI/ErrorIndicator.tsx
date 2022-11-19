import error from '../../svg/error.svg';

export const ErrorIndicator = () => {
  return (
    <section className="error">
      <img src={error} alt="No interesting data here. Go away!" height={'100px'} />
      <h3 style={{color:'aliceblue'}}>Oops! We did something wrong again!</h3>
    </section>
  );
};
