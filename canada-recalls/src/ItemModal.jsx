import React, {useState} from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {ModalState, ModalInfo} from './Atoms'
import { useAtom } from 'jotai';

function ItemModal(props) {
    const [open, setOpen] = useState(props.open);
    const [modalStateLocale, setModalStateLocale] = useAtom(ModalState)
    const [modalInfo, setModalInfo] = useAtom(ModalInfo)
    const handleClose = () => {
        setModalStateLocale(false)
    }
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };
  
    return (
      <div>
        <Modal
          open={modalStateLocale}
          onClose={props.close}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description">

          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {modalInfo != null ? modalInfo.Title : null}
              <button onClick={handleClose}>Close</button>
            </Typography>
          </Box>
          
        </Modal>
      </div>
    );
}

export default ItemModal