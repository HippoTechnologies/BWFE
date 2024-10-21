<template>
  <div class="schedule-page">
    <div class="schedule">
      <h2>Schedule</h2>
      <vue-cal :events="events" class="calendar" />
    </div>
  </div>
</template>

<script>
import VueCal from 'vue-cal';
import 'vue-cal/dist/vuecal.css';
import { ref } from 'vue';
import logo from '@/assets/logo.png'; // Update path to your logo

export default {
  name: 'EmployeePage',
  components: {
    VueCal,
  },
  setup() {
    const logoUrl = ref(logo);
    const isEmployee = ref(true); // Adjust employee status logic as needed
    const searchQuery = ref(''); // For the search input

    // Sample schedule data (replace this with dynamic data fetching)
    const events = ref([
      { start: '2024-10-01T09:00:00', end: '2024-10-01T17:00:00', title: 'Work Shift' },
      { start: '2024-10-02T09:00:00', end: '2024-10-02T17:00:00', title: 'Work Shift' },
      { start: '2024-10-03T10:00:00', end: '2024-10-03T18:00:00', title: 'Work Shift' },
    ]);

    // Handle search logic
    const handleSearch = () => {
      console.log('Search for:', searchQuery.value);
    };

    return { logo: logoUrl, isEmployee, searchQuery, handleSearch, events };
  },
  mounted() {
    // Dynamically load FontAwesome icons
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css';
    document.head.appendChild(link);
  },
};
</script>

<style scoped>
.schedule-page {
  min-height: 100vh; /* Ensure it covers the full height of the viewport */
  display: flex;
  flex-direction: column; /* Stack navbar and schedule vertically */
  color: #CDC69A;
}

.schedule {
  width: 100%; /* Full width */
  height: 100vh; /* Full height of the viewport */
  background-color: #A7292F; 
  color: #CDC69A;
  border-radius: 8px; /* Rounded corners for the schedule */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
  box-sizing: border-box; /* Include padding and border in the element's total width and height */
}

h2 {
  text-align: center; /* Center the heading */
  color: #CDC69A !important; /* Darker color for the heading */
  margin-bottom: 20px; /* Space below the heading */
}

/* Add some custom styles for events */
.vue-cal-event {
  background-color: #290102; /* Green color for events */
  color: #CDC69A !important; /* White text for better contrast */
  border-radius: 4px; /* Rounded corners for events */
  padding: 5px 10px; /* Padding inside events */
  font-size: 1em; 
}

/* Optional: Hover effect for events */
.vue-cal-event:hover {
  opacity: 0.8; /* Slight transparency on hover */
  cursor: pointer; /* Pointer cursor on hover */
}


/* Optional: Responsive adjustments */
@media (max-width: 600px) {
  .schedule {
    padding: 10px; /* Reduce padding on smaller screens */
  }

  h2 {
    font-size: 1.5em; /* Smaller heading size */
  }

  .vue-cal-event {
    font-size: 0.9em; /* Smaller font size for events */
  }
}
</style>
