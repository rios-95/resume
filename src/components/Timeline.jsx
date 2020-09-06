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
      "Dato de color: en el mismo año se estrenaba la primer película de Toy Story",
    date: "14/12/1995",
    icon: "fa fa-birthday-cake fa-lg",
    style: "indigo",
  },
  {
    title: "Proyecto final",
		icon: "fa fa-code fa-lg",
    subtitle: "EET N°1 de El Talar, Tigre",
    text:"Participé activamente en el diseño y desarrollo de un sistema para la gestión de base de datos de alumnos con interfaz web.",
    date: "Abril - Nov 2014",
    style: "blue",
    badges: ["WAMP", "MySQL", "PhP 5", "HTML", "CSS"],
  },{
		title: "Egreso de la técnica",
    subtitle: "Técnico en informática personal y profesional",
    text: "Egresé de la EET N°1 con un promedio de 8,66. Para este punto descubrí cuál sería mi área de interés profesional :)",
    date: "Dic 2014",
    style: "blue",
    icon: "fa fa-graduation-cap fa-lg",
  },{
		title: "Ineniería en Sistemas de Información",
    subtitle: "UTN FRD",
    text: "Realicé durante 2015 el curso de ingreso anual para las carreras de ingeniería y cursé los primeros años de la carrera en UTN FRD (Campana)",
    date: "2015 - 2019",
    style: "green",
    icon: "fa fa-university fa-lg",
  },{
		title: "Primer trabajo",
    subtitle: "ITPort",
    text: "Me desempeño como desarrollador fullstack en el mantenimiento y desarrollo de sistemas web / Restful. Con los últimos proyectos profundicé mis conocimientos en React y Express.",
    date: "Abril 2018 - Actualidad",
		icon: "fa fa-briefcase fa-lg",
    style: "orange",
		badges:["PhP 7","Codeigniter","MySQL","JS","ReactJS","Express"]
  },{
		title: "Pase de regional",
    subtitle: "UTN FRBA",
    text: "Decidí hacer un cambio de regional en búsqueda de nuevas experiencias y oportunidades: actualmente curso el 4to año de la carrera en la UTN FRBA (CABA)",
    date: "Marzo 2020 - Actualidad",
    style: "green",
    icon: "fa fa-university fa-lg",
  },{
		title: "Siguiente desafío",
    subtitle: "Seguridad informática",
    text: "Me interesa especializarme en esta área. Inicié leyendo un libro sobre forensia digital (InfoLab) y en mis ratos libres realizo cursos sobre seguridad en desarrollo y pentesting",
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
