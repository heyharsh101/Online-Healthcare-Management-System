<?php
include 'db.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $firstName = $_POST['firstName'];
    $lastName = $_POST['lastName'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $password = $_POST['password'];
    $gender = $_POST['gender'];

    $sql = "INSERT INTO patients (first_name, last_name, email, phone, password, gender) VALUES ('$firstName', '$lastName', '$email', '$phone', '$password', '$gender')";

    if ($conn->query($sql) === TRUE) {
        echo "Patient registered successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();
}
?>
