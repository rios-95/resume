import React from "react";
import { Container, Row, Col, CardHeader, Card, CardBody } from "reactstrap";

// const imgStyles = {
//   position: "relative",
//   width: "100%",
// };
const profilePhotoStyles = {
  maxWidth: 200,
  borderRadius: 40,
};
const Main = () => {
  const InfoItem = ({ title, subtitle, text, date }) => (
    <div>
      <label class="dateLabel">{date}</label>
      <h5>{title}</h5>
      <p class="subtitleItem">{subtitle}</p>
      <p>{text}</p>
    </div>
  );

  return (
    <React.Fragment>
      <Container>
        {/* <Row>
          <Col xs="12" sm="12" md={{ size: 8, order: 1, offset: 2 }}>
            <img
              src={require("../assets/img/Brian_profile_workshop_v2.png")}
              alt="Brian"
              style={imgStyles}
            />
          </Col>
        </Row> */}
        <Row>
          <Col sm="12" md="4" lg="4">
            <img
              src={require("../assets/img/brian.jpg")}
              alt="Brian"
              style={profilePhotoStyles}
              className="verticallyCentered"
            />
          </Col>
          <Col sm="12" md="8" lg="8">
            <Card className="verticallyCentered">
              <CardBody>
                ¡Hola!, bienvenid@ a mi página de presentación.<br/> 
                Mi nombre es Brian Rios, soy estudiante de 4to año de Ingeniería en Sistemas de Información 
                en la UTN y me desempeño como desarrollador de software hace casi tres años. 
                Desde la secundaria mantengo contacto con la informática y la programación, y actualmente tengo
                un gran interés en especializarme en seguridad informática.
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col sm="12" md="12">
            <Card className="infoCard">
              <CardHeader>
                <label className="iconLabel">
                  <i className="fa fa-graduation-cap fa-lg"></i>
                </label>
                <h5>Educación</h5>
              </CardHeader>
              <CardBody>
                <InfoItem
                  title="Secundaria técnica"
                  date="2014"
                  text="Técnico en informática personal y profesional"
                  subtitle="EET N°1 - El Talar, Tigre"
                />
                <InfoItem
                  title="Universitaria"
                  date="2016 - Actualidad"
                  subtitle="UTN FRBA"
                  text="Ingeniería en Sistemas de Información"
                />
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col sm="12" md="12">
            <Card className="infoCard">
              <CardHeader>
                <label className="iconLabel">
                  <i className="fa fa-code fa-lg"></i>
                </label>
                <h5>Cursos</h5>
              </CardHeader>
              <CardBody>
                <InfoItem
                  title="Desarrollo web HTML, CSS, JS (jQuery)"
                  date="Abril - Agosto 2018"
                  subtitle="UTN FRD"
                />
                <InfoItem
                  title="Introducción al análisis de malware en windows"
                  date="2020"
                  subtitle="Miríadax - UTN FRBA"
                  text="Curso introductorio de 20hs"
                />
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col sm="12" md="12">
            <Card className="infoCard">
              <CardHeader>
                <label className="iconLabel">
                  <i className="fa fa-briefcase fa-lg"></i>
                </label>
                <h5>Experiencia laboral</h5>
              </CardHeader>
              <CardBody>
                <InfoItem
                  title="Fullstack developer"
                  date="2018 - Actualidad"
                  subtitle="ITPort"
                  text="En mis primeras tareas realicé el mantenimiento y desarrollo de nuevos módulos
                  sobre sistemas con php sobre Codeigniter, MySql y jQuery.
                  Posteriormente me desempeñé en el desarrollo desde cero de sistemas con ReactJS y NodeJS"
                />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default Main;
