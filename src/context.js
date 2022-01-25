import React, { Component } from "react";
/* import BotsonEventCard from "./Assets/Images/BotsonEventCard.JPG";
import HnCEventCard from "./Assets/Images/HnCEventCard.JPG";
import IETalksEventCard from "./Assets/Images/IETalksEventCard.JPG";
import WorkshopEventCard from "./Assets/Images/WorkshopEventCard.JPG"; */
const Context = React.createContext();

export class Provider extends Component {
  state = {
    iet_events: [
      {
        id: 1,
        title: "Hack n' Code",
        excerpt:
          "Hack-n-Code is a high-speed hackathon, during which participants code a solution to a problem statement presented before them.",
        body: "Lorem ipsum dolor sit amet",
        imageUrl:
          "https://raw.githubusercontent.com/1DmntdMnky/ietmpstme/master/src/Assets/Images/HnCEventCard.JPG",
        backgroundcolor: "rgba(170, 200, 30, 0.6)",
      },
      {
        id: 2,
        title: "Botson",
        excerpt:
          "Our flagship event, BOTSON, is a 2-day workshop that trains the participants in making a fully functional bot themselves.",
        body: "Lorem ipsum dolor sit amet",
        imageUrl:
          "https://raw.githubusercontent.com/1DmntdMnky/ietmpstme/master/src/Assets/Images/BotsonEventCard.JPG",
        backgroundcolor: "rgba(160, 70, 180, 0.6)",
      },

      {
        id: 3,
        title: "IETalks",
        excerpt:
          "IETalks are webinars in which a highly trained professional speaks regarding the working of the enormous industrial world and its nuances",
        body: "",
        imageUrl:
          "https://raw.githubusercontent.com/1DmntdMnky/ietmpstme/master/src/Assets/Images/IETalksEventCard.JPG",
        backgroundcolor: "rgba(34, 187, 224, 0.6)",
      },
      {
        id: 4,
        title: "Workshops",
        excerpt:
          "Our workshop aims to teach participants the concepts of a subject through practical demonstrations by an expert in the domain",
        body: "",
        imageUrl:
          "https://raw.githubusercontent.com/1DmntdMnky/ietmpstme/master/src/Assets/Images/WorkshopEventCard.JPG",
        backgroundcolor: "rgba(255, 152, 80, 0.6)",
      },
    ],
    hnc_faqs: [
      {
        id: "One",
        question:
          "What level of coding should we know to take part in Hack-n-Code 5.0?",
        answer:
          "A very rudimentary understanding of programming, which includes the ability to establish and understand the technological limitations and feasibility, is the minimum requirement. As such, one can make use of pre-existing templates and resources provided by companies such as Wix, Wordpress, etc. to compensate for your lack of technical skills. The importance is on ideation and the ability to present a complete project.",
      },
      {
        id: "Two",
        question: "What sort of projects are we expected to come up with?",
        answer:
          "The participants shall be presented with a real world problem, and they are allowed to submit a feasible solution for the same in the form of any original project, such as a website, a game, an extension, etc.",
      },
      {
        id: "Three",
        question: "Who owns my project?",
        answer:
          "The team that develops the project is the owner of the project. We do encourage sharing of code with others in the community or making code open source but it is not required to participate in the event.",
      },
      {
        id: "Four",
        question: "How large can a team be?",
        answer: "You can have a maximum of 4 people on your team.",
      },
      {
        id: "Five",
        question: "Who can participate?",
        answer:
          "Anyone is welcome to participate in this event. While experience in coding and programming is a huge plus, teams will also need people with strong presentation skills and brilliant ideas. Whether this is your first hackathon, or you are an absolute veteran, all that we ask of you is that you are excited to learn about AI. We will provide workshops to help you gain any necessary skills, so don't be scared if you're a beginner! In addition, if you're a designer or business student, your design and pitching skills are also very valuable!",
      },

      {
        id: "Six",
        question:
          "How many problems will we have to solve, and how much time will we get?",
        answer:
          "One problem statement, and 16 hours to come up with a solution.",
      },
      {
        id: "Seven",
        question: "How much will it cost?",
        answer: "The event is entirely free!",
      },
      {
        id: "Eight",
        question: "Will I get a certificate for participating?",
        answer: "Yes.",
      },
      {
        id: "Nine",
        question: "When are the entries due?",
        answer: "By X p.m. on Z March, day.",
      },
      {
        id: "Ten",
        question:
          "Can we submit our entries before the time they are due, and leave?",
        answer: "Yes.",
      },
      {
        id: "Eleven",
        question: "What programming language can we use?",
        answer: "All sorts of programming languages and domains are open.",
      },
      {
        id: "Twelve",
        question: "Who can participate?",
        answer:
          "Anyone is welcome to participate in this event. While experience in coding and programming is a huge plus, teams will also need people with strong presentation skills and brilliant ideas.",
      },
      {
        id: "Thirteen",
        question: "Who owns my project?",
        answer:
          "The team that develops the project is the owner of the project. We do encourage sharing of code with others in the community or making code open source but it is not required to participate in the event.",
      },
      {
        id: "Fourteen",
        question: "Will I be getting a certificate for participation?",
        answer: "Yes.",
      },
      {
        id: "Fifteen",
        question: "How much will it cost?",
        answer: "The event is entirely free!",
      },
      {
        id: "Sixteen",
        question:
          "I'm a beginner to coding/AI/hackathons. Should I participate?",
        answer:
          "Yes! We welcome hackers from all backgrounds. Whether this is your first hackathon, or you are an absolute veteran, all that we ask of you is that you are excited to learn about AI. We will provide workshops to help you gain any necessary skills, so don't be scared if you're a beginner! In addition, if you’re a designer or business student, your design and pitching skills are also very valuable!",
      },
      {
        id: "Seventeen",
        question: "What if I don't know how to code?",
        answer:
          "No problem! Come to Hack-n-Code to learn a new skill and meet people. This is a brilliant chance to learn alongside many other driven hackers!",
      },
      {
        id: "Eighteen",
        question: "How large can my team be?",
        answer: "You can have a maximum of X people on your team.",
      },
    ],
    hnc_images: [
      {
        id: 1,
        imgUrl:
          "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      },
      {
        id: 2,
        imgUrl:
          "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      },
      {
        id: 3,
        imgUrl:
          "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      },
    ],
    hnc_team: [
      {
        id: 1,
        name: "Rashi Jain",
        position: "Chairperson",
        imgUrl:
          "https://raw.githubusercontent.com/1DmntdMnky/ietmpstme/master/src/Assets/Images/CP_HNC_Team.jpg",
      },
      {
        id: 2,
        name: "Pratyaksh Jain",
        position: "Vice Chairperson",
        imgUrl:
          "https://raw.githubusercontent.com/1DmntdMnky/ietmpstme/master/src/Assets/Images/VCP_HNC_Team.jpg",
      },
      {
        id: 3,
        name: "Sanskriti Sharma",
        position: "Secretarty",
        imgUrl:
          "https://raw.githubusercontent.com/1DmntdMnky/ietmpstme/master/src/Assets/Images/Secretary_HNC_Team.jpg",
      },
      {
        id: 4,
        name: "Siddharth Sadashiv",
        position: "Treasurer",
        imgUrl:
          "https://raw.githubusercontent.com/1DmntdMnky/ietmpstme/master/src/Assets/Images/Treasurer_HNC_Team.jpg",
      },
      {
        id: 5,
        name: "Shresth Agrawal",
        position: "Head of Public Relations",
        imgUrl:
          "https://raw.githubusercontent.com/1DmntdMnky/ietmpstme/master/src/Assets/Images/HOPR_HNC_Team.jpg",
      },
      {
        id: 6,
        name: "Preet Jha",
        position: "Head of Creatives",
        imgUrl:
          "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      },
    ],
  };
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}
export const Consumer = Context.Consumer;
