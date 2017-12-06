module.exports = function(a) {
    var query = a.data.root.query;
    return query.name + query.suffix;
}