$(document).ready(function () {
    $('.socials a').hover(
        function () {
            $(this).find('img').css('transform', 'scale(1.2)');
        },
        function () {
            $(this).find('img').css('transform', 'scale(1)');
        }
    );
});

$.ajax({
    url: 'https://api.github.com/users/LzoMor95/repos',
    method: 'GET',
    dataType: 'json',
    success: function (data) {
        displayRepositories(data);
    },
    error: function (error) {
        console.log('Error:', error);
    }
});

function displayRepositories(repos) {
    var reposList = $('#repos');
    repos.forEach(function (repo) {
        var listItem = $('<li></li>');
        var link = $('<a></a>');
        link.attr('href', repo.html_url);
        link.text(repo.name);
        listItem.append(link);
        reposList.append(listItem);
    });
}