<?php

// namespace App\DataBase;

// use PDO;
// use PDOException;

require_once 'config.php';
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
class Connection
{
  private static $instance;
  public static function getInstance()
  {
    if (!isset(self::$instance)) {
      try {
        self::$instance = new PDO('mysql:host=' . API_HOST . ';dbname=' . API_NAME_DB, API_USERNAME, API_PASSWORD);
        self::$instance->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        self::$instance->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_OBJ);
      } catch (PDOException $e) {
        echo $e->getMessage();
      }
    }
    return self::$instance;
  }
  public static function prepare($sql)
  {
    return self::getInstance()->prepare($sql);
  }
}
