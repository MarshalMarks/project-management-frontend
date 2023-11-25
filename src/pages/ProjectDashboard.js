import { useParams } from "react-router-dom";
import axios from "axios";

function ProjectDashboard() {
    const { projectId } = useParams();

    return (
        <div>
            <h1>Project ID: {projectId}</h1>
        </div>
    );
}

export default ProjectDashboard;