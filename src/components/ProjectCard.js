import { useNavigate } from "react-router-dom";

function ProjectCard({ name, projectID, firstName, lastName, desc }) {
    const navigate = useNavigate();

    const openProject = async (id) => {
        try {
        navigate("/project/" + id);
        console.log("Project opened!");
        } catch(err) {
            console.error("Could not open project: " + err);
        }
    };

    return (
        <div className="projectCard" onClick={() => openProject(projectID)}>
            <h1>{name}</h1>
            <h4>Created by: {firstName} {lastName}</h4>
            <p>{desc}</p>
        </div>
    );
}

export {
    ProjectCard
};