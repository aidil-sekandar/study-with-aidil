import { useState } from "react";
import NotesWindow from "./NotesWindow";
import Tab from "./Tab";
// import ExercisesWindow from "./ExercisesWindow";

export default function MainWindow({ allNotes }) {
  const [showTab, setTab] = useState("notes");

  function handleTabChange(e) {
    setTab(e.target.id)
  }

  return (
    <div className="md:col-span-2">
      <div className="flex gap-3 font-semibold">
        <Tab
          isActive={showTab == "notes" ? true : false}
          title="✏️ My Notes"
          onShow={handleTabChange}
          id="notes"
        />
        {/* <Tab
          isActive={showTab == "exercises" ? true : false}
          title="📄 Exercises"
          onShow={handleTabChange}
          id="exercises"
        /> */}
      </div>
      <main className="border-[1px] border-[#2C3233] py-6 px-4 rounded-b-sm">
        {showTab == "notes" && <NotesWindow allNotes={allNotes} />}
        {/* {showTab == "exercises" && <ExercisesWindow allExercises={allExercises} />} */}
      </main>
    </div>
  )
}