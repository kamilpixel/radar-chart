import "./style.css";
import Chart from "chart.js/auto";
const ctx = document.getElementById("myChart");

if (ctx) {
  let cleanData;

  // Modify data to fit chartjs data format
  const populateData = (data) => {
    const indexNumber = 1;

    return {
      locationLabel: `${data.chartData[indexNumber].region} / ${data.chartData[indexNumber].city_name}`,
      chartData: {
        labels: data.chartConfig[0].labels,
        datasets: [
          {
            label: "Global Data",
            data: data.chartData[indexNumber].global_data,
          },
          {
            label: "Region Data",
            data: data.chartData[indexNumber].region_data,
          },
          {
            label: "City Data",
            data: data.chartData[indexNumber].city_data,
          },
        ],
      },
    };
  };

  // Fetch data from sample json file
  const fetchData = async () => {
    try {
      let response = await fetch("/data.json");
      response = await response.json();
      cleanData = populateData(response);
      const elLocationLabel = document.getElementById("location-label");
      if (elLocationLabel) {
        elLocationLabel.textContent = cleanData.locationLabel;
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  await fetchData();

  // Initialize radar chart
  new Chart(ctx, {
    type: "radar",
    data: cleanData.chartData,
    options: {
      responsive: true,
      maintainAspectRatio: true,
      elements: {
        line: {
          borderWidth: 1,
        },
      },
      scales: {
        r: {
          pointLabels: {
            font: {
              size: 14,
            },
          },
          ticks: {
            beginAtZero: true,
            stepSize: 20,
          },
        },
      },
    },
  });
}
