import store from '@/store/store';

/* eslint-disable no-extend-native */
Array.prototype.move = function (from, to) {
  this.splice(to, 0, this.splice(from, 1)[0]);
};

export function demo () {
  return null;
};

export function compareByKey (list, key) {

  function sortByKey (a, b) {
    return a[key].localeCompare(b[key], 'cs');
  }

  return list.sort(sortByKey);
}

export function beautifyDate (date) {
  return (date.getDate()) + '. ' + (date.getMonth() + 1) + '. ' + (date.getYear() + 1900);
};

export function beautifyDay (day) {
  return day;
};

export function beautifyHours (hours) {

  var closing = {};

  closing.h = Math.floor(hours);
  closing.m = Math.round((hours - closing.h) * 60);

  if (closing.h > 24) closing.h -= 24;

  return closing.h + ':' + (closing.m < 10 ? '0' + closing.m : closing.m);
};

export function beautifyPhone (phone) {

  if (String(phone).indexOf(' ') > -1) return phone;

  phone = String(phone);

  return '<span class="phone-country">+420</span> <span class="phone-number">' + phone.split('').splice(0, 3).join('') + ' ' + phone.split('').splice(3, 3).join('') + ' ' + phone.split('').splice(6, 3).join('') + '</span>';
};

export function beautifyHTML (str) {

  var map = {
    '&amp;': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&#039;': "'"
  };
  return str.replace(/&amp;|&lt;|&gt;|&quot;|&#039;/g, (m) => map[m]);
}

export function uglifyHTML (str) {
  var map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return str.replace(/[&<>"']/g, function (m) {
    return map[m];
  });
}

function __time (date) {
  var o = {};

  o.date = date ? new Date(date) : new Date();
  o.time = {
    h: o.date.getHours(),
    m: o.date.getMinutes(),
    s: o.date.getSeconds()
  };
  o.day = {
    dayOfWeek: o.date.getDay(),
    date: o.date.getDate(),
    month: o.date.getMonth() + 1,
    year: o.date.getYear() + 1900
  }

  o.day.dayOfWeek = o.day.dayOfWeek + 6;
  if (o.day.dayOfWeek > 6) o.day.dayOfWeek = o.day.dayOfWeek - 7;

  return o;
}

export function timeInfo (date) {
  return __time(date);
}

setInterval(function () {
  store.state.current = __time();
}, 1000);
