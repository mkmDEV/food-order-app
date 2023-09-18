import { createPortal } from 'react-dom';

import classes from './Modal.module.scss';

const Backdrop = (props) => (
  <div className={classes.backdrop} onClick={props.onClose} />
);
const ModalOverlay = (props) => (
  <div className={classes.modal}>
    <div className={classes.content}>{props.children}</div>
  </div>
);

const portalEl = document.getElementById('overlays');

const Modal = (props) => (
  <>
    {createPortal(<Backdrop onClose={props.onClose} />, portalEl)}
    {createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalEl)}
  </>
);

export default Modal;
