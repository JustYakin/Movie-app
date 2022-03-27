import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import CloseIcon from '@mui/icons-material/Close';
import { Modal, ImageListItem, Box, Typography } from '@mui/material';
import styles from './styles.module.scss'

interface IProps {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;  
}

const MovieItem: React.FC<IProps> = ({ Poster, Title, Year, imdbID, Type}): JSX.Element => {

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 370,
        bgcolor: 'white',
        border: '2px solid #fff',
        borderRadius: '5px',
        boxShadow: 24,
        p: 4,
      };

      const [open, setOpen] = useState(false);
      const handleOpen = () => setOpen(true);
      const handleClose = () => setOpen(false);
    
    return (
        <>
        <Card onClick={handleOpen} style={{ 
                        width: '14rem',
                        height: '24rem',
                        overflow: 'hidden',
                     }}>
            <Card.Img src={Poster} className={styles.zoom}
                style={{ 
                    width: '13.5rem',
                    height: '20rem',
                    margin: '0 auto',
                   
                 }}
            />
            <Card.Body style={{ 
                        padding: '2px 5px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between'                       
                     }}>
                    <Card.Title 
                        style={{ 
                            fontSize: '14px',
                            color: 'black',
                            fontWeight: 'bold',
                            marginBottom: '2px'
                         }}>
                    {Title}</Card.Title>
                    <Card.Subtitle className="mb-0 text-muted">Year: {Year}</Card.Subtitle>
               </Card.Body>
        </Card>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
         >
            <Box sx={style}>
            <CloseIcon onClick={handleClose} sx={{
                position: 'absolute',
                top: '-0.5%',
                left: '102%',
                width: '30px',
                height: '30px',
                color: 'white',
                cursor: 'pointer'
            }}/>
            <ImageListItem key={Poster}>
                <img
                    src={`${Poster}?w=174&h=164&fit=crop&auto=format`}
                    srcSet={`${Poster}?w=174&h=164&fit=crop&auto=format&dpr=2 2x`}
                    alt={Title}
                    loading="lazy"
                />
            </ImageListItem>
                <Typography id="modal-modal-title" sx={{ mt: 2 }} variant="h4" component="h1">
                    {Title}
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 1 }}>
                   Year: {Year}
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 1 }}>
                   ID: {imdbID}
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 1 }}>
                   Type: {Type}
                </Typography>
            </Box>
        </Modal>
        </>
    )
}

export default MovieItem;