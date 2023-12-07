import React, { useState } from "react";
import Notes from "../Notes/Notes";
import Shownotes from "../Shownotes/Shownotes";

export const Home = () => {
  const [notes, setNotes] = useState([]);

  return (
    <>
      <div>
        <Notes />
        <Shownotes />
      </div>
    </>
  );
};
