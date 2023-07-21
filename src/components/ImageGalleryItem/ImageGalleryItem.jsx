import { Component } from "react";
import { Modal } from "components/Modal/Modal";
import PropTypes from 'prop-types';

export class ImageGalleryItem extends Component {
    state = {
        shownModal: false,
    };

    handleModal = () => {
        this.setState(({ shownModal }) => ({ shownModal: !shownModal }));
    };

      render() {
        const { item } = this.props;
        const { webformatURL } = item;

        return (
          <li>
            <img
              onClick={this.handleModal}
              className="ImageGalleryItem-image"
              src={webformatURL}
              alt="img"
            />

            {this.state.shownModal && <Modal onClose={this.handleModal} image={item} />}
          </li>
        );
      }
}

ImageGalleryItem.propTypes = {
    item: PropTypes.object,
};