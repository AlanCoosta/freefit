import React, { useState } from 'react';
import ReactModal from 'react-modal';

import { FaPlay } from 'react-icons/fa';

import { Container } from './styles';

interface ModalProps {
  clients: {
    image_url: string;
    name: string;
    description: string;
    video_url: string;
  };
}

const CardVideo: React.FC<ModalProps> = ({ clients }) => {
  const [modalVideo, setModalVideo] = useState(false);

  return (
    <Container>
      <figure onClick={(e) => setModalVideo(true)}>
        <img src={clients.image_url} alt="" />

        <button type="button">
          <FaPlay />
        </button>
      </figure>

      <h3>{clients.name}</h3>

      <p>{clients.description}</p>

      {modalVideo && (
        <ReactModal
          shouldCloseOnOverlayClick={!false}
          onRequestClose={(e) => setModalVideo(false)}
          isOpen={modalVideo}
          ariaHideApp={false}
          style={{
            content: {
              top: '50%',
              left: '50%',
              right: 'auto',
              bottom: 'auto',
              marginRight: '-50%',
              transform: 'translate(-50%, -50%)',
              background: 'transparent',
              color: '#000000',
              borderRadius: '8px',
              padding: 0,
              width: '100%',
              maxWidth: '736px',
              border: 'none',
            },
            overlay: {
              backgroundColor: '#121214e6',
              zIndex: 9999,
            },
          }}
        >
          <iframe
            title="modal"
            src={clients.video_url}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              borderRadius: 8,
              width: '100%',
              height: '415px',
            }}
          />
        </ReactModal>
      )}
    </Container>
  );
};

export default CardVideo;
