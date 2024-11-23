document.addEventListener('DOMContentLoaded', function() {
    // Initialize UA Parser
    const parser = new UAParser();
    const result = parser.getResult();

    // Update device information
    const deviceInfo = document.getElementById('deviceInfo');
    const device = result.device;
    deviceInfo.innerHTML = `
        <p class="text-gray-600"><strong>Brand:</strong> ${device.vendor || 'Unknown'}</p>
        <p class="text-gray-600"><strong>Model:</strong> ${device.model || 'Unknown'}</p>
        <p class="text-gray-600"><strong>Type:</strong> ${device.type || 'Unknown'}</p>
    `;

    // Update browser information
    const browserInfo = document.getElementById('browserInfo');
    const browser = result.browser;
    browserInfo.innerHTML = `
        <p class="text-blue-600"><strong>Name:</strong> ${browser.name || 'Unknown'}</p>
        <p class="text-blue-600"><strong>Version:</strong> ${browser.version || 'Unknown'}</p>
    `;

    // Update OS information
    const osInfo = document.getElementById('osInfo');
    const os = result.os;
    osInfo.innerHTML = `
        <p class="text-green-600"><strong>Name:</strong> ${os.name || 'Unknown'}</p>
        <p class="text-green-600"><strong>Version:</strong> ${os.version || 'Unknown'}</p>
    `;
});
