const getBaseUrl = () => {
  const url = window.location.href;
  const base = url.split("#")[0];
  const baseWithoutHttp = base.split("/")[2];
  switch (baseWithoutHttp) {
    case "192.168.0.4":
      return "http://192.168.0.4/kpmg_rst_api/api/v1/";
    default:
      return "https://apps.ng.kpmg.com/kpmg_rst_api/api/v1/";
  }
};
const baseUrl = getBaseUrl();
export default baseUrl;
