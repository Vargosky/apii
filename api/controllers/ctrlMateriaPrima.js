const RawMaterial = require('../model/MateriaPrima');

const getAllRawMaterials = async (req, res) => {
    try {
        console.log("Iniciando consulta a MongoDB Atlas...");
        const rawMaterials = await RawMaterial.find().sort({ name: 1 });
        console.log("Consulta exitosa, devolviendo datos...");
        res.status(200).json(rawMaterials);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


module.exports = {
    getAllRawMaterials
}