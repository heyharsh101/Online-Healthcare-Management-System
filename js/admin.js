// Static data for now; can be dynamically updated later
const doctors = [
    { name: "Dr. KK Verma", appointments: 0 },
    { name: "Dr. V Sharma", appointments: 0 },
    { name: "Dr. Vikas Gupta", appointments: 0 },
];

const doctorList = document.getElementById('doctor-list');
doctorList.innerHTML = doctors.map(doc => `<li>${doc.name}: ${doc.appointments} appointments</li>`).join('');
