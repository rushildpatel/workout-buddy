import { WorkoutsContext } from "../context/WorkoutsContext";
import { useContext } from "React";

export const useWorkoutsContext = () => {
  const context = useContext(WorkoutsContext);

  if (!context) {
    throw Error("useWorkoutsContext must be used inside an WorkoutsContextProvider");
  }

  return context;
};
