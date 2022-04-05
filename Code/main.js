
// =================[Body Tags]=============
const body = $('body');

// =================[JQuery of appending the chart into the div (First Chart)]==============
const div1 = $('<div></div>');
const chartCavnas = $('<canvas id="myChart"></canvas>');
div1.append(chartCavnas, '<hr></hr>');
body.append(div1);

// ==================[Code for the Sample Graph]==================
const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
];

const data = {
    labels: labels,
    datasets: [{
        label: 'My First dataset',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [0, 10, 5, 2, 20, 30, 45],
    }]
};

const config = {
    type: 'line',
    data: data,
    options: {}
};

const myChart = new Chart(
    document.getElementById('myChart'),
    config
);

// =================[JQuery of appending the chart into the div (YGO)]==============
const div2 = div1;
const ygoCanvas = $('<canvas id="yugioh"></canvas>');
div2.append(ygoCanvas);
body.append(div2);

// ==================[Donut chart of OCG MetaBreak down]=====================
const deckLists = [
    'Branded Despia',
    'Rose Dragon Adventurer Tenyi',
    'Floowandereeze',
    'Drytron',
    'Tri-Brigade',
    'Adventurer Prank-Kids',
    'Branded Predaplants',
    'Eldlich',
    'P.U.N.K. Therions',
    '@Ignister',
    'Adamancipator',
    'Sky Striker',
    'Tri-Brigade Lyrilusc',
    'Other'
];

const ygoData = {
    labels: deckLists,
    datasets: [{
        label: 'OCG Metagame Report #9, #10',
        data: [20, 8, 8, 7, 7, 4, 4, 4, 4, 4, 3, 3, 3, 21],
        backgroundColor: [
            'rgb(77,166,255)',
            'rgb(255,42,0)',
            'rgb(176,191,26)',
            'rgb(178,132,190)',
            'rgb(124,185,232)',
            'rgb(255,126,0)',
            'rgb(0,64,128)',
            'rgb(201,0,22)',
            'rgb(0,102,0)',
            'rgb(51,0,102)',
            'rgb(77,51,0)',
            'rgb(196,98,16)',
            'rgb(213,204,255)',
            'rgb(242,243,244)'
        ],
        hoverOffset: 40,
        borderColor: 'rgb(0.00,0.51,0.50,0.1)'
    }]
};

const ygoConfig = {
    type: 'doughnut',
    data: ygoData,
    options: {
        legend: {
            position: 'left'
        },
        radius: '75%',
    }
}

const ygoDoughnut = new Chart(
    document.querySelector('#yugioh'),
    ygoConfig
)


// console.log(deckLists.length);
// console.log(ygoData.datasets[0].backgroundColor.length);