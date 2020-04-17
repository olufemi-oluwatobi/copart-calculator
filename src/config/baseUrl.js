const getBaseUrl = () => {
  const url = window.location.href;
  const base = url.split("#")[0];
  const baseWithoutHttp = base.split("/")[2];
  switch (baseWithoutHttp) {
    case "192.168.0.4":
      return "http://192.168.0.4/AssetifyApi";
    default:
      //return "http://ec2-3-12-103-122.us-east-2.compute.amazonaws.com/AvatureClone/";
      //return "http://ec2-3-12-103-122.us-east-2.compute.amazonaws.com/kpmg_rst_api/api/v1/";
      return "https://apps.ng.kpmg.com/kpmg_rst_api/api/v1/";
    //return "http://3d25239a.ngrok.io/";
  }
};
const baseUrl = getBaseUrl();
export default baseUrl;
