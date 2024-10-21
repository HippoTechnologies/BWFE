<template>
  <div class="sales-page">
    <h1>Yearly Sales Data</h1>

    <!-- Dropdown for selecting the item -->
    <div class="select-container">
      <label for="itemSelect">Select Recipe:</label>
      <select id="itemSelect" v-model="selectedItem" @change="updateSalesData">
        <option v-for="item in items" :key="item.id" :value="item">{{ item.name }}</option>
      </select>
    </div>

    <!-- Dropdown for selecting the year -->
    <div class="select-container">
      <label for="yearSelect">Select Year:</label>
      <select id="yearSelect" v-model="selectedYear" @change="updateSalesData">
        <option v-for="year in years" :key="year" :value="year">{{ year }}</option>
      </select>
    </div>

    <canvas id="salesChart" ref="salesChart"></canvas>
  </div>
</template>

<script>
import { ref, onMounted, watch } from 'vue';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

export default {
  name: 'SalesPage',
  setup() {
    const salesChart = ref(null);
    const selectedItem = ref(null);
    const selectedYear = ref(null);
    const chartInstance = ref(null);

    // Sample data for recipes
    const items = ref([
      { id: 1, name: 'Chocolate Cake' },
      { id: 2, name: 'Vanilla Cupcakes' },
      { id: 3, name: 'Lemon Tart' }
    ]);

    // Years available for selection
    const years = ref([2022, 2023, 2024]);

    // Sample sales data for each recipe over a year
    const salesData = ref({
      'Chocolate Cake': [1500, 2000, 1750, 2250, 3000, 2600, 2400, 2800, 2900, 3100, 3200, 3500],
      'Vanilla Cupcakes': [1000, 1500, 1250, 1750, 2000, 2200, 1900, 2500, 2600, 2700, 3000, 3200],
      'Lemon Tart': [1200, 1600, 1400, 1800, 2100, 2300, 2000, 2500, 2600, 2700, 2900, 3100]
    });

    // Function to update sales data based on selected item and year
    const updateSalesData = () => {
      if (salesChart.value && selectedItem.value && selectedYear.value) {
        const ctx = salesChart.value.getContext('2d');
        const itemName = selectedItem.value.name;
        const data = salesData.value[itemName];

        // Destroy previous chart instance if it exists
        if (chartInstance.value) {
          chartInstance.value.destroy();
        }

        // Create a new chart instance
        chartInstance.value = new Chart(ctx, {
          type: 'line',
          data: {
            labels: [
              'January', 'February', 'March', 'April', 'May', 'June', 
              'July', 'August', 'September', 'October', 'November', 'December'
            ],
            datasets: [
              {
                label: `${itemName} Sales ($) for ${selectedYear.value}`,
                data: data,
                backgroundColor: '#290102',
                borderColor: '#290102',
                borderWidth: 2,
                fill: false,
                tension: 0.1
              },
            ],
          },
          options: {
            responsive: true,
            plugins: {
              legend: {
                labels: {
                  color: '#CDC69A' 
                },
                display: true,
                position: 'top',
              },
              title: {
                display: true,
                text: `Sales Data for ${itemName} in ${selectedYear.value}`,
                color: '#CDC69A',
                font: {
                  size: 18,
                }
              },
            },
            scales: {
              y: {
                beginAtZero: true,
                ticks: {
                  color: '#CDC69A',
                },
                grid: {
                  color: '#CDC69A', // Change this to your desired y-axis grid line color
                },
              },
              x: {
                ticks: {
                  color: '#CDC69A',
                },
                grid: {
                  color: '#CDC69A', // Change this to your desired y-axis grid line color
                },
              },
            },
          },
        });
      }
    };

    onMounted(() => {
      // Set default selections
      selectedItem.value = items.value[0];
      selectedYear.value = years.value[0];
      updateSalesData();
    });

    // Watch for changes in both selectedItem and selectedYear
    watch([selectedItem, selectedYear], () => {
      updateSalesData();
    });

    return { salesChart, items, years, selectedItem, selectedYear, updateSalesData };
  },
};
</script>

<style scoped>
.sales-page {
  padding: 20px;
}

.select-container {
  margin-bottom: 20px; /* Adjust the spacing between dropdowns */
}

#itemSelect, #yearSelect {
  padding: 0.5px;
  margin: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
  box-sizing: border-box; /* Ensure padding and border are included in the width */
}
</style>