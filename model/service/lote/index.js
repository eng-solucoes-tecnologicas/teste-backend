const loteCRUD = {
    create: require('./create'),
    readAll: require('./read').readAll,
    readAllPaginated: require('./read').readAllPaginated,
    readByName: require('./read').readByName,
    update: require('./update'),
}

module.exports = loteCRUD


