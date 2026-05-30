import Banner from "./components/banner";
import ChooseStudyNook from "./components/choose-study-nook";
import WhatStudentSay from "./components/what-students-say";
import RoomPage from "./room-page/page";



export const metadata = {
  title: "StudyNook – Home",
};

export default function Home() {
  return (
      <div>
        <Banner></Banner>
        <RoomPage></RoomPage>
        <ChooseStudyNook></ChooseStudyNook>
        <WhatStudentSay></WhatStudentSay>
      </div>
  );
}
