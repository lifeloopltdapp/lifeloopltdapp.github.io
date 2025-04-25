import React from 'react';

function ProductPage() {
  return (
    <div>
      <h1>Our Product</h1>
      <p>Here's a brief description of our amazing product.</p>
      {/* Replace with your actual screenshot */}
      <img
        src="https://via.placeholder.com/600x400.png?text=Product+Screenshot"
        alt="Product Screenshot"
        style={{ maxWidth: '100%', height: 'auto', margin: '20px 0' }}
      />
      <div>
        {/* Replace with your actual App Store link */}
        <a
          href="https://www.apple.com/app-store/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download on the App Store
        </a>
      </div>
       {/* Add Google Play link if applicable */}
       {/*
       <div>
         <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
           Get it on Google Play
         </a>
       </div>
       */}
    </div>
  );
}

export default ProductPage;
