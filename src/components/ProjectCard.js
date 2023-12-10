import { useNavigate } from "react-router-dom";

function ProjectCard({ name, projectID, firstName, lastName, desc }) {
    const navigate = useNavigate();

    const openProject = async (id) => {
        if(id === -1) {
            navigate("/new-project");
        } else {
            try {
                navigate("/project/" + id);
                console.log("Project opened!");
            } catch(err) {
                console.error("Could not open project: " + err);
            }
        }
    };

    return (
        <div className="projectCard" onClick={() => openProject(projectID)}>
            <h1>{name}</h1>
            {(firstName+lastName !== "") ? <h4>Created by: {firstName} {lastName}</h4> : <div></div>}
            <p>{desc}</p>
        </div>
    );
}

export {
    ProjectCard
};