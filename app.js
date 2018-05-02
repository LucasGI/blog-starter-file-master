$(document).ready(function () {
    $.ajax({
        url: "http://faker.hook.io/?property=name.firstName",
        method: 'GET',
        dataType: 'JSON'

    }).done(function(firstName) {
        setName(firstName)
    })

    $.ajax({
        url: "http://faker.hook.io/?property=internet.avatar",
        method: 'GET',
        dataType: 'JSON'

    }).done(function(image) {
        setPic(image)
    })
    $.ajax({
        url: "http://faker.hook.io/?property=date.recent",
        method: 'GET',
        dataType: 'JSON'

    }).done(function(date) {
        setDate(date)
    })
    $.ajax({
        url: "http://faker.hook.io/?property=lorem.words",
        method: 'GET',
        dataType: 'JSON'

    }).done(function(words) {
        setTitle(words)
    })
    $.ajax({
        url: "http://faker.hook.io/?property=lorem.paragraphs",
        method: 'GET',
        dataType: 'JSON'

    }).done(function(paragraphs) {
        setBody(paragraphs)
    })
    function setBody(content) {
        $('#post-body').html(content)
    }
    function setTitle(title) {
        $('#title').html(title)
    }
    function setDate(date) {
        var day = moment(date).date()
        var month = moment(date).format('MMMM')
        var year = moment(date).year()
        $('#date').html(month + " " + day + ", " + year)
    }
    function setPic(img) {
        $('#profile-pic').attr("src", img)
    }
    function setName(name) {
        $('#name').html(name)
    }
});