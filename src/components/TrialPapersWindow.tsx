import TrialPapersCard from "./TrialPapersCard";

export default function TrialPapersWindow({ allTrials }) {
  return (
    <>
      {
        allTrials.length > 1 && (
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
      {
        allTrials.length == 0 && <h1>Seems like nothing is here :(</h1>
      }
    </>
  )
}  