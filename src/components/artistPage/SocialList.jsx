import TooltipSocial from "./TooltipSocial";

const SocialList = ({ socials }) => {
  console.log(socials);
  return (
    <>
      <ul className="social-list">
        {socials.map((social) => (
          <li key={social.link}>
            <a
              href={social.link}
              className={`btn social-icon ${social.channel}`}
            >
              {social.channel}
            </a>
          </li>
        ))}
      </ul>
      <div className="tooltip-wrapper">
        <button className="btn btn-add">Add links</button>
        <TooltipSocial />
      </div>
    </>
  );
};

export default SocialList;
