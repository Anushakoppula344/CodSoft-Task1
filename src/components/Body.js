import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from '../images/img/header-img.jpeg';
import { useState,useEffect } from "react";

export const Body = () => {

    const [loopNum,setLoopNum] = useState(0);
    const [isDeleting,setIsDeleting] = useState(false);
    const toRotate = ["web Developer","MERN Stack Developer","UI/UX Designer"];
    const [text,setText] = useState('');
    const period = 2000;
    const [delta,setDelta] = useState(300 - Math.random()*100);

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        },delta)

        return () => { clearInterval(ticker)};
    },[text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0,text.length-1) : fullText.substring(0,text.length+1);

        setText(updatedText);

        if(isDeleting){
            setDelta(prevDelta => prevDelta/2)
        }

        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        }
        else if(isDeleting && updatedText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum+1);
            setDelta(500);
        }
    }

    return (
        <section class = "banner" id='home'>
            <Container>
                <Row className = "align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>{`Hi I'm a `}<span className="wrap">{text}</span></h1>
                        <p>I'm a passionate Full Stack Developer specializing in the MERN stack and Java. With a strong foundation in both front-end and back-end development, I create dynamic, user-friendly web applications. My expertise in UI/UX design ensures that every project not only functions seamlessly but also provides an exceptional user experience.</p>
                        <button onClick={()=> console.log('connect')}>Let's connect <ArrowRightCircle size={25}/></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="header img"/>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}