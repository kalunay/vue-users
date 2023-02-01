const { User } = require('../model');

module.exports = {
    async get({ params: {id} }, res){
        const item = await User.findById(id);
        return res.status(200).send(item);
    },
    async getAll(req, res){
        const items = await User.find();
        return res.status(200).send(items);
    },
    async create({ body }, res){
        const item = new User(body);
        const newItem = await item.save();
        return res.status(200).send(newItem);
    },
    async update({ params: {id}, body}, res){
        const item = await User.findByIdAndUpdate(id, body, {new: true});
        return res.status(200).send(item);
    },
    async delete({ params: {id} }, res){
        await User.findByIdAndDelete(id)
        return res.status(200).send({ status: 'OK', message: 'Delete success'});
    },
};

/*const userCrud = (User) => ({
    async get({ params: {id} }){
        const item = await model.findById(id);
        return item;
    },
    async getAll(){
        const items = await model.find();
        return items;
    },
    async create({ body }){
        const item = new model(body);
        const newItem = await item.save();
        return newItem;
    },
    async update({ params: {id}, body}){
        const item = await model.findByIdAndUpdate(id, body, {new: true});
        return item;
    },
    async delete({ params: {id} }){
        await model.findByIdAndDelete(id)
        return { status: 'OK', message: 'Delete success'};
    },
});

module.exports = userCrud;*/