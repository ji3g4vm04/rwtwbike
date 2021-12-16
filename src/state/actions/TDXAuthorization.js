import jsSHA from "jssha";

export const GetAuthorizationHeader = (GMTString = new Date().toGMTString()) => {
  //  填入自己 ID、KEY 開始
      let AppID = '7f88322d52904d2a93b9796b18ed0349';
      let AppKey = 'RdMRKCV_cY6FVf9zI9_yY3-OAIM';
  //  填入自己 ID、KEY 結束
      let ShaObj = new jsSHA('SHA-1', 'TEXT');
      ShaObj.setHMACKey(AppKey, 'TEXT');
      ShaObj.update('x-date: ' + GMTString);
      let HMAC = ShaObj.getHMAC('B64');
      let Authorization = 'hmac username=\"' + AppID + '\", algorithm=\"hmac-sha1\", headers=\"x-date\", signature=\"' + HMAC + '\"';
      return { 'Authorization': Authorization, 'X-Date': GMTString }; 
  }