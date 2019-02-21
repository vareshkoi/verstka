console.log("hi, i am ready");
const btn = $(".buy-list-line-add"),
  line = $(".buy-list-line-to-buy"),
  list = $(".buy-list-to-buy-list");
btn.click(e => {
  e.preventDefault();
  line.val().length > 0 ? list.append(`<li>${line.val()}</li>`) : "";
  line[0].value = ""
});
