
import { Fragment, ReactNode } from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

interface BackdropProps {
    onClose: () => void;
}

interface ModalOverlayProps {
    children: ReactNode;
}

interface ModalProps {
    onClose: () => void;
    children: ReactNode;
}

function Backdrop(props: BackdropProps) {
    return <div className={classes.backdrop} onClick={props.onClose}></div>
}

function ModalOverlay(props: ModalOverlayProps) {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    );
}

export default function Modal(props: ModalProps) {

    const portalElement = document.getElementById("overlays")

    return (
        <Fragment>
            {/* <Backdrop /> */}
            {/* <ModalOverlay>{props.children}</ModalOverlay> */}
            {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalElement!)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement!)}
        </Fragment>
    );
}