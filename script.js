const element = document.getElementById("collapsibleFooter");
element.addEventListener("shown.bs.collapse", (event) => {
  element.scrollIntoView({
    behavior: "smooth",
    block: "end",
    inline: "nearest"
  });
});