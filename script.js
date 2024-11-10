function openTab(tabId) {
    // Hide all tab content
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => content.classList.remove('active'));

    // Remove active class from all buttons
    const tabButtons = document.querySelectorAll('.tab-btn');
    tabButtons.forEach(button => button.classList.remove('active'));

    // Show selected tab content and add active class to button
    document.getElementById(tabId).classList.add('active');
    event.currentTarget.classList.add('active');
}
