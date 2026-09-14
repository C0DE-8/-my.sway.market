const ctx = document.getElementById('doughnutChart');

new Chart(ctx, {
    type: 'doughnut',
    data: {
    labels: [
        'Contingency',
        'Investor',
        'Legal & Regulation',
        'Business Development',
        'Poland',
        'Czech Republic',
    ],
    datasets: [{
        label: ['Funding Allocation'],
        data: [100, 100, 100, 100, 100, 100],
        borderWidth: 0,
        backgroundColor: [
        '#44A08D',
        '#136F84',
        '#0B446D',
        '#033356',
        '#012641',
        '#191F28',
        ],
        hoverOffset: 4
    }],
    },
    options: {
        plugins: {
            legend: {
                display: false
            }
        }
    }
});
