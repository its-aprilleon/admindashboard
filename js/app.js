//start right nav

const getsitesetting = document.querySelector('#sitesettings');

getsitesetting.addEventListener('click', function () {
    document.body.classList.toggle('show-nav');
});

//end right nav

// start navbar
// start top nav bar

function dropbtn(e) {
    /* if "JS event function" is written inline in html code, you must include (event) as a default parameter // eg.  onclick='dropbtn(event);' */

    // console.log(e.target);
    // console.log(this);

    e.target.parentElement.nextElementSibling.classList.toggle('show');
}

// end top nav bar

$(document).ready(function () {
    // start navbar

    /* start left sidebar */
    $('.sidebarlinks').click(function () {
        $('.sidebarlinks').removeClass('currents');
        $(this).addClass('currents');
    });
    /* end left sidebar */

    // end navbar
});

// start earning area

google.charts.load('current', { packages: ['corechart'] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Year', 'Sales', 'Expenses'],
        ['2004', 1000, 400],
        ['2005', 1170, 460],
        ['2006', 660, 1120],
        ['2007', 1030, 540],
    ]);

    var options = {
        title: 'Sales Performance',
        curveType: 'function',
        legend: { position: 'bottom' },
    };

    var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

    chart.draw(data, options);
}

// end earning area

// Start footer

const getyear = document.querySelector('#getyear');
const getfullyear = new Date().getFullYear();

getyear.innerText = getfullyear;

// End footer

// 21dd
