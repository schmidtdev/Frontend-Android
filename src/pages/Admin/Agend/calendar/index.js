import React from 'react';
import './index.css';

function Calendar(){

    document.addEventListener('DOMContentLoaded', function() {
        var calendarEl = document.getElementById('calendar');

        var calendar = new FullCalendar.Calendar(calendarEl, {
        plugins: [ 'interaction', 'dayGrid' ],
        locale: 'pt-br',
        header: {
            left: 'prevYear,prev,next,nextYear today',
            center: 'title',
            right: 'dayGridMonth,dayGridWeek,dayGridDay'
        },
        defaultDate: '2019-08-12',
        navLinks: true, 
        editable: true,
        eventLimit: true, 
        });

        calendar.render();
    });

    return(

        <div className="container-fluid">

            <div id='calendar'></div>

        </div>

    );
}