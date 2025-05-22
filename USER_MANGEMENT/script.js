$(document).ready(function () {
  $('#userForm').submit(function (e) {
    e.preventDefault();
    const user = {
      name: $('input[name="name"]').val(),
      age: parseInt($('input[name="age"]').val()),
      gender: $('input[name="gender"]').val(),
      contact: $('input[name="contact"]').val(),
      username: $('input[name="username"]').val(),
      password: $('input[name="password"]').val()
    };
    $.ajax({
      url: '/add-user',
      method: 'POST',
      contentType: 'application/json',
      data: JSON.stringify(user),
      success: function () {
        alert("User added!");
        loadUsers();
        $('#userForm')[0].reset();
      },
      error: function (xhr) {
        alert("Registration failed: " + xhr.responseText);
      }
    });
  });

  $('#search').on('input', function () {
    const query = $(this).val().toLowerCase();
    $("#users li").filter(function () {
      $(this).toggle($(this).text().toLowerCase().includes(query));
    });
  });

  function loadUsers() {
    $.get('/users', function (data) {
      $('#users').empty();
      data.forEach(user => {
        $('#users').append(`<li>${user.id}: ${user.name} (${user.age}, ${user.gender}) - ${user.contact}</li>`);
      });
      drawChart(data);
    });
  }

  function drawChart(users) {
    const genders = { Male: 0, Female: 0, Other: 0 };
    users.forEach(u => {
      if (genders[u.gender]) genders[u.gender]++;
      else genders["Other"]++;
    });

    const ctx = document.getElementById('userChart').getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Male', 'Female', 'Other'],
        datasets: [{
          label: '# of Users',
          data: [genders.Male, genders.Female, genders.Other],
          backgroundColor: ['#4e73df', '#e83e8c', '#36b9cc']
        }]
      }
    });
  }

  loadUsers();
});