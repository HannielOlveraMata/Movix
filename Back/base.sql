create database movix;

use movix;

CREATE TABLE administradores (
    IdAdmin          INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    NombreAdmin      VARCHAR(255),
    CuentaAdmin      VARCHAR(255),
    ContraseñaAdmin  VARCHAR(32),
    FechaRegistro    TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    Estatus          INT,
    Token            VARCHAR(255)
);


-- Tabla Clientes
CREATE TABLE IF NOT EXISTS clientes (
  id_cliente INT PRIMARY KEY AUTO_INCREMENT,
  nombre VARCHAR(255) NOT NULL,
  apellidos VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  telefono VARCHAR(255) NOT NULL,
  contrasena VARCHAR(255) NOT NULL,
  rfc VARCHAR(255) NOT NULL UNIQUE
);


-- Tabla Pagos
CREATE TABLE IF NOT EXISTS pagos (
  id_pago INT PRIMARY KEY AUTO_INCREMENT,
  id_cliente INT NOT NULL,
  monto VARCHAR(255) NOT NULL,
  fecha_compra TIMESTAMP DEFAULT CURRENT_TIMESTAMP(),
  FOREIGN KEY (id_cliente) REFERENCES clientes(id_cliente)
  );


-- Tabla Destinos
CREATE TABLE IF NOT EXISTS destinos (
  id_destino INT PRIMARY KEY AUTO_INCREMENT,
  id_cliente INT NOT NULL,
  nombre VARCHAR(255) NOT NULL,
  latitud VARCHAR(255) NOT NULL,
  longitud VARCHAR(255) NOT NULL,
  FOREIGN KEY (id_cliente) REFERENCES clientes(id_cliente)
);



-- Tabla Paquetes
CREATE TABLE IF NOT EXISTS paquetes (
  id_paquete INT PRIMARY KEY AUTO_INCREMENT,
  nombre VARCHAR(255) NOT NULL,
  precio DECIMAL(10,2) NOT NULL,
  duracion VARCHAR(255) NOT NULL,
  descripcion TEXT NOT NULL
);

-- Tabla Rutas
CREATE TABLE IF NOT EXISTS rutas (
  id_ruta INT PRIMARY KEY AUTO_INCREMENT,
  nombre VARCHAR(255) NOT NULL,
  capacidad INT NOT NULL,
  horario VARCHAR(255) NOT NULL
);

-- Tabla Paradas
CREATE TABLE IF NOT EXISTS paradas (
  id_parada INT PRIMARY KEY AUTO_INCREMENT,
  nombre VARCHAR(255) NOT NULL,
  latitud VARCHAR(255) NOT NULL,
  longitud VARCHAR(255) NOT NULL
);

-- Tabla Compras
CREATE TABLE IF NOT EXISTS compras (
  id_compra INT PRIMARY KEY AUTO_INCREMENT,
  fecha_compra DATETIME NOT NULL,
  id_cliente INT NOT NULL,
  id_paquete INT NOT NULL,
  metodo_pago VARCHAR(255) NOT NULL,
  total DECIMAL(10,2) NOT NULL,
  FOREIGN KEY (id_cliente) REFERENCES clientes(id_cliente),
  FOREIGN KEY (id_paquete) REFERENCES paquetes(id_paquete)
);

-- Tabla RutasParadas
CREATE TABLE IF NOT EXISTS rutas_paradas (
  id_ruta INT NOT NULL,
  id_parada INT NOT NULL,
  orden INT NOT NULL,
  PRIMARY KEY (id_ruta, id_parada),
  FOREIGN KEY (id_ruta) REFERENCES rutas(id_ruta),
  FOREIGN KEY (id_parada) REFERENCES paradas(id_parada)
);

-- Tabla Viajes
CREATE TABLE IF NOT EXISTS viajes (
  id_viaje INT PRIMARY KEY AUTO_INCREMENT,
  id_ruta INT NOT NULL,
  fecha_viaje DATETIME NOT NULL,
  id_cliente INT NOT NULL,
  FOREIGN KEY (id_ruta) REFERENCES rutas(id_ruta),
  FOREIGN KEY (id_cliente) REFERENCES clientes(id_cliente)
);