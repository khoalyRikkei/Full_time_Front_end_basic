$(window).on("load", () => {
  $.get({
    url: "ajax.html",
  }).done((res) => {
    const userElement = $(res).find("#users")[0];

    console.log(res);
    $("body").append(userElement);
  });
});
