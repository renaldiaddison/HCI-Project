function handleClose() {
    document.getElementById('description').style.display = 'none';
  }
  
  const listSkills = [
    {
      title: 'Relaxed Fit T-Shirt',
      image: '../images/assets/top 1.jpg',
      price_clothes: 'Price : $40',
      size_clothes: 'Size : XL',
      color_clothes: 'Color : Black',
      category_clothes: 'Category : Top',
    },
    {
      title: 'Premium Cotton Poplin Shirt',
      image: '../images/assets/top 2.jpg',
      price_clothes: 'Price : $60',
      size_clothes: 'Size : XL',
      color_clothes: 'Color : White',
      category_clothes: 'Category : Top',
    },
    {
      title: 'Regular Fit Oxford Shirt',
      image: '../images/assets/top 3.jpg',
      price_clothes: 'Price : $60',
      size_clothes: 'Size : XL',
      color_clothes: 'Color : Gray Yellow',
      category_clothes: 'Category : Top',
    },
    {
        title: 'Long Sleeved Jersey Top',
        image: '../images/assets/top 4.jpg',
        price_clothes: 'Price : $30',
        size_clothes: 'Size : XL',
        color_clothes: 'Color : Black',
        category_clothes: 'Category : Top',
      },
      {
        title: 'Regular Flannel Shirt',
        image: '../images/assets/top 5.jpg',
        price_clothes: 'Price : $60',
        size_clothes: 'Size : L',
        color_clothes: 'Color : Dark Yellow',
        category_clothes: 'Category : Top',
      },
      {
        title: 'Relaxed Fit Patterned Shirt',
        image: '../images/assets/top 6.jpg',
        price_clothes: 'Price : $70',
        size_clothes: 'Size : XXL',
        color_clothes: 'Color : Light Blue',
        category_clothes: 'Category : Top',
      },
      {
        title: 'Regular Fit Gray Shorts',
        image: '../images/assets/bottom 1.jpg',
        price_clothes: 'Price : $50',
        size_clothes: 'Size : XL',
        color_clothes: 'Color : Gray',
        category_clothes: 'Category : Bottom',
      },
      {
        title: 'Regular Fit Dark Yellow Shorts',
        image: '../images/assets/bottom 2.jpg',
        price_clothes: 'Price : $50',
        size_clothes: 'Size : XL',
        color_clothes: 'Color : Dark Yellow',
        category_clothes: 'Category : Bottom',
      },
      {
        title: 'Regular Fit Jeans',
        image: '../images/assets/bottom 3.jpg',
        price_clothes: 'Price : $100',
        size_clothes: 'Size : XL',
        color_clothes: 'Color : Navy',
        category_clothes: 'Category : Bottom',
      },
      {
        title: 'Cotton Chinos Skinny Fit',
        image: '../images/assets/bottom 4.jpg',
        price_clothes: 'Price : $70',
        size_clothes: 'Size : XL',
        color_clothes: 'Color : Black',
        category_clothes: 'Category : Bottom',
      },
      {
        title: 'Regular Jeans',
        image: '../images/assets/bottom 5.jpg',
        price_clothes: 'Price : $90',
        size_clothes: 'Size : XXL',
        color_clothes: 'Color : Navy',
        category_clothes: 'Category : Bottom',
      },
      {
        title: 'Regular Cotton Chinos',
        image: '../images/assets/bottom 6.jpg',
        price_clothes: 'Price : $60',
        size_clothes: 'Size : XL',
        color_clothes: 'Color : White',
        category_clothes: 'Category : Bottom',
      },
  ];
  
  function handleClick(index) {
    document.getElementById('description').style.display = 'block';
    document.getElementById('title').innerHTML = listSkills[index].title;
    document.getElementById('image').innerHTML = `<img src="${listSkills[index].image}" alt="img_${index}" width=300/>`;
    document.getElementById('price_clothes').innerHTML = listSkills[index].price_clothes;
    document.getElementById('size_clothes').innerHTML = listSkills[index].size_clothes;
    document.getElementById('color_clothes').innerHTML = listSkills[index].color_clothes;
    document.getElementById('category_clothes').innerHTML = listSkills[index].category_clothes;
  }