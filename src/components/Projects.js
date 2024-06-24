import { Container ,Tab ,Row,Col,Nav} from "react-bootstrap";
import {ProjectCard} from "./ProjectCard";
import projImg1 from '../images/img/projImg1.png';
import projImg2 from '../images/img/projImg1.png';
import projImg3 from '../images/img/projImg1.png';

export const Projects = () => {
    
    const projects = [    {
        title: "Lernen",
        description: "Learning Website",
        imgUrl: projImg1,
      },
      {
        title: "Engineering Info Dashboard",
        description: "Dashboard of Engineering information",
        imgUrl: projImg2,
      },
      {
        title: "Portfolio",
        description: "Personal Portfolio using react",
        imgUrl: projImg3,
      },
      {
        title: "Blogging Website",
        description: "Blogging website using react",
        imgUrl: projImg1,
      },
      {
        title: "LMS Portal",
        description: "Full stack development",
        imgUrl: projImg2,
      },
      {
        title: "Task Tracker",
        description: "Design & Development",
        imgUrl: projImg3,
      },
    ];
  
    
    return(
        <section className="project" id='project'>
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>Discover my portfolio, highlighting diverse projects that blend creativity with technical excellence. Each piece reflects my dedication to crafting impactful digital solutions.</p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Tab 3</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            projects.map((project, index) => {
                                            return (
                                                <ProjectCard
                                                    key={index}
                                                    {...project}
                                                />
                                            )
                            })
                        }
                                    </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>OOPS! It's Empty</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>OOPS! It's Empty</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              
                </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={'../images/img/banner-bg.jpg'}></img>

        </section>
    )
}