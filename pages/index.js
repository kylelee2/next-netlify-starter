import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <head>
        <title>My Web Page</title>
      </head>

      <body>
        <header>
          <nav>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </nav>
        </header>

        <main>
          <!-- Add your main content here -->
        </main>

        <footer>https://github.com/kylelee2/next-netlify-starter/blob/main/pages/index.js
          <div class="contact-info">
            <h3>Contact Information</h3>
            <p>Phone: (123) 456-7890</p>
            <p>Email: info@mywebpage.com</p>
            <p>Address: 123 Main St, Anytown, USA 12345</p>
          </div>
          <div class="policy-agreement">
            <h3>Policy Agreement</h3>
            <p><a href="#">Terms of Service</a></p>
            <p><a href="#">Privacy Policy</a></p>
          </div>
          <div class="social-media">
            <h3>Follow Us</h3>
            <p><a href="#">Facebook</a></p>
            <p><a href="#">Twitter</a></p>
            <p><a href="#">Instagram</a></p>
          </div>
        </footer>

      </body>
    </div>
  )
}
