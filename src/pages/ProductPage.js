import React from 'react';
// Import images
import productImage1 from '../assets/product_page_1.png';
import productImage2 from '../assets/product_page_2.png';
import productImage3 from '../assets/product_page_3.png';
import productImage4 from '../assets/product_page_4.png';
import appStoreBadge from '../assets/download-on-app-store.png'; // Import App Store badge

function ProductPage() {
  return (
    <div>
      <h1>Lifeloop Ltd.</h1>
      <p>Click, work, invest, repeat—live a new life in this fun sim roguelike!</p>

      {/* Moved App Store Link */}
      <div style={{ margin: '20px 0', textAlign: 'center' }}> {/* Centered the badge container */}
        {/* TODO: Replace with actual App Store link once app is published */}
        <a
          href="https://apps.apple.com/app/id6744413317"
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: 'inline-block' }} // Helps with alignment and potential future styling
        >
          {/* Use image instead of text */}
          <img
            src={appStoreBadge}
            alt="Download on the App Store"
            style={{ height: '50px', width: 'auto' }} // Adjust height as needed
          />
        </a>
      </div>

      {/* Collage Section */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center', margin: '20px 0' }}>
        {/* Replace with your actual screenshots */}
        <img
          src={productImage1} // Use imported variable
          alt="Product Screenshot 1"
          style={{ maxWidth: '90%', width: '250px', height: 'auto', borderRadius: '8px' }} // Reduced width
        />
        <img
          src={productImage2} // Use imported variable
          alt="Product Screenshot 2"
          style={{ maxWidth: '90%', width: '250px', height: 'auto', borderRadius: '8px' }} // Reduced width
        />
        <img
          src={productImage3} // Use imported variable
          alt="Product Screenshot 3"
          style={{ maxWidth: '90%', width: '250px', height: 'auto', borderRadius: '8px' }} // Reduced width
        />
         <img
          src={productImage4} // Use imported variable
          alt="Product Screenshot 4"
          style={{ maxWidth: '90%', width: '250px', height: 'auto', borderRadius: '8px' }} // Reduced width
        />
      </div>

       {/* Add Google Play link if applicable */}
       {/*
       <div>
         <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
           Get it on Google Play
         </a>
       </div>
       */}

      {/* Privacy and Terms Links */}
      <div style={{ marginTop: '30px', textAlign: 'center', fontSize: '0.9em' }}>
        <a href="/privacy.html" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px' }}>
          Privacy Policy
        </a>
        <a href="/terms.html" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px' }}>
          Terms of Service
        </a>
      </div>
    </div>
  );
}

export default ProductPage;
