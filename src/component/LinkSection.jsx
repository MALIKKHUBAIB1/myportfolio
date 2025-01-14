import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faGithub,
  faLinkedin,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const profileIcons = [
  {
    id: 1,
    name: "GitHub",
    icon: faGithub,
    link: "https://github.com/yourusername",
  },
  {
    id: 2,
    name: "LinkedIn",
    icon: faLinkedin,
    link: "https://www.linkedin.com/in/yourusername/",
  },
  {
    id: 3,
    name: "Twitter",
    icon: faTwitter,
    link: "https://twitter.com/yourusername",
  },
  {
    id: 4,
    name: "Instagram",
    icon: faInstagram,
    link: "https://instagram.com/yourusername",
  },
];

function LinkSection() {
  return (
    <div className="my-6">
      {profileIcons.map((item) => {
        return (
          <a
            className="m-4"
            key={item.id}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={item.icon} size="2x" />
          </a>
        );
      })}
    </div>
  );
}

export default LinkSection;
