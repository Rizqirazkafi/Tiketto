<?php include_once 'header.php' ?>
<body>

  <?php include_once  'navbar.php' ?>
  <section id="form">
    <div class="container-fluid">
      <div class="d-flex justify-content-center align-items-center">
        <div class="g-log rounded-4 log-item text-center">
          <div class="">
            <a href="" class="text-decoration-none text-black">
              <img src="images/google-logo.svg" alt="" /> Sign Up With
              Google</a>
          </div>
        </div>
      </div>
      <div class="pt-2 text-light d-flex justify-content-center align-items-center line">
        <div>
          <p>or</p>
        </div>
      </div>

      <div class="d-flex justify-content-center align-items-center">
        <div class="rounded-4">
          <form class="form-rg">
            <input type="text" class="w-100 fname" id="fname" placeholder="First Name" name="fname" />
            <input type="text" class="w-100 lname" id="lname" placeholder="Last Name" name="lname" />
            <input type="email" class="w-100 email" id="email" placeholder="Email address" name="email" />
            <input type="password" class="w-100 passwd" id="password" placeholder="Password" name="password" />
            <div class="log-item color-pink rounded-4 btn mt-4 p-0 text-center">
              <input type="submit" value="Sign Up" class="btn text-light fs-5 fw-bold p-0 lh-1  ">
            </div>
          </form>
        </div>
      </div>
      
    </div>
  </section>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-u1OknCvxWvY5kfmNBILK2hRnQC3Pr17a+RTT6rIHI7NnikvbZlHgTPOOmMi466C8"
    crossorigin="anonymous"></script>
</body>

</html>
