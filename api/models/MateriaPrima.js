const RawMaterial = require('../model/MateriaPrima');

const getAllRawMaterials = async (req, res) => {
    try {
        const rawMaterials = await RawMaterial.find().sort({ name: 1 });
        res.status(200).json(rawMaterials);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};