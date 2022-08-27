// These are headers used for sending requests
export const getHeaders = () => {
  var myHeaders = new Headers();
  myHeaders.append("authority", "reqres.in");
  myHeaders.append("accept", "*/*");
  myHeaders.append("accept-language", "en-US,en;q=0.9");
  myHeaders.append("content-type", "application/json");
  myHeaders.append(
    "cookie",
    "_ga=GA1.2.1145675843.1661343337; __stripe_mid=695cd39a-852d-4fe5-b5f6-958df23ace88db9e2a; _gid=GA1.2.1757911129.1661511311; __stripe_sid=3ee11ada-9744-4b42-a211-895a866f391c9f94d0"
  );
  myHeaders.append("origin", "https://reqres.in");
  myHeaders.append("referer", "https://reqres.in/");
  myHeaders.append(
    "sec-ch-ua",
    '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"'
  );
  myHeaders.append("sec-ch-ua-mobile", "?0");
  myHeaders.append("sec-ch-ua-platform", '"Windows"');
  myHeaders.append("sec-fetch-dest", "empty");
  myHeaders.append("sec-fetch-mode", "cors");
  myHeaders.append("sec-fetch-site", "same-origin");
  myHeaders.append(
    "user-agent",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36"
  );
  return myHeaders;
};
