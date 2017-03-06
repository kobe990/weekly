import jQuery from 'jquery'

var $ = jQuery

$(function() {

  $('document').ajaxSuccess(function() {
    alert('success')
  }).ajaxError(function() {
    alert('fail')
  })

  $.ajax({
    url: '/test'
  })
})