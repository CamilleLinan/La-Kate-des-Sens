import type { FC } from "react";
import ServiceList from "@components/Benefits/ServiceList/ServiceList";
import MassageTimeline from "@components/Benefits/MassageTimeline/MassageTimeline";
import ServiceRequest from "@components/Benefits/ServiceRequest/ServiceRequest";

const Benefits: FC = () => {
  return (
    <>
      <ServiceList />
      <MassageTimeline />
      <ServiceRequest />
    </>
  );
};

export default Benefits;
