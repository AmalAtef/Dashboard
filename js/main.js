const slots = document.querySelectorAll(".slots div");

const chartsContainer = document.querySelectorAll(".chart-container");

// default width and height for slots
for (let i = 0; i < slots.length; i++) {
  document.getElementById("slot" + i).style.width =
    localStorage.getItem("slot" + i + "Width") == null
      ? "40%"
      : localStorage.getItem("slot" + i + "Width");

  document.getElementById("slot" + i).style.height =
    localStorage.getItem("slot" + i + "height") == null
      ? "30%"
      : localStorage.getItem("slot" + i + "height");
}

for (let i = 0; i < chartsContainer.length; i++) {
  const slotId = localStorage.getItem(`chart${i}Sid`);
  if (slotId == null) {
    chartsContainer[i].innerHTML = `<img src="./img/chart${i +
      1}.JPG" id="chart${i}" draggable="true" ondragstart="drag(event)"/>`;
  } else {
    document.getElementById(slotId).innerHTML = `<img src="./img/chart${i +
      1}.JPG" id="chart${i}" draggable="true" ondragstart="drag(event)"/>`;
  }
}

function allowDrop(e) {
  e.preventDefault();
}

function drag(e) {
  e.dataTransfer.setData("text", e.target.id);
}

function drop(e) {
  e.preventDefault();
  var data = e.dataTransfer.getData("text");
  e.target.appendChild(document.getElementById(data));
  localStorage.setItem(`${e.target.firstChild.id}Sid`, e.target.id);
}
//function to save widths and heights of slots in localStorage on click Finish button
function onFinish() {
  for (let j = 0; j < slots.length; j++) {
    localStorage.setItem(
      "slot" + j + "Width",
      document.getElementById("slot" + j).style.width
    );
    localStorage.setItem(
      "slot" + j + "height",
      document.getElementById("slot" + j).style.height
    );
  }
}
// on click Back button to back to previous changes
function onBack() {
  window.location.reload(true);
}
