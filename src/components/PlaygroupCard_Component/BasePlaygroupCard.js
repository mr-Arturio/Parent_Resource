import React, { useState } from "react";
import getIcons from "../../utils/icons";
import CardHeader from "./CardHeader";
import CardFooter from "./CardFooter";
import CardDetails from "./CardDetails";

function BasePlaygroupCard({ playgroup, onExpand, isExpanded }) {
  const {
    Date,
    Time,
    Name,
    Address,
    Age,
    Day,
    Language,
    URL,
    Service,
    Parking,
    Coffee,
    WiFi,
    Outdoor,
    Cancelled,
    Notes,
    Scale,
  } = playgroup;

  const icons = getIcons(Parking, Coffee, WiFi, Outdoor, Language, Scale);
  const [tooltip, setTooltip] = useState("");

  // Split Time into start and end times
  const [startTime, endTime] = Time.split(" - ");

  // Conditional style classes
  const cardStyle =
    Cancelled === "Yes" ? "bg-gray-400 opacity-50" : "bg-blue-100";
  const cardClasses = `shadow-lg rounded-lg overflow-hidden m-4 relative ${cardStyle}`;

  return (
    <div className={cardClasses}>
      {Cancelled === "Yes" && (
        <div
          className="absolute z-10 w-full h-full flex justify-center items-center"
          style={{ pointerEvents: "none" }}
        >
          <span
            className="text-red-500 text-2xl font-bold"
            style={{ pointerEvents: "auto" }}
          >
            Cancelled
          </span>
        </div>
      )}
      <CardHeader
        URL={URL}
        Name={Name}
        Day={Day}
        Date={Date}
        Service={Service}
        Cancelled={Cancelled}
        Time={Time}
        name={Name}
        address={Address}
        date={Date}
        startTime={startTime}
        endTime={endTime}
      />
      {isExpanded && (
        <CardDetails
          Time={Time}
          Address={Address}
          Age={Age}
          Notes={Notes}
          icons={icons}
          Cancelled={Cancelled}
        />
      )}
      <CardFooter
        icons={icons}
        tooltip={tooltip}
        setTooltip={setTooltip}
        onExpand={onExpand}
        isExpanded={isExpanded}
        URL={URL}
        name={Name}
        address={Address}
        date={Date}
        startTime={startTime}
        endTime={endTime}
        Cancelled={Cancelled}
      />
    </div>
  );
}

export default BasePlaygroupCard;
