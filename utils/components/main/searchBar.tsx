//import { SearchRounded } from "@mui/icons-material";
import { Button, TextField } from "@mui/material";

export default function SerachBar() {

    return (<div className="flex flex-row">
        <TextField id="outlined-basic" label="" variant="standard"/>
        <Button variant="contained">
            <div>
                <p>검색</p>
  
            </div>
        </Button>
    </div>)
}