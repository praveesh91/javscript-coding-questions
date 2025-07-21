const tabs = [
  { tabName: "tab 1", id: 1, tabContent: "This is tab 1 content" },
  { tabName: "tab 2", id: 2, tabContent: "This is tab 2 content" },
  { tabName: "tab 3", id: 3, tabContent: "This is tab 3 content" },
];

document.addEventListener("DOMContentLoaded", () => {
  let activeTab = tabs[0].id;
  const tabButtonsContainer = document.getElementById("tabButtonsContainer");
  const tabContent = document.getElementById("tabContentContainer");

  function renderTabs() {
    tabs.forEach((tab) => {
      const buttons = document.createElement("button");
      const content = document.createElement("p");
      buttons.textContent = tab.tabName;
      buttons.className = "tabLinks";
      content.textContent = tab.tabContent;
      buttons.setAttribute("data-id", tab.id);
      content.setAttribute("content-data-id", tab.id);
      tabButtonsContainer.appendChild(buttons);
      tabContent.appendChild(content);
      content.className = "tabContent";

      openTab(activeTab);
      tabButtonsContainer.addEventListener("click", (event) => {
        const tabId = event.target.getAttribute("data-id");
        if (activeTab !== tabId) {
          openTab(tabId);
          activeTab = tabId;
        }
      });
    });
  }

  function openTab(id) {
    const tabContents = document.querySelectorAll(".tabContent");
    const tabButtons = document.querySelectorAll(".tabLinks");
    tabContents.forEach((el) => el.classList.remove("active"));
    tabButtons.forEach((el) => el.classList.remove("active"));
    document.querySelector(`[data-id="${id}"]`).classList.add("active");
    document.querySelector(`[content-data-id="${id}"]`).classList.add("active");
  }

  renderTabs();
});
