// var
var sec = $("section").height();
// init Isotope
var $grid = $(".grid").isotope({
    // options
    itemSelector: ".element-item"
});
// filter items on button click
$(".col").on("click", "svg", function() {
    $(this).addClass("rotar");
    $("section").css("display", "block");
    $(".muestraTodo").fadeIn("fast", function() {});
    var filterValue = $(this).attr("data-filter");
    $grid.isotope({ filter: filterValue });
    if (filterValue == ".special") {
        console.log(filterValue);
        $(".features").css("display", "none");
        $(".breakingNews").css("display", "none");
        $(".criteria").css("display", "none");
        $(".socialMediaGraphics").css("display", "none");
        $(".specials").css("display", "none");
    }
    if (filterValue == ".gold") {
        console.log(filterValue);
        $(".breakingNews").css("display", "none");
        $(".specialAwards").css("display", "none");
        $(".criteria").css("display", "none");
        $(".specials").css("display", "none");
    }
    if (filterValue == ".silver") {
        console.log(filterValue);
        $(".specialAwards").css("display", "none");
        $(".specials").css("display", "none");
    }
    if (filterValue == ".bronze") {
        console.log(filterValue);
        $(".specialAwards").css("display", "none");
    }
    if (filterValue == ".usa") {
        console.log(filterValue);
        $(".specials").css("display", "none");
    }
    if (filterValue == ".uk") {
        console.log(filterValue);
        $(".criteria").css("display", "none");
        $(".specials").css("display", "none");
    }
    if (filterValue == ".other") {
        console.log(filterValue);
        $(".specialAwards").css("display", "none");
        $(".socialMediaGraphics").css("display", "none");
    }
    if (filterValue == ".less") {
        console.log(filterValue);
        $(".specialAwards").css("display", "none");
    }
    if (filterValue == ".more") {
        console.log(filterValue);
        $(".specials").css("display", "none");
    }
});
$(".muestraTodo").on("click", "button", function() {
    $("section").css("display", "block");
    var filterValue = $(this).attr("data-filter");
    $grid.isotope({ filter: filterValue });
});
