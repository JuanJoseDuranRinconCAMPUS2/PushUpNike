
CREATE DATABASE db_Nike;

USE db_Nike;

CREATE TABLE genero (
    id INT AUTO_INCREMENT PRIMARY KEY COMMENT'Identificador del genero',
    nombre VARCHAR(50) NOT NULL COMMENT'Nombre del genero',
    abreviatura VARCHAR(10) NOT NULL COMMENT'Abreviatura del genero'
)

CREATE TABLE tipo_Documento (
    id INT AUTO_INCREMENT PRIMARY KEY COMMENT'Identificador del tipo de documento',
    nombre VARCHAR(50) NOT NULL COMMENT'Nombre del tipo de documento',
    abreviatura VARCHAR(10) NOT NULL COMMENT'Abreviatura del tipo de documento'
)

CREATE TABLE rol (
    id INT AUTO_INCREMENT PRIMARY KEY COMMENT'Identificador del rol',
    nombre VARCHAR(50) NOT NULL COMMENT'Nombre del rol',
    funciones VARCHAR(500) NOT NULL COMMENT'Funciones del rol'
)

CREATE TABLE categoria_P (
    id INT AUTO_INCREMENT PRIMARY KEY COMMENT'Identificador de la categoria de los productos de nike',
    nombre VARCHAR(50) NOT NULL COMMENT'Nombre de la categoria de los productos de nike',
    descripcion VARCHAR(500) NOT NULL COMMENT'Descripcion de la categoria de los productos de nike'
)

CREATE TABLE tipo_P (
    id INT AUTO_INCREMENT PRIMARY KEY COMMENT'Identificador del tipo de productos de nike',
    nombre VARCHAR(50) NOT NULL COMMENT'Nombre del tipo de productos de nike',
    descripcion VARCHAR(500) NOT NULL COMMENT'Descripcion del tipo de productos de nike'
)

CREATE TABLE marca_P (
    id INT AUTO_INCREMENT PRIMARY KEY COMMENT'Identificador de la marca proveedora de productos de nike',
    nombre VARCHAR(50) NOT NULL COMMENT'Nombre de la marca proveedora de productos de nike'
)

CREATE TABLE metodo_Pago (
    id INT AUTO_INCREMENT PRIMARY KEY COMMENT'Identificador del metodo de pago de los usuarios',
    nombre VARCHAR(50) NOT NULL COMMENT'Nombre del metodo de pago de los usuarios'
)

CREATE TABLE producto (
    id INT AUTO_INCREMENT PRIMARY KEY COMMENT'Identificador del producto',
    nombre VARCHAR(250) NOT NULL COMMENT'Nombre del producto',
    descripcion VARCHAR(500) NOT NULL COMMENT'Descripcion del producto',
    precio INT NOT NULL COMMENT'Precio del producto',
    caracteristicas JSON NOT NULL COMMENT'Lista con las caracteristicas del producto',
    marcaFk INT NOT NULL COMMENT'Relacion entre el producto y su marca',
	CONSTRAINT FK_MarcaP FOREIGN KEY (marcaFk) REFERENCES marca_P(id),
    tipoFk INT NOT NULL COMMENT'Relacion entre el producto y su tipo',
	CONSTRAINT FK_TipoP FOREIGN KEY (tipoFk) REFERENCES tipo_P(id),
    generoFk INT NOT NULL COMMENT'Relacion entre el producto y su genero',
	CONSTRAINT FK_GeneroP FOREIGN KEY (generoFk) REFERENCES genero(id),
    categoriaFk INT NOT NULL COMMENT'Relacion entre el producto y su categoria',
	CONSTRAINT FK_CategoriaP FOREIGN KEY (categoriaFk) REFERENCES categoria_P(id)
)

CREATE TABLE usuario (
    id INT AUTO_INCREMENT PRIMARY KEY COMMENT'Identificador del usuario',
    nombre VARCHAR(250) NOT NULL COMMENT'Nombre del usuario',
    documento INT NOT NULL COMMENT'Documento del usuario',
    correo VARCHAR(250) NOT NULL COMMENT'Correo del usuario',
    telefono INT NOT NULL COMMENT'Telefono del usuario',
    direccion VARCHAR(400) NOT NULL COMMENT'Direccion del usuario',
    codigo_Postal VARCHAR(20) NOT NULL COMMENT'CP del usuario',
    contraseña VARCHAR(100) NOT NULL COMMENT'Contraseña del usuario',
    rolFk INT NOT NULL COMMENT'Relacion entre el usuario y su rol',
	CONSTRAINT FK_RolU FOREIGN KEY (rolFk) REFERENCES rol(id),
    tipoDocFk INT NOT NULL COMMENT'Relacion entre el usuario y su tipoDoc',
	CONSTRAINT FK_TipoU FOREIGN KEY (tipoDocFk) REFERENCES tipo_P(id),
    generoFk INT NOT NULL COMMENT'Relacion entre el usuario y su genero',
	CONSTRAINT FK_GeneroU FOREIGN KEY (generoFk) REFERENCES genero(id)
)

CREATE TABLE transaccion (
    id INT AUTO_INCREMENT PRIMARY KEY COMMENT'Identificador de la transaccion',
    usuarioFk INT NOT NULL COMMENT'Relacion entre la transaccion y su usuario',
	CONSTRAINT FK_UsuarioT FOREIGN KEY (usuarioFk) REFERENCES usuario(id),
    productoFk INT NOT NULL COMMENT'Relacion entre la transaccion y su producto',
	CONSTRAINT FK_ProductoT FOREIGN KEY (productoFk) REFERENCES producto(id),
    metodo_PagoFk INT NOT NULL COMMENT'Relacion entre la transaccion y su metodo de pago',
	CONSTRAINT FK_MetodoPagoT FOREIGN KEY (metodo_PagoFk) REFERENCES metodo_Pago(id),
    total_Cop INT NOT NULL COMMENT'Total de la compra de la transaccion',
    fecha_Trans DATE NOT NULL COMMENT'Fecha de la compra de la transaccion'
)