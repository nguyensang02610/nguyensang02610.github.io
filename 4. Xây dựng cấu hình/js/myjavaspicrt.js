var linh_kien = [
  //CPU
  {
      name: 'CORE I5 9400 /16MB /3.6GHz /6 nhân 12 luồng',
      price:'3,490,000 đ ',
      type: 'cpu',
      img : 1,
  },
  {
      name: 'CORE I7 8900K /14MB /4.0 GHz /6 nhân 12 luồng',
      price:'6,490,000 đ ',
      type: 'cpu',
      img : 2,
  },
  {
      name: 'CORE I7 9700K /18MB /4.2GHz /8 nhân 16 luồng',
      price:'9,300,000 đ ',
      type: 'cpu',
      img : 3,
  },
  {
      name: 'CORE I9 9900K /256MB/5.1Ghz/16 nhân 32 luồng',
      price:'22,900,000 đ ',
      type: 'cpu',
      img : 4,
  },
  //MAIN
  {
      name: 'Aorus B360 Gaming 3',
      price:'5,190,000 đ ',
      type: 'main',
      img : 5,
  },
  {
      name: 'Aorus B365M Elite',
      price:'4,190,000 đ ',
      type: 'main',
      img : 6,
  },
  {
      name: 'Aorus Z390 Master',
      price:'8,190,000 đ ',
      type: 'main',
      img : 7,
  },
  {
      name: 'ROG Strix Z490 Maximus Gaming',
      price:'12,190,000 đ ',
      type: 'main',
      img : 8,
  },
  {
      name: 'Aorus Z490 Gaming Ultra',
      price:'7,190,000 đ ',
      type: 'main',
      img : 9,
  },
//RAM
  {
      name: 'Ram PC Kingston HyperX Predator RGB DDR4 32GB',
      price:'2,000,000 đ ',
      type: 'ram',
      img : 10,
  },
  {
      name: 'Ram Desktop Gskill TridentZ RGB 32GB',
      price:'2,340,000 đ ',
      type: 'ram',
      img : 11,
  },
  {
      name: 'Ram PC HyperX Fury RGB DDR4 KIT 32GB',
      price:'2,450,000 đ ',
      type: 'ram',
      img : 12,
  },
  //VGA
  {
      name: 'Aorus RTX 3080Ti X Gaming 24GB',
      price:'45,290,000 đ ',
      type: 'vga',
      img : 13,
  },
  {
      name: 'Gefore RTX 3090 Gaming X',
      price:'67,990,000 đ ',
      type: 'vga',
      img : 14,
  },
  {
      name: 'AMD Radeon RX6700XT',
      price:'45,590,000 đ  ',
      type: 'vga',
      img : 15,
  },
  //SSD
  {
      name: 'SSD Kingston A400 240GB Sata III',
      price:'1,450,000 đ ',
      type: 'ssd',
      img : 16,
  },
  {
      name: 'SSD Kingston KC600 1TB Sata III',
      price:'3,990,000 đ ',
      type: 'ssd',
      img : 17,
  },
  {
      name: 'SSD Gigabyte AORUS M.2 Nvme PCIe 512GB',
      price:'2,490,000 đ',
      type: 'ssd',
      img : 18,
  },
  //Case
  {
      name: 'Consair 1400XT',
      price:'14,990,000 đ ',
      type: 'case',
      img : 19,
  },
  {
      name: 'ROG X CHARIOT GAMING',
      price:'25,990,000 đ ',
      type: 'case',
      img : 20,
  },
  {
      name: 'Deepcool RGB X Gaming',
      price:'5,550,000 đ ',
      type: 'case',
      img : 21,
  },
  //Psu
  {
      name: 'PSU Antec 750w Golen PLus',
      price:'4,690,000 đ ',
      type: 'psu',
      img : 22,
  },
  {
      name: 'PSU Aorus P850W',
      price:'6,990,000 đ ',
      type: 'psu',
      img : 23,
  },
  {
      name: 'PSU Gigabyte PW400 Golden PLus',
      price:'2,290,000 đ ',
      type: 'psu',
      img : 24,
  },
];

    let total_sum = 0;
function tinhtien(index){
    let sum = 0;
    let price = linh_kien[index-1].price;
    price = price.substr(0, price.length-2);
    price = price.replace(/,/g, '');
    price = Number(price);
    total_sum+=price;
}

$(document).ready(function(){

  // Hiện thông tin
  showItem('cpu');
  function showItem(typeName){
      let node;
      let items_r = $('.content_main_right ul');
      items_r.empty();
      for(i = 0; i < linh_kien.length; i++){
          if(linh_kien[i].type == typeName){
              node =
               `
               <li class="content_list_item" id='${linh_kien[i].img}'>
               <div>
                   <img src="image/img${linh_kien[i].img}.jpg" class="content_main_img">
               </div>
               <div class="content_list_item_name">
                   <span>
                       ${linh_kien[i].name}
                   </span>
               </div>
               <div class="content_price">
               <span class="price_item">
                       ${linh_kien[i].price}
               </span>
               </div>
               </li>
              `
              items_r.append(node);
          }
      }
  }
  // click li hiện thông tin linh kiện
  let typeName = $('.menu_left_item .content_left_list_item:eq(0)');
  let ls = $('.menu_left_item .content_left_list_item:eq(0)');
  console.log(typeName, ls);
  $('.menu_left_item .content_left_list_item').click(function(){
      typeName = this.id;
      ls = $(this);
      showItem(typeName);
      events();
  })
  // Nút delete
  function delete_btn(){
      $('.btn_delete').click(function(){
          var index = this.id;
          var price = linh_kien[index-1].price;
          price = price.substr(0, price.length-2);
          price = price.replace(/,/g, '');
          price = Number(price);
          total_sum = total_sum - price;
          $(this).parents('.content_left_list_item').empty();   
      })
  }
    events();
    function events(){
        click_right_item()
        delete_btn();
        thanhtoan_btn()
    }
 
  //Thêm linh kiện vào list bên trái
  function click_right_item(){
      $('.content_main_right ul .content_list_item').click(function(){
          let index = this.id;
          let node = `
            <div class="left_item">
              <div class"image_l1">
                  <img src="image/img${linh_kien[index-1].img}.jpg" class="left_img">
              </div>
              <div "text_l1">
                  <span>${linh_kien[index-1].name}</span>
                  <br>
                  <div class="item_price">${linh_kien[index-1].price}</div>
                  <button class="btn_delete" id="${linh_kien[index-1].img}">Delete</button>
              </div>
            </div>
          `
          tinhtien(index);
          ls.empty();
          ls.append(node);
      })
  }
  function thanhtoan_btn(){
      $('.btn_thanhtoan').click(function(){
          total_sum = total_sum.toLocaleString('en');
          $('#tong_tien').text(total_sum+ 'đ');
      });
  }
});
