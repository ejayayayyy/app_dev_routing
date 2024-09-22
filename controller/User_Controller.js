const modules = {
    index:(req, res) => {
        res.render('index');
    },

    second:(req,res) => {
        res.render('second');
    },

    third:(req,res) => {
        res.render('third');
    },

    fourth:(req,res) => {
        res.render('fourth');
    },

    fifth:(req,res) => {
        res.render('fifth');
    }
}

module.exports = modules;