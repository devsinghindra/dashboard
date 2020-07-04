import React from 'react';
import './sidebar.scss';
import Child from './link';

function SideBar(){
    return(
        <div class="grid-sidebar">
            <div class="child-sidebar"></div>
            <div class="child-sidebar"><Child value={"Date"} link={"/dashboard"}/></div>
            <div class="child-sidebar"><Child value={"Overall"} link={"/dashboard/overall"}/></div>
            <div class="child-sidebar"><Child value={"Hashtag"} link={"/dashboard/hashtag"}/></div>
            <div class = "child-sidebar"></div>
        </div>
    )
}

export default SideBar;