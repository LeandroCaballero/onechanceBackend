const { EnvironmentCredentials } = require('aws-sdk');
const aws = require('aws-sdk')

const uploadController = {};  //definicion del objeto
const s3 = new aws.S3({
    accessKeyId: process.env.accessKeyId,
    secretAccessKey: process.env.secretAccessKey
})

uploadController.upload = async (req, res) => {
    console.log(req.files.image.name)
    //const now = Date.now()
    const id = req.body.id

    var paramPut = {
            Bucket: 'onechancebucket',
            Key: `${id}-${req.files.image.name}`, //Aca se coloca el nombre que va a aparecer en s3
            Body: req.files.image.data  //Lo que queremos enviar
        }
    
    s3.putObject(paramPut, (err, data) => {
        if(err) throw err
        console.log(data)
    })

    res.send({
        message: "Archivo recibido"
    })
}

module.exports = uploadController;