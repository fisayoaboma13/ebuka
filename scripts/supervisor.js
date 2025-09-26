// Supervisor page functionality
document.addEventListener('DOMContentLoaded', () => {
    const updatesList = document.getElementById('supervisorUpdates');
    const emailButton = document.querySelector('.email-button');

    // Sample updates data (in practice, this would come from a server)
    const updates = [
        {
            date: '2025-09-26',
            message: 'Project review meeting scheduled for next week. Please prepare your progress report.'
        },
        {
            date: '2025-09-24',
            message: 'New research materials uploaded to the shared drive.'
        },
        {
            date: '2025-09-22',
            message: 'Office hours changed to 2-4 PM on Wednesdays.'
        }
    ];

    // Display updates
    displayUpdates(updates);

    // Handle email button click
    emailButton.addEventListener('click', () => {
        window.location.href = 'mailto:supervisor@fpno.edu.ng?subject=Student%20Query%20-%2023/0100/1/CS';
    });

    function displayUpdates(updates) {
        updatesList.innerHTML = updates.map(update => `
            <div class="update-item">
                <div class="update-date">${formatDate(update.date)}</div>
                <div class="update-message">${update.message}</div>
            </div>
        `).join('');
    }

    function formatDate(dateStr) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateStr).toLocaleDateString('en-US', options);
    }

    // In a real app, you'd set up real-time updates using Firebase
    // Here's a placeholder for that functionality
    function setupRealtimeUpdates() {
        // Firebase real-time updates would go here
        // firebase.database().ref('supervisorUpdates').on('value', (snapshot) => {
        //     const updates = snapshot.val();
        //     displayUpdates(updates);
        // });
    }
});
