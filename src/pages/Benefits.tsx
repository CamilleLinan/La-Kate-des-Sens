import type { FC } from "react";
import ServiceList from "@components/Benefits/ServiceList/ServiceList";
import MassageTimeline from "@components/Benefits/MassageTimeline/MassageTimeline";
import CustomRequest from "@components/shared/CustomRequest/CustomRequest";

const Benefits: FC = () => {
  return (
    <>
      <ServiceList />
      <MassageTimeline />
      <CustomRequest />
    </>
  );
};

export default Benefits;
