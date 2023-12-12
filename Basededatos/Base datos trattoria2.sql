-- Database generated with pgModeler (PostgreSQL Database Modeler).
-- pgModeler version: 1.1.0-beta
-- PostgreSQL version: 16.0
-- Project Site: pgmodeler.io
-- Model Author: ---

-- Database creation must be performed outside a multi lined SQL file. 
-- These commands were put in this file only as a convenience.
-- 
-- object: new_database | type: DATABASE --
-- DROP DATABASE IF EXISTS new_database;
CREATE DATABASE new_database;
-- ddl-end --


-- object: public."Clientes" | type: TABLE --
-- DROP TABLE IF EXISTS public."Clientes" CASCADE;
CREATE TABLE public."Clientes" (
	"ClienteID" serial NOT NULL,
	"Nombre" varchar(50),
	"Apellido" varchar(50),
	"Num_cedula" numeric(10),
	"Correo_electronico" varchar(100),
	"Telefono" numeric(10),
	CONSTRAINT "Clientes_pk" PRIMARY KEY ("ClienteID")
);
-- ddl-end --
COMMENT ON COLUMN public."Clientes"."ClienteID" IS E'Clave primaria del cliente';
-- ddl-end --
COMMENT ON COLUMN public."Clientes"."Nombre" IS E'Nombre del cliente';
-- ddl-end --
COMMENT ON COLUMN public."Clientes"."Apellido" IS E'Apellido del cliente';
-- ddl-end --
COMMENT ON COLUMN public."Clientes"."Num_cedula" IS E'Numero de cedula del cliente';
-- ddl-end --
COMMENT ON COLUMN public."Clientes"."Correo_electronico" IS E'Direccion de correo electronico del cliente';
-- ddl-end --
COMMENT ON COLUMN public."Clientes"."Telefono" IS E'Numero de contacto del cliente';
-- ddl-end --
ALTER TABLE public."Clientes" OWNER TO postgres;
-- ddl-end --

-- object: public."Ambientes" | type: TABLE --
-- DROP TABLE IF EXISTS public."Ambientes" CASCADE;
CREATE TABLE public."Ambientes" (
	"AmbienteID" serial NOT NULL,
	"Nombre_ambiente" varchar(25),
	"Capacidad" numeric(50),
	"Precio" decimal(10),
	CONSTRAINT "Ambientes_pk" PRIMARY KEY ("AmbienteID")
);
-- ddl-end --
COMMENT ON COLUMN public."Ambientes"."Nombre_ambiente" IS E'Nombre del ambiente';
-- ddl-end --
COMMENT ON COLUMN public."Ambientes"."Capacidad" IS E'Numero de comensales en el ambiente';
-- ddl-end --
COMMENT ON COLUMN public."Ambientes"."Precio" IS E'Precio del ambiente';
-- ddl-end --
ALTER TABLE public."Ambientes" OWNER TO postgres;
-- ddl-end --

-- object: public."Menus" | type: TABLE --
-- DROP TABLE IF EXISTS public."Menus" CASCADE;
CREATE TABLE public."Menus" (
	"MenuID" serial NOT NULL,
	"Nombre_menu" varchar(50),
	CONSTRAINT "Menus_pk" PRIMARY KEY ("MenuID")
);
-- ddl-end --
COMMENT ON COLUMN public."Menus"."MenuID" IS E'Clave primaria del menu';
-- ddl-end --
COMMENT ON COLUMN public."Menus"."Nombre_menu" IS E'Nombre del menu';
-- ddl-end --
ALTER TABLE public."Menus" OWNER TO postgres;
-- ddl-end --

-- object: public."Reservas" | type: TABLE --
-- DROP TABLE IF EXISTS public."Reservas" CASCADE;
CREATE TABLE public."Reservas" (
	"ReservaID" serial NOT NULL,
	"Fk_ClienteID" integer,
	"Fk_AmbienteID" integer,
	"Fk_MenuID" integer,
	"Fecha" date,
	"Hora" time,
	"Num_comensales" numeric(4),
	CONSTRAINT "Reservas_pk" PRIMARY KEY ("ReservaID")
);
-- ddl-end --
COMMENT ON COLUMN public."Reservas"."ReservaID" IS E'Clave primaria de reservas.';
-- ddl-end --
COMMENT ON COLUMN public."Reservas"."Fk_ClienteID" IS E'Clave foranea del la tabla clientes';
-- ddl-end --
COMMENT ON COLUMN public."Reservas"."Fk_AmbienteID" IS E'Clave foranea de la tabla ambientes';
-- ddl-end --
COMMENT ON COLUMN public."Reservas"."Fk_MenuID" IS E'Clave foranea de la tabla menus';
-- ddl-end --
COMMENT ON COLUMN public."Reservas"."Fecha" IS E'Fecha de reserva';
-- ddl-end --
COMMENT ON COLUMN public."Reservas"."Hora" IS E'Hora de reserva';
-- ddl-end --
COMMENT ON COLUMN public."Reservas"."Num_comensales" IS E'Numero de comensales que ingresa el cliente';
-- ddl-end --
ALTER TABLE public."Reservas" OWNER TO postgres;
-- ddl-end --

-- object: public."Facturas" | type: TABLE --
-- DROP TABLE IF EXISTS public."Facturas" CASCADE;
CREATE TABLE public."Facturas" (
	"FacturaID" serial NOT NULL,
	"Fk_ReservaID" integer,
	"Metodo_pago" varchar(50),
	"Total" decimal(10),
	CONSTRAINT "Facturas_pk" PRIMARY KEY ("FacturaID")
);
-- ddl-end --
COMMENT ON COLUMN public."Facturas"."FacturaID" IS E'Clave primaria de la factura';
-- ddl-end --
COMMENT ON COLUMN public."Facturas"."Fk_ReservaID" IS E'Clave foranea de la tabla reservas';
-- ddl-end --
COMMENT ON COLUMN public."Facturas"."Metodo_pago" IS E'Metodo de pago que utiliza el cliente';
-- ddl-end --
COMMENT ON COLUMN public."Facturas"."Total" IS E'Total incluido iva de la reserva';
-- ddl-end --
ALTER TABLE public."Facturas" OWNER TO postgres;
-- ddl-end --

-- object: "Fk_ClienteID" | type: CONSTRAINT --
-- ALTER TABLE public."Reservas" DROP CONSTRAINT IF EXISTS "Fk_ClienteID" CASCADE;
ALTER TABLE public."Reservas" ADD CONSTRAINT "Fk_ClienteID" FOREIGN KEY ("Fk_ClienteID")
REFERENCES public."Clientes" ("ClienteID") MATCH SIMPLE
ON DELETE NO ACTION ON UPDATE NO ACTION;
-- ddl-end --
COMMENT ON CONSTRAINT "Fk_ClienteID" ON public."Reservas" IS E'CLAVE FORANEA';
-- ddl-end --


-- object: "Fk_AmbienteID" | type: CONSTRAINT --
-- ALTER TABLE public."Reservas" DROP CONSTRAINT IF EXISTS "Fk_AmbienteID" CASCADE;
ALTER TABLE public."Reservas" ADD CONSTRAINT "Fk_AmbienteID" FOREIGN KEY ("Fk_AmbienteID")
REFERENCES public."Ambientes" ("AmbienteID") MATCH SIMPLE
ON DELETE NO ACTION ON UPDATE NO ACTION;
-- ddl-end --
COMMENT ON CONSTRAINT "Fk_AmbienteID" ON public."Reservas" IS E'CLAVE FORANEA';
-- ddl-end --


-- object: "Fk_MenuID" | type: CONSTRAINT --
-- ALTER TABLE public."Reservas" DROP CONSTRAINT IF EXISTS "Fk_MenuID" CASCADE;
ALTER TABLE public."Reservas" ADD CONSTRAINT "Fk_MenuID" FOREIGN KEY ("Fk_MenuID")
REFERENCES public."Menus" ("MenuID") MATCH SIMPLE
ON DELETE NO ACTION ON UPDATE NO ACTION;
-- ddl-end --
COMMENT ON CONSTRAINT "Fk_MenuID" ON public."Reservas" IS E'CLAVE FORANEA';
-- ddl-end --


-- object: "Fk_ReservaID" | type: CONSTRAINT --
-- ALTER TABLE public."Facturas" DROP CONSTRAINT IF EXISTS "Fk_ReservaID" CASCADE;
ALTER TABLE public."Facturas" ADD CONSTRAINT "Fk_ReservaID" FOREIGN KEY ("Fk_ReservaID")
REFERENCES public."Reservas" ("ReservaID") MATCH SIMPLE
ON DELETE NO ACTION ON UPDATE NO ACTION;
-- ddl-end --
COMMENT ON CONSTRAINT "Fk_ReservaID" ON public."Facturas" IS E'CLAVE FORANEA';
-- ddl-end --



