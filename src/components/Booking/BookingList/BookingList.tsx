import type { FC } from "react";
import "./_BookingList.scss";
// import { useState } from "react";
import { List, Button } from "antd";
import { massages } from "@data/massages";
// import ButtonBase from "@components/shared/ButtonBase/ButtonBase";
import TitleSection from "@components/shared/TitleSection/TitleSection";

const BookingList: FC = () => {
  //   const [selectedMassage, setSelectedMassage] = useState<number | null>(null);

  return (
    <section className="bookings">
      <TitleSection titleText="Prendre Rendez-Vous" />

      <div className="bookings__content">
        <p className="bookings__intro">
          Chaque massage est une invitation à la détente et au bien-être. <br />{" "}
          Si vous souhaitez en savoir davantage sur les prestations ou trouver
          celui qui vous conviendrait le mieux, n’hésitez pas à consulter la
          page des prestations ou à me contacter directement — je serai ravie de
          vous conseiller.
        </p>

        <List
          bordered
          dataSource={massages}
          renderItem={(massage) => (
            <List.Item
              key={massage.id}
              actions={[
                massage.duration ? (
                  <Button>Choisir</Button>
                ) : (
                  <Button>Me contacter</Button>
                ),
              ]}
            >
              <List.Item.Meta
                title={massage.title}
                description={massage.description}
              />
              {massage.duration && (
                <div className="massage-duration">
                  {massage.duration} — {massage.price} €
                </div>
              )}
            </List.Item>
          )}
        />

        {/* Formulaire affiché après le choix */}
        {/* {selectedMassage && (
        <div className="booking-form-wrapper">
          <BookingForm
            massage={massages.find((m) => m.id === selectedMassage)!}
            onReset={() => setSelectedMassage(null)}
          />
        </div>
      )} */}
      </div>
    </section>
  );
};

export default BookingList;
