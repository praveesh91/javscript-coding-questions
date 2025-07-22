const data = [
  { id: 1, name: "Accordion 1", content: "First accordion content." },
  { id: 2, name: "Accordion 2", content: "Second accordion content." },
  { id: 3, name: "Accordion 3", content: "Third accordion content." },
];
document.addEventListener("DOMContentLoaded", () => {
  const accordion = document.querySelector("#accordion");
  data.forEach((item, index) => {
    const sectionItem = document.createElement("div");
    const accordionHeader = document.createElement("div");
    const accordionBody = document.createElement("div");
    accordionHeader.textContent = item.name;
    accordionHeader.classList.add("accordion-header");
    accordionBody.classList.add("accordion-body");
    sectionItem.classList.add("accordion-item");

    accordionBody.innerHTML = `<p>${item.content}</p>`;
    sectionItem.appendChild(accordionHeader);
    sectionItem.appendChild(accordionBody);
    accordion.appendChild(sectionItem);
    if (index === 0) {
      sectionItem.style.display = "block";
      accordionHeader.classList.add("active");
    }
  });
  accordion.addEventListener("click", (e) => {
    const header = e.target.closest(".accordion-header");
    if (!header) return;
    const sectionItem = header.parentNode;
    const content = sectionItem.querySelector(".accordion-body");
    const isActive = sectionItem.classList.contains("active");
    document.querySelectorAll(".accordion-item").forEach((el) => {
      el.classList.remove("active");
      el.querySelector(".accordion-body").style.display = "none";
    });
    if (!isActive) {
      sectionItem.classList.add("active");
      content.style.display = "block";
    }
  });
});
