import React, { useState } from 'react';
import axios from 'axios';
import AuthorForm from "../AuthorForm";
import AuthorList from "../AuthorList";
// import Demo from '../Paper';


const Main = (props) => {
    const [authorList, setAuthorList] = useState([]);
    


    const removeFromDom = authorId => {
        setAuthorList(authorList.filter(author => author._id !== authorId));
    }

    return (
        <div>
            {/* <AuthorForm authorList = {authorList} setAuthorList= {setAuthorList}/> */}
            <AuthorList authorList = {authorList} setAuthorList= {setAuthorList} removeFromDom = {removeFromDom} />
            {/* <Demo /> */}
        </div>
    )

}

export default Main;