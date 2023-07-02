import React, {useState} from 'react'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import {ModalState, ModalInfo} from './Atoms'
import { useAtom } from 'jotai';

function ItemModal(props) {
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
        width: '90%',
        maxHeight: '75%',
        bgcolor: 'background.paper',
        border: '1px solid #000',
        borderRadius: '8px',
        boxShadow: 24,
        p: 4,
        overflowY: 'scroll !important'
      };
  
    return (
      modalInfo != null ?       <div>
      <Modal
        open={modalStateLocale}
        onClose={props.close}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">

        <Box sx={style}>
          
        <div className='container'>
        <h1 className='modal-header'>{modalInfo != null ? modalInfo.Product : modalInfo.Title.slice(1, -1)}</h1>
        <div className='modal-body row'>
          <div class="col-md-6">
          <strong>Organization:</strong>
          <p>Transport Canada</p>
          </div>
          <div class="col-md-6">
          <strong>Product:</strong>
          <p>{modalInfo.Product}</p>
          </div>
          <div class="col-md-6">
          <strong>Category: </strong>
          <p>{modalInfo.Category}</p>
          </div>
          <div class="col-md-6">
          <strong>Issue:</strong>
          <p>{modalInfo.Issue}</p>
          </div>
          <div class="col-md-6">
          <strong>Last updated:</strong>
          <p>{modalInfo['Last updated'] != null ? modalInfo['Last updated'] : null}</p>
          </div>
          <div class="col-md-6">
          <strong>Recall Class:</strong>
          <p>{modalInfo['Recall class'] == '' ? 'N/A' : modalInfo['Recall class']}</p>
          </div>
          <div class="col-md-6">
          <strong>NID:</strong>
          <p>{modalInfo.NID}</p>
          </div>
          <div class="col-md-6">
          <strong>Government Statement:</strong>
          <p>
          <a href={modalInfo.URL} target="_blank">
          {
            modalInfo.URL
          }
          </a>
          </p>
          </div>
         </div>
        </div>
         <div className='modal-footer row'>
            <button className='modal-close-button' onClick={handleClose}>Close</button>
         </div>
        </Box>
        
      </Modal>
    </div> : <></>
    );
}

export default ItemModal