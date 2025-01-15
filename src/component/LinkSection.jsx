import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const profileIcons = [
  {
    id: 1,
    name: "GitHub",
    icon: faGithub,
    link: "https://github.com/MALIKKHUBAIB1",
  },
  {
    id: 4,
    name: "LeetCode",
    icon: "leetcode",
    link: "https://leetcode.com/u/khubaibtech",
  },
  {
    id: 2,
    name: "LinkedIn",
    icon: faLinkedin,
    link: "https://www.linkedin.com/in/malik-abdur-raheem-403540252",
  },
  {
    id: 3,
    name: "Twitter",
    icon: faTwitter,
    link: "https://x.com/khubaiben",
  },
];

function LinkSection() {
  return (
    <div className="flex flex-wrap justify-start gap-4 mt-6">
      {profileIcons.map((item) => (
        <a
          className="p-2 hover:scale-105 transition-transform"
          key={item.id}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {item.icon === "leetcode" ? (
            <img
              src="https://cdn.iconscout.com/icon/free/png-512/free-leetcode-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-vol-4-pack-logos-icons-2944960.png?f=webp&w=256"
              alt="LeetCode"
              className="w-8 h-8"
            />
          ) : (
            <FontAwesomeIcon icon={item.icon} size="2x" />
          )}
        </a>
      ))}
    </div>
  );
}

export default LinkSection;
