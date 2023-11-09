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

INSERT INTO `marca_P` (nombre)
VALUES
('Nike Sportswear'),
('Jordan'),
('NikeLab'),
('ACG');

INSERT INTO `producto` (nombre, descripcion, precio, caracteristicas, marcaFk, tipoFk, generoFk, categoriaFk)
VALUES
('Nike Killshot 2 Leather', 
'Inspirado en el calzado de tenis de perfil bajo original, el Nike Killshot 2 actualiza la parte superior con una variedad de cueros texturizados para crear un look fresco. Desde las gamuzas suaves hasta los cueros suaves con el brillo perfecto, se trata de la actitud que sobresale la cancha con un toque moderno. Para probar que estás arriba, la suela de goma agrega la cereza en la parte inferior.', 
1000000, 
'{
    "img" : "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/jlhsgro2k4kjkczi63qt/calzado-killshot-2-leather-Xp4rM5.png",
    "tallas" : [
        "CM 24 (US 6)" , "CM 24.5", "CM 25", "CM 25.5", "CM 26", "CM 26.5", "CM 27", "CM 27.5", "CM 28", "CM 28.5", "CM 29", "CM 29.5"
        ],
    "colores" : "Vela/Amarillo goma/Gris aceite",
    "paisOrigen" : "Indonesia"
}', 
'1', 
'1', 
'1', 
'1'),
('Nike Offcourt', 
'Inspirado en el calzado de tenis de perfil bajo original, el Nike Killshot 2 actualiza la parte superior con una variedad de cueros texturizados para crear un look fresco. Desde las gamuzas suaves hasta los cueros suaves con el brillo perfecto, se trata de la actitud que sobresale la cancha con un toque moderno. Para probar que estás arriba, la suela de goma agrega la cereza en la parte inferior.', 
1000000, 
'{
    "img" : "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/4f064a60-380b-4e33-8d80-fd5f81626592/chancla-offcourt-VxPVCN.png",
    "tallas" : [
        "CM 24 (US 6)" , "CM 24.5", "CM 25", "CM 25.5", "CM 26", "CM 26.5", "CM 27", "CM 27.5", "CM 28", "CM 28.5", "CM 29", "CM 29.5"
        ],
    "colores" : "Gris oscuro/Blanco/Negro",
    "paisOrigen" : "Indonesia"
}', 
'1', 
'3', 
'1', 
'2'),
('Jordan Essentials Holiday', 
'Cálido es el nombre de la temporada y ¿qué es más cálido que una sudadera Jordan? Esta sudadera de tejido Fleece, que cuentan con gráficos estampados en relieve inspirados en los días festivos, está lista para la temporada.', 
1000000, 
'{
    "img" : "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/b0d5ec9a-b389-4b4a-8ea4-1d6a644d9bc5/sudadera-de-cuello-redondo-de-tejido-fleece-jordan-essentials-holiday-ZvHrgz.png",
    "tallas" : [
        "CM 24 (US 6)" , "CM 24.5", "CM 25", "CM 25.5", "CM 26", "CM 26.5", "CM 27", "CM 27.5", "CM 28", "CM 28.5", "CM 29", "CM 29.5"
        ],
    "colores" : "Gris oscuro/Blanco/Negro",
    "paisOrigen" : "Indonesia"
}', 
'1', 
'3', 
'1', 
'2'),
('Nike SB', 
'Ponte esta suave playera de algodón de peso medio Nike SB con un gráfico estampado de una margarita y agrega energía vibrante a tu día. El ajuste holgado está diseñado para ofrecer espacio en los hombros, el pecho y el cuerpo con el fin de mantener la comodidad sobre la tabla y sin ella. Sonrisas por todos lados.', 
1000000, 
'{
    "img" : "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/024446de-7eaf-488e-bffa-f7e53067eb47/playera-de-skateboarding-sb-Q0nkvZ.png",
    "tallas" : [
        "CM 24 (US 6)" , "CM 24.5", "CM 25", "CM 25.5", "CM 26", "CM 26.5", "CM 27", "CM 27.5", "CM 28", "CM 28.5", "CM 29", "CM 29.5"
        ],
    "colores" : "Gris oscuro/Blanco/Negro",
    "paisOrigen" : "Indonesia"
}', 
'1', 
'2', 
'1', 
'3'),
('Nike Starting 5', 
'Celebra los 40 años de Nike Force llevando energía a la cancha con nuestro jersey Starting 5. La tela suave y transpirable te brinda una sensación ligera mientras andas de costa a costa en la cancha. Es una oda a un ícono, con un ajuste relajado que se siente cómodo en la cancha y en otros lugares.', 
3234324, 
'{
    "img" : "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/88891d0b-b7c9-477a-a573-a93acaf9fdda/jersey-de-b%C3%A1squetbol-dri-fit-starting-5-B2t7Jx.png",
    "tallas" : [
        "CM 24 (US 6)" , "CM 24.5", "CM 25", "CM 25.5", "CM 26", "CM 26.5", "CM 27", "CM 27.5", "CM 28", "CM 28.5", "CM 29", "CM 29.5"
        ],
    "colores" : "Gris oscuro/Blanco/Negro",
    "paisOrigen" : "Indonesia"
}', 
'2', 
'2', 
'1', 
'2');