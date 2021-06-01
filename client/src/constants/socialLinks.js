import React from "react"
import {
  FaLinkedin,
  FaTwitterSquare,
  FaGithubSquare,
  FaFacebookSquare,
  FaStackOverflow,
} from "react-icons/fa"

const links = [
  {
    id: 1,
    icon: <FaLinkedin className="icon is-medium" title="LinkedIn" />,
    url: `https://www.linkedin.com/in/pashamakhilkumarreddy/`,
  },
  {
    id: 2,
    icon: <FaTwitterSquare className="icon is-medium" title="Twitter" />,
    url: `https://twitter.com/`,
  },
  {
    id: 3,
    icon: <FaGithubSquare className="icon is-medium" title="Github" />,
    url: `https://github.com/pashamakhilkumarreddy`,
  },
  {
    id: 4,
    icon: <FaFacebookSquare className="icon is-medium" title="Facebook" />,
    url: `https://www.facebook.com/`,
  },
  {
    id: 5,
    icon: <FaStackOverflow className="icon is-medium" title="StackOverflow" />,
    url: `https://stackoverflow.com/users/9811422/pasham-akhil-kumar-reddy`,
  },
]

export default links
