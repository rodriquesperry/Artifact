
$(function() {
  $('#addTask').click(function() {
    if ($('#taskInput').val() != 0){
      const checkListItem = $('#taskInput').val();
      $('.tasksTab').append(`
        <div class="card tasks-tab-card">
          <div class="row">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">
                <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
              </svg>
              <div>
                  <p class="taskText">` + checkListItem + `</p>
              </div>
          </div>
        </div>
        `);
    }
    return $('#taskInput').val('');
  });

  $('#taskInput').keyup(function(e) {
    if (e.keyCode === 13) {
      $('#addTask').click();
    }
  });

  $('.tasks-tab-card').tooltip();
  $('.tasks-tab-card').dblclick(function() {
    $('.taskText').toggleClass('complete');
  });

});
