import React, { useState } from "react";
import Notes from "../Notes/Notes";
import Shownotes from "../Shownotes/Shownotes";

export const Home = () => {
  // data base in a array form
  // notes = variable use to access value from state
  // setNotes = it is a function that use to set value in useState hook
  const [notes, setNotes] = useState([]);


  return (
    <>
      <div>
        {/* add notes component */}
        <Notes
          // props delling
          addNotes={setNotes}
        />

        {/* show notes  component*/}
        <Shownotes data={notes} setNotes={setNotes} />
      </div>
    </>
  );
};
