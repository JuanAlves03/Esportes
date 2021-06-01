const produto = require('../model/produto')

module.exports = {
    async list(req,res){

    },
    async filtro(req,res){

    },
    async abreadd(req,res){
        res.render('admim/produto/add.ejs',{ msg : req.flash('msg') })
    },
    async add(req,res){
        const { nome, valor, tipo } = req.body;
        await produto.create({ nome, valor, tipo }).then((produto) => {
            req.flash('msg',produto.nome + ' foi adicionado com sucesso!')
            req.redirect('admim/produtdo/add');
        }, (err) => {
            req.flash('msg', "problema ao adicionar o produto " + produto.nome)
            res.redirect('/admim/produto/add');
        });
    },
    async abreedit(req,res){

    },
    async edit(req,res){

    },
    async del(req,res){

    },
}