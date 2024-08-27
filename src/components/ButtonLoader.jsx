import React from 'react'
import "./btn.css"
import { Button } from '@mui/material'

const ButtonLoader = () => {
  return (
    <div>

       
        <Button disabled
          sx={{
            width: "100%",
            mt: "30px",
            textTransform: "none",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            // gap:"20px"
          }}
          variant="contained"
        >
       <span class="Btnloader"></span>  Loading...
        </Button>
    </div>
  )
}

export default ButtonLoader