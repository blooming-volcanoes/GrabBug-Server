const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    description: {
        type: String,
    },
    created_By: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
    },
    assigned_person: {
        type: String,
    },
    deadline: {
        type: Date,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

// hashing the password before save to the DB
const Projects = mongoose.model('Projects', projectSchema);
const DeleteProject = mongoose.model('deleteProject', projectSchema);

module.exports = { Projects, DeleteProject };
