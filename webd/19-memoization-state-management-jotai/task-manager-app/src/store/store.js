import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

// export const tasksAtom = atom([]);

// persistent state with local storage
export const tasksAtom = atomWithStorage("tasks", []);

// derived atom -- computing values based on another atom
export const taskCountAtom = atom((get) => get(tasksAtom).length);


// async atom to fetch tasks from an api using atomWithQuery from jotai-tanstack-query
import { atomWithQuery } from "jotai-tanstack-query";

export const fetchTasksAtom = atomWithQuery(() => ({
  queryKey: ["tasks"],
  queryFn: async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/tods?_limit=5"
    );

    if (!response.ok) {
      throw new Error(`Error while fetching tasks ${response.status}`);
    }

    return response.json();
  },
}));

// reducer atom to add or delete the tasks.
export const taskReducerAtom = atom(
  (get) => get(tasksAtom),
  (get, set, action) => {
    switch (action.type) {
      case "ADD":
        set(tasksAtom, [
          ...get(tasksAtom),
          { id: Date.now(), text: action.payload },
        ]);
        break;
      case "DELETE":
        set(
          tasksAtom,
          get(tasksAtom).filter((task) => task.id !== action.payload)
        );
        break;
      default:
        throw new Error("Unknown action");
    }
  }
);
