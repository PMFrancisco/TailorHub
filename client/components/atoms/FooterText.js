export const FooterText = () => {
  const date = new Date();
  const year = date.getFullYear();

  return ( <p className="font-sans text-base leading-6 text-black">
    Prueba técnica ©Tailor Hub SL 2019 – {year}
  </p>
);

}
