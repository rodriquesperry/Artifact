$(function() {

  $('#addTask').click(function() {
    if ($('#taskInput').val() != 0){
      const checkListItem = $('#taskInput').val();
      $('.tasksTab').append(`
      <li class="taskCard">
      <div class="card tasks-tab-card" title="Double click on a task to mark it complete and delete">
        <div class="row">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">
            <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
          </svg>
          <p class="taskText">` + checkListItem + `</p>
        </div>
      </div>
    </li>
      `);
    }
    return $('#taskInput').val('');
  });

  $('#taskInput').keyup(function(e) {
    if (e.keyCode === 13) {
      $('#addTask').click();
    }
  });

  $(document).on('dblclick', '.tasks-tab-card', function() {
    $(this).toggleClass('complete').fadeOut('slow');
  });

  $('.tasksTab').sortable({
    items: '.taskCard'
  });

  $('.kboard').sortable({
    items: '.canvas',
  });

  $('.canvas').sortable({
    items: '.kcard'
  });

  $('#canvasModal').on('shown.bs.modal', function () {
    $('#canvasTitleInput').trigger('focus')
  });

  $(document).on('dblclick', '.canvas', function() {
    $(this).toggleClass('complete').fadeOut('slow');
  });
  
  $('#buildCanvas').click(function() {
    if ($('#canvasTitleInput').val() != 0) {
      const canvasTitle = $('#canvasTitleInput').val();
      $('.canvasBoard').append(`
      <div class="canvas">
      <h4 class="canvasTitle" title="Double Click to Delete Canvas">` + canvasTitle + `</h4>
      <div class="canvas-footer d-flex justify-content-center"><button class="btn btn-link">Add Task</button></div>
      </div>
      `);
    }
    return $('#canvasTitleInput').val('');
  });

  $('#canvasTitleInput').keyup(function(e) {
    if (e.keyCode === 13) {
      $('#buildCanvas').click();
    }
  });

  $('.createProj').click(function() {
    alert('A new page will open up with a form for Project name, description and select/add team members.');
  });

  $('.createTeam').click(function() {
    alert('Page opens where you can create team name invite new team members or select from members via checkboxes.');
  });

  $('.addFile').click(function() {
    alert('Redirect to files page, where you will be able to drag and drop or select files to upload.')
  })

});

$('.teamBtn').tooltip();
$('.projectBtn').tooltip();
$('.tasks-tab-card').tooltip();
$('.canvasTitle').tooltip();
$('project-name').tooltip();


Circles.create({
  id:                  'circle-thisWeek',
  radius:              50,
  value:               75,
  maxValue:            100,
  width:               5,
  text:                function(value){return value + '%';},
  colors:              ['#bedcfa', '#0098ef'],
  duration:            1500,
  wrpClass:            'circles-wrp',
  textClass:           'circles-text',
  valueStrokeClass:    'circles-valueStroke',
  maxValueStrokeClass: 'circles-maxValueStroke',
  styleWrapper:        true,
  styleText:           true
});

Circles.create({
  id:                  'circle-lastWeek',
  radius:              50,
  value:               89,
  maxValue:            100,
  width:               5,
  text:                function(value){return value + '%';},
  colors:              ['#d1ffa2', '#54e346'],
  duration:            1500,
  wrpClass:            'circles-wrp',
  textClass:           'circles-text',
  valueStrokeClass:    'circles-valueStroke',
  maxValueStrokeClass: 'circles-maxValueStroke',
  styleWrapper:        true,
  styleText:           true
});

let ctx = $('#timeChart');

let timeChart = new Chart(ctx, {
  type: 'bar',
  data: {
      labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      datasets: [{
          label: 'hours worked',
          data: [0, 12, 3, 5, 2, 3,],
          backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
      }]
  },
  options: {
    responsive: true,
      scales: {
          yAxes: [{
              ticks: {
                  beginAtZero: true
              }
          }]
      }
  }
});



