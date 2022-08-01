import React, { Suspense } from "react";
import Spinner from "../UI/Spinner/Spinner";
import Description from "../Landing/Description/Description";
import WhoSuits from "../Landing/WhoSuits/WhoSuits";
import WhatsBusiness from "../Landing/WhatsBusiness/WhatsBusiness";
import AboutBusiness from "../Landing/AboutBusiness/AboutBusiness";
import SecurityBusiness from "../Landing/SecurityBusiness/SecurityBusiness";
import FaqBusiness from "../Landing/FaqBusiness/FaqBusiness";
import ConnectionBusiness from "../Landing/СonnectionBusiness/ConnectionBusiness";
import Banner from "../UI/Banner/Banner";
import LevelBusiness from "../Landing/LevelBusiness/LevelBusiness";

export default function CryppoBusinessLanding(props) {
  return (
    <Suspense fallback={<Spinner />}>
      <div className="main">
        <Banner page="business" banner={props.banner} />
        <Description description={props.description} />
        <WhatsBusiness appIcon={props.appIcon} />
        <WhoSuits whoSuits={props.whoSuits} />
        <AboutBusiness about={props.about} />
        <SecurityBusiness security={props.security} />
        <ConnectionBusiness connectionList={props.connectionList} />
        <FaqBusiness faq={props.faq} />
        <LevelBusiness />
      </div>
    </Suspense>
  );
}
