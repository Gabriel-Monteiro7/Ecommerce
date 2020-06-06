<?php

// namespace App\Controller;
require_once 'app/Model/Produtos.php';

// use App\Model\Produtos;
// use Exception;

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
class ProdutosController
{
  protected $data;
  protected $classProduto;
  public function __construct()
  {
    $this->data = json_decode(file_get_contents("php://input"));
    $this->classProduto = new Produtos;
  }
  public function selectAll()
  {
    try {
      $products = $this->classProduto->selectAll();
      echo json_encode($products);
    } catch (Exception $erro) {
      echo json_encode($erro->getMessage());
    }
  }
  public function insertImage()
  {
    try {
      $arquivo_tmp = $_FILES['file']['tmp_name'];
      $extensao = strtolower(pathinfo($_FILES['file']['name'], PATHINFO_EXTENSION));
      $novoNome = uniqid(time()) . '.' . $extensao;
      $destino = 'public/assets/images/' . $novoNome;
      $response = ('http://localhost:3001/' . $destino);
      if (move_uploaded_file($arquivo_tmp, $destino)) {
        echo json_encode($response);
      }
    } catch (Exception $erro) {
      echo json_encode($erro->getMessage());
    }
  }
  public function newProduct()
  {
    try {
      $newproduct = $this->classProduto->newProduct($this->data);
      echo json_encode($newproduct);
    } catch (Exception $erro) {
      echo json_encode($erro->getMessage());
    }
  }
  public function updateProduct()
  {
    try {
      unlink('public/assets/images/' . $this->data->oldImage);
      $newproduct = $this->classProduto->updateProduct($this->data->product);
      echo json_encode($newproduct);
    } catch (Exception $erro) {
      echo json_encode($erro->getMessage());
    }
  }
  public function selectOne()
  {
    try {
      $product = $this->classProduto->selectOne($this->data->id);
      echo json_encode($product);
    } catch (Exception $erro) {
      echo json_encode($erro->getMessage());
    }
  }
  public function deleteProduct()
  {
    try {

      $product = $this->classProduto->deleteProduct($this->data->id);
      echo json_encode($product);
    } catch (Exception $erro) {
      echo json_encode($erro->getMessage());
    }
  }
}
