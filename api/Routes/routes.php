<?php

// namespace Routes;
require_once 'app/Controller/ProdutosController.php';
// use App\Controller\ProdutosController;

class Routes
{
  protected $routes;

  public function __construct()
  {
    $this->routes = array(
      "" => "selectAll", "selectOne" => "selectOne",
      "newProduct" => "newProduct", "updateProduct" => "updateProduct",
      "deleteProduct" => "deleteProduct", "insertImage" => "insertImage"
    );
    call_user_func_array(array(new ProdutosController, $this->getRoute()), array());
  }

  public function parserUrl()
  {
    return explode("/", filter_input(INPUT_SERVER, 'REQUEST_URI'), FILTER_SANITIZE_URL);
  }
  public function getRoute()
  {
    $url = $this->parserUrl();
    if (array_key_exists($url[1], $this->routes)) {
      return $this->routes[$url[1]];
    } else {
      return $this->routes[""];
    }
  }
}
