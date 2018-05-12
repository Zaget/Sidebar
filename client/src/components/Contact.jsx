import React from 'react';
import { Icon } from 'react-materialize';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};


class Contact extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false,
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  afterOpenModal() {
  // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    const tel = `tel:${this.props.phone}`;
    const store = this.props.name.split(' ').join('+');
    const navLink = 'https://www.google.com';
    const modalLink = `https://www.google.com/maps/embed/v1/view?key=AIzaSyCCkDYJwmT1_aBIYFxjGPHgw1hKI9Jjk4I&center=${this.props.lat},${this.props.lng}&maptype=satellite`;
    return (

      <div className="contact" style={{ content: { left: '0px', 'margin-left': '0px' } }}>
        <div className="phone row">
          <a href={tel} target="blank">
            <Icon className="contactIcon icons">phone</Icon>
            <span className="contactText">{this.props.phone}</span>
          </a>
        </div>
        <div className="website row">
          <a href={this.props.website} target="blank">
            <Icon className="contactIcon icons">web</Icon>
            <span className="contactText">{this.props.website}</span>
          </a>
        </div>
        <div className="directions row">
          <a href={navLink} target="blank">
            <Icon className="contactIcon icons">directions</Icon>
            <span className="contactText">Get Directions</span>
          </a>
        </div>
        <button onClick={this.openModal}>Enlarge Map</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >

          <h2 ref={subtitle => this.subtitle = subtitle}>Click outside the box to leave!</h2>
          <iframe
            width="1000px"
            height="500px"
            frameBorder="0"
            style={{ border: 0 }}
            src={modalLink}
            allowFullScreen
          />
        </Modal>
      </div>
    );
  }
}

export default Contact;
