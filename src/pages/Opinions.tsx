import OpinionIntro from "@components/Opinions/OpinionIntro/OpinionIntro";
import OpinionTimeline from "@components/Opinions/OpinionList/OpinionList";
import OpinionRequest from "@components/Opinions/OpinionRequest/OpinionRequest";

import type { FC } from "react";

const Opinions: FC = () => {
  return (
    <section className="opinions">
      <OpinionIntro />
      <OpinionTimeline />
      <OpinionRequest />
    </section>
  );
};

export default Opinions;
