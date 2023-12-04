import { LOREM_EPSUM } from "@/utility/constants";
import Image from "next/image";
import "./AboutBanner.scss";

export default function AboutBanner({ imageUrl }: { imageUrl: string }) {
  return (
    <div className="about-banner">
      <div className="left-section">
        <Image
          className="logo"
          src={imageUrl}
          alt="Company Logo"
          width={300}
          height={300}
        />
      </div>
      <div className="right-section">
        <div className="content">
          <p className="hello-world">Hello World</p>
          <h2 className="salutation">Welcome</h2>
          <p className="what-we-do">{LOREM_EPSUM}</p>
        </div>
      </div>
    </div>
  );
}
