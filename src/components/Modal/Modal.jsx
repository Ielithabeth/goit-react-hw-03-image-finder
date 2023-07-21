import { Component } from "react";
import PropTypes from 'prop-types';

// const ModalRoot = document.querySelector('#ModalRoot');

export class Modal extends Component {
    componentDidMount() {
        window.addEventListener('keydown', this.keyDown);
    }
    
    componentWillUnmount() {
        window.removeEventListener('keydown', this.keyDown);
    }

    keyDown = e => {
        if (e.code === 'Escape') {
          this.props.onClose();
        }
    }

    handleOverlayClose = e => {
       if (e.currentTarget === e.target) {
         this.props.onClose();
       }
    }

    render() {
        const { largeImageURL } = this.props.image;

        return (
            <div onClick={this.handleOverlayClose} className="Overlay">
              <div className="Modal">
                <img src={largeImageURL} alt="img"/>
              </div>
            </div>
        )
    }
}

Modal.protoTypes = {
    image: PropTypes.object,
    onClose: PropTypes.func,
}