import React, { ReactNode, useEffect, useMemo } from 'react';
import ReactDOM from 'react-dom';
import styles from './Modal.module.css';

interface BackdropProps {
  onHideCart: () => void;
}

const Backdrop = (props: BackdropProps) => {
  return <div className={styles.backdrop} onClick={props.onHideCart}></div>;
};

interface ModalWindowProps {
  children: ReactNode;
}

const ModalWindow = (props: ModalWindowProps) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
};

interface ModalProps {
  children: ReactNode;
  onHideCart: () => void;
}

export const Modal = (props: ModalProps) => {
  useEffect(() => {
    const listener = (e:KeyboardEvent) => {
      if (e.key === 'Escape') {
        props.onHideCart();
      }
    };

    document.addEventListener('keydown', listener);

    return () => document.removeEventListener('keydown', listener);
  }, []);

  const portalElement = useMemo(() => document.getElementById('overlays'), []);

  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onHideCart={props.onHideCart} />,
        portalElement!
      )}
      {ReactDOM.createPortal(
        <ModalWindow>{props.children}</ModalWindow>,
        portalElement!
      )}
    </React.Fragment>
  );
};
