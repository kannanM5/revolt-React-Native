export const baseUrl = 'http://cbe.themaestro.in/revolt/webservice/';

export const EMAIL_REGEX =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const MOBILE_REGEX =
  /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[6789]\d{9}$/gm;

export const NUMBER = /^[0-9]*$/;

export const SPECIAL_CHARACTER_REGEX = /^[A-Za-z0-9\s]+$/;

export const FILESBASEURL = 'http://cbe.themaestro.in/revolt/';

export const trimString = (str, maxLength) => {
  return str.length > maxLength ? str.substring(0, maxLength) + '...' : str;
};
