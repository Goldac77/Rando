const uploadProduct = document.querySelector("#addProductForm");


//Add Product Logic
uploadProduct.addEventListener("submit", async (event) => {
    event.preventDefault();
    const name = document.querySelector("#productName").value;
    const description = document.querySelector("#description").value;
    const price = document.querySelector("#price").value;
    const image = document.querySelector("#productImage").files[0];
    const category = document.querySelector("#category").value;
    const inventoryCount = document.querySelector("#inventoryCount").value;
    let imageUrl = null;
    const sellerId = localStorage.getItem("sellerToken");

    //move image to cloudinary
    const cloudinaryUrl = 'https://api.cloudinary.com/v1_1/dkdrrmkbp/image/upload';
    const uploadPreset = 'ml_default'

    const formData = new FormData();
    formData.append('file', image);
    formData.append('upload_preset', uploadPreset);

    try {
        const response = await fetch(cloudinaryUrl, {
            method: 'POST',
            body: formData,
        });

        const data = await response.json();
        imageUrl = data.secure_url;

        // Use the imageUrl as needed (e.g., save it to your project data)

        //console.log('Image URL:', imageUrl);
    } catch (error) {
        console.error('Error uploading image:', error);
    }

    const productData = {
        name,
        description,
        price,
        imageUrl,
        category,
        inventoryCount
    };

    //send data to backend
    const response = await fetch(`https://server-side-xuwi.onrender.com/seller/upload/${sellerId}`, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(productData)
    });

    const data = await response.json();
    if (response.ok) {
        alert(data.message || 'Product added successfully');
    } else {
        alert(data.message || 'Failed to add product');
    }
})

