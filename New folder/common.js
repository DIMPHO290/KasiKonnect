// Common functionality for all user interphases

function logoutUser() {
    // Clear session or user data (simulate)
    alert('You have been logged out.');
   
    const tryRedirects = ['../welcome.html', './welcome.html', '/welcome.html', 'welcome.html'];
    for (const p of tryRedirects) {
        try {
           
            window.location.href = p;
            break;
        } catch (e) {
            
        }
    }
}

function loadBusinessProfile() {
    // Simulate loading business profile data
    document.getElementById('businessName').textContent = 'Sample Business';
    document.getElementById('serviceCount').textContent = '12';
    document.getElementById('recentClients').textContent = 'Mpho,Me ,You';
}

function loadClientProfile() {
    // Simulate loading client profile data
    document.getElementById('clientName').textContent = 'Sample Client';
    document.getElementById('servicesUsed').textContent = '7';
    document.getElementById('businessesUsed').textContent = 'Business X, Business Y';
}

function loadFreelancerProfile() {
    // Simulate loading freelancer profile data
    document.getElementById('freelancerName').textContent = 'Sample Freelancer';
    document.getElementById('jobsCompleted').textContent = '5';
    document.getElementById('clientsServed').textContent = 'Client A, Client D';
}
