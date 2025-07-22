const data = [
  { id: 1, name: "Accordion 1", content: "First accordion content." },
  { id: 2, name: "Accordion 2", content: "Second accordion content." },
  { id: 3, name: "Accordion 3", content: "Third accordion content." },
];
document.addEventListener("DOMContentLoaded", () => {
  const accordion = document.querySelector("#accordion");
  data.forEach((item, index) => {
    const accordionHeader = document.createElement("div");
    const accordionBody = document.createElement("div");
    accordionHeader.textContent = item.name;
    accordionHeader.classList.add("accordion-header");
    accordionBody.classList.add("accordion-body");

    accordionBody.innerHTML = `<p>${item.content}</p>`;
    accordion.appendChild(accordionHeader);
    accordion.appendChild(accordionBody);
  });
});
