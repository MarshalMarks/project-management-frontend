import { ProjectCard } from "../components/ProjectCard"

function getProjects() {
    // TODO: return list of a user's projects
    return [
        <ProjectCard name="Project 1" projectID={1} firstName="Clay" lastName="Marks" desc="The first project ever made"/>,
        <ProjectCard name="Project 2" projectID={2} firstName="Slay" lastName="Marx" desc="The second project ever made"/>,
        <ProjectCard name="Project 3" projectID={3} firstName="Sway" lastName="Sharks" desc="The third project ever made"/>,
        <ProjectCard name="Project 4" projectID={4} firstName="May" lastName="Darks" desc="The fourth project ever made"/>
    ];
}

function Dashboard() {
    let projectList = getProjects().map((item,index) => {
        return <li key={index}>{item}</li>
    })
    
    return (
        <div className="cards">
            {projectList}
        </div>
    );
}

export default Dashboard;