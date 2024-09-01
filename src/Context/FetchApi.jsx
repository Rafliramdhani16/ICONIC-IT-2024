import React, { useEffect } from "react";

const ReportVisitor = () => {
  useEffect(() => {
    // Mengirim IP
    fetch("https://ipapi.co/json/")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.ip);
        discordMessage(
          2,
          "Seseorang mengunjungi website anda!",
          "LINK :\n" +
            window.location.href +
            "\nIP :\n" +
            data.ip +
            "\nKOTA :\n" +
            data.city +
            "\nISP :\n" +
            data.org +
            "\nDEVICE :\n" +
            navigator.userAgent
        );
      });
  }, []);

  const discordMessage = (kode, username, message) => {
    const params = new URLSearchParams({ username, message });
    let url = "";

    if (kode === 1) {
      url = "https://apiv2.bhadrikais.my.id/webhook.php?kode=1";
    } else if (kode === 2) {
      url = "https://apiv2.bhadrikais.my.id/webhook.php?kode=2";
    } else {
      url = "SORRY!";
    }

    if (url !== "SORRY!") {
      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        },
        body: params.toString(),
      })
        .then((response) => response.text())
        .then((data) => {
          console.log("Pesan terkirim: ", data);
        });
    }
  };

  return null;
};

export default ReportVisitor;
