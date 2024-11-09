export const ComponentMapper = (component) => {
    const div = document.createElement("div");
    for (const key in component) {
        switch (key) {
            case 'name':
                div.setAttribute("id", component[key]);
                break;
            case 'father':
                const divFather = document.getElementById(component[key]);
                divFather.appendChild(div);
                break;
        }
    }
};

