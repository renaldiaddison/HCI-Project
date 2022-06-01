function handleClose() {
    document.getElementById('description').style.display = 'none';
  }
  
  const listSkills = [
    {
      title: 'Clothes 1',
      image: 'https://picsum.photos/801/800',
      price_clothes: 'Price : 200,000 IDR',
      size_clothes: 'Size : XL',
      color_clothes: 'Color : Black',
      category_clothes: 'Category : Top',
    },
    {
      title: 'Clothes 2',
      image: 'https://picsum.photos/802/800',
      price_clothes: 'Price : 200,000 IDR',
      size_clothes: 'Size : XL',
      color_clothes: 'Color : Black',
      category_clothes: 'Category : Top',
    },
    {
      title: 'Clothes 3',
      image: 'https://picsum.photos/803/800',
      price_clothes: 'Price : 200,000 IDR',
      size_clothes: 'Size : XL',
      color_clothes: 'Color : Black',
      category_clothes: 'Category : Top',
    },
    {
        title: 'Clothes 4',
        image: 'https://picsum.photos/804/800',
        price_clothes: 'Price : 200,000 IDR',
        size_clothes: 'Size : XL',
        color_clothes: 'Color : Black',
        category_clothes: 'Category : Top',
      },
      {
        title: 'Clothes 5',
        image: 'https://picsum.photos/805/800',
        price_clothes: 'Price : 200,000 IDR',
        size_clothes: 'Size : XL',
        color_clothes: 'Color : Black',
        category_clothes: 'Category : Top',
      },
      {
        title: 'Clothes 6',
        image: 'https://picsum.photos/806/800',
        price_clothes: 'Price : 200,000 IDR',
        size_clothes: 'Size : XL',
        color_clothes: 'Color : Black',
        category_clothes: 'Category : Top',
      },
      {
        title: 'Clothes 7',
        image: 'https://picsum.photos/800/807',
        price_clothes: 'Price : 200,000 IDR',
        size_clothes: 'Size : XL',
        color_clothes: 'Color : Black',
        category_clothes: 'Category : Bottom',
      },
      {
        title: 'Clothes 8',
        image: 'https://picsum.photos/800/808',
        price_clothes: 'Price : 200,000 IDR',
        size_clothes: 'Size : XL',
        color_clothes: 'Color : Black',
        category_clothes: 'Category : Bottom',
      },
      {
        title: 'Clothes 9',
        image: 'https://picsum.photos/800/809',
        price_clothes: 'Price : 200,000 IDR',
        size_clothes: 'Size : XL',
        color_clothes: 'Color : Black',
        category_clothes: 'Category : Bottom',
      },
      {
        title: 'Clothes 10',
        image: 'https://picsum.photos/800/810',
        price_clothes: 'Price : 200,000 IDR',
        size_clothes: 'Size : XL',
        color_clothes: 'Color : Black',
        category_clothes: 'Category : Bottom',
      },
      {
        title: 'Clothes 11',
        image: 'https://picsum.photos/800/811',
        price_clothes: 'Price : 200,000 IDR',
        size_clothes: 'Size : XL',
        color_clothes: 'Color : Black',
        category_clothes: 'Category : Bottom',
      },
      {
        title: 'Clothes 12',
        image: 'https://picsum.photos/800/812',
        price_clothes: 'Price : 200,000 IDR',
        size_clothes: 'Size : XL',
        color_clothes: 'Color : Black',
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