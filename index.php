<?php include_once 'header.php' ?>
  <body>
    <?php include_once  'navbar.php' ?>
    <section id="heroes">
      <div class="container">
        <h1 class="text-center text-light">
          Wanna watch <i class="italic-text">that</i> concert?
        </h1>
        <p class="text-light text-center">
          Go ahead and pick your ticket, now!
        </p>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-u1OknCvxWvY5kfmNBILK2hRnQC3Pr17a+RTT6rIHI7NnikvbZlHgTPOOmMi466C8"
          crossorigin="anonymous"
        ></script>
        <br />
        <div
          class="form-outline d-flex align-items-center justify-content-center"
        >
          <input
            type="search"
            id="form1"
            class="form-control"
            placeholder="Search..."
            aria-label="Search"
          />
        </div>
      </div>
    </section>
    <br /><br />
    <section id="main">
      <div class="container-fluid">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 pb-5">
              <div class="card">
                <div class="card-body">
                  <div class="clearfix">
                    <div class="float-start">
                      <h5 class=""><b>Filter</b></h5>
                    </div>
                    <div class="float-end">
                      <button class="btn-rst text-black-50">Reset</button>
                    </div>
                  </div>
                  <hr />
                </div>
              </div>
            </div>
            <div class="col-lg-9">
              <div class="row">
                <div class="col-lg-4 mb-4">
                  <div class="card" data-clickable="true" data-href="konser-1/konser-1.html">
                    <img
                      src="images/black-promoters-collective.jpg"
                      class="card-img-top"
                      alt="..."
                    />
                    <div class="card-body">
                      <h5 class="card-title">Concert Title</h5>
                      <p class="text-muted mb-1">Location</p>
                      <p class="text-muted">30 Feb</p>
                    </div>
                    <div class="card-footer border-0">
                      <p class="mb-0"><b>IDR 999.000</b></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="cards">
      <div class="container-fluid py-5">
        <div class="container"></div>
      </div>
    </section>

    <footer id="footer">
      <div></div>
    </footer>
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-u1OknCvxWvY5kfmNBILK2hRnQC3Pr17a+RTT6rIHI7NnikvbZlHgTPOOmMi466C8"
      crossorigin="anonymous"
    ></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="js/main.js"></script>
  </body>
</html>
