import React, { useState } from 'react';
import Image from 'next/image'
import Divider from '@mui/material/Divider';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Button from '@mui/material/Button/Button';
import Dialog from '@mui/material/Dialog/Dialog';
import DialogTitle from '@mui/material/DialogTitle/DialogTitle';
import DialogContent from '@mui/material/DialogContent/DialogContent';
import DialogActions from '@mui/material/DialogActions/DialogActions';
import DialogContentText from '@mui/material/DialogContentText/DialogContentText';
import FooterBlock from './FooterBlock';

export const AwesomeLink = ({
  machine
}) => {
  const myLoader = ({ src, width, quality }) => {
    return `https://wallbox.com/media_usa/cms/home/${src}?w=${width}&q=${quality || 75}`
  }
  const [open, setOpen] = useState<boolean>(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="shadow border-2 border-gray-300 w-1/4 h-auto pr-5 rounded-lg mr-10 bg-white">
      <div className="w-full flex justify-center p-1">
        <Image
          loader={myLoader}
          src={'PulsarPlus_Black.png'}
          alt="Picture of the author"
          width={86}
          height={116}
        />
      </div>
      <div className="w-full flex justify-between p-2">
        <span className="text-lg font-bold not-italic">{`${machine.manufacturer}-${machine.model}`}</span>
        <span className="text-lg font-normal not-italic">{`${machine.peak10s || '-'} kW`}</span>
      </div>
      <div className="w-full p-">
        <Divider />
      </div>
      <div className="flex p-2">
        <span className="absolute">
          <ArrowForwardIosIcon fontSize="small" sx={{ color: '#A4A6B3', paddingTop: '5px'}}/>
        </span>
        <Button variant="outlined" onClick={handleClickOpen}>
            Details
        </Button>
        <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {`Details - ${machine.type}`}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <div>
                <div className='flex'>
                  <Image
                    loader={myLoader}
                    src={'PulsarPlus_Black.png'}
                    alt="Picture of the author"
                    width={86}
                    height={116}
                  />
                  <div className='flex pl-20'>
                    <div className="flex-1">
                      <p className='font-semibold'>Hersteller</p>
                      <p>{machine.manufacturer}</p>
                      <p className='font-semibold pt-2'>Modell</p>
                      <p>{machine.model}</p>
                      <p className='font-semibold pt-2'>Aktuell verfügbar</p>
                      <p>{machine.model}</p>
                    </div>
                    <div className="flex-1 pl-20">
                      {machine.machineSpecificCharacteristics1 ? (
                        <div>
                          <p className='font-black'>{machine.machineSpecificCharacteristics1.split(':')[0]}</p>
                          <p>{machine.machineSpecificCharacteristics1.split(':')[1]}</p>
                        </div>
                      ) : ''}
                      {machine.machineSpecificCharacteristics2 ? (
                        <div>
                          <p className='font-black pt-2'>{machine.machineSpecificCharacteristics2.split(':')[0]}</p>
                          <p>{machine.machineSpecificCharacteristics2.split(':')[1]}</p>
                        </div>
                      ) : ''}
                      {machine.machineSpecificCharacteristics3 ? (
                        <div>
                          <p className='font-black pt-2'>{machine.machineSpecificCharacteristics3.split(':')[0]}</p>
                          <p>{machine.machineSpecificCharacteristics3.split(':')[1]}</p>
                        </div>
                      ) : ''}
                      {machine.machineSpecificCharacteristics4 ? (
                        <div>
                          <p className='font-black pt-2'>{machine.machineSpecificCharacteristics4.split(':')[0]}</p>
                          <p>{machine.machineSpecificCharacteristics4.split(':')[1]}</p>
                        </div>
                      ) : ''}
                    </div>
                  </div>
                </div>
                <div className="flex flex-row justify-between w-full pt-4 pl-6">
                <div className="w-52 h-32">
                    <FooterBlock title={"Grundlast"} value={`${machine.ratedPowerKW} kVA`}/>
                </div>
                <div className="w-52 h-32">
                    <FooterBlock title={"1s Spitzenlast"} value={`${machine.peak1s} kVA`}/>
                </div>
                <div className="w-52 h-32">
                    <FooterBlock title={"Steckdose"} value={machine.socket}/>
                </div>
              </div>
              </div>
          </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Schließen</Button>
            <Button onClick={handleClose} autoFocus>
              Hinzufügen
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
};
