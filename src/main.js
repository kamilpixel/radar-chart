import "./style.css";
import Chart from "chart.js/auto";
const ctx = document.getElementById("myChart");

if (ctx) {
  let cleanData;

  // Modify data to fit chartjs data format
  const populateData = (data) => {
    let indexNumber = null;

    // Get city name from hidden input
    const cityNameInput = document.getElementById("cityName");
    const cityName = cityNameInput ? cityNameInput.value : "";

    // Find index number based on city name
    data.chartData.forEach((item, index) => {
      if (item.city_name.toLowerCase() === cityName.toLowerCase()) {
        indexNumber = index;
      }
    });

    if (indexNumber === null) {
      return false;
    } else {
      return {
        chartData: {
          labels: data.chartConfig[0].labels,
          datasets: [
            {
              label: "Global",
              data: data.chartData[indexNumber].global_data,
            },
            {
              label: data.chartData[indexNumber].region,
              data: data.chartData[indexNumber].region_data,
            },
            {
              label: data.chartData[indexNumber].city_name,
              data: data.chartData[indexNumber].city_data,
            },
          ],
        },
      };
    }
  };

  // Initialize radar chart
  const initChart = () => {
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
  };

  // Fetch data from sample json file
  const fetchData = async () => {
    try {
      let response = await fetch("/data.json");
      response = await response.json();
      cleanData = populateData(response);
      if (cleanData) {
        initChart();
      } else {
        // Show error message if city not found
        document.querySelector(".error-message").textContent =
          "Error: City data not found";
        document.querySelector(".chart-container").style.display = "none";
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  await fetchData();
}
