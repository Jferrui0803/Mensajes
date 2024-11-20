import { PanelMapper } from "../mapper/PanelMapper.js";
import { ComponentMapper } from "../mapper/ComponentMapper.js";

export class UIBuilder {
  static build(data) {
    const opciones = document.getElementById("opciones");
    let value = "";
    const contenedor = document.getElementById("main_container");

    console.log(data.panels);
    data.panels.forEach((element) => {
      const div = PanelMapper(element);
      contenedor.appendChild(div);
    });

    data.components.forEach((element) => {
      ComponentMapper(element);
    });

    opciones.addEventListener("change", (event) => {
      const selectedValue = event.target.value;
      if (selectedValue === "opcion1") {
        const panel2 = document.getElementById("panel2");
        panel2.remove();
      } else if (selectedValue === "opcion2") {
        const panel1 = document.getElementById("panel1");
        panel1.remove();
      }
    });
  }

  static build2(data) {
    const opciones = document.getElementById("opciones");
    let value = "";
    const contenedor = document.getElementById("main_container");

    opciones.addEventListener("change", (event) => {
      data.forEach((element) => {
        switch (element) {
          case "panels":
            data.panels.forEach((element) => {
              const div = PanelMapper(element, event.target.value);
              contenedor.appendChild(div);
            });
            break;
          case "components":
            data.components.forEach((element) => {
              ComponentMapper(element);
            });
            break;
        }
      });
    });
  }
}
