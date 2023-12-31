import { create } from 'zustand';
const HOST = "http://localhost:3000";
const DETAILEXERCISE = "exercise";


const fetchExercise = async ({ url, slug }) => {
  const response = await fetch(`${url}/${slug}/readme`);
  return await response.json()
}

const useStore = create((set, get) => ({
  files: [{ "slug": "" }],
  selected: {},
  contentSelected: "",
  setState: value => set(state => ({ ...state, ...value })),
  setExercise: async (exercise) => {
    set({ selected: exercise });
    set({ contentSelected: await fetchExercise({ url: `${HOST}/${DETAILEXERCISE}`, slug: `${exercise.slug}` }) });
  },
  fetchSelectedFile: async ({ url, slug }) => {
    set({ contentSelected: await fetchExercise({ url, slug }) });
  },
  
  fetchFiles: async pond => {
    // console.log(pond, "pond is the url to fetch files");
    const response = await fetch(pond);
    const files = await response.json()
    // console.log(files);
    set({ files:  files});
    set({ contentSelected: await fetchExercise({ url: `${HOST}/${DETAILEXERCISE}`, slug:  files[0].slug }) });

  },
}));



export default useStore;
