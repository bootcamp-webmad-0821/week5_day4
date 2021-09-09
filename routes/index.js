module.exports = app => {

    // Base Url's
    app.use("/", require("./base.routes"))

    app.use("/peliculas", require("./movies.routes"))
}