import displayController from "../ManipulatesDOM/displayController";
import deleteButtonHandler from "./deleteButtonHandler";
import updateButtonHandler from "./updateButtonHandler";
import updateTaskHandler from "./updateTaskHandler";
import toggleStatus from "./toggleStatus";


const switchProject = (projectTasks, allTasks) => {
  let numOfProjects = projectTasks.length;

  //Add Event Listener to Swtich Projects
  document.querySelectorAll(".switch-project-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      for (let i = 0; i < numOfProjects; i++) {
        if (projectTasks[i].checkProject(btn.id)) {
          displayController(allTasks, projectTasks, projectTasks[i]);
          deleteButtonHandler(projectTasks, allTasks);
          updateButtonHandler(projectTasks, allTasks);
          updateTaskHandler(projectTasks, allTasks);
          toggleStatus(projectTasks, allTasks);
        }
      }
    });
  });
};

export default switchProject;
