import PropTypes from 'prop-types';
import Modal from 'react-modal';
import "../scss/ALert.scss"

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    border: '1px solid #ccc',
    background: '#fff',
    borderRadius: '8px',
    padding: '20px',
    aspectRatio: '1',
    width: '300px',
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
};

const Alert = ({ isOpen, onClose, message }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
      contentLabel="Alert"
      ariaHideApp={false}
    >
      <div className='Modal'>
        <p className='Messages'>{message}</p>
        <button onClick={onClose} className='CloseBTN'>Close</button>
      </div>
    </Modal>
  );
};

Alert.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
};

export default Alert;
