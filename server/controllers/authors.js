const mongoose = require('mongoose');

const Author = mongoose.model('Author');

module.exports = {
    all(req, res) {
        Author.find()
            .then(allAuthors => res.json({ authors: allAuthors, msg: 'Author' }))
            .catch(errors => res.json({ errors: errors }))
    },
    one(req, res) {
        Author.find({ _id: req.params.id })
            .then(author => res.json({ author: author }))
            .catch(errors => res.json({ errors: errors }))
    },
    create(req, res) {
        Author.create(req.body)
            .then(author => res.json(author))
            .catch(errors => res.json({ errors: errors }))
    },
    update(req, res) {
        Author.findByIdAndUpdate(
            req.params.id, 
            req.body,
            {
                new: true,
                runValidators: true
            }
        )
            .then(author => res.json(author))
            .catch(errors => res.json({ errors: errors }))
    },
    
    delete(req, res) {
        Author.deleteOne({ _id: req.params.id })
            .then(author => res.json(author))
            .catch(errors => res.json({ errors: errors }))
    },
}