CREATE TABLE `pokemon`.`tipo_pokemon` (
  `id_tipo_pokemon` INT NOT NULL AUTO_INCREMENT,
  `tipo_pokemon` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id_tipo_pokemon`),
  UNIQUE INDEX `id_tipo_pokemon_UNIQUE` (`id_tipo_pokemon` ASC) ,
  UNIQUE INDEX `tipo_pokemon_UNIQUE` (`tipo_pokemon` ASC) )
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`pokemon`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pokemon`.`pokemon` (
  `id_pokemon` INT NOT NULL AUTO_INCREMENT,
  `nome_pokemon` VARCHAR(45) NOT NULL,
  `ataque_pokemon` VARCHAR(45) NULL,
  `experiencia` VARCHAR(45) NULL,
  `tipo_pokemon` VARCHAR(45) NOT NULL,
  `color` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id_pokemon`),
  UNIQUE INDEX `idpokemon_UNIQUE` (`id_pokemon` ASC) ,
  UNIQUE INDEX `nome_pokemon_UNIQUE` (`nome_pokemon` ASC) ,
  INDEX `fk_pokemon_tipo_pokemon_idx` (`tipo_pokemon` ASC) ,
  CONSTRAINT `fk_pokemon_tipo_pokemon`
    FOREIGN KEY (`tipo_pokemon`)
    REFERENCES `pokemon`.`tipo_pokemon` (`tipo_pokemon`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;
