AOS.init();

$("#subscription-form").submit(event => {
  event.preventDefault();
  const form = event.target;
  // form.submit();
  form.reset();
});
