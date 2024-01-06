import './globals.css'
import { Inter } from 'next/font/google'

import NavBar from './components/NavBar'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body>
        <div> {/*<!-- content wrapper-->*/}
        <div>
          <nav>
            <div>
              <h1>
                <a href="/">m7 gh</a>
              </h1>
            </div>
            <ul>
              <li>
                <a href="#">
                  <span> Home</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span> Rooms</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span> Getting Here</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span> Guides</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span> Home</span>
                </a>
              </li>

              <li>
                <a href="#">
                  <span> Book</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span> FAQ</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>Contact</span>
                </a>
              </li>

              
            </ul>


          </nav>
        </div>{/*<!-- end nav wrapper-->*/}

        <main>
          <div>
          <a href="#">Log in</a>
            <a href="#">Sign up</a>
          </div>

          <header>
            <h2> h2 header</h2>
            <h3> h3 header</h3>
          </header>

          <div>
            <h4>h4 header</h4>
            <div>
              {/* cards go here*/}

              <div>
                <img src="" alt =""/>
                  <div>
                    <span>card title</span>
                    <span> card text</span>
                  </div>
              </div>

            </div>

          </div>
        </main>


        </div>
        
        {children}</body>
    </html>
  )
}
