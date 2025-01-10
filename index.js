let item;

document.addEventListener("dragstart", (e) => {
  item = e.target;
});

document.addEventListener("dragover", (e) => {
  e.preventDefault();
});

document.addEventListener("drop", (e) => {
  if (e.target.getAttribute("data-draggable") == "target") {
    e.preventDefault();
    e.target.appendChild(item);
     // e.target ici représente la zone où l'élément doit être déposé (à cause de l'événement "drop").
    // Cela sélectionne l'élément cible (par exemple, une <ul> avec data-draggable="target").
    // Ensuite, appendChild(item) ajoute l'élément glissé (item) en tant qu'enfant de la cible (par exemple, un <li> ajouté dans une <ul>).
  }
});

window.addEventListener("dragend", () => (item = null));
