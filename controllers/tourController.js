const Tour = require('./../models/tourModel')

// const tours = JSON.parse(
//     fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
// );

exports.getAllTours = (req, res) => {
    res.status(200).json({
        status: 'success',
        // result: tours.length,
        // data: {
        //     tours
        // }
    })
}

exports.getTour = (req, res) => { // optional param -> :x?
    const id = req.params.id * 1;

    res.status(200).json({
        status: 'success',
        // data: {
            // tour
        // }
    })
}

exports.createTour = (req, res) => {
    res.status(201).json({
        status: 'success',
        // data: {
        //     tour: newTour
        // }
    })
}

exports.updateTour = (req, res) => {
    res.status(200).json({
        status: 'success',
        data: {
            tour: '<Updated tour here...>'
        }
    })
}

exports.deleteTour = (req, res) => {
    res.status(204).json({
        status: 'success',
        data: null
    })
}
