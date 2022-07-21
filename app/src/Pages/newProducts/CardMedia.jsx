import React, { useState, useEffect ,useReducer, useCallback} from 'react';
import { Stack, Box, Typography } from "@mui/material";
import Data from "./Data"
import { muiIcon } from "@mui/material";
import {
  muiCard,
  muiCardHeader,
  muiCardContent,
  muiCardActionArea,
  muiCardActions,
  muiCardMedia,
  muiButton,
  muiIconButton,
  muiAvatar
} from "@mui/material";

function Card({prdName, prdType, price, imageLink, prdLink}){
    
    
    console.log(prdLink);

    return(
    <React.Fragment>
        <Stack spacing={10} direction="row"
                justifyContent="center">
          <muiCard>
            <muiCardActionArea>
              <muiCardMedia 
                style={{ height:"200px", width:"200px", padding: 0, minHeight: "180px"}}
                image={imageLink}
                title="img title"
              />
              <muiCardContent>
                <Typography variant="h5" className="subject">
                    {prdName}
                </Typography>
                <Typography variant="body2" className="subscript">
                    {prdType}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                    {price}
                </Typography>
              </muiCardContent>
            </muiCardActionArea>
          </muiCard>
        </Stack>
      </React.Fragment>  
    );
}

function CardMedia({prds}){

    return(
        <div>
        {prds.map(e => <Card key={e.id} 
        prdName={e.name} 
        prdType={e.product_type} 
        price={e.price} 
        imageLink={e.image_link} 
        prdLink={e.product_link}></Card>)}
        </div>
    );
};

export default CardMedia;