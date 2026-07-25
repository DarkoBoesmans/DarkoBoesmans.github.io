<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8" />
  <!-- Favicon — correct pad naar assets/ico/ -->
  <link rel="icon" type="image/x-icon" href="assets/ico/favicon.ico" />
  <link rel="shortcut icon" href="assets/ico/favicon.ico" />

  <!-- Meta Tags -->
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="theme-color" content="#212227" />
  <meta name="description" content="Darko Boesmans - Portfolio" />

  <title>Darko Boesmans - Portfolio</title>

  <!-- Bootstrap 5.3 CDN -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css">

  <!-- AOS Animate On Scroll -->
  <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">

  <!-- Custom Styles -->
  <link rel="stylesheet" href="css/styles.css" />
</head>

<body>
  <div id="app-content" style="opacity: 0; visibility: hidden;">
    <?php
    require_once 'pages/nav.php';
    require_once 'pages/header.php';
    ?>
  </div>

  <!-- External Libraries -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
  <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>

  <!-- Main Application Script -->
  <script type="module" src="js/main.js"></script>
</body>

</html>