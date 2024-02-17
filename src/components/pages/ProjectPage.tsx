import Contact from "../organs/Contact"
import AI from "../organs/ProjectsAI"
import IoT from "../organs/ProjectsIoT"
import RPA from "../organs/ProjectsRPA"
import Web from "../organs/ProjectsWeb"


const Projects = () => {
    return (
        <>
            <RPA />
            <Web />
            <AI />
            <IoT />
            <Contact />
        </>
    )
}

export default Projects