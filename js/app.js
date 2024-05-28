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

// 21dd
