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
          <Col sm="12" md="8" lg="8">
            <Card className="verticallyCentered">
              <CardBody>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi,
                veniam. Provident, quaerat officiis dolor illo debitis error
                vitae accusamus iure qui unde explicabo officia ea velit
                voluptate incidunt odio iste?
              </CardBody>
            </Card>
          </Col>
          <Col sm="12" md="4" lg="4">
            <img
              src={require("../assets/img/brian.jpg")}
              alt="Brian"
              style={profilePhotoStyles}
            />
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
                  text="Me desempeño en el mantenimiento y desarrollo de sistemas con interfaz web. Con los últimos proyectos profundicé mis conocimientos en React y Express."
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
