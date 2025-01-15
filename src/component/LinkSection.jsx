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
    // Use the custom icon approach here
    icon: "leetcode", // Custom placeholder to signify this is a custom icon
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
    <div className="flex flex-wrap justify-start my-6">
      {profileIcons.map((item) => {
        return (
          <a
            className="m-3"
            key={item.id}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.icon === "leetcode" ? (
              // Custom LeetCode icon
              <img
                src="https://cdn.iconscout.com/icon/free/png-512/free-leetcode-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-vol-4-pack-logos-icons-2944960.png?f=webp&w=256"
                alt="LeetCode"
                className="w-8 h-8"
              />
            ) : (
              // FontAwesome Icons
              <FontAwesomeIcon icon={item.icon} size="2x" />
            )}
          </a>
        );
      })}
    </div>
  );
}

export default LinkSection;
