import type { FC } from "react";
import ServiceList from "@components/Services/ServiceList/ServiceList";
import MassageTimeline from "@components/Services/MassageTimeline/MassageTimeline";
import ServiceRequest from "@components/Services/ServiceRequest/ServiceRequest";

const Services: FC = () => {
  return (
    <section className="services">
      <ServiceList />
      <MassageTimeline />
      <ServiceRequest />
    </section>
  );
};

export default Services;
