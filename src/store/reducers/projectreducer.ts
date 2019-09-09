import { Project } from "../../components/projects/project";

export interface ProjectState {
  projects: Array<Project>;
}
interface ProjectAction {}

const initState: ProjectState = {
  projects: [
    { id: "1", title: "help me find peach", content: "blah blah blah" },
    { id: "2", title: "collect all the stars", content: "bleh bleh bleh" },
    { id: "3", title: "egg hunt wwith yoshi", content: "bluh bluh bluh" }
  ]
};
const projectReducer = (
  state: ProjectState = initState,
  action: ProjectAction
) => {
  return state;
};

export default projectReducer;
