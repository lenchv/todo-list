
module.exports = (model) => {
    const _create = (entity) => {
        return model.create(entity);
    };
    const _update = (entity) => {
        return model.updateOne({ _id: entity._id }, entity);
    };
    const _delete = (entity) => {
        return model.deleteOne({ _id: entity._id });
    };
    const _findByCriteria = (criteria) => {
        return model.find(criteria);
    };
    const _findById = (id) => {
        return model.findOne({ _id: id });
    };

    return {
        "create": _create,
        "update": _update,
        "delete": _delete,
        "findByCriteria": _findByCriteria,
        "_findById": _findById
    };
};
