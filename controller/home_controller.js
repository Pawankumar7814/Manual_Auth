module.exports.home = function(req, res) {
    // return res.end('<h1>Express is up for codeial</h1>');
    return res.status(200).render('../views/home.ejs');
}