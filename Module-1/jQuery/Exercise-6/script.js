$(function () {

    $("#box").click(function () {

        $(this).text("Clicked!");

    });

    $("#box").dblclick(function () {

        $(this).css("background-color", "yellow");

    });

    $("#box").mouseenter(function () {

        $(this).css("color", "blue");

    });

    $("#box").mouseleave(function () {

        $(this).css("color", "black");

    });

    $("#inputBox").keypress(function () {

        $("#message").text("Key Press Detected");

    });

});
