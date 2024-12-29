document.getElementById('appointment-form').addEventListener('submit', (e) => {
    e.preventDefault();
    document.getElementById('confirmation-message').textContent = "Appointment Booked!";
});
