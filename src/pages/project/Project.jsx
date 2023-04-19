import React from 'react';
import { useParams } from 'react-router-dom';
import Nav from "../../components/nav/Nav";
import { projects } from "../../data";

const Project = ({ id, img, link, title, description }) => {
    let params = useParams();
    let projectDetails = projects.filter(project => project.id === params.id ? project : null)

    let listProjectDetails = projectDetails.map((item, i) => {
        let { id, img, link, title, description } = item

        return (
            <>
            <Nav />
            <p>{title}</p>
            <img src={img}/> 
            <p>{description}</p>
            </>
        )
    })

    return (
        <div>
            {listProjectDetails}
        </div>
    );
};

export default Project;