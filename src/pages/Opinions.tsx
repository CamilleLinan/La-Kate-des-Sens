import OpinionIntro from "@components/Opinions/OpinionIntro/OpinionIntro";
import OpinionTimeline from "@components/Opinions/OpinionTimeline/OpinionTimeLine";

import type { FC } from "react";

const Opinions: FC = () => {
  return (
    <>
      <OpinionIntro />
      <OpinionTimeline />
    </>
  );
};

export default Opinions;
