import { useState } from "react";
import NotesWindow from "./NotesWindow";
import Tab from "./Tab";
import TrialPapersWindow from "./TrialPapersWindow";

export default function MainWindow({ allNotes, allTrials }) {
  const [showTab, setTab] = useState("notes");

  function handleTabChange(e) {
    setTab(e.target.id)
  }

  return (
    <>
      <div className="md:col-span-2">
        <div className="flex gap-3 font-semibold">
          <Tab
            isActive={showTab == "notes" ? true : false}
            title="✏️ My Notes"
            onShow={handleTabChange}
            id="notes"
          />
          <Tab
            isActive={showTab == "trial" ? true : false}
            title="📄 Trial Past Papers"
            onShow={handleTabChange}
            id="trial"
          />
        </div>
        <main className="border-[1px] border-[#2C3233] py-6 px-4 rounded-b-sm">
          {showTab == "notes" && <NotesWindow allNotes={allNotes} />}
          {showTab == "trial" && <TrialPapersWindow allTrials={allTrials} />}
        </main>
      </div>
    </>
  )
}