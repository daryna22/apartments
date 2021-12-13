$(document).ready(function () {
    let currentFloor = 2;
    let floorPath = $(".main__img path");
    let counterUp = $(".counter__up");
    let counterDown = $(".counter__down");

    let modal = $(".modal");
    let modalCloseButton = $(".modal__close-button");

    let viewFlatsButton = $(".view__flats");

    viewFlatsButton.on("click", toggleModal)

    floorPath.on("mouseover", function () {
        floorPath.removeClass("current__floor");
        currentFloor = $(this).attr("data-floor");
        $(".counter").text(currentFloor);
    });

floorPath.on("click", toggleModal);
modalCloseButton.on("click", toggleModal);

    counterUp.on("click", function() {
        if (currentFloor < 18) {
            currentFloor++;
        usCurrentFloor = currentFloor.toLocaleString("en-US", { minimumIntegerDigits: 2, useGrouping: false});
        $(".counter").text(usCurrentFloor);
        floorPath.removeClass("current__floor");
        $(`[data-floor=${usCurrentFloor}]`).toggleClass("current__floor");
        }
    });

    counterDown.on("click", function() {
        if (currentFloor > 2) {
            currentFloor--;
            usCurrentFloor = currentFloor.toLocaleString("en-US", { minimumIntegerDigits: 2, useGrouping: false});
            $(".counter").text(usCurrentFloor);
            floorPath.removeClass("current__floor");
        $(`[data-floor=${usCurrentFloor}]`).toggleClass("current__floor");
        }
    });
    function toggleModal() {
        modal.toggleClass("is-open")
    }
});