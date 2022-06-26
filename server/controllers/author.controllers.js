const { response } = require("express");
const Author = require("../models/authors.model");

// module.exports.createAuthor = (request, response) => {
//     Author.create(request.body)
//         .then(author => {
//             response.json(author)
//         })
//         .catch(err => response.json(err));
// };

const createAuthor = (request, response) => {
        Author.create(request.body)
        .then(author => response.json(author))
        .catch(err => response.status(400).json({err}))
    }


const getAllAuthors = (request, response) => {
    Author.find({})
        .then((allAuthors) => {
            console.log(allAuthors);
            response.json(allAuthors);
        })
        .catch((err) => {
            response.status(400).json({err});
        });
}

const getOneAuthor = (request, response) => {
    Author.findOne({_id:request.params.id})
    .then(
        (oneAuthor) => {
            console.log(oneAuthor);
            response.json(oneAuthor);
        })
    .catch((err) => {
        response.status(400).json({ err });
    })
}

const deleteAuthor = (request, response) => {
    Author.deleteOne({_id:request.params.id})
        .then(
            deleteConfirmation => {response.json({deleteConfirmation})
            })
        .catch((err) => {
            response.status(400).json({err});
        });
};

const updateAuthor = (request, response) => {
    Author.findOneAndUpdate({_id: request.params.id}, request.body, {new: true, runValidators: true,})
        .then(
            updatedAuthor => response.json({updatedAuthor})
        )
        .catch((err) => {
            response.status(400).json({err})
        })
};

module.exports = {
    createAuthor,
    getAllAuthors,
    getOneAuthor,
    updateAuthor,
    deleteAuthor
  };