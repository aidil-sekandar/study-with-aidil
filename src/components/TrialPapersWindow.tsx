import TrialPapersCard from "./TrialPapersCard";

export default function TrialPapersWindow({ allTrials }) {
  return (
    <div className="grid gap-4">
      {
        allTrials.map(({ data }) => {
          return (
            <TrialPapersCard data={data} />
          )
        })
      }
    </div>
  )
}  