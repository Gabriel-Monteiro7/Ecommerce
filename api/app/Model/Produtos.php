<?php

// namespace App\Model;

require_once 'app/DataBase/Connection.php';
// use App\DataBase\Connection;

class Produtos extends  Connection
{
  protected $table;
  public function __construct()
  {
    $this->table = 'produto';
  }
  public function newProduct($params = [])
  {
    $params = (object) $params;


    $response = Connection::prepare(
      "INSERT INTO 
    		$this->table (name, value, description, image) 
    	VALUES 
    		(:name, :value, :description, :image)"
    );
    return $response->execute(
      array(
        ":name"     => $params->name,
        ":value"     => $params->value,
        ":description"   => $params->description,
        ":image"     => $params->image
      )
    );
  }
  public function updateProduct($params)
  {
    $params = (object) $params;
    $response = Connection::prepare(
      "UPDATE 
  			$this->table 
  		SET 
  			name = :name, value = :value, description = :description,image = :image
  		WHERE 
  			id = :id"
    );
    return $response->execute(
      array(
        ":id"      => $params->id,
        ":name"     => $params->name,
        ":value"     => $params->value,
        ":description"   => $params->description,
        ":image" => $params->image
      )
    );
  }
  public function selectOne($id)
  {
    $response = Connection::prepare(
      "SELECT * FROM 
  			$this->table 
  		WHERE 
  			id = :id"
    );
    $response->execute(array(":id"  => $id));
    return $response->fetch();
  }
  public function selectAll()
  {
    $response = Connection::prepare("SELECT * FROM $this->table ");
    $response->execute();
    return $response->fetchAll();
  }
  public function deleteProduct($id)
  {
    $response = Connection::prepare(
      "DELETE FROM 
  			$this->table 
  		WHERE 
  			id = :id"
    );
    return $response->execute(array(":id" => $id));
  }
}
