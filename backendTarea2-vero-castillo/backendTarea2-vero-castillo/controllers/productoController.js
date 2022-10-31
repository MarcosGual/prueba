const { Producto } = require("../models/Producto");

const obtenerProductos = async (req, res) => {
  const productos = await Producto.find();
  res.json({ productos });
  const obtenerProductoPorId = async (req, res) => {
    const producto = await Producto.findById(req.params.id);
    res.status(200).json({ producto });
  };
};

const cargarProducto = async (req, res) => {
  const producto = new Producto(req.body);
  await producto.save();
  res.status(201).json({
    msg: "El producto ha sido guardado exitosamente.",
    producto: producto,
  });
};

module.exports = { obtenerProductos, cargarProducto };
