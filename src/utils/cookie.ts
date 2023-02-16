export const getCookie = (name: string, cookies?: string) => {
  const result = (cookies ? cookies : document.cookie)
    ?.split(`${name}=`)
    ?.pop()
    ?.split(";")[0] as any;
  return result ? JSON.parse(result) : null;
};

export const setCookie = (name: string, value: string) => {
  document.cookie = `${name}=` + JSON.stringify(value);
};

export const removeCookie = (name: string) => {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
};

export function removeAllCookies() {
  //1
  // var res = document.cookie;
  // var multiple = res.split(";");
  // for (var i = 0; i < multiple.length; i++) {
  //   var key = multiple[i].split("=");
  //   document.cookie = key[0] + "=; expires=Thu, 01 Jan 1980 00:00:00 GMT";
  // }
  //2
  // document.cookie.split(";").forEach(function (c) {
  //   document.cookie = c
  //     .replace(/^ +/, "")
  //     .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
  // });
  //3
  var allCookies = document.cookie.split(";");
  for (var i = 0; i < allCookies.length; i++)
    document.cookie = allCookies[i] + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
}
