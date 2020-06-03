const models = require('../../models');

exports.get_products = (_, res) => {
    models.Products.findAll({

    }).then((products) => {
        // res.render('admin/products.html', { products: products });
        // javascript는 key와 value의 이름이 같을 경우 key명만 작성해도 됨.
        res.render('admin/products.html', { products });
    });
}

exports.get_products_write = (_, res) => {
    res.render('admin/write.html');
}

exports.post_products_write = (req, res) => {
    // models.Products.create({
    //     name: req.body.name,
    //     price: req.body.price,
    //     description: req.body.description
    // }).then( () => {
    //     res.redirect('/admin/products');
    // });
    // req.body의 값이 json key필드명에 맞춰서 전달되므로 위방법과 아래 방법이 동일함
    models.Products.create(req.body).then(() => {
        res.redirect('/admin/products');
    });
}

exports.get_products_detail = (req, res) => {
    // req.params.id
    models.Products.findByPk(req.params.id).then((product) => {
        res.render('admin/detail.html', { product });
    });
}

exports.get_products_edit = (req, res) => {
    models.Products.findByPk(req.params.id).then((product) => {
        res.render('admin/write.html', { product });
    })
}

exports.post_products_edit = (req, res) => {
    models.Products.update({
        name: req.body.name,
        price: req.body.price,
        description: req.body.description
    }, {
        where: { id: req.params.id }
    }
    ).then(() => {
        res.redirect('/admin/Products/detail/' + req.params.id);
    });
}