module.exports = {
    
    getHouses(req, res) {
        let db = req.app.get('db')

        db.get_houses().then( response => {
            res.status(200).send(response)
        }).catch(err => {
            res.status(500).send(err)
        })
    },

    addHouse(req, res) {
        let db = req.app.get('db')
        let { propertyName, address, city, state, zip, img, mortgage, rent } = req.body

        db.add_house({propertyName, address, city, state, zip, img, mortgage, rent}).then( response => {
            res.status(200).send(response)
        }).catch( err => {
            console.log('There was an error', err)
        })
    },

    deleteHouse(req, res) {
        let db = req.app.get('db')
        let { id } = req.params

        db.delete_house({ id }).then( response => {
            res.status(200).send(response)
        }).catch( err => {
            console.log('There was an error', err)
        })
    }
}