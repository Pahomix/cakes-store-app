import React from 'react';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';

export default function MainLayout({ children }) {
  return (
    <>
      <Header></Header>
      <main>{children}</main>
      <Footer />
    </>
  );
}
