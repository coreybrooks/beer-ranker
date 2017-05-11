// PHP Data Objects(PDO) Sample Code:
try {
    $conn = new PDO("sqlsrv:server = tcp:beerapp.database.windows.net,1433; Database = Beers", "tobyboyd87@gmail.com", "{Tortuga3!}");
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
}
catch (PDOException $e) {
    print("Error connecting to SQL Server.");
    die(print_r($e));
}

// SQL Server Extension Sample Code:
$connectionInfo = array("UID" => "tobyboyd87@gmail.com@beerapp", "pwd" => "{your_password_here}", "Database" => "Beers", "LoginTimeout" => 30, "Encrypt" => 1, "TrustServerCertificate" => 0);
$serverName = "tcp:beerapp.database.windows.net,1433";
$conn = sqlsrv_connect($serverName, $connectionInfo);




"select (select * from for /users/tobyboyd/projects/austin.json)" queryout lineitems.json -d tpch -S .\SQLEXPRESS -T -w



