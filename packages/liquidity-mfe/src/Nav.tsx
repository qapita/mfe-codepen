import React from "react";
import { useNavigate } from "react-router-dom";


const TestNav = ({ link }: { link: string }) => {
    const navigate = useNavigate();
    const onClick = () => {
        navigate(`/${link}`, { relative: "path" })
    };
    return <div>
        <h1>{link}</h1>
        <button onClick={onClick}> Click Me </button> 
    </div>
}

export default TestNav;