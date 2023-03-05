<?php 
$host = "localhost";
$user = "root";
$pass = "";
$db = "dbbuah";

$conn = mysqli_connect($host,$user,$pass,$db);

$sql = "SELECT * FROM tblbuah";
$result = mysqli_query($koneksi,$sql);

if (mysqli_num_rows($result) > 0 ) {
    $data = array();
    while ($row = mysqli_fetch_assoc($result)) {
        $data[]=$row;
    }
}

echo json_encode($data);

?>