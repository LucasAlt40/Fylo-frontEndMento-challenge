/* eslint-disable */
import { Header } from "./components/Header/index";
import { Infos } from "./components/Infos/index";
import { Started } from "./components/Started/index";
import { StayProductive } from "./components/StayProductive";
import { Comments } from "./components/Comments";
import { GetEarly } from "./components/GetEarly";
import { Footer } from "./components/Footer";

import iconFiles from "./assets/icon-access-anywhere.svg";
import iconSecurity from "./assets/icon-security.svg";
import iconCollaboration from "./assets/icon-collaboration.svg";
import iconAnyFile from "./assets/icon-any-file.svg";
import "./app.css";

import profile1 from "./assets/profile1.jpeg";
import profile2 from "./assets/profile2.jpg";
import profile3 from "./assets/profile3.jpg";
import iconComments from "./assets/bg-quotes.png";

function App() {
  return (
    <>
      <Header />
      <Started />
      <div className="container-infos">
        <Infos
          imgSrc={iconFiles}
          title="Acess your files, anywhere"
          info="The abilility to use a smartphone, tablet, or computer to acess your
        account means your files follow you everywhere"
        />
        <Infos
          imgSrc={iconSecurity}
          title="Security you can trust"
          info="2-factor authentication and user-coontrolled encryption
        are just a couple of the security features we allow
        to help secure your files."
        />
        <Infos
          imgSrc={iconCollaboration}
          title="Real-time collaboration"
          info="Securely share files and folders with friends, family
        and colleagues for live collaboration. No email
        attachments required."
        />
        <Infos
          imgSrc={iconAnyFile}
          title="Store any type of file"
          info="Whether you're sharing holidays photos or work documents,
        Fylo has you covered allowing for all files types to be securely
        stored and shared."
        />
      </div>

      <StayProductive />

      
      <img className="quotes" src={iconComments} alt="quotes" />
      <div className="comments-container">
        <Comments profileImg={profile1} profileName="Tony Stark" />
        <Comments profileImg={profile2} profileName="Bruce Wayne" />
        <Comments profileImg={profile3} profileName="Diana Prince" />
      </div>

      <GetEarly />
      <Footer />
    </>
  );
}

export default App;
