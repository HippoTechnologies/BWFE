<template>
  <div class="admin-container">
  <div class="admin-page">
    <div class="modal-content" @click.stop>
      <h3>Admin Rights Requested</h3>
      <p>The following email has requested admin rights:</p>
      <p><strong>{{ email }}</strong></p>
      <div class="modal-buttons">
        <a href="login"><button class="accept-btn" @click="acceptRequest">Accept</button></a>
        <button class="decline-btn" @click="declineRequest">Decline</button>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'AdminPage',
  data() {
    return {
      email: 'user@example.com', // Replace with dynamic email if needed
    };
  },
  methods: {
    acceptRequest() {
      alert(`Admin rights granted to ${this.email}`);
    },
    declineRequest() {
      alert(`Admin rights request from ${this.email} declined.`);
    },
  },
};
</script>

<style scoped>
/* Apply template background color */
.admin-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #acd0df;
  }

/* Center content in the admin-page */


/* Style for the modal content */
.modal-content {
  background-color: #ffffff; /* Background for the modal */
  border-radius: 10px;
  padding: 40px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-align: center;
  height: 300px;
  width: 500px
}

/* Style for the heading */
h3 {
  margin-bottom: 10px;
}

/* Style for the modal buttons */
.modal-buttons {
  margin-top: 20px;
}

/* Common button style */
button {
  padding: 10px 20px;
  margin-right: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

/* Accept button - green */
.accept-btn {
  background-color: #4caf50;
  color: white;
}

.accept-btn:hover {
  background-color: #45a049;
}

/* Decline button - red */
.decline-btn {
  background-color: #f44336;
  color: white;
}

.decline-btn:hover {
  background-color: #e53935;
}
</style>
