
import react, {useState} from 'react';

import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import React from "react";
import {BASE_URL} from "../../config";
import {faCaretDown} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";



const DROPDOWN =(props)=>{
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(prevState => !prevState);

    return(
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle caret>

            </DropdownToggle>
            <DropdownMenu>
                <DropdownItem header>Links Used</DropdownItem>
                <DropdownItem><a href="https://developers.themoviedb.org/3/trending/get-trending">Trendings</a></DropdownItem>
                <DropdownItem divider />
                <DropdownItem><a href="https://developers.themoviedb.org/3/movie/now_playing">Now Playing</a></DropdownItem>
                <DropdownItem divider />
                <DropdownItem><a href="https://developers.themoviedb.org/3/movie/popular">Popular</a></DropdownItem>

            </DropdownMenu>
        </Dropdown>
    )
}
export default DROPDOWN;
