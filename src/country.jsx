import React, { useState } from "react";
import { Modal, Fade, Backdrop } from "@mui/material";

export default function Country({ flag, name, population, region, timezones, subregion, capital, official_name }) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
          <section className="short" onClick={handleOpen}>
            <img src={flag.large} alt={name} className="flags hover" />
            <h3 className="cover-text">{name}</h3>
          </section>
          
          <Modal
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
          <Fade in={open}>
            <section className="info">
              <div className="img-container">
                <img src={flag.large} alt={name} className="modal-flags hover" />
                <h3>{official_name}</h3>
              </div>
              
              <div className="info-container">
                <h3><span>Name:</span> {name}</h3>
                <h4><span>Population:</span> {population}</h4>
                <h4><span>Region:</span> {region}</h4>
                <h4><span>Timezone:</span> {timezones}</h4>
                <h4><span>Subregion:</span> {subregion}</h4>
                <h4><span>Capital:</span> {capital}</h4>
              </div>

            </section>
          </Fade>

        </Modal>
      </div>
    )
}