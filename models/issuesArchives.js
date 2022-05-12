const mongoose = require('mongoose');

const Archive = mongoose.Schema(
    {
        reporter_name: {
            type: String,
            required: [true, 'Please give a reporter name'],
        },
        status: {
            type: String,
            default: 'reported',
        },
        bug_category: {
            type: String,
            default: 'high',
            required: [true, 'Please give a bug category'],
        },
        bug_description: {
            type: String,
            required: [true, 'Please give a description'],
        },
        project_id: {
            type: String,
            required: [true, 'Project Id is needed'],
        },
    },
    { timestamps: true },
);
const model = mongoose.model('issueArchive', Archive);

module.exports = model;
