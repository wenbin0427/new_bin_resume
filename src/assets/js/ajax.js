
$(function () {
  $(".topicsmenu>button").click(function (e) {
    $(".topicsmenu>button.selected").removeClass();
    $(".topicsmenu>button").addClass('btn card-body btn-outline-dark');
    $(".topicsview").load($(this).addClass("selected").attr("href"));
    e.preventDefault();
  }).first().click();
});

$(function () {
  $(".twsigmenu>button").click(function (e) {
    $(".twsigmenu>button.twselected").removeClass();
    $(".twsigmenu>button").addClass('btn card-body btn-outline-dark');
    $(".twsigview").load($(this).addClass("twselected").attr("href"));
    e.preventDefault();
  }).first().click();
});

$(function () {
  $(".itemsmenu>button").click(function (e) {
    $(".itemsmenu>button.itemsselected").removeClass();
    $(".itemsmenu>button").addClass('btn card-body btn-outline-dark');
    $(".itemsview").load($(this).addClass("itemsselected").attr("href"));
    e.preventDefault();
  }).first().click();
});

$(function () {
  $(".ESP32>button").click(function (e) {
    $(".ESP32>button.ESP32selected").removeClass();
    $(".ESP32>button").addClass('btn card-body btn-outline-dark');
    $(".iotespsview").load($(this).addClass("ESP32selected").attr("href"));
    e.preventDefault();
  }).first().click();
});
$(function () {
  $(".DV>button").click(function (e) {
    $(".DV>button.DVselected").removeClass();
    $(".DV>button").addClass('btn card-body btn-outline-dark');
    $(".DVview").load($(this).addClass("DVselected").attr("href"));
    e.preventDefault();
  }).first().click();
});
