let url = "https://dummyjson.com/products/1";

$(document).ready(function () {
  function getData() {
    let out = "";
    $.ajax({
      type: "get",
      url: url,
      dataType: "json",
      success: function (response) {
        console.log(response);
        // $.each(response.products, function (key, val) {
        //   out += `<tr>
        //   <td>${val.title}</td>
        //   <td>${val.description}</td>
        // </tr>`;
        // });

        // res = response.products.map(n => out += `<tr>
        //   <td>${n.title}</td>
        //   <td>${n.description}</td>
        // </tr>`);

        // response.products.forEach(n => {
        //   out += `<tr>
        //     <td>${n.title}</td>
        //     <td>${n.description}</td>
        //   </tr>`;
        // });

        
        document.querySelector("#dummyjson").innerHTML = response.title;
      },
    });
  }
  getData();
});

// let url = "http://localhost:8080/pembelajaran/belajar_js/js/ajax/jquery.php";

// $(document).ready(function () {
//   function getData() {
//     $.ajax({
//       type: "get",
//       url: url,
//       data: "data",
//       dataType: "dataType",
//       success: function (response) {
//         console.log(response);
//         let out = "";
//         $.each(response, function (key, val) {
//           out += `<tr>
//           <td>${val.idbuah}</td>
//           <td>${val.buah}</td>
//           <td>${val.deskripsi}</td>
//           <td>${val.harga}</td>
//           <td>${val.gambar}</td>
//         </tr>`;
//         });
//         $("#isi").html(out);
//       },
//     });
//   }
//   getData();
// });
