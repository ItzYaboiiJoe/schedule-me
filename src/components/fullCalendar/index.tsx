"use client";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import multiMonthPlugin from "@fullcalendar/multimonth";
import "./calendar.css";

const MyCalendar = () => {
  return (
    <div className="flex w-full px-10 justify-start items-start gap-8">
      <div className="w-full mt-8">
        <FullCalendar
          height={"82vh"}
          plugins={[
            dayGridPlugin,
            timeGridPlugin,
            interactionPlugin,
            multiMonthPlugin,
          ]}
          initialView="dayGridMonth"
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay,multiMonthYear",
          }}
          editable={true}
          selectable={true}
        />
      </div>
    </div>
  );
};

export default MyCalendar;
