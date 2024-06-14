    let itemCount = 1;

    function duplicateItem() {
        itemCount++;

        // Get the container element where new items will be added
        const container = document.getElementById('ResultsContainer');

        // Get the original item to duplicate
        const originalItem = document.getElementsByClassName("column")[0];

        // Clone the original item
        const newItem = originalItem.cloneNode(true);

        // Update the content of the new item
        document.getElementById("job-title").textContent = generatePythonJobTitle();
        document.getElementById("company").textContent = generateCompanyName();
        document.getElementById("job-location").textContent = generateNonExistentLocation();
        document.getElementById("job-date").textContent = getRandomDate(2018);
        console.log(document.getElementById("job-title").textContent)

        // Append the new item to the container
        container.appendChild(newItem);
    }

    // Function to duplicate items on page load
    function duplicateItemsOnLoad(count) {
        for (let i = 1; i < count; i++) {
            duplicateItem();
        }
    }

    // Call the function to duplicate items when the page loads
    window.onload = function () {
        duplicateItemsOnLoad(100); // Change the number to duplicate more items
    };

    function getRandomDate(startYear) {
        const startDate = new Date(startYear, 0, 1); // January 1, 2018
        const endDate = new Date(); // Today
        const randomTime = startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime());
        const randomDate = new Date(randomTime);
        const yearStr = randomDate.getFullYear();
        const monthStr = String(randomDate.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
        const dayStr = String(randomDate.getDate()).padStart(2, '0');
        return `${yearStr}-${monthStr}-${dayStr}`;
    }

    function getRandomElement(array) {
        return array[Math.floor(Math.random() * array.length)];
    }

    function generatePythonJobTitle() {
        const levels = ['Junior', 'Mid-level', 'Senior', 'Lead', 'Principal', 'Chief'];
        const roles = ['Developer', 'Engineer', 'Architect', 'Specialist', 'Analyst', 'Programmer'];
        const focuses = ['Backend', 'Frontend', 'Full Stack', 'Data Science', 'Machine Learning', 'DevOps', 'Automation'];

        const level = getRandomElement(levels);
        const role = getRandomElement(roles);
        const focus = getRandomElement(focuses);

        return `${level} Python ${role} - ${focus}`;
    }

    function generateCompanyName() {
        const prefixes = ['Tech', 'Info', 'Global', 'NextGen', 'Dynamic', 'Future', 'Alpha', 'Quantum'];
        const coreWords = ['Solutions', 'Systems', 'Networks', 'Innovations', 'Technologies', 'Ventures', 'Enterprises'];
        const suffixes = ['Inc', 'LLC', 'Corp', 'Ltd', 'Group', 'Co', 'Technologies'];

        const prefix = getRandomElement(prefixes);
        const coreWord = getRandomElement(coreWords);
        const suffix = getRandomElement(suffixes);

        return `${prefix} ${coreWord} ${suffix}`;
    }

    function generateNonExistentLocation() {
        const cities = ['Springfield', 'Centerville', 'Fairview', 'Greenwood', 'Oakdale', 'Riverside', 'Pinecrest', 'Windsor'];
        const states = ['California', 'Texas', 'Florida', 'New York', 'Oregon', 'Washington', 'Colorado', 'Arizona'];

        const city = getRandomElement(cities);
        const state = getRandomElement(states);

        return `${city}, ${state}`;
    }
