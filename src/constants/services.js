import React from "react"
import { FaCode, FaSketch, FaAndroid } from "react-icons/fa"
export default [
  {
    id: 1,
    icon: <FaCode className="service-icon" />,
    title: "web development",
    text: `Fully responsive web development with latest front-end, back-end and database of users choice. It includes aspects such as web design, web publishing, web programming, and database management.`,
  },
  {
    id: 2,
    icon: <FaSketch className="service-icon" />,
    title: "web design",
    text: `Website design that's perfect for your business or personal site. While every website is unique, you can usually get a feel for the approach taken during the design process.`,
  },
  {
    id: 3,
    icon: <FaAndroid className="service-icon" />,
    title: "app design",
    text: `App design encompasses both the user interface (UI) and user experience (UX). Designers are responsible for the overall style of the app, including things like the colour scheme, font selection, and the types of buttons and widgets the user will use.`,
  },
]
