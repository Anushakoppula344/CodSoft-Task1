import { Container, Row ,Col} from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import circularBar1 from "../images/img/circular-bar1.png" ;
import circularBar2 from "../images/img/circuar-bar21.png" 
import bannerBg from '../images/img/banner-bg.jpeg';


export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>Skills</h2>
                            <p>A showcase of my technical abilities and professional skills.
.</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={circularBar1} alt="Image"/>
                                    <h5>Web Development</h5>
                                </div>
                                <div className="item">
                                    <img src={circularBar2} alt="Image"/>
                                    <h5>MERN Stack Development</h5>
                                </div>
                                <div className="item">
                                    <img src={circularBar1} alt="Image"/>
                                    <h5>Java Development</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left"  src={bannerBg}/>
        </section>
      )
}