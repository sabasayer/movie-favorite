import { MainComponent } from "./main-component/main-component";

window.onload = async () => {
  const main = new MainComponent();
  main.getAndSetInitialData();
};
