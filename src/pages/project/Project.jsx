import React from 'react';
import { useParams } from 'react-router-dom';
import Nav from "../../components/nav/Nav";
import Window from "../../components/window/Window";
import { projects } from "../../data";

const Project = () => {
    let params = useParams();
    let projectDetails = projects.filter(project => project.id === params.id ? project : null)

    let listProjectDetails = projectDetails.map((item, i) => {
        // let { id, img, link, title, description } = item

        return (
            <>
            <Nav />
            <Window
                {...item}
                key={i}
            />
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