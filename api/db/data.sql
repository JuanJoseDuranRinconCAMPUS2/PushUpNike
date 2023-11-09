USE db_Nike;

INSERT INTO genero (nombre, abreviatura)
VALUES
('Hombre', 'M'),
('Mujer', 'F'),
('Unisex', 'Uni');

INSERT INTO `tipo_Documento` (nombre, abreviatura)
VALUES
('Tarjeta_Identidad', 'TI'),
('Cedula_Ciudadania', 'CC'),
('Pasaporte', 'PS');

INSERT INTO `rol` (nombre, funciones)
VALUES
('usuario', 'solo puede ver'),
('empleado', 'cruds'),
('dueño', 'crud y mas cosas');

INSERT INTO `categoria_P` (nombre, descripcion)
VALUES
('Estilo de vida', 'DESCRIPCION'),
('Running', 'DESCRIPCION'),
('Futbol', 'DESCRIPCION'),
('GYM', 'DESCRIPCION'),
('Yoga', 'DESCRIPCION'),
('Basquetbol', 'DESCRIPCION'),
('Futbol Americano', 'DESCRIPCION'),
('Beisbol', 'DESCRIPCION'),
('Golf', 'DESCRIPCION'),
('Skateboarding', 'DESCRIPCION'),
('Tenis', 'DESCRIPCION'),
('Voleibol', 'DESCRIPCION'),
('Danza', 'DESCRIPCION');

INSERT INTO `tipo_P` (nombre, descripcion)
VALUES
('Calzado', 'DESCRIPCION'),
('Ropa', 'DESCRIPCION'),
('Equipo', 'DESCRIPCION');

INSERT INTO `metodo_Pago` (nombre)
VALUES
('Efectivo'),
('Nequi'),
('Tarjeta de credito'),
('Tarjeta de debito'),
('Cupon');