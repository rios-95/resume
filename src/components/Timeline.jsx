import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { Container, Badge } from "reactstrap";
import "react-vertical-timeline-component/style.min.css";

const styles = {
  default: { color: "var(--dark)" },
  indigo: { boxShadow: "0 -3px 0 var(--indigo)" },
  blue: { boxShadow: "0 -3px 0 rgb(33, 150, 243)" },
  green: { boxShadow: "0 -3px 0 var(--green)" },
  orange: { boxShadow: "0 -3px 0 var(--orange)" },
  danger: { boxShadow: "0 -3px 0 var(--danger)" },
};
const iconStyles = {
  default: { color: "var(--dark)" },
  blue: { background: "rgb(33, 150, 243)", color: "#fff"},
  green: { background: "var(--green)", color: "#fff"},
  orange: { background: "var(--orange)", color: "#fff"},
  indigo: { background: "var(--indigo)", color: "#fff"},
  danger: { background: "var(--danger)", color: "#fff"},
};
const arrowStyles = {
  default: { borderRight: "7px solid  white" },
};

const cards = [
  {
    title: "Nacimiento",
    subtitle: "CABA",
    text:
      "Dato de color: el periodista y relator Osvaldo Príncipi cumple el mismo día",
    date: "14/12/1995",
    icon: "fa fa-birthday-cake fa-lg",
    style: "indigo",
  },
  {
    title: "Proyecto final",
		icon: "fa fa-code fa-lg",
    subtitle: "EET N°1 de El Talar, Tigre",
    text:"Diseño y desarrollo de un sistema para la gestión de base de datos de alumnos con interfaz web.",
    date: "Abril - Nov 2014",
    style: "blue",
    badges: ["WAMP", "MySQL", "PhP 5", "HTML", "CSS"],
  },{
		title: "Egreso de la técnica",
    subtitle: "Técnico en informática personal y profesional",
    text: "Me egresé de la EET N°1 con un promedio de 8,66. En este punto ya sabía cuál iba a ser mi área profesional ;)",
    date: "2014",
    style: "blue",
    icon: "fa fa-graduation-cap fa-lg",
  },{
		title: "Ingreso a Ingeniería",
    subtitle: "UTN FRD",
    text: "Realicé el curso de ingreso anual para las carreras de ingeniería.",
    date: "2015",
    style: "green",
    icon: "fa fa-university fa-lg",
  },{
		title: "Ingeniería en Sistemas de Información",
    subtitle: "UTN FRD",
    text: "Cursé los primeros años de la carrera en UTN FRD (Campana), luego realicé un pase de regional a FRBA (CABA) donde curso actualmente el 4to año de la carrera.",
    date: "Abril 2016 - Actualidad",
    style: "green",
    icon: "fa fa-university fa-lg",
  },{
		title: "Desarrollador web fullstack",
    subtitle: "ITPort",
    text: "En mi primer trabajo como desarrollador me desempeñé manteniendo y desarrollando sistemas con PhP 7, jQuery y MySQL. Actualmente trabajo hace un año con ReactJS y Express.",
    date: "Abril 2018 - Actualidad",
		icon: "fa fa-briefcase fa-lg",
    style: "orange",
		badges:["PhP 7","Codeigniter","MySQL","JS","ReactJS","Express"]
  },{
		title: "Seguridad Informática",
    subtitle: "Cursos - Libros - Conferencias",
    text: "Hace un tiempo (por una conferencia en el CNEISI 2017) me empezó a interesar este área. Leí El rastro digital del delito (InfoLab) sobre forensia digital y actualmente en mis ratos libres hago cursos sobre seguridad en el desarrollo y pentesting.",
    date: "Actualidad",
		icon: "fa fa-briefcase fa-lg",
    style: "danger",
		badges:["Forensia","Pentesting"]
  }
];
const Timeline = () => {
  return (
    <Container>
        <VerticalTimeline>
          {cards.map((card, idx) => {
            return (
              <VerticalTimelineElement
                key={idx}
                className="vertical-timeline-element--work"
                contentStyle={styles[card.style]}
                iconStyle={iconStyles[card.style] ?? iconStyles.default}
                contentArrowStyle={arrowStyles[card.style] ?? arrowStyles.default}
                date={card.date}
                icon={
                  <i className={card.icon} style={{margin: 0, position: "absolute",top: "50%",transform:"translateY(-50%) translateX(-50%)"}}></i>
                }
              >
								<div style={{textAlign:"left"}}>
									{card.badges ?
										card.badges.map((b) => <Badge color="secondary mr-2 " pill>{b} </Badge>)
										: 
										null
									}
								</div>

                <h3 className="vertical-timeline-element-title">
                  {card.title ?? ""}
                </h3>
                <h4 className={"vertical-timeline-element-subtitle text-"+card.style}>
                  {card.subtitle ?? ""}
                </h4>
                <p>{card.text ?? ""}</p>
              </VerticalTimelineElement>
            );
          })}
          <VerticalTimelineElement
            iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
            icon={<i className="fa fa-chevron-down fa-lg" style={{marginTop:"30%"}}></i>}
          />
        </VerticalTimeline>
    </Container>
  );
};

export default Timeline;
