function getUrlParameter(url, parameter) {
  let queryStr = url.split('?')[1];
  let params = queryStr.split('&');
  for (let i = 0; i < params.length; i++) {
      let pair = params[i].split('=');      
      if (pair[0] === parameter) {
          return pair[1];
      }
  }
  return null;
}

var url = "https://www.kommunicate.io/poweredby?utm_source=https://www.kommunicate.io/&utm_medium=webplugin&utm_campaign=poweredby";
console.log(getUrlParameter(url, "utm_medium"));  
