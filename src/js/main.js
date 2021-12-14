$(document).ready(function () {
    let currentFloor = 2;
    let floorPath = $(".main__img path");
    let counterUp = $(".counter__up");
    let counterDown = $(".counter__down");

    let modal = $(".modal");
    let modalCloseButton = $(".modal__close-button");

    let currentFlat = 40;
    let usCurrentFlat = 40;
    let flatPath = $(".modal__window path");
    let flatLink = $(".flat__item a");

    flatPath.on("mouseover", function() {
        let currentFlatOrder = +$(this).attr("data-flat") - 40;  
        $(`.flat__link:eq(${currentFlatOrder})`).addClass("flat-link-mouseover");
    });

    flatPath.on("mouseout", function() {
        $('.flat__link').removeClass('flat-link-mouseover');
      });

      flatLink.on("mouseover", function() {
        currentFlat = +$(this).attr("data-flat-link");
        let usCurrentFlat = currentFlat.toLocaleString('en-US', {minimumIntegerDigits: 2,
          useGroupping: false });
        $(`[data-flat=${usCurrentFlat}]`).addClass("flat-path-mouseover");
      });
      flatLink.on("mouseout", function() {
        $(`.flats path`).removeClass("flat-path-mouseover");
      });


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