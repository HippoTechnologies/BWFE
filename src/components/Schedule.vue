<!-- src/components/Schedule.vue -->
<template>
    <div class="schedule">
      <h2>Schedule</h2>
      <vue-cal :events="events" />
    </div>
  </template>
  
  <script>
  import VueCal from 'vue-cal';
  import 'vue-cal/dist/vuecal.css';
  
  export default {
    components: {
      VueCal,
    },
    data() {
      return {
        events: [
          { start: '2024-09-17', end: '2024-09-17', title: 'Morning Shift' },
          { start: '2024-09-18', end: '2024-09-18', title: 'Afternoon Shift' },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .schedule {
    padding: 20px;
  }
  </style>
  