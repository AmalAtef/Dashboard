FusionCharts.ready(function() {
  var salesChart = new FusionCharts({
    type: "column3d",
    renderAt: "chart0",
    width: "100%",
    height: "100%",
    dataFormat: "json",
    dataSource: {
      chart: {
        caption: "Burger King Monthly Sales",
        captionFontColor: "#aaaaaa"
      },
      data: [
        {
          label: "Jan",
          value: "400000"
        },
        {
          label: "May",
          value: "300000"
        },
        {
          label: "July",
          value: "500000"
        },
        {
          label: "August",
          value: "600000"
        }
      ]
    }
  });
  salesChart.render();
  var demoChart = new FusionCharts({
    type: "funnel",
    renderAt: "chart1",
    width: "100%",
    height: "100%",
    dataFormat: "json",
    dataSource: {
      chart: {
        // caption configuration
        caption: "Marketing Funnel for Acme Inc.",
        captionFontColor: "#fff",
        captionFontSize: "22",
        captionFontBold: "0",

        // general chart configuration
        baseFont: "Open Sans",
        is2D: "1",
        bgcolor: "#202C3D",
        bgAlpha: "100",
        plotFillAlpha: "100",
        paletteColors:
          "#495FBA, #FCE14D, #F7A35A, #90ED7D, #A56940, #456D4C, #4F6E89",
        streamlinedData: "0",
        labelFontColor: "#fff",
        labelFontSize: "14",
        showPlotBorder: "1",
        plotBorderColor: "#FFF",
        plotBorderThickness: "1",
        smartLineColor: "#FFF",

        // tooltip configuration
        toolTipBgColor: "#000",
        toolTipPadding: "15",
        toolTipBorderRadius: "3",
        toolTipBorderThickness: "1",
        toolTipBorderColor: "#ccc",
        toolTipBgAlpha: "70",
        plotToolText:
          "<div style='color:#FFF; font-size: 14px;'>$label: $valuek</div>"
      },
      data: [
        {
          label: "Website Visits",
          value: "200"
        },
        {
          label: "Downloads",
          value: "123"
        },
        {
          label: "Requested Price List",
          value: "98"
        },
        {
          label: "Contacted for more info",
          value: "73"
        },
        {
          label: "Purchased",
          value: "39"
        },
        {
          label: "Other Products",
          value: "26"
        }
      ]
    }
  });
  demoChart.render();
});

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
    chartsContainer[
      i
    ].innerHTML = `<div id="chart${i}" draggable="true" ondragstart="drag(event)">
    chart will render here!
  </div>`;
  } else {
    document.getElementById(
      slotId
    ).innerHTML = `<div id="chart${i}" draggable="true" ondragstart="drag(event)">
    chart will render here!
  </div>`;
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
