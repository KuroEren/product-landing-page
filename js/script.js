;(function () {
  var queryString = window.location.search
  var href = window.location.href
  var parameters = new URLSearchParams(queryString)
  var name = parameters.get('name')
  var email = parameters.get('email')

  var currentUrl = document.querySelector('[data-url-current]')
  var domName = document.querySelector('[data-name]')
  var domEmail = document.querySelector('[data-email]')


  if (name && email) {
    domName.textContent = name
    domEmail.textContent = email
  }
})()