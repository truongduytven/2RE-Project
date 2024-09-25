import React, { useEffect, useState } from "react";
import styles from "./ProductDetails.module.scss";
import { ProductDetail } from "@/types"; 
import { useParams } from "react-router-dom";
import ProductRelated from "../ProductRelated/ProductRelated"; 

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>(); 
  const [product, setProduct] = useState<ProductDetail | null>(null); 
  const [mainImage, setMainImage] = useState<string>("");
  const [isHovering, setIsHovering] = useState<boolean>(false); 

  useEffect(() => {
    const fetchProduct = async (productId: string) => {
      const productData: ProductDetail = {
        id: productId,
        name: "MAI NGUYỄN",
        description: "MẬP NHƯ CON LỢN",
        price: 89.99,
        size: "Available in S, M, L",
        color: ["#ff6347", "#4682b4", "#32cd32"], 
        mainImage: "https://scontent.fsgn2-10.fna.fbcdn.net/v/t1.6435-9/95490582_269326424238394_6090282016777961472_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=6KL885QXp64Q7kNvgFbtC1M&_nc_ht=scontent.fsgn2-10.fna&_nc_gid=AEywV9PSaXUFexajUsDM19D&oh=00_AYB0_6YYbbc99aw7e85P0hkPx2ei0rpv2pxGk4Q6sxgWyw&oe=671B83BF",
        relatedImages: [
          "https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-6/460844558_1179850439938004_2214100831115862594_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=WkvwTMBNIIoQ7kNvgGLuty2&_nc_ht=scontent.fsgn2-9.fna&_nc_gid=AXN8-wdUXvkJx7AAgOH_nIx&oh=00_AYAYScOIKDk-wIemOPR9ip0Efz1HAaNXqEDtHckq269Kkg&oe=66F9FEDA",
        ],
      };
      setProduct(productData);
      setMainImage(productData.mainImage); 
    };

    if (id) {
      fetchProduct(id); 
    }
  }, [id]);

  const handleImageHover = (image: string) => {
    setMainImage(image);
    setIsHovering(true); 
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setMainImage(product ? product.mainImage : ""); 
  };

  if (!product) {
    return <div>Loading product details...</div>;
  }

  const relatedProducts = [
    {
      id: 1,
      title: "Mai 1",
      imgSrc: "https://scontent.fsgn2-10.fna.fbcdn.net/v/t1.6435-9/95490582_269326424238394_6090282016777961472_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=6KL885QXp64Q7kNvgFbtC1M&_nc_ht=scontent.fsgn2-10.fna&_nc_gid=AEywV9PSaXUFexajUsDM19D&oh=00_AYB0_6YYbbc99aw7e85P0hkPx2ei0rpv2pxGk4Q6sxgWyw&oe=671B83BF",
      price: "$49.99",
      discount: 20,
      hasSold: 100,
    },
    {
      id: 2,
      title: "Mai 2",
      imgSrc: "https://scontent.fsgn2-10.fna.fbcdn.net/v/t1.6435-9/95490582_269326424238394_6090282016777961472_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=6KL885QXp64Q7kNvgFbtC1M&_nc_ht=scontent.fsgn2-10.fna&_nc_gid=AEywV9PSaXUFexajUsDM19D&oh=00_AYB0_6YYbbc99aw7e85P0hkPx2ei0rpv2pxGk4Q6sxgWyw&oe=671B83BF",
      price: "$59.99",
      discount: 10,
      hasSold: 200,
    },
  ];

  return (
    <div className="container mx-auto">
  <div className={styles.productDetails}>
        <div className={styles.imageSection}>
            <img src={mainImage} alt={product.name} className={styles.mainImage} />
            <div className={styles.relatedImages}>
                {product.relatedImages.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`related-${index}`}
                        className={styles.relatedImage}
                        onMouseEnter={() => handleImageHover(image)}
                        onMouseLeave={handleMouseLeave}
                    />
                ))}
            </div>
        </div>

        <div className={styles.infoSection}>
            <h1 className={styles.productName}>{product.name}</h1>
            <p className={styles.description}>{product.description}</p> 
            <p className={styles.price}>Price: ${product.price.toFixed(2)}</p>

            <div className={styles.sizeColor}>
                <p><strong>Size:</strong> {product.size}</p>
                <div className={styles.colors}>
                    <strong>Color:</strong>
                    {product.color.map((c, index) => (
                        <span key={index} className={styles.colorBox} style={{ backgroundColor: c }}></span>
                    ))}
                </div>
            </div>
            <button className={styles.addToCartButton}>
                Add to Cart
            </button>
        </div>
        
    </div>
    <div>
        <ProductRelated products={relatedProducts} />
    </div>
    </div>
  
);


};

export default ProductDetails;
