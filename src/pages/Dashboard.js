import { ProjectCard } from "../components/ProjectCard"

function getProjects() {
    // TODO: return list of a user's projects
    return [<ProjectCard/>];
}

function Dashboard() {
    let projectList = getProjects().map((item,index) => {
        return <li key={index}>{item}</li>
    })
    
    return (
        <>
            <h1>Dashboard</h1>
            {projectList}
        </>
    );
}

export default Dashboard;