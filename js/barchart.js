var ctx = document.getElementById('myChart').getContext('2d');

var gradient = ctx.createLinearGradient(0, 0, 0, 400);
gradient.addColorStop(0, 'rgba(255, 99, 132, 0.7)');
gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

var gradient2 = ctx.createLinearGradient(0, 0, 0, 400);
gradient2.addColorStop(0, 'rgba(0, 0, 0, 0.7)');
gradient2.addColorStop(1, 'rgba(255, 255, 255, 0)');

var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ["Product Bug with IR", "Product Bug without IR", "Automation Issue with IR", "Automation Issue without IR", "To Investigate"],
        datasets: [
            {
                label: "Error",
                backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"],
                data: [22, 4, 12, 6,47]
            }
        ]
    },

    // Configuration options go here
    options: {
        legend: { display: false },
        title: {
            display: true,
            text: 'Error Types'
        }
    }
});
