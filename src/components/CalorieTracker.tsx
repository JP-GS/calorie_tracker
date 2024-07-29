import { useMemo } from "react"
import type { Activity } from "../types"


type CalorieTrackerProps = {
    activities: Activity[]
}
export default function CalorieTracker({activities} : CalorieTrackerProps) {

    //Contadores
    const caloriesConsumend = useMemo(() => activities.reduce((total, activity) => activity.category === 1 ? total + activity.calories : total, 0) ,[activities])
  return (
    <>
        <h2 className="text-4xl font-black text-white text-center">Resumen de Calorías</h2>

        <div className="flex flex-col gap-5 mt-10 items-center md:flex-row md:justify-between">
        <p className="text-white font-bold rounded-full grid grid-cols-1 gap-3 text-center">
            <span className="font-black text-6xl text-orange">{caloriesConsumend}</span>
            Consumidas
        </p>
        </div>
    </>
  )
}
