import { Button } from '@material-ui/core';
import React,{useState} from 'react'
import "./Banner.css";
import Search from "./Search";
import { useHistory } from "react-router-dom";
import { Grid } from "@material-ui/core"

function Banner() {

    const history = useHistory();
    const [showSearch, setShowSearch] = useState(false);

    return (

    <Grid container spacing={1}>
        <Grid item xs={12} >
            <div className="banner">
                <div className="banner_search">
                {showSearch && <Search />}
                <Button onClick={()=> setShowSearch(!showSearch)} className="banner_searchButton" variant="outlined">
                    {showSearch? "Hide" : "Search Dates"}
                </Button>
            </div>
            <div className="banner_info">
                <h1>Get out and stretch your imagination</h1>
                <h5>Plan a different kind of getaway to uncover the hidden gems near you</h5>
                <Button onClick={()=> history.push("/search")} variant="outline" >Explore Nearby</Button>
            </div>
            </div>
        </Grid>
    </Grid>

        
    )
}

export default Banner;
