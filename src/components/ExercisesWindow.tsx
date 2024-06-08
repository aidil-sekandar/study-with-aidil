import ExercisesCard from "./ExercisesCard";

export default function ExercisesWindow({ allExercises }) {
  return (
    <>
      {
        allExercises.length > 1 && (
          <div className="grid gap-4">
            {
              allExercises.map(({ data }) => {
                return (
                  <ExercisesCard data={data} />
                )
              })
            }
          </div>
        )
      }
      {
        allExercises.length == 0 && <h1>Seems like nothing is here :(</h1>
      }
    </>
  )
}  