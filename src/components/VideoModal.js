// VideoModal.js
import ReactModal from "react-modal";

const VideoModal = ({ isOpen, onClose }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Video Demo Modal"
    >
      <button onClick={onClose}>Close Modal</button>
      {/* Add the video player component here */}
      <video controls width="100%" height="auto">
        <source src="path/to/your/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </ReactModal>
  );
};

export default VideoModal;
