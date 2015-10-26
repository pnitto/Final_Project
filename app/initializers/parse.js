import $ from 'jquery';

$.ajaxSetup({
  beforeSend(xhr, options) {
    if(options.url.match(/api.parse.com/)) {
      xhr.setRequestHeader('X-Parse-Application-Id', '6zNXv076CevO0uSXc0hXsUDpYFu3rXM4rPGsSpan');
      xhr.setRequestHeader('X-Parse-REST-API-Key', 'UAaEg1mEyPL37cJUquxJirgr69ulRgblbBbalL4T');
      if(localStorage.getItem('parse-session-token')) {
        xhr.setRequestHeader('X-Parse-Session-Token', localStorage.getItem('parse-session-token'));
      }
    }
  }
});
