/**
 */
'use strict';

import React, { Component } from 'react';
/**
 * React Native JS Http(s) POST/GET Json/unformat工具类
 * 核心知识点：JS fetch、Promise机制
 */
const DEBUG = false;

export default class NetUitl extends Component {
  static get(url, parseJson=true) {
    return this.request(url, 'get', undefined, parseJson);
  }

  static post(url, body, parseJson=true) {
    return this.request(url, 'post', body, parseJson);
  }

  static request(url, method, body, parseJson) {
    DEBUG && console.log("#REQUEST# NetUitl ["+method+"] url = "+url+", body = "+body);
    let isOk;
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: method,
        body: body
      })
      .then((response) => {
        isOk = !!response.ok;
        if (parseJson) {
          return response.json();
        } 
        return response.text();
      })
      .then((responseData) => {
        DEBUG && console.log("#RESPONSE# NetUitl ["+method+"] url = "+url+", body = "+body+", isOk="+isOk+", responseData="+responseData);
        if (isOk) {
          resolve(responseData);
        } else {
          reject(responseData);
        }
      })
      .catch((error) => {
        DEBUG && console.log("#RESPONSE# NetUitl ["+method+"] url = "+url+", body = "+body+", error="+error);
        reject(error);
      });
    });
  }
}