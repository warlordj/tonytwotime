

export const webApp = new sst.aws.StaticSite("WebApp", {
  path: "frontend",
  indexPage: "index.html",
  errorPage: "index.html",
})