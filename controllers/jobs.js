const express = require('express');
const Job = require('../models/Job');

const router = express.Router();

// INDEX
// GET api/jobs
router.get('/', (req, res) => {});

// SHOW
// GET api/jobs/5a7db6c74d55bc51bdf39793
router.get('/:id', (req, res) => {});

// CREATE
// POST api/jobs
router.post('/', (req, res) => {});

// UPDATE
// PUT api/jobs/5a7db6c74d55bc51bdf39793
router.put('/:id', (req, res) => {});

// DESTROY
// DELETE api/jobs/5a7db6c74d55bc51bdf39793
router.delete('/:id', (req, res) => {});

module.exports = router;
