import React from 'react'

export default function Footer() {
  return (
    <div className="container">
        <footer className="py-3 my-4">
            <ul className="nav justify-content-center border-bottom pb-3 mb-3">
              <li>
                <a className="nav-link px-2 text-body-secondary" aria-current="page" href="/home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link px-2 text-body-secondary" aria-current="page" href="/blogs">
                  Blogs
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link px-2 text-body-secondary" aria-current="page" href="/categories">
                  Categories
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link px-2 text-body-secondary" aria-current="page" href="/about">
                  About
                </a>
              </li>
            </ul>
            <p className="text-center text-body-secondary">© 2024 Julian Krese</p>
        </footer>
    </div>
  );
}