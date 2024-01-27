import DiscordIcon from "assets/icons/DiscordIcon";
import GithubIcon from "assets/icons/GithubIcon";
import LinkedInLogo from "assets/icons/LinkedInLogo";
import Twitter from "assets/icons/Twitter";
import MobGithubIcon from "assets/icons/mobile/MobGithubIcon";
import MobTwitter from "assets/icons/mobile/MobTwitter";
import { isMediumScreen } from "../../utils/helpers";
import MobLinkedInLogo from "assets/icons/mobile/MobLinkedInLogo";
import MobDiscordIcon from "assets/icons/mobile/MobDiscordIcon";

export default function Footer() {
  return (
    <footer className="inline-flex pb-8 gap-4 justify-center z-10 items-center bg-inherit md:row-start-2 md:row-end-3 md:col-start-1 md:col-end-2 md:gap-0 md:bg-blue-primary">
      <a className="p-3 cursor-pointer">
        <span className="hidden md:block">
          <GithubIcon />
        </span>
        <span className="md:hidden block">
          <MobGithubIcon />
        </span>
      </a>
      <a className="p-3 cursor-pointer">
        <span className="hidden md:block">
          <Twitter />
        </span>
        <span className="md:hidden block">
          <MobTwitter />
        </span>
      </a>
      <a className="p-2 cursor-pointer">
        <span className="hidden md:block">
          <LinkedInLogo />
        </span>
        <span className="md:hidden block">
          <MobLinkedInLogo />
        </span>
      </a>
      <a className="p-2 cursor-pointer">
        <span className="hidden md:block">
          <DiscordIcon />
        </span>
        <span className="md:hidden block">
          <MobDiscordIcon />
        </span>
      </a>
    </footer>
  );
}
