jQuery(function () {
  let submit = $("#submit");
  let name = $("#name");
  let email = $("#email");
  let phone = $("#phone");
  let message = $("#message");

  let required = [name, email, phone];

  submit.on("click", function () {
    for (let i = 0; i < required.length; i++) {
      if (required[i].val() === "") {
        message.html("Please fill out the required fields");
        message.addClass("warning");
        required[i].prev().addClass("warning");
      }
      if (required[i].val() !== "") {
        required[i].prev().removeClass("warning");
      }
    }
    if (!$("label").hasClass("warning")) {
      $("#form").remove();
    }
  });
});
