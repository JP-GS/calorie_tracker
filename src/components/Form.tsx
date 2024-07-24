import { useState, ChangeEvent, FormEvent, Dispatch } from "react"
import { v4 as uuidv4 } from "uuid"
import { categories } from "../data/categories"
import { Activity } from "../types"
import { ActivityActions } from "../reducers/activity-reducer"

type FormProps = {
  dispatch : Dispatch<ActivityActions>
}

const initialState : Activity = {
  id: uuidv4(),
  category: 1,
  name: '',
  calories: 0
}

export default function Form({dispatch} : FormProps) {

  const [ activity, setActivity] = useState<Activity>(initialState)
  
  const handleChange = (e: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>) => {
    const isNumberField = ['category', 'calories'].includes(e.target.id)

    setActivity({
      ...activity,
      [e.target.id] : isNumberField ? +e.target.value : e.target.value
    })
  }

  const isValidActivity =  () => {
    const { name, calories } = activity
    return name.trim() !== '' && calories > 0
  }

  const handleSubmit = (e : FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    dispatch({type : 'save-activity', payload : { newActivity : activity}})

    setActivity({
      ...initialState,
      id: uuidv4()
    })
  }
  return (
    
    <form 
          className="bg-white space-y-5 rounded-lg shadow p-10"
          onSubmit={handleSubmit}
        >
          <div className="grid grid-cold-1 gap-3">
            <label htmlFor="category" className="font-bold">Categorías:</label>
            <select 
              className="border border-slate-300 p-2 rounded-lg w-full bg-white"
              id="category"
              value={activity.category}
              onChange={handleChange}              
            >
              {categories.map(category => (
                <option 
                  value={category.id}
                  key={category.id}
                >
                  {category.name}
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cold-1 gap-3">
            <label htmlFor="name" className="font-bold">Actividad:</label>
            <input 
              type="text"
              id="name" 
              className="border border-slate-300 rounded-lg p-2"
              placeholder="Ej. ensalada, comida, actividad, bicicleta, pesas, ejercicio"
              value={activity.name}
              onChange={handleChange}
            />
          </div>

          <div className="grid grid-cold-1 gap-3">
            <label htmlFor="calories" className="font-bold">Calorías:</label>
            <input 
              type="number"
              id="calories" 
              className="border border-slate-300 rounded-lg p-2"
              placeholder="Calorías: Ej. 300 o 500"
              value={activity.calories}
              onChange={handleChange}
            />
          </div>

          <input 
            type="submit" 
            value={ activity.category === 1 ? 'Guardar Comida' : 'Guardar Ejercicio'}
            className="bg-gray-800 hover:bg-gray-900 w-full text-white font-bold p-2 rounded cursor-pointer uppercase disabled:opacity-10" 
            disabled={!isValidActivity()}
          />

      </form>
  )
}
