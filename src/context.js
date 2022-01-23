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
        imageUrl: "HnCImageCard",
        backgroundcolor: "rgba(170, 200, 30, 0.6)",
      },
      {
        id: 2,
        title: "Botson",
        excerpt:
          "Our flagship event, BOTSON, is a 2-day workshop that trains the participants in making a fully functional bot themselves.",
        body: "Lorem ipsum dolor sit amet",
        imageUrl:
          "https://lh3.googleusercontent.com/VfZ5DXOioERKfCVwH_G4MT7XKcCJUJr_ciGcGQgE2TkBwXCLVOOmPTbTUSfBFdh1bnPcivGnz_guj6FOgTCS2k4CW8MHcreNAfh6mXg9uPvzNFiRSFurKPiEGL5dUs0AA3lF91p-QDKC7pe0O0h9nni0oyOlu19TgRgiFLxct4Oibe7wz5GYMdieeVd-aeiQ7uRR-rJM8QgNqpccTgshdY7DeIMd0ktlWIF_cfrbhmVy7l2OLA756adWrheUTk7BvN-ozwhYHmbplLsreXAIKTjYjFYaKMOpjEXsc1CIyD8eYjkWxeTjbSm4oHmHcDYFgFIO9RzxnEB_lFCePqtO0dhIrUPAr9GAwk3bv6jRuE1zrMPp969X1TQ-HXW_q-UADV_GeSfKiXY6X1U0SvXKxAupcBl2aMgGnaSdBdaZb6SSqu253DQ4J67OoxESDb0Z7SQaDRdimD_W1z6mL3NiWGTx32XLmsNYRxJpll1pk-abajhh91fWZStkxLmKlG57QQlifKv5nVlPpXdCWMxebT_Qu1rzyG96ZYTIhM0o59pKDgb6KCCloVxsem_-txlC-JFAN-aD1s7jyDw0dEt1ybkEzLdzGbbEodFykBLSVV0JM1CD0G8YiwJJNQdxd8nTLb7xOBapa_3QQj-39XBO06wrX2HbwYJhU335H61PrEoFvJAetfEejmx_BFrOKLgMbrSojXyFjPEe9fZ2y64GBv2G=w327-h266-no?authuser=0",
        backgroundcolor: "rgba(160, 70, 180, 0.6)",
      },

      {
        id: 3,
        title: "IETalks",
        excerpt:
          " IETalks are webinars in which a highly trained professional speaks regarding the working of the enormous industrial world and its nuances",
        body: "",
        imageUrl:
          "https://lh3.googleusercontent.com/vjnkEb3HydPHkoI6635YlHE89xWLnJK9ENaj3T6cggEnFfExN_Q7ON8yVW910O84IGgXYva3LskgQ2u4ihX49_U3Ys_AGxxcy3jdHopCu6fIKIabBKLN0hbKGIM1YgPI_PdNdcA0o0spx0Tp3i1y8iXdLebJg87Taa0W6S8OZXs9FSP9eigkh2qS8WTuVLHOM9VHbzuZaSiu8TDr15xvevZ6KTKv59eDkVEtJIk-GXEK0wBXbgx9e7ADv6yRYMC67oJLzLTAq6d91jgQYY0QhJFiABqp8E1iImrjeVsRzghKTIWHJptcv34FRVQ4Jde4DD9IeOmHq5xLRtCePHdt9ZQP-i8iCii2T1ysHn41Q22okiMD78uNStye7ngYQ_yLHTkU6yKAoCmVtFYSTLyQaBcpB7VxPLRfPcT5IWCvV7QsKnjgiudlBgbxsqLy-PyYfaxXtwTetvQyYih2BIvz6DTMZL14Bk2oOJ-ueJmpwKqB8aSC_d9Odc7EeAycx0hJuuHhXjm3p02j2mwS8vU-VXCI7FmhRWG9c4vSdqPuW9TSiVYTLK5LIMjSm31TPMnT9l6i7gvQ9VGNSwvtU5y3NL-c00eUnHgZEKwldc4vmRur0TQkSk6Q04RcI8GNwriRVNLkIMNfp9bMRy4ANhSaKeoaybr5vk7GDjnvtsnSRIdtcMsa04cWukSJCxVhCVP1To7dhOeRUhp0mU_15yJpHENq=w1024-h947-no?authuser=0",
        backgroundcolor: "rgba(34, 187, 224, 0.6)",
      },
      {
        id: 4,
        title: "Workshops",
        excerpt:
          "Our workshop aims to teach participants the concepts of a subject through practical demonstrations by an expert in the domain",
        body: "",
        imageUrl:
          "https://lh3.googleusercontent.com/TXmAZMlDFwr-LH2sfRlMf2yfkYO4yWZOW-cQoaHsirp6aw0GwZa_gWpZsefERdjeNIBpeXHGmCzLt-dAdd6bFkZodkn6cNGPZ2YEOXb_6uG5m87H3nneIE6q3fZTnUt6C-w-lXs-kF1etKmlAhxqmGOx0ZcjH1OjGZYIb_NyAHdfcPQSIUPeiyzGEt1vFWRQRZRkrxPNVnszSDLIyagLBAGEzSKIYKLI5KhlgSkcJQ8bMpD7maWwQ2WkcTom0pv_QU7jEoJSy7OAOmtH02sjxUUv_u-_iL_VztLD-ReoaLFA-GUUELyW25aYUyJTJZmczYtq5AAaCnf9eqtHBsdqo5tCGMfayQCjekbr0nVTWEihBw-aXlB66ZJ-9m2UrGHxGppkDNSBcqEfbgqqZ0nkruaBgOnF1HsPB4vZCAbZE_CpBIZWDh3UjKIDV18qGmKAiHYGRWUq0kSbckoZB6dL1wWPDPRyK3swaP681gUpNVXn9308vdwQOdHv2dYZkK-7nE67JMnFO5ZlX3IngoUxv3Gt12zUR3UfZxsFT-idgNWdzI9ldmpS5OFZtLe-ZcRHStKG-x9iPD1rkla6MVCxjS1VDfMG7u2ATQKAErWLS4teEwUsS2jRMAax-M4S9gGer6tQPuBqWYBeyXZ9j3FsWHpn-PJ5WQHR5Y7T7fIusrXsETziJNywTC6s3b5BuY351URnQag0D2U2eLGGdQmUosGh=w2275-h1680-no?authuser=0",
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
        name: "Shresth Agrawal",
        position: "Head of Public Relations",
        imgUrl:
          "https://lh3.googleusercontent.com/sWAAuxk5ePadJRBHea7reiTu4Cwb5881ks7_evMrjo6xWPyOS53THdMKMxvwMuU3kOqJXmzBxIZvqItkOkGvZs6ao3hG-mVh5gIWof784xrVM0R2BcoswOt0zDPhzVsSLjUBO05uofFCzA0jcoEoQwPFdeL6x8MDdLsRaTZ4PcDnvZVzJh-0mSuEZu7b4zoQDjivLv3Z7VcM4cXa-09-sGsqsTvat3pDZAhw-ll4bEnPncLi8NfE9mCgK8cm5BVVfPGtFQWy-A8OccNNix6_H4osGAiaejrt3ilytHIoVHZjI8o_oxtctfPTwILhd4CwvXbgfU6_eaQpK7tjj8_x2Vb6dJdPr_CBV96agUdbgQjtqdIz87zARKXXX6wcWgMTaNR4yXiDPQBC7GLveMeA9-cVkn3rdj8rdiGUTdshUtDh8prFETyE26EZtQZyK6uIxo91FWR24qYKGxiQzaTjd_tVmRUp4VT5fOSLi3PjYK3IO-yWyrqnp0loVWwU22RPjOteEEER9NUrR41iXLAVNRsbn-yG6f_xdRNVLBVTJtgBBZxt7yBmiaAo0clyn43Tn5GKO4cSCL00HWC_6uxiH9ut0f2uVLpAgwwSrmcijODFrfX5Adj9XrZtnv8LiLfpQh-3v9zH0WFlqbDySqBEpmob4dbNTX7CVQm1AFPgBhP8dlxMvXSDUe09GFHuASROws6bfRZ-pkDQ8cFAzPydzGu0=w583-h540-no?authuser=0",
      },
      {
        id: 2,
        name: "Pratyaksh Jain",
        position: "Vice Chairperson",
        imgUrl:
          "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      },
      {
        id: 3,
        name: "Sanskriti Sharma",
        position: "Secretarty",
        imgUrl:
          "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      },
      {
        id: 4,
        name: "Siddharth Sadashiv",
        position: "Treasurer",
        imgUrl:
          "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      },
      {
        id: 5,
        name: "Preet Jha",
        position: "Head of Creatives",
        imgUrl:
          "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      },
      {
        id: 6,
        name: "Shresth Agrawal",
        position: "Head of Public Relations",
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
