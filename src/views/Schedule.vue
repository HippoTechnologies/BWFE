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
  background-color: #acd0df; /* Set main background color for the page */
  min-height: 100vh; /* Ensure it covers the full height of the viewport */
  display: flex;
  flex-direction: column; /* Stack navbar and schedule vertically */
}

/* Navbar Styles */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #ffffff;
  color: #000000;
}

.nav-links {
  display: flex;
  width: 100%;
  list-style-type: none;
  justify-content: space-between;
}

.left-section {
  display: flex;
  align-items: center;
}

.welcome-text {
  margin-left: 10px;
}

.logo {
  height: 40px;
  margin-right: 10px;
}

.center-section {
  display: flex;
  align-items: center;
}

.right-section {
  display: flex;
  align-items: center;
}

.dropdown {
  position: relative;
}

.dropbtn {
  background-color: #dadada;
  padding: 14px 20px;
  font-size: 16px;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  min-width: 160px;
  z-index: 1;
}

.dropdown-content a {
  padding: 12px 16px;
  display: block;
  text-decoration: none;
  color: #000;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.nav-link {
  padding: 14px 20px;
  text-decoration: none;
  color: #000;
}

.nav-link:hover {
  background-color: #575757;
}

/* Search Section */
.search-section {
  display: flex;
  align-items: center;
}

.search-input {
  padding: 5px;
  border-radius: 4px;
}

.search-button {
  padding: 6px 10px;
  background-color: #ff9933;
  border-radius: 4px;
  color: #000;
  margin-left: 5px;
}

.search-button:hover {
  background-color: #e68a00;
}

.schedule {
  padding: 20px;
  background-color: white; /* White background for the schedule container */
  border-radius: 8px; /* Rounded corners for the schedule */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
  max-width: 800px; /* Limit the width of the schedule */
  width: 100%; /* Ensure it takes full width up to max-width */
}

h2 {
  text-align: center; /* Center the heading */
  color: #333; /* Darker color for the heading */
  margin-bottom: 20px; /* Space below the heading */
}

.calendar {
  border-radius: 8px; /* Ensure the calendar has rounded corners */
  overflow: hidden; /* Prevent overflow */
}

/* Add some custom styles for events */
.vue-cal-event {
  background-color: #4CAF50; /* Green color for events */
  color: white; /* White text for better contrast */
  border-radius: 4px; /* Rounded corners for events */
  padding: 5px 10px; /* Padding inside events */
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
